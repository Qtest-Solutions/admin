"use client";
import {
  User,
  Cog,
  Gauge,
  CheckCircle,
  Shield,
  LucideIcon,
} from "lucide-react";

// -------------------- Types --------------------
type ServiceColor = "blue" | "emerald" | "purple";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  color: ServiceColor;
  // Uncomment if you bring stats back:
  // stats?: Record<string, string>;
}

interface ColorClasses {
  bg: string;
  border: string;
  icon: string;
  iconBg: string;
  accent: string;
  text: string;
  glow: string;
}

// -------------------- Component --------------------
const Services: React.FC = () => {
  const services: Service[] = [
    {
      icon: User,
      title: "Manual Testing",
      description:
        "Human-driven testing that ensures your application meets real-world user expectations and catches issues automated tests might miss.",
      features: [
        "Exploratory Testing",
        "User Experience Validation",
        "Edge Case Discovery",
        "Accessibility Testing",
      ],
      color: "blue",
    },
    {
      icon: Cog,
      title: "Automation Testing",
      description:
        "Scalable automated test suites that integrate seamlessly with your CI/CD pipeline for faster, more reliable releases.",
      features: [
        "CI/CD Integration",
        "Cross-Browser Testing",
        "Regression Testing",
        "API Test Automation",
      ],
      color: "emerald",
    },
    {
      icon: Gauge,
      title: "Performance Testing",
      description:
        "Comprehensive performance analysis to ensure your applications deliver exceptional speed and reliability under any load.",
      features: [
        "Load Testing",
        "Stress Testing",
        "Scalability Analysis",
        "Performance Monitoring",
      ],
      color: "purple",
    },
  ];

  const getColorClasses = (color: ServiceColor): ColorClasses => {
    const colors: Record<ServiceColor, ColorClasses> = {
      blue: {
        bg: "from-brand-sage-100/30 to-brand-sage-200/20",
        border: "border-brand-sage-200/40 hover:border-brand-sage-300/60",
        icon: "text-brand-sage-600",
        iconBg: "bg-brand-sage-100/50",
        accent: "bg-gradient-to-r from-brand-sage-500 to-brand-sage-600",
        text: "text-brand-sage-600",
        glow: "group-hover:glow-sage",
      },
      emerald: {
        bg: "from-brand-lavender-100/30 to-brand-lavender-200/20",
        border:
          "border-brand-lavender-200/40 hover:border-brand-lavender-300/60",
        icon: "text-brand-lavender-600",
        iconBg: "bg-brand-lavender-100/50",
        accent:
          "bg-gradient-to-r from-brand-lavender-500 to-brand-lavender-600",
        text: "text-brand-lavender-600",
        glow: "group-hover:glow-lavender",
      },
      purple: {
        bg: "from-brand-coral-100/30 to-brand-coral-200/20",
        border: "border-brand-coral-200/40 hover:border-brand-coral-300/60",
        icon: "text-brand-coral-600",
        iconBg: "bg-brand-coral-100/50",
        accent: "bg-gradient-to-r from-brand-coral-500 to-brand-coral-600",
        text: "text-brand-coral-600",
        glow: "group-hover:glow-coral",
      },
    };
    return colors[color];
  };

  return (
    <section
      id="services"
      className="py-16 bg-gradient-sage relative overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-brand-sage-200/20 rounded-full blur-3xl animate-gentle-float" />
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-brand-lavender-200/20 rounded-full blur-3xl animate-gentle-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/3 w-72 h-72 bg-brand-coral-200/15 rounded-full blur-3xl animate-gentle-float"
          style={{ animationDelay: "4s" }}
        />
        <div className="absolute top-10 right-1/4 w-64 h-64 bg-brand-sage-300/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 glass-professional px-4 py-2 rounded-full text-xs text-brand-sage-700 mb-4 font-medium glow-sage">
            <Shield className="w-3 h-3" />
            Quality Assurance Excellence
            <div className="w-1.5 h-1.5 bg-brand-sage-500 rounded-full animate-pulse" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black leading-tight">
            Our Services
          </h2>

          <p className="text-sm md:text-base text-brand-neutral-600 max-w-2xl mx-auto leading-relaxed font-medium">
            Comprehensive testing solutions that ensure your software meets the
            <span className="text-brand-sage-600 font-semibold">
              {" "}
              highest standards
            </span>{" "}
            of quality, performance, and reliability
          </p>

          <div className="mt-4 flex justify-center">
            <div className="w-16 h-0.5 bg-gradient-to-r from-brand-sage-500 via-brand-lavender-500 to-brand-coral-500 rounded-full" />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            return (
              <div
                key={index}
                className={`group relative glass-professional border ${colors.border} rounded-2xl p-6 transition-all duration-700 hover:scale-[1.02] hover:-translate-y-2 shadow-soft hover:shadow-soft-lg ${colors.glow} animate-fade-in-up`}
                style={{
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${colors.bg} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 ${colors.iconBg} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-500 border border-white/20`}
                  >
                    <service.icon
                      className={`w-7 h-7 ${colors.icon} transition-transform duration-500 group-hover:rotate-12`}
                    />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-brand-neutral-800 mb-3 group-hover:text-brand-neutral-900 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-brand-neutral-600 mb-4 leading-relaxed text-sm font-medium">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center text-brand-neutral-700 group-hover:translate-x-1 transition-transform duration-300"
                        style={{ transitionDelay: `${i * 0.1}s` }}
                      >
                        <CheckCircle
                          className={`w-4 h-4 ${colors.text} mr-2 flex-shrink-0 transition-colors duration-300`}
                        />
                        <span className="font-medium text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="pt-3 border-t border-brand-neutral-200/30 group-hover:border-brand-neutral-200/50 transition-colors">
                    <button
                      className={`w-full px-4 py-2 rounded-lg font-medium transition-all duration-300 ${colors.accent} text-white hover:shadow-lg transform group-hover:scale-105 text-xs`}
                    >
                      Learn More
                    </button>
                  </div>
                </div>

                {/* Decorative corner accent */}
                <div
                  className={`absolute top-3 right-3 w-2 h-2 ${colors.accent} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse`}
                />
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Services;
