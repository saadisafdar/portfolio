'use client';

import { motion } from 'motion/react';
import GithubIcon from '@/icons/github-icon';
import LinkedinIcon from '@/icons/linkedin-icon';
import TwitterXIcon from '@/icons/twitter-x-icon';
import InstagramIcon from '@/icons/instagram-icon';
import DiscordIcon from '@/icons/discord-icon';
import FacebookIcon from '@/icons/facebook-icon';
import BrandThreadsIcon from '@/icons/brand-threads-icon';
import YoutubeIcon from '@/icons/youtube-icon';
import TiktokIcon from '@/icons/tiktok-icon';
import RedditIcon from '@/icons/reddit-icon';
import portfolioData from '@/data/portfolio.json';

const footerSocials = [
  { icon: GithubIcon, href: portfolioData.personal.socials.github, label: 'GitHub' },
  { icon: LinkedinIcon, href: portfolioData.personal.socials.linkedin, label: 'LinkedIn' },
  { icon: TwitterXIcon, href: portfolioData.personal.socials.twitter, label: 'X / Twitter' },
  { icon: InstagramIcon, href: portfolioData.personal.socials.instagram, label: 'Instagram' },
  { icon: DiscordIcon, href: portfolioData.personal.socials.discord, label: 'Discord' },
  { icon: FacebookIcon, href: portfolioData.personal.socials.facebook, label: 'Facebook' },
  { icon: BrandThreadsIcon, href: portfolioData.personal.socials.threads, label: 'Threads' },
  { icon: YoutubeIcon, href: portfolioData.personal.socials.youtube1, label: 'YouTube' },
  { icon: TiktokIcon, href: portfolioData.personal.socials.tiktok, label: 'TikTok' },
  { icon: RedditIcon, href: portfolioData.personal.socials.reddit, label: 'Reddit' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; {year} {portfolioData.personal.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          {footerSocials.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              title={social.label}
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <social.icon size={18} color="#71717a" />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
