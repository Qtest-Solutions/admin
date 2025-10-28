import { User, Cog, Gauge, Code, Shield } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: User,
      title: "Manual Testing",
      description:
        "Human-driven testing that ensures your application meets real-world user expectations and catches issues automated tests might miss.",
      color: "blue",
    },
    {
      icon: Cog,
      title: "Automation Testing",
      description:
        "Scalable automated test suites that integrate seamlessly with your CI/CD pipeline for faster, more reliable releases.",
      color: "purple",
    },
    {
      icon: Gauge,
      title: "Performance Testing",
      description:
        "Comprehensive performance analysis to ensure your applications deliver exceptional speed and reliability under any load.",
      color: "pink",
    },
    {
      icon: Code,
      title: "Software Development",
      description:
        "Custom software solutions built with modern technologies and best practices to bring your ideas to life efficiently and effectively.",
      color: "green",
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: "bg-blue-100/50",
        border: "border-blue-200/30",
        icon: "text-blue-600",
        title: "text-blue-700",
        titleHover: "group-hover:text-blue-800",
      },
      purple: {
        bg: "bg-purple-100/50",
        border: "border-purple-200/30",
        icon: "text-purple-600",
        title: "text-purple-700",
        titleHover: "group-hover:text-purple-800",
      },
      pink: {
        bg: "bg-pink-100/50",
        border: "border-pink-200/30",
        icon: "text-pink-600",
        title: "text-pink-700",
        titleHover: "group-hover:text-pink-800",
      },
      green: {
        bg: "bg-green-100/50",
        border: "border-green-200/30",
        icon: "text-green-600",
        title: "text-green-700",
        titleHover: "group-hover:text-green-800",
      },
    };
    return colors[color];
  };

  return (
    <section
      id="services"
      className="py-16 bg-transparent relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-80 h-80 bg-green-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-pink-200/15 rounded-full blur-3xl" />
        <div className="absolute top-10 right-1/4 w-64 h-64 bg-green-300/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const colors = getColorClasses(service.color);
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 transition-all duration-500 hover:shadow-xl flex flex-col items-center text-center"
              >
                <div
                  className={`w-20 h-20 ${colors.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 border ${colors.border}`}
                >
                  <Icon
                    className={`w-10 h-10 ${colors.icon} transition-transform duration-500 group-hover:rotate-6`}
                  />
                </div>

                <h3
                  className={`text-lg font-bold ${colors.title} mb-3 ${colors.titleHover} transition-colors`}
                >
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
