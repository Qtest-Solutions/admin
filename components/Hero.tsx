"use client";

import React, { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useRouter } from "next/navigation";

interface Banner {
  title: string;
  highlight: string;
  desc: string;
  primary: string;
  accent: string;
}

const banners: Banner[] = [
  {
    title: "Qtest Software",
    highlight: "Qtest Software Solutions LLP",
    desc: "Empowering startups with professional software testing services and training the next generation of quality assurance professionals.",
    primary: "Contact us",
    accent: "text-sky-400",
  },
  // {
  //   title: "Software Testing Solutions",
  //   highlight: "Advanced Outcome Predictions",
  //   desc: "End-to-end testing solutions with predictive analytics that identify system behaviors, performance issues, and potential failures before user impact.",
  //   primary: "Discover Solutions",
  //   accent: "text-emerald-400",
  // },
  // {
  //   title: "CAE Application Testing",
  //   highlight: "Smart Testing Solutions",
  //   desc: "Intelligent CAE testing platform using machine learning to predict simulation accuracy, identify computational errors, and optimize engineering workflows.",
  //   primary: "Get a Demo",
  //   accent: "text-violet-400",
  // },
];

// Light modern gradient backgrounds
const modernGradients = [
  "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #bae6fd 100%)", // Light sky blue
  "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%)", // Light slate
  "linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 50%, #99f6e4 100%)", // Light teal
  "linear-gradient(135deg, #faf5ff 0%, #f3e8ff 50%, #e9d5ff 100%)", // Light lavender
];

export default function HeroSlider() {
  const router = useRouter();

  const [index, setIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLElement | null>(null);
  const startX = useRef<number>(0);
  const reduced = useReducedMotion();

  const slideCount = banners.length;
  const isSingleSlide = slideCount <= 1;
  const AUTOPLAY_MS = 2000;

  // Smooth scroll to services section
  const scrollToServices = () => {
    router.push("/contact");
  };

  // Get modern gradient based on index
  const getGradient = (slideIndex: number) => {
    return modernGradients[slideIndex % modernGradients.length];
  };

  // autoplay effect - only run if multiple slides
  useEffect(() => {
    if (reduced || isSingleSlide) return;
    if (isPaused) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(() => {
      setIndex((p) => (p + 1) % slideCount);
    }, AUTOPLAY_MS);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, slideCount, reduced, isSingleSlide]);

  // Pause handlers - only for multiple slides
  const handleMouseEnter = () => !isSingleSlide && setIsPaused(true);
  const handleMouseLeave = () => !isSingleSlide && setIsPaused(false);
  const handleFocusIn = () => !isSingleSlide && setIsPaused(true);
  const handleFocusOut = () => !isSingleSlide && setIsPaused(false);

  // Keyboard nav - only for multiple slides
  useEffect(() => {
    if (isSingleSlide) return;

    const el = containerRef.current;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft")
        setIndex((p) => (p - 1 + slideCount) % slideCount);
      if (e.key === "ArrowRight") setIndex((p) => (p + 1) % slideCount);
    };
    el.addEventListener("keydown", onKey);
    return () => el.removeEventListener("keydown", onKey);
  }, [slideCount, isSingleSlide]);

  // Touch gestures - only for multiple slides
  const onTouchStart = (e: React.TouchEvent) => {
    if (isSingleSlide) return;
    startX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (isSingleSlide) return;
    const endX = e.changedTouches[0].clientX;
    const diff = endX - startX.current;
    const threshold = 40;
    if (Math.abs(diff) > threshold) {
      if (diff > 0) setIndex((p) => (p - 1 + slideCount) % slideCount);
      else setIndex((p) => (p + 1) % slideCount);
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const textVariants = (delay = 0.05) => ({
    hidden: { opacity: 0, y: 6 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, delay } },
  });

  return (
    <section
      id="home"
      ref={containerRef}
      className={`relative h-screen w-full overflow-hidden ${
        isSingleSlide ? "static-hero" : "carousel-hero"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocusIn}
      onBlur={handleFocusOut}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      tabIndex={isSingleSlide ? -1 : 0}
      aria-roledescription={isSingleSlide ? undefined : "carousel"}
      aria-label={isSingleSlide ? "Hero section" : "Hero slider"}
    >
      {/* Breadcrumb structured data for sitelinks */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://qtestsolutions.com/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Services",
                item: "https://qtestsolutions.com/services",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "About",
                item: "https://qtestsolutions.com/about",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Training",
                item: "https://qtestsolutions.com/training",
              },
              {
                "@type": "ListItem",
                position: 5,
                name: "Blog",
                item: "https://qtestsolutions.com/blog",
              },
              {
                "@type": "ListItem",
                position: 6,
                name: "Contact",
                item: "https://qtestsolutions.com/contact",
              },
            ],
          }),
        }}
      />

      {/* Light modern gradient backgrounds */}
      <div className="absolute inset-0">
        {banners.map((_, i) => (
          <div
            key={i}
            className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            style={{ background: getGradient(i) }}
          />
        ))}
      </div>

      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5" />

      {/* Content centered */}
      <div className="relative z-10 h-full flex items-center justify-center mt-[80px]">
        <div className="container mx-auto px-6 h-full flex items-center justify-center">
          <div className="flex flex-col justify-center items-center space-y-6 lg:space-y-8 max-w-2xl text-center">
            <motion.div
              initial={reduced ? "show" : "hidden"}
              animate="show"
              variants={headerVariants}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 pt-4">
                {banners[index].highlight}
              </h1>
              <div className="w-20 h-1 bg-gray-700/30 rounded-full mt-4 mx-auto" />
            </motion.div>

            <motion.p
              initial={reduced ? "show" : "hidden"}
              animate="show"
              variants={textVariants(0.08)}
              className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-lg"
            >
              {banners[index].desc}
            </motion.p>

            {/* CTA button with scroll functionality */}
            <motion.div
              className="pt-6"
              initial={reduced ? "show" : "hidden"}
              animate="show"
              variants={textVariants(0.12)}
            >
              <button
                onClick={scrollToServices}
                className="group relative px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold rounded-full transition-all duration-500 flex items-center gap-3 shadow-lg hover:shadow-blue-500/25 hover:scale-105 text-base overflow-hidden border border-white/20 backdrop-blur-sm"
                aria-label="Contact us - Go to contact page"
              >
                <span className="relative z-10">{banners[index].primary}</span>
                <div className="relative z-10 w-7 h-7 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 group-hover:rotate-45">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-all duration-300" />
                </div>
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Slider controls - only show if multiple slides */}
      {!isSingleSlide && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-md px-3 py-2 rounded-full border border-gray-200">
            {banners.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`transition-all duration-500 rounded-full ${
                  i === index
                    ? "w-6 h-2 bg-gray-900 scale-110 shadow-lg"
                    : "w-2 h-2 bg-gray-500 hover:bg-gray-700"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
