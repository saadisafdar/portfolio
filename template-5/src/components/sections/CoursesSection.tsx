'use client';

import { motion } from 'motion/react';
import ScrollReveal from '@/components/ui/scroll-reveal';
import ErrorBoundary from '@/components/ui/error-boundary';
import GridBackground from '@/components/ui/grid-background';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, Award } from 'lucide-react';
import portfolioData from '@/data/portfolio.json';

const platformColors: Record<string, string> = {
  Coursera: 'bg-blue-500/10 text-blue-400',
  'Google Developers': 'bg-green-500/10 text-green-400',
  Credly: 'bg-orange-500/10 text-orange-400',
  'Microsoft Learn': 'bg-sky-500/10 text-sky-400',
  Kaggle: 'bg-cyan-500/10 text-cyan-400',
  'HubSpot Academy': 'bg-amber-500/10 text-amber-400',
  Anthropic: 'bg-rose-500/10 text-rose-400',
  'LinkedIn Learning': 'bg-blue-600/10 text-blue-400',
  Forage: 'bg-purple-500/10 text-purple-400',
};

export default function CoursesSection() {
  return (
    <section id="courses" className="py-24 px-6 bg-secondary/30 relative overflow-hidden">
      <GridBackground dotColor="rgba(34, 197, 94, 0.08)" spacing={50} dotSize={1} />

      <div className="max-w-6xl mx-auto relative z-10">
        <ErrorBoundary>
          <ScrollReveal direction="up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Courses &amp; <span className="text-primary">Certifications</span>
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full mb-8" />
          </ScrollReveal>
        </ErrorBoundary>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolioData.courses.map((course, i) => (
            <ErrorBoundary key={course.platform}>
              <ScrollReveal direction="up" delay={0.05 * i}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <Card className="group h-full border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                    <CardContent className="p-5">
                      <div className="flex items-start justify-between mb-3">
                        <div className={`p-2 rounded-lg ${platformColors[course.platform] || 'bg-primary/10 text-primary'} group-hover:scale-110 transition-transform`}>
                          <Award size={18} />
                        </div>
                        <motion.a
                          href={course.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center h-8 w-8 rounded-md text-muted-foreground hover:text-primary hover:bg-accent transition-colors"
                          whileHover={{ scale: 1.1, rotate: 15 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ExternalLink size={14} />
                        </motion.a>
                      </div>

                      <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                        {course.platform}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {course.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </ScrollReveal>
            </ErrorBoundary>
          ))}
        </div>
      </div>
    </section>
  );
}
