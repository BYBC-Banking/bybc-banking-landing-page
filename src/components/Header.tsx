
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, CreditCard, Shield } from 'lucide-react';
import Logo from './header/Logo';
import MobileMenu from './header/MobileMenu';
import DesktopNavigation from './header/DesktopNavigation';

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

  const quickActionButtons = [
    { icon: Send, label: 'Send Money', path: '/send-money' },
    { icon: CreditCard, label: 'Credit Passport', path: '/credit-passport' },
    { icon: Shield, label: 'Verify Identity', path: '/verify-identity' }
  ];

  return (
    <header className="bg-[#0f0f23] border-b border-gray-800 sticky top-0 z-50">
      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Mobile Menu Button - Left Side on small/medium screens */}
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

          {/* Mobile Logo - Right Side on small/medium screens */}
          <div className="lg:hidden flex items-center">
            <Logo />
          </div>

          {/* Quick Action Buttons - Center */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {quickActionButtons.map((action) => (
              <Link
                key={action.label}
                to={action.path}
                className="group flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-2 rounded-full bg-transparent hover:bg-gray-800 transition-all duration-200"
              >
                <action.icon className="w-4 h-4 text-gray-400 group-hover:text-[#ffd700] transition-colors" />
                <span className="text-xs sm:text-sm text-gray-400 group-hover:text-white transition-colors hidden sm:block">
                  {action.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Desktop Navigation and Right Section */}
          <DesktopNavigation navigationItems={navigationItems} />
        </div>
      </div>
    </header>
  );
};

export default Header;
