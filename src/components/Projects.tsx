import { Scroll, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Full-Stack E-commerce Platform",
      description: "Enterprise-level e-commerce solution built with Flask backend and React frontend, featuring Stripe payment integration and comprehensive user management.",
      achievements: [
        "Successfully handled 10,000+ concurrent users",
        "Achieved 0% downtime during peak traffic",
        "Implemented secure payment processing",
        "Built scalable microservices architecture"
      ],
      tech: ["Flask", "React", "Stripe", "PostgreSQL", "Redis"]
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

        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto justify-items-center">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="quest-card group"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-heading font-semibold text-accent flex-1">
                  {project.title}
                </h3>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors cursor-pointer" />
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
