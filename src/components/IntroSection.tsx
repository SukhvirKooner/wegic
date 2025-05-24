import React, { FC, useMemo } from 'react';
import { TextAnimate } from '@/components/ui/text-animate';

// Animation lines
const ANIMATIONS: { Component: keyof JSX.IntrinsicElements; text: string; className: string }[] = [
  {
    Component: 'h2',
    text: "Hi, We're wegic",
    className: 'text-xl md:text-2xl font-normal mb-6 leading-snug',
  },
  {
    Component: 'h3',
    text: 'Your AI website team: designer, developer, and manager.',
    className: 'text-4xl md:text-6xl font-semibold leading-snug mb-10',
  },
  {
    Component: 'p',
    text: "Just chat with us, and we'll build, manage and update your site.",
    className: 'text-2xl md:text-3xl font-light leading-normal text-gray-300 mb-12',
  },
];

// Decorative image sources
const DECOR_IMAGES = [
  '/images/box1.png',
  '/images/box2.png',
  '/images/box3.png',
];

const IntroSection: FC = () => {
  const transitionClasses = 'transition-transform duration-300 hover:scale-105 inline-block';

  const animationElements = useMemo(() =>
    ANIMATIONS.map(({ Component, text, className }, index) => (
      <Component
        key={index}
        className={`${className} ${transitionClasses}`}
      >
        <TextAnimate text={text} type="calmInUp" />
      </Component>
    )),
  []);

  return (
    <section className="bg-black text-white py-28 px-6 min-h-screen relative z-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">{animationElements}
          <h4 className={`text-2xl md:text-3xl font-normal text-gray-300 ${transitionClasses}`}>
            Let's get started!
          </h4>
        </div>

        {/* Decorative elements at bottom */}
        <div className="flex space-x-6 mt-16">
          {DECOR_IMAGES.map((src, idx) => (
            <div key={idx} className="w-14 h-14 bg-gray-800 rounded-lg overflow-hidden">
              <img
                src={src}
                alt={`Decorative box ${idx + 1}`}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
