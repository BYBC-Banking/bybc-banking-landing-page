
import { Button } from "@/components/ui/button";
import { Smartphone } from "lucide-react";

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
            <a 
              href="#"
              className="inline-block bg-black hover:bg-gray-900 transition-all duration-300 hover:scale-105 rounded-xl overflow-hidden"
            >
              <div className="flex items-center gap-3 px-6 py-3">
                <div className="flex items-center justify-center w-10 h-10">
                  <svg viewBox="0 0 24 24" className="w-8 h-8">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-400 leading-none">GET IT ON</div>
                  <div className="text-lg text-white font-medium leading-tight">Google Play</div>
                </div>
              </div>
            </a>
            
            <a 
              href="#"
              className="inline-block bg-black hover:bg-gray-900 transition-all duration-300 hover:scale-105 rounded-xl overflow-hidden"
            >
              <div className="flex items-center gap-3 px-6 py-3">
                <div className="flex items-center justify-center w-10 h-10">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-400 leading-none">Download on the</div>
                  <div className="text-lg text-white font-medium leading-tight">App Store</div>
                </div>
              </div>
            </a>

            <a 
              href="#"
              className="inline-block bg-black hover:bg-gray-900 transition-all duration-300 hover:scale-105 rounded-xl overflow-hidden"
            >
              <div className="flex items-center gap-3 px-6 py-3">
                <div className="flex items-center justify-center w-6 h-6">
                  <img 
                    src="/huawei.svg" 
                    alt="Huawei AppGallery" 
                    className="w-8 h-8 object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-400 leading-none">EXPLORE IT ON</div>
                  <div className="text-lg text-white font-medium leading-tight">AppGallery</div>
                </div>
              </div>
            </a>
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
