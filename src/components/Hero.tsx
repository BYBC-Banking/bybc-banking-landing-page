import { Button } from "@/components/ui/button";
import { Play, Download, Smartphone } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f23] via-[#1a1a3a] to-[#0f0f23]" />
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-[#ffd700] rounded-full" />
        <div className="absolute bottom-32 right-16 w-24 h-24 border border-[#ffd700] rounded-full" />
        <div className="absolute top-1/2 right-1/4 w-16 h-16 border border-[#ffd700] rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="text-center lg:text-left space-y-8">
          {/* Logo animation */}
          <div className="flex justify-center lg:justify-start mb-8">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-[#ffd700] to-[#ffed4e] rounded-2xl flex items-center justify-center animate-pulse">
                <span className="text-[#0f0f23] font-bold text-2xl">B</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#ffd700] rounded-full animate-bounce" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight">
            Digital Banking for{" "}
            <span className="text-[#ffd700] font-medium">South Africa's</span>{" "}
            Future
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed">
            Empowering youth, entrepreneurs, and non-profits with innovative banking solutions that combine traditional finance with cutting-edge crypto capabilities.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <Button className="bg-black hover:bg-gray-900 text-white border border-gray-700 px-8 py-6 text-lg rounded-xl flex items-center gap-3 transition-all duration-300 hover:scale-105">
              <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                <Play className="w-3 h-3 text-black" />
              </div>
              Download on Google Play
            </Button>
            
            <Button className="bg-black hover:bg-gray-900 text-white border border-gray-700 px-8 py-6 text-lg rounded-xl flex items-center gap-3 transition-all duration-300 hover:scale-105">
              <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                <Download className="w-3 h-3 text-black" />
              </div>
              Download on App Store
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-center gap-6 pt-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#ffd700] rounded-full" />
              <span>Bank-grade security</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#ffd700] rounded-full" />
              <span>100% digital</span>
            </div>
          </div>
        </div>

        {/* Phone mockup */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            {/* Phone frame */}
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

                {/* App interface */}
                <div className="px-6 py-4 space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white text-lg">Good morning, Alex</h3>
                      <p className="text-gray-400 text-sm">Tuesday, Dec 5</p>
                    </div>
                    <div className="w-10 h-10 bg-[#ffd700] rounded-full flex items-center justify-center">
                      <span className="text-[#0f0f23] font-bold">A</span>
                    </div>
                  </div>

                  {/* Balance card */}
                  <div className="bg-gradient-to-r from-[#ffd700] to-[#ffed4e] rounded-2xl p-6 text-[#0f0f23]">
                    <p className="text-sm opacity-80">Total Balance</p>
                    <p className="text-3xl font-light">R12,547.83</p>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-sm">****1234</span>
                      <Smartphone className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Quick actions */}
                  <div className="grid grid-cols-4 gap-4">
                    {["Send", "Pay", "Save", "Invest"].map((action) => (
                      <div key={action} className="text-center">
                        <div className="w-12 h-12 bg-gray-800 rounded-xl mb-2 mx-auto" />
                        <span className="text-xs text-gray-400">{action}</span>
                      </div>
                    ))}
                  </div>

                  {/* Recent transactions */}
                  <div className="space-y-3">
                    <h4 className="text-white font-medium">Recent</h4>
                    {[
                      { name: "Woolworths", amount: "-R234.50", time: "2h ago" },
                      { name: "Salary Deposit", amount: "+R15,000", time: "1d ago" },
                    ].map((tx, i) => (
                      <div key={i} className="flex items-center justify-between py-2">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gray-800 rounded-full" />
                          <div>
                            <p className="text-white text-sm">{tx.name}</p>
                            <p className="text-gray-400 text-xs">{tx.time}</p>
                          </div>
                        </div>
                        <span className={`text-sm ${tx.amount.startsWith('+') ? 'text-green-400' : 'text-white'}`}>
                          {tx.amount}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-8 -right-8 w-16 h-16 bg-[#ffd700] bg-opacity-20 rounded-full animate-pulse" />
            <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-[#ffd700] bg-opacity-20 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
