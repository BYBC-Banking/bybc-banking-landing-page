
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PiggyBank, Building2, Heart, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const AccountTypes = () => {
  return (
    <section className="py-24 px-4 bg-[#0a0a1f]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Choose Your <span className="text-[#ffd700]">Banking Journey</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Whether you're saving for the future, growing your business, or making a difference in your community, 
            we have the perfect account for you.
          </p>
        </div>

        {/* Updated grid layout for large screens */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Personal Savings */}
          <Card className="bg-gray-900 border-gray-800 hover:border-[#ffd700] transition-all duration-300 group">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-[#ffd700] bg-opacity-10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-opacity-20 transition-all">
                <PiggyBank className="w-8 h-8 text-[#ffd700]" />
              </div>
              <h3 className="text-2xl font-light mb-4 text-white">Personal Savings</h3>
              <p className="text-gray-300 mb-6 text-sm">
                Smart savings with competitive interest rates and automated financial planning.
              </p>
              <ul className="text-gray-400 space-y-2 text-sm mb-6">
                <li>• High-yield savings accounts</li>
                <li>• Automated saving goals</li>
                <li>• Real-time spending insights</li>
                <li>• Crypto portfolio integration</li>
              </ul>
              <Link to="/personal">
                <Button className="w-full bg-[#ffd700] text-[#0f0f23] hover:bg-[#ffed4e] font-semibold">
                  Start Saving
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Business Growth */}
          <Card className="bg-gray-900 border-gray-800 hover:border-[#ffd700] transition-all duration-300 group">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-[#ffd700] bg-opacity-10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-opacity-20 transition-all">
                <Building2 className="w-8 h-8 text-[#ffd700]" />
              </div>
              <h3 className="text-2xl font-light mb-4 text-white">Business Growth</h3>
              <p className="text-gray-300 mb-6 text-sm">
                Comprehensive business banking with advanced cash flow management and lending solutions.
              </p>
              <ul className="text-gray-400 space-y-2 text-sm mb-6">
                <li>• Multi-user business accounts</li>
                <li>• Smart lending decisions</li>
                <li>• Payment processing tools</li>
                <li>• Treasury management</li>
              </ul>
              <Link to="/business">
                <Button className="w-full bg-[#ffd700] text-[#0f0f23] hover:bg-[#ffed4e] font-semibold">
                  Grow Business
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Non-Profit Impact */}
          <Card className="bg-gray-900 border-gray-800 hover:border-[#ffd700] transition-all duration-300 group">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-[#ffd700] bg-opacity-10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-opacity-20 transition-all">
                <Heart className="w-8 h-8 text-[#ffd700]" />
              </div>
              <h3 className="text-2xl font-light mb-4 text-white">Non-Profit Impact</h3>
              <p className="text-gray-300 mb-6 text-sm">
                Transparent banking for NGOs with public ledgers and donor management tools.
              </p>
              <ul className="text-gray-400 space-y-2 text-sm mb-6">
                <li>• Public transaction ledger</li>
                <li>• Donor relationship tools</li>
                <li>• Impact reporting dashboards</li>
                <li>• Compliance automation</li>
              </ul>
              <Link to="/non-profit">
                <Button className="w-full bg-[#ffd700] text-[#0f0f23] hover:bg-[#ffed4e] font-semibold">
                  Make Impact
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Investment Opportunities */}
          <Card className="bg-gray-900 border-gray-800 hover:border-[#ffd700] transition-all duration-300 group">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-[#ffd700] bg-opacity-10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-opacity-20 transition-all">
                <TrendingUp className="w-8 h-8 text-[#ffd700]" />
              </div>
              <h3 className="text-2xl font-light mb-4 text-white">Investment Opportunities</h3>
              <p className="text-gray-300 mb-6 text-sm">
                Diversified investment options with AI-powered insights and portfolio management.
              </p>
              <ul className="text-gray-400 space-y-2 text-sm mb-6">
                <li>• Unit trusts & ETFs</li>
                <li>• Retirement planning</li>
                <li>• Tax-free savings</li>
                <li>• Crypto integration</li>
              </ul>
              <Link to="/investments">
                <Button className="w-full bg-[#ffd700] text-[#0f0f23] hover:bg-[#ffed4e] font-semibold">
                  Start Investing
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AccountTypes;
