import { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

interface MagicScrollProps {
  isOpen?: boolean;
}

export const MagicScroll = ({ isOpen = true }: MagicScrollProps) => {
  const [openState, setOpenState] = useState(0);

  useEffect(() => {
    if (isOpen && openState < 100) {
      const timer = setTimeout(() => {
        setOpenState(prev => Math.min(prev + 2, 100));
      }, 30);
      return () => clearTimeout(timer);
    }
  }, [isOpen, openState]);

  return (
    <div className="relative w-full h-32 flex items-center justify-center">
      {/* Scroll Rolls */}
      <div className="relative" style={{ width: `${Math.max(200, openState * 4)}px` }}>
        {/* Left Roll */}
        <div 
          className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-24 bg-gradient-to-r from-amber-900 to-amber-800 rounded-full shadow-lg transition-transform duration-300"
          style={{ transform: `translateY(-50%) translateX(-${openState * 0.5}px)` }}
        >
          <div className="absolute inset-y-2 inset-x-1 border-2 border-amber-700 rounded-full"></div>
        </div>

        {/* Right Roll */}
        <div 
          className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-24 bg-gradient-to-l from-amber-900 to-amber-800 rounded-full shadow-lg transition-transform duration-300"
          style={{ transform: `translateY(-50%) translateX(${openState * 0.5}px)` }}
        >
          <div className="absolute inset-y-2 inset-x-1 border-2 border-amber-700 rounded-full"></div>
        </div>

        {/* Parchment */}
        <div 
          className="relative mx-8 h-28 scroll-paper rounded transition-all duration-300 overflow-hidden"
          style={{ 
            width: `${openState * 3}px`,
            opacity: openState / 100 
          }}
        >
          {/* Magical Runes appearing */}
          {openState > 30 && (
            <div className="absolute inset-0 flex flex-wrap gap-2 p-4 items-center justify-center">
              {[...Array(Math.floor(openState / 20))].map((_, i) => (
                <div 
                  key={i}
                  className="text-primary/60 font-bold animate-fade-in"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  ᚱ
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Floating Magic Symbols */}
      {openState > 50 && [...Array(4)].map((_, i) => (
        <div
          key={i}
          className="absolute magic-particle"
          style={{
            left: `${30 + i * 15}%`,
            top: `${20 + (i % 2) * 60}%`,
            animationDelay: `${i * 0.2}s`,
          }}
        >
          <Sparkles className="w-4 h-4 text-primary/60" />
        </div>
      ))}

      {/* Magical Glow */}
      {openState > 70 && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-64 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse"></div>
        </div>
      )}
    </div>
  );
};
