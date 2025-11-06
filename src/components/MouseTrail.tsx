import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  life: number;
  maxLife: number;
  hue: number;
}

const MouseTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };

      // Create new particles on mouse move
      for (let i = 0; i < 2; i++) {
        particlesRef.current.push({
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 4 + 2,
          speedX: (Math.random() - 0.5) * 2,
          speedY: (Math.random() - 0.5) * 2,
          life: 1,
          maxLife: Math.random() * 60 + 40,
          hue: Math.random() * 60 + 200, // Blue-purple hues
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.life++;

        const alpha = 1 - particle.life / particle.maxLife;

        if (alpha <= 0) return false;

        // Draw particle with glow
        ctx.shadowBlur = 15;
        ctx.shadowColor = `hsla(${particle.hue}, 100%, 60%, ${alpha})`;
        
        // Outer glow
        ctx.fillStyle = `hsla(${particle.hue}, 100%, 60%, ${alpha * 0.3})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
        ctx.fill();

        // Inner bright particle
        ctx.fillStyle = `hsla(${particle.hue}, 100%, 80%, ${alpha})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        ctx.shadowBlur = 0;

        return true;
      });

      // Draw cursor glow
      const { x, y } = mouseRef.current;
      if (x > 0 && y > 0) {
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, 30);
        gradient.addColorStop(0, "rgba(147, 51, 234, 0.3)");
        gradient.addColorStop(0.5, "rgba(59, 130, 246, 0.15)");
        gradient.addColorStop(1, "rgba(59, 130, 246, 0)");
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, 30, 0, Math.PI * 2);
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ mixBlendMode: "screen" }}
    />
  );
};

export default MouseTrail;
