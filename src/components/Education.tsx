import { GraduationCap, BookOpen } from "lucide-react";
import { GuildCrest } from "./animations/GuildCrest";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      major: "Cybersecurity",
      minor: "Cloud",
      institution: "University of Petroleum and Energy Studies",
      period: "2021 - 2025"
    },
    {
      degree: "Secondary Education",
      institution: "Ryan International School",
      period: "2019 - 2021",
      grades: [
        { level: "Class 12", year: "2021", grade: "78%" },
        { level: "Class 10", year: "2019", grade: "82%" }
      ]
    }
  ];

  return (
    <section id="education" className="py-20 px-4 relative bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <GuildCrest />
          </div>
          <div className="inline-flex items-center gap-3 mb-4">
            <GraduationCap className="w-8 h-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              The Guild
            </h2>
            <GraduationCap className="w-8 h-8 text-primary" />
          </div>
          <p className="text-muted-foreground text-lg">Training & Knowledge</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="quest-card group"
            >
              <div className="flex items-start gap-4 mb-4">
                <BookOpen className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                    {edu.degree}
                  </h3>
                  {(edu as any).major && (
                    <div className="mb-2">
                      <p className="text-primary font-medium">
                        Major: {(edu as any).major}
                      </p>
                      {(edu as any).minor && (
                        <p className="text-accent font-medium">
                          Minor: {(edu as any).minor}
                        </p>
                      )}
                    </div>
                  )}
                  <p className="text-foreground/80 mb-2">
                    {edu.institution}
                  </p>
                  <div className="text-sm text-muted-foreground">
                    <span>{edu.period}</span>
                    {(edu as any).grade && <span className="font-semibold text-accent ml-2">{(edu as any).grade}</span>}
                  </div>
                  {(edu as any).grades && (
                    <div className="mt-3 space-y-1 text-sm">
                      {(edu as any).grades.map((g: any, i: number) => (
                        <div key={i} className="flex justify-between text-foreground/80">
                          <span>{g.level} ({g.year})</span>
                          <span className="font-semibold text-accent">{g.grade}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
