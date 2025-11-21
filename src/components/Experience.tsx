import { Sword, Calendar, MapPin, Shield } from "lucide-react";
import { QuestParchment } from "./animations/QuestParchment";
import { Link } from "react-router-dom";

const Experience = () => {
  const jobs = [
    {
      title: "SOC Analyst L1",
      organization: "National Informatics Centre (NiC)",
      location: "Central Vista, New Delhi",
      period: "Current Job",
      status: "In Progress",
      link: "/soc-analyst",
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
      title: "Cloud Security Intern",
      organization: "DCM Shriram Ltd",
      location: "Lucknow",
      period: "January 2025 – May 2025",
      status: "Completed",
      link: "/cloud-security",
      achievements: [
        "Assisted in securing and optimizing cloud infrastructure across AWS environments",
        "Implemented IAM policies, access controls, and compliance best practices",
        "Analyzed cloud resource configurations to identify and mitigate vulnerabilities",
        "Collaborated with DevOps and Security teams to strengthen cloud security posture",
        "Documented findings, incident responses, and contributed to internal security reports"
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
          <div className="flex justify-center mb-6">
            <QuestParchment />
          </div>
          <div className="inline-flex items-center gap-3 mb-4">
            <Sword className="w-8 h-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              Jobs
            </h2>
            <Sword className="w-8 h-8 text-primary" />
          </div>
          <p className="text-muted-foreground text-lg">Experience & Adventures</p>
        </div>

        <div className="grid gap-8">
          {jobs.map((job, index) => {
            const JobCard = (
              <div 
                className={`quest-card group ${job.link ? 'cursor-pointer hover:scale-[1.02] transition-transform' : ''}`}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-heading font-semibold text-accent">
                        {job.title}
                      </h3>
                    <span className={`px-4 py-1.5 font-ink text-sm font-bold uppercase tracking-wider transform -rotate-3 shadow-lg ${
                      job.status === "In Progress" 
                        ? "bg-primary/90 text-primary-foreground border-2 border-primary" 
                        : "bg-muted text-muted-foreground border-2 border-border"
                    }`}>
                      {job.status}
                    </span>
                  </div>
                  <p className="text-xl text-foreground mb-3">
                    {job.organization}
                  </p>
                </div>
                <Shield className="w-12 h-12 text-primary/30 group-hover:text-primary transition-colors" />
              </div>

              <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{job.period}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{job.location}</span>
                </div>
              </div>

              <div className="space-y-3">
                {job.achievements.map((achievement, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p className="text-foreground/90">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
            );

            return job.link ? (
              <Link key={index} to={job.link}>
                {JobCard}
              </Link>
            ) : (
              <div key={index}>
                {JobCard}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
