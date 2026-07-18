'use client';

import { motion } from 'motion/react';
import ScrollReveal from '@/components/ui/scroll-reveal';
import ErrorBoundary from '@/components/ui/error-boundary';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import portfolioData from '@/data/portfolio.json';

interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string;
}

export default function ExperienceSection() {
  const experience = portfolioData.experience as ExperienceEntry[];
  if (experience.length === 0) return null;

  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <ErrorBoundary>
          <ScrollReveal direction="up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-primary">Experience</span>
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full mb-8" />
          </ScrollReveal>
        </ErrorBoundary>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />

          {experience.map((entry, i) => (
            <ErrorBoundary key={entry.company}>
              <ScrollReveal direction="left" delay={0.1 * i}>
                <div className="relative pl-16 pb-10 last:pb-0">
                  <motion.div
                    className="absolute left-4 top-1 w-5 h-5 rounded-full bg-primary border-4 border-background"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + 0.1 * i, type: 'spring', stiffness: 300 }}
                  />

                  <motion.div
                    className="border border-border/50 bg-card/50 backdrop-blur-sm rounded-xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                    whileHover={{ x: 4 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                          <GraduationCap size={18} />
                        </div>
                        <h3 className="font-semibold text-lg">{entry.company}</h3>
                      </div>
                    </div>

                    <p className="text-primary font-medium mb-2">{entry.role}</p>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        {entry.period}
                      </span>
                      {entry.location && (
                        <span className="flex items-center gap-1.5">
                          <MapPin size={14} />
                          {entry.location}
                        </span>
                      )}
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {entry.description}
                    </p>
                  </motion.div>
                </div>
              </ScrollReveal>
            </ErrorBoundary>
          ))}
        </div>
      </div>
    </section>
  );
}
