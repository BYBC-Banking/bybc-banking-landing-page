
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, TrendingUp, Bitcoin, Building2, PieChart, BarChart3, DollarSign, Clock, Shield, Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Investments = () => {
  const data = [
    { name: 'Jan', value: 100 },
    { name: 'Feb', value: 120 },
    { name: 'Mar', value: 140 },
    { name: 'Apr', value: 135 },
    { name: 'May', value: 160 },
    { name: 'Jun', value: 180 },
  ];

  const investmentServices = [
    {
      icon: TrendingUp,
      title: "Unit Trusts",
      description: "Description, growth visuals, risk-based categories",
      features: ["Diversified portfolios", "Professional management", "Risk categories", "Low minimum investment"],
      cta: "Invest Now"
    },
    {
      icon: Clock,
      title: "Retirement Annuities",
      description: "Time horizon planning, benefit explanation",
      features: ["Tax benefits", "Long-term growth", "Flexible contributions", "Retirement planning"],
      cta: "Plan Retirement"
    },
    {
      icon: Shield,
      title: "Tax-Free Savings",
      description: "Tax-saving calculator, deposit limits",
      features: ["Tax-free growth", "Annual limit R36,000", "No capital gains tax", "Flexible withdrawals"],
      cta: "Calculate Savings"
    },
    {
      icon: BarChart3,
      title: "Share Trading",
      description: "Stock search interface, sparkline charts",
      features: ["Real-time quotes", "Advanced charts", "Research tools", "Mobile trading"],
      cta: "Start Trading"
    }
  ];

  const investmentOptions = [
    {
      icon: Bitcoin,
      title: "Cryptocurrency",
      description: "Trade Bitcoin, Ethereum, and other major cryptocurrencies",
      features: ["Zero trading fees", "Cold storage security", "Real-time pricing"]
    },
    {
      icon: Building2,
      title: "JSE Access",
      description: "Direct access to Johannesburg Stock Exchange",
      features: ["Local stocks", "ETFs", "Bonds"]
    },
    {
      icon: PieChart,
      title: "Portfolio Management",
      description: "Professional-grade portfolio analytics and insights",
      features: ["Risk analysis", "Performance tracking", "Rebalancing alerts"]
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
              Investment <span className="text-[#ffd700]">Platform</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Access stocks, ETFs, unit trusts, and crypto with professional-grade analytics and zero trading fees.
            </p>
          </div>

          {/* Dashboard Preview */}
          <div className="mb-16">
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-white text-2xl font-medium mb-4">Portfolio Performance</h2>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Total Value</span>
                        <span className="text-[#ffd700] font-medium">R 124,580.00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Today's Change</span>
                        <span className="text-green-400 font-medium">+R 2,340.00 (+1.9%)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Total Return</span>
                        <span className="text-green-400 font-medium">+R 24,580.00 (+24.6%)</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white text-lg font-medium mb-4">6-Month Performance</h3>
                    <div className="h-48">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data}>
                          <XAxis dataKey="name" axisLine={false} tickLine={false} />
                          <YAxis hide />
                          <Line 
                            type="monotone" 
                            dataKey="value" 
                            stroke="#ffd700" 
                            strokeWidth={3}
                            dot={false}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Investment Services */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-center mb-12">Investment <span className="text-[#ffd700]">Services</span></h2>
            <div className="grid md:grid-cols-2 gap-8">
              {investmentServices.map((service) => (
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

          {/* Investment Options */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-center mb-12">Trading <span className="text-[#ffd700]">Options</span></h2>
            <div className="grid md:grid-cols-3 gap-8">
              {investmentOptions.map((option) => (
                <Card key={option.title} className="bg-gray-900 border-gray-800 hover:border-[#ffd700] transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-[#ffd700] bg-opacity-10 rounded-2xl flex items-center justify-center mb-4">
                      <option.icon className="w-6 h-6 text-[#ffd700]" />
                    </div>
                    <h3 className="text-white text-lg font-medium mb-3">{option.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{option.description}</p>
                    <ul className="space-y-1">
                      {option.features.map((feature, index) => (
                        <li key={index} className="text-gray-400 text-sm">• {feature}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Features Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-center mb-12">Platform <span className="text-[#ffd700]">Features</span></h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <BarChart3 className="w-8 h-8 text-[#ffd700]" />
                    <h3 className="text-white text-xl font-medium">Advanced Analytics</h3>
                  </div>
                  <p className="text-gray-300 mb-4">Professional-grade tools for market analysis and portfolio optimization.</p>
                  <ul className="text-gray-400 space-y-1 text-sm">
                    <li>• Real-time market data</li>
                    <li>• Technical indicators</li>
                    <li>• Risk assessment tools</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <DollarSign className="w-8 h-8 text-[#ffd700]" />
                    <h3 className="text-white text-xl font-medium">Zero Trading Fees</h3>
                  </div>
                  <p className="text-gray-300 mb-4">Trade without worrying about fees eating into your returns.</p>
                  <ul className="text-gray-400 space-y-1 text-sm">
                    <li>• No commission on trades</li>
                    <li>• No account maintenance fees</li>
                    <li>• Competitive FX rates</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-medium mb-4">Ready to Start Investing?</h3>
              <p className="text-gray-300 mb-6">Switch to our Investment Account and start building your wealth today.</p>
              <Button className="bg-[#ffd700] text-[#0f0f23] hover:bg-[#ffed4e]">
                Switch to Investment Account
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

export default Investments;
