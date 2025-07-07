
import React from 'react';
import { Button } from "@/components/ui/button";
import { Shield, Zap, Globe, Smartphone, ArrowLeft, Star, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const SendMoney = () => {
  const features = [
    {
      icon: Shield,
      title: "Secure Transfers",
      description: "End-to-end encryption protects every transaction with bank-grade security"
    },
    {
      icon: Zap,
      title: "Instant Payments",
      description: "EFT, mobile wallet, and crypto transfers processed in real-time"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Send internationally via Swift network or cryptocurrency rails"
    },
    {
      icon: Smartphone,
      title: "Multiple Methods",
      description: "Send via phone number, account details, or QR code scanning"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <header className="bg-slate-900/50 border-b border-slate-700 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center">
                <span className="text-slate-900 font-bold text-sm">B</span>
              </div>
              <span className="font-semibold">BYBC Banking</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 px-4 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 border border-yellow-400 rounded-full" />
          <div className="absolute bottom-32 right-16 w-24 h-24 border border-yellow-400 rounded-full" />
          <div className="absolute top-1/2 right-1/4 w-16 h-16 border border-yellow-400 rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Send Money{" "}
                <span className="text-yellow-400">Instantly</span>,{" "}
                Locally & Internationally
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed">
                Transfer funds securely with no hidden fees. From instant local payments to global remittances - all from your mobile device.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-semibold px-8 py-3 text-lg transition-all duration-300 hover:scale-105">
                Open an Account
              </Button>
              <Button 
                variant="outline" 
                className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-slate-900 px-8 py-3 text-lg transition-all duration-300"
              >
                Send Now
              </Button>
            </div>

            {/* Trust Elements */}
            <div className="flex flex-col sm:flex-row items-center gap-6 pt-8 text-sm text-gray-400">
              <div className="flex items-center gap-4">
                <div className="px-3 py-1 bg-slate-800 rounded-full border border-slate-700">
                  FSCA Regulated
                </div>
                <div className="px-3 py-1 bg-slate-800 rounded-full border border-slate-700">
                  SARB Approved
                </div>
              </div>
            </div>
          </div>

          {/* Mobile App Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-[640px] bg-black rounded-[3rem] p-6 shadow-2xl border border-gray-700">
                <div className="w-full h-full bg-gradient-to-b from-slate-800 to-slate-900 rounded-[2rem] overflow-hidden relative">
                  {/* Status bar */}
                  <div className="flex justify-between items-center px-6 py-3 text-white text-sm">
                    <span>9:41</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-2 bg-white rounded-sm opacity-60" />
                      <div className="w-4 h-2 bg-white rounded-sm opacity-80" />
                      <div className="w-4 h-2 bg-white rounded-sm" />
                    </div>
                  </div>

                  {/* Send Money Interface */}
                  <div className="px-6 py-4 space-y-6">
                    <div className="text-center">
                      <h3 className="text-white text-xl font-semibold">Send Money</h3>
                      <p className="text-gray-400 text-sm">Choose recipient and amount</p>
                    </div>

                    {/* Amount Input */}
                    <div className="bg-slate-700 rounded-2xl p-6 text-center">
                      <p className="text-gray-400 text-sm mb-2">Amount to Send</p>
                      <p className="text-yellow-400 text-4xl font-light">R2,500</p>
                      <p className="text-gray-400 text-sm mt-2">ZAR</p>
                    </div>

                    {/* Recipient */}
                    <div className="space-y-3">
                      <p className="text-white font-medium">Send to:</p>
                      <div className="flex items-center gap-3 bg-slate-700 rounded-xl p-4">
                        <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                          <span className="text-slate-900 font-bold">M</span>
                        </div>
                        <div>
                          <p className="text-white font-medium">Mom</p>
                          <p className="text-gray-400 text-sm">***-***-1234</p>
                        </div>
                        <CheckCircle className="w-5 h-5 text-green-400 ml-auto" />
                      </div>
                    </div>

                    {/* Send Button */}
                    <div className="pt-4">
                      <div className="bg-yellow-400 rounded-xl p-4 text-center">
                        <span className="text-slate-900 font-semibold text-lg">Send Money</span>
                      </div>
                    </div>

                    {/* Recent Recipients */}
                    <div className="space-y-3">
                      <p className="text-white font-medium text-sm">Recent</p>
                      <div className="flex gap-3">
                        {["J", "A", "S"].map((initial, i) => (
                          <div key={i} className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm">{initial}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 bg-opacity-20 rounded-full animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-yellow-400 bg-opacity-20 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="text-yellow-400">BYBC</span> for Money Transfers?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of banking with our cutting-edge technology and customer-first approach
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-slate-900/50 rounded-2xl p-8 border border-slate-700 hover:border-yellow-400/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-400/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl text-gray-300 mb-6 italic">
              "BYBC has revolutionized how I send money to my family. Instant transfers, 
              competitive rates, and the peace of mind knowing my money is safe. 
              This is banking done right for South Africa."
            </blockquote>
            <cite className="text-yellow-400 font-semibold">
              — Thabo M., Cape Town Business Owner
            </cite>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Send Money the Smart Way?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of South Africans who trust BYBC for their money transfer needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 text-lg transition-all duration-300 hover:scale-105">
              Open Your Account Today
            </Button>
            <Button 
              variant="outline" 
              className="border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white px-8 py-3 text-lg transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p className="mb-4">© 2024 BYBC Banking. All rights reserved.</p>
          <div className="flex justify-center gap-6 text-sm">
            <a href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Contact Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SendMoney;
