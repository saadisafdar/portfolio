import React from "react";
import { usePortfolio } from "../hooks/usePortfolio";
import { SocialPills } from "./SocialLinks";
import { motion } from "framer-motion";

export const HeroSection: React.FC = () => {
  const { profile } = usePortfolio();

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full bg-darkBg overflow-hidden grid grid-cols-1 grid-rows-[80px_1.2fr_0.8fr_auto] items-center justify-items-center px-6"
    >
      {/* Row 1: Nav Spacer */}
      <div className="row-start-1 col-start-1 h-full w-full" />

      {/* Row 2: Headline (z-index 10) */}
      <div className="row-start-2 col-start-1 z-10 select-none pointer-events-none text-center place-self-center w-full max-w-full overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-chrome font-kanit font-black leading-none tracking-tighter uppercase inline-block w-full text-center"
          style={{
            fontSize: "clamp(2.5rem, 11vw, 14rem)",
            whiteSpace: "nowrap",
          }}
        >
          HI, I'M {profile.shortName.toUpperCase()}
        </motion.h1>
      </div>

      {/* Rows 2-3: Avatar (z-index 20) spans rows 2 and 3, overlapping the headline */}
      <div className="row-start-2 row-end-4 col-start-1 z-20 place-self-center pointer-events-none select-none max-w-[260px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[420px] w-full transform translate-y-6 sm:translate-y-8 md:translate-y-12">
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          src={profile.avatarSvg}
          alt={profile.name}
          className="w-full h-auto drop-shadow-[0_20px_50px_rgba(139,92,246,0.25)]"
        />
      </div>

      {/* Row 4: Tagline & Socials (z-index 30) */}
      <div className="row-start-4 col-start-1 z-30 text-center pb-12 sm:pb-16 max-w-2xl px-4 mt-8 sm:mt-12 md:mt-16 w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-400 text-base sm:text-lg md:text-xl font-normal tracking-wide mb-6 sm:mb-8 font-kanit leading-relaxed"
        >
          {profile.tagline}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center w-full"
        >
          <SocialPills socials={profile.social} />
        </motion.div>
      </div>
    </section>
  );
};
