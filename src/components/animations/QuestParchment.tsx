import { useEffect, useState } from 'react';
import { Scroll } from 'lucide-react';

interface QuestParchmentProps {
  show?: boolean;
}

export const QuestParchment = ({ show = true }: QuestParchmentProps) => {
  const [unfurled, setUnfurled] = useState(0);

  useEffect(() => {
    if (show && unfurled < 100) {
      const timer = setTimeout(() => {
        setUnfurled(prev => Math.min(prev + 4, 100));
      }, 20);
      return () => clearTimeout(timer);
    }
  }, [show, unfurled]);

  return (
    <div className="relative w-16 h-16 flex items-center justify-center">
      {/* Glowing Crystal Base */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className={`w-12 h-12 bg-primary/20 rounded-lg rotate-45 transition-all duration-500 ${
            unfurled > 50 ? 'scale-150 opacity-0' : 'scale-100 opacity-100'
          }`}
          style={{
            boxShadow: '0 0 20px rgba(var(--primary), 0.4), inset 0 0 20px rgba(var(--primary), 0.2)',
          }}
        >
          <div className="absolute inset-2 bg-primary/30 rounded-sm animate-pulse"></div>
        </div>
      </div>

      {/* Parchment Unfurling */}
      {unfurled > 40 && (
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 origin-top"
          style={{
            height: `${(unfurled - 40) * 1.5}px`,
            width: `${(unfurled - 40) * 1}px`,
            transition: 'all 0.3s ease-out'
          }}
        >
          <div className="w-full h-full scroll-paper rounded-sm shadow-lg relative overflow-hidden">
            {/* Magical Runes */}
            {unfurled > 70 && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Scroll className="w-6 h-6 text-primary/60 animate-pulse" />
              </div>
            )}
          </div>
        </div>
      )}

      {/* Magical Aura Rings */}
      {unfurled < 50 && [...Array(3)].map((_, i) => (
        <div
          key={i}
          className="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping"
          style={{
            animationDelay: `${i * 0.3}s`,
            animationDuration: '2s',
          }}
        ></div>
      ))}

      {/* Floating Runes */}
      {unfurled > 60 && [...Array(3)].map((_, i) => (
        <div
          key={i}
          className="absolute text-primary/40 font-bold text-xs magic-particle"
          style={{
            left: `${-20 + i * 30}px`,
            top: `${-10 + i * 15}px`,
            animationDelay: `${i * 0.2}s`,
          }}
        >
          ᛟ
        </div>
      ))}
    </div>
  );
};
