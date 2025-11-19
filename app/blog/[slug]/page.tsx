import { Metadata } from "next";
import { blogs } from "../../../data/blog";
import BlogDetailClient from "../../../components/blogdetails";
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) {
    return {
      title: "Blog Not Found - QTest Solutions",
      description: "This blog post does not exist.",
      alternates: {
        canonical: `https://www.qtestsolutions.com/log/${params.slug}`,
      },
    };
  }

  return {
    title: `${blog.title} - QTest Solutions Blog`,
    description: blog.excerpt,
    alternates: {
      canonical: `https://www.qtestsolutions.com/log/${blog.slug}`,
    },
    openGraph: {
      title: `${blog.title} - QTest Solutions Blog`,
      description: blog.excerpt,
      url: `https://www.qtestsolutions.com/log/${blog.slug}`,
      type: "article",
      images: [
        {
          url: blog.image,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
  };
}

interface BlogPageParams {
  params: {
    slug: string;
  };
}

export default function BlogPage({ params }: BlogPageParams) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) {
    // You can customize this fallback UI as needed
    return <div>Blog not found.</div>;
  }

  return <BlogDetailClient blog={blog} blogs={blogs} />;
}
