import { useEffect, useState } from 'react';
import { Trophy } from 'lucide-react';

interface TrophyRevealProps {
  reveal?: boolean;
}

export const TrophyReveal = ({ reveal = true }: TrophyRevealProps) => {
  const [progress, setProgress] = useState(0);
  const [particles, setParticles] = useState<{ x: number; y: number; delay: number; id: number }[]>([]);

  useEffect(() => {
    if (reveal && progress < 100) {
      const timer = setTimeout(() => {
        setProgress(prev => Math.min(prev + 3, 100));
        
        // Generate shimmering particles
        if (progress < 70 && Math.random() > 0.6) {
          setParticles(prev => [
            ...prev,
            {
              x: Math.random() * 80 - 40,
              y: Math.random() * 80 - 40,
              delay: Math.random() * 0.5,
              id: Date.now() + Math.random(),
            }
          ].slice(-12));
        }
      }, 20);
      return () => clearTimeout(timer);
    }
  }, [reveal, progress]);

  return (
    <div className="relative w-24 h-24 flex items-center justify-center">
      {/* Particle Swirl */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute w-2 h-2 bg-gold/60 rounded-full animate-fade-in"
          style={{
            left: '50%',
            top: '50%',
            transform: `translate(${particle.x}px, ${particle.y}px)`,
            animationDelay: `${particle.delay}s`,
            boxShadow: '0 0 4px hsl(var(--gold))',
          }}
        ></div>
      ))}

      {/* Trophy Materializing */}
      <div 
        className="relative transition-all duration-500"
        style={{
          opacity: Math.max(0, (progress - 30) / 70),
          transform: `scale(${Math.min(progress / 100, 1)}) rotateY(${360 - progress * 3.6}deg)`,
        }}
      >
        <Trophy 
          className="w-20 h-20 text-gold"
          style={{
            filter: progress > 70 ? 'drop-shadow(0 0 12px hsl(var(--gold)))' : 'none',
          }}
        />
        
        {/* Intricate Details */}
        {progress > 60 && (
          <>
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary/60 rounded-full"></div>
            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-6 h-1 bg-primary/60 rounded-full"></div>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs font-bold text-primary/80">★</div>
          </>
        )}
      </div>

      {/* Magical Aura */}
      {progress > 40 && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div 
            className="w-28 h-28 rounded-full animate-pulse"
            style={{
              background: 'radial-gradient(circle, hsl(var(--gold) / 0.3) 0%, transparent 70%)',
            }}
          ></div>
        </div>
      )}

      {/* Rotating Rings */}
      {progress > 70 && (
        <>
          <div 
            className="absolute inset-0 border-2 border-gold/40 rounded-full"
            style={{
              animation: 'spin 3s linear infinite',
            }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gold rounded-full"></div>
          </div>
          <div 
            className="absolute inset-2 border-2 border-primary/40 rounded-full"
            style={{
              animation: 'spin 2s linear infinite reverse',
            }}
          >
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-primary rounded-full"></div>
          </div>
        </>
      )}

      {/* Beam of Light */}
      {progress > 80 && (
        <div className="absolute inset-x-0 bottom-0 h-full flex items-end justify-center overflow-hidden">
          <div 
            className="w-16 h-full bg-gradient-to-t from-gold/40 via-gold/20 to-transparent"
            style={{
              animation: 'fade-in 1s ease-out',
            }}
          ></div>
        </div>
      )}

      {/* Sparkle Burst */}
      {progress === 100 && [...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute text-gold text-xl animate-ping"
          style={{
            left: '50%',
            top: '50%',
            transform: `translate(-50%, -50%) rotate(${i * 60}deg) translateY(-35px)`,
            animationDelay: `${i * 0.1}s`,
          }}
        >
          ✦
        </div>
      ))}
    </div>
  );
};
