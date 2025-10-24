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

export default function HeroSlider() {
  const [index, setIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLElement | null>(null);
  const startX = useRef<number>(0);
  const reduced = useReducedMotion();
  const router = useRouter();

  const slideCount = banners.length;
  const isSingleSlide = slideCount <= 1;
  const AUTOPLAY_MS = 2000;

  // Navigate to contact page
  const navigateToContact = () => {
    router.push("/contact");
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
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/herobg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content centered */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-6 h-full flex items-center justify-center">
          <div className="flex flex-col justify-center items-center space-y-6 lg:space-y-8 max-w-2xl mt-[100px] text-center">
            <motion.div
              initial={reduced ? "show" : "hidden"}
              animate="show"
              variants={headerVariants}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white pt-4">
                {banners[index].highlight}
              </h1>
              <div className="w-20 h-1 bg-white/50 rounded-full mt-4 mx-auto" />
            </motion.div>

            <motion.p
              initial={reduced ? "show" : "hidden"}
              animate="show"
              variants={textVariants(0.08)}
              className="text-lg md:text-xl text-white leading-relaxed max-w-lg"
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
                onClick={navigateToContact}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-white font-semibold rounded-full transition-all duration-500 flex items-center gap-3 shadow-lg hover:shadow-blue-500/25 hover:scale-105 text-base overflow-hidden border border-white/20 backdrop-blur-sm"
                aria-label={`${banners[index].primary} - Navigate to contact page`}
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
