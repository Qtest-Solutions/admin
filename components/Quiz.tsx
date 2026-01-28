"use client";

import { useState, useEffect } from "react";
import { Brain, CheckCircle, X, ArrowRight, User, Mail, Phone, Send, AlertCircle, Lock, Lightbulb, Target } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
}

interface Answers {
  [key: string]: string;
}

interface QuizAttempt {
  name: string;
  email: string;
  phone: string;
  score: number;
  totalQuestions: number;
  date: string;
  answers: Answers;
  deviceId: string;
}

export default function Quiz() {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", phone: "" });
  const [answers, setAnswers] = useState<Answers>({});
  const [score, setScore] = useState<number | null>(null);
  const [showWelcome, setShowWelcome] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [deviceBlocked, setDeviceBlocked] = useState(false);
  const [existingAttempt, setExistingAttempt] = useState<QuizAttempt | null>(null);

const GOOGLE_FORM_ACTION_URL =
  "https://docs.google.com/forms/u/0/d/e/1FAIpQLSefe3uojPwavUaPRN7r6BvW76jzoN5anbOOkgJqOtXxCe9MvQ/formResponse";

const GOOGLE_FORM_FIELDS = {
  name: "entry.1381355578",
  email: "entry.1284640515",
  phone: "entry.1972399461",
  score: "entry.818301818",
  percentage: "entry.1716282362",
  date: "entry.842622030",
  deviceId: "entry.1916091650",
  answers: "entry.379125348",
};

  const questions = [
    {
      id: "q1",
      question: "What is the main function of an Operating System?",
      options: [
        "To design software",
        "To manage computer hardware and software resources",
        "To create documents",
        "To browse the internet"
      ],
      correct: "B"
    },
    {
      id: "q2",
      question: "Which of the following is a primary memory?",
      options: ["Hard Disk", "Pen Drive", "RAM", "DVD"],
      correct: "C"
    },
    {
      id: "q3",
      question: "Which data structure follows the LIFO principle?",
      options: ["Queue", "Stack", "Tree", "Graph"],
      correct: "B"
    },
    {
      id: "q4",
      question: "What does HTTP stand for?",
      options: [
        "Hyper Text Transfer Protocol",
        "High Transfer Text Program",
        "Hyper Transfer Technical Process",
        "High Text Transmission Program"
      ],
      correct: "A"
    },
    {
      id: "q5",
      question: "What is the purpose of a compiler?",
      options: [
        "To store data",
        "To convert high-level code into machine code",
        "To test software",
        "To design user interfaces"
      ],
      correct: "B"
    },
    {
      id: "q6",
      question: "What is the main goal of software testing?",
      options: [
        "To write code",
        "To identify defects and ensure quality",
        "To design UI",
        "To deploy software"
      ],
      correct: "B"
    },
    {
      id: "q7",
      question: "What is a defect (bug)?",
      options: [
        "A new feature",
        "An error in software behavior",
        "A tool",
        "A test plan"
      ],
      correct: "B"
    },
    {
      id: "q8",
      question: "What will be the output of this C program? int a = 5; printf('%d', a++);",
      options: ["6", "5", "Error", "0"],
      correct: "B"
    },
    {
      id: "q9",
      question: "Which of the following is used to declare a function in C?",
      options: [
        "function myFunc()",
        "def myFunc()",
        "void myFunc()",
        "create myFunc()"
      ],
      correct: "C"
    },
    {
      id: "q10",
      question: "What will be the output of this C program? int x = 10; printf('%d', x / 2);",
      options: ["5", "10", "20", "Error"],
      correct: "A"
    }
  ];

  const getDeviceId = (): string => {
    let deviceId = localStorage.getItem("quizDeviceId");
    if (!deviceId) {
      deviceId = `device_${Date.now()}_${Math.random().toString(36).substring(2, 15)}`;
      localStorage.setItem("quizDeviceId", deviceId);
    }
    return deviceId;
  };

  useEffect(() => {
    const hasAttempted = localStorage.getItem("quizCompleted");
    const attemptData = localStorage.getItem("quizAttemptData");
    
    if (hasAttempted === "true" && attemptData) {
      setDeviceBlocked(true);
      setExistingAttempt(JSON.parse(attemptData));
      setShowWelcome(false);
    }
  }, []);

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAuthenticate = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsAuthenticated(true);
    }
  };

  const handleStartQuiz = () => {
    setHasStarted(true);
  };

  function handleAnswerChange(qId: string, optionIndex: number) {
    const optionLetter = ["A", "B", "C", "D"][optionIndex];
    setAnswers({ ...answers, [qId]: optionLetter });
  }

 
  // Submit to Google Forms
