
import { Button } from "@/components/ui/button";
import { Shield, Play, Download, QrCode } from "lucide-react";

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
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
              
              <Button className="w-full bg-black hover:bg-gray-900 text-white border border-gray-700 px-6 py-4 text-lg rounded-xl flex items-center gap-3">
                <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                  <Play className="w-3 h-3 text-black" />
                </div>
                Download on Google Play
              </Button>
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
              
              <Button className="w-full bg-black hover:bg-gray-900 text-white border border-gray-700 px-6 py-4 text-lg rounded-xl flex items-center gap-3">
                <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                  <Download className="w-3 h-3 text-black" />
                </div>
                Download on App Store
              </Button>
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
              © 2024 BYBC Banking. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
