'use client';

import { useState, FormEvent, ChangeEvent, useEffect } from 'react';
import {
  GraduationCap,
  Clock,
  Users,
  Briefcase,
  CheckCircle,
  ArrowRight,
  MapPin,
  Award,
  Target,
  Zap,
  Code,
  TestTube,
  TrendingUp,
  MessageCircle,
  ChevronDown,
  AlertCircle,
  X,
  BookOpen,
  FileText,
  Bug,
  GitBranch,
  Search,
  ClipboardCheck,
  Lightbulb,
  Send,
  FileCheck,
  CheckCircle2,
  Sparkles,
  Play,
  Coffee,
} from 'lucide-react';

// Types
interface FormData {
  name: string;
  email: string;
  phone: string;
  college: string;
  degree: string;
  currentStatus: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  college?: string;
  degree?: string;
  currentStatus?: string;
  submit?: string;
}

interface FAQ {
  question: string;
  answer: string;
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
    message: '',
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // What interns will learn
  const learningTopics = [
    {
      icon: Search,
      title: 'Manual & Exploratory Testing',
      description: 'Learn systematic testing approaches and exploratory testing techniques used in real projects.',
      gradient: 'from-teal-400 to-cyan-500',
    },
    {
      icon: FileText,
      title: 'Test Case Writing & Bug Reporting',
      description: 'Master the art of writing clear, effective test cases and professional bug reports.',
      gradient: 'from-cyan-400 to-teal-500',
    },
    {
      icon: Code,
      title: 'Automation Basics',
      description: 'Get introduced to Selenium, Cypress, or Playwright for test automation fundamentals.',
      gradient: 'from-teal-500 to-emerald-500',
    },
    {
      icon: Zap,
      title: 'API Testing with Postman',
      description: 'Learn to test REST APIs, validate responses, and understand API testing workflows.',
      gradient: 'from-emerald-400 to-teal-500',
    },
    {
      icon: GitBranch,
      title: 'QA Tools & Workflows',
      description: 'Hands-on experience with Jira, Git, and test management tools used in the industry.',
      gradient: 'from-teal-400 to-cyan-400',
    },
    {
      icon: Lightbulb,
      title: 'QA Best Practices',
      description: 'Understand testing methodologies, SDLC, STLC, and quality assurance principles.',
      gradient: 'from-cyan-500 to-teal-400',
    },
  ];

  // Internship roles
  const internshipRoles = [
    {
      title: 'QA Intern (Manual)',
      description: 'Focus on manual testing fundamentals, test case design, and bug reporting.',
      icon: TestTube,
      responsibilities: [
        'Execute manual test cases',
        'Document test results',
        'Report and track bugs',
        'Participate in test planning',
      ],
      skills: ['Test Case Writing', 'Bug Reporting', 'Test Documentation', 'JIRA'],
    },
    {
      title: 'Automation Testing Intern',
      description: 'Learn test automation frameworks and scripting for web applications.',
      icon: Code,
      responsibilities: [
        'Write basic automation scripts',
        'Learn framework structure',
        'Execute automated tests',
        'Assist in test maintenance',
      ],
      skills: ['Selenium/Cypress', 'Basic Programming', 'Page Object Model', 'TestNG'],
    },
    {
      title: 'API Testing Intern',
      description: 'Focus on REST API testing, validation, and API automation basics.',
      icon: Zap,
      responsibilities: [
        'Test API endpoints',
        'Validate API responses',
        'Create API test collections',
        'Learn API automation',
      ],
      skills: ['Postman', 'REST APIs', 'JSON', 'API Documentation'],
    },
    {
      title: 'Performance Testing Intern',
      description: 'Introduction to performance testing concepts and tools.',
      icon: TrendingUp,
      responsibilities: [
        'Learn performance metrics',
        'Execute basic load tests',
        'Analyze test results',
        'Document findings',
      ],
      skills: ['JMeter Basics', 'Performance Metrics', 'Load Testing', 'Reporting'],
    },
  ];

  // What interns work on
  const workActivities = [
    { icon: ClipboardCheck, text: 'Writing and reviewing test cases for real features' },
    { icon: TestTube, text: 'Executing test scenarios across different modules' },
    { icon: Bug, text: 'Logging bugs with proper documentation and steps' },
    { icon: Users, text: 'Assisting QA engineers in daily testing activities' },
    { icon: CheckCircle, text: 'Validating product features against requirements' },
    { icon: FileCheck, text: 'Participating in test planning discussions' },
  ];

