'use client';

import { type ReactNode } from 'react';
import { motion, type Variants } from 'motion/react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  blur?: boolean;
}

const directionOffsets = {
  up: { y: 40 },
  down: { y: -40 },
  left: { x: 40 },
  right: { x: -40 },
  none: {},
};

export default function ScrollReveal({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration = 0.6,
  distance = 40,
  once = true,
  blur = true,
}: ScrollRevealProps) {
  const offset = directionOffsets[direction];
  const initialOffset: Record<string, number> = {};
  if ('y' in offset) initialOffset.y = distance * (offset.y > 0 ? 1 : -1);
  if ('x' in offset) initialOffset.x = distance * (offset.x > 0 ? 1 : -1);

  const variants: Variants = {
    hidden: {
      opacity: 0,
      filter: blur ? 'blur(4px)' : 'blur(0px)',
      ...initialOffset,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-80px' }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
