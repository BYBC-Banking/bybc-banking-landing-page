
import React from 'react';
import { Button } from '@/components/ui/button';
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
import { Search, ChevronDown } from 'lucide-react';
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
      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center space-x-8">
        <NavigationMenu>
          <NavigationMenuList className="space-x-6">
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                <NavigationMenuTrigger className="bg-transparent text-white hover:text-[#ffd700] data-[state=open]:text-[#ffd700] text-sm font-medium border-none shadow-none">
                  <Link to={item.path} className="text-white hover:text-[#ffd700] font-semibold">
                    {item.title}
                  </Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="z-50">
                  <div className="w-64 p-4 bg-gray-900 border border-gray-700 rounded-lg shadow-xl">
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
        {/* Region Selector with South African Flag */}
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center space-x-2 text-white hover:text-[#ffd700] transition-colors">
            {/* South African Flag SVG */}
            <span className="text-lg">🇿🇦</span>
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
