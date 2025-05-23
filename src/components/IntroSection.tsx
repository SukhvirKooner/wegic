import React from 'react';
import { TextAnimate } from "@/components/ui/text-animate"

const IntroSection = () => {
  return (
    <div className="bg-black text-white py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-2xl font-normal mb-8 transition-transform duration-300 hover:scale-105 inline-block">
            <TextAnimate text="Hi, We're wegic" type="calmInUp" />
          </h2>
          
          <h3 className="text-6xl md:text-7xl font-bold leading-tight mb-12 transition-transform duration-300 hover:scale-105 inline-block">
            
            <TextAnimate text="Your AI website team: designer, developer, and manager." type="calmInUp" />
          </h3>
          
          <p className="text-4xl md:text-5xl font-light leading-relaxed mb-16 text-gray-300 transition-transform duration-300 hover:scale-105 inline-block">
            <TextAnimate text="Just chat with us, and we'll build, manage, and effortlessly update your site." type="calmInUp" />
          </p>
          
          <h4 className="text-4xl md:text-5xl font-light text-gray-300 transition-transform duration-300 hover:scale-105 inline-block">
            Let's get started!
          </h4>
        </div>

        {/* Decorative elements at bottom */}
        <div className="flex space-x-8 mt-20">
          <div className="w-16 h-14 bg-gray-800 rounded-lg"><img src="https://raw.githubusercontent.com/SukhvirKooner/wegic/main/public/images/box1.png" alt="" /></div>
          <div className="w-16 h-14 bg-gray-800 rounded-lg"><img src="https://raw.githubusercontent.com/SukhvirKooner/wegic/main/public/images/box2.png" alt="" /></div>
          <div className="w-16 h-14 bg-gray-800 rounded-lg"><img src="https://raw.githubusercontent.com/SukhvirKooner/wegic/main/public/images/box3.png" alt="" /></div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;