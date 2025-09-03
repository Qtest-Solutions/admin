import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    { icon: Mail, title: "Email", info: "contact@qtestsolutions.com" },
    { icon: Phone, title: "Phone", info: "+1 (555) 123-4567" },
    { icon: MapPin, title: "Address", info: "123 Innovation Drive, Tech City, TC 12345" }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your testing process? Let's discuss how we can help you achieve exceptional quality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center group">
                  <div className="relative mr-6">
                    <div className="backdrop-blur-sm border rounded-2xl p-4 transition-all duration-300" style={{
                      background: `linear-gradient(to bottom right, rgba(80, 188, 183, 0.2), rgba(41, 159, 208, 0.2))`,
                      borderColor: 'rgba(80, 188, 183, 0.3)'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(80, 188, 183, 0.5)'}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(80, 188, 183, 0.3)'}
                    >
                      <info.icon className="w-6 h-6 transition-colors duration-300" style={{ color: '#50bcb7' }} />
                    </div>
                    <div className="absolute inset-0 blur-lg rounded-2xl transition-colors duration-300 -z-10" style={{ backgroundColor: 'rgba(80, 188, 183, 0.2)' }}></div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white transition-colors duration-300">
                      {info.title}
                    </h4>
                    <p className="text-gray-400">{info.info}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border rounded-3xl p-8 transition-all duration-300" style={{ borderColor: 'rgba(80, 188, 183, 0.2)' }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(80, 188, 183, 0.4)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(80, 188, 183, 0.2)'}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#50bcb7' }}>Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none transition-all duration-300"
                      style={{ 
                        '--focus-border': '#50bcb7',
                        '--focus-ring': 'rgba(80, 188, 183, 0.2)'
                      } as React.CSSProperties}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#50bcb7';
                        e.currentTarget.style.boxShadow = `0 0 0 2px rgba(80, 188, 183, 0.2)`;
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(107, 114, 128, 0.5)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#50bcb7' }}>Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none transition-all duration-300"
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#50bcb7';
                        e.currentTarget.style.boxShadow = `0 0 0 2px rgba(80, 188, 183, 0.2)`;
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(107, 114, 128, 0.5)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#50bcb7' }}>Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none transition-all duration-300"
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#50bcb7';
                      e.currentTarget.style.boxShadow = `0 0 0 2px rgba(80, 188, 183, 0.2)`;
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(107, 114, 128, 0.5)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                    placeholder="Your company"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#50bcb7' }}>Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none transition-all duration-300 resize-none"
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#50bcb7';
                      e.currentTarget.style.boxShadow = `0 0 0 2px rgba(80, 188, 183, 0.2)`;
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(107, 114, 128, 0.5)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                    placeholder="Tell us about your testing needs..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg group"
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
                  Send Message
                  <Send className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>
            </div>
            <div className="absolute -inset-4 rounded-3xl blur-xl -z-10" style={{ background: `linear-gradient(to right, rgba(80, 188, 183, 0.1), rgba(41, 159, 208, 0.1))` }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;