import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode, useState } from 'react';
import { cn } from '../lib/utils';
import FadeIn from './FadeIn';

export interface CourseItem {
  title: string;
  description: string;
  link: string;
  icon?: ReactNode;
}

const canHover = () =>
  typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches;

export function CourseHoverEffect({
  items,
  className,
}: {
  items: CourseItem[];
  className?: string;
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3', className)}
    >
      {items.map((item, idx) => (
        <FadeIn key={item.link} delay={idx * 0.1} className="h-full">
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block h-full w-full p-2"
            onMouseEnter={() => canHover() && setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 block h-full w-full rounded-3xl bg-slate-800/[0.8]"
                  layoutId="courseHoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.15 } }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card>
              {item.icon && <div className="text-zinc-100">{item.icon}</div>}
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </Card>
          </a>
        </FadeIn>
      ))}
    </div>
  );
}

export function Card({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        'relative z-20 h-full w-full overflow-hidden rounded-2xl border border-white/[0.2] bg-black p-4 group-hover:border-slate-700',
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}

export function CardTitle({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <h4 className={cn('mt-4 font-bold tracking-wide text-zinc-100', className)}>
      {children}
    </h4>
  );
}

export function CardDescription({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <p
      className={cn(
        'mt-8 text-sm leading-relaxed tracking-wide text-zinc-400',
        className
      )}
    >
      {children}
    </p>
  );
}
