"use client";
import { useState, useEffect } from "react";
import {
  Clock,
  User,
  ArrowRight,
  Search,
  Tag,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { blogs } from "../data/blog"; // Import your blog data
import Link from "next/link";

const Blog = ({ home = false }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentSlide, setCurrentSlide] = useState(0);

  // Unique categories
  const categories = ["All", ...new Set(blogs.map((blog) => blog.category))];

  // Filtered blogs
  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesCategory =
      selectedCategory === "All" || blog.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Calculate number of slides needed for 3 posts per slide
  const slidesCount = Math.ceil(filteredBlogs.length / 3);

  // Auto slide every 5 seconds
  useEffect(() => {
    if (!home) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slidesCount - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [home, slidesCount]);

  // Carousel navigation
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slidesCount - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slidesCount - 1 : prev - 1));
  };

  // Group blogs into sets of 3 for the carousel
  const groupedBlogs = [];
  for (let i = 0; i < filteredBlogs.length; i += 3) {
    groupedBlogs.push(filteredBlogs.slice(i, i + 3));
  }

  return (
    <section id="blog" className="py-16 bg-gradient-sage relative">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs text-brand-sage-700 bg-brand-sage-100/50 font-medium">
            <Tag className="w-3 h-3" />
            Software Testing Insights
          </div>
          {!home && (
            <>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black leading-tight">
                Latest Blog Posts
              </h2>
              <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium mb-8">
                Explore practical guides, tips, and insights on{" "}
                <span className="text-brand-sage-600 font-semibold">
                  software testing
                </span>{" "}
                and quality assurance.
              </p>
            </>
          )}
        </div>

        {!home ? (
          // Full blog page with search and filters
          <>
            {/* Search + Filters */}
            <div className="mb-12 flex flex-col md:flex-row gap-4 items-center justify-between max-w-4xl mx-auto">
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-sage-500 text-sm"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-xs font-medium transition ${
                      selectedCategory === category
                        ? "bg-gradient-to-r from-brand-sage-500 to-brand-lavender-600 text-white shadow"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Blog Grid (2 per row) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredBlogs.map((blog, index) => (
                <article
                  key={blog.id}
                  className="p-6 rounded-2xl border border-gray-200 hover:border-brand-sage-400 
                         transition-all shadow-sm hover:shadow-md bg-white flex flex-col justify-between"
                >
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      <span>{blog.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{blog.readTime}</span>
                    </div>
                    <span>
                      {new Date(blog.publishDate).toLocaleDateString()}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {blog.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {blog.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-brand-sage-50 text-brand-sage-700 text-xs rounded-md"
                      >
                        #{tag}
                      </span>
                    ))}
                    {blog.tags.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-md">
                        +{blog.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Read More */}
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="inline-flex items-center text-brand-sage-600 hover:text-brand-sage-700 font-medium text-sm transition"
                  >
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </article>
              ))}
            </div>

            {/* Empty State */}
            {filteredBlogs.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  No articles found
                </h3>
                <p className="text-gray-500 text-sm">
                  Try adjusting your search terms or category filter.
                </p>
              </div>
            )}
          </>
        ) : (
          // Home page carousel view with 3 posts per slide
          <div className="relative max-w-6xl mx-auto">
            {/* Carousel Navigation */}
            <div className="flex justify-end mb-6 gap-2">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Previous blog post"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Next blog post"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Carousel Container */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {groupedBlogs.map((slideBlogs, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-2">
                      {slideBlogs.map((blog) => (
                        <article
                          key={blog.id}
                          className="p-5 rounded-xl border border-gray-200 bg-white flex flex-col justify-between h-full transition-all hover:shadow-md"
                        >
                          {/* Meta Info */}
                          <div className="flex items-center gap-3 text-xs text-gray-500 mb-3 flex-wrap">
                            <div className="flex items-center gap-1">
                              <User className="w-3 h-3" />
                              <span>{blog.author}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              <span>{blog.readTime}</span>
                            </div>
                          </div>

                          {/* Title */}
                          <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                            {blog.title}
                          </h3>

                          {/* Excerpt */}
                          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                            {blog.excerpt}
                          </p>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-1 mb-4">
                            {blog.tags.slice(0, 2).map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="px-2 py-1 bg-brand-sage-50 text-brand-sage-700 text-xs rounded-md"
                              >
                                #{tag}
                              </span>
                            ))}
                            {blog.tags.length > 2 && (
                              <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-md">
                                +{blog.tags.length - 2}
                              </span>
                            )}
                          </div>

                          {/* Read More */}
                          <Link
                            href={`/blog/${blog.slug}`}
                            className="inline-flex items-center text-brand-sage-600 hover:text-brand-sage-700 font-medium text-sm transition mt-auto"
                          >
                            Read More
                            <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </article>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-8 gap-2">
              {Array.from({ length: slidesCount }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide
                      ? "bg-brand-sage-600 w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
