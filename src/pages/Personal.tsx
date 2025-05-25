
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Wallet, PiggyBank, Bot, Smartphone, DollarSign, Clock, CreditCard, Home, Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Personal = () => {
  const accountTypes = [
    {
      icon: Wallet,
      title: "Savings Account",
      description: "Benefits, interest tiers, auto-save options",
      features: ["Up to 8% interest", "Auto-save features", "Goal tracking", "Flexible withdrawals"],
      cta: "Apply Now"
    },
    {
      icon: PiggyBank,
      title: "Current Account",
      description: "Real-time transfers, debit cards, low fees",
      features: ["No monthly fees", "Instant payments", "Global access", "Real-time notifications"],
      cta: "Apply Now"
    },
    {
      icon: Clock,
      title: "Fixed Deposits",
      description: "Term lock-in options and projected returns",
      features: ["Fixed interest rates", "Term options 3-60 months", "Guaranteed returns", "Early withdrawal options"],
      cta: "Learn More"
    },
    {
      icon: CreditCard,
      title: "Personal Loans",
      description: "Eligibility checker and repayment estimator",
      features: ["Competitive rates", "Quick approval", "Flexible terms", "Online application"],
      cta: "Check Eligibility"
    },
    {
      icon: Home,
      title: "Home Loans",
      description: "Flexible options, how to qualify, and documents needed",
      features: ["Up to 100% financing", "Fixed & variable rates", "Pre-approval available", "Expert guidance"],
      cta: "Learn More"
    }
  ];

  const features = [
    {
      icon: Bot,
      title: "Lana AI Assistant",
      description: "24/7 personal banking assistant to help with transactions and financial advice"
    },
    {
      icon: DollarSign,
      title: "Low Fees",
      description: "No monthly maintenance fees and competitive transaction costs"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Banking designed for your smartphone with intuitive controls"
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
              Personal <span className="text-[#ffd700]">Banking</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Experience modern banking designed for your personal financial needs with comprehensive account options and lending solutions.
            </p>
          </div>

          {/* Account Types and Services */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-center mb-12">Our <span className="text-[#ffd700]">Services</span></h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {accountTypes.map((account) => (
                <Card key={account.title} className="bg-gray-900 border-gray-800 hover:border-[#ffd700] transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-[#ffd700] bg-opacity-10 rounded-2xl flex items-center justify-center mb-4">
                      <account.icon className="w-6 h-6 text-[#ffd700]" />
                    </div>
                    <h3 className="text-white text-xl font-medium mb-3">{account.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{account.description}</p>
                    <ul className="text-gray-400 space-y-1 text-sm mb-6">
                      {account.features.map((feature, index) => (
                        <li key={index}>• {feature}</li>
                      ))}
                    </ul>
                    <Button className="w-full bg-[#ffd700] text-[#0f0f23] hover:bg-[#ffed4e]">
                      {account.cta}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-center mb-12">Why Choose <span className="text-[#ffd700]">BYBC Personal</span></h2>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature) => (
                <Card key={feature.title} className="bg-gray-900 border-gray-800 text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-[#ffd700] bg-opacity-10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-6 h-6 text-[#ffd700]" />
                    </div>
                    <h3 className="text-white text-lg font-medium mb-3">{feature.title}</h3>
                    <p className="text-gray-300 text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Loan Calculator Section */}
          <div className="mb-16">
            <Card className="bg-gradient-to-r from-gray-900 to-gray-800 border-gray-700">
              <CardContent className="p-8">
                <div className="text-center">
                  <Calculator className="w-16 h-16 text-[#ffd700] mx-auto mb-4" />
                  <h2 className="text-white text-2xl font-medium mb-4">Loan Calculator</h2>
                  <p className="text-gray-300 mb-6">
                    Calculate your monthly repayments for personal and home loans with our interactive calculator.
                  </p>
                  <Button className="bg-[#ffd700] text-[#0f0f23] hover:bg-[#ffed4e]">
                    Calculate Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-medium mb-4">Ready to Get Started?</h3>
              <p className="text-gray-300 mb-6">Compare our plans and find the perfect account for your needs.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[#ffd700] text-[#0f0f23] hover:bg-[#ffed4e]">
                  Compare Plans
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-700 text-white transition-none"                >
                  Get Started
                </Button>

              </div>
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

export default Personal;
