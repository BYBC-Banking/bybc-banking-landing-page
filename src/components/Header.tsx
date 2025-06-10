
import React, { useState } from 'react';
import Logo from './header/Logo';
import MobileMenu from './header/MobileMenu';
import DesktopNavigation from './header/DesktopNavigation';
import QuickActions from './header/QuickActions';
import { Link } from 'react-router-dom';
import { Send, CreditCard, Shield } from 'lucide-react';

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

  const headerActions = [
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

          {/* Header Actions - Center on small/medium screens */}
          <div className="lg:hidden flex items-center justify-center flex-1 space-x-1">
            {headerActions.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="flex items-center p-2 text-white hover:text-[#ffd700] transition-colors"
                title={item.label}
              >
                <item.icon className="w-4 h-4" />
              </Link>
            ))}
          </div>

          {/* Desktop Header Actions - Center on large screens */}
          <div className="hidden lg:flex items-center justify-center flex-1 space-x-1">
            {headerActions.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="flex items-center space-x-2 px-3 py-2 text-white hover:text-[#ffd700] transition-colors text-sm"
              >
                <item.icon className="w-4 h-4" />
                <span className="hidden xl:block">{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Logo - Right Side on small/medium screens */}
          <div className="lg:hidden flex items-center">
            <Logo />
          </div>

          {/* Desktop Navigation and Right Section */}
          <DesktopNavigation navigationItems={navigationItems} />
        </div>
      </div>

      {/* Quick Actions Bar */}
      <QuickActions />
    </header>
  );
};

export default Header;