  // Mentorship features
  const mentorshipFeatures = [
    {
      icon: Users,
      title: 'Guidance from Mentors',
      description: 'Get support and direction from experienced QA professionals throughout your internship.',
    },
    {
      icon: MessageCircle,
      title: 'Feedback Sessions',
      description: 'Receive constructive feedback on your work to help you improve continuously.',
    },
    {
      icon: BookOpen,
      title: 'Structured Learning Path',
      description: 'Follow a clear roadmap covering all essential QA skills and concepts.',
    },
    {
      icon: Briefcase,
      title: 'Real Workflow Exposure',
      description: 'Experience actual QA processes used in software development teams.',
    },
  ];

  // Application process
  const applicationSteps = [
    { step: 1, icon: Send, title: 'Submit Application', description: 'Fill out the application form with your details' },
    { step: 2, icon: Search, title: 'Screening', description: 'We review your application and background' },
    { step: 3, icon: FileText, title: 'Small Task', description: 'Complete a simple assessment task' },
    { step: 4, icon: CheckCircle2, title: 'Confirmation', description: 'Receive confirmation and onboarding details' },
  ];

  // FAQs
  const faqs: FAQ[] = [
    {
      question: 'Is prior experience required?',
      answer: 'No prior experience is required. We look for candidates with genuine interest in learning software testing, basic computer skills, and a willingness to learn. Passion and learning mindset matter more than experience.',
    },
    {
      question: 'Is this a paid internship?',
      answer: 'This is a purely learning-focused internship. We do not pay interns, and we do not charge any fees from candidates. It is a mutual learning opportunity — you gain skills and experience, and we get to mentor aspiring QA professionals.',
    },
    {
      question: 'Do I need to pay any fees to join?',
      answer: 'Absolutely not. We do not collect any money from interns. If anyone asks you to pay for this internship, please report it to us immediately. This program is completely free for selected candidates.',
    },
    {
      question: 'Is there job placement after the internship?',
      answer: 'We do not guarantee job placement. However, successful interns gain priority consideration for future openings when available. Many of our past interns have successfully transitioned into QA roles elsewhere — but we believe in honest expectations rather than unrealistic promises.',
    },
    // {
    //   question: 'Can I do this alongside college?',
    //   answer: 'Yes, we offer flexible timing options. Part-time commitments (20 hours/week) are available for students. We understand academic priorities and work around your schedule.',
    // },
    {
      question: 'What tools and technologies will I learn?',
      answer: 'You will get hands-on experience with industry tools like Jira, Git, Postman, Selenium , and test management tools. The specific tools depend on your internship role.',
    },
    {
      question: 'Will I get a certificate?',
      answer: 'Yes, upon successful completion of the internship, you will receive an internship completion certificate that you can add to your resume and LinkedIn profile.',
    },
    {
      question: 'How will I be evaluated?',
      answer: 'Evaluation is based on your learning progress, quality of work, consistency, and professional attitude — not on perfection. We value growth mindset and genuine effort over flawless performance.',
    },
  ];

