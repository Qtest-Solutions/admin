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
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
  
  // Calculate slides per view based on screen size
  const slidesPerView = isMobile ? 1 : 2;
  const maxSlideIndex = Math.ceil(totalSlides / slidesPerView) - 1;

  // Auto slide for home page
  useEffect(() => {
    if (!home || !isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev >= maxSlideIndex ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [home, isAutoPlaying, maxSlideIndex]);

  // Carousel navigation
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= maxSlideIndex ? 0 : prev + 1));
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? maxSlideIndex : prev - 1));
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

  // Shared Blog Card Component
  const BlogCard = ({ blog, index }: { blog: Blog; index: number }) => {
    return (
      <article className="bg-white rounded-xl shadow-md overflow-hidden w-full border border-gray-100 hover:shadow-xl transition-all duration-300 group">
        {/* Image */}
        <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Category Badge */}
          <div className="absolute top-3 left-3">
            <span className="text-white text-[10px] sm:text-xs font-semibold bg-teal-500/90 backdrop-blur-sm px-2.5 py-1 rounded-full">
              {blog.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5 relative">
          {/* Date Badge */}
          <div className="absolute -top-5 right-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white px-3 py-1.5 rounded-full shadow-lg">
            <span className="text-[10px] sm:text-xs font-bold">
              {new Date(blog.publishDate).toLocaleDateString("en-US", {
                day: "2-digit",
                month: "short",
              })}
            </span>
          </div>

          {/* Meta Info */}
          <div className="flex items-center gap-3 sm:gap-4 text-[10px] sm:text-xs text-gray-500 mb-3 pt-1">
            <div className="flex items-center gap-1">
              <User className="w-3 h-3" />
              <span className="truncate max-w-[80px] sm:max-w-none">{blog.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{blog.readTime}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 leading-tight line-clamp-2 group-hover:text-teal-600 transition-colors">
            {blog.title}
          </h3>

          {/* Excerpt */}
          <p className="text-gray-600 text-xs sm:text-sm mb-4 leading-relaxed line-clamp-2">
            {blog.excerpt}
          </p>

          {/* Read More Button */}
          <Link
            href={`/blog/${blog.slug}`}
            className="inline-flex items-center gap-2 text-teal-600 font-semibold text-xs sm:text-sm hover:gap-3 transition-all duration-300 group/link"
          >
            READ MORE
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </article>
    );
  };

  // HOME PAGE VIEW - Responsive Carousel Design
  if (home) {
    return (
      <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden bg-transparent">
        {/* Badge */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs text-brand-sage-700 bg-brand-sage-100/50 font-medium">
            <Tag className="w-3 h-3" />
            Software Testing Insights
          </div>
        </div>

        {/* Decorative dotted lines - Hidden on mobile */}
        <div className="hidden md:block absolute left-1/4 top-20 w-24 h-24 border-2 border-dashed border-teal-200 rounded-lg opacity-40" />
        <div className="hidden md:block absolute right-1/4 bottom-20 w-24 h-24 border-2 border-dashed border-teal-200 rounded-lg opacity-40" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start">
              
              {/* Left Side - Dark Glassy Container */}
              <div className="w-full order-1 lg:order-1 lg:sticky lg:top-24">
                <div className="backdrop-blur-xl bg-gradient-to-br from-gray-900/95 to-gray-800/95 border border-gray-700/50 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 shadow-2xl shadow-black/30 relative overflow-hidden">
                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-transparent to-purple-500/10 opacity-20" />

                  {/* Content */}
                  <div className="relative z-10">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 sm:mb-5">
                      Expert Insights on Quality Assurance & Testing
                    </h2>

                    <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-5 sm:mb-6">
                      Stay updated with the latest testing strategies, QA best
                      practices, and industry insights from{" "}
                      <span className="font-semibold text-teal-400">
                        QTest Solutions
                      </span>
                      —your trusted partner in software quality excellence.
                    </p>

                    <Link
                      href="/blog"
                      className="group inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 rounded-full text-white font-semibold hover:shadow-xl hover:shadow-teal-500/50 hover:scale-105 transition-all duration-300 shadow-lg text-sm md:text-base"
                    >
                      Explore All Articles
                      <span className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform border border-white/30">
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      </span>
                    </Link>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -bottom-10 -right-10 w-32 sm:w-40 h-32 sm:h-40 bg-teal-500/20 rounded-full blur-3xl" />
                  <div className="absolute -top-10 -left-10 w-32 sm:w-40 h-32 sm:h-40 bg-purple-500/20 rounded-full blur-3xl" />
                </div>
              </div>

              {/* Right Side - Carousel */}
              <div className="w-full order-2 lg:order-2 relative">
                {/* Navigation Buttons - Positioned above carousel on mobile */}
                <div className="flex items-center justify-between mb-4 sm:mb-0 sm:absolute sm:-top-12 md:-top-14 sm:right-0 sm:left-auto sm:w-auto">
                  <span className="text-sm font-medium text-gray-600 sm:hidden">
                    {currentSlide + 1} / {maxSlideIndex + 1}
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={prevSlide}
                      className="p-2.5 sm:p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200/50 hover:bg-white active:scale-95"
                      aria-label="Previous blog"
                    >
                      <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="p-2.5 sm:p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200/50 hover:bg-white active:scale-95"
                      aria-label="Next blog"
                    >
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                    </button>
                  </div>
                </div>

                {/* Carousel Container */}
                <div className="relative overflow-hidden sm:pt-4">
                  <div
                    className="flex transition-transform duration-500 ease-out"
                    style={{
                      transform: `translateX(-${currentSlide * 100}%)`,
                    }}
                  >
                    {/* Mobile: 1 card per slide, Desktop: 2 cards per slide */}
                    {isMobile ? (
                      // Mobile view - 1 card per slide
                      carouselBlogs.map((blog, index) => (
                        <div
                          key={blog.id}
                          className="flex-shrink-0 w-full px-1"
                        >
                          <BlogCard blog={blog} index={index} />
                        </div>
                      ))
                    ) : (
                      // Desktop view - 2 cards per slide
                      Array.from({ length: Math.ceil(totalSlides / 2) }).map((_, slideIndex) => (
                        <div
                          key={slideIndex}
                          className="flex-shrink-0 w-full flex gap-4"
                        >
                          {carouselBlogs
                            .slice(slideIndex * 2, slideIndex * 2 + 2)
                            .map((blog, index) => (
                              <div key={blog.id} className="flex-1 min-w-0">
                                <BlogCard blog={blog} index={slideIndex * 2 + index} />
                              </div>
                            ))}
                        </div>
                      ))
                    )}
                  </div>
                </div>

                {/* Carousel Indicators */}
                <div className="flex justify-center gap-2 mt-5 sm:mt-6">
                  {Array.from({ length: maxSlideIndex + 1 }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`transition-all duration-300 rounded-full ${
                        index === currentSlide
                          ? "w-8 sm:w-10 h-2.5 bg-gradient-to-r from-teal-500 to-teal-600"
                          : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                {/* View All Link - Mobile Only */}
                <div className="mt-6 text-center sm:hidden">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-teal-600 font-semibold text-sm"
                  >
                    View All Articles
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // FULL BLOG PAGE VIEW - Grid with Search & Filters
  return (
    <section id="blog" className="py-12 sm:py-16 bg-transparent relative">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs text-brand-sage-700 bg-brand-sage-100/50 font-medium">
            <Tag className="w-3 h-3" />
            Software Testing Insights
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-black leading-tight mt-4">
            Latest Blog Posts
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium mb-6 sm:mb-8 px-4">
            Explore practical guides, tips, and insights on{" "}
            <span className="text-brand-sage-600 font-semibold">
              software testing
            </span>{" "}
            and quality assurance.
          </p>
        </div>

        {/* Search + Filters */}
        <div className="mb-8 sm:mb-12 flex flex-col gap-4 max-w-4xl mx-auto">
          {/* Search Input */}
          <div className="relative w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-10 py-3 sm:py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-sage-500 focus:border-brand-sage-500 text-sm transition-all"
            />
            {searchTerm && (
              <button
                onClick={clearSearch}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors p-1"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 items-center justify-center sm:justify-start">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 sm:px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-brand-sage-500 to-brand-lavender-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
            {(searchTerm || selectedCategory !== "All") && (
              <button
                onClick={resetFilters}
                className="px-3 sm:px-4 py-2 rounded-full text-xs font-medium bg-red-50 text-red-600 hover:bg-red-100 transition flex items-center gap-1"
              >
                <X className="w-3 h-3" />
                Reset
              </button>
            )}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {filteredBlogs.map((blog, index) => (
            <div key={blog.id}>
              <BlogCard blog={blog} index={index} />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredBlogs.length === 0 && (
          <div className="text-center py-12 sm:py-16">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              No articles found
            </h3>
            <p className="text-gray-500 text-sm mb-4 px-4">
              Try adjusting your search terms or category filter.
            </p>
            <button
              onClick={resetFilters}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-sage-600 text-white rounded-lg hover:bg-brand-sage-700 transition text-sm font-medium"
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