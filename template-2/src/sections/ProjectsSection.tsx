import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef } from 'react';
import { Github } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import intellicrime1 from '../assets/projects/intellicrime-1.jpg';
import intellicrime2 from '../assets/projects/intellicrime-2.jpg';
import intellicrime3 from '../assets/projects/intellicrime-3.jpg';
import lancerlink1 from '../assets/projects/lancerlink-1.jpg';
import lancerlink2 from '../assets/projects/lancerlink-2.jpg';
import lancerlink3 from '../assets/projects/lancerlink-3.jpg';
import uce1 from '../assets/projects/project-1.jpg';
import uce2 from '../assets/projects/project-2.jpg';
import uce3 from '../assets/projects/project-3.jpg';

interface Project {
  number: string;
  name: string;
  category: string;
  githubUrl: string;
  col1Images: [string, string];
  col2Image: string;
}

const PROJECTS: Project[] = [
  {
    number: '01',
    name: 'IntelliCrime System',
    category: 'Academic',
    githubUrl: 'https://github.com/saadisafdar/intellicrime-system',
    col1Images: [intellicrime1, intellicrime2],
    col2Image: intellicrime3,
  },
  {
    number: '02',
    name: 'LancerLink',
    category: 'Academic',
    githubUrl: 'https://github.com/saadisafdar/lancerlink',
    col1Images: [lancerlink1, lancerlink2],
    col2Image: lancerlink3,
  },
  {
    number: '03',
    name: 'Other Projects/ Personal Projects',
    category: 'Personal',
    githubUrl: 'https://github.com/saadisafdar?tab=repositories',
    col1Images: [uce1, uce2],
    col2Image: uce3,
  },
];

function ProjectCard({
  project,
  index,
  totalCards,
  progress,
  range,
  targetScale,
}: {
  project: Project;
  index: number;
  totalCards: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}) {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="sticky top-24 h-[70vh] md:top-32">
      <motion.div
        className="rounded-[40px] border-2 border-[#D7E2EA] p-4 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
        style={{
          scale,
          top: `${index * 28}px`,
          position: 'relative',
          background: '#0C0C0C',
          transformOrigin: 'top center',
          zIndex: totalCards - index,
        }}
      >
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <span
            className="hero-heading font-black leading-none"
            style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
          >
            {project.number}
          </span>
          <div className="flex flex-col">
            <span className="text-sm font-light uppercase tracking-widest text-[#D7E2EA] opacity-60">
              {project.category}
            </span>
            <span
              className="font-medium uppercase text-[#D7E2EA]"
              style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
            >
              {project.name}
            </span>
          </div>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-full border-2 border-[#D7E2EA] px-8 py-3 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10 sm:px-10 sm:py-3.5 sm:text-base"
          >
            <Github className="h-5 w-5" strokeWidth={1.75} />
            GitHub
          </a>
        </div>

        <div className="flex gap-3 sm:gap-4">
          <div className="flex w-[40%] flex-col gap-3 sm:gap-4">
            <img
              src={project.col1Images[0]}
              alt={`${project.name} screenshot 1`}
              loading="lazy"
              className="w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            />
            <img
              src={project.col1Images[1]}
              alt={`${project.name} screenshot 2`}
              loading="lazy"
              className="w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            />
          </div>
          <div className="w-[60%]">
            <img
              src={project.col2Image}
              alt={`${project.name} screenshot 3`}
              loading="lazy"
              className="h-full w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const totalCards = PROJECTS.length;

  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 rounded-t-[40px] px-5 py-12 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:py-14 md:-mt-14 md:rounded-t-[60px] md:px-10 md:py-16"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading mb-10 text-center font-black uppercase leading-none tracking-tight sm:mb-12 md:mb-16"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Project
        </h2>
      </FadeIn>

      <div ref={containerRef} className="mx-auto max-w-6xl">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={index}
            totalCards={totalCards}
            progress={scrollYProgress}
            range={[index / totalCards, 1]}
            targetScale={1 - (totalCards - 1 - index) * 0.03}
          />
        ))}
      </div>
    </section>
  );
}
