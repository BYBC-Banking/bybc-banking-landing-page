
import React from 'react';
import { AlertTriangle, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-[#ffd700] to-[#ffed4e] text-[#0f0f23] py-3 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <AlertTriangle className="w-5 h-5" />
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
            <span className="font-medium text-sm sm:text-base">Website Under Development</span>
            <span className="text-sm opacity-90">We're building something amazing for South Africa's future.</span>
          </div>
        </div>
        <Button 
          variant="ghost" 
          size="sm" 
          className="bg-[#0f0f23] text-white hover:bg-gray-800 flex items-center space-x-2 text-sm"
          asChild
        >
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSf6Qcrm0kReJtlJGyBqKNaPLuRxeGVEkwKaircbWhOT_S04BQ/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Users className="w-4 h-4" />
            <span className="hidden sm:inline">Join Our Team</span>
            <span className="sm:hidden">Join</span>
          </a>
        </Button>
      </div>
    </div>
  );
};

export default Banner;
