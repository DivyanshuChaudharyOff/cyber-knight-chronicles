import { useEffect, useState } from 'react';
import { Shield } from 'lucide-react';

interface GuildCrestProps {
  forging?: boolean;
}

export const GuildCrest = ({ forging = true }: GuildCrestProps) => {
  const [progress, setProgress] = useState(0);
  const [sparks, setSparks] = useState<{ x: number; y: number; id: number }[]>([]);

  useEffect(() => {
    if (forging && progress < 100) {
      const timer = setTimeout(() => {
        setProgress(prev => Math.min(prev + 2, 100));
        
        // Generate sparks randomly during forging
        if (Math.random() > 0.7) {
          setSparks(prev => [
            ...prev,
            {
              x: Math.random() * 60 - 30,
              y: Math.random() * 40 - 20,
              id: Date.now() + Math.random(),
            }
          ].slice(-8)); // Keep only last 8 sparks
        }
      }, 30);
      return () => clearTimeout(timer);
    }
  }, [forging, progress]);

  return (
    <div className="relative w-24 h-24 flex items-center justify-center">
      {/* Anvil */}
      <div className="absolute bottom-0 w-20 h-8 bg-gradient-to-t from-steel/80 to-steel/60 rounded-t-lg">
        <div className="absolute top-0 inset-x-2 h-1 bg-steel rounded"></div>
      </div>

      {/* Crest Being Forged */}
      <div 
        className="relative transition-all duration-300"
        style={{
          opacity: Math.min(progress / 50, 1),
          transform: `scale(${Math.min(progress / 100, 1)}) translateY(${Math.max(0, 20 - progress / 5)}px)`,
        }}
      >
        <Shield 
          className={`w-16 h-16 transition-all duration-300 ${
            progress > 80 ? 'text-gold' : 'text-steel'
          }`}
          style={{
            filter: progress > 80 ? 'drop-shadow(0 0 10px hsl(var(--gold)))' : 'none',
          }}
        />
        
        {/* Intricate Details appearing */}
        {progress > 60 && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-2xl font-bold text-primary/80 animate-pulse">G</div>
          </div>
        )}
      </div>

      {/* Hammer Strike Effect */}
      {progress < 80 && progress % 20 < 10 && (
        <div className="absolute top-0 w-6 h-12 bg-gradient-to-b from-steel to-steel/70 rounded origin-bottom rotate-45 transition-transform duration-100">
          <div className="absolute bottom-0 w-8 h-3 -left-1 bg-amber-900 rounded"></div>
        </div>
      )}

      {/* Flying Sparks */}
      {sparks.map(spark => (
        <div
          key={spark.id}
          className="absolute w-1 h-1 bg-accent rounded-full animate-ping"
          style={{
            left: `50%`,
            top: `50%`,
            transform: `translate(${spark.x}px, ${spark.y}px)`,
          }}
        ></div>
      ))}

      {/* Heat Glow */}
      {progress < 80 && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
        </div>
      )}

      {/* Final Magical Glow */}
      {progress > 80 && (
        <>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-gold/20 rounded-full blur-2xl animate-pulse"></div>
          </div>
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-8 bg-gradient-to-t from-gold/60 to-transparent"
              style={{
                left: '50%',
                top: '50%',
                transform: `rotate(${i * 45}deg) translateY(-20px)`,
                transformOrigin: '0 20px',
              }}
            ></div>
          ))}
        </>
      )}
    </div>
  );
};
