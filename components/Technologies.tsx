'use client';

import {
  SiSelenium,
  SiCypress,
  SiPostman,
  SiJenkins,
  SiDocker,
  SiGithubactions,
  SiGitlab,
  SiJira,
  SiConfluence,
} from "react-icons/si";

import { Bug, Gauge, Boxes, Cloud, Smartphone, Workflow } from "lucide-react";
import { TbApi } from "react-icons/tb";


export default function Technologies() {
const tools = [
  { name: "Selenium", icon: SiSelenium },
  { name: "Cypress", icon: SiCypress },
  { name: "Playwright", icon: Bug },          // fallback
  { name: "Postman", icon: SiPostman },
  { name: "JMeter", icon: Gauge },             // fallback
  { name: "Jenkins", icon: SiJenkins },
  { name: "GitHub Actions", icon: SiGithubactions },
  { name: "GitLab CI", icon: SiGitlab },
  { name: "Docker", icon: SiDocker },
  { name: "Jira", icon: SiJira },
  { name: "Confluence", icon: SiConfluence },
  { name: "API & Microservices", icon: TbApi },
  { name: "Web Applications", icon: Boxes },
  { name: "Mobile Applications", icon: Smartphone },
  { name: "Cloud-based Systems", icon: Cloud },
];


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

        {/* CAROUSEL */}
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-4 animate-tech-scroll hover:[animation-play-state:paused]">
            {[...tools, ...tools].map((tool, index) => {
              const Icon = tool.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-3 px-6 py-3 bg-white/70 border border-gray-200/60 rounded-full text-sm font-semibold text-gray-800 shadow-sm hover:shadow-md transition"
                >
                  <Icon className="w-4 h-4 text-gray-700" />
                  <span>{tool.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes tech-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-tech-scroll {
          animation: tech-scroll 40s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  );
}
