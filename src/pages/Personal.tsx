
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Wallet, PiggyBank, Bot, Smartphone, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Personal = () => {
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
              Experience modern banking designed for your personal financial needs with our Spending and Savings accounts.
            </p>
          </div>

          {/* Account Types */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="bg-gray-900 border-gray-800 hover:border-[#ffd700] transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#ffd700] bg-opacity-10 rounded-2xl flex items-center justify-center">
                    <Wallet className="w-8 h-8 text-[#ffd700]" />
                  </div>
                  <h3 className="text-2xl font-medium">Spending Account</h3>
                </div>
                <p className="text-gray-300 mb-6">Your everyday account for payments, transfers, and daily banking needs.</p>
                <ul className="text-gray-400 space-y-2 mb-8">
                  <li>• No monthly fees</li>
                  <li>• Instant payments</li>
                  <li>• Global access</li>
                  <li>• Real-time notifications</li>
                </ul>
                <Button className="w-full bg-[#ffd700] text-[#0f0f23] hover:bg-[#ffed4e]">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:border-[#ffd700] transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#ffd700] bg-opacity-10 rounded-2xl flex items-center justify-center">
                    <PiggyBank className="w-8 h-8 text-[#ffd700]" />
                  </div>
                  <h3 className="text-2xl font-medium">Savings Account</h3>
                </div>
                <p className="text-gray-300 mb-6">High-interest savings with smart goals and automated saving features.</p>
                <ul className="text-gray-400 space-y-2 mb-8">
                  <li>• Up to 8% interest</li>
                  <li>• Auto-save features</li>
                  <li>• Goal tracking</li>
                  <li>• Flexible withdrawals</li>
                </ul>
                <Button className="w-full bg-[#ffd700] text-[#0f0f23] hover:bg-[#ffed4e]">
                  Get Started
                </Button>
              </CardContent>
            </Card>
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
                    <h3 className="text-lg font-medium mb-3">{feature.title}</h3>
                    <p className="text-gray-300 text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
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
                <Button variant="outline" className="border-gray-600 hover:bg-gray-800">
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
