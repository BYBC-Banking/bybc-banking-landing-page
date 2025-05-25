
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Heart, Eye, FileCheck, TrendingUp, Users, Shield, Target, BarChart3, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const NonProfit = () => {
  const nonprofitServices = [
    {
      icon: Heart,
      title: "NGO Banking",
      description: "Account features specifically designed for causes",
      features: ["Transparent transactions", "Low fees for NGOs", "Multi-currency support", "Compliance tools"],
      cta: "Apply Now"
    },
    {
      icon: Users,
      title: "Donor Management",
      description: "CRM features, recurring donor insights",
      features: ["Donor database", "Recurring donation setup", "Donor engagement tools", "Contact management"],
      cta: "Learn More"
    },
    {
      icon: BarChart3,
      title: "Impact Reporting",
      description: "Visual dashboards, downloadable reports",
      features: ["Real-time dashboards", "Custom reports", "Impact metrics", "Downloadable formats"],
      cta: "View Demo"
    },
    {
      icon: Target,
      title: "Fundraising Tools",
      description: "Donation links, widgets, progress meters",
      features: ["Donation widgets", "Campaign tracking", "Progress visualization", "Social media integration"],
      cta: "Get Started"
    }
  ];

  const benefits = [
    {
      icon: Eye,
      title: "Public Ledger",
      description: "Complete transparency with public access to all transactions and fund usage"
    },
    {
      icon: TrendingUp,
      title: "Donation Tracking",
      description: "Real-time tracking of donations with automated receipts and reporting"
    },
    {
      icon: FileCheck,
      title: "Compliance Features",
      description: "Built-in compliance tools to meet regulatory requirements effortlessly"
    },
    {
      icon: Shield,
      title: "Impact Metrics",
      description: "Automated impact reporting to show real results to your supporters"
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
              Non-Profit <span className="text-[#ffd700]">Banking</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transparent banking designed specifically for NGOs, charities, and social impact organizations.
            </p>
          </div>

          {/* Non-Profit Services */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-center mb-12">Our <span className="text-[#ffd700]">Services</span></h2>
            <div className="grid md:grid-cols-2 gap-8">
              {nonprofitServices.map((service) => (
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

          {/* Key Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-center mb-12">Unique <span className="text-[#ffd700]">Benefits</span></h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit) => (
                <Card key={benefit.title} className="bg-gray-900 border-gray-800 hover:border-[#ffd700] transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-[#ffd700] bg-opacity-10 rounded-2xl flex items-center justify-center mb-4">
                      <benefit.icon className="w-6 h-6 text-[#ffd700]" />
                    </div>
                    <h3 className="text-lg font-medium mb-3">{benefit.title}</h3>
                    <p className="text-gray-300 text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Transparency Showcase */}
          <div className="mb-16">
            <Card className="bg-gradient-to-r from-gray-900 to-gray-800 border-gray-700">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-3xl font-light mb-4">Complete <span className="text-[#ffd700]">Transparency</span></h2>
                    <p className="text-gray-300 mb-6">
                      Build trust with your donors through our revolutionary public ledger system. 
                      Every transaction is visible, every impact is measurable, and every donor knows exactly how their contribution is making a difference.
                    </p>
                    <ul className="text-gray-400 space-y-2 mb-6">
                      <li>• Real-time transaction visibility</li>
                      <li>• Automated impact reporting</li>
                      <li>• Donor engagement tools</li>
                      <li>• Compliance automation</li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <div className="w-32 h-32 bg-[#ffd700] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Eye className="w-16 h-16 text-[#ffd700]" />
                    </div>
                    <div className="space-y-2">
                      <div className="text-2xl font-bold text-[#ffd700]">100%</div>
                      <div className="text-gray-300">Transparent</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* How It Works */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-center mb-12">How It <span className="text-[#ffd700]">Works</span></h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#ffd700] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#ffd700] font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg font-medium mb-2">Register Your Cause</h3>
                <p className="text-gray-300 text-sm">Set up your non-profit account with full compliance verification</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#ffd700] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#ffd700] font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg font-medium mb-2">Receive Donations</h3>
                <p className="text-gray-300 text-sm">Accept donations with automatic tracking and receipt generation</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#ffd700] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#ffd700] font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg font-medium mb-2">Show Impact</h3>
                <p className="text-gray-300 text-sm">Share real-time impact reports with your supporters</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-medium mb-4">Ready to Make a Difference?</h3>
              <p className="text-gray-300 mb-6">Join the movement towards transparent, impactful giving.</p>
              <Button className="bg-[#ffd700] text-[#0f0f23] hover:bg-[#ffed4e]">
                Register Your Cause
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

export default NonProfit;
