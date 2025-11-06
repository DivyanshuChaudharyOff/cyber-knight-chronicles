import { useState } from "react";
import { Calendar, MapPin, Scroll, Sparkles } from "lucide-react";
import ChronicleScroll from "./animations/ChronicleScroll";

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const milestones = [
    {
      title: "SOC Analyst L1",
      organization: "National Informatics Centre (NiC)",
      location: "Central Vista, New Delhi",
      period: "Current Job",
      year: "2025",
      status: "current",
      description: "Leading SOC operations and designing security procedures for Central Vista infrastructure",
      highlights: [
        "First L1 analyst for Central Vista SOC",
        "Designed official SOP for SOC procedures",
        "Real-time security monitoring with SIEM"
      ]
    },
    {
      title: "Cloud Security Intern",
      organization: "DCM Shriram Ltd",
      location: "Lucknow",
      period: "January 2025 – May 2025",
      year: "2025",
      status: "completed",
      description: "Secured and optimized cloud infrastructure across AWS environments",
      highlights: [
        "Implemented IAM policies & access controls",
        "Vulnerability assessment & mitigation",
        "Cloud security posture strengthening"
      ]
    },
    {
      title: "Social Worker",
      organization: "SpacECE",
      location: "Lucknow",
      period: "Jun 2022 - Jul 2022",
      year: "2022",
      status: "completed",
      description: "Community engagement and educational initiatives for underprivileged children",
      highlights: [
        "Early childhood education campaigns",
        "Community outreach programs",
        "Educational awareness initiatives"
      ]
    }
  ];

  return (
    <section id="timeline" className="py-20 px-4 relative bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <ChronicleScroll />
          </div>
          <div className="inline-flex items-center gap-3 mb-4">
            <Scroll className="w-8 h-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              The Chronicle
            </h2>
            <Scroll className="w-8 h-8 text-primary" />
          </div>
          <p className="text-muted-foreground text-lg">Journey Through Time</p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent transform md:-translate-x-1/2">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-transparent animate-pulse" />
          </div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col md:gap-8`}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10">
                  <div
                    className={`w-6 h-6 rounded-full border-4 transition-all duration-300 ${
                      milestone.status === "current"
                        ? "bg-primary border-primary shadow-[0_0_20px_rgba(var(--primary),0.6)] animate-pulse"
                        : activeIndex === index
                        ? "bg-primary border-primary shadow-[0_0_15px_rgba(var(--primary),0.4)] scale-125"
                        : "bg-background border-primary/50"
                    }`}
                  >
                    {milestone.status === "current" && (
                      <Sparkles className="w-8 h-8 text-primary absolute -top-1 -left-1 animate-pulse" />
                    )}
                  </div>
                  
                  {/* Year Badge */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    <span className="px-3 py-1 bg-primary/20 text-primary font-ink text-xs font-bold uppercase tracking-wider rounded-full border border-primary/30">
                      {milestone.year}
                    </span>
                  </div>
                </div>

                {/* Content Card */}
                <div className={`ml-20 md:ml-0 md:w-5/12 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div
                    className={`quest-card group transition-all duration-300 ${
                      activeIndex === index ? "scale-105 shadow-2xl" : ""
                    }`}
                  >
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2 flex-wrap justify-start">
                        <h3 className="text-2xl font-heading font-semibold text-accent">
                          {milestone.title}
                        </h3>
                        {milestone.status === "current" && (
                          <span className="px-3 py-1 font-ink text-xs font-bold uppercase tracking-wider bg-primary/90 text-primary-foreground border-2 border-primary rounded shadow-lg">
                            Active Quest
                          </span>
                        )}
                      </div>
                      <p className="text-lg text-foreground font-medium mb-2">
                        {milestone.organization}
                      </p>
                      <p className="text-muted-foreground mb-3">
                        {milestone.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-3 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{milestone.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{milestone.location}</span>
                      </div>
                    </div>

                    <div className="space-y-2 pt-3 border-t border-border/50">
                      {milestone.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <p className="text-sm text-foreground/80">{highlight}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Decoration */}
          <div className="flex justify-center mt-12">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-transparent border-2 border-primary/30 flex items-center justify-center">
              <Scroll className="w-8 h-8 text-primary/50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
