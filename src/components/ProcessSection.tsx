"use client";
import React, { FC, useMemo } from 'react';
import { motion } from 'motion/react';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import { HeroHighlight } from './ui/hero-highlight';

// Arrow SVG component
const Arrow: FC = () => (
  <svg width={60} height={60} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
    <path d="M10 30H50M50 30L40 20M50 30L40 40" stroke="#888" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Card configuration
interface CardConfig {
  src: string;
  alt: string;
  rotate: string;
}

const CARDS: CardConfig[] = [
  { src: 
    'https://raw.githubusercontent.com/SukhvirKooner/wegic/main/public/images/build.png',
    alt: 'Build in 10s', rotate: '-8deg' },
  { src: 
    'https://raw.githubusercontent.com/SukhvirKooner/wegic/main/public/images/edit.png',
    alt: 'Edit easily', rotate: '0deg' },
  { src: 
    'https://raw.githubusercontent.com/SukhvirKooner/wegic/main/public/images/publish.png',
    alt: 'Go live in 1 click', rotate: '8deg' },
];

// Shared constants
const containerClasses = 'inter-var';
const bodyBaseClasses = 'relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border bg-transparent';
const itemTranslateZ = '100';
const cardInnerClasses = (rotate: string) =>
  `rounded-3xl flex flex-col justify-center items-center shadow-2xl bg-black border border-gray-300/30 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:shadow-blue-400/30 hover:border-blue-400 rotate-[${rotate}]`;
const cardStyle = { minWidth: 280, maxWidth: 380 };

const ProcessSection: FC = () => {
  // Generate card elements
  const cardElements = useMemo(
    () => CARDS.map(({ src, alt, rotate }, idx) => (
      <CardContainer key={idx} className={containerClasses}>
        <CardBody className={bodyBaseClasses}>
          <CardItem translateZ={itemTranslateZ} className="w-full">
            <div className="flex-1 flex justify-center">
              <div className={cardInnerClasses(rotate)} style={cardStyle}>
                <img
                  src={src}
                  alt={alt}
                  className="w-full object-contain rounded-3xl max-h-80"
                  loading="lazy"
                />
              </div>
            </div>
          </CardItem>
        </CardBody>
      </CardContainer>
    )),
    []
  );

  return (
    <HeroHighlight>
      {/* Animated grid background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <h2 className="text-5xl md:text-6xl font-bold text-white">
        Anything you want, just tell your AI team
      </h2>

      <div className="relative z-10 py-24 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-0">
        {cardElements.slice(0, 1)}
        <div className="hidden md:flex flex-col items-center justify-center mx-2"><Arrow /></div>
        {cardElements.slice(1, 2)}
        <div className="hidden md:flex flex-col items-center justify-center mx-2"><Arrow /></div>
        {cardElements.slice(2)}
      </div>

      
    </HeroHighlight>
  );
};

export default ProcessSection;
