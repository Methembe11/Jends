import { notFound } from "next/navigation";
import BlogPostPage from "@/components/BlogPostPage";
import { blogPosts } from "@/lib/site";

const posts = blogPosts.filter((post) => post.href.startsWith("/2026/05/08/"));

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((entry) => entry.slug === slug);
  if (!post) notFound();
  return <BlogPostPage post={post} />;
}
