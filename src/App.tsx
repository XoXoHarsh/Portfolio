// src/App.tsx
import { useEffect } from "react";
import Navbar from "./components/ui/Navbar";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import ProfilesSection from "./components/sections/ProfilesSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ContactSection from "./components/sections/ContactSection";
import useActiveSection from "./hooks/useActiveSection";
import "./app.css";

const App = () => {
  const activeSection = useActiveSection();

  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar activeSection={activeSection} />
      <main className="pt-16">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProfilesSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default App;
