import { GraduationCap, BookOpen } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      specialization: "Cybersecurity",
      institution: "University of Petroleum and Energy Studies",
      period: "2021 - 2025",
      grade: "CGPA: 6.8"
    },
    {
      degree: "Class 12",
      institution: "Ryan International School",
      period: "2021",
      grade: "78%"
    },
    {
      degree: "Class 10",
      institution: "Ryan International School",
      period: "2019",
      grade: "82%"
    }
  ];

  return (
    <section id="education" className="py-20 px-4 relative bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <GraduationCap className="w-8 h-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              The Guild
            </h2>
            <GraduationCap className="w-8 h-8 text-primary" />
          </div>
          <p className="text-muted-foreground text-lg">Training & Knowledge</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                  {edu.specialization && (
                    <p className="text-primary font-medium mb-2">
                      {edu.specialization}
                    </p>
                  )}
                  <p className="text-foreground/80 mb-2">
                    {edu.institution}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{edu.period}</span>
                    <span className="font-semibold text-accent">{edu.grade}</span>
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

export default Education;
