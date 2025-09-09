import { Bot, Code, Database, Globe, Smartphone, Shield } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: "AI-Powered Testing",
      description:
        "Leverage machine learning algorithms to predict and prevent software defects before they impact users.",
      features: [
        "Smart test generation",
        "Predictive analytics",
        "Automated bug detection",
      ],
    },
    {
      icon: Code,
      title: "Automated Test Suites",
      description:
        "Comprehensive automation frameworks that scale with your development pipeline and reduce manual effort.",
      features: [
        "CI/CD integration",
        "Cross-platform testing",
        "Real-time reporting",
      ],
    },
    {
      icon: Globe,
      title: "Performance Testing",
      description:
        "Ensure your applications perform optimally under any load with our advanced performance testing solutions.",
      features: ["Load testing", "Stress testing", "Performance monitoring"],
    },
    {
      icon: Smartphone,
      title: "Mobile Testing",
      description:
        "Comprehensive mobile app testing across all devices and platforms to ensure perfect user experiences.",
      features: [
        "Device compatibility",
        "UI/UX testing",
        "Cross-platform validation",
      ],
    },
    {
      icon: Database,
      title: "API Testing",
      description:
        "Validate your APIs with thorough testing protocols that ensure reliability and security.",
      features: [
        "REST/GraphQL testing",
        "Security validation",
        "Performance benchmarking",
      ],
    },
    {
      icon: Shield,
      title: "Security Testing",
      description:
        "Identify vulnerabilities and ensure your applications meet the highest security standards.",
      features: [
        "Penetration testing",
        "Vulnerability scanning",
        "Compliance validation",
      ],
    },
  ];
  return (
    <section id="services" className="py-20 relative cv-auto">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Our Services
          </h2>
          <p
            className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            Comprehensive testing solutions designed for the future of software
            development
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up"
              style={{
                borderColor: "rgba(80, 188, 183, 0.2)",
                animationDelay: `${0.6 + index * 0.2}s`,
              }}
            >
              <div className="mb-6">
                <div className="relative w-16 h-16 mx-auto">
                  <service.icon
                    className="w-16 h-16 transition-colors duration-300"
                    style={{ color: "#50bcb7" }}
                  />
                  <div
                    className="absolute inset-0 blur-xl rounded-full transition-colors duration-300"
                    style={{ backgroundColor: "rgba(80, 188, 183, 0.2)" }}
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((f, i) => (
                  <li key={i} className="flex items-center text-gray-400">
                    <div
                      className="w-2 h-2 rounded-full mr-3"
                      style={{
                        background:
                          "linear-gradient(to right, #50bcb7, #299fd0)",
                      }}
                    />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;
