"use client";

import { useEffect, useState } from "react";
import {
  ArrowLeft,
  Clock,
  User,
  Tag,
  Share2,
  BookmarkPlus,
  Eye,
} from "lucide-react";

interface Blog {
  id: string | number;
  title: string;
  excerpt: string;
  category: string;
  // Add other fields as needed
}

interface BlogDetailClientProps {
  blog: Blog;
  blogs: Blog[];
}

export default function BlogDetailClient({ blog, blogs }: BlogDetailClientProps) {
  const [relatedBlogs, setRelatedBlogs] = useState<Blog[]>([]);
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    if (blog) {
      const related = blogs
        .filter(
          (b) => b.category === blog.category && b.id !== blog.id
        )
        .slice(0, 3);

      setRelatedBlogs(related);
    }

    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setReadingProgress((scrollTop / docHeight) * 100);
    };

    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  }, [blog]);

  const handleShare = async () => {
    if (!blog) return;
    if (navigator.share) {
      await navigator.share({
        title: blog.title,
        text: blog.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div>
          <h2 className="text-xl font-bold">Blog not found</h2>
          <a href="/blog">Back to Blog</a>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* YOUR ENTIRE BLOG UI HERE — EXACTLY AS BEFORE */}
      {/* You can paste the full UI content here unchanged */}
    </div>
  );
}
