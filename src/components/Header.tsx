
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuList, 
  NavigationMenuTrigger 
} from '@/components/ui/navigation-menu';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Menu, Search, ChevronDown, Send, CreditCard, Shield } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    {
      title: 'Personal',
      items: ['Savings Account', 'Current Account', 'Fixed Deposits', 'Personal Loans', 'Home Loans']
    },
    {
      title: 'Business',
      items: ['Business Account', 'Business Loans', 'Merchant Services', 'Treasury Solutions']
    },
    {
      title: 'Non-Profit',
      items: ['NGO Banking', 'Donor Management', 'Impact Reporting', 'Fundraising Tools']
    },
    {
      title: 'Investments',
      items: ['Unit Trusts', 'Retirement Annuities', 'Tax-Free Savings', 'Share Trading']
    },
    {
      title: 'Education',
      items: ['Student Accounts', 'Education Loans', 'Financial Literacy', 'Scholarships']
    },
    {
      title: 'Learn',
      items: ['Financial Education', 'Investment Guides', 'Banking Tutorials', 'Market Insights']
    }
  ];

  const quickActions = [
    { icon: Send, label: 'Send Money', tooltip: 'Transfer funds instantly' },
    { icon: CreditCard, label: 'Credit Passport', tooltip: 'Check your credit score' },
    { icon: Shield, label: 'Verify Identity', tooltip: 'Secure identity verification' }
  ];

  return (
    <header className="bg-[#0f0f23] border-b border-gray-800 sticky top-0 z-50">
      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-white">
              <span className="text-[#ffd700]">BYBC</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList className="space-x-6">
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuTrigger className="bg-transparent text-white hover:text-[#ffd700] data-[state=open]:text-[#ffd700] text-sm font-medium">
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-64 p-4 bg-gray-900 border border-gray-800">
                        {item.items.map((subItem) => (
                          <a
                            key={subItem}
                            href="#"
                            className="block px-3 py-2 text-sm text-gray-300 hover:text-[#ffd700] hover:bg-gray-800 rounded transition-colors"
                          >
                            {subItem}
                          </a>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Desktop Right Section */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Region Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-2 text-white hover:text-[#ffd700] transition-colors">
                <div className="w-6 h-4 bg-gradient-to-b from-green-500 via-yellow-500 to-blue-500 rounded-sm"></div>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-gray-900 border-gray-800">
                <DropdownMenuItem className="text-gray-300 hover:text-[#ffd700]">
                  🇿🇦 South Africa (EN)
                </DropdownMenuItem>
                <DropdownMenuItem className="text-gray-300 hover:text-[#ffd700]">
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

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#0f0f23] border-gray-800 w-80">
                <div className="flex flex-col space-y-6 mt-8">
                  {/* Mobile CTA Buttons */}
                  <div className="space-y-3">
                    <Button className="w-full bg-[#ffd700] text-[#0f0f23] hover:bg-[#ffed4e] font-semibold">
                      Open an Account
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full bg-transparent border-gray-600 text-white hover:bg-gray-800"
                    >
                      Sign In
                    </Button>
                  </div>

                  {/* Mobile Navigation */}
                  <div className="space-y-4">
                    {navigationItems.map((item) => (
                      <div key={item.title} className="space-y-2">
                        <h3 className="text-[#ffd700] font-medium text-lg">{item.title}</h3>
                        <div className="pl-4 space-y-2">
                          {item.items.map((subItem) => (
                            <a
                              key={subItem}
                              href="#"
                              className="block text-gray-300 hover:text-white transition-colors"
                            >
                              {subItem}
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Mobile Utilities */}
                  <div className="pt-6 border-t border-gray-800 space-y-4">
                    <button className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                      <Search className="w-5 h-5" />
                      <span>Search</span>
                    </button>
                    <button className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                      <div className="w-6 h-4 bg-gradient-to-b from-green-500 via-yellow-500 to-blue-500 rounded-sm"></div>
                      <span>South Africa (EN)</span>
                    </button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Quick Actions Bar */}
      <div className="bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-8 py-3">
            {quickActions.map((action) => (
              <button
                key={action.label}
                className="group flex items-center space-x-2 px-4 py-2 rounded-full bg-transparent hover:bg-gray-800 transition-all duration-200 relative"
                title={action.tooltip}
              >
                <action.icon className="w-4 h-4 text-gray-400 group-hover:text-[#ffd700] transition-colors" />
                <span className="text-sm text-gray-400 group-hover:text-white transition-colors hidden sm:block">
                  {action.label}
                </span>
                
                {/* Tooltip */}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  {action.tooltip}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
