import type { Metadata } from 'next';
import CircleDetail from '../../components/circles/CircleDetail';
import { circleStaticParams, circleMetadata, circleJsonLd } from '../circleShared';

export function generateStaticParams() {
  return circleStaticParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return circleMetadata('cs', slug);
}

export default async function CirclePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const jsonLd = circleJsonLd('cs', slug);
  return (
    <>
      {jsonLd.map((obj, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }}
        />
      ))}
      <CircleDetail slug={slug} />
    </>
  );
}
