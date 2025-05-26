import { Button } from "@/components/ui/button";
import { Shield, QrCode, Facebook, Twitter, Instagram, Linkedin, Smartphone, Download } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-24 px-4 bg-gradient-to-t from-[#0a0a1f] to-[#0f0f23] border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Main CTA Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Ready to Start Your <span className="text-[#ffd700]">Financial Journey</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
            Join the future of banking today. Download BYBC and experience 
            digital banking designed for South Africa.
          </p>

          {/* Download buttons with QR codes */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Google Play */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-white text-lg font-medium mb-2">Android Users</h3>
                  <p className="text-gray-400 text-sm">Download from Google Play</p>
                </div>
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                  <QrCode className="w-8 h-8 text-black" />
                </div>
              </div>
              
              <a 
                href="#"
                className="w-full inline-block bg-black hover:bg-gray-900 transition-all duration-300 rounded-xl overflow-hidden"
              >
                <div className="flex items-center gap-3 justify-center px-6 py-4">
                  <div className="flex items-center justify-center w-8 h-8">
                    <svg viewBox="0 0 24 24" className="w-6 h-6">
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
            </div>

            {/* App Store */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-white text-lg font-medium mb-2">iOS Users</h3>
                  <p className="text-gray-400 text-sm">Download from App Store</p>
                </div>
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                  <QrCode className="w-8 h-8 text-black" />
                </div>
              </div>
              
              <a 
                href="#"
                className="w-full inline-block bg-black hover:bg-gray-900 transition-all duration-300 rounded-xl overflow-hidden"
              >
                <div className="flex items-center gap-3 justify-center px-6 py-4">
                  <div className="flex items-center justify-center w-8 h-8">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-gray-400 leading-none">Download on the</div>
                    <div className="text-lg text-white font-medium leading-tight">App Store</div>
                  </div>
                </div>
              </a>
            </div>

            {/* Huawei AppGallery */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-white text-lg font-medium mb-2">Huawei Users</h3>
                  <p className="text-gray-400 text-sm">Download from AppGallery</p>
                </div>
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                  <QrCode className="w-8 h-8 text-black" />
                </div>
              </div>
              
              <a 
                href="#"
                className="w-full inline-block bg-black hover:bg-gray-900 transition-all duration-300 rounded-xl overflow-hidden"
              >
                <div className="flex items-center gap-3 justify-center px-6 py-4">
                  <div className="flex items-center justify-center w-6 h-6">
                    {/* Using a publicly accessible Huawei logo from CDN */}
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-gray-400 leading-none">EXPLORE IT ON</div>
                    <div className="text-lg text-white font-medium leading-tight">AppGallery</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Security & Trust */}
        <div className="border-t border-gray-800 pt-12">
          <div className="text-center mb-12">
            <div className="flex justify-center items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-[#ffd700]" />
              <h3 className="text-xl text-white font-medium">Your Security is Our Priority</h3>
            </div>
            <p className="text-gray-300 max-w-3xl mx-auto">
              BYBC Banking employs bank-grade encryption to protect your data and funds. 
              Your deposits are protected and your crypto remains in your control.
            </p>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-12 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#ffd700] rounded-full" />
              <span>Bank-Grade Encryption</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#ffd700] rounded-full" />
              <span>Deposit Protection</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#ffd700] rounded-full" />
              <span>Non-Custodial Crypto</span>
            </div>
          </div>

          {/* Logo and tagline */}
          <div className="text-center border-t border-gray-800 pt-8">
            <div className="flex justify-center items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#ffd700] to-[#ffed4e] rounded-xl flex items-center justify-center">
                <span className="text-[#0f0f23] font-bold text-lg">B</span>
              </div>
              <span className="text-white text-xl font-light">BYBC Banking</span>
            </div>
            <p className="text-gray-400 text-sm">
              Digital Banking for South Africa's Future
            </p>
            <p className="text-gray-500 text-xs mt-2">
              © 2025 BYBC Banking. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
