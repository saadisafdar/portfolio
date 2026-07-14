import {
  GraduationCap,
  Award,
  BookOpen,
  BarChart3,
  Code2,
  Megaphone,
  Sparkles,
  Linkedin,
  Briefcase,
} from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { CourseHoverEffect, CourseItem } from '../components/CourseHoverEffect';

const ICON_CLASS = 'h-8 w-8';

const COURSES: CourseItem[] = [
  {
    title: 'Coursera',
    description: 'View my certificates',
    link: 'https://coursera.org/share/af4e24c3951c129d60e4a0eba503b5da',
    icon: <GraduationCap className={ICON_CLASS} strokeWidth={1.5} />,
  },
  {
    title: 'Google Developers',
    description: 'View my profile',
    link: 'https://g.dev/saadisafdar',
    icon: <Code2 className={ICON_CLASS} strokeWidth={1.5} />,
  },
  {
    title: 'Credly',
    description: 'View my badges',
    link: 'https://www.credly.com/users/saadisafdar',
    icon: <Award className={ICON_CLASS} strokeWidth={1.5} />,
  },
  {
    title: 'Microsoft Learn',
    description: 'View my profile',
    link: 'https://learn.microsoft.com/en-us/users/saadisafdar/',
    icon: <BookOpen className={ICON_CLASS} strokeWidth={1.5} />,
  },
  {
    title: 'Kaggle',
    description: 'View my profile',
    link: 'https://www.kaggle.com/saadisafdar',
    icon: <BarChart3 className={ICON_CLASS} strokeWidth={1.5} />,
  },
  {
    title: 'HubSpot',
    description: 'View my certification',
    link: 'https://app-na2.hubspot.com/academy/achievements/754pxvx3/en/1/saadi-safdar/digital-marketing-certified',
    icon: <Megaphone className={ICON_CLASS} strokeWidth={1.5} />,
  },
  {
    title: 'Skilljar Anthropic',
    description: 'View my certificate',
    link: 'https://verify.skilljar.com/c/ey2p2ic7pg6h',
    icon: <Sparkles className={ICON_CLASS} strokeWidth={1.5} />,
  },
  {
    title: 'LinkedIn Learning',
    description: 'View my certificate',
    link: 'https://www.linkedin.com/learning/certificates/1ec16043e53de566c12905f41ffab3f96c464fd089f61fcab178ad96b83f2490?trk=share_certificate',
    icon: <Linkedin className={ICON_CLASS} strokeWidth={1.5} />,
  },
  {
    title: 'Forage',
    description: 'View my certificate',
    link: 'https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_6a01b890ab0622a2db104eed_1781431730387_completion_certificate.pdf',
    icon: <Briefcase className={ICON_CLASS} strokeWidth={1.5} />,
  },
];

export default function CoursesSection() {
  return (
    <section
      id="courses"
      className="rounded-t-[40px] bg-white px-5 py-12 sm:rounded-t-[50px] sm:px-8 sm:py-14 md:rounded-t-[60px] md:px-10 md:py-16"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="mb-10 text-center font-black uppercase text-[#0C0C0C] sm:mb-12 md:mb-16"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Courses
        </h2>
      </FadeIn>

      <CourseHoverEffect items={COURSES} className="mx-auto max-w-5xl" />
    </section>
  );
}
