import React, { FC, useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { PlaceholdersAndVanishInput } from './ui/placeholders-and-vanish-input';

// Constants
const PLACEHOLDERS: string[] = [
  'Describe your dream website…',
  'Show me a sleek portfolio layout.',
  'I need an online store hero section.',
  "Let's build a blog landing page.",
];

const CATEGORIES: string[] = [
  '📚 Online education platform',
  '🛒 E-commerce product page',
  '🎮 Game community',
  '📦 Product display page',
  '🎨 Design studio',
];

// Custom hook for mouse position tracking
const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return position;
};

const HeroSection: FC = () => {
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const mouse = useMousePosition();

  // Rotate through placeholders every 3s
  useEffect(() => {
    const interval = setInterval(
      () => setPlaceholderIndex((idx) => (idx + 1) % PLACEHOLDERS.length),
      3000
    );
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.value);
    },
    []
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      console.log('submitted');
    },
    []
  );

  const { x, y } = mouse;
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Flashlight effect */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(circle 1000px at ${x}px ${y}px, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.35) 30%, transparent 70%)`,
        }}
      />

      {/* Silhouette shadow */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none select-none">
        <svg
          width="600"
          height="900"
          viewBox="0 0 320 480"
          fill="black"
          fillOpacity={0.7}
          style={{
            filter: `
              drop-shadow(${(x - centerX) / 8}px ${(y - centerY) / 8}px 120px rgba(0,0,0,0.95))
              drop-shadow(${(x - centerX) / 16}px ${(y - centerY) / 16}px 24px rgba(0,0,0,0.85))
            `,
          }}
        >
          <path d="M160 40 L220 120 L100 120 Z" />
          <rect x={140} y={120} width={40} height={30} rx={5} />
          <rect x={110} y={150} width={100} height={200} rx={20} />
          <path d="M110 170 C100 165, 90 160, 80 150 L70 100" stroke="black" strokeWidth={20} fill="none" />
          <path d="M210 170 C220 165, 230 160, 240 150 L250 100" stroke="black" strokeWidth={20} fill="none" />
          <path d="M70 100 C60 90, 60 80, 70 70 C80 60, 90 70, 90 80 C90 90, 80 100, 70 100" />
          <path d="M250 100 C260 90, 260 80, 250 70 C240 60, 230 70, 230 80 C230 90, 240 100, 250 100" />
          <ellipse cx={160} cy={470} rx={90} ry={40} />
        </svg>
      </div>

      <div className="relative z-20 pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-7xl md:text-8xl font-bold mb-8 leading-tight">
            Magic Your Site
            <br />
            <span className="text-6xl md:text-7xl">Chat by Chat</span>
          </h1>
          <div className="mb-12 text-white text-lg">
            👋 Hey! We're Wegic. Chat with us, share your website vision, and we'll build it in 1 minute.
          </div>

          <div className="max-w-2xl mx-auto mb-16">
            <div className="bg-white rounded-2xl p-6 text-black shadow-2xl">
              <form onSubmit={handleSubmit} className="relative">
                <PlaceholdersAndVanishInput
                  placeholders={PLACEHOLDERS}
                  onChange={handleInputChange}
                  onSubmit={handleSubmit}
                />
              </form>
              <div className="flex items-center space-x-2 mt-6">
                <Button className="bg-black text-white hover:bg-gray-800 px-6 py-2 rounded-lg">
                  Build Via Chat
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-300 text-gray-600 hover:bg-gray-50 px-6 py-2 rounded-lg"
                >
                  Build Via Link
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {CATEGORIES.map((label) => (
              <Button
                key={label}
                className="bg-gray-800/50 text-white border border-gray-600 rounded-full px-6 py-3 hover:bg-gray-700"
              >
                {label}
              </Button>
            ))}
          </div>

          <div className="text-gray-400 text-sm">SCROLL TO EXPLORE</div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 text-right">
        <div className="bg-gray-800/50 rounded-lg p-3 text-xs border border-gray-600">
          🏆 Golden Kitty Awards
          <br />
          <span className="font-bold">2024</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
