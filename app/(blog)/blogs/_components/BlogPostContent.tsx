import Image from "next/image";

type BlogPostContentProps = {
  blogData: {
    id: string;
    title: string;
    image_url: string;
    created_at: string;
    content: string;
    slug: string;
  };
};

export default function BlogPostContent({ blogData }: BlogPostContentProps) {
  return (
    <div>
      <div className="mb-8">
        <Image
          src={blogData.image_url}
          alt={blogData.slug}
          width={1200}
          height={506}
          className="w-full h-[400px] object-cover"
        />
      </div>
      <div className="container mx-auto px-4 max-w-6xl py-8">
        <h1 className="text-4xl font-bold mb-6 text-blue-600">
          {blogData.title}
        </h1>

        <article className="w-full max-w-none prose lg:prose-xl">
          {blogData.content}
        </article>
      </div>
    </div>
  );
}
