import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { FindMeSection } from "./components/FindMeSection";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-darkBg text-white selection:bg-purple-500/30 selection:text-white">
      {/* Global Navbar */}
      <Navbar />

      {/* Main Portfolio Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <FindMeSection />
      </main>

      {/* Footer & Contact */}
      <Footer />
    </div>
  );
}

export default App;
