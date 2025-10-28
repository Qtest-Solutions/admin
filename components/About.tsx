import {
  Users,
  Award,
  Target,
  TrendingUp,
  Shield,
  Clock,
  Zap,
  Globe,
} from "lucide-react";

export default function About() {
  const stats = [
    { number: "100%", label: "Client Satisfaction", icon: Award },
    { number: "24/7", label: "Support Available", icon: Clock },
    { number: "Expert", label: "QA Team", icon: Users },
    { number: "Rapid", label: "Turnaround Time", icon: TrendingUp },
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Quality First Approach",
      description:
        "We don't just test software—we ensure your product meets the highest standards of quality, performance, and reliability.",
      color: "blue",
    },
    {
      icon: Zap,
      title: "Fast Turnaround",
      description:
        "Swift testing cycles without compromising quality, helping you achieve faster time-to-market and stay ahead of competition.",
      color: "purple",
    },
    {
      icon: Globe,
      title: "Industry Expertise",
      description:
        "Deep domain knowledge across fintech, e-commerce, healthcare, and enterprise applications with proven methodologies.",
      color: "green",
    },
    {
      icon: Target,
      title: "Tailored Solutions",
      description:
        "Custom testing strategies designed specifically for your business needs, whether you're a startup or enterprise.",
      color: "pink",
    },
  ];

  const values = [
    {
      title: "Excellence",
      subtitle: "Quality First",
      icon: Award,
      color: "blue",
    },
    {
      title: "Transparency",
      subtitle: "Open & Honest",
      icon: Shield,
      color: "purple",
    },
    { title: "Innovation", subtitle: "Future Ready", icon: Zap, color: "pink" },
    {
      title: "Partnership",
      subtitle: "Your Success",
      icon: Users,
      color: "green",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: {
      [key: string]: {
        bg: string;
        border: string;
        icon: string;
        iconBg: string;
        text: string;
      };
    } = {
      blue: {
        bg: "bg-blue-50",
        border: "border-blue-200",
        icon: "text-blue-600",
        iconBg: "bg-blue-100",
        text: "text-blue-700",
      },
      purple: {
        bg: "bg-purple-50",
        border: "border-purple-200",
        icon: "text-purple-600",
        iconBg: "bg-purple-100",
        text: "text-purple-700",
      },
      pink: {
        bg: "bg-pink-50",
        border: "border-pink-200",
        icon: "text-pink-600",
        iconBg: "bg-pink-100",
        text: "text-pink-700",
      },
      green: {
        bg: "bg-green-50",
        border: "border-green-200",
        icon: "text-green-600",
        iconBg: "bg-green-100",
        text: "text-green-700",
      },
    };
    return colors[color];
  };

  return (
    <section
      id="about"
      className="py-20 relative bg-transparent overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-pink-200/15 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-semibold text-blue-700 mb-6 border border-blue-200 shadow-sm">
            <Users className="w-4 h-4" />
            About QTest Solutions
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Transforming Quality Assurance
            <span className="block text-blue-600 mt-2">One Test at a Time</span>
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are dedicated to quality assurance and software testing
            excellence, combining modern technology with industry best practices
            to deliver exceptional results that drive business success.
          </p>
        </div>

        {/* Stats Section */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const colors = ["blue", "purple", "pink", "green"];
            const colorClass = getColorClasses(colors[index % 4]);
            return (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div
                  className={`w-14 h-14 ${colorClass.iconBg} rounded-xl flex items-center justify-center mx-auto mb-4`}
                >
                  <Icon className={`w-7 h-7 ${colorClass.icon}`} />
                </div>
                <div className={`text-3xl font-bold mb-1 ${colorClass.text}`}>
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div> */}

        {/* Who We Are Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-16 shadow-xl border border-gray-100">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Who We Are
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-base">
                  <span className="font-bold text-blue-600">
                    QTest Solutions
                  </span>{" "}
                  is an independent software testing company dedicated to
                  empowering businesses with comprehensive quality assurance
                  services. We specialize in delivering{" "}
                  <span className="font-semibold">
                    top-tier testing solutions
                  </span>{" "}
                  tailored to your unique business needs.
                </p>
                <p className="text-base">
                  Our team of{" "}
                  <span className="font-semibold text-purple-600">
                    certified professionals
                  </span>{" "}
                  brings expertise in functional testing, automation testing,
                  performance testing, security testing, and custom software
                  development. We're committed to building{" "}
                  <span className="font-semibold">long-term partnerships</span>{" "}
                  with our clients, ensuring their success through quality and
                  reliability.
                </p>
                <p className="text-base">
                  We don't just find bugs—we partner with you to deliver
                  products that excel in quality, performance, and user
                  experience, helping you stand out in competitive markets.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200">
                <h4 className="text-lg font-bold text-blue-900 mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Our Mission
                </h4>
                <p className="text-sm text-blue-800 leading-relaxed">
                  To empower businesses with world-class quality assurance
                  solutions that ensure their software products deliver
                  exceptional value, reliability, and performance to end users.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl border border-purple-200">
                <h4 className="text-lg font-bold text-purple-900 mb-3 flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Our Vision
                </h4>
                <p className="text-sm text-purple-800 leading-relaxed">
                  To be the global leader in software testing and quality
                  assurance, recognized for innovation, expertise, and
                  unwavering commitment to client success.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose QTest Solutions
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              const colors = getColorClasses(item.color);
              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl p-6 border ${colors.border} hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
                >
                  <div
                    className={`w-12 h-12 ${colors.iconBg} rounded-xl flex items-center justify-center mb-4`}
                  >
                    <Icon className={`w-6 h-6 ${colors.icon}`} />
                  </div>
                  <h4 className={`text-lg font-bold ${colors.text} mb-3`}>
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Core Values Section */}
        {/* <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl p-8 md:p-12 text-white">
          <h3 className="text-3xl font-bold text-center mb-12">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              const colors = getColorClasses(value.color);
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300 border border-white/20"
                >
                  <div
                    className={`w-14 h-14 ${colors.iconBg} rounded-xl flex items-center justify-center mx-auto mb-4`}
                  >
                    <Icon className={`w-7 h-7 ${colors.icon}`} />
                  </div>
                  <h4 className="text-xl font-bold mb-2">{value.title}</h4>
                  <p className="text-sm text-blue-200">{value.subtitle}</p>
                </div>
              );
            })}
          </div>
        </div> */}

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Elevate Your Software Quality?
            </h3>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Partner with us to ensure your software meets the highest
              standards of quality and performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg">
                Start Your Project
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
