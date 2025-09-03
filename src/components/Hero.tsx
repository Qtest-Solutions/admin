import React from 'react';
import { ArrowRight, Zap, Shield, Target } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 flex items-center justify-center space-x-4">
            <div className="flex items-center space-x-2 backdrop-blur-sm border rounded-full px-4 py-2" style={{ 
              background: `linear-gradient(to right, rgba(80, 188, 183, 0.1), rgba(41, 159, 208, 0.1))`,
              borderColor: 'rgba(80, 188, 183, 0.2)'
            }}>
              <Zap className="w-4 h-4" style={{ color: '#50bcb7' }} />
              <span className="text-sm font-medium" style={{ color: '#50bcb7' }}>Next-Gen Testing Solutions</span>
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent leading-tight">
            Revolutionize Your
            <br />
            <span className="bg-gradient-to-r bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(to right, #50bcb7, #299fd0)` }}>
              Testing Process
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Cutting-edge quality assurance solutions powered by AI and automation. 
            Transform your software testing with precision, speed, and intelligence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <button 
              className="group text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              style={{ 
                background: `linear-gradient(to right, #50bcb7, #299fd0)`,
                boxShadow: '0 10px 25px rgba(80, 188, 183, 0.25)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = `linear-gradient(to right, #4aa8a3, #2590c1)`;
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(80, 188, 183, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = `linear-gradient(to right, #50bcb7, #299fd0)`;
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(80, 188, 183, 0.25)';
              }}
            >
              Start Your Journey
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button 
              className="border-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 backdrop-blur-sm"
              style={{ 
                borderColor: 'rgba(80, 188, 183, 0.5)',
                color: '#50bcb7'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#50bcb7';
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.backgroundColor = 'rgba(80, 188, 183, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(80, 188, 183, 0.5)';
                e.currentTarget.style.color = '#50bcb7';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              Learn More
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              { icon: Shield, title: "99.9% Accuracy", desc: "AI-powered precision testing" },
              { icon: Zap, title: "10x Faster", desc: "Automated testing workflows" },
              { icon: Target, title: "Zero Defects", desc: "Comprehensive quality assurance" }
            ].map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border rounded-2xl p-6 transition-all duration-300 group" style={{ borderColor: 'rgba(80, 188, 183, 0.2)' }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(80, 188, 183, 0.4)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(80, 188, 183, 0.2)'}
              >
                <feature.icon className="w-8 h-8 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" style={{ color: '#50bcb7' }} />
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;