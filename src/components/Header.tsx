
import React, { useState } from 'react';
import Logo from './header/Logo';
import MobileMenu from './header/MobileMenu';
import DesktopNavigation from './header/DesktopNavigation';
import QuickActions from './header/QuickActions';
import { Link } from 'react-router-dom';
import { User, Building2, Heart, TrendingUp, GraduationCap, BookOpen } from 'lucide-react';

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

  const quickNavItems = [
    { icon: User, label: 'Personal', path: '/personal' },
    { icon: Building2, label: 'Business', path: '/business' },
    { icon: Heart, label: 'Non-Profit', path: '/non-profit' },
    { icon: TrendingUp, label: 'Investments', path: '/investments' },
    { icon: GraduationCap, label: 'Education', path: '/education' },
    { icon: BookOpen, label: 'Learn', path: '/learn' }
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

          {/* Navigation Items - Center-Left */}
          <div className="hidden lg:flex items-center space-x-1">
            <Logo />
            <div className="flex items-center space-x-1 ml-8">
              {quickNavItems.map((item) => (
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
          </div>

          {/* Mobile Logo - Shows only on mobile when nav items are hidden */}
          <div className="lg:hidden">
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
