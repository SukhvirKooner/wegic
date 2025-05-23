
import React from 'react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <div className="bg-gray-100 py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-black mb-12 leading-tight">
          Bring your ideas to life with your AI website team
        </h2>
        
        {/* Chat mascot */}
        <div className="mb-12">
          <div className="inline-block bg-pink-400 rounded-full p-4">
            <div className="text-2xl">👀</div>
          </div>
        </div>

        <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-8 py-4 text-xl font-semibold">
          Chat for Free!
        </Button>
      </div>
    </div>
  );
};

export default CTASection;
