import { Users, Award, Lightbulb, TrendingUp } from "lucide-react";

const About = () => {
  const stats = [
    { number: "500+", label: "Projects Delivered", icon: TrendingUp },
    { number: "99.9%", label: "Success Rate", icon: Award },
    { number: "50+", label: "Expert Team", icon: Users },
    { number: "10+", label: "Years Experience", icon: Lightbulb },
  ];

  return (
    <section id="about" className="py-16 relative bg-gradient-lavender">
      {/* Professional Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-16 right-16 w-80 h-80 bg-brand-lavender-200/20 rounded-full blur-3xl animate-gentle-float" />
        <div
          className="absolute bottom-16 left-16 w-96 h-96 bg-brand-sage-200/15 rounded-full blur-3xl animate-gentle-float"
          style={{ animationDelay: "3s" }}
        />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-brand-coral-200/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-10 w-48 h-48 bg-brand-lavender-300/15 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 glass-professional px-4 py-2 rounded-full text-xs text-brand-lavender-700 mb-4 font-medium glow-lavender">
              <Users className="w-3 h-3" />
              About Our Excellence
              <div className="w-1.5 h-1.5 bg-brand-lavender-500 rounded-full animate-pulse" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              <span className="text-brand-neutral-800">About </span>
              <span className="text-black">QTest Solutions</span>
            </h2>

            <div className="mt-4 flex justify-center mb-6">
              <div className="w-20 h-0.5 bg-gradient-to-r from-brand-sage-500 via-brand-lavender-500 to-brand-coral-500 rounded-full" />
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-6 items-stretch mb-12">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Mission Card */}
              <div className="glass-professional p-6 rounded-2xl shadow-professional h-[200px] flex flex-col justify-between">
                <h3 className="text-lg font-bold text-brand-neutral-800 mb-4 flex items-center gap-2">
                  {/* <div className="w-2 h-6 bg-gradient-to-b from-brand-sage-500 to-brand-lavender-500 rounded-full" /> */}
                  Our Mission
                </h3>
                <p className="text-sm text-brand-neutral-600 leading-relaxed font-medium">
                  We are{" "}
                  <span className="text-brand-sage-600 font-semibold">
                    pioneers in quality assurance
                  </span>
                  and testing solutions, combining cutting-edge technology with
                  deep industry expertise to deliver exceptional results that
                  transform businesses.
                </p>
              </div>

              {/* Expertise Card */}
              <div className="glass-professional p-6 rounded-2xl shadow-professional h-[200px] flex flex-col justify-between">
                <h3 className="text-lg font-bold text-brand-neutral-800 mb-4 flex items-center gap-2">
                  {/* <div className="w-2 h-6 bg-gradient-to-b from-brand-lavender-500 to-brand-coral-500 rounded-full" /> */}
                  Our Expertise
                </h3>
                <p className="text-sm text-brand-neutral-600 leading-relaxed font-medium">
                  Our team consists of{" "}
                  <span className="text-brand-lavender-600 font-semibold">
                    seasoned professionals
                  </span>
                  with years of experience in software testing, quality
                  assurance, and training. We bring industry best practices to
                  every project.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Commitment Card */}
              <div className="glass-professional p-6 rounded-2xl shadow-professional h-[200px] flex flex-col justify-between">
                <h3 className="text-lg font-bold text-brand-neutral-800 mb-4 flex items-center gap-2">
                  {/* <div className="w-2 h-6 bg-gradient-to-b from-brand-coral-500 to-brand-sage-500 rounded-full" /> */}
                  Our Commitment
                </h3>
                <p className="text-sm text-brand-neutral-600 leading-relaxed font-medium">
                  We understand the{" "}
                  <span className="text-brand-coral-600 font-semibold">
                    unique challenges
                  </span>
                  faced by startups and career aspirations of students, allowing
                  us to provide tailored solutions that drive sustainable
                  success.
                </p>
              </div>

              {/* Core Values Card */}
              <div className="glass-professional p-6 rounded-2xl shadow-professional h-[200px] flex flex-col justify-between">
                <h3 className="text-lg font-bold text-brand-neutral-800 mb-4 flex items-center gap-2">
                  {/* <div className="w-2 h-6 bg-gradient-to-b from-brand-sage-500 to-brand-coral-500 rounded-full" /> */}
                  Our Core Values
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 rounded-xl bg-brand-sage-50/50 border border-brand-sage-100/50">
                    <div className="w-10 h-10 bg-brand-sage-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Award className="w-5 h-5 text-brand-sage-600" />
                    </div>
                    <span className="text-sm font-semibold text-brand-sage-700">
                      Excellence
                    </span>
                    <p className="text-xs text-brand-sage-600 mt-1">
                      Quality First
                    </p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-brand-lavender-50/50 border border-brand-lavender-100/50">
                    <div className="w-10 h-10 bg-brand-lavender-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Lightbulb className="w-5 h-5 text-brand-lavender-600" />
                    </div>
                    <span className="text-sm font-semibold text-brand-lavender-700">
                      Innovation
                    </span>
                    <p className="text-xs text-brand-lavender-600 mt-1">
                      Future Ready
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group bg-white/70 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="mb-4 flex justify-center">
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                      index % 4 === 0
                        ? "bg-sky-100 text-sky-600"
                        : index % 4 === 1
                        ? "bg-emerald-100 text-emerald-600"
                        : index % 4 === 2
                        ? "bg-violet-100 text-violet-600"
                        : "bg-amber-100 text-amber-600"
                    }`}
                  >
                    <stat.icon className="w-7 h-7" />
                  </div>
                </div>

                <div
                  className={`text-3xl md:text-4xl font-bold mb-2 ${
                    index % 4 === 0
                      ? "text-sky-600"
                      : index % 4 === 1
                      ? "text-emerald-600"
                      : index % 4 === 2
                      ? "text-violet-600"
                      : "text-amber-600"
                  }`}
                >
                  {stat.number}
                </div>

                <div className="text-slate-600 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div> */}

          {/* Call to Action */}
          {/* <div className="mt-16 bg-gradient-to-r from-emerald-600 to-blue-600 text-white rounded-3xl p-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Testing Strategy?
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Join hundreds of companies that trust QTest Solutions for their
              quality assurance needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-emerald-600 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
                Start Your Project
              </button>
              <button className="px-8 py-3 border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
