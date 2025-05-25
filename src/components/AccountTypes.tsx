
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wallet, PiggyBank, Building, TrendingUp, Heart } from "lucide-react";

const AccountTypes = () => {
  const accounts = [
    {
      icon: Wallet,
      title: "Spending",
      description: "Your everyday account for payments, transfers, and daily banking needs.",
      benefits: "No monthly fees • Instant payments • Global access"
    },
    {
      icon: PiggyBank,
      title: "Savings",
      description: "High-interest savings with smart goals and automated saving features.",
      benefits: "Up to 8% interest • Auto-save • Goal tracking"
    },
    {
      icon: Building,
      title: "Business",
      description: "Comprehensive business banking with invoicing and expense management.",
      benefits: "Business tools • Team access • API integration"
    },
    {
      icon: TrendingUp,
      title: "Investment",
      description: "Access to stocks, ETFs, and crypto with professional-grade analytics.",
      benefits: "Zero trading fees • Portfolio insights • Crypto wallet"
    },
    {
      icon: Heart,
      title: "Non-Profit",
      description: "Transparent banking for NGOs with donor tracking and impact reporting.",
      benefits: "Transparent reporting • Donor portal • Impact metrics"
    }
  ];

  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Choose Your <span className="text-[#ffd700]">Banking Experience</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Five specialized account types designed for different life stages and goals, 
            all within one seamless platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accounts.map((account, index) => (
            <Card key={account.title} className={`bg-gray-900 border-gray-800 hover:border-[#ffd700] transition-all duration-300 hover:scale-105 ${index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-[#ffd700] bg-opacity-10 rounded-2xl flex items-center justify-center mb-4">
                    <account.icon className="w-8 h-8 text-[#ffd700]" />
                  </div>
                  <h3 className="text-2xl font-medium text-white mb-3">{account.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{account.description}</p>
                </div>

                <div className="mb-8">
                  <div className="flex items-center gap-2 text-sm text-[#ffd700] mb-2">
                    <div className="w-1.5 h-1.5 bg-[#ffd700] rounded-full" />
                    <span>Key Benefits</span>
                  </div>
                  <p className="text-gray-400 text-sm">{account.benefits}</p>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full border-gray-700 hover:bg-[#ffd700] hover:text-[#0f0f23] hover:border-[#ffd700] transition-all duration-300"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccountTypes;
