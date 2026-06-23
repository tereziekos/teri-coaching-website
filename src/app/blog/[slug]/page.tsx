import type { Metadata } from 'next';
import { posts } from '../../content/posts';
import BlogPost from '../../components/blog/BlogPost';

export function generateStaticParams() {
  return posts.cs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.cs.find((p) => p.slug === slug);
  return {
    title: post ? (post.seoTitle ?? `${post.title} · terezie alder`) : 'blog · terezie alder',
    description: post?.seoDescription ?? post?.excerpt,
    alternates: { canonical: `https://tereziealder.cz/blog/${slug}` },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.cs.find((p) => p.slug === slug);
  const jsonLd = post
    ? {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.seoTitle ?? post.title,
        description: post.seoDescription ?? post.excerpt,
        datePublished: post.date,
        image: post.image ? `https://tereziealder.cz${post.image}` : undefined,
        author: { '@type': 'Person', name: 'Terezie Alder' },
        publisher: { '@type': 'Person', name: 'Terezie Alder' },
        mainEntityOfPage: `https://tereziealder.cz/blog/${slug}`,
        inLanguage: ['cs', 'en'],
      }
    : null;
  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <BlogPost slug={slug} />
    </>
  );
}
