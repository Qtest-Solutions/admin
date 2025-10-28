"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { blogs } from "../../../data/blog";
import {
  ArrowLeft,
  Clock,
  User,
  Tag,
  Share2,
  BookmarkPlus,
  Eye,
} from "lucide-react";

// Define the Blog type
interface Blog {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
}

const BlogDetail = () => {
  const { slug } = useParams();
  // Fix: Change the type to allow Blog object or null
  const [blog, setBlog] = useState<Blog | null>(null);
  const [relatedBlogs, setRelatedBlogs] = useState<Blog[]>([]);
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const foundBlog = blogs.find((b) => b.slug === slug);
    // Fix: Handle undefined case properly
    setBlog(foundBlog || null);

    if (foundBlog) {
      const related = blogs
        .filter(
          (b) => b.category === foundBlog.category && b.id !== foundBlog.id
        )
        .slice(0, 3);
      setRelatedBlogs(related);
    }

    const updateReadingProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setReadingProgress(Math.min(100, Math.max(0, scrollPercent)));
    };

    window.addEventListener("scroll", updateReadingProgress);
    return () => window.removeEventListener("scroll", updateReadingProgress);
  }, [slug]);

  const handleShare = async () => {
    // Add null check for blog
    if (!blog) return;

    if (navigator.share) {
      try {
        await navigator.share({
          title: blog.title,
          text: blog.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        console.log("Error sharing:", err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  if (!blog) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 flex items-center justify-center">
        <div className="glass-professional border border-brand-sage-200/40 rounded-2xl p-6 text-center">
          <h2 className="text-xl font-bold text-brand-neutral-800 mb-2">
            Blog post not found
          </h2>
          <p className="text-brand-neutral-600 mb-4">
            The blog post you're looking for doesn't exist.
          </p>
          <a
            href="/blog"
            className="inline-flex items-center text-brand-sage-600 hover:text-brand-sage-700 font-medium transition-colors px-4 py-2 rounded-lg hover:bg-brand-sage-50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-sage">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-brand-neutral-200/30 z-50">
        <div
          className="h-full bg-gradient-to-r from-brand-sage-500 to-brand-lavender-600 transition-all duration-300 ease-out"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Back to Blog Button */}
      <div className="container mx-auto px-6 pt-8 pb-6">
        <a
          href="/blog"
          className="inline-flex items-center text-brand-sage-600 hover:text-brand-sage-700 font-medium transition-all duration-300 group px-4 py-2.5 rounded-lg hover:bg-brand-sage-50"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Blog
        </a>
      </div>

      {/* Article Header */}
      <article className="container mx-auto px-6 max-w-4xl pb-12">
        <header className="mb-10 text-center animate-fade-in-up">
          {/* Category Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs text-brand-sage-700 mb-6 font-medium bg-brand-sage-100">
            <Tag className="w-3 h-3" />
            {blog.category}
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-neutral-800 leading-tight mb-6">
            {blog.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-brand-neutral-600 mb-6">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span className="font-medium">{blog.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{blog.readTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              <span>
                {new Date(blog.publishDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <button
              onClick={handleShare}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-brand-neutral-700 hover:text-brand-sage-600 hover:bg-brand-sage-50 transition-all duration-300"
            >
              <Share2 className="w-4 h-4" />
              Share
            </button>

            <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-brand-neutral-700 hover:text-brand-sage-600 hover:bg-brand-sage-50 transition-all duration-300">
              <BookmarkPlus className="w-4 h-4" />
              Bookmark
            </button>
          </div>

          <div className="mt-4 flex justify-center">
            <div className="w-24 h-0.5 bg-gradient-to-r from-brand-sage-500 via-brand-lavender-500 to-brand-coral-500 rounded-full" />
          </div>
        </header>

        {/* Featured Image */}
        <div
          className="relative overflow-hidden rounded-xl mb-10 shadow-md animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-64 md:h-80 lg:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
        </div>

        {/* Article Content */}
        <div
          className="mb-10 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          {/* Content with proper formatting */}
          <div className="prose prose-lg max-w-none">
            <div className="text-brand-neutral-700 leading-relaxed">
              {blog.content.split("\n\n").map((paragraph, index) => {
                if (paragraph.startsWith("## ")) {
                  return (
                    <h2
                      key={index}
                      className="text-2xl font-bold text-brand-neutral-800 mt-10 mb-4 first:mt-0"
                    >
                      {paragraph.substring(3)}
                    </h2>
                  );
                } else if (paragraph.startsWith("### ")) {
                  return (
                    <h3
                      key={index}
                      className="text-xl font-semibold text-brand-neutral-800 mt-8 mb-3"
                    >
                      {paragraph.substring(4)}
                    </h3>
                  );
                } else if (paragraph.startsWith("- ")) {
                  return (
                    <ul key={index} className="my-5 pl-5">
                      {paragraph
                        .split("\n")
                        .filter((line) => line.startsWith("- "))
                        .map((item, i) => (
                          <li key={i} className="mb-2 pl-2">
                            {item.substring(2)}
                          </li>
                        ))}
                    </ul>
                  );
                } else if (
                  paragraph.startsWith("`") &&
                  paragraph.endsWith("`")
                ) {
                  return (
                    <code
                      key={index}
                      className="block bg-brand-sage-100/50 p-3 rounded-lg text-sm font-mono text-brand-sage-700 my-4 overflow-x-auto"
                    >
                      {paragraph.substring(1, paragraph.length - 1)}
                    </code>
                  );
                } else if (paragraph.trim() !== "") {
                  return (
                    <p
                      key={index}
                      className="mb-6 leading-7 text-brand-neutral-700"
                    >
                      {paragraph}
                    </p>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>

        {/* Tags */}
        <div
          className="mb-10 animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <h3 className="text-lg font-semibold text-brand-neutral-800 mb-4">
            Tags
          </h3>
          <div className="flex flex-wrap gap-2">
            {blog.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1.5 bg-brand-sage-100 text-brand-sage-700 text-sm font-medium rounded-lg border border-brand-sage-200 transition-colors cursor-pointer hover:bg-brand-sage-200"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Author Info */}
        <div
          className="mb-10 animate-fade-in-up"
          style={{ animationDelay: "0.8s" }}
        >
          <div className="p-6 rounded-xl bg-brand-sage-50 border border-brand-sage-200">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-gradient-to-r from-brand-sage-500 to-brand-lavender-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                {blog.author
                  .split(" ")
                  .map((name) => name[0])
                  .join("")}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-brand-neutral-800">
                  {blog.author}
                </h3>
                <p className="text-brand-neutral-600 text-sm">
                  Software Testing Expert
                </p>
                <p className="text-brand-neutral-500 text-sm mt-1">
                  Published on{" "}
                  {new Date(blog.publishDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        {relatedBlogs.length > 0 && (
          <div className="animate-fade-in-up" style={{ animationDelay: "1s" }}>
            <h3 className="text-xl font-semibold text-brand-neutral-800 mb-6">
              Related Articles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedBlogs.map((relatedBlog, index) => (
                <article
                  key={relatedBlog.id}
                  className="group rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-lg"
                >
                  <div className="relative overflow-hidden h-40">
                    <img
                      src={relatedBlog.image}
                      alt={relatedBlog.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <h4 className="text-sm font-semibold text-brand-neutral-800 mb-2 line-clamp-2 group-hover:text-brand-sage-600 transition-colors">
                      {relatedBlog.title}
                    </h4>
                    <p className="text-brand-neutral-600 text-xs leading-relaxed mb-3 line-clamp-2">
                      {relatedBlog.excerpt}
                    </p>
                    <a
                      href={`/blog/${relatedBlog.slug}`}
                      className="inline-flex items-center text-brand-sage-600 hover:text-brand-sage-700 font-medium text-xs transition-colors"
                    >
                      Read More
                      <ArrowLeft className="ml-1 w-3 h-3 rotate-180 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
};

export default BlogDetail;
