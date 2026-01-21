import { notFound } from "next/navigation";
import Link from "next/link";
import { services } from "../../../data/service";
import { 
  CheckCircle, 
  ArrowRight, 
  Zap, 
  Shield, 
  TrendingUp,
  Clock,
  Users,
  Target,
  ChevronRight
} from "lucide-react";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";

type Props = {
  params: {
    slug: string;
  };
};

/* ---------- SEO METADATA ---------- */
export function generateMetadata({ params }: Props) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) return {};

  return {
    title: service.seo.title,
    description: service.seo.description,
  };
}

/* ---------- PAGE ---------- */
export default function ServiceSlugPage({ params }: Props) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== params.slug).slice(0, 3);

  return (
      <div className="relative min-h-screen  bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
          <Header />
          <main className="bg-[#f6f8f8] pt-10">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#f6f8f8]">
        {/* Mesh Background - matching Hero */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[60%] h-[60%] bg-teal-300/20 blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-teal-400/10 blur-[140px]" />
        </div>
        
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-20 lg:px-40 py-24 lg:py-32">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-teal-600 transition">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/services" className="hover:text-teal-600 transition">Services</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-teal-600 font-medium">{service.name}</span>
          </nav>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 border border-gray-200 rounded-full mb-6">
                <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
                <span className="text-gray-700 text-sm font-medium">Enterprise QA Services</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {service.name.split(' ')[0]}{' '}
                <span className="text-teal-500">{service.name.split(' ').slice(1).join(' ')}</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 max-w-xl">
                {service.intro}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href="/contact"
                  className="group px-5 py-2.5 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold rounded-full transition-all duration-500 flex items-center gap-3 shadow-lg hover:shadow-teal-500/25 hover:scale-105"
                >
                  Get Free Consultation
                  <span className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 group-hover:rotate-45">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
                <Link
                  href="#process"
                  className="px-5 py-2.5 rounded-full bg-white/60 border border-gray-200 text-gray-800 font-semibold hover:bg-white transition-all"
                >
                  View Our Process
                </Link>
              </div>
            </div>
            
            {/* Stats Card - matching Hero style */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
                {/* Status */}
                <div className="flex items-center justify-between bg-green-50 rounded-xl px-4 py-3 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-500 text-white p-2 rounded-full">
                      <CheckCircle size={18} />
                    </div>
                    <div>
                      <p className="font-semibold text-green-700">Service Benefits</p>
                      <p className="text-xs text-green-600">Proven Results</p>
                    </div>
                  </div>
                  <span className="text-xl font-bold text-green-600">100%</span>
                </div>

                {/* Impact Stats */}
                <div className="space-y-4">
                  {service.businessImpact.map((impact, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between bg-gray-50 rounded-lg px-4 py-3"
                    >
                      <div>
                        <span className="text-sm font-medium text-gray-700">{impact.title}</span>
                        <p className="text-xs text-gray-500">{impact.description}</p>
                      </div>
                      <span className="text-lg font-bold text-teal-500">{impact.metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED BY SECTION */}
      {/* <section className="border-y border-gray-200 bg-white/50">
        <div className="max-w-[1280px] mx-auto px-6 md:px-20 lg:px-40 py-12">
          <p className="text-center text-sm font-medium text-gray-500 mb-8">
            TRUSTED BY INDUSTRY LEADERS
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-60">
            {['TechCorp', 'FinanceHub', 'HealthFirst', 'RetailPro', 'CloudScale'].map((company) => (
              <div key={company} className="text-xl font-bold text-gray-400">
                {company}
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* WHEN TO USE SECTION */}
      <section className="py-20 lg:py-28 bg-[#f6f8f8] relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-0 w-[40%] h-[40%] bg-teal-300/10 blur-[100px]" />
        </div>
        
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-20 lg:px-40">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 border border-gray-200 rounded-full mb-4">
              <Target className="w-4 h-4 text-teal-500" />
              <span className="text-gray-700 text-sm font-medium">Use Cases</span>
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              When You Need <span className="text-teal-500">{service.name}</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Identify the right scenarios where our expertise delivers maximum value for your business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.whenToUse.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-6 h-6 text-white" />
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

      {/* WHAT WE TEST SECTION */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-20 lg:px-40">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 border border-teal-100 rounded-full mb-4">
                <CheckCircle className="w-4 h-4 text-teal-500" />
                <span className="text-teal-700 text-sm font-medium">Comprehensive Coverage</span>
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                What We <span className="text-teal-500">Test</span>
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Our expert QA engineers employ industry best practices and cutting-edge tools to deliver thorough testing coverage across all critical areas of your application.
              </p>
              
              <div className="space-y-4">
                {service.whatWeTest.map((item, index) => (
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
            
            {/* Visual Card - matching Hero style */}
            <div className="relative">
              <div className="absolute inset-0 bg-teal-300/20 blur-[80px] rounded-3xl" />
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 hover:border-teal-200 transition-colors">
                    <Zap className="w-8 h-8 text-teal-500 mb-3" />
                    <div className="font-semibold text-gray-900">Fast Execution</div>
                    <div className="text-gray-600 text-sm">Results in days, not weeks</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 hover:border-teal-200 transition-colors">
                    <Shield className="w-8 h-8 text-teal-500 mb-3" />
                    <div className="font-semibold text-gray-900">Secure Process</div>
                    <div className="text-gray-600 text-sm">NDA protected testing</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 hover:border-teal-200 transition-colors">
                    <Users className="w-8 h-8 text-teal-500 mb-3" />
                    <div className="font-semibold text-gray-900">Expert Team</div>
                    <div className="text-gray-600 text-sm">Certified QA engineers</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 hover:border-teal-200 transition-colors">
                    <TrendingUp className="w-8 h-8 text-teal-500 mb-3" />
                    <div className="font-semibold text-gray-900">Detailed Reports</div>
                    <div className="text-gray-600 text-sm">Actionable insights</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section id="process" className="py-20 lg:py-28 bg-[#f6f8f8] relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-teal-400/10 blur-[140px]" />
        </div>
        
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-20 lg:px-40">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 border border-gray-200 rounded-full mb-4">
              <Zap className="w-4 h-4 text-teal-500" />
              <span className="text-gray-700 text-sm font-medium">Our Methodology</span>
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How We Deliver <span className="text-teal-500">Results</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              A proven, transparent process that keeps you informed at every stage.
            </p>
          </div>
          
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-teal-500 via-teal-400 to-teal-300" />
            
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
              {service.process.map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative z-10 w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-teal-500/25">
                      <span className="text-xl font-bold text-white">{step.step}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS IMPACT SECTION */}
      <section className="py-20 lg:py-28 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[60%] h-[60%] bg-teal-500/10 blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-teal-400/5 blur-[140px]" />
        </div>
        
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-20 lg:px-40">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/20 border border-teal-500/30 rounded-full mb-4">
              <TrendingUp className="w-4 h-4 text-teal-400" />
              <span className="text-teal-400 text-sm font-medium">Measurable Results</span>
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Business <span className="text-teal-400">Impact</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Real outcomes that drive ROI and competitive advantage for your organization.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {service.businessImpact.map((impact, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-5xl lg:text-6xl font-bold text-teal-400 mb-4">
                  {impact.metric}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {impact.title}
                </h3>
                <p className="text-gray-400">
                  {impact.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER SERVICES SECTION */}
      <section className="py-20 lg:py-28 bg-[#f6f8f8] relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-teal-300/10 blur-[100px]" />
        </div>
        
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-20 lg:px-40">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 border border-gray-200 rounded-full mb-4">
              <Zap className="w-4 h-4 text-teal-500" />
              <span className="text-gray-700 text-sm font-medium">Complete QA Solutions</span>
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Explore Other <span className="text-teal-500">Services</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Comprehensive testing solutions to cover all your quality assurance needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {otherServices.map((otherService) => (
              <Link
                key={otherService.slug}
                href={`/services/${otherService.slug}`}
                className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-r group-hover:from-teal-500 group-hover:to-teal-600 transition-all duration-300">
                  <Zap className="w-7 h-7 text-gray-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors duration-200">
                  {otherService.name}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {otherService.intro}
                </p>
                <span className="inline-flex items-center gap-2 text-teal-600 font-medium">
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 lg:py-28 bg-white">
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
                <span className="text-white text-sm font-medium">Free 30-min consultation</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Ready to Improve Your {service.name}?
              </h2>
              
              <p className="text-lg text-teal-100 mb-8 max-w-2xl mx-auto">
                Speak with our QA experts to discuss your specific requirements and get a customized testing strategy for your product.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-teal-600 font-semibold rounded-full hover:bg-gray-50 transition-all duration-200 shadow-lg hover:scale-105"
                >
                  Schedule a Call
                  <span className="w-7 h-7 bg-teal-100 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/20 text-white font-semibold rounded-full border border-white/30 hover:bg-white/30 transition-all duration-200"
                >
                  View Case Studies
                </Link>
              </div>
              
              <p className="mt-8 text-teal-100 text-sm">
                ✓ No commitment required &nbsp;&nbsp; ✓ Custom proposal within 48 hours &nbsp;&nbsp; ✓ NDA available
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
          <Footer />
        </div>
 
  );
}