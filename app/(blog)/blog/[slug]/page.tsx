import Image from "next/image";
import { Suspense } from "react";
import BlogPostContent from "../../blogs/_components/BlogPostContent";
type BlogPageProps = {
  params: {
    slug: string;
  };
};
type BlogData = {
  status_code: number;
  id: string;
  title: string;
  slug: string;
  content: string;
  image_url: string;
  created_at: string;
  updated_at: string;
};

const BlogPage = async ({ params }: BlogPageProps) => {
  const slug = params.slug;
  const response = await fetch(`${process.env.API_URL}/blogs/${slug}`);
  const blogData: BlogData = await response.json();

  return (
    <div className="container mx-auto px-4 py-8">
      <Suspense fallback={<LoadingFallback />}>
        <BlogPostContent blogData={blogData} />
      </Suspense>
    </div>
  );
};

export default BlogPage;

function LoadingFallback() {
  return (
    <div className="animate-pulse">
      <div className="h-8 bg-gray-200 rounded w-1/2 mb-4"></div>
      <div className="h-64 bg-gray-200 rounded mb-4"></div>
      <div className="h-4 bg-gray-200 rounded mb-2"></div>
      <div className="h-4 bg-gray-200 rounded mb-2"></div>
      <div className="h-4 bg-gray-200 rounded"></div>
    </div>
  );
}
