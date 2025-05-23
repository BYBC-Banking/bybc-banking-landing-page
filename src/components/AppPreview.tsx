
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const AppPreview = () => {
  const [currentScreen, setCurrentScreen] = useState(0);

  const screens = [
    {
      title: "Dashboard",
      description: "Your financial overview at a glance",
      content: "Complete dashboard with balance overview, quick actions, and recent transactions in a clean, intuitive interface."
    },
    {
      title: "Payments",
      description: "Send money instantly and securely",
      content: "Seamless payment experience with QR codes, contacts integration, and real-time transaction confirmations."
    },
    {
      title: "Crypto Wallet",
      description: "Self-custody crypto made simple",
      content: "Non-custodial wallet with portfolio tracking, price alerts, and seamless crypto-to-fiat conversions."
    },
    {
      title: "Insights",
      description: "AI-powered financial analytics",
      content: "Personalized spending insights, savings recommendations, and financial health scoring powered by Lana AI."
    }
  ];

  const nextScreen = () => {
    setCurrentScreen((prev) => (prev + 1) % screens.length);
  };

  const prevScreen = () => {
    setCurrentScreen((prev) => (prev - 1 + screens.length) % screens.length);
  };

  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Experience the <span className="text-[#ffd700]">Future</span> of Banking
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our intuitive mobile interface designed for the modern South African lifestyle.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Phone mockup with carousel */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-[640px] bg-black rounded-[3rem] p-6 shadow-2xl border border-gray-800">
                <div className="w-full h-full bg-gradient-to-b from-[#1a1a3a] to-[#0f0f23] rounded-[2rem] overflow-hidden relative">
                  {/* Status bar */}
                  <div className="flex justify-between items-center px-6 py-3 text-white text-sm">
                    <span>9:41</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-2 bg-white rounded-sm" />
                      <div className="w-4 h-2 bg-white rounded-sm" />
                      <div className="w-4 h-2 bg-white rounded-sm" />
                    </div>
                  </div>

                  {/* Screen content */}
                  <div className="px-6 py-4 h-full">
                    <div className="text-center py-8">
                      <h3 className="text-white text-xl mb-2">{screens[currentScreen].title}</h3>
                      <p className="text-gray-400 text-sm mb-8">{screens[currentScreen].description}</p>
                      
                      {/* Mock screen content */}
                      <div className="space-y-4">
                        {currentScreen === 0 && (
                          <>
                            <div className="bg-[#ffd700] rounded-xl p-4 text-[#0f0f23]">
                              <p className="text-2xl font-light">R12,547.83</p>
                              <p className="text-sm">Available Balance</p>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                              <div className="bg-gray-800 rounded-lg p-3 text-center">
                                <p className="text-white text-sm">Send</p>
                              </div>
                              <div className="bg-gray-800 rounded-lg p-3 text-center">
                                <p className="text-white text-sm">Pay</p>
                              </div>
                            </div>
                          </>
                        )}
                        
                        {currentScreen === 1 && (
                          <>
                            <div className="bg-gray-800 rounded-xl p-4">
                              <p className="text-white text-sm">To: Alex Johnson</p>
                              <p className="text-[#ffd700] text-2xl">R250.00</p>
                            </div>
                            <div className="bg-[#ffd700] bg-opacity-10 rounded-lg p-3">
                              <p className="text-[#ffd700] text-sm">Scan QR Code</p>
                            </div>
                          </>
                        )}
                        
                        {currentScreen === 2 && (
                          <>
                            <div className="bg-gray-800 rounded-xl p-4">
                              <p className="text-white text-sm">Bitcoin</p>
                              <p className="text-[#ffd700] text-lg">0.00234 BTC</p>
                              <p className="text-gray-400 text-xs">≈ R2,547.83</p>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                              <div className="bg-green-600 bg-opacity-20 rounded-lg p-3">
                                <p className="text-green-400 text-sm">Buy</p>
                              </div>
                              <div className="bg-red-600 bg-opacity-20 rounded-lg p-3">
                                <p className="text-red-400 text-sm">Sell</p>
                              </div>
                            </div>
                          </>
                        )}
                        
                        {currentScreen === 3 && (
                          <>
                            <div className="bg-gray-800 rounded-xl p-4">
                              <p className="text-white text-sm">Monthly Spending</p>
                              <p className="text-[#ffd700] text-xl">R4,234.50</p>
                              <p className="text-green-400 text-xs">↓ 12% from last month</p>
                            </div>
                            <div className="bg-blue-600 bg-opacity-20 rounded-lg p-3">
                              <p className="text-blue-400 text-sm">AI Insights Available</p>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation buttons */}
              <div className="absolute top-1/2 -left-16 transform -translate-y-1/2">
                <Button
                  onClick={prevScreen}
                  variant="outline"
                  size="icon"
                  className="w-12 h-12 rounded-full border-gray-700 bg-gray-900 hover:bg-[#ffd700] hover:text-[#0f0f23] hover:border-[#ffd700]"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
              </div>
              
              <div className="absolute top-1/2 -right-16 transform -translate-y-1/2">
                <Button
                  onClick={nextScreen}
                  variant="outline"
                  size="icon"
                  className="w-12 h-12 rounded-full border-gray-700 bg-gray-900 hover:bg-[#ffd700] hover:text-[#0f0f23] hover:border-[#ffd700]"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-light text-white mb-4">
                {screens[currentScreen].title}
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed">
                {screens[currentScreen].content}
              </p>
            </div>

            {/* Screen indicators */}
            <div className="flex gap-3">
              {screens.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentScreen(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentScreen ? 'bg-[#ffd700]' : 'bg-gray-700'
                  }`}
                />
              ))}
            </div>

            {/* Feature highlight */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 bg-[#ffd700] rounded-full" />
                <span className="text-sm text-[#ffd700] font-medium">Available Now</span>
              </div>
              <p className="text-white">
                Join thousands of South Africans already banking with the future. 
                Download the app and open your account in under 5 minutes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPreview;
