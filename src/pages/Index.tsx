import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Timeline from "@/components/Timeline";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Projects from "@/components/Projects";
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
      <Experience />
      <Timeline />
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
