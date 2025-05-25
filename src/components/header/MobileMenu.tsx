
import React from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Menu, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavigationItem {
  title: string;
  path: string;
  items: string[];
}

interface MobileMenuProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
  navigationItems: NavigationItem[];
}

const MobileMenu = ({ isMobileMenuOpen, setIsMobileMenuOpen, navigationItems }: MobileMenuProps) => {
  return (
    <div className="lg:hidden">
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="text-white">
            <Menu className="w-6 h-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="bg-[#0f0f23] border-gray-800 w-80">
          <div className="flex flex-col h-full">
            {/* Mobile CTA Buttons */}
            <div className="space-y-3 mt-8">
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

            {/* Scrollable Mobile Navigation */}
            <ScrollArea className="flex-1 mt-6">
              <div className="space-y-4 pr-4">
                {navigationItems.map((item) => (
                  <div key={item.title} className="space-y-2">
                    <Link 
                      to={item.path}
                      className="text-[#ffd700] font-medium text-lg hover:text-white transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
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
            </ScrollArea>

            {/* Mobile Utilities */}
            <div className="pt-6 border-t border-gray-800 space-y-4">
              <button className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                <Search className="w-5 h-5" />
                <span>Search</span>
              </button>
              <button className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                <img
                  src="https://flagcdn.com/w40/za.png"
                  alt="South African Flag"
                  width="24"
                  height="16"
                  className="rounded-sm"
                />
                <span>South Africa (EN)</span>
              </button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
