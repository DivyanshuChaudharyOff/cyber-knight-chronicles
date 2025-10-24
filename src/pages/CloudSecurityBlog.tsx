import { ArrowLeft, Cloud, Lock, Sparkles, Zap, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CloudSecurityBlog = () => {
  return (
    <div className="min-h-screen py-12 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-primary/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <Sparkles
          key={i}
          className="fixed text-primary/20 magic-particle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.5}s`,
            fontSize: `${12 + Math.random() * 8}px`
          }}
        />
      ))}

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Back button */}
        <Link to="/">
          <Button variant="ghost" className="mb-8 group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Button>
        </Link>

        {/* Hero section with anime-style title */}
        <div className="text-center mb-16 relative">
          <div className="inline-flex items-center gap-4 mb-6">
            <Cloud className="w-12 h-12 text-primary animate-pulse" />
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground">
              Cloud Security Intern
            </h1>
            <Lock className="w-12 h-12 text-accent animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
          <p className="text-xl text-primary font-semibold mb-2">DCM Shriram Ltd</p>
          <p className="text-muted-foreground">Lucknow • January 2025 – May 2025</p>
          
          {/* Decorative line */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-primary"></div>
            <Sparkles className="w-5 h-5 text-primary" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
        </div>

        {/* Main blog content */}
        <article className="quest-card space-y-8 animate-fade-in">
          {/* Introduction */}
          <div className="space-y-4">
            <p className="text-lg leading-relaxed text-foreground/90">
              During my internship at DCM Shriram Ltd, I had the opportunity to work on optimizing and 
              securing cloud infrastructure within AWS environments, gaining hands-on experience in cloud 
              security and best practices. The experience was a fantastic introduction to the world of cloud 
              security, and I contributed to strengthening the overall security posture of the organization.
            </p>
          </div>

          {/* What I Did Section */}
          <div className="space-y-4">
            <h2 className="text-3xl font-heading font-bold text-accent flex items-center gap-3">
              <Shield className="w-8 h-8" />
              What I Did
            </h2>
            <div className="pl-4 border-l-4 border-primary/30 space-y-4">
              <p className="text-foreground/90 leading-relaxed">
                A key part of my role was assisting in the implementation of Identity and Access Management 
                (IAM) policies and access controls across various AWS services. I worked alongside senior 
                security engineers to ensure compliance with industry best practices, helping to mitigate 
                risks and optimize configurations for enhanced security.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                Additionally, I performed regular audits of cloud resource configurations, identifying 
                vulnerabilities and recommending improvements. These audits helped strengthen the overall 
                security framework and ensure that resources were being utilized efficiently while staying 
                secure.
              </p>
            </div>
          </div>

          {/* Collaboration & Learning Section */}
          <div className="space-y-4">
            <h2 className="text-3xl font-heading font-bold text-accent flex items-center gap-3">
              <Users className="w-8 h-8" />
              Collaboration & Learning
            </h2>
            <div className="pl-4 border-l-4 border-primary/30 space-y-4">
              <p className="text-foreground/90 leading-relaxed">
                One of the most valuable parts of my internship was the collaboration with the DevOps and 
                Security teams. I contributed to discussions on cloud security improvements, gaining insights 
                into how security policies are integrated into cloud-native applications and services. Through 
                this collaboration, I learned about the challenges of balancing performance with security in 
                cloud environments and saw firsthand how the teams work together to resolve security issues 
                quickly and efficiently.
              </p>
            </div>
          </div>

          {/* Documentation & Reporting Section */}
          <div className="space-y-4">
            <h2 className="text-3xl font-heading font-bold text-accent flex items-center gap-3">
              <Sparkles className="w-8 h-8" />
              Documentation & Reporting
            </h2>
            <div className="pl-4 border-l-4 border-primary/30">
              <p className="text-foreground/90 leading-relaxed">
                In addition to hands-on work, I was responsible for documenting my findings, incident responses, 
                and contributing to internal security reports. This experience helped me hone my ability to 
                communicate complex security findings clearly and effectively, a critical skill in any security 
                role.
              </p>
            </div>
          </div>

          {/* Key Takeaways Section */}
          <div className="space-y-4">
            <h2 className="text-3xl font-heading font-bold text-accent flex items-center gap-3">
              <Lock className="w-8 h-8" />
              Key Takeaways
            </h2>
            <div className="pl-4 border-l-4 border-primary/30">
              <p className="text-foreground/90 leading-relaxed">
                My internship at DCM Shriram Ltd gave me an in-depth look at cloud security practices, 
                particularly within AWS environments. I learned about vulnerability management, IAM best 
                practices, and the importance of a collaborative approach to security across teams. By the 
                end of my internship, I had gained a solid understanding of cloud security concepts and the 
                tools required to implement them effectively in real-world environments.
              </p>
            </div>
          </div>

          {/* Decorative footer */}
          <div className="pt-8 flex items-center justify-center gap-4">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </div>
        </article>

        {/* Back button at bottom */}
        <div className="mt-12 text-center">
          <Link to="/">
            <Button className="group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Return to Portfolio
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CloudSecurityBlog;
