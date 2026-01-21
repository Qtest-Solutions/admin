import { ClipboardCheck, ListChecks, Bug, BarChart3 } from "lucide-react";

export default function HowItWorks() {
  return (
    <section
      id="process"
      className="relative px-6 md:px-20 lg:px-40 py-28 bg-transparent"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
            How We Work
          </h2>
          <p className="text-gray-700 leading-relaxed">
            A simple, transparent, and proven QA process designed to ensure
            consistent software quality at every stage of development.
          </p>
        </div>

        {/* PROCESS STEPS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            {
              step: "01",
              icon: ClipboardCheck,
              title: "Requirement Analysis",
              desc: "We understand your product, business goals, and quality expectations to define the right testing approach.",
            },
            {
              step: "02",
              icon: ListChecks,
              title: "Test Strategy & Planning",
              desc: "We design a comprehensive test plan covering scope, tools, timelines, and risk areas.",
            },
            {
              step: "03",
              icon: Bug,
              title: "Test Execution & Reporting",
              desc: "Our QA engineers execute test cases, log defects, and provide clear, actionable reports.",
            },
            {
              step: "04",
              icon: BarChart3,
              title: "Continuous Support",
              desc: "We support ongoing releases with regression testing, performance checks, and quality monitoring.",
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative bg-white/50 border border-white/30 rounded-2xl p-8 text-center shadow-lg"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-teal-500 text-white text-sm font-bold px-4 py-1 rounded-full shadow-md">
                  {item.step}
                </div>

                {/* Icon */}
                <div className="mx-auto mt-6 mb-5 size-14 rounded-xl bg-teal-500/10 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-teal-600" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* OPTIONAL CTA LINE */}
        {/* <div className="text-center mt-20">
          <p className="text-gray-700 mb-6">
            Looking for a reliable QA partner for your next release?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold rounded-full transition-all shadow-lg hover:shadow-teal-500/25"
          >
            Start Your QA Engagement
          </a>
        </div> */}
      </div>
    </section>
  );
}
