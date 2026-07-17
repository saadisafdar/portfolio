'use client';

import { motion } from 'motion/react';
import GithubIcon from '@/icons/github-icon';
import LinkedinIcon from '@/icons/linkedin-icon';
import TwitterXIcon from '@/icons/twitter-x-icon';
import portfolioData from '@/data/portfolio.json';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; {year} {portfolioData.personal.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <motion.a
            href={portfolioData.personal.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <GithubIcon size={18} color="#71717a" />
          </motion.a>
          <motion.a
            href={portfolioData.personal.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <LinkedinIcon size={18} color="#71717a" />
          </motion.a>
          <motion.a
            href={portfolioData.personal.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <TwitterXIcon size={18} color="#71717a" />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
