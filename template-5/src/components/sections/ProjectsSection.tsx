'use client';

import { motion } from 'motion/react';
import ScrollReveal from '@/components/ui/scroll-reveal';
import ErrorBoundary from '@/components/ui/error-boundary';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, Star } from 'lucide-react';
import portfolioData from '@/data/portfolio.json';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <ErrorBoundary>
          <ScrollReveal direction="up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full mb-8" />
          </ScrollReveal>
        </ErrorBoundary>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.projects.map((project, i) => (
            <ErrorBoundary key={project.id}>
              <ScrollReveal direction="up" delay={0.1 * i}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <Card className="group h-full border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <CardContent className="p-6 flex flex-col h-full relative z-10">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-primary font-mono text-sm">
                            {String(project.id).padStart(2, '0')}
                          </span>
                          {project.featured && (
                            <motion.span
                              animate={{ rotate: [0, 15, -15, 0] }}
                              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                            >
                              <Star size={14} className="text-yellow-500 fill-yellow-500" />
                            </motion.span>
                          )}
                        </div>
                        <Badge variant="outline" className="text-xs group-hover:border-primary/50 transition-colors">
                          {project.category}
                        </Badge>
                      </div>

                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="text-[10px] px-2 py-0.5 group-hover:bg-primary/10 group-hover:text-primary/80 transition-all"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 h-8 rounded-md px-3 text-xs font-medium border border-input bg-background shadow-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Github size={14} />
                        Code
                      </motion.a>
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
