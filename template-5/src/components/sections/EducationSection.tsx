'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import ErrorBoundary from '@/components/ui/error-boundary';
import { GraduationCap } from 'lucide-react';
import portfolioData from '@/data/portfolio.json';

function TimelineEntry({ entry, index }: { entry: (typeof portfolioData.education)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'start 0.3'],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [index % 2 === 0 ? -60 : 60, 0]
  );

  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className="relative grid grid-cols-[1fr_48px_1fr] items-center pb-12 last:pb-0">
      {/* Left content */}
      <div>
        {isLeft && (
          <motion.div style={{ opacity, x }} className="text-right pr-4">
            <div className="inline-block text-left">
              <h3 className="font-semibold text-lg mb-1">{entry.degree}</h3>
              <p className="text-primary text-sm font-medium">{entry.institution}</p>
              <p className="text-xs text-muted-foreground mt-1 font-[family-name:var(--font-jetbrains)]">{entry.period}</p>
            </div>
          </motion.div>
        )}
      </div>

      {/* Center node */}
      <div className="flex justify-center">
        <motion.div
          className="relative z-10 w-10 h-10 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ delay: 0.2 + index * 0.15, type: 'spring', stiffness: 300, damping: 15 }}
        >
          <GraduationCap size={18} className="text-primary" />
        </motion.div>
      </div>

      {/* Right content */}
      <div>
        {!isLeft && (
          <motion.div style={{ opacity, x }} className="pl-4">
            <div className="inline-block text-left">
              <h3 className="font-semibold text-lg mb-1">{entry.degree}</h3>
              <p className="text-primary text-sm font-medium">{entry.institution}</p>
              <p className="text-xs text-muted-foreground mt-1 font-[family-name:var(--font-jetbrains)]">{entry.period}</p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

function TimelineConnector() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.3'],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0">
      <div className="w-px h-full bg-border/50 relative">
        <motion.div
          className="absolute top-0 left-0 w-full bg-primary/40 origin-top"
          style={{ scaleY, height: '100%' }}
        />
      </div>
    </div>
  );
}

export default function EducationSection() {
  return (
    <section id="education" className="py-24 px-6 bg-secondary/30 relative">
      <div className="max-w-5xl mx-auto">
        <ErrorBoundary>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-primary">Education</span>
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full mb-12" />
          </motion.div>
        </ErrorBoundary>

        <div className="relative">
          <TimelineConnector />
          {portfolioData.education.map((entry, i) => (
            <ErrorBoundary key={entry.institution}>
              <TimelineEntry entry={entry} index={i} />
            </ErrorBoundary>
          ))}
        </div>
      </div>
    </section>
  );
}
