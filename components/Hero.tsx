"use client";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const banners = [
  {
    title: "Qtest Software",
    highlight: "Solution LLP",
    desc: "Empowering startups with professional software testing services and training the next generation of QA professionals.",
    primary: "Start Your Journey",
    secondary: "Learn More",
    accent: "text-sky-400",
    image: "https://picsum.photos/id/1015/1920/1080",
  },
  {
    title: "Software Testing Solutions",
    highlight: "Reliable & Scalable",
    desc: "We provide end-to-end software testing solutions, including functional, performance, and automation testing, tailored to your business needs.",
    primary: "Discover Solutions",
    secondary: "How It Works",
    accent: "text-emerald-400",
    image: "https://picsum.photos/id/1016/1920/1080",
  },
  {
    title: "CAE Application Testing",
    highlight: "Precision Services",
    desc: "Our CAE testing services ensure your engineering and simulation applications deliver accurate results, enhancing efficiency and reliability.",
    primary: "Get a Demo",
    secondary: "Learn More",
    accent: "text-violet-400",
    image: "https://picsum.photos/id/1018/1920/1080",
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
      className="relative h-screen w-full overflow-hidden font-gilroy"
    >
      {/* Background images */}
      <div className="absolute inset-0 w-full h-full">
        {banners.map((banner, i) => (
          <motion.img
            key={i}
            src={banner.image}
            alt={banner.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: i === index ? 1 : 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ))}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Banner Content */}
      <div className="relative z-10 flex items-center justify-start w-[500px] h-full">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl text-left rounded-3xl bg-white/20 backdrop-blur-xl border border-white/20 shadow-2xl p-6 md:p-8">
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-white drop-shadow-lg">
              {banners[index].title}
              <span
                className={`${banners[index].accent} block mt-1 text-2xl md:text-3xl`}
              >
                {banners[index].highlight}
              </span>
            </h1>
            <p className="mt-3 text-sm md:text-base text-slate-200 leading-relaxed">
              {banners[index].desc}
            </p>
            <div className="flex flex-col sm:flex-row items-center md:items-start justify-start gap-3 pt-4">
              <button className="group text-white px-5 py-2.5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg bg-slate-800/90 hover:bg-slate-900 text-sm md:text-base">
                {banners[index].primary}
                <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="border-2 border-white/80 px-5 py-2.5 rounded-full font-semibold transition-all duration-300 text-white text-sm md:text-base hover:bg-white/10 hover:shadow-md">
                {banners[index].secondary}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === index
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/80"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
