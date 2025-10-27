import { Shield, Swords, Network, Code } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Defensive Arsenal",
      icon: Shield,
      color: "text-secondary",
      skills: ["Splunk", "Nessus", "Eramba", "OWASP ZAP"]
    },
    {
      title: "Offensive Weaponry",
      icon: Swords,
      color: "text-primary",
      skills: ["Nmap", "Burp Suite", "Metasploit"]
    },
    {
      title: "Network & Forensics",
      icon: Network,
      color: "text-accent",
      skills: ["Wireshark", "TCP/IP", "Network Analysis", "Packet Inspection"]
    },
    {
      title: "Development Magic",
      icon: Code,
      color: "text-steel",
      skills: ["Python", "Flask", "Node.js", "React", "Full-Stack Development"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              Skill Tree
            </h2>
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <p className="text-muted-foreground text-lg">Abilities & Expertise</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div 
                key={index}
                className="quest-card animate-fade-in hover-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-lg bg-card ${category.color}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-heading font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, idx) => (
                    <span 
                      key={idx}
                      className="px-4 py-2 bg-muted rounded-full text-foreground border border-border hover:border-primary hover:bg-primary/10 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
