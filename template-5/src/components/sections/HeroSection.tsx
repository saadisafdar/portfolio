'use client';

import { motion } from 'motion/react';
import Particles from '@/components/ui/particles';
import BlurText from '@/components/ui/blur-text';
import ErrorBoundary from '@/components/ui/error-boundary';
import GithubIcon from '@/icons/github-icon';
import LinkedinIcon from '@/icons/linkedin-icon';
import TwitterXIcon from '@/icons/twitter-x-icon';
import InstagramIcon from '@/icons/instagram-icon';
import DiscordIcon from '@/icons/discord-icon';
import FacebookIcon from '@/icons/facebook-icon';
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Particles
        backgroundColor="#0a0a0a"
        particleColor="#22c55e"
        particleCount={600}
        radius={1.2}
        particleSpeed={1.2}
        scale={0.0008}
        cellSize={25}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <ErrorBoundary>
            <motion.p
              className="text-primary text-sm font-mono tracking-widest uppercase mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Computer Science Student &amp; Full-Stack Developer
            </motion.p>
          </ErrorBoundary>

          <ErrorBoundary>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
              <BlurText
                text="Hi, I'm "
                animateBy="letters"
                direction="top"
                delay={80}
                stepDuration={0.4}
                className="inline text-foreground"
              />
              <BlurText
                text="Saadi"
                animateBy="letters"
                direction="top"
                delay={80}
                stepDuration={0.4}
                className="inline text-primary"
              />
            </h1>
          </ErrorBoundary>

          <ErrorBoundary>
            <motion.p
              className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ delay: 0.8, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Building intelligent software, full-stack web apps, and AI-powered
              solutions through clean, practical code.
            </motion.p>
          </ErrorBoundary>

          <ErrorBoundary>
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
            >
              <motion.a
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-2 h-11 rounded-lg px-8 text-sm font-medium bg-primary text-primary-foreground shadow-lg shadow-primary/25 overflow-hidden"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span className="relative z-10">View My Work</span>
              </motion.a>
              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 h-11 rounded-lg px-8 text-sm font-medium border border-border bg-background/50 backdrop-blur-sm shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </ErrorBoundary>

          <ErrorBoundary>
            <motion.div
              className="flex items-center justify-center gap-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              {[
                { icon: GithubIcon, href: 'https://github.com/saadisafdar', label: 'GitHub' },
                { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/saadisafdar/', label: 'LinkedIn' },
                { icon: TwitterXIcon, href: 'https://x.com/saadisafder', label: 'X' },
                { icon: InstagramIcon, href: 'https://www.instagram.com/saadisafdar/', label: 'Instagram' },
                { icon: DiscordIcon, href: 'https://discord.com/users/saadisafdar', label: 'Discord' },
                { icon: FacebookIcon, href: 'https://www.facebook.com/saadisafdar1', label: 'Facebook' },
              ].map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 + i * 0.1 }}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={22} color="#a1a1aa" />
                </motion.a>
              ))}
            </motion.div>
          </ErrorBoundary>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.a>
    </section>
  );
}