  // Who should apply
  const targetAudience = [
    { icon: GraduationCap, title: 'Students', description: 'Final year or pre-final year students looking for practical experience' },
    { icon: Award, title: 'Fresh Graduates', description: 'Recent graduates wanting to start their QA career' },
    { icon: TrendingUp, title: 'Career Switchers', description: 'Professionals from other fields interested in software testing' },
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

  // Stats
  const stats = [
    { value: '8-12', label: 'Weeks Duration' },
    { value: '100%', label: 'Free Program' },
    { value: '4', label: 'Specializations' },
    { value: '24/7', label: 'Learning Access' },
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
    const message = "Hi! I'm interested in the QA Internship at QTest Solutions. Could you please provide more details?";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#F6F8F8] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-teal-200/30 to-cyan-200/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-br from-cyan-200/25 to-teal-200/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-40 left-1/3 w-72 h-72 bg-gradient-to-br from-teal-100/30 to-emerald-100/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-cyan-100/25 to-teal-100/15 rounded-full blur-3xl" />
        </div>
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(20, 184, 166, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(20, 184, 166, 0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className={`max-w-5xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-md border border-teal-200/60 shadow-lg shadow-teal-500/10 mb-8">
              <div className="relative">
                <GraduationCap className="w-5 h-5 text-teal-600" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-teal-500 rounded-full animate-ping" />
              </div>
              <span className="text-sm font-semibold text-teal-700">Learning & Development Program</span>
              <Sparkles className="w-4 h-4 text-teal-500" />
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">
              Internships at
              <span className="block mt-2 bg-gradient-to-r from-teal-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
                QTest Solutions
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
              Learn real-world QA and software testing practices through structured mentorship and hands-on experience. 
              <span className="text-teal-600"> Build skills that matter.</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group relative px-10 py-5 rounded-2xl font-bold text-white bg-gradient-to-r from-teal-500 via-teal-600 to-cyan-600 shadow-xl shadow-teal-500/30 hover:shadow-2xl hover:shadow-teal-500/40 transition-all duration-500 transform hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Apply for Internship
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600 via-cyan-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>
              <button
                onClick={handleWhatsAppClick}
                className="group px-10 py-5 rounded-2xl font-bold text-gray-700 bg-white/90 backdrop-blur-sm border-2 border-gray-200 hover:border-green-400 hover:bg-green-50 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <MessageCircle className="inline-block mr-2 w-5 h-5 text-green-600 group-hover:scale-110 transition-transform" />
                Ask Questions
              </button>
            </div>

            {/* Free Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <span className="text-green-700 font-semibold">100% Free — No fees charged from candidates</span>
            </div>
          </div>

          {/* Stats Row */}
          <div className={`max-w-4xl mx-auto mt-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-sm hover:shadow-lg hover:border-teal-200 transition-all duration-300"
                >
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 font-medium mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="py-20 md:py-28 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-white/80 backdrop-blur-md rounded-3xl border border-gray-200/50 shadow-2xl shadow-gray-200/50 p-10 md:p-14 overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-teal-100/50 to-transparent rounded-bl-full" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-cyan-100/50 to-transparent rounded-tr-full" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-teal-500/30">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why This Internship Exists</h2>
                    <p className="text-teal-600 font-medium mt-1">Our mission & purpose</p>
                  </div>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  We created this internship program to help aspiring QA engineers learn disciplined testing workflows 
                  and industry-standard tools in a supportive environment. Software testing is a critical skill, 
                  and we believe in nurturing talent through practical, hands-on learning.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our goal is not to make promises we cannot keep, but to provide <span className="text-teal-600 font-semibold">genuine learning opportunities</span> 
                  that help you build a foundation for your QA career. You will work on real tasks, receive honest 
                  feedback, and develop skills that employers actually value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 text-teal-700 text-sm font-semibold mb-4">
              <BookOpen className="w-4 h-4" />
              Curriculum
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Interns Will Learn</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              A practical curriculum focused on skills that matter in the industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {learningTopics.map((topic, index) => (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm p-8 border border-gray-200/50 rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                {/* Hover Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${topic.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className={`w-14 h-14 bg-gradient-to-br ${topic.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <topic.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-700 transition-colors">{topic.title}</h3>
                <p className="text-gray-600 leading-relaxed">{topic.description}</p>
                
                {/* Corner Accent */}
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Roles */}
      <section className="py-20 md:py-28 relative">
        {/* Background Accent */}
        <div className="absolute inset-0 bg-gradient-to-b from-teal-50/50 to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 text-sm font-semibold mb-4">
              <Briefcase className="w-4 h-4" />
              Specializations
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Internship Roles</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Choose a track that aligns with your interests and career goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {internshipRoles.map((role, index) => (
              <div
                key={index}
                className="group relative bg-white/90 backdrop-blur-sm p-8 border border-gray-200/50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Top Gradient Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-500" />
                
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                    <role.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-teal-700 transition-colors">{role.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">{role.description}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <Play className="w-4 h-4 text-teal-600" />
                    Responsibilities
                  </h4>
                  <ul className="space-y-2">
                    {role.responsibilities.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-600">
                        <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {role.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-1.5 bg-gradient-to-r from-teal-50 to-cyan-50 text-teal-700 text-sm font-medium rounded-full border border-teal-200/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Interns Work On */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-4">
                <ClipboardCheck className="w-4 h-4" />
                Real Work
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Interns Actually Work On</h2>
              <p className="text-gray-600 text-lg">Real tasks that contribute to actual projects</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {workActivities.map((activity, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-5 p-6 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl hover:shadow-lg hover:border-teal-200 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <activity.icon className="w-7 h-7 text-teal-600" />
                  </div>
                  <span className="text-gray-700 font-medium text-lg">{activity.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mentorship Section */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-50/30 to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 text-teal-700 text-sm font-semibold mb-4">
              <Users className="w-4 h-4" />
              Support System
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Mentorship & Learning Support</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              You won't be left alone — we provide guidance and support throughout your journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {mentorshipFeatures.map((feature, index) => (
              <div
                key={index}
                className="group text-center p-8 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-teal-500/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Should Apply */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 text-sm font-semibold mb-4">
              <Target className="w-4 h-4" />
              Eligibility
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Who Should Apply</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We value passion and learning mindset over prior experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {targetAudience.map((audience, index) => (
              <div
                key={index}
                className="group text-center p-10 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-teal-500/30 group-hover:scale-110 transition-transform duration-500">
                  <audience.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{audience.title}</h3>
                <p className="text-gray-600 text-lg">{audience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth & Career Value */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-gradient-to-br from-teal-600 via-teal-700 to-cyan-700 rounded-[3rem] p-12 md:p-16 text-white overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-400/20 rounded-full blur-3xl" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-semibold mb-4">
                    <TrendingUp className="w-4 h-4" />
                    Career Growth
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">Growth & Career Value</h2>
                  <p className="text-teal-100 text-lg max-w-2xl mx-auto">
                    What you'll gain from this internship experience
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {growthBenefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl hover:bg-white/20 transition-all duration-300"
                    >
                      <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-medium">{benefit.text}</span>
                    </div>
                  ))}
                </div>

                <p className="text-center text-teal-200 text-sm mt-10 italic max-w-2xl mx-auto">
                  Note: We provide skill development and mentorship, but do not guarantee job placement. 
                  Your success depends on your effort, learning, and how you apply these skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 text-teal-700 text-sm font-semibold mb-4">
              <Send className="w-4 h-4" />
              How to Apply
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Application Process</h2>
            <p className="text-gray-600 text-lg">Simple, transparent, and straightforward</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {applicationSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="group text-center p-8 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl h-full hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                      <step.icon className="w-8 h-8 text-teal-600" />
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-500 text-white rounded-xl flex items-center justify-center mx-auto mb-4 text-lg font-bold shadow-lg shadow-teal-500/30">
                      {step.step}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
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
      <section className="py-20 md:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-50/30 to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 text-sm font-semibold mb-4">
              <Coffee className="w-4 h-4" />
              Got Questions?
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg">Honest answers to common questions</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-teal-50/50 transition-colors duration-300"
                >
                  <span className="font-semibold text-gray-900 pr-4 text-lg">{faq.question}</span>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${openFAQ === index ? 'bg-teal-500 rotate-180' : 'bg-gray-100'}`}>
                    <ChevronDown className={`w-5 h-5 transition-colors ${openFAQ === index ? 'text-white' : 'text-gray-500'}`} />
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFAQ === index ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed text-lg">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="relative text-center bg-white/90 backdrop-blur-md p-12 md:p-16 rounded-[3rem] border border-gray-200/50 shadow-2xl overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-teal-100/50 to-transparent rounded-br-full" />
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tl from-cyan-100/50 to-transparent rounded-tl-full" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-700 text-sm font-semibold mb-6">
                  <Sparkles className="w-4 h-4" />
                  Start Your Journey
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Ready to Begin Your
                  <span className="block mt-2 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">QA Career?</span>
                </h2>
                <p className="text-gray-600 mb-8 max-w-xl mx-auto text-lg">
                  Take the first step towards building a meaningful career in QA. 
                  No fees, no unrealistic promises — just genuine learning and growth opportunities.
                </p>

                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 mb-10">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-green-700 font-semibold">This internship is completely free — no fees charged</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="group relative px-10 py-5 rounded-2xl font-bold text-white bg-gradient-to-r from-teal-500 via-teal-600 to-cyan-600 shadow-xl shadow-teal-500/30 hover:shadow-2xl hover:shadow-teal-500/40 transition-all duration-500 transform hover:scale-105"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Apply Now
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                  <button
                    onClick={handleWhatsAppClick}
                    className="group px-10 py-5 rounded-2xl font-bold text-white bg-gradient-to-r from-green-500 to-green-600 shadow-xl shadow-green-500/30 hover:shadow-2xl hover:shadow-green-500/40 transition-all duration-500 transform hover:scale-105"
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
          className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-md"
          onClick={() => {
            setIsModalOpen(false);
            setErrors({});
            setShowSuccessMessage(false);
          }}
        >
          <div
            className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg p-8 max-h-[90vh] overflow-y-auto"
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
                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Application Submitted!</h3>
                <p className="text-gray-600">
                  Thank you for applying. We'll review your application and get back to you soon.
                </p>
              </div>
            ) : (
              <>
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 text-teal-700 text-sm font-semibold mb-4">
                    <GraduationCap className="w-4 h-4" />
                    Internship Application
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Apply for QA Internship
                  </h3>
                  <p className="text-gray-500 mt-2">No fees required — completely free</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_subject" value="New Internship Application - QTest Solutions" />
                  <input type="hidden" name="_template" value="table" />

                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl border-2 ${
                        errors.name ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-teal-500'
                      } focus:ring-4 focus:ring-teal-500/20 transition-all text-sm`}
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <div className="flex items-center gap-1 mt-2 text-red-600">
                        <AlertCircle className="w-4 h-4" />
                        <p className="text-sm">{errors.name}</p>
                      </div>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl border-2 ${
                        errors.email ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-teal-500'
                      } focus:ring-4 focus:ring-teal-500/20 transition-all text-sm`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <div className="flex items-center gap-1 mt-2 text-red-600">
                        <AlertCircle className="w-4 h-4" />
                        <p className="text-sm">{errors.email}</p>
                      </div>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl border-2 ${
                        errors.phone ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-teal-500'
                      } focus:ring-4 focus:ring-teal-500/20 transition-all text-sm`}
                      placeholder="10-digit mobile number"
                    />
                    {errors.phone && (
                      <div className="flex items-center gap-1 mt-2 text-red-600">
                        <AlertCircle className="w-4 h-4" />
                        <p className="text-sm">{errors.phone}</p>
                      </div>
                    )}
                  </div>

                  {/* College & Degree Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">College *</label>
                      <input
                        type="text"
                        name="college"
                        value={formData.college}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-xl border-2 ${
                          errors.college ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-teal-500'
                        } focus:ring-4 focus:ring-teal-500/20 transition-all text-sm`}
                        placeholder="Your college"
                      />
                      {errors.college && (
                        <div className="flex items-center gap-1 mt-2 text-red-600">
                          <AlertCircle className="w-4 h-4" />
                          <p className="text-sm">{errors.college}</p>
                        </div>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Degree *</label>
                      <input
                        type="text"
                        name="degree"
                        value={formData.degree}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-xl border-2 ${
                          errors.degree ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-teal-500'
                        } focus:ring-4 focus:ring-teal-500/20 transition-all text-sm`}
                        placeholder="e.g., B.Tech CSE"
                      />
                      {errors.degree && (
                        <div className="flex items-center gap-1 mt-2 text-red-600">
                          <AlertCircle className="w-4 h-4" />
                          <p className="text-sm">{errors.degree}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Status */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Current Status *</label>
                    <select
                      name="currentStatus"
                      value={formData.currentStatus}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl border-2 ${
                        errors.currentStatus ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-teal-500'
                      } focus:ring-4 focus:ring-teal-500/20 transition-all text-sm`}
                    >
                      <option value="">Select your current status</option>
                      <option value="Student">Current Student</option>
                      <option value="Fresh Graduate">Fresh Graduate (0-1 year)</option>
                      <option value="Career Switcher">Career Switcher</option>
                    </select>
                    {errors.currentStatus && (
                      <div className="flex items-center gap-1 mt-2 text-red-600">
                        <AlertCircle className="w-4 h-4" />
                        <p className="text-sm">{errors.currentStatus}</p>
                      </div>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Why are you interested? (Optional)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/20 transition-all text-sm resize-none"
                      placeholder="Tell us briefly why you're interested in this internship..."
                    />
                  </div>

                  {errors.submit && (
                    <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <p className="text-red-800 text-sm">{errors.submit}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2 shadow-lg shadow-teal-500/30"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Application
                        <ArrowRight className="w-5 h-5" />
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