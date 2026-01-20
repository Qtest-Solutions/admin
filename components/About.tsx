import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Target,
  Shield,
  Users,
  Zap,
  Clock,
  Code,
  TestTube,
  Settings,
  Smartphone,
  Server,
  Lock,
  FileCheck,
} from "lucide-react";

export const metadata = {
  title: "About Us | QTest Solutions",
  description:
    "QTest Solutions is a QA-first software testing consultancy helping product teams improve reliability through disciplined testing practices.",
};

export default function AboutPage() {
  return (
    <main className="bg-[#f6f8f8]">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        {/* Mesh Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[60%] h-[60%] bg-teal-300/20 blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-teal-400/10 blur-[140px]" />
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-20 lg:px-40 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 border border-gray-200 rounded-full mb-6">
              <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
              <span className="text-gray-700 text-sm font-medium">
                About QTest Solutions
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              A <span className="text-teal-500">QA-First</span> Software Testing
              Consultancy
            </h1>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-10">
              We help product teams build reliable software through structured
              testing, clear reporting, and disciplined QA practices. Quality
              isn't an afterthought — it's our foundation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold rounded-full transition-all duration-500 flex items-center gap-3 shadow-lg hover:shadow-teal-500/25 hover:scale-105"
              >
                Start a Conversation
                <span className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 group-hover:rotate-45">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
              <Link
                href="/services"
                className="px-6 py-3 rounded-full bg-white/60 border border-gray-200 text-gray-800 font-semibold hover:bg-white transition-all"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & BELIEF */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-20 lg:px-40">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
            {/* Mission Card */}
            <div className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-700 leading-relaxed">
                To help startups and growing companies release stable,
                predictable software by embedding quality assurance as a core
                engineering discipline from day one. We believe every product
                deserves professional QA — regardless of team size.
              </p>
            </div>

            {/* Belief Card */}
            <div className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Our Belief
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Quality is not a phase or a final checkpoint. It's a continuous
                practice that protects user trust, business reputation, and
                long-term product value. We treat every bug found as a problem
                solved before it reaches your users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-20 lg:py-28 bg-[#f6f8f8] relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-0 w-[40%] h-[40%] bg-teal-300/10 blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-20 lg:px-40">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 border border-gray-200 rounded-full mb-4">
              <Users className="w-4 h-4 text-teal-500" />
              <span className="text-gray-700 text-sm font-medium">
                Who We Are
              </span>
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Built for <span className="text-teal-500">Growing Teams</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              A focused consultancy designed to bring enterprise-grade QA
              practices to startups and scaling companies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Settings,
                title: "Specialized Focus",
                description:
                  "We're not a general IT company. Quality assurance is our sole focus, which means deeper expertise and better results for your product.",
              },
              {
                icon: Users,
                title: "Dedicated Team",
                description:
                  "A tight-knit group of QA engineers who care about craftsmanship. We work as an extension of your team, not just vendors.",
              },
              {
                icon: Target,
                title: "Startup-Friendly",
                description:
                  "We understand startup constraints. Flexible engagements, transparent pricing, and processes that adapt to your pace.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE & EXPOSURE */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-20 lg:px-40">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 border border-teal-100 rounded-full mb-4">
                <Zap className="w-4 h-4 text-teal-500" />
                <span className="text-teal-700 text-sm font-medium">
                  Our Experience
                </span>
              </span>

              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Practical <span className="text-teal-500">Hands-On</span>{" "}
                Expertise
              </h2>

              <p className="text-gray-700 leading-relaxed mb-8">
                Our team has built expertise through real-world testing
                engagements across healthcare, e-commerce, and SaaS platforms.
                We've seen what works, what breaks, and how to prevent issues
                before they reach production.
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: "Healthcare Software Testing",
                    description:
                      "Experience with compliance-sensitive healthcare platforms requiring rigorous QA processes",
                  },
                  {
                    title: "E-Commerce Platform Testing",
                    description:
                      "Performance and reliability testing for high-traffic online retail systems",
                  },
                  {
                    title: "Enterprise-Grade Practices",
                    description:
                      "QA methodologies influenced by industry best practices and structured frameworks",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-teal-200 hover:bg-teal-50/50 transition-all duration-200"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-teal-300/20 blur-[80px] rounded-3xl" />
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <div className="flex items-center justify-between bg-green-50 rounded-xl px-4 py-3 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-500 text-white p-2 rounded-full">
                      <CheckCircle size={18} />
                    </div>
                    <div>
                      <p className="font-semibold text-green-700">
                        Quality Focused
                      </p>
                      <p className="text-xs text-green-600">
                        Every test matters
                      </p>
                    </div>
                  </div>
                  <span className="text-xl font-bold text-green-600">100%</span>
                </div>

                <div className="space-y-4">
                  {[
                    "Structured test planning & execution",
                    "Clear, actionable defect reports",
                    "Continuous communication throughout",
                    "Flexible engagement models",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3"
                    >
                      <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES & TOOLS */}
      <section className="py-20 lg:py-28 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[60%] h-[60%] bg-teal-500/10 blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-teal-400/5 blur-[140px]" />
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-20 lg:px-40">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/20 border border-teal-500/30 rounded-full mb-4">
              <Code className="w-4 h-4 text-teal-400" />
              <span className="text-teal-400 text-sm font-medium">
                Our Capabilities
              </span>
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              What We <span className="text-teal-400">Work With</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Comprehensive testing services powered by industry-standard tools
              and frameworks.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Testing Services */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl flex items-center justify-center">
                  <TestTube className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Testing Services
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: FileCheck, name: "Manual Testing" },
                  { icon: Code, name: "Automation Testing" },
                  { icon: Settings, name: "Regression Testing" },
                  { icon: Server, name: "API Testing" },
                  { icon: Zap, name: "Performance Testing" },
                  { icon: Lock, name: "Security Testing" },
                  { icon: Smartphone, name: "Mobile Testing" },
                  { icon: Target, name: "Exploratory Testing" },
                ].map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white/5 rounded-lg px-4 py-3 hover:bg-white/10 transition-colors"
                  >
                    <service.icon className="w-4 h-4 text-teal-400" />
                    <span className="text-sm text-gray-300">{service.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Technologies */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl flex items-center justify-center">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Tools & Technologies
                </h3>
              </div>

              <div className="space-y-4">
                {[
                  {
                    category: "Automation",
                    tools: "Selenium, Cypress, Playwright",
                  },
                  { category: "API Testing", tools: "Postman, RestAssured" },
                  { category: "Performance", tools: "JMeter, K6" },
                  {
                    category: "Management",
                    tools: "Jira, TestRail, Zephyr",
                  },
                  { category: "CI/CD", tools: "Jenkins, GitHub Actions" },
                  { category: "Mobile", tools: "Appium, BrowserStack" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-white/5 rounded-lg px-4 py-3 hover:bg-white/10 transition-colors"
                  >
                    <span className="text-sm font-medium text-gray-300">
                      {item.category}
                    </span>
                    <span className="text-sm text-teal-400">{item.tools}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESPONSIBILITY & PRACTICES */}
      <section className="py-20 lg:py-28 bg-[#f6f8f8] relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-teal-400/10 blur-[140px]" />
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-20 lg:px-40">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 border border-gray-200 rounded-full mb-4">
              <Shield className="w-4 h-4 text-teal-500" />
              <span className="text-gray-700 text-sm font-medium">
                How We Work
              </span>
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Professional <span className="text-teal-500">Practices</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              We follow industry best practices in every engagement, ensuring
              transparency, security, and reliable outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Lock,
                title: "NDA Protection",
                description:
                  "Confidential work with signed NDAs when required for sensitive projects",
              },
              {
                icon: FileCheck,
                title: "Clear Reporting",
                description:
                  "Detailed, actionable defect reports with steps to reproduce and severity",
              },
              {
                icon: Shield,
                title: "Secure Handling",
                description:
                  "Safe management of test data, credentials, and access permissions",
              },
              {
                icon: Users,
                title: "Honest Communication",
                description:
                  "Realistic timelines, transparent updates, and no surprise scope changes",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY WORK WITH US */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-20 lg:px-40">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Stats Grid */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-teal-300/20 blur-[80px] rounded-3xl" />
                <div className="relative grid grid-cols-2 gap-4">
                  {[
                    {
                      value: "100%",
                      label: "QA Focus",
                      subtitle: "Specialized expertise",
                    },
                    {
                      value: "Fast",
                      label: "Turnaround",
                      subtitle: "Quick feedback loops",
                    },
                    {
                      value: "Flexible",
                      label: "Engagement",
                      subtitle: "Adapt to your needs",
                    },
                    {
                      value: "Clear",
                      label: "Communication",
                      subtitle: "No surprises",
                    },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:border-teal-200 transition-colors text-center"
                    >
                      <div className="text-2xl font-bold text-teal-500 mb-1">
                        {stat.value}
                      </div>
                      <div className="font-semibold text-gray-900 text-sm mb-1">
                        {stat.label}
                      </div>
                      <div className="text-gray-500 text-xs">
                        {stat.subtitle}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 border border-teal-100 rounded-full mb-4">
                <Zap className="w-4 h-4 text-teal-500" />
                <span className="text-teal-700 text-sm font-medium">
                  Why QTest
                </span>
              </span>

              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Why Teams <span className="text-teal-500">Choose Us</span>
              </h2>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  We're not trying to be everything to everyone. We're a focused
                  QA consultancy that does one thing well: helping product teams
                  ship reliable software.
                </p>
                <p>
                  Whether you're a startup founder who needs QA support for your
                  first major release, or a growing team looking to establish
                  testing practices, we bring the same level of care and
                  discipline to every engagement.
                </p>
                <p>
                  No bloated proposals, no unnecessary complexity. Just
                  straightforward QA support that makes your product better.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Startup-Friendly",
                  "Clear Pricing",
                  "Fast Onboarding",
                  "No Lock-in",
                ].map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 lg:py-28 bg-[#f6f8f8]">
        <div className="max-w-4xl mx-auto px-6 md:px-20 lg:px-40">
          <div className="relative overflow-hidden bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl p-10 lg:p-16 text-center shadow-2xl shadow-teal-500/25">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-teal-400/30 rounded-full blur-2xl" />
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-6">
                <Clock className="w-4 h-4 text-white" />
                <span className="text-white text-sm font-medium">
                  Let's talk about your project
                </span>
              </div>

              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Looking for a Reliable QA Partner?
              </h2>

              <p className="text-lg text-teal-100 mb-8 max-w-2xl mx-auto">
                If you're building a product and want quality handled with care
                and discipline, we'd be happy to start the conversation. No
                pressure, just a friendly chat about your needs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-teal-600 font-semibold rounded-full hover:bg-gray-50 transition-all duration-200 shadow-lg hover:scale-105"
                >
                  Talk to Us
                  <span className="w-7 h-7 bg-teal-100 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/20 text-white font-semibold rounded-full border border-white/30 hover:bg-white/30 transition-all duration-200"
                >
                  View Services
                </Link>
              </div>

              <p className="mt-8 text-teal-100 text-sm">
                ✓ No commitment required &nbsp;&nbsp; ✓ Free initial
                consultation &nbsp;&nbsp; ✓ Flexible engagement
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}