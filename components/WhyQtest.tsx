import {
  ShieldCheck,
  Users,
  FileCheck2,
  Timer,
  Repeat,
  TrendingUp,
} from "lucide-react";

export default function WhyChooseQTest() {
  return (
    <section
      id="why-qtest"
      className="relative px-6 md:px-20 lg:px-40 py-28 bg-white/30 backdrop-blur-sm"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
            Why Choose QTest Solutions
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We are not a generic IT services company. QTest is a{" "}
            <span className="font-semibold">
              dedicated software testing partner
            </span>{" "}
            focused on delivering reliability, transparency, and measurable
            quality improvements.
          </p>
        </div>

        {/* DIFFERENTIATORS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              icon: ShieldCheck,
              title: "QA-First Mindset",
              desc:
                "Quality assurance is not an add-on for us. Testing is our core service, approach, and expertise.",
            },
            {
              icon: Users,
              title: "Dedicated QA Engineers",
              desc:
                "You work with a dedicated testing team that understands your product, domain, and release cycles.",
            },
            {
              icon: FileCheck2,
              title: "Clear Reporting & Transparency",
              desc:
                "Actionable defect reports, clear documentation, and complete visibility into test coverage and results.",
            },
            {
              icon: Timer,
              title: "Faster Release Cycles",
              desc:
                "Early defect detection and efficient testing processes help you release faster with confidence.",
            },
            {
              icon: Repeat,
              title: "Flexible Engagement Models",
              desc:
                "Choose from project-based, monthly, or long-term QA engagement models based on your needs.",
            },
            {
              icon: TrendingUp,
              title: "Proven Business Impact",
              desc:
                "Our testing processes reduce production issues, improve user experience, and lower long-term costs.",
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group bg-white/50 border border-white/30 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all"
              >
                <div className="mx-auto mb-5 size-14 rounded-xl bg-teal-500/10 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-teal-600" />
                </div>

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

        {/* CTA STRIP */}
        <div className="text-center mt-20">
          <p className="text-gray-700 mb-6">
            Ready to partner with a QA team that takes quality seriously?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold rounded-full transition-all shadow-lg hover:shadow-teal-500/25"
          >
            Talk to a QA Expert
          </a>
        </div>
      </div>
    </section>
  );
}
