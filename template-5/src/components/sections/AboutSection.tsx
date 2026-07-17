'use client';

import { motion } from 'motion/react';
import ScrollReveal from '@/components/ui/scroll-reveal';
import ErrorBoundary from '@/components/ui/error-boundary';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, GraduationCap, Code2, Brain, Database, Wrench, Cloud } from 'lucide-react';
import portfolioData from '@/data/portfolio.json';

const skillCategories = [
  { label: 'Languages', icon: Code2, skills: portfolioData.skills.languages },
  { label: 'Frontend', icon: Code2, skills: portfolioData.skills.frontend },
  { label: 'Backend', icon: Database, skills: portfolioData.skills.backend },
  { label: 'AI / ML', icon: Brain, skills: portfolioData.skills.ai },
  { label: 'Tools', icon: Wrench, skills: portfolioData.skills.tools },
  { label: 'Cloud', icon: Cloud, skills: portfolioData.skills.cloud },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <ErrorBoundary>
          <ScrollReveal direction="up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full mb-8" />
          </ScrollReveal>
        </ErrorBoundary>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <ErrorBoundary>
            <ScrollReveal direction="left" delay={0.2}>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                {portfolioData.personal.description}
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
              <div className="space-y-4">
                {skillCategories.map((cat, i) => (
                  <ScrollReveal key={cat.label} direction="right" delay={0.1 * i}>
                    <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 group">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <cat.icon size={16} className="text-primary group-hover:scale-110 transition-transform" />
                          <span className="font-medium text-sm">{cat.label}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {cat.skills.map((skill) => (
                            <Badge key={skill} variant="secondary" className="text-xs hover:bg-primary/20 hover:text-primary transition-colors cursor-default">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                ))}
              </div>
            </ScrollReveal>
          </ErrorBoundary>
        </div>
      </div>
    </section>
  );
}
