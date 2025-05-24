
import { Card, CardContent } from "@/components/ui/card";
import { Bot, GraduationCap, Eye, Shield } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Bot,
      title: "Lana AI Assistant",
      description: "Your personal banking assistant powered by advanced AI to help with transactions, insights, and financial planning.",
      highlight: "24/7 Support"
    },
    {
      icon: GraduationCap,
      title: "Financial Education Hub",
      description: "Interactive courses, tools, and resources to build financial literacy and make informed decisions.",
      highlight: "Learn & Earn"
    },
    {
      icon: Eye,
      title: "Non-Profit Transparency",
      description: "Complete transparency for NGOs with real-time donor tracking and automated impact reporting.",
      highlight: "Full Transparency"
    },
    {
      icon: Shield,
      title: "Non-Custodial Crypto Wallet",
      description: "Self-custody crypto wallet with bank-grade security. You control your keys, we provide the infrastructure.",
      highlight: "Your Keys, Your Crypto"
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-[#0f0f23] to-[#1a1a3a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Innovation Meets <span className="text-[#ffd700]">Security</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge features designed to give you complete control over your financial future
            while maintaining the highest standards of security and compliance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={feature.title} className="bg-gray-900 border-gray-800 hover:border-[#ffd700] transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-[#ffd700] bg-opacity-10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#ffd700] group-hover:bg-opacity-20 transition-all duration-300">
                    <feature.icon className="w-8 h-8 text-[#ffd700]" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-xl font-medium text-white">{feature.title}</h3>
                      <span className="text-xs bg-[#ffd700] text-[#0f0f23] px-2 py-1 rounded-full font-medium">
                        {feature.highlight}
                      </span>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                    
                    <div className="mt-6">
                      <button className="text-[#ffd700] text-sm font-medium hover:underline transition-all duration-300 lg:hover:bg-white lg:hover:bg-opacity-5 lg:hover:px-2 lg:hover:py-1 lg:hover:rounded">
                        Explore Feature →
                      </button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Security badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-gray-900 border border-gray-800 rounded-full px-6 py-3">
            <Shield className="w-5 h-5 text-[#ffd700]" />
            <span className="text-sm text-gray-300">
              Bank-grade encryption
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
