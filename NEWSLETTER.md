# Newsletter (Listmonk, vlastní hosting)

Jak to do sebe zapadá:

```
návštěvnice ──► tereziealder.cz (formulář) ──► nginx /_n/subscribe ──► Listmonk ──► PostgreSQL
                                                                          │
Terezie ──► newsletter.tereziealder.cz (admin: psaní a odesílání)        └──► Brevo (SMTP) ──► schránky
```

- **Web** (`src/app/components/Newsletter.tsx`) pošle e-mail na `/_n/subscribe` na stejné doméně.
- **nginx** (`nginx.conf`) ho přepošle do Listmonku. Přijímá jen POST a omezuje počet přihlášek z jedné adresy.
- **Listmonk** (`chart-newsletter/`) ukládá odběratelky do Postgresu, posílá potvrzovací e-mail (double opt-in) a newslettery.
- **Brevo** e-maily jen doručuje.
- Každou noc se dělá záloha databáze (`listmonk-backup` CronJob, uchovává se 14 dní).

## 1. Nasazení (jednou)

```sh
# heslo k databázi a heslo do adminu – vygenerovat a uložit do správce hesel
kubectl -n apps create secret generic listmonk \
  --from-literal=postgres-password="$(openssl rand -base64 24)" \
  --from-literal=admin-password="<heslo pro Terezii>"

helm upgrade --install newsletter ./chart-newsletter -n apps
```

DNS: záznam `newsletter.tereziealder.cz` musí mířit na cluster (stejně jako `tereziealder.cz`).

Pak nasadit web jako obvykle. Nová verze `nginx.conf` je potřeba kvůli `/_n/subscribe`.

> Pozor: nginx hledá Listmonk na `listmonk.apps.svc.cluster.local`. Pokud se chart instaluje
> do jiného namespace než `apps`, je potřeba upravit adresu v `nginx.conf`.

## 2. Odesílání přes Brevo (jednou)

1. Založit účet na brevo.com.
2. **Senders, Domains & Dedicated IPs → Domains → Add domain** `tereziealder.cz`. Brevo vypíše
   DNS záznamy (DKIM, ověřovací TXT a DMARC). Ty přidat u registrátora domény.
3. **SMTP & API → SMTP**: zkopírovat přihlašovací jméno a vygenerovat SMTP klíč.

## 3. Nastavení Listmonku (jednou, v prohlížeči)

Přihlásit se na https://newsletter.tereziealder.cz.

**Settings → General**
- Root URL: `https://newsletter.tereziealder.cz`
- Default „from“ e-mail: `Terezie Alder <newsletter@tereziealder.cz>` (doména ověřená v Brevu)
- **Enable public subscription page: zapnout.** Bez toho formulář na webu nefunguje.

**Settings → SMTP** (smazat výchozí localhost a přidat):
- Host `smtp-relay.brevo.com`, port `587`, TLS `STARTTLS`
- Auth: `login`, jméno a klíč z Brevo
- Tlačítkem „Test connection“ ověřit, že spojení funguje.

**Settings → Privacy**
- Individual subscriber tracking: podle uvážení (vypnuté = šetrnější k soukromí)
- Allow unsubscribe / Allow preferences: zapnout

**Settings → Appearance → Public → CSS**: vložit obsah `chart-newsletter/listmonk-public.css`.
Potvrzovací a odhlašovací stránky pak vypadají jako web.

**Lists → New**, dvakrát:
| Název | Type | Opt-in |
|---|---|---|
| Newsletter CZ | **Public** | **Double** |
| Newsletter EN | **Public** | **Double** |

U každého seznamu zkopírovat **UUID** do `src/app/content/newsletter.ts` (`NEWSLETTER_LISTS`)
a web znovu nasadit. Seznam musí být *Public*, jinak ho veřejné API odmítne.

## 4. Vyzkoušet

1. Na webu se přihlásit vlastním e-mailem a zkontrolovat, že přišel potvrzovací e-mail a nepadl do spamu.
2. Kliknout na potvrzení. Odběratelka se v Listmonku ukáže jako *Confirmed*.
3. Poslat si testovací kampaň.
4. Rozeslaný e-mail ověřit na https://www.mail-tester.com, cílem je skóre aspoň 9/10.

## Přidávání odběratelek ručně

Platí jen pro ty, které **výslovně souhlasily** (např. zaškrtly políčko ve formuláři nebo souhlas daly na kruhu):

- jednotlivě: **Subscribers → New**, vybrat seznam
- hromadně: **Subscribers → Import**, CSV se sloupci `email,name`

Do formulářů na webu jde přidat zaškrtávátko „pošlete mi i newsletter“ – komponenta
`NewsletterConsent` + funkce `subscribeToNewsletter()` (návod je v komentáři v
`src/app/components/NewsletterConsent.tsx`). Políčko musí být ve výchozím stavu nezaškrtnuté.

## Zálohy

Zálohy jsou ve volume `listmonk-backups` (soubory `listmonk-RRRR-MM-DD.sql.gz`). Chrání před
chybou v aplikaci, ne před ztrátou serveru, takže je dobré je občas zkopírovat jinam:

```sh
# čerstvá záloha rovnou na vlastní počítač
kubectl -n apps exec listmonk-db-0 -- pg_dump -U listmonk listmonk | gzip > listmonk-$(date +%F).sql.gz
```

Obnova: `gunzip -c listmonk-…sql.gz | kubectl -n apps exec -i listmonk-db-0 -- psql -U listmonk listmonk`

## Aktualizace

Změnit `listmonk.image` ve `values.yaml` na novou verzi a spustit `helm upgrade`. Migrace databáze
proběhnou samy při startu. Před větší aktualizací je dobré udělat zálohu.
