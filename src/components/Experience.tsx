import { Sword, Calendar, MapPin, Shield } from "lucide-react";

const Experience = () => {
  const quests = [
    {
      title: "SOC Analyst L1",
      organization: "National Informatics Centre (NiC)",
      location: "Central Vista, New Delhi",
      period: "Current Quest",
      status: "Active",
      achievements: [
        "Among the first L1 analysts for Central Vista SOC operations",
        "Designed and implemented official SOP for SOC procedures",
        "Monitor and analyze security events in real-time using SIEM tools",
        "Perform incident triage and escalation following established protocols",
        "Document security incidents and maintain comprehensive logs",
        "Collaborate with L2/L3 teams for complex threat investigations"
      ]
    },
    {
      title: "Social Worker",
      organization: "SpacECE",
      location: "Lucknow",
      period: "Jun 2022 - Jul 2022",
      status: "Completed",
      achievements: [
        "Organized early childhood education awareness campaigns",
        "Engaged with communities to promote educational initiatives",
        "Coordinated outreach programs for underprivileged children",
        "Developed communication materials for public awareness"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <Sword className="w-8 h-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              Quest Log
            </h2>
            <Sword className="w-8 h-8 text-primary" />
          </div>
          <p className="text-muted-foreground text-lg">Experience & Adventures</p>
        </div>

        <div className="space-y-8">
          {quests.map((quest, index) => (
            <div 
              key={index}
              className="quest-card group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-heading font-semibold text-accent">
                      {quest.title}
                    </h3>
                    {quest.status === "Active" && (
                      <span className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full border border-primary animate-glow">
                        Active Quest
                      </span>
                    )}
                  </div>
                  <p className="text-xl text-foreground mb-3">
                    {quest.organization}
                  </p>
                </div>
                <Shield className="w-12 h-12 text-primary/30 group-hover:text-primary transition-colors" />
              </div>

              <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{quest.period}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{quest.location}</span>
                </div>
              </div>

              <div className="space-y-3">
                {quest.achievements.map((achievement, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p className="text-foreground/90">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
