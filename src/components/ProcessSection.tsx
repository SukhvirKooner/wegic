"use client";
import React from 'react';
import { motion } from "motion/react";
import { HeroHighlight } from "./ui/hero-highlight"; // Adjust the import path as needed

const Arrow = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
    <path d="M10 30H50M50 30L40 20M50 30L40 40" stroke="#888" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ProcessSection = () => {
  return (
    <HeroHighlight> {/* Aceternity animated background wrapper */}
    <div className="absolute inset-0 z-0 pointer-events-none" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '40px 40px'}} />
        
        <h2 className="text-5xl md:text-6xl font-bold text-white">Anything you want, just tell your AI team</h2>
      <div className="relative z-10 py-24 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-0">
        
        {/* Card 1 */}
        <div className="flex-1 flex justify-center">
          <div className="rounded-3xl p-0 flex flex-col justify-center items-center shadow-2xl bg-black border border-gray-300/30 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:shadow-blue-400/30 hover:border-blue-400 rotate-[-8deg]" style={{ minWidth: 280, maxWidth: 380 }}>
            <img src="https://raw.githubusercontent.com/SukhvirKooner/screenshot-to-landing-page/main/public/images/build.png" alt="Build in 10s" className="w-full object-contain rounded-3xl max-h-80" />
          </div>
        </div>

        {/* Arrow 1 */}
        <div className="hidden md:flex flex-col items-center justify-center mx-2">
          <Arrow />
        </div>

        {/* Card 2 */}
        <div className="flex-1 flex justify-center">
          <div className="rounded-3xl p-0 flex flex-col justify-center items-center shadow-2xl bg-black border border-gray-300/30 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:shadow-blue-400/30 hover:border-blue-400 rotate-0" style={{ minWidth: 280, maxWidth: 380 }}>
            <img src="https://raw.githubusercontent.com/SukhvirKooner/screenshot-to-landing-page/main/public/images/edit.png" alt="Edit easily" className="w-full object-contain rounded-3xl max-h-80" />
          </div>
        </div>

        {/* Arrow 2 */}
        <div className="hidden md:flex flex-col items-center justify-center mx-2">
          <Arrow />
        </div>

        {/* Card 3 */}
        <div className="flex-1 flex justify-center">
          <div className="rounded-3xl p-0 flex flex-col justify-center items-center shadow-2xl bg-black border border-gray-300/30 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:shadow-blue-400/30 hover:border-blue-400 rotate-[8deg]" style={{ minWidth: 280, maxWidth: 380 }}>
            <img src="https://raw.githubusercontent.com/SukhvirKooner/screenshot-to-landing-page/main/public/images/publish.png" alt="Go live in 1 click" className="w-full object-contain rounded-3xl max-h-80" />
          </div>
        </div>
      </div>
    </HeroHighlight>
  );
};

export default ProcessSection;
