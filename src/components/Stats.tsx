import { useEffect, useState, useRef } from "react";
import { Shield, Award, Code, Users } from "lucide-react";

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    {
      icon: Shield,
      value: 50,
      suffix: "+",
      label: "Security Labs Completed",
      color: "text-primary",
    },
    {
      icon: Award,
      value: 7,
      suffix: "+",
      label: "Certifications",
      color: "text-accent",
    },
    {
      icon: Code,
      value: 15,
      suffix: "+",
      label: "Projects Completed",
      color: "text-secondary",
    },
    {
      icon: Users,
      value: 50,
      suffix: "+",
      label: "Systems Protected",
      color: "text-steel",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              stat={stat}
              isVisible={isVisible}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface StatCardProps {
  stat: {
    icon: React.ElementType;
    value: number;
    suffix: string;
    label: string;
    color: string;
  };
  isVisible: boolean;
  delay: number;
}

const StatCard = ({ stat, isVisible, delay }: StatCardProps) => {
  const [count, setCount] = useState(0);
  const Icon = stat.icon;

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = stat.value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= stat.value) {
        setCount(stat.value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, stat.value]);

  return (
    <div
      className="text-center animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-card mb-4 ${stat.color}`}>
        <Icon className="w-8 h-8" />
      </div>
      <div className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
        {isVisible ? count : 0}
        {stat.suffix}
      </div>
      <div className="text-sm md:text-base text-muted-foreground">
        {stat.label}
      </div>
    </div>
  );
};

export default Stats;
