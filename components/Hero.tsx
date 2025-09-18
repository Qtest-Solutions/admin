"use client";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const banners = [
  {
    title: "Qtest Software",
    highlight: "Advanced Quality Assurance",
    desc: "Advanced AI-powered testing solutions that predict performance metrics, defect progression, and resource optimization for superior quality assurance.",
    primary: "Learn More",
    secondary: "How It Works",
    accent: "text-sky-400",
    image: "https://picsum.photos/id/1015/1920/1080",
    subBenefits: ["AI-Powered Analysis", "Predictive Testing"],
  },
  {
    title: "Software Testing Solutions",
    highlight: "Advanced Outcome Predictions",
    desc: "End-to-end testing solutions with predictive analytics that identify system behaviors, performance issues, and potential failures before user impact.",
    primary: "Discover Solutions",
    secondary: "How It Works",
    accent: "text-emerald-400",
    image: "https://picsum.photos/id/1016/1920/1080",
    subBenefits: ["Performance Prediction", "Failure Prevention"],
  },
  {
    title: "CAE Application Testing",
    highlight: "Smart Testing Solutions",
    desc: "Intelligent CAE testing platform using machine learning to predict simulation accuracy, identify computational errors, and optimize engineering workflows.",
    primary: "Get a Demo",
    secondary: "Learn More",
    accent: "text-violet-400",
    image: "https://picsum.photos/id/1018/1920/1080",
    subBenefits: ["ML-Driven Accuracy", "Resource Optimization"],
  },
];

const HeroSlider = () => {
  const [index, setIndex] = useState(0);

  // Auto-slide every 6s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative h-[70vh] w-full overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-professional" />

      {/* Split Layout Content */}
      <div className="relative z-10 h-full">
        <div className="container mx-auto px-6 h-full">
          <div className="grid lg:grid-cols-2 gap-4 lg:gap-6 h-full items-center">
            {/* Left Side - Banner Image */}
            <div className="flex items-center justify-center p-2 lg:p-4 order-2 lg:order-1">
              <div className="relative w-full max-w-md">
                <motion.img
                  key={index}
                  src={banners[index].image}
                  alt={banners[index].title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="w-full h-auto rounded-2xl shadow-professional object-cover"
                />

                {/* Image overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-sage-500/10 to-brand-lavender-500/10 rounded-2xl" />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="flex flex-col justify-center space-y-2 lg:space-y-3 animate-fade-in-up order-1 lg:order-2 px-2 lg:px-0">
              
              {/* Title */}
              <div>
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight mb-2">
                  <span className="gradient-text-professional">
                    {banners[index].highlight}
                  </span>
                </h1>
                <div className="w-12 h-0.5 bg-gradient-to-r from-brand-sage-500 to-brand-lavender-500 rounded-full mb-2" />
              </div>
              
              {/* Description */}
              <p className="text-xs md:text-sm text-brand-neutral-600 leading-relaxed max-w-sm font-medium">
                {banners[index].desc}
              </p>
              
              {/* Sub-benefits */}
              <div className="space-y-1">
                {banners[index].subBenefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <div className={`w-2 h-2 rounded-full ${
                      i === 0 ? 'bg-brand-sage-500' : 'bg-brand-lavender-500'
                    }`} />
                    <span className="text-brand-neutral-700 font-medium text-xs tracking-wide uppercase">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* CTA Button */}
              <div className="pt-1">
                <button className="group bg-brand-sage-800 hover:bg-brand-sage-900 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-1.5 shadow-soft hover:shadow-soft-lg hover:scale-105 text-xs">
                  {banners[index].primary}
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-2 glass-professional px-3 py-2 rounded-xl">
          {banners.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`transition-all duration-500 rounded-full ${
                i === index
                  ? "w-6 h-2 bg-gradient-to-r from-brand-sage-500 to-brand-lavender-500 scale-110"
                  : "w-2 h-2 bg-brand-neutral-400 hover:bg-brand-sage-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
