import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Projects from "@/components/Projects";
import GitHubActivity from "@/components/GitHubActivity";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import FloatingCTA from "@/components/FloatingCTA";
import CustomCursor from "@/components/CustomCursor";

const Index = () => {
  return (
    <div className="min-h-screen">
      <CustomCursor />
      <Navigation />
      <Hero />
      <Stats />
      <About />
      <Achievements />
      <Experience />
      <GitHubActivity />
      <Education />
      <Skills />
      <Certifications />
      <Projects />
      <Contact />
      <FloatingCTA />
    </div>
  );
};

export default Index;
