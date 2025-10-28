import { useEffect, useState } from "react";

interface SkillTreeGrowProps {
  growing?: boolean;
}

const SkillTreeGrow = ({ growing = true }: SkillTreeGrowProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!growing) return;
    
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 100;
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [growing]);

  const getNodeOpacity = (threshold: number) => {
    return progress >= threshold ? 1 : 0;
  };

  const getNodeScale = (threshold: number) => {
    return progress >= threshold ? 1 : 0;
  };

  return (
    <div className="relative w-32 h-32 mx-auto">
      {/* Root/Base */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 bg-gradient-to-t from-primary/80 to-primary/40 transition-all duration-500"
        style={{ 
          height: `${Math.min(progress * 0.3, 30)}px`,
        }}
      />

      {/* Trunk */}
      <div 
        className="absolute bottom-4 left-1/2 -translate-x-1/2 w-3 bg-gradient-to-t from-primary/70 to-primary/50 transition-all duration-700"
        style={{ 
          height: `${Math.min(progress * 0.5, 50)}px`,
        }}
      />

      {/* Branches - Left */}
      <div 
        className="absolute left-4 w-12 h-1 bg-gradient-to-r from-primary/60 to-primary/40 origin-right transition-all duration-700"
        style={{ 
          bottom: '40px',
          transform: `scaleX(${Math.min(progress / 60, 1)}) rotate(-30deg)`,
          opacity: progress >= 40 ? 1 : 0,
        }}
      />

      {/* Branches - Right */}
      <div 
        className="absolute right-4 w-12 h-1 bg-gradient-to-l from-primary/60 to-primary/40 origin-left transition-all duration-700"
        style={{ 
          bottom: '40px',
          transform: `scaleX(${Math.min(progress / 60, 1)}) rotate(30deg)`,
          opacity: progress >= 40 ? 1 : 0,
        }}
      />

      {/* Skill Nodes/Orbs */}
      {/* Center Top Node */}
      <div 
        className="absolute top-2 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-primary shadow-lg shadow-primary/50 transition-all duration-500"
        style={{
          opacity: getNodeOpacity(80),
          transform: `translate(-50%, 0) scale(${getNodeScale(80)})`,
        }}
      >
        <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping" 
          style={{ animationDuration: '2s' }}
        />
      </div>

      {/* Left Node */}
      <div 
        className="absolute left-0 w-5 h-5 rounded-full bg-secondary shadow-lg shadow-secondary/50 transition-all duration-500"
        style={{
          bottom: '35px',
          opacity: getNodeOpacity(60),
          transform: `scale(${getNodeScale(60)})`,
        }}
      >
        <div className="absolute inset-0 rounded-full bg-secondary/30 animate-ping" 
          style={{ animationDuration: '2.5s' }}
        />
      </div>

      {/* Right Node */}
      <div 
        className="absolute right-0 w-5 h-5 rounded-full bg-accent shadow-lg shadow-accent/50 transition-all duration-500"
        style={{
          bottom: '35px',
          opacity: getNodeOpacity(60),
          transform: `scale(${getNodeScale(60)})`,
        }}
      >
        <div className="absolute inset-0 rounded-full bg-accent/30 animate-ping" 
          style={{ animationDuration: '3s' }}
        />
      </div>

      {/* Middle Left Node */}
      <div 
        className="absolute left-8 w-4 h-4 rounded-full bg-primary/70 shadow-md shadow-primary/40 transition-all duration-500"
        style={{
          bottom: '50px',
          opacity: getNodeOpacity(70),
          transform: `scale(${getNodeScale(70)})`,
        }}
      />

      {/* Middle Right Node */}
      <div 
        className="absolute right-8 w-4 h-4 rounded-full bg-primary/70 shadow-md shadow-primary/40 transition-all duration-500"
        style={{
          bottom: '50px',
          opacity: getNodeOpacity(70),
          transform: `scale(${getNodeScale(70)})`,
        }}
      />

      {/* Magical Particles */}
      {progress > 50 && (
        <>
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-primary animate-pulse"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: '2s',
              }}
            />
          ))}
        </>
      )}

      {/* Glowing Aura when complete */}
      {progress >= 100 && (
        <div className="absolute inset-0 rounded-full bg-primary/10 blur-xl animate-pulse" 
          style={{ animationDuration: '3s' }}
        />
      )}
    </div>
  );
};

export default SkillTreeGrow;
