
import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Search, ChevronDown, Shield, CreditCard, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavigationItem {
  title: string;
  path: string;
  items: string[];
}

interface DesktopNavigationProps {
  navigationItems: NavigationItem[];
}

const DesktopNavigation = ({ navigationItems }: DesktopNavigationProps) => {
  return (
    <>
      {/* Desktop Navigation - Quick Action Buttons for medium screens */}
      <div className="hidden md:flex lg:hidden items-center space-x-4">
        <Link to="/send-money">
          <button className="flex items-center space-x-2 px-3 py-2 text-white hover:text-[#ffd700] transition-colors">
            <Send className="w-4 h-4" />
            <span className="text-sm">Send Money</span>
          </button>
        </Link>
        
        <Link to="/credit-passport">
          <button className="flex items-center space-x-2 px-3 py-2 text-white hover:text-[#ffd700] transition-colors">
            <CreditCard className="w-4 h-4" />
            <span className="text-sm">Credit Passport</span>
          </button>
        </Link>

        <Link to="/verify-identity">
          <button className="flex items-center space-x-2 px-3 py-2 text-white hover:text-[#ffd700] transition-colors">
            <Shield className="w-4 h-4" />
            <span className="text-sm">Verify Identity</span>
          </button>
        </Link>
      </div>

      {/* Desktop Right Section */}
      <div className="hidden lg:flex items-center space-x-4">
        {/* Quick Action Buttons for Send Money, Credit Passport and Verify Identity */}
        <Link to="/send-money">
          <button className="flex items-center space-x-2 px-3 py-2 text-white hover:text-[#ffd700] transition-colors">
            <Send className="w-4 h-4" />
            <span className="text-sm">Send Money</span>
          </button>
        </Link>
        
        <Link to="/credit-passport">
          <button className="flex items-center space-x-2 px-3 py-2 text-white hover:text-[#ffd700] transition-colors">
            <CreditCard className="w-4 h-4" />
            <span className="text-sm">Credit Passport</span>
          </button>
        </Link>

        <Link to="/verify-identity">
          <button className="flex items-center space-x-2 px-3 py-2 text-white hover:text-[#ffd700] transition-colors">
            <Shield className="w-4 h-4" />
            <span className="text-sm">Verify Identity</span>
          </button>
        </Link>

        {/* Region Selector with South African Flag */}
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center space-x-2 text-white hover:text-[#ffd700] transition-colors">
            {/* South African Flag SVG */}
            <img
              src="https://flagcdn.com/w40/za.png"
              alt="South African Flag"
              width="24"
              height="16"
              className="rounded-sm"
            />
            <ChevronDown className="w-4 h-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-gray-900 border-gray-700 z-50">
            <DropdownMenuItem className="text-gray-300 hover:text-[#ffd700] hover:bg-gray-800">
              🇿🇦 South Africa (EN)
            </DropdownMenuItem>
            <DropdownMenuItem className="text-gray-300 hover:text-[#ffd700] hover:bg-gray-800">
              🇿🇦 South Africa (AF)
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Search */}
        <button className="p-2 text-white hover:text-[#ffd700] transition-colors">
          <Search className="w-5 h-5" />
        </button>

        {/* CTA Buttons */}
        <Button 
          variant="outline" 
          className="bg-transparent border-gray-600 text-white hover:bg-gray-800 hover:text-white"
        >
          Sign In
        </Button>
        <Button className="bg-[#ffd700] text-[#0f0f23] hover:bg-[#ffed4e] font-semibold">
          Open an Account
        </Button>
      </div>
    </>
  );
};

export default DesktopNavigation;
