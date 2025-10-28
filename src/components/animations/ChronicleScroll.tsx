import { useEffect, useState } from "react";
import { BookOpen } from "lucide-react";

interface ChronicleScrollProps {
  opening?: boolean;
}

const ChronicleScroll = ({ opening = true }: ChronicleScrollProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!opening) return;
    
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 100;
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [opening]);

  return (
    <div className="relative w-32 h-32 mx-auto">
      {/* Book/Chronicle base */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className="relative transition-all duration-700"
          style={{
            transform: `scale(${0.5 + (progress / 200)}) rotateY(${progress > 50 ? (progress - 50) * 1.8 : 0}deg)`,
          }}
        >
          {/* Book cover */}
          <div className="w-24 h-32 bg-gradient-to-br from-primary/90 to-primary/60 rounded-lg shadow-2xl shadow-primary/30 border-2 border-primary/40 relative overflow-hidden">
            {/* Book spine decoration */}
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-primary/50" />
            <div className="absolute left-2 top-0 bottom-0 w-px bg-primary/30" />
            
            {/* Book icon in center */}
            <div className="absolute inset-0 flex items-center justify-center">
              <BookOpen 
                className="text-background transition-all duration-500" 
                size={32}
                style={{
                  opacity: progress >= 30 ? 1 : 0,
                  transform: `scale(${progress >= 30 ? 1 : 0.5})`,
                }}
              />
            </div>

            {/* Decorative corners */}
            <div 
              className="absolute top-2 left-3 w-3 h-3 border-t-2 border-l-2 border-background/40 transition-opacity duration-700"
              style={{ opacity: progress >= 50 ? 0.6 : 0 }}
            />
            <div 
              className="absolute top-2 right-3 w-3 h-3 border-t-2 border-r-2 border-background/40 transition-opacity duration-700"
              style={{ opacity: progress >= 50 ? 0.6 : 0 }}
            />
            <div 
              className="absolute bottom-2 left-3 w-3 h-3 border-b-2 border-l-2 border-background/40 transition-opacity duration-700"
              style={{ opacity: progress >= 50 ? 0.6 : 0 }}
            />
            <div 
              className="absolute bottom-2 right-3 w-3 h-3 border-b-2 border-r-2 border-background/40 transition-opacity duration-700"
              style={{ opacity: progress >= 50 ? 0.6 : 0 }}
            />
          </div>

          {/* Pages opening effect */}
          {progress > 40 && (
            <>
              {/* Left page */}
              <div 
                className="absolute top-0 left-0 w-24 h-32 bg-background/90 rounded-l-lg origin-right transition-all duration-700 border-2 border-border/40"
                style={{
                  transform: `rotateY(${-Math.min((progress - 40) * 3, 120)}deg)`,
                  opacity: 0.9,
                }}
              />
              
              {/* Right page */}
              <div 
                className="absolute top-0 right-0 w-24 h-32 bg-background/90 rounded-r-lg origin-left transition-all duration-700 border-2 border-border/40"
                style={{
                  transform: `rotateY(${Math.min((progress - 40) * 3, 120)}deg)`,
                  opacity: 0.9,
                }}
              />
            </>
          )}
        </div>
      </div>

      {/* Magical sparkles around book */}
      {progress > 60 && (
        <>
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full bg-primary animate-pulse"
              style={{
                left: `${30 + Math.cos(i * Math.PI / 4) * 40 + 10}%`,
                top: `${30 + Math.sin(i * Math.PI / 4) * 40 + 10}%`,
                animationDelay: `${i * 0.15}s`,
                animationDuration: '1.5s',
              }}
            />
          ))}
        </>
      )}

      {/* Glowing aura */}
      {progress >= 70 && (
        <div 
          className="absolute inset-0 rounded-full bg-primary/20 blur-2xl animate-pulse"
          style={{ animationDuration: '2s' }}
        />
      )}

      {/* Light beams when fully opened */}
      {progress >= 90 && (
        <>
          <div 
            className="absolute top-1/2 left-1/2 w-1 h-full bg-gradient-to-t from-transparent via-primary/30 to-transparent origin-bottom transition-all duration-500"
            style={{
              transform: 'translate(-50%, -50%) rotate(-15deg)',
              animation: 'pulse 2s ease-in-out infinite',
            }}
          />
          <div 
            className="absolute top-1/2 left-1/2 w-1 h-full bg-gradient-to-t from-transparent via-primary/30 to-transparent origin-bottom transition-all duration-500"
            style={{
              transform: 'translate(-50%, -50%) rotate(15deg)',
              animation: 'pulse 2s ease-in-out infinite',
              animationDelay: '0.5s',
            }}
          />
        </>
      )}
    </div>
  );
};

export default ChronicleScroll;
