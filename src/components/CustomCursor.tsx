import { useEffect, useState } from 'react';
import { Sword, Shield } from 'lucide-react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('a, button, input, textarea, select, [role="button"]');
      setIsHovering(!!isInteractive);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Hide default cursor
    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <>
      <div
        className="fixed pointer-events-none z-[9999]"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) rotate(${isHovering ? '0deg' : '-45deg'}) scale(${isClicking ? 0.9 : 1})`,
          willChange: 'transform',
          transition: 'transform 0.1s ease-out',
        }}
      >
        {isHovering ? (
          <Shield 
            className="text-accent drop-shadow-[0_0_8px_hsl(var(--accent))]" 
            size={28}
            strokeWidth={2.5}
          />
        ) : (
          <Sword 
            className="text-ember-glow drop-shadow-[0_0_8px_hsl(var(--ember-glow))]" 
            size={24}
            strokeWidth={2.5}
          />
        )}
      </div>
      <style>{`
        * {
          cursor: none !important;
        }
        a, button, input, textarea, select {
          cursor: none !important;
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
