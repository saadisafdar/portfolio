'use client';

import { motion } from 'motion/react';
import ScrollReveal from '@/components/ui/scroll-reveal';
import ErrorBoundary from '@/components/ui/error-boundary';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Send } from 'lucide-react';
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

const socialLinks = [
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

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <ErrorBoundary>
          <ScrollReveal direction="up" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get In <span className="text-primary">Touch</span>
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-6" />
            <p className="text-muted-foreground max-w-xl mx-auto">
              Have a project in mind or want to collaborate? Feel free to reach out.
              I&apos;m always open to discussing new opportunities and ideas.
            </p>
          </ScrollReveal>
        </ErrorBoundary>

        <div className="grid md:grid-cols-2 gap-6">
          <ErrorBoundary>
            <ScrollReveal direction="left" delay={0.2}>
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm h-full hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-6 space-y-6">
                  <motion.div
                    className="flex items-center gap-4"
                    whileHover={{ x: 4 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a
                        href={`mailto:${portfolioData.personal.email}`}
                        className="hover:text-primary transition-colors"
                      >
                        {portfolioData.personal.email}
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center gap-4"
                    whileHover={{ x: 4 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p>{portfolioData.personal.location}</p>
                    </div>
                  </motion.div>

                  <div className="pt-4 border-t border-border/50">
                    <p className="text-sm text-muted-foreground mb-4">Connect with me</p>
                    <div className="flex items-center gap-4">
                      {socialLinks.map((social, i) => (
                        <motion.a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={social.label}
                          whileHover={{ scale: 1.2, y: -3 }}
                          whileTap={{ scale: 0.9 }}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * i }}
                        >
                          <social.icon size={20} color="#a1a1aa" />
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </ErrorBoundary>

          <ErrorBoundary>
            <ScrollReveal direction="right" delay={0.4}>
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm h-full hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-6">
                  <form
                    action={`mailto:${portfolioData.personal.email}`}
                    method="post"
                    encType="text/plain"
                    className="space-y-4"
                  >
                    <div>
                      <label htmlFor="name" className="text-sm text-muted-foreground mb-1 block">
                        Name
                      </label>
                      <motion.input
                        id="name"
                        name="name"
                        type="text"
                        className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary transition-shadow hover:shadow-sm focus:shadow-md focus:shadow-primary/5"
                        placeholder="Your name"
                        whileFocus={{ scale: 1.01 }}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="text-sm text-muted-foreground mb-1 block">
                        Email
                      </label>
                      <motion.input
                        id="email"
                        name="email"
                        type="email"
                        className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary transition-shadow hover:shadow-sm focus:shadow-md focus:shadow-primary/5"
                        placeholder="your@email.com"
                        whileFocus={{ scale: 1.01 }}
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="text-sm text-muted-foreground mb-1 block">
                        Message
                      </label>
                      <motion.textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary resize-none transition-shadow hover:shadow-sm focus:shadow-md focus:shadow-primary/5"
                        placeholder="Your message..."
                        whileFocus={{ scale: 1.01 }}
                      />
                    </div>
                    <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                      <Button type="submit" className="w-full relative overflow-hidden group">
                        <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                        <Send size={16} className="relative z-10" />
                        <span className="relative z-10">Send Message</span>
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </ScrollReveal>
          </ErrorBoundary>
        </div>
      </div>
    </section>
  );
}
