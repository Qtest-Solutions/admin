import { ArrowRight, Shield, Zap, Target } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative mt-20"
    >
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1
            className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent leading-tight animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Qtest Software
            <br />
            <span
              className="bg-gradient-to-r bg-clip-text text-transparent animate-fade-in-up"
              style={{
                backgroundImage: "linear-gradient(to right, #50bcb7, #299fd0)",
                animationDelay: "0.4s",
              }}
            >
              Solution LLP
            </span>
          </h1>
          <p
            className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            Empowering startups with professional software testing services and
            training the next generation of quality assurance professionals
          </p>
          <div
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12 animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            <button
              className="group text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              style={{
                background: "linear-gradient(to right, #50bcb7, #299fd0)",
                boxShadow: "0 10px 25px rgba(80, 188, 183, 0.25)",
              }}
            >
              Start Your Journey
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button
              className="border-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 backdrop-blur-sm"
              style={{
                borderColor: "rgba(80, 188, 183, 0.5)",
                color: "#50bcb7",
              }}
            >
              Learn More
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: Shield,
                title: "99.9% Accuracy",
                desc: "AI-powered precision testing",
              },
              {
                icon: Zap,
                title: "10x Faster",
                desc: "Automated testing workflows",
              },
              {
                icon: Target,
                title: "Zero Defects",
                desc: "Comprehensive quality assurance",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-sm border rounded-2xl p-6 transition-all duration-300 group animate-fade-in-up"
                style={{
                  borderColor: "rgba(80, 188, 183, 0.2)",
                  animationDelay: `${1 + i * 0.2}s`,
                }}
              >
                <f.icon
                  className="w-8 h-8 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300"
                  style={{ color: "#50bcb7" }}
                />
                <h3 className="text-lg font-semibold text-white mb-2">
                  {f.title}
                </h3>
                <p className="text-gray-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
