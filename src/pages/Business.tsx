
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Building, CreditCard, Users, BarChart3, FileText, Calculator, QrCode, TrendingUp, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Business = () => {
  const businessServices = [
    {
      icon: Building,
      title: "Business Account",
      description: "Core vs. add-on plans (multi-user, invoicing)",
      features: ["Multi-currency support", "Team access controls", "Automated invoicing", "Real-time reporting"],
      cta: "Apply Now"
    },
    {
      icon: CreditCard,
      title: "Business Loans",
      description: "Smart credit scoring and Credit Passport usage",
      features: ["Quick approval process", "Competitive rates", "Credit building", "Flexible repayment"],
      cta: "Check Eligibility"
    },
    {
      icon: QrCode,
      title: "Merchant Services",
      description: "QR codes, POS tools, payment analytics",
      features: ["QR code payments", "POS integration", "Payment analytics", "Multi-channel support"],
      cta: "Learn More"
    },
    {
      icon: TrendingUp,
      title: "Treasury Solutions",
      description: "Enterprise cash management for larger clients",
      features: ["Cash flow management", "Investment options", "Risk management", "Dedicated support"],
      cta: "Contact Us"
    }
  ];

  const addOnFeatures = [
    { icon: Users, title: "Multi-User Roles", description: "Grant different access levels to team members" },
    { icon: BarChart3, title: "Analytics", description: "Detailed business insights and reporting" },
    { icon: FileText, title: "Expense Management", description: "Track and categorize business expenses" }
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
              Business <span className="text-[#ffd700]">Banking</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive business banking solutions with advanced tools for modern enterprises of all sizes.
            </p>
          </div>

          {/* Business Services */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-center mb-12">Business <span className="text-[#ffd700]">Services</span></h2>
            <div className="grid md:grid-cols-2 gap-8">
              {businessServices.map((service) => (
                <Card key={service.title} className="bg-gray-900 border-gray-800 hover:border-[#ffd700] transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-[#ffd700] bg-opacity-10 rounded-2xl flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-[#ffd700]" />
                    </div>
                    <h3 className="text-white text-xl font-medium mb-3">{service.title}</h3>
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

          {/* Add-on Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-center mb-12">Add-on <span className="text-[#ffd700]">Features</span></h2>
            <div className="grid md:grid-cols-3 gap-8">
              {addOnFeatures.map((feature) => (
                <Card key={feature.title} className="bg-gray-900 border-gray-800 hover:border-[#ffd700] transition-all duration-300">
                  <CardContent className="p-6 text-center">
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

          {/* Credit Passport Section */}
          <div className="mb-16">
            <Card className="bg-gradient-to-r from-gray-900 to-gray-800 border-gray-700">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-white text-3xl font-light mb-4">Credit <span className="text-[#ffd700]">Passport</span></h2>
                    <p className="text-gray-300 mb-6">
                      Build your business credit score with our Credit Passport feature. Get access to better rates, 
                      higher limits, and exclusive business opportunities through smart credit scoring.
                    </p>
                    <ul className="text-gray-400 space-y-2 mb-6">
                      <li>• Real-time credit monitoring</li>
                      <li>• Credit building recommendations</li>
                      <li>• Access to business loans</li>
                      <li>• Preferred partner rates</li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <div className="w-32 h-32 bg-[#ffd700] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Shield className="w-16 h-16 text-[#ffd700]" />
                    </div>
                    <Button className="bg-[#ffd700] text-[#0f0f23] hover:bg-[#ffed4e]">
                      Apply Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-medium mb-4">Ready to Grow Your Business?</h3>
              <p className="text-gray-300 mb-6">Join thousands of businesses already banking with BYBC.</p>
              <Button className="bg-[#ffd700] text-[#0f0f23] hover:bg-[#ffed4e]">
                Get Started Today
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

export default Business;
