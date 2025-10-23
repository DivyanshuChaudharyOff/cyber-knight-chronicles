import { ArrowLeft, Shield, Sparkles, Swords } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const SocAnalystBlog = () => {
  return (
    <div className="min-h-screen py-12 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-primary/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <Sparkles
          key={i}
          className="fixed text-primary/20 magic-particle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.5}s`,
            fontSize: `${12 + Math.random() * 8}px`
          }}
        />
      ))}

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Back button */}
        <Link to="/">
          <Button variant="ghost" className="mb-8 group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Button>
        </Link>

        {/* Hero section with anime-style title */}
        <div className="text-center mb-16 relative">
          <div className="inline-flex items-center gap-4 mb-6">
            <Shield className="w-12 h-12 text-primary animate-pulse" />
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground">
              SOC Analyst L1
            </h1>
            <Swords className="w-12 h-12 text-accent animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
          <p className="text-xl text-primary font-semibold mb-2">National Informatics Centre (NiC)</p>
          <p className="text-muted-foreground">Central Vista, New Delhi • Current Position</p>
          
          {/* Decorative line */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-primary"></div>
            <Sparkles className="w-5 h-5 text-primary" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
        </div>

        {/* Main blog content */}
        <article className="quest-card space-y-8 animate-fade-in">
          {/* Introduction */}
          <div className="space-y-4">
            <p className="text-lg leading-relaxed text-foreground/90">
              As one of the first L1 analysts to join the Security Operations Center (SOC) at Central Vista, 
              I play a key role in safeguarding the integrity of critical infrastructure for one of India's 
              most ambitious national projects. My responsibilities span across real-time monitoring, incident 
              triage, and collaboration with higher-level teams to ensure the seamless operation of our 
              cybersecurity efforts.
            </p>
          </div>

          {/* What I Do Section */}
          <div className="space-y-4">
            <h2 className="text-3xl font-heading font-bold text-accent flex items-center gap-3">
              <Shield className="w-8 h-8" />
              What I Do
            </h2>
            <div className="pl-4 border-l-4 border-primary/30 space-y-4">
              <p className="text-foreground/90 leading-relaxed">
                At the core of my work is the real-time monitoring and analysis of security events through 
                SIEM (Security Information and Event Management) tools. I'm constantly scanning for potential 
                threats, analyzing patterns, and identifying vulnerabilities that could impact the security 
                of our systems. When an incident occurs, I'm the first line of defense, triaging it promptly 
                and escalating it to the L2 or L3 teams when necessary, all while maintaining clear and 
                detailed documentation.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                I also took the initiative to design and implement the official Standard Operating Procedures 
                (SOPs) for our SOC. This has been instrumental in streamlining our processes, ensuring 
                consistency in how we respond to incidents, and maintaining high standards of operational 
                excellence.
              </p>
            </div>
          </div>

          {/* Collaboration & Growth Section */}
          <div className="space-y-4">
            <h2 className="text-3xl font-heading font-bold text-accent flex items-center gap-3">
              <Swords className="w-8 h-8" />
              Collaboration & Growth
            </h2>
            <div className="pl-4 border-l-4 border-primary/30 space-y-4">
              <p className="text-foreground/90 leading-relaxed">
                Working in a SOC isn't just about monitoring alerts; it's about constant collaboration. 
                I work closely with L2 and L3 teams, diving deep into complex investigations, and learning 
                from the best in the field. It's a unique blend of technical expertise and teamwork that 
                drives our success in mitigating threats and securing sensitive data.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                The fast-paced, ever-evolving nature of this role keeps me on my toes. I'm continually 
                adapting to new tools, techniques, and emerging threats in the cybersecurity landscape. 
                It's this constant learning and growth that keeps me passionate about my work and motivated 
                to stay ahead of the curve.
              </p>
            </div>
          </div>

          {/* Why It's Exciting Section */}
          <div className="space-y-4">
            <h2 className="text-3xl font-heading font-bold text-accent flex items-center gap-3">
              <Sparkles className="w-8 h-8" />
              Why It's Exciting
            </h2>
            <div className="pl-4 border-l-4 border-primary/30">
              <p className="text-foreground/90 leading-relaxed">
                Being part of the Central Vista SOC is more than just a job; it's an opportunity to 
                contribute to the protection of India's digital backbone, ensuring that this monumental 
                project remains secure from cyber threats. Every day brings new challenges — whether it's 
                investigating a new type of attack or refining our procedures for better efficiency. This 
                role is the perfect balance of responsibility and opportunity, and it's a privilege to be 
                part of such a high-impact initiative.
              </p>
            </div>
          </div>

          {/* Conclusion Section */}
          <div className="space-y-4">
            <h2 className="text-3xl font-heading font-bold text-accent flex items-center gap-3">
              <Shield className="w-8 h-8" />
              In Conclusion
            </h2>
            <div className="pl-4 border-l-4 border-primary/30">
              <p className="text-foreground/90 leading-relaxed">
                The work I'm doing at NIC is not just about responding to threats; it's about building a 
                resilient cybersecurity infrastructure for a national project that will stand the test of 
                time. As I continue in this role, I'm excited to keep learning, evolving, and contributing 
                to the safety and success of Central Vista's digital systems.
              </p>
            </div>
          </div>

          {/* Decorative footer */}
          <div className="pt-8 flex items-center justify-center gap-4">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </div>
        </article>

        {/* Back button at bottom */}
        <div className="mt-12 text-center">
          <Link to="/">
            <Button className="group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Return to Portfolio
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SocAnalystBlog;
