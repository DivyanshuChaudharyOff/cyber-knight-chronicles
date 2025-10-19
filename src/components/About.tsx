import { Flame, Feather } from "lucide-react";

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

        <div className="relative">
          {/* Scroll edges */}
          <div className="absolute -top-4 left-0 right-0 h-8 bg-gradient-to-b from-card/80 to-transparent rounded-t-3xl border-t-2 border-x-2 border-border"></div>
          <div className="absolute -bottom-4 left-0 right-0 h-8 bg-gradient-to-t from-card/80 to-transparent rounded-b-3xl border-b-2 border-x-2 border-border"></div>
          
          {/* Main scroll */}
          <div className="scroll-paper rounded-xl p-8 md:p-12 border-2 border-border relative overflow-hidden">
            {/* Decorative quill */}
            <div className="absolute top-4 right-4 opacity-20">
              <Feather className="w-12 h-12 text-primary rotate-45" />
            </div>

            <div className="space-y-6 relative z-10">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-ink ink-text mb-2">
                  The Tale of the Knight
                </h3>
                <div className="w-24 h-1 bg-primary/30 mx-auto rounded-full"></div>
              </div>

              <p className="text-xl font-handwriting ink-text leading-relaxed handwritten italic text-center border-2 border-primary/20 rounded-lg p-4 bg-primary/5">
                "By the embers I rest, guarding networks and forging defenses..."
              </p>
              
              <div className="h-px bg-border/50 my-8 relative">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full"></div>
              </div>
              
              <p className="text-lg font-handwriting ink-text leading-loose handwritten" style={{ animationDelay: '0.1s' }}>
                I'm <span className="font-ink font-semibold text-primary text-xl">Divyanshu Chaudhary</span>, 
                a SOC Analyst L1 at the National Informatics Centre. My days are spent in the digital trenches, 
                monitoring the ever-shifting landscape of cyber threats, triaging alerts, and developing the 
                very procedures that keep our infrastructure secure.
              </p>
              
              <p className="text-lg font-handwriting ink-text leading-loose handwritten" style={{ animationDelay: '0.2s' }}>
                As one of the first analysts at the Central Vista SOC, I helped forge the path for those who 
                follow. From the moment the sun rises until it sets behind the mountains, I stand watch over 
                networks, ensuring that no threat goes unnoticed, no incident unresolved.
              </p>

              <p className="text-lg font-handwriting ink-text leading-loose handwritten" style={{ animationDelay: '0.3s' }}>
                My arsenal includes both defensive shields and offensive blades - from SIEM tools like Splunk 
                to penetration testing frameworks. This dual nature allows me to think like both protector 
                and attacker, understanding vulnerabilities before they can be exploited.
              </p>

              {/* Signature */}
              <div className="mt-12 text-right">
                <p className="text-2xl font-ink ink-text opacity-70">
                  ~ Divyanshu Chaudhary
                </p>
                <p className="text-sm font-handwriting ink-text/60 mt-1">
                  Knight of the SOC
                </p>
              </div>
            </div>

            {/* Ink spots decoration */}
            <div className="absolute bottom-8 left-8 w-3 h-3 rounded-full bg-primary/20 blur-sm"></div>
            <div className="absolute top-20 left-12 w-2 h-2 rounded-full bg-primary/15 blur-sm"></div>
            <div className="absolute bottom-20 right-16 w-2.5 h-2.5 rounded-full bg-primary/20 blur-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
