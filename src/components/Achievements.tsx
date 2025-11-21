import { Trophy, Award, Target, Zap, Shield, Code } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const achievements = [
  {
    icon: Shield,
    title: 'Security Champion',
    description: 'Identified and resolved 50+ critical vulnerabilities',
    color: 'text-red-500',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500/30'
  },
  {
    icon: Trophy,
    title: 'Bug Bounty Hunter',
    description: 'Earned $15K+ in bug bounty rewards',
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-500/10',
    borderColor: 'border-yellow-500/30'
  },
  {
    icon: Code,
    title: 'Open Source Contributor',
    description: 'Contributed to 20+ security projects',
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30'
  },
  {
    icon: Zap,
    title: 'Incident Response Expert',
    description: 'Led response for 100+ security incidents',
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30'
  },
  {
    icon: Target,
    title: 'Threat Hunter',
    description: 'Detected 30+ Advanced Persistent Threats',
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/30'
  },
  {
    icon: Award,
    title: 'Security Researcher',
    description: 'Published 5+ security research papers',
    color: 'text-amber-500',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/30'
  }
];

const metrics = [
  { label: 'Security Projects Delivered', value: '50+', trend: '+12%' },
  { label: 'Threats Neutralized', value: '1,247', trend: '+28%' },
  { label: 'Team Members Trained', value: '150+', trend: '+35%' },
  { label: 'Uptime Maintained', value: '99.9%', trend: 'Stable' }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 px-4 bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 font-heading text-foreground">
            <Trophy className="inline-block mr-2 text-ember-glow animate-pulse" size={40} />
            Achievements & Impact
          </h2>
          <p className="text-muted-foreground">Proven track record of excellence in cybersecurity</p>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, index) => (
            <Card key={index} className="p-6 bg-card/50 backdrop-blur border-border/50 hover:border-ember-glow/50 transition-all hover:scale-105">
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground mb-2">{metric.value}</div>
                <div className="text-sm text-muted-foreground mb-2">{metric.label}</div>
                <Badge variant="secondary" className="text-xs">
                  {metric.trend}
                </Badge>
              </div>
            </Card>
          ))}
        </div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card 
                key={index}
                className={`p-6 bg-card/50 backdrop-blur border-2 ${achievement.borderColor} hover:border-ember-glow/50 transition-all hover:scale-105 hover:shadow-lg hover:shadow-ember-glow/20`}
              >
                <div className={`${achievement.bgColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className={achievement.color} size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground">{achievement.title}</h3>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <Card className="p-8 bg-gradient-to-r from-ember-glow/10 to-accent/10 border-ember-glow/30">
            <h3 className="text-2xl font-bold mb-2 text-foreground">Ready to make an impact?</h3>
            <p className="text-muted-foreground mb-4">
              Let's build secure, resilient systems together
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-ember-glow text-white rounded-lg hover:scale-105 transition-transform font-semibold"
            >
              Get In Touch <Zap size={18} />
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
