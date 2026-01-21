'use client';

import { useEffect, useState } from 'react';
import {
  SiSelenium,
  SiCypress,
  SiPostman,
  SiJenkins,
  SiDocker,
  SiGithubactions,
  SiJira,
} from "react-icons/si";

import { Bug, Gauge, Boxes, Cloud, Smartphone } from "lucide-react";
import { TbApi } from "react-icons/tb";

interface Tool {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bgColor: string;
  borderColor: string;
  glowColor: string;
}

export default function Technologies() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const tools: Tool[] = [
    { 
      name: "Selenium", 
      icon: SiSelenium,
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      glowColor: "hover:shadow-green-200/50"
    },
    { 
      name: "Cypress", 
      icon: SiCypress,
      color: "text-gray-700",
      bgColor: "bg-gray-50",
      borderColor: "border-gray-200",
      glowColor: "hover:shadow-gray-200/50"
    },
    { 
      name: "Playwright", 
      icon: Bug,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      glowColor: "hover:shadow-purple-200/50"
    },
    { 
      name: "Postman", 
      icon: SiPostman,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      glowColor: "hover:shadow-orange-200/50"
    },
    { 
      name: "JMeter", 
      icon: Gauge,
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      glowColor: "hover:shadow-red-200/50"
    },
    { 
      name: "Jenkins", 
      icon: SiJenkins,
      color: "text-red-700",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      glowColor: "hover:shadow-red-200/50"
    },
    { 
      name: "GitHub Actions", 
      icon: SiGithubactions,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      glowColor: "hover:shadow-blue-200/50"
    },
    { 
      name: "Docker", 
      icon: SiDocker,
      color: "text-sky-600",
      bgColor: "bg-sky-50",
      borderColor: "border-sky-200",
      glowColor: "hover:shadow-sky-200/50"
    },
    { 
      name: "Jira", 
      icon: SiJira,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      glowColor: "hover:shadow-blue-200/50"
    },
    { 
      name: "API Testing", 
      icon: TbApi,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      glowColor: "hover:shadow-emerald-200/50"
    },
    { 
      name: "Web Apps", 
      icon: Boxes,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
      glowColor: "hover:shadow-indigo-200/50"
    },
    { 
      name: "Mobile Apps", 
      icon: Smartphone,
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
      glowColor: "hover:shadow-pink-200/50"
    },
    { 
      name: "Cloud Systems", 
      icon: Cloud,
      color: "text-cyan-600",
      bgColor: "bg-cyan-50",
      borderColor: "border-cyan-200",
      glowColor: "hover:shadow-cyan-200/50"
    },
  ];

  // Split tools into two rows
  const firstRowTools = tools.slice(0, Math.ceil(tools.length / 2));
  const secondRowTools = tools.slice(Math.ceil(tools.length / 2));

  return (
    <section
      id="technologies"
      className="relative px-6 md:px-20 lg:px-40 py-28 bg-white/30 backdrop-blur-sm overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Technologies & Tools We Work With
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Trusted QA tools and platforms used across automation, performance,
            CI/CD, and modern software architectures.
          </p>
        </div>

        {/* DOUBLE ROW CAROUSEL */}
        <div 
          className={`space-y-4 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* First Row - Left to Right */}
          <div className="relative w-full overflow-hidden">
            {/* Gradient Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
            
            <div className="flex gap-4 animate-scroll-left hover:[animation-play-state:paused]">
              {[...firstRowTools, ...firstRowTools, ...firstRowTools, ...firstRowTools].map((tool, index) => {
                const Icon = tool.icon;
                return (
                  <div
                    key={`row1-${index}`}
                    className={`group flex-shrink-0 flex items-center gap-3 px-6 py-3 
                      ${tool.bgColor} border ${tool.borderColor} 
                      rounded-full text-sm font-semibold 
                      shadow-sm hover:shadow-xl ${tool.glowColor}
                      transition-all duration-300 
                      hover:scale-105 hover:-translate-y-1
                      cursor-pointer`}
                  >
                    <Icon className={`w-4 h-4 ${tool.color} transition-transform duration-300 group-hover:scale-110`} />
                    <span className="text-gray-800 whitespace-nowrap">{tool.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Second Row - Right to Left */}
          <div className="relative w-full overflow-hidden">
            {/* Gradient Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
            
            <div className="flex gap-4 animate-scroll-right hover:[animation-play-state:paused]">
              {[...secondRowTools, ...secondRowTools, ...secondRowTools, ...secondRowTools].map((tool, index) => {
                const Icon = tool.icon;
                return (
                  <div
                    key={`row2-${index}`}
                    className={`group flex-shrink-0 flex items-center gap-3 px-6 py-3 
                      ${tool.bgColor} border ${tool.borderColor} 
                      rounded-full text-sm font-semibold 
                      shadow-sm hover:shadow-xl ${tool.glowColor}
                      transition-all duration-300 
                      hover:scale-105 hover:-translate-y-1
                      cursor-pointer`}
                  >
                    <Icon className={`w-4 h-4 ${tool.color} transition-transform duration-300 group-hover:scale-110`} />
                    <span className="text-gray-800 whitespace-nowrap">{tool.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes scroll-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 25s linear infinite;
          width: max-content;
        }

        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  );
}