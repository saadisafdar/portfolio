import { Mail, Github, Linkedin } from 'lucide-react';
import FadeIn from '../components/FadeIn';

const CONTACT_LINKS = [
  {
    name: 'Email',
    href: 'mailto:saadisafder@yahoo.com', // user's email address, e.g. mailto:name@example.com
    Icon: Mail,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/saadisafdar', // user's GitHub profile URL
    Icon: Github,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/saadisafdar/', // user's LinkedIn profile URL
    Icon: Linkedin,
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="flex flex-col items-center gap-10 px-5 py-16 sm:gap-12 sm:px-8 sm:py-20 md:gap-14 md:px-10 md:py-24"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading text-center font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Let&apos;s Talk
        </h2>
      </FadeIn>

      <FadeIn delay={0.15} y={20}>
        <p
          className="max-w-[480px] text-center font-light leading-relaxed text-[#D7E2EA]"
          style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.25rem)' }}
        >
          Have a project in mind or just want to say hi? Reach out through any
          of the channels below.
        </p>
      </FadeIn>

      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
        {CONTACT_LINKS.map((link, i) => (
          <FadeIn key={link.name} delay={0.25 + i * 0.1} y={20}>
            <a
              href={link.href}
              target={link.name === 'Email' ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-full border-2 border-[#D7E2EA] px-8 py-3 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10 sm:px-10 sm:py-3.5 sm:text-base"
            >
              <link.Icon className="h-5 w-5" strokeWidth={1.75} />
              {link.name}
            </a>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
