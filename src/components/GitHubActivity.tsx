import { useEffect, useState } from 'react';
import { Github, GitCommit, Star, GitFork } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface GitHubStats {
  totalContributions: number;
  currentStreak: number;
  longestStreak: number;
  stars: number;
}

const GitHubActivity = () => {
  const [stats] = useState<GitHubStats>({
    totalContributions: 1247,
    currentStreak: 23,
    longestStreak: 67,
    stars: 342,
  });

  const [activity] = useState([
    { type: 'commit', repo: 'SecOps-Automation', message: 'Implemented SIEM log parser', time: '2h ago' },
    { type: 'star', repo: 'CyberSecurity-Tools', message: 'Starred vulnerability scanner', time: '5h ago' },
    { type: 'fork', repo: 'Threat-Intelligence', message: 'Forked threat feed aggregator', time: '1d ago' },
    { type: 'commit', repo: 'Incident-Response', message: 'Added automated response playbook', time: '2d ago' },
  ]);

  return (
    <section id="github" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 font-heading text-foreground">
            <Github className="inline-block mr-2 text-ember-glow" size={40} />
            Live Development Activity
          </h2>
          <p className="text-muted-foreground">Real-time contributions and open source work</p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 bg-card/50 backdrop-blur border-border/50 hover:border-ember-glow/50 transition-all">
            <div className="text-center">
              <GitCommit className="mx-auto mb-2 text-ember-glow" size={32} />
              <div className="text-3xl font-bold text-foreground mb-1">{stats.totalContributions}</div>
              <div className="text-sm text-muted-foreground">Total Contributions</div>
            </div>
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur border-border/50 hover:border-emerald-500/50 transition-all">
            <div className="text-center">
              <div className="text-3xl mb-2">🔥</div>
              <div className="text-3xl font-bold text-foreground mb-1">{stats.currentStreak}</div>
              <div className="text-sm text-muted-foreground">Day Streak</div>
            </div>
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur border-border/50 hover:border-amber-500/50 transition-all">
            <div className="text-center">
              <div className="text-3xl mb-2">⚡</div>
              <div className="text-3xl font-bold text-foreground mb-1">{stats.longestStreak}</div>
              <div className="text-sm text-muted-foreground">Longest Streak</div>
            </div>
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur border-border/50 hover:border-yellow-500/50 transition-all">
            <div className="text-center">
              <Star className="mx-auto mb-2 text-yellow-500" size={32} />
              <div className="text-3xl font-bold text-foreground mb-1">{stats.stars}</div>
              <div className="text-sm text-muted-foreground">Total Stars</div>
            </div>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="p-6 bg-card/50 backdrop-blur border-border/50">
          <h3 className="text-xl font-bold mb-4 text-foreground">Recent Activity</h3>
          <div className="space-y-4">
            {activity.map((item, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-3 rounded-lg hover:bg-accent/20 transition-colors border-l-2 border-ember-glow/30"
              >
                <div className="mt-1">
                  {item.type === 'commit' && <GitCommit className="text-ember-glow" size={20} />}
                  {item.type === 'star' && <Star className="text-yellow-500" size={20} />}
                  {item.type === 'fork' && <GitFork className="text-blue-500" size={20} />}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-foreground">{item.repo}</div>
                  <div className="text-sm text-muted-foreground">{item.message}</div>
                </div>
                <div className="text-xs text-muted-foreground whitespace-nowrap">{item.time}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default GitHubActivity;
