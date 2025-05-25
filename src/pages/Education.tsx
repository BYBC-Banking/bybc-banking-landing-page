
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, BookOpen, Video, Award, Calculator, TrendingUp, DollarSign, GraduationCap, Users, CreditCard, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Education = () => {
  const [progress, setProgress] = useState(65);

  const educationServices = [
    {
      icon: GraduationCap,
      title: "Student Accounts",
      description: "No-fee banking with budgeting tools",
      features: ["Zero monthly fees", "Budgeting tools", "Student discounts", "Mobile banking"],
      cta: "Apply Now"
    },
    {
      icon: CreditCard,
      title: "Education Loans",
      description: "Smart application preview, interest simulation",
      features: ["Competitive rates", "Flexible repayment", "Quick approval", "Study abroad support"],
      cta: "Apply for Loan"
    },
    {
      icon: DollarSign,
      title: "Financial Loans",
      description: "Support for study-related financial gaps",
      features: ["Emergency funding", "Equipment loans", "Accommodation loans", "Living expenses"],
      cta: "Learn More"
    },
    {
      icon: Gift,
      title: "Scholarships",
      description: "Directory of supported grants and how to apply",
      features: ["Merit-based grants", "Need-based support", "Application guidance", "Success tracking"],
      cta: "Browse Scholarships"
    }
  ];

  const learningContent = [
    {
      icon: BookOpen,
      title: "Financial Literacy Articles",
      description: "In-depth articles on budgeting, saving, and investing",
      count: "24 Articles",
      type: "article"
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Step-by-step video guides for all banking features",
      count: "18 Videos",
      type: "video"
    },
    {
      icon: Award,
      title: "Interactive Quizzes",
      description: "Test your knowledge and earn certificates",
      count: "12 Quizzes",
      type: "quiz"
    },
    {
      icon: Calculator,
      title: "Financial Tools",
      description: "Calculators for loans, savings, and investments",
      count: "8 Tools",
      type: "tool"
    }
  ];

  const courses = [
    {
      title: "Banking Basics",
      description: "Learn the fundamentals of modern banking",
      progress: 100,
      lessons: 8,
      completed: true
    },
    {
      title: "Investment Fundamentals",
      description: "Introduction to stocks, bonds, and crypto",
      progress: 60,
      lessons: 12,
      completed: false
    },
    {
      title: "Business Finance",
      description: "Financial management for entrepreneurs",
      progress: 30,
      lessons: 15,
      completed: false
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f0f23] text-white">
      <Header />
      
      <main className="pt-8 pb-24">
        <div className="max-w-6xl mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link to="/" className="flex items-center text-gray-400 hover:text-[#ffd700] transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>

          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-light mb-6">
              Financial <span className="text-[#ffd700]">Education</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Build your financial knowledge with interactive courses, tools, and resources designed for students and lifelong learners.
            </p>
          </div>

          {/* Education Services */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-center mb-12">Education <span className="text-[#ffd700]">Services</span></h2>
            <div className="grid md:grid-cols-2 gap-8">
              {educationServices.map((service) => (
                <Card key={service.title} className="bg-gray-900 border-gray-800 hover:border-[#ffd700] transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-[#ffd700] bg-opacity-10 rounded-2xl flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-[#ffd700]" />
                    </div>
                    <h3 className="text-xl font-medium mb-3">{service.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                    <ul className="text-gray-400 space-y-1 text-sm mb-6">
                      {service.features.map((feature, index) => (
                        <li key={index}>• {feature}</li>
                      ))}
                    </ul>
                    <Button className="w-full bg-[#ffd700] text-[#0f0f23] hover:bg-[#ffed4e]">
                      {service.cta}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Progress Tracker */}
          <div className="mb-16">
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-2xl font-medium mb-4">Your Learning Progress</h2>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Overall Progress</span>
                        <span className="text-[#ffd700] font-medium">{progress}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-3">
                        <div 
                          className="bg-[#ffd700] h-3 rounded-full transition-all duration-500"
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 mt-6">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-[#ffd700]">12</div>
                          <div className="text-gray-400 text-sm">Completed</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-[#ffd700]">3</div>
                          <div className="text-gray-400 text-sm">In Progress</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-[#ffd700]">4</div>
                          <div className="text-gray-400 text-sm">Certificates</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="w-32 h-32 bg-[#ffd700] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <TrendingUp className="w-16 h-16 text-[#ffd700]" />
                    </div>
                    <Button className="bg-[#ffd700] text-[#0f0f23] hover:bg-[#ffed4e]">
                      Continue Learning
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Learning Content Types */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-center mb-12">Learning <span className="text-[#ffd700]">Content</span></h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {learningContent.map((content) => (
                <Card key={content.title} className="bg-gray-900 border-gray-800 hover:border-[#ffd700] transition-all duration-300 cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-[#ffd700] bg-opacity-10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <content.icon className="w-6 h-6 text-[#ffd700]" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">{content.title}</h3>
                    <p className="text-gray-300 text-sm mb-3">{content.description}</p>
                    <span className="text-[#ffd700] text-sm font-medium">{content.count}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Course Progress */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-center mb-12">Your <span className="text-[#ffd700]">Courses</span></h2>
            <div className="space-y-6">
              {courses.map((course, index) => (
                <Card key={course.title} className="bg-gray-900 border-gray-800 hover:border-[#ffd700] transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-medium mb-1">{course.title}</h3>
                        <p className="text-gray-300 text-sm">{course.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-[#ffd700] font-medium">{course.progress}%</div>
                        <div className="text-gray-400 text-sm">{course.lessons} lessons</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex-1 bg-gray-700 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-500 ${
                            course.completed ? 'bg-green-500' : 'bg-[#ffd700]'
                          }`}
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-gray-600 hover:bg-gray-800"
                      >
                        {course.completed ? 'Review' : 'Continue'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Financial Tools */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-center mb-12">Financial <span className="text-[#ffd700]">Tools</span></h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gray-900 border-gray-800 hover:border-[#ffd700] transition-all duration-300 cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Calculator className="w-8 h-8 text-[#ffd700]" />
                    <h3 className="text-xl font-medium">Investment Calculator</h3>
                  </div>
                  <p className="text-gray-300 mb-4">Calculate potential returns on your investments over time.</p>
                  <Button variant="outline" className="border-gray-600 hover:bg-gray-800">
                    Try Calculator
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800 hover:border-[#ffd700] transition-all duration-300 cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <DollarSign className="w-8 h-8 text-[#ffd700]" />
                    <h3 className="text-xl font-medium">Budget Planner</h3>
                  </div>
                  <p className="text-gray-300 mb-4">Create and track your monthly budget with smart recommendations.</p>
                  <Button variant="outline" className="border-gray-600 hover:bg-gray-800">
                    Start Planning
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-medium mb-4">Ready to Learn More?</h3>
              <p className="text-gray-300 mb-6">Join thousands of learners building their financial knowledge with BYBC.</p>
              <Button className="bg-[#ffd700] text-[#0f0f23] hover:bg-[#ffed4e]">
                Continue Learning
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Sticky CTA */}
      <div className="fixed bottom-4 right-4 flex gap-2">
        <Button className="bg-[#ffd700] text-[#0f0f23] hover:bg-[#ffed4e] shadow-lg">
          Open an Account
        </Button>
        <Button variant="outline" className="border-gray-600 bg-gray-900 shadow-lg">
          Download App
        </Button>
      </div>

      <Footer />
    </div>
  );
};

export default Education;
