import FadeIn from '../components/FadeIn';

const SERVICES = [
  {
    number: '01',
    name: 'Web Development',
    description:
      'Building responsive, full-stack web applications using React, TypeScript, and Tailwind CSS, from initial concept through to deployment.',
  },
  {
    number: '02',
    name: 'Backend & APIs',
    description:
      'Designing robust backend systems and RESTful APIs with Python, Flask, and Node.js, built around clean and maintainable architecture.',
  },
  {
    number: '03',
    name: 'Database Design',
    description:
      'Structuring and optimizing relational databases with SQL, Oracle, and MySQL, with a focus on data integrity and real-world performance.',
  },
  {
    number: '04',
    name: 'Computer Vision & Automation',
    description:
      'Developing Python-based automation, computer vision, and machine learning projects using OpenCV, TensorFlow, and scikit-learn.',
  },
  {
    number: '05',
    name: 'UI/UX Design',
    description:
      'Designing clean, modern, and user-focused interfaces with attention to layout, typography, and overall user experience.',
  },
];

export default function ServicesSection() {
  return (
    <section
      id="price"
      className="rounded-t-[40px] bg-white px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="mb-16 text-center font-black uppercase text-[#0C0C0C] sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Services
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-5xl">
        {SERVICES.map((service, i) => (
          <FadeIn key={service.number} delay={i * 0.1}>
            <div
              className="flex gap-6 py-8 sm:gap-10 sm:py-10 md:gap-14 md:py-12"
              style={{
                borderBottom: '1px solid rgba(12, 12, 12, 0.15)',
                borderTop: i === 0 ? '1px solid rgba(12, 12, 12, 0.15)' : undefined,
              }}
            >
              <span
                className="font-black leading-none text-[#0C0C0C]"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {service.number}
              </span>
              <div className="flex flex-col gap-3">
                <h3
                  className="font-medium uppercase text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {service.name}
                </h3>
                <p
                  className="max-w-2xl font-light leading-relaxed text-[#0C0C0C]"
                  style={{
                    fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)',
                    opacity: 0.6,
                  }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
