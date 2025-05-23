// components/HeroSection.jsx
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  // rotating placeholder strings
  const placeholders = [
    'Describe your dream website…',
    'Show me a sleek portfolio layout.',
    'I need an online store hero section.',
    'Let’s build a blog landing page.',
  ];
  const [idx, setIdx] = useState(0);
  const [chatText, setChatText] = useState('');

  // cycle placeholder every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIdx(i => (i + 1) % placeholders.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // flashlight mouse effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = e => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Cursor flashlight effect */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(circle 600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.18) 30%, transparent 70%)`
        }}
      />

      {/* Silhouette shadow */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none select-none">
        <svg
          width="600"
          height="900"
          viewBox="0 0 320 480"
          fill="black"
          fillOpacity="0.7"
          style={{
            filter: `
              drop-shadow(${(mousePosition.x - window.innerWidth/2)/8}px ${(mousePosition.y - window.innerHeight/2)/8}px 120px rgba(0,0,0,0.95))
              drop-shadow(${(mousePosition.x - window.innerWidth/2)/16}px ${(mousePosition.y - window.innerHeight/2)/16}px 24px rgba(0,0,0,0.85))
            `
          }}
        >
          <ellipse cx="160" cy="120" rx="90" ry="120" />
          <rect x="55" y="200" width="210" height="250" rx="90" />
          <ellipse cx="160" cy="470" rx="90" ry="40" />
        </svg>
      </div>
      
      <div className="relative z-20 pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* Headline */}
          <h1 className="text-7xl md:text-8xl font-bold mb-8 leading-tight">
            Magic Your Site
            <br />
            <span className="text-6xl md:text-7xl">Chat by Chat</span>
          </h1>

          {/* Subheadline */}
          <div className="mb-12 text-orange-400 text-lg">
            👋 Hey! We're Wegic. Chat with us, share your website vision, and we'll build it in 1 minute.
          </div>

          {/* Chat box */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white rounded-2xl p-6 text-black text-left shadow-2xl">

              {/* Editable input with rotating placeholder */}
              <div className=" relative">
                <input
                  type="text"
                  value={chatText}
                  onChange={e => setChatText(e.target.value)}
                  placeholder={placeholders[idx]}
                  className="
                    w-full
                    bg-gray-100
                    rounded-xl
                    px-4
                    py-3
                    text-gray-600
                    placeholder-gray-600
                    outline-none
                    animate-slide-in-placeholder
                  "
                />
                <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </button>
              </div>

              {/* Action buttons */}
              <div className="flex items-center space-x-2 mt-6">
                <Button className="bg-black text-white hover:bg-gray-800 px-6 py-2 rounded-lg">
                  Build Via Chat
                </Button>
                <Button variant="outline" className="border-gray-300 text-gray-600 hover:bg-gray-50 px-6 py-2 rounded-lg">
                  Build Via Link
                </Button>
              </div>

            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {[
              '📚 Online education platform',
              '🛒 E-commerce product page',
              '🎮 Game community',
              '📦 Product display page',
              '🎨 Design studio'
            ].map(label => (
              <Button
                key={label}
                className="bg-gray-800/50 text-white border border-gray-600 rounded-full px-6 py-3 hover:bg-gray-700"
              >
                {label}
              </Button>
            ))}
          </div>

          {/* Scroll hint */}
          <div className="text-gray-400 text-sm">
            SCROLL TO EXPLORE ⭕
          </div>
        </div>
      </div>

      {/* Award badge */}
      <div className="absolute bottom-8 right-8 text-right">
        <div className="bg-gray-800/50 rounded-lg p-3 text-xs border border-gray-600">
          🏆 Golden Kitty Awards<br/><span className="font-bold">2024</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
