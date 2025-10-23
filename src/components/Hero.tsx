import { Button } from "@/components/ui/button";
import { Download, Scroll } from "lucide-react";
import heroImage from "@/assets/knight-campfire.jpg";
import { KnightBattle } from "./animations/KnightBattle";
import { PixelKnightAttack } from "./animations/PixelKnightAttack";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
        
        {/* Knight Battle Animation */}
        <div className="absolute inset-0 flex items-center justify-center">
          <KnightBattle />
        </div>
        
        {/* Pixel Knight Attack */}
        <PixelKnightAttack />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="magic-particle absolute w-1 h-1 bg-accent rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="ember-glow inline-block mb-6 animate-glow">
          <Scroll className="w-16 h-16 text-primary" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-heading font-bold mb-4 text-foreground drop-shadow-lg">
          Divyanshu Chaudhary
        </h1>
        
        <div className="text-2xl md:text-3xl font-heading text-accent mb-6 drop-shadow-lg">
          Knight of the SOC
        </div>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto drop-shadow">
          SOC Analyst L1 at National Informatics Centre (NiC)
        </p>
        
        <p className="text-base md:text-lg text-foreground/90 mb-8 max-w-2xl mx-auto italic drop-shadow">
          "One of the first L1 members defending Central Vista. Helped design the official SOP for its SOC operations."
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg"
            className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-heading shadow-lg hover:shadow-xl transition-all"
            onClick={() => scrollToSection('experience')}
          >
            View Quests
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-heading shadow-lg hover:shadow-xl transition-all"
            onClick={() => window.open('#', '_blank')}
          >
            <Download className="mr-2" />
            Claim My Scroll
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-accent rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
