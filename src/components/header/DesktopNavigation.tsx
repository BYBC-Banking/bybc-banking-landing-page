
import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Search, ChevronDown, User, Building2, Heart, TrendingUp, GraduationCap, BookOpen } from 'lucide-react';
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
  const quickNavItems = [
    { icon: User, label: 'Personal', path: '/personal' },
    { icon: Building2, label: 'Business', path: '/business' },
    { icon: Heart, label: 'Non-Profit', path: '/non-profit' },
    { icon: TrendingUp, label: 'Investments', path: '/investments' },
    { icon: GraduationCap, label: 'Education', path: '/education' },
    { icon: BookOpen, label: 'Learn', path: '/learn' }
  ];

  return (
    <>
      {/* Desktop Navigation - Quick Action Buttons for medium screens */}
      <div className="hidden md:flex lg:hidden items-center space-x-4">
        {quickNavItems.slice(0, 3).map((item) => (
          <Link key={item.label} to={item.path}>
            <button className="flex items-center space-x-2 px-3 py-2 text-foreground hover:text-[#ffd700] transition-colors">
              <item.icon className="w-4 h-4" />
              <span className="text-sm">{item.label}</span>
            </button>
          </Link>
        ))}
      </div>

      {/* Desktop Right Section */}
      <div className="hidden lg:flex items-center space-x-4">
        {/* Quick Action Buttons for Personal, Business, Non-Profit, etc. */}
        {quickNavItems.map((item) => (
          <Link key={item.label} to={item.path}>
            <button className="flex items-center space-x-2 px-3 py-2 text-foreground hover:text-[#ffd700] transition-colors">
              <item.icon className="w-4 h-4" />
              <span className="text-sm">{item.label}</span>
            </button>
          </Link>
        ))}

        {/* Region Selector with South African Flag */}
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center space-x-2 text-foreground hover:text-[#ffd700] transition-colors">
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
          <DropdownMenuContent className="bg-background border-border z-50">
            <DropdownMenuItem className="text-foreground hover:text-[#ffd700] hover:bg-accent">
              🇿🇦 South Africa (EN)
            </DropdownMenuItem>
            <DropdownMenuItem className="text-foreground hover:text-[#ffd700] hover:bg-accent">
              🇿🇦 South Africa (AF)
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Search */}
        <button className="p-2 text-foreground hover:text-[#ffd700] transition-colors">
          <Search className="w-5 h-5" />
        </button>

        {/* CTA Buttons */}
        <Button 
          variant="outline" 
          className="bg-transparent border-border text-foreground hover:bg-accent hover:text-foreground"
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
