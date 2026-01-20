'use client'
import {
  Hand,
  Terminal,
  History,
  Gauge,
  Shield,
  Plug,
  Palette,
  Code,
  Megaphone,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function Services() {
    const router = useRouter();

  return (
    <section
      id="services"
      className="relative px-6 md:px-20 lg:px-40 py-32 bg-gradient-to-b from-white/40 via-white/30 to-white/40 backdrop-blur-sm overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-teal-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-teal-600/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-[1280px] mx-auto relative z-10">
        {/* MAIN INTRO */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 bg-gradient-to-r from-teal-500/10 via-teal-400/10 to-teal-500/10 border border-teal-500/20 rounded-full backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-teal-600" />
            <span className="text-sm font-semibold bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent">
              Premium Testing Services
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-8 leading-[1.1]">
            Software Testing
            <span className="block bg-gradient-to-r from-teal-600 via-teal-500 to-teal-600 bg-clip-text text-transparent">
              as a Service
            </span>
          </h2>

          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            QTest specializes exclusively in{" "}
            <span className="font-bold text-gray-900 relative">
              Quality Assurance and Software Testing
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500/40 to-teal-600/40 rounded-full"></span>
            </span>
            . While we offer supporting services, our heart and expertise lie in
            ensuring your software meets the highest quality standards.
          </p>
        </div>

        {/* TESTING SERVICES SECTION */}
        <div className="mb-40">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-block relative mb-6">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                Core Testing Services
              </h3>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-gradient-to-r from-transparent via-teal-500 to-transparent rounded-full"></div>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive quality assurance solutions tailored to your
              software needs
            </p>
          </div>

          {/* Grid with staggered layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: Hand,
                title: "Manual Testing",
                desc: "Comprehensive manual testing services to identify usability issues, UI/UX problems, and critical bugs that automated tests might miss.",
                gradient: "from-teal-500 to-teal-600",
                slug: "manual-testing",
                delay: "0ms",
              },
              {
                icon: Terminal,
                title: "Automation Testing",
                desc: "Accelerate your testing cycles with robust automation frameworks. We build scalable test suites using industry-leading tools.",
                gradient: "from-teal-600 to-teal-700",
                slug:"automation-testing",
                delay: "100ms",
              },
              {
                icon: History,
                title: "Regression Testing",
                slug:"regression-testing",
                desc: "Ensure new updates don't break existing functionality. Our regression testing catches issues early in the development cycle.",
                gradient: "from-teal-500 to-teal-600",
                delay: "200ms",
              },
              {
                icon: Gauge,
                title: "Performance & Load Testing",
                desc: "Validate your application can handle peak traffic. We stress test systems to identify bottlenecks and optimize performance.",
                gradient: "from-teal-600 to-teal-700",
                slug:"performance-testing",
                delay: "0ms",
              },
              {
                icon: Shield,
                title: "Security Testing",
                desc: "Protect your application from vulnerabilities. Our security testing identifies potential threats and ensures compliance standards.",
                gradient: "from-teal-500 to-teal-600",
                slug:"security-testing",
                delay: "100ms",
              },
              {
                icon: Plug,
                title: "API Testing",
                desc: "Comprehensive API validation ensuring your integrations are reliable, secure, and performant across all endpoints.",
                gradient: "from-teal-600 to-teal-700",
                slug:"api-testing",
                delay: "200ms",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group relative"
                  style={{ animationDelay: item.delay }}
                >
                  {/* Glow effect on hover */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-teal-600 rounded-3xl opacity-0 group-hover:opacity-20 blur transition-all duration-500"></div>
                  
                  <div className="relative bg-white border border-gray-200/80 rounded-3xl p-8 h-full shadow-lg shadow-gray-200/50 hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-500 hover:-translate-y-2">
                    {/* Icon Container */}
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-teal-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                      <div className={`relative inline-flex size-16 rounded-2xl bg-gradient-to-br ${item.gradient} items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                      </div>
                    </div>

                    <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-teal-700 transition-colors">
                      {item.title}
                    </h4>

                    <p className="text-gray-600 leading-relaxed mb-4">
                      {item.desc}
                    </p>

                    {/* Hover Arrow */}
                    <div className="flex items-center gap-2 text-teal-600 cursor-pointer font-semibold text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <span onClick={()=>{router.push(`/services/${item.slug}`)}} >Learn more</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>

                    {/* Corner accent */}
                    <div className="absolute top-6 right-6 w-20 h-20 bg-gradient-to-br from-teal-500/5 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* SUPPORTING SERVICES SECTION */}
        <div className="relative">
          {/* Decorative background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 to-white/50 rounded-[3rem] border border-gray-200/50 backdrop-blur-sm"></div>
          <div className="absolute top-10 left-10 w-40 h-40 bg-teal-500/5 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-teal-600/5 rounded-full blur-2xl"></div>

          <div className="relative pt-16 pb-16 px-8">
            {/* Header */}
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 bg-white/60 border border-gray-300/50 rounded-full backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse"></div>
                <span className="text-sm font-semibold text-gray-700">
                  Additional Services
                </span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Supporting Services
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Complementary services to support your complete product
                development lifecycle
              </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  icon: Palette,
                  title: "UI/UX Design",
                  desc: "User-centered design to complement your tested product.",
                  accent: "from-pink-500/10 to-purple-500/10",
                },
                {
                  icon: Code,
                  title: "Software Development",
                  desc: "Custom software solutions built with quality in mind.",
                  accent: "from-blue-500/10 to-cyan-500/10",
                },
                {
                  icon: Megaphone,
                  title: "Digital Marketing",
                  desc: "Strategic digital presence for your software products.",
                  accent: "from-orange-500/10 to-red-500/10",
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-white/70 backdrop-blur-md border border-gray-200/60 rounded-2xl p-8 hover:bg-white hover:border-gray-300/80 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className={`mb-5 size-14 rounded-xl bg-gradient-to-br ${item.accent} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-gray-200/50`}>
                        <Icon className="w-7 h-7 text-gray-700" strokeWidth={2} />
                      </div>
                      
                      <h4 className="text-lg font-bold text-gray-900 mb-3">
                        {item.title}
                      </h4>
                      
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item.desc}
                      </p>

                      {/* Decorative dot */}
                      <div className="mt-4 w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-teal-500 transition-colors"></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}