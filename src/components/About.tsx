import { Flame } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <Flame className="w-8 h-8 text-primary ember-pulse" />
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              Campfire Logs
            </h2>
            <Flame className="w-8 h-8 text-primary ember-pulse" />
          </div>
          <p className="text-muted-foreground text-lg">About the Knight</p>
        </div>

        <div className="quest-card parchment-texture">
          <div className="space-y-6">
            <p className="text-lg italic text-card-foreground/80 border-l-4 border-primary pl-6">
              "By the embers I rest, guarding networks and forging defenses."
            </p>
            
            <div className="h-px bg-border my-6"></div>
            
            <p className="text-lg leading-relaxed text-card-foreground">
              I'm <span className="font-heading font-semibold text-accent">Divyanshu Chaudhary</span> — 
              SOC Analyst L1 at National Informatics Centre (NiC), skilled in security monitoring, 
              incident triage, and SOP development. I was among the first analysts of the Central Vista 
              SOC team, where I helped establish the foundational security operations procedures that 
              protect critical infrastructure.
            </p>
            
            <p className="text-lg leading-relaxed text-card-foreground">
              My journey in cybersecurity combines defensive vigilance with offensive understanding. 
              From monitoring security events in real-time to developing comprehensive security protocols, 
              I stand as a guardian in the digital realm, ensuring threats are identified, analyzed, 
              and neutralized before they can cause harm.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
