import { useEffect, useState, useRef } from "react";
import { Shield, Zap, AlertTriangle } from "lucide-react";

interface ThreatPing {
  id: number;
  x: number;
  y: number;
  type: 'critical' | 'warning' | 'blocked';
  timestamp: number;
}

const ThreatMap = () => {
  const [threats, setThreats] = useState<ThreatPing[]>([]);
  const [stats, setStats] = useState({
    blocked: 0,
    critical: 0,
    warning: 0
  });
  const threatIdRef = useRef(0);

  useEffect(() => {
    const generateThreat = () => {
      const types: ('critical' | 'warning' | 'blocked')[] = ['critical', 'warning', 'blocked'];
      const type = types[Math.floor(Math.random() * types.length)];
      
      const newThreat: ThreatPing = {
        id: threatIdRef.current++,
        x: Math.random() * 90 + 5,
        y: Math.random() * 80 + 10,
        type,
        timestamp: Date.now()
      };

      setThreats(prev => [...prev.slice(-20), newThreat]);
      setStats(prev => ({
        ...prev,
        [type]: prev[type] + 1
      }));
    };

    const interval = setInterval(generateThreat, 1500);
    
    // Initial threats
    for (let i = 0; i < 8; i++) {
      setTimeout(generateThreat, i * 200);
    }

    return () => clearInterval(interval);
  }, []);

  // Clean up old threats
  useEffect(() => {
    const cleanup = setInterval(() => {
      const now = Date.now();
      setThreats(prev => prev.filter(t => now - t.timestamp < 4000));
    }, 1000);

    return () => clearInterval(cleanup);
  }, []);

  const getThreatColor = (type: string) => {
    switch (type) {
      case 'critical': return 'hsl(var(--destructive))';
      case 'warning': return 'hsl(var(--accent))';
      case 'blocked': return 'hsl(var(--secondary))';
      default: return 'hsl(var(--primary))';
    }
  };

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4 text-primary">
            <Shield className="w-8 h-8" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Live Threat Map
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-time visualization of global cybersecurity threats detected and neutralized
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm border border-secondary/20 rounded-lg p-4 flex items-center gap-3">
            <Shield className="w-8 h-8 text-secondary" />
            <div>
              <div className="text-2xl font-bold text-secondary">{stats.blocked}</div>
              <div className="text-sm text-muted-foreground">Threats Blocked</div>
            </div>
          </div>
          
          <div className="bg-card/50 backdrop-blur-sm border border-accent/20 rounded-lg p-4 flex items-center gap-3">
            <Zap className="w-8 h-8 text-accent" />
            <div>
              <div className="text-2xl font-bold text-accent">{stats.warning}</div>
              <div className="text-sm text-muted-foreground">Active Warnings</div>
            </div>
          </div>
          
          <div className="bg-card/50 backdrop-blur-sm border border-destructive/20 rounded-lg p-4 flex items-center gap-3">
            <AlertTriangle className="w-8 h-8 text-destructive" />
            <div>
              <div className="text-2xl font-bold text-destructive">{stats.critical}</div>
              <div className="text-sm text-muted-foreground">Critical Alerts</div>
            </div>
          </div>
        </div>

        {/* Map Container */}
        <div className="relative bg-card/30 backdrop-blur-sm border border-primary/20 rounded-lg p-8 max-w-6xl mx-auto overflow-hidden shadow-lg shadow-primary/10">
          {/* Grid Background */}
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Simplified World Map SVG */}
          <svg viewBox="0 0 1000 500" className="w-full h-auto relative z-10">
            {/* World Map Continents (simplified) */}
            <g className="fill-primary/20 stroke-primary/40" strokeWidth="2">
              {/* North America */}
              <path d="M 150,100 L 200,80 L 280,90 L 300,150 L 280,200 L 220,220 L 180,200 L 150,150 Z" />
              
              {/* South America */}
              <path d="M 240,250 L 280,240 L 300,280 L 290,350 L 260,380 L 240,350 L 230,300 Z" />
              
              {/* Europe */}
              <path d="M 480,100 L 520,90 L 560,110 L 550,150 L 520,160 L 480,150 Z" />
              
              {/* Africa */}
              <path d="M 500,180 L 540,170 L 580,200 L 590,280 L 560,340 L 520,350 L 500,300 L 490,240 Z" />
              
              {/* Asia */}
              <path d="M 620,80 L 720,70 L 820,90 L 850,140 L 820,180 L 750,200 L 680,190 L 640,150 Z" />
              
              {/* Australia */}
              <path d="M 780,320 L 840,310 L 870,340 L 860,380 L 820,390 L 780,370 Z" />
            </g>

            {/* Threat Pings */}
            {threats.map(threat => (
              <g key={threat.id}>
                {/* Expanding circle */}
                <circle
                  cx={`${threat.x}%`}
                  cy={`${threat.y}%`}
                  r="0"
                  fill="none"
                  stroke={getThreatColor(threat.type)}
                  strokeWidth="2"
                  opacity="0.8"
                >
                  <animate
                    attributeName="r"
                    from="0"
                    to="30"
                    dur="2s"
                    repeatCount="1"
                  />
                  <animate
                    attributeName="opacity"
                    from="0.8"
                    to="0"
                    dur="2s"
                    repeatCount="1"
                  />
                </circle>
                
                {/* Center dot */}
                <circle
                  cx={`${threat.x}%`}
                  cy={`${threat.y}%`}
                  r="4"
                  fill={getThreatColor(threat.type)}
                  opacity="1"
                >
                  <animate
                    attributeName="opacity"
                    from="1"
                    to="0"
                    dur="4s"
                    repeatCount="1"
                  />
                </circle>
              </g>
            ))}
          </svg>

          {/* Scanning Line Effect */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30 animate-scan" 
              style={{ 
                animation: 'scan 3s linear infinite',
                top: '0'
              }} 
            />
          </div>
        </div>

        <div className="text-center mt-6 text-sm text-muted-foreground">
          <p className="animate-pulse">⚡ Monitoring global threat landscape in real-time</p>
        </div>
      </div>

      <style>{`
        @keyframes scan {
          0% { top: 0%; }
          100% { top: 100%; }
        }
      `}</style>
    </section>
  );
};

export default ThreatMap;
