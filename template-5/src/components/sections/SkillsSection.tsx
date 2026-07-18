'use client';

import { motion } from 'motion/react';
import ScrollReveal from '@/components/ui/scroll-reveal';
import ErrorBoundary from '@/components/ui/error-boundary';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code2, Layout, Database, Brain, Wrench, Cloud } from 'lucide-react';
import portfolioData from '@/data/portfolio.json';

const skillCategories = [
  { label: 'Languages', icon: Code2, skills: portfolioData.skills.languages, color: 'text-blue-400' },
  { label: 'Frontend', icon: Layout, skills: portfolioData.skills.frontend, color: 'text-cyan-400' },
  { label: 'Backend', icon: Database, skills: portfolioData.skills.backend, color: 'text-orange-400' },
  { label: 'AI / ML', icon: Brain, skills: portfolioData.skills.ai, color: 'text-rose-400' },
  { label: 'Tools', icon: Wrench, skills: portfolioData.skills.tools, color: 'text-amber-400' },
  { label: 'Cloud', icon: Cloud, skills: portfolioData.skills.cloud, color: 'text-emerald-400' },
];

const allSkills = skillCategories.flatMap((cat) => cat.skills);

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  return (
    <div className="relative overflow-hidden py-2">
      <div
        className={`flex gap-3 w-max ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
      >
        {[...items, ...items].map((skill, i) => (
          <Badge
            key={`${skill}-${i}`}
            variant="secondary"
            className="whitespace-nowrap text-sm px-4 py-1.5 bg-primary/5 border-primary/20 text-muted-foreground hover:bg-primary/15 hover:text-primary transition-colors shrink-0"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const mid = Math.ceil(allSkills.length / 2);
  const row1 = allSkills.slice(0, mid);
  const row2 = allSkills.slice(mid);

  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <ErrorBoundary>
          <ScrollReveal direction="up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Skills &amp; <span className="text-primary">Tech Stack</span>
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full mb-8" />
          </ScrollReveal>
        </ErrorBoundary>

        <ErrorBoundary>
          <ScrollReveal direction="up" delay={0.1}>
            <div className="mb-12 space-y-1">
              <MarqueeRow items={row1} />
              <MarqueeRow items={row2} reverse />
            </div>
          </ScrollReveal>
        </ErrorBoundary>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((cat, i) => (
            <ErrorBoundary key={cat.label}>
              <ScrollReveal direction="up" delay={0.05 * i}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <Card className="group h-full border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                    <CardContent className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <div className={`p-2 rounded-lg bg-primary/10 ${cat.color} group-hover:scale-110 transition-transform`}>
                          <cat.icon size={18} />
                        </div>
                        <span className="font-semibold group-hover:text-primary transition-colors">
                          {cat.label}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {cat.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="text-xs group-hover:bg-primary/10 group-hover:text-primary/80 transition-all"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
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
