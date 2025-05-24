import React, { FC, useRef, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Hook for scroll-driven animation
function useFlyOutInAnimation(ref: React.RefObject<HTMLDivElement>, xOffset: number) {
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'center center'] });
  return {
    x: useTransform(scrollYProgress, [0, 1], [0, xOffset]),
    scale: useTransform(scrollYProgress, [0, 1], [0.5, 1]),
    opacity: useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]),
    rotateY: useTransform(scrollYProgress, [0, 1], [30, 0]),
  };
}

// Shared style generator
const getMotionStyle = (anim: ReturnType<typeof useFlyOutInAnimation>) => ({
  x: anim.x,
  scale: anim.scale,
  opacity: anim.opacity,
  rotateY: anim.rotateY,
  perspective: 1000,
});

const StatsSection: FC = () => {
  // Create refs and animations for main rows
  const rowOffsets = useMemo(() => [-200, 200, -200, 200] as number[], []);
  const rowRefs = rowOffsets.map(() => useRef<HTMLDivElement>(null));
  const rowAnims = useMemo(
    () => rowRefs.map((ref, i) => useFlyOutInAnimation(ref, rowOffsets[i])),
    [rowRefs, rowOffsets]
  );

  // Define content for first three rows
  const mainRows = useMemo(
    () => [
      {
        left: (
          <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl p-6 sm:p-8 overflow-hidden">
            <h3 className="text-xl sm:text-2xl font-bold text-black mb-2">JAZZ TRANSMIT MUSIC</h3>
            <p className="text-base sm:text-lg opacity-80 text-black mb-6">Vinyl Record Display and Sales</p>
            <div className="bg-gray-800 rounded-xl p-4 shadow-2xl">
              <div className="bg-white rounded-lg h-48 flex items-center justify-center">
                <h4 className="text-xl sm:text-3xl font-bold text-black text-center">JAZZ<br/>TRANSMIT<br/>MUSIC</h4>
              </div>
            </div>
          </div>
        ),
        right: (
          <div className="text-center md:text-right">
            <div className="text-6xl sm:text-8xl font-bold text-gray-400 mb-4">230</div>
            <h3 className="text-2xl sm:text-4xl font-bold text-black">Countries and regions covered</h3>
          </div>
        ),
      },
      {
        left: (
          <div className="text-center md:text-left">
            <div className="text-6xl sm:text-8xl font-bold text-gray-400 mb-4">500,000+</div>
            <h3 className="text-2xl sm:text-4xl font-bold text-black">Websites built and managed</h3>
          </div>
        ),
        right: (
          <div className="bg-gray-600 rounded-3xl p-6 sm:p-8 overflow-hidden">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">InfinityAI</h3>
            <p className="text-sm opacity-80 text-white mb-6">Product Official Website</p>
            <div className="bg-gray-800 rounded-xl p-4 shadow-2xl">
              <div className="bg-black rounded-lg h-48 flex items-center justify-center">
                <div className="text-xl sm:text-2xl text-white mb-2">∞</div>
                <p className="text-sm text-white">Premium AI content</p>
              </div>
            </div>
          </div>
        ),
      },
      {
        left: (
          <div className="text-center md:text-left">
            <div className="text-6xl sm:text-8xl font-bold text-gray-400 mb-4">95%</div>
            <h3 className="text-2xl sm:text-4xl font-bold text-black">Chat in their native language</h3>
          </div>
        ),
        right: (
          <div className="bg-green-200 rounded-3xl p-6 sm:p-8 overflow-hidden">
            <h3 className="text-lg sm:text-xl font-bold text-black mb-2">MORNINGBREW COFFEE</h3>
            <p className="text-sm opacity-80 text-black mb-6">Small business homepage</p>
            <div className="bg-white rounded-xl p-4 shadow-xl">
              <div className="bg-green-500 text-white rounded-lg p-4 text-center">
                <h4 className="text-xl sm:text-2xl font-bold">MORNINGBREW</h4>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-4">
                <div className="bg-gray-200 h-16 rounded" />
                <div className="bg-gray-200 h-16 rounded" />
              </div>
            </div>
          </div>
        ),
      },
    ], []);

  // New showcase items
  const newItems = useMemo(
    () => [
      { color: 'bg-purple-400', title: 'NFT Digital Gallery', desc: 'Art Exhibition Platform', content: (
        <h4 className="text-xl sm:text-2xl font-bold text-black text-center">AI – NFT<br/>Digital Museum</h4>
      ) },
      { color: 'bg-blue-200', title: 'Davis Photography', desc: 'Personal Portfolio', content: (
        <>
          <div className="grid grid-cols-3 gap-2">
            {[0,1,2].map(i => <div key={i} className="bg-gray-300 h-24 rounded" />)}
          </div>
          <p className="mt-4 text-base sm:text-lg font-semibold text-black text-center">“Minimalist Portraits”</p>
        </>
      ) },
      { color: 'bg-indigo-600', title: 'RizzRadar Mobile', desc: 'Nearby Friends (iOS App)', content: (
        <div className="bg-gray-800 rounded-lg h-64 flex items-center justify-center" />
      ) },
    ], []);

  // Refs and animations for new items
  const newOffsets = useMemo(() => [200, -200, 200] as number[], []);
  const newRefs = newOffsets.map(() => useRef<HTMLDivElement>(null));
  const newAnims = useMemo(
    () => newRefs.map((ref, i) => useFlyOutInAnimation(ref, newOffsets[i])),
    [newRefs, newOffsets]
  );

  return (
    <div className="bg-gray-100 py-24 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Main rows */}
        {mainRows.map((row, idx) => (
          <motion.div
            key={idx}
            ref={rowRefs[idx]}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            style={getMotionStyle(rowAnims[idx])}
          >
            {row.left}
            {row.right}
          </motion.div>
        ))}

        {/* Fourth stat */}
        <motion.div
          ref={rowRefs[3]}
          className="text-center"
          style={getMotionStyle(rowAnims[3])}
        >
          <div className="text-6xl sm:text-8xl font-bold text-gray-400 mb-4">80%</div>
          <h3 className="text-2xl sm:text-4xl font-bold text-black">Starting from zero</h3>
        </motion.div>

        {/* New showcase items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-24">
          {newItems.map((item, idx) => (
            <motion.div
              key={idx}
              ref={newRefs[idx]}
              style={getMotionStyle(newAnims[idx])}
              className="relative"
            >
              <div className={`${item.color} rounded-3xl p-6 sm:p-8 overflow-hidden`}>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm opacity-80 text-white mb-6">{item.desc}</p>
                <div className="bg-black rounded-xl p-4 shadow-2xl">
                  <div className="bg-white rounded-lg p-4 flex items-center justify-center">
                    {item.content}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
