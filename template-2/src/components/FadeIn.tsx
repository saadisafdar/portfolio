import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  as?: keyof typeof motion;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * FadeIn — whileInView entrance animation.
 *
 * Uses `motion[as]` (e.g. motion.div, motion.nav) instead of the
 * `motion.create(as)` + useMemo pattern. motion.create() generates a NEW
 * component type on every call; because useMemo runs after mount, React sees
 * a different component type on the first paint and fires whileInView
 * immediately rather than waiting for the element to scroll into view.
 * Accessing the pre-built motion.* components gives framer-motion a stable,
 * recognised type and makes viewport-triggered animations work correctly.
 */
export default function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  as = 'div',
  className,
  style,
}: FadeInProps) {
  // motion.div, motion.nav, motion.section, etc. are all stable references —
  // no new component type is created on re-render.
  const Tag = motion[as] as typeof motion.div;

  return (
    <Tag
      className={className}
      style={style}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ delay, duration, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </Tag>
  );
}
