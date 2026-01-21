"use client";

import React from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();
  const reduced = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-[#f6f8f8]"
    >
      {/* Offset for fixed header */}
      <div className="h-[150px]" />

      {/* Mesh background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[60%] h-[60%] bg-teal-300/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-teal-400/10 blur-[140px]" />
      </div>

      <div className="relative z-10 px-6 md:px-20 lg:px-40">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="flex flex-col gap-6">
            <motion.h1
              initial={reduced ? "show" : "hidden"}
              animate="show"
              variants={fadeUp}
              className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight text-gray-900"
            >
              QA-First Approach to{" "}
              <span className="text-teal-500">Scalable</span> Software
            </motion.h1>

            <motion.p
              initial={reduced ? "show" : "hidden"}
              animate="show"
              variants={fadeUp}
              className="text-lg md:text-xl text-gray-700 max-w-xl leading-relaxed"
            >
              Premium software testing services for startups, SaaS, and
              enterprises. We ensure every release is stable, secure, and
              performance-ready.
            </motion.p>

            {/* CTA row */}
            <motion.div
              initial={reduced ? "show" : "hidden"}
              animate="show"
              variants={fadeUp}
              className="flex items-center gap-4 pt-1"
            >
              <button
                onClick={() => router.push("/contact")}
                className="group relative px-5 py-2.5 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold rounded-full transition-all duration-500 flex items-center gap-3 shadow-lg hover:shadow-teal-500/25 hover:scale-105"
              >
                Get Free QA Consultation
                <span className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 group-hover:rotate-45">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>

              <button
                onClick={() => router.push("/case-studies")}
                className="x-5 px-5 py-2.5  rounded-full bg-white/60 border border-gray-200 text-gray-800 font-semibold hover:bg-white transition-all"
              >
                View Case Studies
              </button>
            </motion.div>
          </div>

          {/* RIGHT UI CARD (from image) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Floating stats */}
            {/* <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl px-4 py-2 text-sm font-semibold text-teal-600">
              99.9% <span className="block text-xs text-gray-500">Accuracy Rate</span>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl px-4 py-2 text-sm font-semibold text-teal-600">
              150+ <span className="block text-xs text-gray-500">Happy Clients</span>
            </div> */}

            {/* Main card */}
            <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
              {/* Status */}
              <div className="flex items-center justify-between bg-green-50 rounded-xl px-4 py-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="bg-green-500 text-white p-2 rounded-full">
                    <CheckCircle size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-green-700">
                      All Tests Passed
                    </p>
                    <p className="text-xs text-green-600">
                      No critical issues found
                    </p>
                  </div>
                </div>
                <span className="text-xl font-bold text-green-600">100%</span>
              </div>

              {/* Checklist */}
              <ul className="space-y-4">
                {[
                  "Security Scan",
                  "Performance Test",
                  "API Validation",
                  "UI/UX Check",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center justify-between bg-gray-50 rounded-lg px-4 py-3"
                  >
                    <span className="text-sm font-medium text-gray-700">
                      {item}
                    </span>
                    <CheckCircle className="text-teal-500" size={18} />
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
