import React from 'react';
import { TextAnimate } from "@/components/ui/text-animate";

const IntroSection = () => {
  return (
    <div className="bg-black text-white py-28 px-6 min-h-screen relative z-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <h2 className="text-xl md:text-2xl font-normal mb-6 leading-snug transition-transform duration-300 hover:scale-105 inline-block">
            <TextAnimate text="Hi, We're wegic" type="calmInUp" />
          </h2>

          <h3 className="text-4xl md:text-6xl font-semibold leading-snug mb-10 transition-transform duration-300 hover:scale-105 inline-block">
            <TextAnimate text="Your AI website team: designer, developer, and manager." type="calmInUp" />
          </h3>

          <p className="text-2xl md:text-3xl font-light leading-normal text-gray-300 mb-12 transition-transform duration-300 hover:scale-105 inline-block">
            <TextAnimate text="Just chat with us, and we'll build, manage and update your site." type="calmInUp" />
          </p>

          <h4 className="text-2xl md:text-3xl font-normal text-gray-300 transition-transform duration-300 hover:scale-105 inline-block">
            Let's get started!
          </h4>
        </div>

        {/* Decorative elements at bottom */}
        <div className="flex space-x-6 mt-16">
          <div className="w-14 h-14 bg-gray-800 rounded-lg">
            <img src="https://raw.githubusercontent.com/SukhvirKooner/wegic/main/public/images/box1.png" alt="" />
          </div>
          <div className="w-14 h-14 bg-gray-800 rounded-lg">
            <img src="https://raw.githubusercontent.com/SukhvirKooner/wegic/main/public/images/box2.png" alt="" />
          </div>
          <div className="w-14 h-14 bg-gray-800 rounded-lg">
            <img src="https://raw.githubusercontent.com/SukhvirKooner/wegic/main/public/images/box3.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
