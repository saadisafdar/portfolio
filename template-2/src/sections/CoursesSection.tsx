import { GraduationCap, Award, BookOpen, BarChart3, Database } from 'lucide-react';
import FadeIn from '../components/FadeIn';

// Replace each `#` href with the user's real profile URL on that platform
const COURSES = [
  {
    name: 'Coursera',
    label: 'View my certificates',
    href: 'https://coursera.org/share/af4e24c3951c129d60e4a0eba503b5da', // user's Coursera profile URL
    Icon: GraduationCap,
  },
  {
    name: 'Google Developers',
    label: '',
    href: 'https://g.dev/saadisafdar',
    Icon: ,
  },
  {
    name: 'Credly',
    label: 'View my badges',
    href: 'https://www.credly.com/users/saadisafdar', // user's Credly profile URL
    Icon: Award,
  },
  {
    name: 'Microsoft Learn',
    label: 'View my profile',
    href: 'https://learn.microsoft.com/en-us/users/saadisafdar/', // user's Microsoft Learn profile URL
    Icon: BookOpen,
  },
  {
    name: 'Kaggle',
    label: 'View my profile',
    href: 'https://www.kaggle.com/saadisafdar', // user's Kaggle profile URL
    Icon: BarChart3,
  },
  {
    name: 'HubSpot',
    label: '',
    href: 'https://app-na2.hubspot.com/academy/achievements/754pxvx3/en/1/saadi-safdar/digital-marketing-certified',
    Icon: ,
  },
  {
    name: 'Skilljar Antrophic',
    label: 'View my Certificate',
    href: 'https://verify.skilljar.com/c/ey2p2ic7pg6h', // user's DataCamp profile URL
    Icon: ,
  },
  {
    name: 'Linkedin Learning',
    label: '',
    href: 'https://www.linkedin.com/learning/certificates/1ec16043e53de566c12905f41ffab3f96c464fd089f61fcab178ad96b83f2490?trk=share_certificate',
    Icon: ,
  },
  {
    name: 'Forage',
    label: '',
    href: 'https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_6a01b890ab0622a2db104eed_1781431730387_completion_certificate.pdf',
    Icon: ,
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

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {COURSES.map((course, i) => (
          <FadeIn key={course.name} delay={i * 0.1}>
            <a
              href={course.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-full flex-col gap-4 rounded-3xl border p-7 transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02] sm:p-8"
              style={{
                borderColor: 'rgba(12, 12, 12, 0.15)',
                boxShadow: '0 4px 20px rgba(12, 12, 12, 0.06)',
              }}
            >
              <course.Icon className="h-9 w-9 text-[#0C0C0C]" strokeWidth={1.5} />
              <span
                className="font-medium uppercase text-[#0C0C0C]"
                style={{ fontSize: 'clamp(1rem, 1.8vw, 1.5rem)' }}
              >
                {course.name}
              </span>
              <span
                className="font-light text-[#0C0C0C]"
                style={{ fontSize: 'clamp(0.85rem, 1.3vw, 1.05rem)', opacity: 0.6 }}
              >
                {course.label}
              </span>
            </a>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
