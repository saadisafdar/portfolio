'use client';

import { useEffect, useRef, useCallback } from 'react';

interface GridBackgroundProps {
  className?: string;
  dotColor?: string;
  lineColor?: string;
  dotSize?: number;
  spacing?: number;
}

export default function GridBackground({
  className = '',
  dotColor = 'rgba(34, 197, 94, 0.15)',
  lineColor = 'rgba(34, 197, 94, 0.05)',
  dotSize = 1.5,
  spacing = 40,
}: GridBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const w = rect.width;
    const h = rect.height;

    ctx.clearRect(0, 0, w, h);

    const mouse = mouseRef.current;

    for (let x = spacing; x < w; x += spacing) {
      for (let y = spacing; y < h; y += spacing) {
        const dx = mouse.x - x;
        const dy = mouse.y - y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 150;
        const influence = Math.max(0, 1 - dist / maxDist);

        const currentDotSize = dotSize + influence * 2;
        const alpha = 0.08 + influence * 0.5;

        ctx.beginPath();
        ctx.arc(x, y, currentDotSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34, 197, 94, ${alpha})`;
        ctx.fill();
      }
    }

    ctx.strokeStyle = lineColor;
    ctx.lineWidth = 0.5;

    for (let x = spacing; x < w; x += spacing) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }
    for (let y = spacing; y < h; y += spacing) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }
  }, [dotSize, spacing, lineColor]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let rafId: number | null = null;

    const handleMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
      if (rafId === null) {
        rafId = requestAnimationFrame(() => {
          draw();
          rafId = null;
        });
      }
    };

    const handleLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
      draw();
    };

    draw();

    window.addEventListener('mousemove', handleMouse, { passive: true });
    window.addEventListener('mouseleave', handleLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouse);
      window.removeEventListener('mouseleave', handleLeave);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ zIndex: 0 }}
    />
  );
}
