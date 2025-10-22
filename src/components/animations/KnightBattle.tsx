import { useEffect, useState } from 'react';

export const KnightBattle = () => {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prev) => (prev + 1) % 4);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-64 overflow-hidden opacity-20">
      {/* Knight */}
      <div 
        className={`absolute bottom-8 left-1/4 transition-all duration-300 ${
          frame === 0 ? 'translate-x-0' : frame === 1 ? 'translate-x-4 -translate-y-2' : frame === 2 ? 'translate-x-2' : '-translate-x-2'
        }`}
      >
        <div className="relative">
          {/* Knight Shield */}
          <div className={`absolute -left-8 top-4 w-12 h-16 bg-steel/60 rounded-lg border-2 border-primary/40 transition-transform ${
            frame === 2 ? '-translate-x-2 scale-110' : ''
          }`}>
            <div className="absolute inset-2 border border-gold/40 rounded"></div>
          </div>
          {/* Knight Body */}
          <div className="w-16 h-20 bg-gradient-to-b from-steel/70 to-steel/50 rounded-lg border-2 border-primary/30">
            <div className="w-10 h-10 mx-auto mt-2 bg-gradient-to-b from-parchment/60 to-parchment/40 rounded-full border border-gold/30"></div>
          </div>
          {/* Knight Sword */}
          <div className={`absolute -right-6 top-0 w-2 h-20 bg-gradient-to-b from-steel to-primary origin-bottom transition-transform ${
            frame === 1 ? 'rotate-45 scale-110' : frame === 2 ? 'rotate-90' : 'rotate-12'
          }`}>
            <div className={`absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-1 bg-gold ${frame === 1 ? 'sword-slash' : ''}`}></div>
            {frame === 1 && (
              <div className="absolute top-0 -right-4 w-8 h-8 bg-accent/60 rounded-full animate-ping"></div>
            )}
          </div>
        </div>
      </div>

      {/* Monster */}
      <div 
        className={`absolute bottom-8 right-1/4 transition-all duration-300 ${
          frame === 1 ? 'translate-x-2' : frame === 2 ? 'translate-x-6 opacity-70 scale-95' : 'translate-x-0'
        }`}
      >
        <div className="relative">
          {/* Monster Body */}
          <div className="w-20 h-24 bg-gradient-to-b from-destructive/60 to-destructive/40 rounded-lg border-2 border-destructive">
            {/* Monster Eyes */}
            <div className="flex gap-3 justify-center mt-3">
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
            </div>
            {/* Monster Teeth */}
            <div className="flex gap-1 justify-center mt-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-2 h-3 bg-parchment/80 clip-triangle"></div>
              ))}
            </div>
          </div>
          {/* Monster Arms */}
          <div className="absolute -left-4 top-8 w-8 h-3 bg-destructive/50 rounded-full"></div>
          <div className="absolute -right-4 top-8 w-8 h-3 bg-destructive/50 rounded-full"></div>
          {frame === 2 && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-destructive font-bold text-2xl animate-bounce">
              !
            </div>
          )}
        </div>
      </div>

      {/* Battle Effects */}
      {frame === 1 && (
        <>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-accent/30 rounded-full animate-ping"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-primary/40 rounded-full blur-xl animate-pulse"></div>
        </>
      )}

      {/* Magic Particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute magic-particle"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 3) * 20}%`,
            animationDelay: `${i * 0.3}s`,
          }}
        >
          <div className="w-2 h-2 bg-primary/40 rounded-full blur-sm"></div>
        </div>
      ))}
    </div>
  );
};
