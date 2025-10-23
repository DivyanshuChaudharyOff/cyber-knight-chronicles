import { ArrowLeft, Cloud, Lock, Sparkles, Zap, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CloudSecurityBlog = () => {
  return (
    <div className="min-h-screen py-12 px-4 relative overflow-hidden">
      {/* Animated background elements - MORE NOTICEABLE */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/3 left-1/4 w-56 h-56 bg-primary/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
      </div>

      {/* Floating particles - MORE PARTICLES */}
      {[...Array(15)].map((_, i) => (
        <Sparkles
          key={i}
          className="fixed text-primary/30 magic-particle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.3}s`,
            fontSize: `${16 + Math.random() * 12}px`
          }}
        />
      ))}

      {/* Floating cloud icons */}
      {[...Array(5)].map((_, i) => (
        <Cloud
          key={`cloud-${i}`}
          className="fixed text-accent/20 animate-float-slow"
          style={{
            top: `${20 + Math.random() * 60}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${i * 1}s`,
            fontSize: `${24 + Math.random() * 16}px`
          }}
        />
      ))}

      {/* Lightning bolts */}
      {[...Array(3)].map((_, i) => (
        <Zap
          key={`zap-${i}`}
          className="fixed text-primary/25 animate-pulse"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.7}s`,
            fontSize: `${20 + Math.random() * 10}px`
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

        {/* Hero section with anime-style title - MORE DRAMATIC */}
        <div className="text-center mb-16 relative">
          <div className="inline-flex items-center gap-4 mb-6 animate-scale-in">
            <Cloud className="w-14 h-14 text-primary animate-pulse animate-glow" />
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground animate-fade-in">
              Cloud Security Intern
            </h1>
            <Lock className="w-14 h-14 text-accent animate-pulse ember-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
          <p className="text-xl text-primary font-semibold mb-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            DCM Shriram Ltd
          </p>
          <p className="text-muted-foreground animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Lucknow • January 2025 – May 2025
          </p>
          
          {/* Decorative line with glow */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-primary animate-glow"></div>
            <Sparkles className="w-6 h-6 text-primary animate-pulse" />
            <div className="h-px w-24 bg-gradient-to-l from-transparent via-primary to-primary animate-glow"></div>
          </div>
        </div>

        {/* Main blog content with staggered animations */}
        <article className="quest-card space-y-8 animate-fade-in-up border-2 border-primary/20 shadow-xl shadow-primary/10">
          {/* Introduction */}
          <div className="space-y-4 animate-slide-in-left">
            <p className="text-lg leading-relaxed text-foreground/90">
              During my internship at DCM Shriram Ltd, I had the opportunity to work on optimizing and 
              securing cloud infrastructure within AWS environments, gaining hands-on experience in cloud 
              security and best practices. The experience was a fantastic introduction to the world of cloud 
              security, and I contributed to strengthening the overall security posture of the organization.
            </p>
          </div>

          {/* What I Did Section */}
          <div className="space-y-4 animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-3xl font-heading font-bold text-accent flex items-center gap-3">
              <Shield className="w-8 h-8 animate-pulse" />
              What I Did
            </h2>
            <div className="pl-4 border-l-4 border-primary/40 space-y-4 hover:border-primary transition-colors">
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
          <div className="space-y-4 animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-3xl font-heading font-bold text-accent flex items-center gap-3">
              <Users className="w-8 h-8 animate-pulse" />
              Collaboration & Learning
            </h2>
            <div className="pl-4 border-l-4 border-primary/40 space-y-4 hover:border-primary transition-colors">
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
          <div className="space-y-4 animate-slide-in-right" style={{ animationDelay: '0.6s' }}>
            <h2 className="text-3xl font-heading font-bold text-accent flex items-center gap-3">
              <Sparkles className="w-8 h-8 animate-pulse" />
              Documentation & Reporting
            </h2>
            <div className="pl-4 border-l-4 border-primary/40 hover:border-primary transition-colors">
              <p className="text-foreground/90 leading-relaxed">
                In addition to hands-on work, I was responsible for documenting my findings, incident responses, 
                and contributing to internal security reports. This experience helped me hone my ability to 
                communicate complex security findings clearly and effectively, a critical skill in any security 
                role.
              </p>
            </div>
          </div>

          {/* Key Takeaways Section */}
          <div className="space-y-4 animate-slide-in-left" style={{ animationDelay: '0.8s' }}>
            <h2 className="text-3xl font-heading font-bold text-accent flex items-center gap-3">
              <Zap className="w-8 h-8 animate-pulse" />
              Key Takeaways
            </h2>
            <div className="pl-4 border-l-4 border-primary/40 hover:border-primary transition-colors">
              <p className="text-foreground/90 leading-relaxed">
                My internship at DCM Shriram Ltd gave me an in-depth look at cloud security practices, 
                particularly within AWS environments. I learned about vulnerability management, IAM best 
                practices, and the importance of a collaborative approach to security across teams. By the 
                end of my internship, I had gained a solid understanding of cloud security concepts and the 
                tools required to implement them effectively in real-world environments.
              </p>
            </div>
          </div>

          {/* Decorative footer with glow */}
          <div className="pt-8 flex items-center justify-center gap-4">
            <div className="h-px w-40 bg-gradient-to-r from-transparent via-primary to-transparent animate-glow"></div>
          </div>
        </article>

        {/* Back button at bottom */}
        <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: '1s' }}>
          <Link to="/">
            <Button className="group animate-glow">
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
