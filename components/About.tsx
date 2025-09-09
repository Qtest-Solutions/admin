import { Users, Award, Lightbulb, TrendingUp } from "lucide-react";

const About = () => {
  const stats = [
    { number: "500+", label: "Projects Delivered", icon: TrendingUp },
    { number: "99.9%", label: "Success Rate", icon: Award },
    { number: "50+", label: "Expert Team", icon: Users },
    { number: "10+", label: "Years Experience", icon: Lightbulb },
  ];
  return (
    <section id="about" className="py-20 relative cv-auto">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              About QTest Solutions
            </h2>
            <p
              className="text-xl text-gray-300 mb-6 leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              We are pioneers in quality assurance and testing solutions,
              combining cutting-edge technology with deep industry expertise to
              deliver exceptional results.
            </p>
            <p
              className="text-lg text-gray-400 mb-8 leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              Our team consists of seasoned professionals with years of
              experience in software testing, quality assurance, and training.
              We bring industry best practices and cutting-edge methodologies to
              every project. We understand the unique challenges faced by
              startups and the career aspirations of students, allowing us to
              provide tailored solutions that drive success.
            </p>
            <div className="space-y-4">
              {[
                "Industry-leading expertise in test automation",
                "AI-powered defect prediction and prevention",
                "Comprehensive security and performance testing",
                "24/7 support and monitoring",
              ].map((point, index) => (
                <div key={index} className="flex items-center">
                  <div
                    className="w-3 h-3 rounded-full mr-4"
                    style={{
                      background: "linear-gradient(to right, #50bcb7, #299fd0)",
                    }}
                  />
                  <span className="text-gray-300">{point}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div
              className="backdrop-blur-sm border rounded-3xl p-8"
              style={{
                background:
                  "linear-gradient(to bottom right, rgba(80, 188, 183, 0.1), rgba(41, 159, 208, 0.1))",
                borderColor: "rgba(80, 188, 183, 0.2)",
              }}
            >
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center group animate-fade-in-up"
                    style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                  >
                    <div className="mb-4 flex justify-center">
                      <div className="relative">
                        <stat.icon
                          className="w-12 h-12 transition-colors duration-300"
                          style={{ color: "#50bcb7" }}
                        />
                        <div
                          className="absolute inset-0 blur-lg rounded-full transition-colors duration-300"
                          style={{ backgroundColor: "rgba(80, 188, 183, 0.2)" }}
                        />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-white mb-2 transition-colors duration-300">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="absolute -inset-4 rounded-3xl blur-xl -z-10 animate-pulse"
              style={{
                background:
                  "linear-gradient(to right, rgba(80, 188, 183, 0.2), rgba(41, 159, 208, 0.2))",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
