import { Shield, Swords, Network, Code } from "lucide-react";
import SkillTreeGrow from "./animations/SkillTreeGrow";

const Skills = () => {
  const skillCategories = [
    {
      title: "Defensive Arsenal",
      icon: Shield,
      color: "text-secondary",
      skills: [
        { name: "Splunk", level: 90 },
        { name: "Nessus", level: 85 },
        { name: "Eramba", level: 80 },
        { name: "OWASP ZAP", level: 75 }
      ]
    },
    {
      title: "Offensive Weaponry",
      icon: Swords,
      color: "text-primary",
      skills: [
        { name: "Nmap", level: 90 },
        { name: "Burp Suite", level: 85 },
        { name: "Metasploit", level: 80 }
      ]
    },
    {
      title: "Network & Forensics",
      icon: Network,
      color: "text-accent",
      skills: [
        { name: "Wireshark", level: 95 },
        { name: "TCP/IP", level: 90 },
        { name: "Network Analysis", level: 88 },
        { name: "Packet Inspection", level: 85 }
      ]
    },
    {
      title: "Development Magic",
      icon: Code,
      color: "text-steel",
      skills: [
        { name: "Python", level: 95 },
        { name: "Flask", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "React", level: 90 },
        { name: "Full-Stack Development", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="mb-6">
            <SkillTreeGrow growing={true} />
          </div>
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
                
                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className={`h-full ${category.color.replace('text-', 'bg-')} rounded-full transition-all duration-1000 ease-out`}
                          style={{
                            width: `${skill.level}%`,
                            animationDelay: `${idx * 100}ms`
                          }}
                        />
                      </div>
                    </div>
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
