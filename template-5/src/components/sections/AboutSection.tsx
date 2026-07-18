'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import ScrollReveal from '@/components/ui/scroll-reveal';
import ErrorBoundary from '@/components/ui/error-boundary';
import { MapPin, GraduationCap } from 'lucide-react';
import portfolioData from '@/data/portfolio.json';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <ErrorBoundary>
          <ScrollReveal direction="up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-primary font-[family-name:var(--font-script)] text-4xl md:text-5xl">Me</span>
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full mb-8" />
          </ScrollReveal>
        </ErrorBoundary>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <ErrorBoundary>
            <ScrollReveal direction="left" delay={0.2}>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                I&apos;m a BSc Computer Science student at the University of Wah (2024–2028), based in Wah Cantt, Pakistan. I build both academic team projects and independent personal projects, working across the full stack — from database design and backend APIs to responsive frontends and AI-powered features. I also work with AI coding agents as part of my development workflow, using them to accelerate prototyping, debug complex issues, and explore new approaches to problems.
              </p>

              <div className="flex flex-col gap-3 text-sm">
                <motion.div
                  className="flex items-center gap-2 text-muted-foreground"
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <MapPin size={16} className="text-primary" />
                  <span>{portfolioData.personal.location}</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2 text-muted-foreground"
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <GraduationCap size={16} className="text-primary" />
                  <span>{portfolioData.personal.education}</span>
                </motion.div>
              </div>
            </ScrollReveal>
          </ErrorBoundary>

          <ErrorBoundary>
            <ScrollReveal direction="right" delay={0.4}>
              <motion.div
                className="relative mx-auto w-full max-w-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className="relative rounded-2xl overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm aspect-square">
                  <Image
                    src="/images/profile.jpg"
                    alt="Saadi Safdar"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 384px"
                    priority={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                </div>
                <p className="text-center mt-4 text-muted-foreground text-sm font-[family-name:var(--font-handwritten)] text-lg">
                  &mdash; always curious, always building
                </p>
                <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
                <div className="absolute -top-3 -left-3 w-16 h-16 bg-primary/10 rounded-full blur-xl" />
              </motion.div>
            </ScrollReveal>
          </ErrorBoundary>
        </div>
      </div>
    </section>
  );
}
