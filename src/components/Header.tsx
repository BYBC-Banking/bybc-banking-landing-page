
import React, { useState } from 'react';
import Logo from './header/Logo';
import MobileMenu from './header/MobileMenu';
import DesktopNavigation from './header/DesktopNavigation';
import QuickActions from './header/QuickActions';

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
          {/* Mobile Menu Button - Left Side */}
          <MobileMenu 
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
            navigationItems={navigationItems}
          />

          {/* Logo - Center-Left with bigger size and text */}
          <Logo />

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
