import { Award, Trophy } from "lucide-react";
import { TrophyReveal } from "./animations/TrophyReveal";

const Certifications = () => {
  const certifications = [
    {
      name: "CompTIA Security+",
      code: "SY0-701",
      issuer: "CompTIA",
      year: "2024",
      type: "Professional",
      link: "https://www.credly.com/badges/08194397-1d86-4bb5-9a11-329cd6de9c99/linked_in_profile"
    },
    {
      name: "Introduction to Cybersecurity",
      issuer: "Cisco",
      year: "2024",
      type: "Foundational",
      link: "https://www.credly.com/badges/97b59bd8-b671-4297-a6e6-12c226f87595/linked_in_profile"
    },
    {
      name: "TATA Group Cybersecurity Analyst Job Simulation",
      issuer: "TATA",
      year: "2025",
      type: "Professional",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gmf3ypEXBj2wvfQWC_ifobHAoMjQs9s6bKS_MBdFqAtuuEGifpT75_1737118124784_completion_certificate.pdf"
    },
    {
      name: "AWS Academy Graduate - AWS Academy Cloud Fundamentals",
      issuer: "AWS Academy",
      year: "2024",
      type: "Foundational",
      link: "https://www.credly.com/badges/84d4aaa9-974e-49d8-8ad1-73d982ed9903/linked_in_profile"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 relative bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <TrophyReveal />
          </div>
          <div className="inline-flex items-center gap-3 mb-4">
            <Trophy className="w-8 h-8 text-accent" />
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              Trophies
            </h2>
            <Trophy className="w-8 h-8 text-accent" />
          </div>
          <p className="text-muted-foreground text-lg">Achievements & Honors</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 justify-items-center">
          {certifications.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="quest-card group relative overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer w-full max-w-md min-h-[200px] flex flex-col"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="relative flex-1">
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
