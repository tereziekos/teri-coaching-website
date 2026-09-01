export default function BlogPostBody({ body }: { body: string }) {
  return <div className="blog-post-body" dangerouslySetInnerHTML={{ __html: body }} />;
}
