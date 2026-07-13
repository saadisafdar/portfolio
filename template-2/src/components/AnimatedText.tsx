import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

function Char({
  char,
  progress,
  range,
}: {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return <motion.span style={{ opacity }}>{char}</motion.span>;
}

export default function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');
  const totalChars = text.length;
  let charIndex = 0;

  return (
    <p ref={ref} className={className} style={style}>
      {words.map((word, wi) => {
        const start = charIndex;
        charIndex += word.length + 1;
        return (
          <span key={wi} className="inline-block whitespace-nowrap">
            {word.split('').map((char, ci) => {
              const i = start + ci;
              return (
                <Char
                  key={ci}
                  char={char}
                  progress={scrollYProgress}
                  range={[i / totalChars, Math.min(1, (i + 1) / totalChars)]}
                />
              );
            })}
            {wi < words.length - 1 && '\u00A0'}
          </span>
        );
      })}
    </p>
  );
}
