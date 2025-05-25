
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Search, MessageCircle, BookOpen, FileText, Lightbulb, HelpCircle, Phone, TrendingUp, Users, Bot, Newspaper } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Learn = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const learningServices = [
    {
      icon: BookOpen,
      title: "Financial Education",
      description: "Beginner finance cards (budgeting, credit)",
      features: ["Budgeting basics", "Credit management", "Saving strategies", "Debt management"],
      cta: "Start Learning"
    },
    {
      icon: TrendingUp,
      title: "Investment Guides",
      description: "Compound growth explanation, risk sliders",
      features: ["Investment basics", "Risk assessment", "Portfolio building", "Market analysis"],
      cta: "Explore Guides"
    },
    {
      icon: Users,
      title: "Banking Tutorials",
      description: "BYBC feature walkthroughs and onboarding",
      features: ["Account setup", "Mobile app guide", "Transfer tutorials", "Security features"],
      cta: "Watch Tutorials"
    },
    {
      icon: Newspaper,
      title: "Market Insights",
      description: "News blog, economy summaries, AI-curated posts",
      features: ["Daily market news", "Economic updates", "AI analysis", "Expert opinions"],
      cta: "Read Insights"
    }
  ];

  const faqs = [
    {
      question: "How do I open a BYBC account?",
      answer: "You can open an account online in minutes by clicking 'Open an Account' and following the simple verification process."
    },
    {
      question: "Are there any monthly fees?",
      answer: "BYBC Spending accounts have no monthly maintenance fees. Only pay for what you use."
    },
    {
      question: "How secure is my money with BYBC?",
      answer: "We use bank-grade encryption and are fully regulated. Your deposits are protected up to R500,000."
    },
    {
      question: "Can I use BYBC internationally?",
      answer: "Yes, BYBC works globally with competitive foreign exchange rates and no international fees."
    }
  ];

  const helpCategories = [
    {
      icon: BookOpen,
      title: "Getting Started",
      description: "Account setup, verification, and first steps",
      articles: 12
    },
    {
      icon: Lightbulb,
      title: "App Tips & Tricks",
      description: "Make the most of your BYBC app experience",
      articles: 18
    },
    {
      icon: FileText,
      title: "Policies & Terms",
      description: "Legal documents, privacy policy, and terms",
      articles: 8
    },
    {
      icon: MessageCircle,
      title: "Troubleshooting",
      description: "Common issues and how to resolve them",
      articles: 15
    }
  ];

  const recentUpdates = [
    {
      title: "New Investment Features Released",
      date: "2024-01-15",
      summary: "We've added cryptocurrency trading and enhanced portfolio analytics."
    },
    {
      title: "Enhanced Security Measures",
      date: "2024-01-10",
      summary: "Additional biometric authentication options now available."
    },
    {
      title: "Mobile App Update 2.1",
      date: "2024-01-05",
      summary: "Improved user interface and faster transaction processing."
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
              Learn & <span className="text-[#ffd700]">Support</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Find answers, get support, and learn everything you need to know about BYBC and financial management.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help articles, FAQs, or topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#ffd700] transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Learning Services */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-center mb-12">Learning <span className="text-[#ffd700]">Resources</span></h2>
            <div className="grid md:grid-cols-2 gap-8">
              {learningServices.map((service) => (
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

          {/* Quick Actions */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="bg-gray-900 border-gray-800 hover:border-[#ffd700] transition-all duration-300 cursor-pointer">
              <CardContent className="p-6 text-center">
                <Phone className="w-12 h-12 text-[#ffd700] mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">Contact Support</h3>
                <p className="text-gray-300 text-sm mb-4">Speak with our customer service team</p>
                <Button variant="outline" className="border-gray-600 hover:bg-gray-800">
                  Get Help Now
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:border-[#ffd700] transition-all duration-300 cursor-pointer">
              <CardContent className="p-6 text-center">
                <MessageCircle className="w-12 h-12 text-[#ffd700] mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">Live Chat</h3>
                <p className="text-gray-300 text-sm mb-4">Chat with our support team in real-time</p>
                <Button variant="outline" className="border-gray-600 hover:bg-gray-800">
                  Start Chat
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:border-[#ffd700] transition-all duration-300 cursor-pointer">
              <CardContent className="p-6 text-center">
                <Bot className="w-12 h-12 text-[#ffd700] mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">Ask Lana</h3>
                <p className="text-gray-300 text-sm mb-4">Get instant answers from our AI assistant</p>
                <Button className="bg-[#ffd700] text-[#0f0f23] hover:bg-[#ffed4e]">
                  Ask Lana
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Help Categories */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-center mb-12">Browse by <span className="text-[#ffd700]">Category</span></h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {helpCategories.map((category) => (
                <Card key={category.title} className="bg-gray-900 border-gray-800 hover:border-[#ffd700] transition-all duration-300 cursor-pointer">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-[#ffd700] bg-opacity-10 rounded-2xl flex items-center justify-center mb-4">
                      <category.icon className="w-6 h-6 text-[#ffd700]" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">{category.title}</h3>
                    <p className="text-gray-300 text-sm mb-3">{category.description}</p>
                    <span className="text-[#ffd700] text-sm font-medium">{category.articles} articles</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* FAQs */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-center mb-12">Frequently Asked <span className="text-[#ffd700]">Questions</span></h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="bg-gray-900 border-gray-800">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <HelpCircle className="w-6 h-6 text-[#ffd700] mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-medium mb-2">{faq.question}</h3>
                        <p className="text-gray-300">{faq.answer}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Recent Updates */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-center mb-12">Recent <span className="text-[#ffd700]">Updates</span></h2>
            <div className="space-y-4">
              {recentUpdates.map((update, index) => (
                <Card key={index} className="bg-gray-900 border-gray-800 hover:border-[#ffd700] transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-medium">{update.title}</h3>
                      <span className="text-gray-400 text-sm">{update.date}</span>
                    </div>
                    <p className="text-gray-300">{update.summary}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Glossary Preview */}
          <div className="mb-16">
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-8">
                <div className="text-center">
                  <BookOpen className="w-16 h-16 text-[#ffd700] mx-auto mb-4" />
                  <h2 className="text-2xl font-medium mb-4">Financial Glossary</h2>
                  <p className="text-gray-300 mb-6">
                    Understand banking and financial terms with our comprehensive glossary.
                  </p>
                  <Button variant="outline" className="border-gray-600 hover:bg-gray-800">
                    Browse Glossary
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-medium mb-4">Still Need Help?</h3>
              <p className="text-gray-300 mb-6">Our support team is here to help you 24/7.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[#ffd700] text-[#0f0f23] hover:bg-[#ffed4e]">
                  Contact Support
                </Button>
                <Button variant="outline" className="border-gray-600 hover:bg-gray-800">
                  Schedule a Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Floating Ask Lana Button */}
      <div className="fixed bottom-20 left-4">
        <Button className="bg-[#ffd700] text-[#0f0f23] hover:bg-[#ffed4e] shadow-lg rounded-full w-14 h-14 p-0">
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>

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

export default Learn;