async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    // Calculate score
    const totalScore = questions.reduce(
      (acc, q) => acc + (answers[q.id] === q.correct ? 1 : 0),
      0
    );

    const deviceId = getDeviceId();
    const currentDate = new Date().toLocaleString();

    // answers as JSON array (stored in the single "answers" field)
    const answersArray = questions.map((q, index) => ({
      q: index + 1,
      id: q.id,
      marked: answers[q.id] ?? null,
    }));

    // Use URLSearchParams (Google Forms accepts this reliably)
    const body = new URLSearchParams();
    body.append(GOOGLE_FORM_FIELDS.name, formData.name);
    body.append(GOOGLE_FORM_FIELDS.email, formData.email);
    body.append(GOOGLE_FORM_FIELDS.phone, formData.phone);
    body.append(GOOGLE_FORM_FIELDS.score, `${totalScore}/${questions.length}`);
    body.append(
      GOOGLE_FORM_FIELDS.percentage,
      `${Math.round((totalScore / questions.length) * 100)}%`
    );
    body.append(GOOGLE_FORM_FIELDS.date, currentDate);
    body.append(GOOGLE_FORM_FIELDS.deviceId, deviceId);
    body.append(GOOGLE_FORM_FIELDS.answers, JSON.stringify(answersArray));

    // Submit to Google Forms
    await fetch(GOOGLE_FORM_ACTION_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });

    // Save to localStorage (lock device)
    const attempt: QuizAttempt = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      score: totalScore,
      totalQuestions: questions.length,
      date: new Date().toISOString(),
      answers,
      deviceId,
    };

    localStorage.setItem("quizCompleted", "true");
    localStorage.setItem("quizAttemptData", JSON.stringify(attempt));

    setScore(totalScore);
    setDeviceBlocked(true);
    setExistingAttempt(attempt);
  } catch (error) {
    console.error("Submission error:", error);

    // Still show score even if submission fails
    const totalScore = questions.reduce(
      (acc, q) => acc + (answers[q.id] === q.correct ? 1 : 0),
      0
    );
    setScore(totalScore);
  } finally {
    setIsSubmitting(false);
  }
}

  // Device blocked screen
  if (deviceBlocked && existingAttempt && score === null) {
    return (
      <div className="min-h-screen bg-[#f6f8f8] relative overflow-hidden py-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[60%] h-[60%] bg-teal-300/20 blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-teal-400/10 blur-[140px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-xs text-teal-700 font-semibold mb-4 shadow-sm border border-gray-100">
                <Brain className="w-4 h-4" />
                Technical Assessment Quiz
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Test Your
                <span className="block mt-2 bg-gradient-to-r from-teal-500 to-teal-600 bg-clip-text text-transparent">
                  Knowledge
                </span>
              </h1>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-100 text-center">
              <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-red-100">
                <Lock className="w-12 h-12 text-red-600" />
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Quiz Already Completed
              </h2>

              <p className="text-gray-700 mb-6">
                This device has already been used to complete the quiz.
              </p>

              <div className="inline-block bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-4 rounded-xl mb-8 shadow-lg">
                <p className="text-sm opacity-90 mb-1">Previous Score</p>
                <p className="text-4xl font-bold">
                  {existingAttempt.score} / {existingAttempt.totalQuestions}
                </p>
                <p className="text-sm opacity-90 mt-1">
                  {Math.round((existingAttempt.score / existingAttempt.totalQuestions) * 100)}%
                </p>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                  <div className="text-left">
                    <p className="font-semibold text-red-900 mb-2">
                      One Attempt Per Device
                    </p>
                    <p className="text-sm text-red-800">
                      Each device can only take this quiz once to ensure fairness and integrity.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Previous Attempt:</strong>
                </p>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>Name: {existingAttempt.name}</p>
                  <p>Email: {existingAttempt.email}</p>
                  <p>Date: {new Date(existingAttempt.date).toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f6f8f8] relative overflow-hidden py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[60%] h-[60%] bg-teal-300/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-teal-400/10 blur-[140px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Welcome Screen */}
         {showWelcome ? (
  <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-100">
    <div className="text-center mb-8">
      <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
        <Brain className="w-10 h-10 text-white" />
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Welcome to the
        <span className="block mt-2 bg-gradient-to-r from-teal-500 to-teal-600 bg-clip-text text-transparent">
          Software Testing Roadmap Quiz
        </span>
      </h1>
    </div>

    <div className="space-y-6 text-gray-700 leading-relaxed">
      <p className="text-center font-medium text-lg text-gray-900">
        <strong className="text-teal-600">Qtest Solutions</strong> is conducting a{" "}
        <strong>Software Testing Roadmap & Opportunities Session</strong> at{" "}
        <strong>JDT Islam Polytechnic College</strong> to help students understand
        how to build a career in <strong>Software Testing (QA)</strong> — from basics to job-ready skills.
      </p>

      {/* <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
        <p className="text-gray-800">
          This session is designed to guide you through the <strong>QA career roadmap</strong>,
          including <strong>manual testing</strong>, <strong>test case writing</strong>,
          <strong>bug reporting</strong>, <strong>API testing</strong>, and an introduction to
          <strong>automation testing</strong> — along with real career roles and growth opportunities.
        </p>
      </div>

      <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
        <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Target className="w-5 h-5 text-teal-600" />
          This quiz is created to:
        </h3>

        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
            <span>Assess your basic understanding of software testing concepts</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
            <span>Check your fundamentals in programming and computer science (useful for QA)</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
            <span>Evaluate your logical thinking and problem‑solving approach</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
            <span>Help you understand your readiness for a QA/testing career roadmap</span>
          </li>
        </ul>
      </div> */}

      {/* <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-white">
        <div className="flex items-start gap-3">
          <Lightbulb className="w-6 h-6 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold mb-2">Important Note:</p>
            <p className="text-white/90">
              Participate honestly and attempt all questions. Use this quiz to identify your strengths
              and the areas you should improve to become job‑ready in software testing.
            </p>
          </div>
        </div>
      </div> */}

      <div className="text-center pt-4">
        <p className="text-2xl font-bold text-teal-600 mb-6">All the best!</p>
        <button
          onClick={() => setShowWelcome(false)}
          className="group px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 mx-auto"
        >
          Proceed to Quiz
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  </div>
)  : !isAuthenticated ? (
            // Authentication Form
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-100">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-teal-50 px-4 py-2 rounded-full text-xs text-teal-700 font-semibold mb-4 border border-teal-200">
                  <Brain className="w-4 h-4" />
                  Technical Assessment Quiz
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Enter Your Details to Start
                </h2>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-red-800 font-medium flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  Important: You can only take this quiz ONCE on this device.
                </p>
              </div>

              <form onSubmit={handleAuthenticate} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="inline w-4 h-4 mr-1" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.name ? "border-red-400" : "border-gray-200"
                    } focus:border-teal-500 focus:ring-2 focus:ring-teal-200/50 transition-all bg-white`}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                      <X className="w-3 h-3" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail className="inline w-4 h-4 mr-1" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.email ? "border-red-400" : "border-gray-200"
                    } focus:border-teal-500 focus:ring-2 focus:ring-teal-200/50 transition-all bg-white`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                      <X className="w-3 h-3" />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Phone className="inline w-4 h-4 mr-1" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: undefined });
                    }}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.phone ? "border-red-400" : "border-gray-200"
                    } focus:border-teal-500 focus:ring-2 focus:ring-teal-200/50 transition-all bg-white`}
                    placeholder="10-digit mobile number"
                  />
                  {errors.phone && (
                    <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                      <X className="w-3 h-3" />
                      {errors.phone}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  Continue to Quiz
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          ) : !hasStarted ? (
            // Start Screen
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-100 text-center">
              <div className="w-20 h-20 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-teal-100">
                <Brain className="w-10 h-10 text-teal-600" />
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Welcome, {formData.name}!
              </h2>
              <p className="text-gray-700 mb-8">
                You're all set. Click the button below to start the quiz.
              </p>

              <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-4">Quiz Details:</h3>
                <ul className="text-left space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-teal-600" />
                    <span>10 Multiple Choice Questions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-teal-600" />
                    <span>Topics: OS, Data Structures, Networking, C Programming</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-teal-600" />
                    <span>No time limit</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Lock className="w-5 h-5 text-red-600" />
                    <span className="font-semibold text-red-800">One attempt per device - Make it count!</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={handleStartQuiz}
                className="w-full py-4 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                Start Quiz
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          ) : score === null ? (
            // Quiz Questions
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-100">
              <div className="mb-8 pb-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Taking quiz as:</p>
                    <p className="font-semibold text-gray-900">{formData.name}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-red-600 font-medium flex items-center gap-1">
                      <Lock className="w-3 h-3" />
                      One attempt only
                    </p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="space-y-8">
                  {questions.map((q, i) => (
                    <div key={q.id} className="pb-6 border-b border-gray-100 last:border-0">
                      <h3 className="text-lg font-bold text-gray-900 mb-4">
                        {i + 1}. {q.question}
                      </h3>

                      <div className="space-y-3">
                        {q.options.map((opt, idx) => {
                          const optionLetter = ["A", "B", "C", "D"][idx];
                          const isSelected = answers[q.id] === optionLetter;

                          return (
                            <label
                              key={idx}
                              className={`flex items-start gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                                isSelected
                                  ? "border-teal-500 bg-teal-50"
                                  : "border-gray-200 hover:border-teal-300 hover:bg-gray-50"
                              }`}
                            >
                              <input
                                type="radio"
                                name={q.id}
                                checked={isSelected}
                                onChange={() => handleAnswerChange(q.id, idx)}
                                className="mt-1 w-4 h-4 text-teal-600 focus:ring-teal-500"
                              />
                              <span className="flex-1 text-gray-700">
                                <span className="font-semibold">{optionLetter}.</span> {opt}
                              </span>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || Object.keys(answers).length < questions.length}
                  className="w-full mt-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Submitting Quiz...
                    </>
                  ) : (
                    <>
                      Submit Quiz
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>

                {Object.keys(answers).length < questions.length && (
                  <p className="text-center text-sm text-gray-600 mt-4">
                    Please answer all questions ({Object.keys(answers).length}/{questions.length} completed)
                  </p>
                )}
              </form>
            </div>
          ) : (
            // Results Screen
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-100 text-center">
              <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 border-4 ${
                score >= 7 ? "bg-green-50 border-green-100" : score >= 5 ? "bg-yellow-50 border-yellow-100" : "bg-red-50 border-red-100"
              }`}>
                <CheckCircle className={`w-12 h-12 ${
                  score >= 7 ? "text-green-600" : score >= 5 ? "text-yellow-600" : "text-red-600"
                }`} />
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Quiz Completed!
              </h2>

              <div className="inline-block bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-4 rounded-xl mb-6 shadow-lg">
                <p className="text-sm opacity-90 mb-1">Your Final Score</p>
                <p className="text-4xl font-bold">
                  {score} / {questions.length}
                </p>
                <p className="text-sm opacity-90 mt-1">
                  {Math.round((score / questions.length) * 100)}%
                </p>
              </div>

              <p className="text-gray-700 mb-4">
                {score >= 7
                  ? "🎉 Excellent work! You have a strong understanding."
                  : score >= 5
                  ? "👍 Good job! Keep practicing to improve further."
                  : "💪 Keep learning! Practice makes perfect."}
              </p>

              <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-teal-800">
                  ✓ Your results have been submitted successfully!
                </p>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-red-800 font-medium flex items-center justify-center gap-2">
                  <Lock className="w-4 h-4" />
                  This device is now permanently locked from retaking this quiz.
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  Thank you for participating in the Technical Awareness Session at JDT Islam Polytechnic College.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}