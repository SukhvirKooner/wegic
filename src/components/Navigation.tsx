
import React from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50  border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="text-white font-bold text-xl italic">
            wegic
          </div>
          {/* <div className="hidden md:flex items-center space-x-1 bg-gray-800/50 rounded-full px-1 py-1">
            <a href="#" className="px-4 py-2 text-gray-300 hover:text-white transition-colors rounded-full">
              User Cases
            </a>
            <a href="#" className="px-4 py-2 text-gray-300 hover:text-white transition-colors rounded-full">
              Help Center
            </a>
            <a href="#" className="px-4 py-2 text-gray-300 hover:text-white transition-colors rounded-full">
              Pricing
            </a>
          </div> */}
        </div>
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-2 text-gray-300">
            <span className="text-sm">🌐 English</span>
          </div>
          <Button 
            className="bg-white text-black hover:bg-gray-100 rounded-full px-6 py-2 font-medium"
          >
            <span className="mr-2">👤</span>
            Build Your Site
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
