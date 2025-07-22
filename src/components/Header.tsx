
import React, { useState } from 'react';
import Logo from './header/Logo';
import MobileMenu from './header/MobileMenu';
import DesktopNavigation from './header/DesktopNavigation';
import QuickActions from './header/QuickActions';
import { Button } from '@/components/ui/button';
import { Send, CreditCard, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    {
      title: 'Personal',
      path: '/personal',
      items: ['Savings Account', 'Current Account', 'Fixed Deposits', 'Personal Loans', 'Home Loans']
    },
    {
      title: 'Business',
      path: '/business',
      items: ['Business Account', 'Business Loans', 'Merchant Services', 'Treasury Solutions']
    },
    {
      title: 'Non-Profit',
      path: '/non-profit',
      items: ['NGO Banking', 'Donor Management', 'Impact Reporting', 'Fundraising Tools']
    },
    {
      title: 'Investments',
      path: '/investments',
      items: ['Unit Trusts', 'Retirement Annuities', 'Tax-Free Savings', 'Share Trading']
    },
    {
      title: 'Education',
      path: '/education',
      items: ['Student Accounts', 'Education Loans', 'Financial Literacy', 'Scholarships']
    },
    {
      title: 'Learn',
      path: '/learn',
      items: ['Financial Education', 'Investment Guides', 'Banking Tutorials', 'Market Insights']
    }
  ];

  return (
    <header className="bg-[#0f0f23] border-b border-gray-800 sticky top-0 z-50">
      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Side - Mobile Menu + Desktop Logo */}
          <div className="flex items-center">
            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <MobileMenu 
                isMobileMenuOpen={isMobileMenuOpen}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
                navigationItems={navigationItems}
              />
            </div>
            
            {/* Desktop Logo - Left Side on large screens */}
            <div className="hidden lg:flex items-center">
              <Logo />
            </div>
          </div>

          {/* Action Buttons - Center */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Link to="/send-money">
              <Button 
                variant="ghost" 
                size="lg"
                className="text-white hover:text-[#ffd700] hover:bg-gray-800 flex items-center space-x-2 px-4 py-3 sm:px-6 sm:py-4 h-12 sm:h-14"
              >
                <Send className="w-6 h-6 sm:w-7 sm:h-7" />
                <span className="hidden sm:inline text-base font-medium">Send Money</span>
              </Button>
            </Link>
            <Link to="/credit-passport">
              <Button 
                variant="ghost" 
                size="lg"
                className="text-white hover:text-[#ffd700] hover:bg-gray-800 flex items-center space-x-2 px-4 py-3 sm:px-6 sm:py-4 h-12 sm:h-14"
              >
                <CreditCard className="w-6 h-6 sm:w-7 sm:h-7" />
                <span className="hidden sm:inline text-base font-medium">Credit Passport</span>
              </Button>
            </Link>
            <Link to="/verify-identity">
              <Button 
                variant="ghost" 
                size="lg"
                className="text-white hover:text-[#ffd700] hover:bg-gray-800 flex items-center space-x-2 px-4 py-3 sm:px-6 sm:py-4 h-12 sm:h-14"
              >
                <Shield className="w-6 h-6 sm:w-7 sm:h-7" />
                <span className="hidden sm:inline text-base font-medium">Verify Identity</span>
              </Button>
            </Link>
          </div>

          {/* Right Side - Mobile Logo + Desktop Navigation */}
          <div className="flex items-center">
            {/* Mobile Logo - Right Side on small/medium screens */}
            <div className="lg:hidden flex items-center">
              <Logo />
            </div>
            
            {/* Desktop Navigation and Right Section */}
            <DesktopNavigation navigationItems={navigationItems} />
          </div>
        </div>
      </div>

      {/* Quick Actions Bar */}
      <QuickActions />
    </header>
  );
};

export default Header;
