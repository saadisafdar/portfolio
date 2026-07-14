import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '../lib/utils';

interface CourseItem {
  title: string;
  description: string;
  link: string;
  icon?: React.ReactNode;
}

// ─── Shared background highlight that slides between hovered cards ───────────
function HoverBackground({ id }: { id: string }) {
  return (
    <motion.span
      className="absolute inset-0 block h-full w-full rounded-3xl bg-slate-800/[0.8]"
      layoutId={id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.15 } }}
      exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
    />
  );
}

// ─── Individual dark card ────────────────────────────────────────────────────
function CourseCard({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
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

function CourseCardTitle({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <h4
      className={cn(
        'mt-4 font-bold tracking-wide text-zinc-100',
        className
      )}
    >
      {children}
    </h4>
  );
}

function CourseCardDescription({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
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

// ─── Public export: the grid of hover-effect course cards ───────────────────
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
      className={cn(
        'grid grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-3',
        className
      )}
    >
      {items.map((item, idx) => (
        <motion.div
          key={item.link}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '50px', amount: 0 }}
          transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block h-full w-full p-2"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            /* Reset hover state on touch so no card stays stuck on mobile */
            onTouchEnd={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <HoverBackground id="course-hover-bg" />
              )}
            </AnimatePresence>

            <CourseCard>
              {item.icon && (
                <div className="mb-1 text-zinc-300">{item.icon}</div>
              )}
              <CourseCardTitle>{item.title}</CourseCardTitle>
              <CourseCardDescription>{item.description}</CourseCardDescription>
            </CourseCard>
          </a>
        </motion.div>
      ))}
    </div>
  );
}
