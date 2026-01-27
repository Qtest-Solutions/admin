'use client';

import { useState, FormEvent, ChangeEvent, useEffect } from 'react';
import Image from 'next/image';
import {
  GraduationCap,
  Users,
  Briefcase,
  CheckCircle,
  ArrowRight,
  Award,
  Target,
  Zap,
  Code,
  TrendingUp,
  MessageCircle,
  ChevronDown,
  AlertCircle,
  X,
  BookOpen,
  FileText,
  GitBranch,
  Search,
  ClipboardCheck,
  Lightbulb,
  Send,
  FileCheck,
  CheckCircle2,
  Sparkles,
  Coffee,
  Palette,
  Megaphone,
  Monitor,
  Layers,
  Brain, // Added for AI icon
} from 'lucide-react';

// Types remain the same...
interface FormData {
  name: string;
  email: string;
  phone: string;
  college: string;
  degree: string;
  currentStatus: string;
  domain: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  college?: string;
  degree?: string;
  currentStatus?: string;
  domain?: string;
  submit?: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface InternshipDomain {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: string[];
  color: 'teal' | 'cyan' | 'emerald' | 'slate';
}

export default function InternshipPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    college: '',
    degree: '',
    currentStatus: '',
    domain: '',
    message: '',
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Color helper function
  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; icon: string; iconBg: string; text: string; gradient: string }> = {
      teal: {
        bg: 'from-teal-50/30 to-teal-100/20',
        border: 'border-teal-200/40 hover:border-teal-300/60',
        icon: 'text-teal-600',
        iconBg: 'bg-teal-50/50',
        text: 'text-teal-600',
        gradient: 'from-teal-500 to-teal-600',
      },
      cyan: {
        bg: 'from-cyan-50/30 to-cyan-100/20',
        border: 'border-cyan-200/40 hover:border-cyan-300/60',
        icon: 'text-cyan-600',
        iconBg: 'bg-cyan-50/50',
        text: 'text-cyan-600',
        gradient: 'from-cyan-500 to-cyan-600',
      },
      emerald: {
        bg: 'from-emerald-50/30 to-emerald-100/20',
        border: 'border-emerald-200/40 hover:border-emerald-300/60',
        icon: 'text-emerald-600',
        iconBg: 'bg-emerald-50/50',
        text: 'text-emerald-600',
        gradient: 'from-emerald-500 to-emerald-600',
      },
      slate: {
        bg: 'from-slate-50/30 to-slate-100/20',
        border: 'border-slate-200/40 hover:border-slate-300/60',
        icon: 'text-slate-600',
        iconBg: 'bg-slate-50/50',
        text: 'text-slate-600',
        gradient: 'from-slate-500 to-slate-600',
      },
    };
    return colors[color] || colors.teal;
  };

  // Internship Domains - UPDATED WITH AI/ML
  const internshipDomains: InternshipDomain[] = [
    {
      title: 'Software Testing & QA',
      description: 'Learn manual testing, automation, API testing, and quality assurance best practices.',
      icon: ClipboardCheck,
      skills: ['Manual Testing', 'Automation', 'API Testing', 'Bug Tracking'],
      color: 'teal',
    },
    {
      title: 'Software Development',
      description: 'Build real applications using modern technologies and development practices.',
      icon: Code,
      skills: ['Web Development', 'Backend', 'Databases', 'Version Control'],
      color: 'cyan',
    },
    {
      title: 'AI/ML & Data Science',
      description: 'Work on machine learning models, data analysis, and AI-powered solutions.',
      icon: Brain,
      skills: ['Machine Learning', 'Python', 'Data Analysis', 'Model Training'],
      color: 'slate',
    },
    {
      title: 'UI/UX Design',
      description: 'Create user-centered designs, wireframes, prototypes, and design systems.',
      icon: Palette,
      skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems'],
      color: 'emerald',
    },
    {
      title: 'Digital Marketing',
      description: 'Master SEO, social media marketing, content strategy, and analytics.',
      icon: Megaphone,
      skills: ['SEO', 'Social Media', 'Content Marketing', 'Analytics'],
      color: 'teal',
    },
  ];

  // What interns will learn - ADDED AI-RELATED TOPIC
  const learningTopics = [
    {
      icon: Search,
      title: 'Industry Best Practices',
      description: 'Learn current industry standards and methodologies used by professionals.',
      color: 'teal',
    },
    {
      icon: FileText,
      title: 'Documentation & Reporting',
      description: 'Master professional documentation, reporting, and communication skills.',
      color: 'cyan',
    },
    {
      icon: Code,
      title: 'Tools & Technologies',
      description: 'Get hands-on experience with industry-standard tools and technologies.',
      color: 'emerald',
    },
    {
      icon: Brain,
      title: 'AI & Automation',
      description: 'Explore AI tools, automation techniques, and emerging tech trends.',
      color: 'slate',
    },
    {
      icon: GitBranch,
      title: 'Version Control & Collaboration',
      description: 'Work with Git, project management tools, and team collaboration platforms.',
      color: 'cyan',
    },
    {
      icon: Lightbulb,
      title: 'Problem Solving',
      description: 'Develop critical thinking and problem-solving skills through real challenges.',
      color: 'emerald',
    },
  ];

  // What interns work on
  const workActivities = [
    { icon: Code, text: 'Working on practical projects and assignments' },
    { icon: Monitor, text: 'Building applications and testing scenarios' },
    { icon: FileCheck, text: 'Creating test cases and documentation' },
    { icon: GitBranch, text: 'Learning version control with Git and GitHub' },
    { icon: Layers, text: 'Developing a professional portfolio' },
    { icon: BookOpen, text: 'Following structured learning modules and tasks' },
  ];

  // Mentorship features
  const mentorshipFeatures = [
    {
      icon: Users,
      title: 'Guidance from Mentors',
      description: 'Get support and direction from experienced professionals throughout your internship.',
      color: 'teal',
    },
    {
      icon: MessageCircle,
      title: 'Feedback Sessions',
      description: 'Receive constructive feedback on your work to help you improve continuously.',
      color: 'cyan',
    },
    {
      icon: BookOpen,
      title: 'Structured Learning Path',
      description: 'Follow a clear roadmap covering essential skills and concepts in your domain.',
      color: 'emerald',
    },
    {
      icon: Briefcase,
      title: 'Real Workflow Exposure',
      description: 'Experience actual workflows and processes used in professional environments.',
      color: 'teal',
    },
  ];

  // Application process
  const applicationSteps = [
    { step: 1, icon: Send, title: 'Submit Application', description: 'Fill out the application form with your details' },
    { step: 2, icon: Search, title: 'Screening', description: 'We review your application and background' },
    { step: 3, icon: FileText, title: 'Assessment', description: 'Complete a simple task related to your domain' },
    { step: 4, icon: CheckCircle2, title: 'Confirmation', description: 'Receive confirmation and onboarding details' },
  ];

  // FAQs - UPDATED TO INCLUDE AI/ML
  const faqs: FAQ[] = [
    {
      question: 'Is prior experience required?',
      answer: 'No prior experience is required for most tracks. We look for candidates with genuine interest in learning, basic relevant skills, and a willingness to grow. Passion and learning mindset matter more than experience.',
    },
    {
      question: 'What domains are available for internship?',
      answer: 'We offer internships in Software Testing & QA, Software Development, AI/ML & Data Science, UI/UX Design, and Digital Marketing. Each track has its own curriculum and learning path tailored to industry requirements.',
    },
    {
      question: 'Do I need coding experience for AI/ML track?',
      answer: 'Basic programming knowledge (preferably Python) is helpful but not mandatory. We provide foundational training and gradually build up to more advanced AI/ML concepts. Your enthusiasm to learn matters most.',
    },
    {
      question: 'Is there job placement after the internship?',
      answer: 'We do not guarantee job placement. However, successful interns gain priority consideration for future openings when available. We believe in honest expectations rather than unrealistic promises.',
    },
    {
      question: 'Can I do this alongside college?',
      answer: 'Yes, we offer flexible timing options. Part-time commitments are available for students. We understand academic priorities and work around your schedule.',
    },
    {
      question: 'What tools and technologies will I learn?',
      answer: 'The tools depend on your chosen domain. You will get hands-on experience with industry-standard tools like Jira, Git, Figma, Python, TensorFlow, various development frameworks, marketing tools, and more based on your track.',
    },
    {
      question: 'Will I get a certificate?',
      answer: 'Yes, upon successful completion of the internship, you will receive an internship completion certificate that you can add to your resume and LinkedIn profile.',
    },
    {
      question: 'What is the duration of the internship?',
      answer: 'The internship duration typically ranges from 8-12 weeks, depending on the domain and your availability. We can discuss specific timelines during the application process.',
    },
    {
      question: 'How will I be evaluated?',
      answer: 'Evaluation is based on your learning progress, quality of work, consistency, and professional attitude — not on perfection. We value growth mindset and genuine effort over flawless performance.',
    },
  ];

  // Who should apply - UPDATED TO INCLUDE AI STUDENTS
  const targetAudience = [
    { 
      icon: GraduationCap, 
      title: 'Students', 
      description: 'CS, IT, AI/ML, and other tech students looking for practical experience', 
      color: 'teal' 
    },
    { 
      icon: Award, 
      title: 'Fresh Graduates', 
      description: 'Recent graduates wanting to kickstart their career in tech', 
      color: 'cyan' 
    },
    { 
      icon: TrendingUp, 
      title: 'Career Switchers', 
      description: 'Professionals from other fields interested in tech and AI domains', 
      color: 'emerald' 
    },
    { 
      icon: Brain, 
      title: 'AI Enthusiasts', 
      description: 'Anyone passionate about AI, ML, and emerging technologies', 
      color: 'slate' 
    },
  ];

  // Growth benefits
  const growthBenefits = [
    { icon: Sparkles, text: 'Real-world skill development' },
    { icon: Award, text: 'Internship completion certificate' },
    { icon: Briefcase, text: 'Portfolio-worthy project experience' },
    { icon: Users, text: 'Professional references' },
    { icon: TrendingUp, text: 'Priority for future openings' },
    { icon: Target, text: 'Industry networking opportunities' },
  ];

  // Validation
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!formData.college.trim()) {
      newErrors.college = 'College/University name is required';
    }

    if (!formData.degree.trim()) {
      newErrors.degree = 'Degree/Course is required';
    }

    if (!formData.currentStatus) {
      newErrors.currentStatus = 'Please select your current status';
    }

    if (!formData.domain) {
      newErrors.domain = 'Please select a domain';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handlers
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    const form = e.currentTarget;
    const submissionData = new FormData(form);

    try {
      const response = await fetch('https://formsubmit.co/hisham@qtestsolutions.com', {
        method: 'POST',
        body: submissionData,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setShowSuccessMessage(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          college: '',
          degree: '',
          currentStatus: '',
          domain: '',
          message: '',
        });
        form.reset();
        setTimeout(() => {
          setShowSuccessMessage(false);
          setIsModalOpen(false);
        }, 3000);
      } else {
        setErrors({ submit: 'Failed to submit. Please try again.' });
      }
    } catch (error) {
      console.error('Error:', error);
      setErrors({ submit: 'An error occurred. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '919961544424';
    const message = "Hi! I'm interested in the Internship Program at QTest Solutions. Could you please provide more details?";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#f6f8f8] relative overflow-hidden">
      {/* Mesh background - matching Hero */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[60%] h-[60%] bg-teal-300/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-teal-400/10 blur-[140px]" />
        <div className="absolute top-1/2 left-1/3 w-[40%] h-[40%] bg-emerald-200/15 blur-[100px]" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-28 md:pb-24 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className={`max-w-5xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <Image
                src="https://www.qtestsolutions.com/image.png"
                alt="QTest Solutions"
                width={150}
                height={150}
                priority
              />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">
              Launch Your Career
              <span className="block mt-2 bg-gradient-to-r from-teal-500 to-teal-600 bg-clip-text text-transparent">
                With Real Experience
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
              Gain hands-on experience in Software Testing, Development, AI/ML, UI/UX Design, or Digital Marketing through structured mentorship and real projects.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group relative px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold rounded-full transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-teal-500/25 flex items-center justify-center gap-3"
              >
                Apply for Internship
                <span className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 group-hover:rotate-45">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>
              <button
                onClick={handleWhatsAppClick}
                className="group px-8 py-4 rounded-full bg-white/60 border border-gray-200 text-gray-800 font-semibold hover:bg-white shadow-md hover:shadow-lg transition-all duration-300"
              >
                <MessageCircle className="inline-block mr-2 w-5 h-5 text-green-600 group-hover:scale-110 transition-transform" />
                Ask Questions
              </button>
            </div>

            {/* Domain Pills */}
            <div className="flex flex-wrap justify-center gap-3">
              {internshipDomains.map((domain, index) => {
                const colors = getColorClasses(domain.color);
                return (
                  <div
                    key={index}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-gray-100 shadow-sm`}
                  >
                    <domain.icon className={`w-4 h-4 ${colors.icon}`} />
                    <span className="text-sm font-medium text-gray-700">{domain.title}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Internship Domains */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-xs text-cyan-700 font-semibold mb-4 shadow-sm border border-gray-100">
              <Layers className="w-4 h-4" />
              Domains
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Choose Your Path</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Select a domain that aligns with your interests and career goals
            </p>
            <div className="mt-4 flex justify-center">
              <div className="w-16 h-0.5 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {internshipDomains.map((domain, index) => {
              const colors = getColorClasses(domain.color);
              return (
                <div
                  key={index}
                  className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-1 p-6 md:p-8 border border-gray-100`}
                >
                  {/* Top Gradient Bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${colors.gradient}`} />
                  
                  {/* Hover Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`w-14 h-14 ${colors.iconBg} rounded-2xl flex items-center justify-center shadow-sm flex-shrink-0 group-hover:scale-110 transition-transform duration-300 border border-gray-100`}>
                        <domain.icon className={`w-7 h-7 ${colors.icon}`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-900 transition-colors">{domain.title}</h3>
                        <p className="text-gray-700 text-sm mt-1">{domain.description}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {domain.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-gray-50 text-gray-700 text-xs font-medium rounded-full border border-gray-100"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Apply Button */}
                    <button
                      onClick={() => {
                        setFormData(prev => ({ ...prev, domain: domain.title }));
                        setIsModalOpen(true);
                      }}
                      className={`w-full py-3 rounded-xl font-semibold ${colors.text} bg-gray-50 hover:bg-white transition-colors duration-300 flex items-center justify-center gap-2 group/btn border border-gray-100`}
                    >
                      Apply for {domain.title.split(' ')[0]}
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-xs text-emerald-700 font-semibold mb-4 shadow-sm border border-gray-100">
              <BookOpen className="w-4 h-4" />
              Learning Experience
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What You'll Learn</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Skills and experiences that will prepare you for a successful career
            </p>
            <div className="mt-4 flex justify-center">
              <div className="w-16 h-0.5 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {learningTopics.map((topic, index) => {
              const colors = getColorClasses(topic.color);
              return (
                <div
                  key={index}
                  className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 overflow-hidden p-6 md:p-8 border border-gray-100`}
                >
                  {/* Hover Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
                  
                  <div className="relative z-10">
                    <div className={`w-14 h-14 ${colors.iconBg} rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-gray-100`}>
                      <topic.icon className={`w-7 h-7 ${colors.icon}`} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-gray-900 transition-colors">{topic.title}</h3>
                    <p className="text-gray-700 leading-relaxed text-sm">{topic.description}</p>
                  </div>
                  
                  {/* Corner Accent */}
                  <div className={`absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-r ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What Interns Work On */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-xs text-teal-700 font-semibold mb-4 shadow-sm border border-gray-100">
                <Briefcase className="w-4 h-4" />
                Hands-On Learning
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What You'll Work On</h2>
              <p className="text-gray-700">Practical tasks that build real skills and portfolio</p>
              <div className="mt-4 flex justify-center">
                <div className="w-16 h-0.5 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {workActivities.map((activity, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-5 p-5 bg-white rounded-2xl border border-gray-100 hover:border-teal-200 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 border border-gray-100">
                    <activity.icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <span className="text-gray-700 font-medium">{activity.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mentorship Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-xs text-cyan-700 font-semibold mb-4 shadow-sm border border-gray-100">
              <Users className="w-4 h-4" />
              Support System
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Mentorship & Support</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              You won't be alone — we provide guidance and support throughout your journey
            </p>
            <div className="mt-4 flex justify-center">
              <div className="w-16 h-0.5 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {mentorshipFeatures.map((feature, index) => {
              const colors = getColorClasses(feature.color);
              return (
                <div
                  key={index}
                  className={`group text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1`}
                >
                  <div className={`w-14 h-14 ${colors.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border border-gray-100`}>
                    <feature.icon className={`w-7 h-7 ${colors.icon}`} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-700 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who Should Apply - NOW WITH 4 CARDS IN 2x2 GRID */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-xs text-emerald-700 font-semibold mb-4 shadow-sm border border-gray-100">
              <Target className="w-4 h-4" />
              Eligibility
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Who Should Apply</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              We welcome students from all tech backgrounds including AI/ML
            </p>
            <div className="mt-4 flex justify-center">
              <div className="w-16 h-0.5 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {targetAudience.map((audience, index) => {
              const colors = getColorClasses(audience.color);
              return (
                <div
                  key={index}
                  className={`group text-center p-8 bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${colors.gradient} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    <audience.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{audience.title}</h3>
                  <p className="text-gray-700">{audience.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Growth & Career Value */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-gradient-to-br from-teal-500 to-teal-600 rounded-3xl p-8 md:p-12 text-white overflow-hidden shadow-2xl">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <div className="text-center mb-10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-semibold mb-4 border border-white/30">
                    <TrendingUp className="w-4 h-4" />
                    Career Growth
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">What You'll Gain</h2>
                  <p className="text-white/90 max-w-2xl mx-auto">
                    Valuable experience and skills to accelerate your career
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {growthBenefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300"
                    >
                      <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-white/30">
                        <benefit.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-medium text-sm">{benefit.text}</span>
                    </div>
                  ))}
                </div>

                <p className="text-center text-white/80 text-sm mt-8 italic max-w-2xl mx-auto">
                  Note: We provide skill development and mentorship, but do not guarantee job placement. 
                  Your success depends on your effort, learning, and how you apply these skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-xs text-teal-700 font-semibold mb-4 shadow-sm border border-gray-100">
              <Send className="w-4 h-4" />
              How to Apply
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Application Process</h2>
            <p className="text-gray-700">Simple, transparent, and straightforward</p>
            <div className="mt-4 flex justify-center">
              <div className="w-16 h-0.5 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full" />
            </div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {applicationSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="group text-center p-6 bg-white rounded-2xl border border-gray-100 hover:border-teal-200 h-full shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                    <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 border border-gray-100">
                      <step.icon className="w-7 h-7 text-teal-600" />
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-600 text-white rounded-xl flex items-center justify-center mx-auto mb-4 text-lg font-bold shadow-md">
                      {step.step}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-700 text-sm">{step.description}</p>
                  </div>
                  {index < applicationSteps.length - 1 && (
                    <div className="hidden md:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <div className="w-6 h-6 bg-white rounded-full border-2 border-teal-300 flex items-center justify-center shadow-sm">
                        <ArrowRight className="w-3 h-3 text-teal-500" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-xs text-emerald-700 font-semibold mb-4 shadow-sm border border-gray-100">
              <Coffee className="w-4 h-4" />
              Got Questions?
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-700">Honest answers to common questions</p>
            <div className="mt-4 flex justify-center">
              <div className="w-16 h-0.5 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full" />
            </div>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-teal-200 transition-all duration-300 shadow-md"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors duration-300"
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${openFAQ === index ? 'bg-gradient-to-r from-teal-500 to-teal-600 rotate-180' : 'bg-gray-100'}`}>
                    <ChevronDown className={`w-5 h-5 transition-colors ${openFAQ === index ? 'text-white' : 'text-gray-500'}`} />
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFAQ === index ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="px-5 pb-5">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="relative text-center bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-2xl overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-teal-100/50 to-transparent rounded-br-full" />
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tl from-cyan-100/50 to-transparent rounded-tl-full" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-teal-50 px-4 py-2 rounded-full text-xs text-teal-700 font-semibold mb-6 shadow-sm border border-gray-100">
                  <Sparkles className="w-4 h-4" />
                  Start Your Journey
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Ready to
                  <span className="block mt-2 bg-gradient-to-r from-teal-500 to-teal-600 bg-clip-text text-transparent">Launch Your Career?</span>
                </h2>
                <p className="text-gray-700 mb-10 max-w-xl mx-auto leading-relaxed">
                  Take the first step towards building valuable skills and gaining real-world experience 
                  in your chosen domain.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="group relative px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold rounded-full shadow-lg hover:shadow-teal-500/25 transition-all duration-500 transform hover:scale-105 flex items-center justify-center gap-3"
                  >
                    Apply Now
                    <span className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 group-hover:rotate-45">
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </button>
                  <button
                    onClick={handleWhatsAppClick}
                    className="group px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-green-500 to-green-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <MessageCircle className="inline-block mr-2 w-5 h-5" />
                    WhatsApp Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/50 backdrop-blur-sm"
          onClick={() => {
            setIsModalOpen(false);
            setErrors({});
            setShowSuccessMessage(false);
          }}
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 sm:p-8 border border-gray-100 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => {
                setIsModalOpen(false);
                setErrors({});
                setShowSuccessMessage(false);
              }}
              className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>

            {showSuccessMessage ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-green-100">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Application Submitted!</h3>
                <p className="text-gray-700">
                  Thank you for applying. We'll review your application and get back to you soon.
                </p>
              </div>
            ) : (
              <>
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 bg-teal-50 px-3 py-1 rounded-full text-xs text-teal-700 font-semibold mb-4 border border-gray-100">
                    <GraduationCap className="w-3 h-3" />
                    Internship Application
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-teal-500 to-teal-600 bg-clip-text text-transparent">
                    Apply for Internship
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_subject" value="New Internship Application - QTest Solutions" />
                  <input type="hidden" name="_template" value="table" />

                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2.5 rounded-lg border ${
                        errors.name ? 'border-red-400' : 'border-gray-200'
                      } focus:border-teal-500 focus:ring-2 focus:ring-teal-200/50 transition-all text-sm bg-white`}
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <div className="flex items-center gap-1 mt-1 text-red-600">
                        <AlertCircle className="w-3 h-3" />
                        <p className="text-xs">{errors.name}</p>
                      </div>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2.5 rounded-lg border ${
                        errors.email ? 'border-red-400' : 'border-gray-200'
                      } focus:border-teal-500 focus:ring-2 focus:ring-teal-200/50 transition-all text-sm bg-white`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <div className="flex items-center gap-1 mt-1 text-red-600">
                        <AlertCircle className="w-3 h-3" />
                        <p className="text-xs">{errors.email}</p>
                      </div>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2.5 rounded-lg border ${
                        errors.phone ? 'border-red-400' : 'border-gray-200'
                      } focus:border-teal-500 focus:ring-2 focus:ring-teal-200/50 transition-all text-sm bg-white`}
                      placeholder="10-digit mobile number"
                    />
                    {errors.phone && (
                      <div className="flex items-center gap-1 mt-1 text-red-600">
                        <AlertCircle className="w-3 h-3" />
                        <p className="text-xs">{errors.phone}</p>
                      </div>
                    )}
                  </div>

                  {/* College & Degree Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">College *</label>
                      <input
                        type="text"
                        name="college"
                        value={formData.college}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2.5 rounded-lg border ${
                          errors.college ? 'border-red-400' : 'border-gray-200'
                        } focus:border-teal-500 focus:ring-2 focus:ring-teal-200/50 transition-all text-sm bg-white`}
                        placeholder="Your college"
                      />
                      {errors.college && (
                        <div className="flex items-center gap-1 mt-1 text-red-600">
                          <AlertCircle className="w-3 h-3" />
                          <p className="text-xs">{errors.college}</p>
                        </div>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Degree *</label>
                      <input
                        type="text"
                        name="degree"
                        value={formData.degree}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2.5 rounded-lg border ${
                          errors.degree ? 'border-red-400' : 'border-gray-200'
                        } focus:border-teal-500 focus:ring-2 focus:ring-teal-200/50 transition-all text-sm bg-white`}
                        placeholder="e.g., B.Tech CSE"
                      />
                      {errors.degree && (
                        <div className="flex items-center gap-1 mt-1 text-red-600">
                          <AlertCircle className="w-3 h-3" />
                          <p className="text-xs">{errors.degree}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Status */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Current Status *</label>
                    <select
                      name="currentStatus"
                      value={formData.currentStatus}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2.5 rounded-lg border ${
                        errors.currentStatus ? 'border-red-400' : 'border-gray-200'
                      } focus:border-teal-500 focus:ring-2 focus:ring-teal-200/50 transition-all text-sm bg-white`}
                    >
                      <option value="">Select your current status</option>
                      <option value="Student">Current Student</option>
                      <option value="Fresh Graduate">Fresh Graduate (0-1 year)</option>
                      <option value="Career Switcher">Career Switcher</option>
                    </select>
                    {errors.currentStatus && (
                      <div className="flex items-center gap-1 mt-1 text-red-600">
                        <AlertCircle className="w-3 h-3" />
                        <p className="text-xs">{errors.currentStatus}</p>
                      </div>
                    )}
                  </div>

                  {/* Domain */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Domain *</label>
                    <select
                      name="domain"
                      value={formData.domain}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2.5 rounded-lg border ${
                        errors.domain ? 'border-red-400' : 'border-gray-200'
                      } focus:border-teal-500 focus:ring-2 focus:ring-teal-200/50 transition-all text-sm bg-white`}
                    >
                      <option value="">Select a domain</option>
                      {internshipDomains.map((domain) => (
                        <option key={domain.title} value={domain.title}>
                          {domain.title}
                        </option>
                      ))}
                    </select>
                    {errors.domain && (
                      <div className="flex items-center gap-1 mt-1 text-red-600">
                        <AlertCircle className="w-3 h-3" />
                        <p className="text-xs">{errors.domain}</p>
                      </div>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Why are you interested? (Optional)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200/50 transition-all text-sm resize-none bg-white"
                      placeholder="Tell us briefly why you're interested in this internship..."
                    />
                  </div>

                  {errors.submit && (
                    <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <p className="text-red-800 text-sm">{errors.submit}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2 text-sm"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Application
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}