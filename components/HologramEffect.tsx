import React, { useEffect, useRef } from 'react';

interface HologramEffectProps {
  type: string;
  className?: string;
}

export function HologramEffect({ type, className = '' }: HologramEffectProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    let animationFrame: number;
    let particles: Array<{
      x: number;
      y: number;
      speed: number;
      size: number;
      char?: string;
    }> = [];

    const init = () => {
      particles = [];
      const particleCount = type === 'matrix' ? 50 : 30;
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          speed: 0.5 + Math.random() * 2,
          size: 2 + Math.random() * 3,
          char: String.fromCharCode(0x30A0 + Math.random() * 96)
        });
      }
    };

    const draw = () => {
      ctx.fillStyle = 'rgba(0,0,0,0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      switch (type) {
        case 'matrix':
          ctx.fillStyle = '#0f0';
          particles.forEach(p => {
            ctx.font = `${p.size}px monospace`;
            ctx.fillText(p.char!, p.x, p.y);
            p.y = (p.y + p.speed) % canvas.height;
            if (Math.random() < 0.01) p.char = String.fromCharCode(0x30A0 + Math.random() * 96);
          });
          break;

        case 'waves':
          ctx.strokeStyle = '#0f0';
          ctx.beginPath();
          for (let i = 0; i < canvas.width; i++) {
            const y = canvas.height/2 + 
                     Math.sin(i * 0.02 + Date.now() * 0.001) * 30 +
                     Math.sin(i * 0.01 + Date.now() * 0.002) * 20;
            if (i === 0) ctx.moveTo(i, y);
            else ctx.lineTo(i, y);
          }
          ctx.stroke();
          break;

        case 'static':
          for (let i = 0; i < 100; i++) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            const size = Math.random() * 2;
            ctx.fillStyle = `rgba(0,255,0,${Math.random() * 0.5})`;
            ctx.fillRect(x, y, size, size);
          }
          break;

        case 'binary':
          ctx.fillStyle = '#0f0';
          ctx.font = '12px monospace';
          for (let i = 0; i < 20; i++) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            ctx.fillText(Math.random() > 0.5 ? '1' : '0', x, y);
          }
          break;
      }

      animationFrame = requestAnimationFrame(draw);
    };

    init();
    draw();

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [type]);

  return (
    <canvas 
      ref={canvasRef}
      className={`w-full h-32 ${className}`}
      style={{ filter: 'blur(0.5px)' }}
    />
  );
}