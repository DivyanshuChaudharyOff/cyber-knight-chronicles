import { Scroll, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Wazuh SIEM Homelab",
      description: "Enterprise-grade Security Information and Event Management (SIEM) homelab built with Wazuh for real-time threat detection, log analysis, and security monitoring across multiple endpoints.",
      achievements: [
        "Deployed distributed Wazuh architecture with agent monitoring across 15+ endpoints",
        "Configured custom detection rules for malware, intrusion attempts, and file integrity monitoring",
        "Integrated threat intelligence feeds and automated incident response workflows",
        "Reduced mean time to detect (MTTD) security incidents by 70%"
      ],
      tech: ["Wazuh", "ELK Stack", "Linux", "Docker", "OpenSearch"]
    },
    {
      title: "Network Telemetry Analyzer (AI-Powered Packet Sniffer)",
      description: "Built a secure Python-based packet sniffer that captures and anonymizes network metadata before sending it to an AI endpoint for real-time analysis.",
      achievements: [
        "Implemented SHA-256 anonymization, secure HTTPS telemetry, and environment-based configs",
        "Ensured full legal compliance with metadata-only capture (no payloads or PII)",
        "Designed modular, testable architecture with Docker and JSON telemetry storage"
      ],
      tech: ["Python", "Scapy", "Requests", "Docker", "JSON Schema"]
    },
    {
      title: "AWS Honeypot Deployment",
      description: "Cloud-based honeypot system deployed on AWS infrastructure to study intrusion patterns and attack vectors in real-time.",
      achievements: [
        "Captured and analyzed 1000+ attack attempts",
        "Identified emerging threat patterns",
        "Implemented automated threat intelligence gathering",
        "Generated comprehensive security reports"
      ],
      tech: ["AWS", "Python", "ELK Stack", "Docker"]
    },
    {
      title: "Cybersecurity E-Learning Platform",
      description: "Comprehensive educational platform for cybersecurity training with interactive labs, assessments, and progress tracking.",
      achievements: [
        "Created 50+ interactive security modules",
        "Integrated hands-on lab environments",
        "Built gamified learning system",
        "Developed automated assessment tools"
      ],
      tech: ["Node.js", "React", "MongoDB", "Docker"]
    },
    {
      title: "Personal AI Assistant",
      description: "Face-recognition based AI assistant with personality, sarcasm detection, and contextual memory capabilities.",
      achievements: [
        "Implemented real-time face recognition",
        "Built conversational AI with memory",
        "Created custom NLP models",
        "Integrated voice command system"
      ],
      tech: ["Python", "TensorFlow", "OpenCV", "NLP"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <Scroll className="w-8 h-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              Quest Chronicles
            </h2>
            <Scroll className="w-8 h-8 text-primary" />
          </div>
          <p className="text-muted-foreground text-lg">Projects & Accomplishments</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <a
              key={index}
              href="https://github.com/DivyanshuChaudharyOff?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="quest-card group block animate-fade-in hover-scale"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-heading font-semibold text-accent flex-1">
                  {project.title}
                </h3>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              
              <p className="text-foreground/90 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="space-y-2 mb-4">
                {project.achievements.map((achievement, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-foreground/80">{achievement}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                {project.tech.map((tech, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 bg-secondary/20 text-secondary text-xs rounded-full border border-secondary/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
