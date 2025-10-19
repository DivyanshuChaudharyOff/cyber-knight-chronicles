import { Award, Trophy } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      name: "CompTIA Security+",
      code: "SY0-701",
      issuer: "CompTIA",
      year: "2024",
      type: "Professional"
    },
    {
      name: "Introduction to Cybersecurity",
      issuer: "Cisco",
      year: "2024",
      type: "Foundational"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 relative bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <Trophy className="w-8 h-8 text-accent" />
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              Trophies
            </h2>
            <Trophy className="w-8 h-8 text-accent" />
          </div>
          <p className="text-muted-foreground text-lg">Achievements & Honors</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="quest-card group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="relative">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-accent/20">
                    <Award className="w-8 h-8 text-accent" />
                  </div>
                  <div className="flex-1">
                    <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs rounded-full border border-primary mb-2">
                      {cert.type}
                    </span>
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                      {cert.name}
                    </h3>
                    {cert.code && (
                      <p className="text-accent font-mono text-sm mb-2">
                        [{cert.code}]
                      </p>
                    )}
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{cert.issuer}</span>
                      <span className="font-semibold text-accent">{cert.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
