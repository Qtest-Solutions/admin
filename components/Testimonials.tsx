import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative px-6 md:px-20 lg:px-40 py-28 bg-transparent"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Trusted by teams across healthcare and eCommerce to deliver stable,
            secure, and high-quality software.
          </p>
        </div>

        {/* TESTIMONIAL CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Dentobees */}
          <div className="bg-white/50 border border-white/30 rounded-2xl p-8 shadow-lg">
            <Quote className="w-8 h-8 text-teal-500 mb-6" />

            <p className="text-gray-700 leading-relaxed mb-6">
              QTest played a critical role in ensuring the reliability and
              accuracy of our healthcare software. Their testing approach helped
              us identify critical issues early and maintain high standards of
              quality throughout our releases.
            </p>

            <div className="pt-4 border-t border-gray-200">
              <p className="font-semibold text-gray-900">Dentobees</p>
              <p className="text-sm text-gray-600">Healthcare Sector</p>
            </div>
          </div>

          {/* Kartocart */}
          <div className="bg-white/50 border border-white/30 rounded-2xl p-8 shadow-lg">
            <Quote className="w-8 h-8 text-teal-500 mb-6" />

            <p className="text-gray-700 leading-relaxed mb-6">
              With QTest as our QA partner, we significantly improved platform
              stability during high-traffic sales periods. Their testing
              expertise helped us release updates faster without compromising
              performance or user experience.
            </p>

            <div className="pt-4 border-t border-gray-200">
              <p className="font-semibold text-gray-900">Kartocart</p>
              <p className="text-sm text-gray-600">eCommerce Platform</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
