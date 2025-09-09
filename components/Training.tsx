import {
  CheckCircle,
  Users,
  Award,
  Clock,
  Briefcase,
  BookOpen,
  ArrowRight,
} from "lucide-react";

const Training = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Hands-on practical training",
    },
    {
      icon: Users,
      title: "Industry-experienced instructors",
    },
    {
      icon: Briefcase,
      title: "Job placement assistance",
    },
    {
      icon: Clock,
      title: "Flexible scheduling options",
    },
    {
      icon: CheckCircle,
      title: "Real-world project experience",
    },
    {
      icon: Award,
      title: "Certification upon completion",
    },
  ];

  return (
    <section id="training" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-8">
            Training Programs
          </h2>
          <h3 className="text-3xl font-semibold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Launch Your QA Career
          </h3>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Our comprehensive training programs are designed to take you from
            beginner to job-ready QA professional. With hands-on projects and
            industry-relevant curriculum.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-4 bg-white/5 backdrop-blur-sm border rounded-2xl transition-all duration-300 hover:bg-white/10"
                style={{ borderColor: "rgba(80, 188, 183, 0.2)" }}
              >
                <feature.icon
                  className="w-6 h-6 flex-shrink-0"
                  style={{ color: "#50bcb7" }}
                />
                <span className="text-gray-300 text-left">{feature.title}</span>
              </div>
            ))}
          </div>

          <button
            className="group text-white px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            style={{
              background: "linear-gradient(to right, #50bcb7, #299fd0)",
              boxShadow: "0 10px 25px rgba(80, 188, 183, 0.25)",
            }}
          >
            Enroll Now
            <ArrowRight className="inline-block ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Training;
