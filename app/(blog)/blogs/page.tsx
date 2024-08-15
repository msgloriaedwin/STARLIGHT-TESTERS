import BlogCard from "./_components/BlogCard";

interface BlogPost {
  id: string;
  title: string;
  image_url: string;
  created_at: string;
  content: string;
  slug: string;
}

async function fetchBlogs(): Promise<BlogPost[]> {
  const response = await fetch(`${process.env.API_URL}/blogs`);
  const { data } = await response.json();
  return data;
}

function calculateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const wordCount = content.split(" ").length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} minute${minutes > 1 ? "s" : ""} read`;
}

const formatTimestamp = (dateString: string) => {
  const createdAt: Date = new Date(dateString);
  const now: Date = new Date();

  const diffInMs: number = now.getTime() - createdAt.getTime();
  const diffInHours: number = Math.floor(diffInMs / (1000 * 60 * 60));
  const diffInDays: number = Math.floor(diffInHours / 24);

  if (diffInDays > 0) {
    return `${diffInDays} days ago`;
  } else if (diffInHours > 0) {
    return `${diffInHours} hrs ago`;
  } else {
    const diffInMinutes: number = Math.floor(diffInMs / (1000 * 60));
    return `${diffInMinutes} mins ago`;
  }
};

const generateExcerpt = (content: string, maxLength: number = 150): string => {
  if (content.length <= maxLength) {
    return content;
  }

  const truncated = content.slice(0, maxLength);
  const lastSpaceIndex = truncated.lastIndexOf(" ");

  return lastSpaceIndex > 0
    ? truncated.slice(0, lastSpaceIndex) + "..."
    : truncated + "...";
};

const BlogLayout = async () => {
  const blogs = await fetchBlogs();
  const featuredPost = blogs[1];
  const otherPosts = blogs.slice(3);

  return (
    <div className="container max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-blue-500 mb-8">Blogs</h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="md:col-span-2 flex flex-col">
          <BlogCard
            title={featuredPost.title}
            image={featuredPost.image_url}
            timestamp={formatTimestamp(featuredPost.created_at)}
            readTime={calculateReadTime(featuredPost.content)}
            showDetails={true}
            isFeatured={true}
            slug={featuredPost.slug}
            excerpt={generateExcerpt(featuredPost.content, 200)}
          />
        </div>

        {otherPosts.map((post) => (
          <div key={post.id} className="flex flex-col">
            <BlogCard
              title={post.title}
              image={post.image_url}
              slug={post.slug}
              excerpt={generateExcerpt(post.content)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogLayout;
