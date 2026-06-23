import type { Metadata } from 'next';
import BlogPost from '../../../components/blog/BlogPost';
import { postStaticParams, postMetadata, postJsonLd } from '../../../blog/postShared';

export function generateStaticParams() {
  return postStaticParams('en');
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return postMetadata('en', slug);
}

export default async function EnPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const jsonLd = postJsonLd('en', slug);
  return (
    <>
      {jsonLd.map((obj, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }}
        />
      ))}
      <BlogPost slug={slug} />
    </>
  );
}
