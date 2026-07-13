import HeroSection from './sections/HeroSection';
import MarqueeSection from './sections/MarqueeSection';
import AboutSection from './sections/AboutSection';
import CoursesSection from './sections/CoursesSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';

function App() {
  return (
    <main
      className="font-kanit"
      style={{ background: '#0C0C0C', overflowX: 'clip' }}
    >
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <CoursesSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}

export default App;
