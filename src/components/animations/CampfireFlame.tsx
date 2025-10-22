import { useEffect, useState } from 'react';

export const CampfireFlame = () => {
  const [flicker, setFlicker] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlicker(Math.random());
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-20 h-24 flex items-end justify-center">
      {/* Logs */}
      <div className="absolute bottom-0 w-16 h-4 flex gap-1 justify-center">
        <div className="w-4 h-4 bg-amber-900 rounded transform -rotate-12"></div>
        <div className="w-4 h-4 bg-amber-900 rounded transform rotate-12"></div>
      </div>

      {/* Main Flame */}
      <div 
        className="absolute bottom-3 left-1/2 -translate-x-1/2 transition-all duration-150"
        style={{
          transform: `translateX(-50%) scale(${0.9 + flicker * 0.2})`,
        }}
      >
        {/* Inner Core */}
        <div 
          className="w-6 h-12 bg-gradient-to-t from-accent via-primary to-transparent rounded-full blur-sm"
          style={{
            opacity: 0.8 + flicker * 0.2,
          }}
        ></div>
        
        {/* Outer Flame */}
        <div 
          className="absolute inset-0 w-8 h-14 -left-1 -top-1 bg-gradient-to-t from-primary via-primary/70 to-transparent rounded-full blur-md"
          style={{
            opacity: 0.6 + flicker * 0.3,
          }}
        ></div>
      </div>

      {/* Side Flames */}
      <div 
        className="absolute bottom-3 left-3 w-4 h-8 bg-gradient-to-t from-primary/70 via-primary/50 to-transparent rounded-full blur-sm transition-all duration-150"
        style={{
          transform: `scale(${0.8 + flicker * 0.3})`,
          opacity: 0.7 + flicker * 0.2,
        }}
      ></div>
      <div 
        className="absolute bottom-3 right-3 w-4 h-8 bg-gradient-to-t from-primary/70 via-primary/50 to-transparent rounded-full blur-sm transition-all duration-150"
        style={{
          transform: `scale(${0.8 + (1 - flicker) * 0.3})`,
          opacity: 0.7 + (1 - flicker) * 0.2,
        }}
      ></div>

      {/* Rising Embers */}
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="absolute bottom-0 w-1 h-1 bg-accent rounded-full magic-particle"
          style={{
            left: `${30 + i * 20}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: '3s',
          }}
        ></div>
      ))}

      {/* Glow Effect */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-16 bg-primary/20 rounded-full blur-xl transition-opacity duration-150"
        style={{
          opacity: 0.5 + flicker * 0.3,
        }}
      ></div>

      {/* Light Rays */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute bottom-2 left-1/2 w-px bg-gradient-to-t from-accent/40 to-transparent transition-all duration-150"
          style={{
            height: `${20 + flicker * 10}px`,
            transform: `translateX(-50%) rotate(${-20 + i * 10}deg) translateY(-10px)`,
            transformOrigin: 'bottom',
            opacity: 0.3 + flicker * 0.4,
          }}
        ></div>
      ))}
    </div>
  );
};
