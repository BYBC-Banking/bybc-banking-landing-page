
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Shield, TrendingUp, Eye, Clock, Share2, Download, RefreshCw, Building2, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CreditPassport = () => {
  const [creditScore] = useState(742);
  const [trend] = useState('up');

  const accessHistory = [
    {
      lender: "XYZ Bank",
      purpose: "Home Loan Application",
      dateShared: "2 days ago",
      expires: "1 day remaining",
      status: "active"
    },
    {
      lender: "ABC Credit Union",
      purpose: "Personal Loan Review", 
      dateShared: "1 week ago",
      expires: "Expired",
      status: "expired"
    },
    {
      lender: "First National Bank",
      purpose: "Credit Card Application",
      dateShared: "2 weeks ago",
      expires: "Expired",
      status: "expired"
    }
  ];

  const statusCards = [
    {
      title: "Credit Report",
      status: "Verified",
      icon: Shield,
      color: "green"
    },
    {
      title: "Income Verification",
      status: "In Review",
      icon: Clock,
      color: "yellow"
    },
    {
      title: "Bank Statements",
      status: "Verified", 
      icon: Building2,
      color: "green"
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
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-[#ffd700] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-[#ffd700]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-light mb-6">
              Your Portable <span className="text-[#ffd700]">Credit Profile</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Share your verified financial profile securely with lenders. Control who sees your data 
              and for how long, with encrypted sharing and smart consent management.
            </p>
          </div>

          {/* Credit Dashboard Preview */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Credit Score Card */}
            <Card className="lg:col-span-1 bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-[#ffd700]" />
                  Credit Score
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#ffd700] mb-2">{creditScore}</div>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <TrendingUp className={`w-4 h-4 ${trend === 'up' ? 'text-green-400' : 'text-red-400'}`} />
                    <span className="text-sm text-green-400">+12 this month</span>
                  </div>
                  <Badge className="bg-green-500 text-white">Excellent</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Status Cards */}
            <Card className="lg:col-span-2 bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Verification Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-3 gap-4">
                  {statusCards.map((card) => (
                    <div key={card.title} className="text-center">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-3 ${
                        card.color === 'green' ? 'bg-green-500 bg-opacity-20' : 'bg-yellow-500 bg-opacity-20'
                      }`}>
                        <card.icon className={`w-6 h-6 ${
                          card.color === 'green' ? 'text-green-400' : 'text-yellow-400'
                        }`} />
                      </div>
                      <h4 className="text-white text-sm font-medium mb-1">{card.title}</h4>
                      <Badge 
                        className={`text-xs ${
                          card.color === 'green' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-black'
                        }`}
                      >
                        {card.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Access History */}
          <Card className="bg-gray-900 border-gray-800 mb-8">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Eye className="w-5 h-5 text-[#ffd700]" />
                Access History
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {accessHistory.map((access, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                    <div className="flex-1">
                      <h4 className="text-white font-medium">{access.lender}</h4>
                      <p className="text-gray-400 text-sm">{access.purpose}</p>
                      <p className="text-gray-500 text-xs">Shared {access.dateShared}</p>
                    </div>
                    <div className="text-right">
                      <Badge 
                        className={`mb-1 ${
                          access.status === 'active' ? 'bg-green-500 text-white' : 'bg-gray-600 text-gray-300'
                        }`}
                      >
                        {access.status === 'active' ? 'Active' : 'Expired'}
                      </Badge>
                      <p className={`text-xs ${
                        access.status === 'active' ? 'text-yellow-400' : 'text-gray-500'
                      }`}>
                        {access.expires}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Main Action Buttons */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="bg-gradient-to-r from-[#ffd700] from-10% to-[#ffed4e] border-none">
              <CardContent className="p-6 text-center">
                <Download className="w-12 h-12 text-[#0f0f23] mx-auto mb-4" />
                <h3 className="text-[#0f0f23] text-xl font-semibold mb-2">Generate Credit Passport</h3>
                <p className="text-[#0f0f23] text-sm mb-4 opacity-80">
                  Create a comprehensive, encrypted profile of your financial standing
                </p>
                <Button className="bg-[#0f0f23] text-[#ffd700] hover:bg-gray-900 w-full">
                  Generate Passport
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6 text-center">
                <Share2 className="w-12 h-12 text-[#ffd700] mx-auto mb-4" />
                <h3 className="text-white text-xl font-semibold mb-2">Share With a Lender</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Securely share your verified profile with banks and financial institutions
                </p>
                <Button className="bg-[#ffd700] text-[#0f0f23] hover:bg-[#ffed4e] w-full">
                  Share Securely
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Security Banner */}
          <Card className="bg-gradient-to-r from-blue-900 to-indigo-900 border-blue-800">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500 bg-opacity-20 rounded-2xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white text-lg font-medium mb-2">Encrypted Data Sharing & Smart Consent</h3>
                  <p className="text-blue-200 text-sm">
                    Your Credit Passport uses military-grade encryption and blockchain-verified consent. 
                    You control exactly what data is shared, with whom, and for how long. All access is logged and auditable.
                  </p>
                </div>
                <RefreshCw className="w-6 h-6 text-blue-400" />
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Sticky CTA */}
      <div className="fixed bottom-4 right-4">
        <Button className="bg-[#ffd700] text-[#0f0f23] hover:bg-[#ffed4e] shadow-lg">
          Open an Account
        </Button>
      </div>

      <Footer />
    </div>
  );
};

export default CreditPassport;
