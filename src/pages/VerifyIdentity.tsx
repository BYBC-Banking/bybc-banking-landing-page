
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Shield, Upload, Camera, FileText, Building2, CheckCircle, Lock, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const VerifyIdentity = () => {
  const [currentStep, setCurrentStep] = useState(0);
  
  const verificationSteps = [
    {
      icon: Upload,
      title: "Upload ID Document",
      description: "Upload a clear photo of your valid ID, passport, or driver's license",
      status: "pending"
    },
    {
      icon: Camera,
      title: "Take Selfie",
      description: "Take a live selfie for facial verification and identity matching",
      status: "pending"
    },
    {
      icon: FileText,
      title: "Proof of Address",
      description: "Upload a recent utility bill, bank statement, or official document",
      status: "pending"
    },
    {
      icon: Building2,
      title: "Business Verification",
      description: "Optional: Provide business registration documents if applicable",
      status: "optional"
    }
  ];

  const progressPercentage = (currentStep / (verificationSteps.length - 1)) * 100;

  const handleChatClick = () => {
    // Chat functionality - could open a modal or redirect to chat
    console.log('Chat button clicked');
  };

  return (
    <div className="min-h-screen bg-[#0f0f23] text-white">
      <Header />
      
      <main className="pt-8 pb-24">
        <div className="max-w-4xl mx-auto px-4">
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
              Secure <span className="text-[#ffd700]">Identity Verification</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              We verify your identity to protect your account, prevent fraud, and ensure compliance 
              with financial regulations. Your security is our priority.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Verification Progress</h3>
              <span className="text-sm text-gray-400">{currentStep + 1} of {verificationSteps.length} steps</span>
            </div>
            <Progress value={progressPercentage} className="h-2 bg-gray-800" />
          </div>

          {/* Verification Steps with Progress Lines */}
          <div className="relative mb-12">
            <div className="grid md:grid-cols-2 gap-6">
              {verificationSteps.map((step, index) => (
                <div key={step.title} className="relative">
                  <Card 
                    className={`bg-gray-900 border-gray-800 transition-all duration-300 ${
                      index === currentStep ? 'border-[#ffd700] shadow-lg' : 'hover:border-gray-700'
                    }`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                          index < currentStep ? 'bg-green-500 bg-opacity-20' : 
                          index === currentStep ? 'bg-[#ffd700] bg-opacity-20' : 'bg-gray-800'
                        }`}>
                          {index < currentStep ? (
                            <CheckCircle className="w-6 h-6 text-green-400" />
                          ) : (
                            <step.icon className={`w-6 h-6 ${
                              index === currentStep ? 'text-[#ffd700]' : 'text-gray-400'
                            }`} />
                          )}
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-lg font-medium text-white">{step.title}</h3>
                            {step.status === "optional" && (
                              <Badge variant="outline" className="text-xs text-gray-400 border-gray-600">
                                Optional
                              </Badge>
                            )}
                            {index < currentStep && (
                              <Badge className="text-xs bg-green-500 text-white">
                                Complete
                              </Badge>
                            )}
                          </div>
                          <p className="text-gray-300 text-sm">{step.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Green dotted progress lines connecting steps in sequence */}
                  {index < verificationSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 left-full w-6 h-0.5 transform -translate-y-1/2 z-10">
                      <div className={`w-full h-full border-t-2 border-dotted ${
                        index < currentStep ? 'border-green-400' : 'border-gray-600'
                      }`}></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Trust Statement */}
          <Card className="bg-gradient-to-r from-gray-900 to-gray-800 border-gray-700 mb-8">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#ffd700] bg-opacity-10 rounded-2xl flex items-center justify-center">
                  <Lock className="w-6 h-6 text-[#ffd700]" />
                </div>
                <div>
                  <h3 className="text-white text-lg font-medium mb-2">Your Privacy is Protected</h3>
                  <p className="text-gray-300 text-sm">
                    Your data is encrypted end-to-end, verified through secure channels, and never sold to third parties. 
                    We comply with all financial privacy regulations and industry best practices.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center">
            <Button 
              className="bg-[#ffd700] text-[#0f0f23] hover:bg-[#ffed4e] px-8 py-3 text-lg font-semibold"
              onClick={() => setCurrentStep(Math.min(currentStep + 1, verificationSteps.length - 1))}
            >
              Begin Secure Verification
            </Button>
            <p className="text-gray-400 text-sm mt-4">
              The verification process typically takes 2-5 minutes to complete
            </p>
          </div>
        </div>
      </main>

      {/* Floating Chat Button */}
      <div className="fixed bottom-20 left-4">
        <Button 
          onClick={handleChatClick}
          className="bg-[#ffd700] text-[#0f0f23] hover:bg-[#ffed4e] shadow-lg rounded-full w-14 h-14 p-0"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>

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

export default VerifyIdentity;
