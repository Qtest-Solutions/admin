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
  X,
} from "lucide-react";
import { blogs } from "../data/blog";
import Link from "next/link";

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

interface BlogProps {
  home?: boolean;
}

const Blog = ({ home = false }: BlogProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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

  // For home page carousel
  const carouselBlogs = blogs.slice(0, 6);
  const totalSlides = carouselBlogs.length;

  // Auto slide for home page
  useEffect(() => {
    if (!home || !isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [home, isAutoPlaying, totalSlides]);

  // Carousel navigation
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  // Clear search
  const clearSearch = () => {
    setSearchTerm("");
  };

  // Reset all filters
  const resetFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All");
  };

  // Color mapping for carousel cards
  const getCategoryColor = (category: string): string => {
    const colorMap: Record<string, string> = {
      "Manual Testing": "from-blue-200 to-blue-300",
      "Automation Testing": "from-purple-200 to-purple-300",
      "Performance Testing": "from-pink-200 to-pink-300",
      "API Testing": "from-teal-200 to-teal-300",
      "Mobile Testing": "from-green-200 to-green-300",
      "Testing Strategy": "from-yellow-200 to-yellow-300",
    };
    return colorMap[category] || "from-gray-200 to-gray-300";
  };

  // Shared Blog Card Component
  const BlogCard = ({ blog, index }: { blog: Blog; index: number }) => {
    const colorGradient = getCategoryColor(blog.category);

    return (
      <article className="bg-white rounded-xl md:rounded-2xl shadow-2xl overflow-hidden max-w-[320px] md:max-w-sm mx-auto border border-gray-100 hover:shadow-3xl transition-all duration-300">
        {/* Image - Clean without overlay */}
        <div className="relative h-40 md:h-48 overflow-hidden">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
          {/* <div className="absolute top-3 left-3">
            <span className="text-white text-[10px] md:text-xs font-semibold bg-black/50 backdrop-blur-sm px-2 md:px-3 py-1 rounded-full border border-white/30">
              QTest Solutions
            </span>
          </div> */}
        </div>

        {/* Content */}
        <div className="p-4 md:p-5 relative">
          {/* Date Badge */}
          <div className="absolute -top-4 right-4 md:right-5 bg-teal-400 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full shadow-lg">
            <span className="text-[10px] md:text-xs font-bold">
              {new Date(blog.publishDate).toLocaleDateString("en-US", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </span>
          </div>

          {/* Meta Info */}
          <div className="flex items-center gap-3 text-[10px] md:text-xs text-gray-500 mb-2 pt-1">
            <div className="flex items-center gap-1">
              <User className="w-3 h-3" />
              <span>{blog.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{blog.readTime}</span>
            </div>
          </div>

          {/* Category */}
          <div className="mb-2">
            <span className="text-gray-700 text-xs md:text-sm font-semibold">
              {blog.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 leading-tight line-clamp-2">
            {blog.title}
          </h3>

          {/* Excerpt */}
          <p className="text-gray-600 text-xs md:text-sm mb-4 leading-relaxed line-clamp-2">
            {blog.excerpt}
          </p>

          {/* Read More Button */}
          <Link
            href={`/blog/${blog.slug}`}
            className="inline-flex items-center gap-2 text-teal-500 font-semibold text-xs md:text-sm hover:gap-3 transition-all duration-300 group"
          >
            READ MORE
            <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </article>
    );
  };

  // HOME PAGE VIEW - New Carousel Design
  if (home) {
    return (
      <section className="py-16 md:py-20 relative overflow-hidden bg-transparent">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs text-brand-sage-700 bg-brand-sage-100/50 font-medium">
            <Tag className="w-3 h-3" />
            Software Testing Insights
          </div>
        </div>
        {/* Decorative dotted lines */}
        <div className="absolute left-1/4 top-20 w-24 h-24 border-2 border-dashed border-teal-200 rounded-lg opacity-40" />
        <div className="absolute right-1/4 bottom-20 w-24 h-24 border-2 border-dashed border-teal-200 rounded-lg opacity-40" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              {/* Left Side - Dark Glassy Container */}
              <div className="space-y-5 lg:sticky lg:top-24">
                {/* Dark Glassy Container */}
                <div className="backdrop-blur-xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-gray-700/50 rounded-3xl p-6 md:p-8 shadow-2xl shadow-black/30 relative overflow-hidden">
                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-transparent to-purple-500/10 opacity-10" />

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="inline-block mb-4">
                      {/* <span className="text-red-400 text-xs md:text-sm font-bold tracking-wider uppercase bg-red-500/20 px-3 py-1.5 rounded-full border border-red-400/30 backdrop-blur-sm">
                        LATEST UPDATES
                      </span> */}
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
                      Expert Insights on Quality Assurance & Testing
                    </h2>

                    <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                      Stay updated with the latest testing strategies, QA best
                      practices, and industry insights from{" "}
                      <span className="font-semibold text-teal-400">
                        QTest Solutions
                      </span>
                      —your trusted partner in software quality excellence.
                    </p>

                    <Link
                      href="/blog"
                      className="group inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 rounded-full text-white font-semibold hover:shadow-xl hover:shadow-teal-500/50 hover:scale-105 transition-all duration-300 shadow-lg text-sm md:text-base"
                    >
                      Explore More
                      <span className="w-7 h-7 md:w-8 md:h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform border border-white/30">
                        <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-white" />
                      </span>
                    </Link>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-teal-500/20 rounded-full blur-3xl" />
                  <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl" />
                </div>
              </div>

              {/* Right Side - Carousel */}
              <div className="relative mt-8 lg:mt-0">
                {/* Navigation Buttons */}
                <div className="absolute -top-12 md:-top-14 right-0 flex gap-2 z-20">
                  <button
                    onClick={prevSlide}
                    className="p-2 md:p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-white/40 hover:bg-white"
                    aria-label="Previous blog"
                  >
                    <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-gray-700" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="p-2 md:p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-white/40 hover:bg-white"
                    aria-label="Next blog"
                  >
                    <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-gray-700" />
                  </button>
                </div>

                {/* Carousel Container */}
                <div className="relative overflow-visible pt-4">
                  <div className="flex transition-transform duration-700 ease-in-out">
                    {carouselBlogs.map((blog, index) => {
                      const position =
                        (index - currentSlide + totalSlides) % totalSlides;

                      let transform = "translateX(0%) scale(1)";
                      let opacity = 0;
                      let zIndex = 0;

                      if (position === 0) {
                        transform = "translateX(0%) scale(1)";
                        opacity = 1;
                        zIndex = 30;
                      } else if (position === 1) {
                        transform = "translateX(70%) scale(0.8)";
                        opacity = 0.5;
                        zIndex = 20;
                      } else if (position === totalSlides - 1) {
                        transform = "translateX(-70%) scale(0.8)";
                        opacity = 0.3;
                        zIndex = 10;
                      } else {
                        transform = "translateX(100%) scale(0.7)";
                        opacity = 0;
                        zIndex = 0;
                      }

                      return (
                        <div
                          key={blog.id}
                          className="absolute w-full transition-all duration-700 ease-in-out"
                          style={{
                            transform,
                            opacity,
                            zIndex,
                          }}
                        >
                          <BlogCard blog={blog} index={index} />
                        </div>
                      );
                    })}
                  </div>

                  {/* Spacer to maintain height */}
                  <div className="h-[420px] md:h-[480px]" />
                </div>

                {/* Carousel Indicators */}
                <div className="flex justify-center gap-2 mt-6 md:mt-8">
                  {carouselBlogs.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`transition-all duration-300 rounded-full ${
                        index === currentSlide
                          ? "w-6 md:w-8 h-2 bg-teal-500"
                          : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // FULL BLOG PAGE VIEW - Grid with Search & Filters (Same Blog Card Design)
  return (
    <section id="blog" className="py-16 bg-transparent relative">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs text-brand-sage-700 bg-brand-sage-100/50 font-medium">
            <Tag className="w-3 h-3" />
            Software Testing Insights
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black leading-tight mt-4">
            Latest Blog Posts
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium mb-8">
            Explore practical guides, tips, and insights on{" "}
            <span className="text-brand-sage-600 font-semibold">
              software testing
            </span>{" "}
            and quality assurance.
          </p>
        </div>

        {/* Search + Filters */}
        <div className="mb-12 flex flex-col md:flex-row gap-4 items-center justify-between max-w-4xl mx-auto">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-10 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-sage-500 text-sm"
            />
            {searchTerm && (
              <button
                onClick={clearSearch}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-2 items-center">
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
            {(searchTerm || selectedCategory !== "All") && (
              <button
                onClick={resetFilters}
                className="px-4 py-2 rounded-full text-xs font-medium bg-red-50 text-red-600 hover:bg-red-100 transition flex items-center gap-1"
              >
                <X className="w-3 h-3" />
                Reset All
              </button>
            )}
          </div>
        </div>

        {/* Blog Grid - Using Same Card Design (3 per row) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredBlogs.map((blog, index) => (
            <div key={blog.id}>
              <BlogCard blog={blog} index={index} />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredBlogs.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              No articles found
            </h3>
            <p className="text-gray-500 text-sm mb-4">
              Try adjusting your search terms or category filter.
            </p>
            <button
              onClick={resetFilters}
              className="inline-flex items-center gap-2 px-4 py-2 bg-brand-sage-600 text-white rounded-lg hover:bg-brand-sage-700 transition text-sm font-medium"
            >
              <X className="w-4 h-4" />
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
