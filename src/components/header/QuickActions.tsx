import React from 'react';
import { Link } from 'react-router-dom';
import { User, Building2, TrendingUp, GraduationCap, BookOpen } from 'lucide-react';

const QuickActions = () => {
  const quickActions = [
    { icon: User, label: 'Personal', path: '/personal', tooltip: 'Personal banking solutions', showOnMobile: false },
    { icon: Building2, label: 'Business', path: '/business', tooltip: 'Business banking services', showOnMobile: false },
    { icon: TrendingUp, label: 'Investments', path: '/investments', tooltip: 'Investment opportunities', showOnMobile: false },
    { icon: GraduationCap, label: 'Education', path: '/education', tooltip: 'Educational banking services', showOnMobile: false },
    { icon: BookOpen, label: 'Learn', path: '/learn', tooltip: 'Financial education resources', showOnMobile: false }
  ];

  return (
    <div className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center space-x-8 py-3">
          {quickActions.map((action) => (
            <Link
              key={action.label}
              to={action.path}
              className={`group flex items-center space-x-2 px-4 py-2 rounded-full bg-transparent hover:bg-gray-800 transition-all duration-200 relative ${
                action.showOnMobile ? '' : 'hidden sm:flex'
              }`}
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
