
import React from 'react';
import { Link } from 'react-router-dom';
import { User, Building2, TrendingUp, GraduationCap, BookOpen, Send, CreditCard, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const QuickActions = () => {
  const quickActions = [
    { icon: User, label: 'Personal', path: '/personal', tooltip: 'Personal banking solutions', showOnMobile: false },
    { icon: Building2, label: 'Business', path: '/business', tooltip: 'Business banking services', showOnMobile: false },
    { icon: TrendingUp, label: 'Investments', path: '/investments', tooltip: 'Investment opportunities', showOnMobile: false },
    { icon: GraduationCap, label: 'Education', path: '/education', tooltip: 'Educational banking services', showOnMobile: false },
    { icon: BookOpen, label: 'Learn', path: '/learn', tooltip: 'Financial education resources', showOnMobile: false }
  ];

  const mobileActionButtons = [
    { icon: Send, label: 'Send Money', path: '/send-money' },
    { icon: CreditCard, label: 'Credit Passport', path: '/credit-passport' },
    { icon: Shield, label: 'Verify Identity', path: '/verify-identity' }
  ];

  return (
    <div className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Action Buttons - Only visible on smaller screens */}
        <div className="lg:hidden flex items-center justify-center space-x-2 py-3">
          {mobileActionButtons.map((action) => (
            <Link key={action.label} to={action.path}>
              <Button 
                variant="ghost" 
                size="lg"
                className="text-white hover:text-[#ffd700] hover:bg-gray-800 flex items-center space-x-2 px-4 py-3 h-12"
              >
                <action.icon className="w-6 h-6" />
                <span className="text-sm font-medium">{action.label}</span>
              </Button>
            </Link>
          ))}
        </div>

        {/* Desktop Quick Actions - Hidden on mobile when action buttons are shown */}
        <div className="hidden lg:flex items-center justify-center space-x-8 py-3">
          {quickActions.map((action) => (
            <Link
              key={action.label}
              to={action.path}
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
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickActions;
