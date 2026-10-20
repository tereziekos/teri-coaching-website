import type { Metadata } from 'next';
import CircleDetail from '../../../components/circles/CircleDetail';
import { circleStaticParams, circleMetadata, circleJsonLd } from '../../../kruhy/circleShared';

export function generateStaticParams() {
  return circleStaticParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return circleMetadata('en', slug);
}

export default async function EnCirclePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const jsonLd = circleJsonLd('en', slug);
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
