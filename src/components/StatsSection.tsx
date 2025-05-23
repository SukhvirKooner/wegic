// src/components/StatsSection.tsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function useFlyOutInAnimation(
  ref: React.RefObject<HTMLDivElement>,
  xOffset: number
) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, xOffset]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [30, 0]);

  return { x, scale, opacity, rotateY };
}

const StatsSection: React.FC = () => {
  const refRow1 = useRef<HTMLDivElement>(null);
  const refRow2 = useRef<HTMLDivElement>(null);
  const refRow3 = useRef<HTMLDivElement>(null);
  const refRow4 = useRef<HTMLDivElement>(null);

  const animRow1 = useFlyOutInAnimation(refRow1, -200);
  const animRow2 = useFlyOutInAnimation(refRow2, 200);
  const animRow3 = useFlyOutInAnimation(refRow3, -200);
  const animRow4 = useFlyOutInAnimation(refRow4, 200);

  const refNew1 = useRef<HTMLDivElement>(null);
  const refNew2 = useRef<HTMLDivElement>(null);
  const refNew3 = useRef<HTMLDivElement>(null);

  const new1Anim = useFlyOutInAnimation(refNew1, 200);
  const new2Anim = useFlyOutInAnimation(refNew2, -200);
  const new3Anim = useFlyOutInAnimation(refNew3, 200);

  return (
    <div className="bg-gray-100 py-24 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto space-y-24">
        {[{
          ref: refRow1,
          anim: animRow1,
          left: (
            <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl p-6 sm:p-8 relative overflow-x-hidden">
              <div className="text-black mb-6">
                <h3 className="text-xl sm:text-2xl font-bold">JAZZ TRANSMIT MUSIC</h3>
                <p className="text-base sm:text-lg opacity-80">Vinyl Record Display and Sales</p>
              </div>
              <div className="bg-gray-800 rounded-xl p-4 shadow-2xl">
                <div className="bg-white rounded-lg h-40 sm:h-48 flex items-center justify-center">
                  <div className="text-center text-black">
                    <h4 className="text-xl sm:text-3xl font-bold mb-2">JAZZ<br />TRANSMIT<br />MUSIC</h4>
                  </div>
                </div>
              </div>
            </div>
          ),
          right: (
            <div className="text-center md:text-right">
              <div className="text-6xl sm:text-8xl font-bold text-gray-400 mb-4">230</div>
              <h3 className="text-2xl sm:text-4xl font-bold text-black leading-tight">Countries and regions covered</h3>
            </div>
          )
        },
        {
          ref: refRow2,
          anim: animRow2,
          left: (
            <div className="text-center md:text-left">
              <div className="text-6xl sm:text-8xl font-bold text-gray-400 mb-4">500,000+</div>
              <h3 className="text-2xl sm:text-4xl font-bold text-black leading-tight">Websites built and managed</h3>
            </div>
          ),
          right: (
            <div className="bg-gray-600 rounded-3xl p-6 sm:p-8 relative overflow-x-hidden">
              <div className="text-white mb-6">
                <h3 className="text-lg sm:text-xl font-bold">InfinityAI</h3>
                <p className="text-sm opacity-80">Product Official Website</p>
              </div>
              <div className="bg-gray-800 rounded-xl p-4 shadow-2xl">
                <div className="bg-black rounded-lg h-40 sm:h-48 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-xl sm:text-2xl mb-2">∞</div>
                    <p className="text-sm">Premium AI content</p>
                  </div>
                </div>
              </div>
            </div>
          )
        },
        {
          ref: refRow3,
          anim: animRow3,
          left: (
            <div className="text-center md:text-left">
              <div className="text-6xl sm:text-8xl font-bold text-gray-400 mb-4">95%</div>
              <h3 className="text-2xl sm:text-4xl font-bold text-black leading-tight">Chat in their native language</h3>
            </div>
          ),
          right: (
            <div className="bg-green-200 rounded-3xl p-6 sm:p-8 relative overflow-x-hidden">
              <div className="text-black mb-6">
                <h3 className="text-lg sm:text-xl font-bold">MORNINGBREW COFFEE</h3>
                <p className="text-sm opacity-80">Small business homepage</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-xl">
                <div className="bg-green-500 text-white p-4 rounded-lg text-center">
                  <h4 className="text-xl sm:text-2xl font-bold">MORNINGBREW</h4>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  <div className="bg-gray-200 h-16 rounded"></div>
                  <div className="bg-gray-200 h-16 rounded"></div>
                </div>
              </div>
            </div>
          )
        }].map((row, i) => (
          <motion.div
            key={i}
            ref={row.ref}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center overflow-x-hidden"
            style={{
              x: row.anim.x,
              scale: row.anim.scale,
              opacity: row.anim.opacity,
              rotateY: row.anim.rotateY,
              perspective: 1000,
            }}
          >
            {row.left}
            {row.right}
          </motion.div>
        ))}

        <motion.div
          ref={refRow4}
          className="text-center overflow-x-hidden"
          style={{
            x: animRow4.x,
            scale: animRow4.scale,
            opacity: animRow4.opacity,
            rotateY: animRow4.rotateY,
            perspective: 1000,
          }}
        >
          <div className="text-6xl sm:text-8xl font-bold text-gray-400 mb-4">80%</div>
          <h3 className="text-2xl sm:text-4xl font-bold text-black">Starting from zero</h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-24">
          {[{
            ref: refNew1,
            anim: new1Anim,
            color: "bg-purple-400",
            title: "NFT Digital Gallery",
            desc: "Art Exhibition Platform",
            content: (
              <div className="text-center text-black">
                <h4 className="text-xl sm:text-2xl font-bold mb-2">AI – NFT<br />Digital Museum</h4>
              </div>
            )
          },
          {
            ref: refNew2,
            anim: new2Anim,
            color: "bg-blue-200",
            title: "Davis Photography",
            desc: "Personal Portfolio",
            content: (
              <>
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-gray-300 h-20 sm:h-24 rounded"></div>
                  <div className="bg-gray-300 h-20 sm:h-24 rounded"></div>
                  <div className="bg-gray-300 h-20 sm:h-24 rounded"></div>
                </div>
                <div className="mt-4 text-center text-black">
                  <p className="text-base sm:text-lg font-semibold">“Minimalist Portraits”</p>
                </div>
              </>
            )
          },
          {
            ref: refNew3,
            anim: new3Anim,
            color: "bg-indigo-600",
            title: "RizzRadar Mobile",
            desc: "Nearby Friends (iOS App)",
            content: (
              <div className="bg-gray-800 rounded-lg h-60 sm:h-64 flex items-center justify-center text-white"></div>
            )
          }].map((mockup, i) => (
            <motion.div
              key={i}
              ref={mockup.ref}
              className="relative overflow-x-hidden"
              style={{
                x: mockup.anim.x,
                scale: mockup.anim.scale,
                opacity: mockup.anim.opacity,
                rotateY: mockup.anim.rotateY,
                perspective: 1000,
              }}
            >
              <div className={`${mockup.color} rounded-3xl p-6 sm:p-8 relative overflow-x-hidden`}>
                <div className="mb-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white">{mockup.title}</h3>
                  <p className="text-sm opacity-80 text-white">{mockup.desc}</p>
                </div>
                <div className="bg-black rounded-xl p-4 shadow-2xl">
                  <div className="bg-white rounded-lg p-4 flex flex-col items-center justify-center">
                    {mockup.content}
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
