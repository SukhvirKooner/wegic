// src/components/StatsSection.tsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

////////////////////////////////////////////////////////////////////////////////
// Helper: for any “row” (or single element), map scroll→{x, scale, opacity, rotateY}
////////////////////////////////////////////////////////////////////////////////
function useFlyOutInAnimation(
  ref: React.RefObject<HTMLDivElement>,
  xOffset: number
) {
  // Animate from: top-of-ref hits bottom-of-viewport → center-of-ref hits center-of-viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  // Horizontal translation from 0 → xOffset
  const x = useTransform(scrollYProgress, [0, 1], [0, xOffset]);

  // Scale from 0.5 → 1
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  // Fade in (0→1) early, stay visible, then fade out (1→0) near end
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  );

  // Y-axis rotation from 30° → 0° (for that slight 3D “pop”)
  const rotateY = useTransform(scrollYProgress, [0, 1], [30, 0]);

  return { x, scale, opacity, rotateY };
}

////////////////////////////////////////////////////////////////////////////////
// Main Component
////////////////////////////////////////////////////////////////////////////////
const StatsSection: React.FC = () => {
  // Refs for each of the first four animated rows:
  const refRow1 = useRef<HTMLDivElement>(null);
  const refRow2 = useRef<HTMLDivElement>(null);
  const refRow3 = useRef<HTMLDivElement>(null);
  const refRow4 = useRef<HTMLDivElement>(null);

  // Get animation values for each row, alternating xOffset direction
  const animRow1 = useFlyOutInAnimation(refRow1, -200); // flies LEFT
  const animRow2 = useFlyOutInAnimation(refRow2, +200); // flies RIGHT
  const animRow3 = useFlyOutInAnimation(refRow3, -200); // flies LEFT
  const animRow4 = useFlyOutInAnimation(refRow4, +200); // flies RIGHT

  // The last row (three new mockup cards) uses individual animations per card, same as before:
  const refNew1 = useRef<HTMLDivElement>(null);
  const refNew2 = useRef<HTMLDivElement>(null);
  const refNew3 = useRef<HTMLDivElement>(null);

  const new1Anim = useFlyOutInAnimation(refNew1, +200);
  const new2Anim = useFlyOutInAnimation(refNew2, -200);
  const new3Anim = useFlyOutInAnimation(refNew3, +200);

  return (
    <div className="bg-gray-100 py-32 px-6">
      <div className="max-w-7xl mx-auto space-y-32">
        {/*** ROW 1: “Jazz Transmit Music” + “230 Countries…” ***/}
        <motion.div
          ref={refRow1}
          className="grid md:grid-cols-2 gap-16 items-center"
          style={{
            x: animRow1.x,
            scale: animRow1.scale,
            opacity: animRow1.opacity,
            rotateY: animRow1.rotateY,
            perspective: 1000,
          }}
        >
          {/* Left: “Jazz Transmit Music” Card */}
          <div className="relative">
            <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl p-8 relative overflow-hidden">
              <div className="text-black mb-6">
                <h3 className="text-2xl font-bold">JAZZ TRANSMIT MUSIC</h3>
                <p className="text-lg opacity-80">
                  Vinyl Record Display and Sales
                </p>
              </div>
              <div className="bg-gray-800 rounded-xl p-4 shadow-2xl">
                <div className="bg-white rounded-lg h-48 flex items-center justify-center">
                  <div className="text-center text-black">
                    <h4 className="text-3xl font-bold mb-2">
                      JAZZ
                      <br />
                      TRANSMIT
                      <br />
                      MUSIC
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: “230 Countries and regions covered” Stat */}
          <div className="text-right">
            <div className="text-8xl font-bold text-gray-400 mb-4">230</div>
            <h3 className="text-4xl font-bold text-black leading-tight">
              Countries and regions covered
            </h3>
          </div>
        </motion.div>

        {/*** ROW 2: “500,000+ Websites built…” + InfinityAI ***/}
        <motion.div
          ref={refRow2}
          className="grid md:grid-cols-2 gap-16 items-center"
          style={{
            x: animRow2.x,
            scale: animRow2.scale,
            opacity: animRow2.opacity,
            rotateY: animRow2.rotateY,
            perspective: 1000,
          }}
        >
          {/* Left: “500,000+ Websites built…” Stat */}
          <div>
            <div className="text-8xl font-bold text-gray-400 mb-4">
              500,000+
            </div>
            <h3 className="text-4xl font-bold text-black leading-tight">
              Websites built and managed
            </h3>
          </div>

          {/* Right: InfinityAI Card */}
          <div className="relative">
            <div className="bg-gray-600 rounded-3xl p-8 relative overflow-hidden">
              <div className="text-white mb-6">
                <h3 className="text-xl font-bold">InfinityAI</h3>
                <p className="text-sm opacity-80">Product Official Website</p>
              </div>
              <div className="bg-gray-800 rounded-xl p-4 shadow-2xl">
                <div className="bg-black rounded-lg h-48 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-2xl mb-2">∞</div>
                    <p className="text-sm">Premium AI content</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/*** ROW 3: “95% Chat in their native language” + MorningBrew ***/}
        <motion.div
          ref={refRow3}
          className="grid md:grid-cols-2 gap-16 items-center"
          style={{
            x: animRow3.x,
            scale: animRow3.scale,
            opacity: animRow3.opacity,
            rotateY: animRow3.rotateY,
            perspective: 1000,
          }}
        >
          {/* Left: “95% Chat in their native language” Stat */}
          <div>
            <div className="text-8xl font-bold text-gray-400 mb-4">95%</div>
            <h3 className="text-4xl font-bold text-black leading-tight">
              Chat in their native language
            </h3>
          </div>

          {/* Right: MorningBrew Card */}
          <div className="relative">
            <div className="bg-green-200 rounded-3xl p-8 relative overflow-hidden">
              <div className="text-black mb-6">
                <h3 className="text-xl font-bold">MORNINGBREW COFFEE</h3>
                <p className="text-sm opacity-80">Small business homepage</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-xl">
                <div className="bg-green-500 text-white p-4 rounded-lg text-center">
                  <h4 className="text-2xl font-bold">MORNINGBREW</h4>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  <div className="bg-gray-200 h-16 rounded"></div>
                  <div className="bg-gray-200 h-16 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/*** ROW 4: “80% Starting from zero” ***/}
        <motion.div
          ref={refRow4}
          className="text-center"
          style={{
            x: animRow4.x,
            scale: animRow4.scale,
            opacity: animRow4.opacity,
            rotateY: animRow4.rotateY,
            perspective: 1000,
          }}
        >
          <div className="text-8xl font-bold text-gray-400 mb-4">80%</div>
          <h3 className="text-4xl font-bold text-black">Starting from zero</h3>
        </motion.div>

        {/*** ROW 5: Three NEW Mockup Cards (each animates individually) ***/}
        <div className="grid md:grid-cols-3 gap-16 mt-32 items-center">
          {/* New Mockup #1 */}
          <motion.div
            ref={refNew1}
            className="relative"
            style={{
              x: new1Anim.x,
              scale: new1Anim.scale,
              opacity: new1Anim.opacity,
              rotateY: new1Anim.rotateY,
              perspective: 1000,
            }}
          >
            <div className="bg-purple-400 rounded-3xl p-8 relative overflow-hidden">
              <div className="text-white mb-6">
                <h3 className="text-xl font-bold">NFT Digital Gallery</h3>
                <p className="text-sm opacity-80">Art Exhibition Platform</p>
              </div>
              <div className="bg-black rounded-xl p-4 shadow-2xl">
                <div className="bg-white rounded-lg h-44 flex items-center justify-center">
                  <div className="text-center text-black">
                    <h4 className="text-2xl font-bold mb-2">
                      AI – NFT
                      <br />
                      Digital Museum
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* New Mockup #2 */}
          <motion.div
            ref={refNew2}
            className="relative"
            style={{
              x: new2Anim.x,
              scale: new2Anim.scale,
              opacity: new2Anim.opacity,
              rotateY: new2Anim.rotateY,
              perspective: 1000,
            }}
          >
            <div className="bg-blue-200 rounded-3xl p-8 relative overflow-hidden">
              <div className="text-black mb-6">
                <h3 className="text-xl font-bold">Davis Photography</h3>
                <p className="text-sm opacity-80">Personal Portfolio</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-xl">
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-gray-300 h-24 rounded"></div>
                  <div className="bg-gray-300 h-24 rounded"></div>
                  <div className="bg-gray-300 h-24 rounded"></div>
                </div>
                <div className="mt-4 text-center text-black">
                  <p className="text-lg font-semibold">“Minimalist Portraits”</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* New Mockup #3 */}
          <motion.div
            ref={refNew3}
            className="relative"
            style={{
              x: new3Anim.x,
              scale: new3Anim.scale,
              opacity: new3Anim.opacity,
              rotateY: new3Anim.rotateY,
              perspective: 1000,
            }}
          >
            <div className="bg-indigo-600 rounded-3xl p-8 relative overflow-hidden">
              <div className="text-white mb-6">
                <h3 className="text-xl font-bold">RizzRadar Mobile</h3>
                <p className="text-sm opacity-80">
                  Nearby Friends (iOS App)
                </p>
              </div>
              <div className="bg-black rounded-xl p-4 shadow-2xl w-32 mx-auto">
                <div className="bg-gray-800 rounded-lg h-64 flex items-center justify-center text-white">
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
