"use client";
import React, { useRef, useEffect } from 'react';
interface Ripple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
  startTime: number;
}

const RippleCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ripples = useRef<Ripple[]>([]).current;
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    const animateBackground = () => {
      if (!ctx) return;
      const time = Date.now() * 0.001;
      const waveSpeed = 0.5; 
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, `rgba(173, 216, 230, ${0.7 + 0.2 * Math.sin(time * waveSpeed)})`); 
      gradient.addColorStop(1, `rgba(66, 153, 225, ${0.7 + 0.2 * Math.cos(time * waveSpeed)})`);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      const now = Date.now();
      ripples.forEach((ripple, index) => {
        if (now < ripple.startTime) return; 
        const elapsed = now - ripple.startTime;
        const progress = elapsed / 1000; 
        if (progress > 1) {
          ripples.splice(index, 1); 
        } else {
          ripple.radius = ripple.maxRadius * progress;
          ripple.alpha = 1 - progress; 
          const rippleGradient = ctx.createRadialGradient(
            ripple.x, ripple.y, ripple.radius * 0.8,
            ripple.x, ripple.y, ripple.radius
          );
          rippleGradient.addColorStop(0, `rgba(66, 153, 225, ${ripple.alpha * 0.5})`); 
          rippleGradient.addColorStop(1, `rgba(66, 153, 225, 0)`); 
          ctx.beginPath();
          ctx.arc(ripple.x, ripple.y, ripple.radius, 0, 2 * Math.PI);
          ctx.fillStyle = rippleGradient;
          ctx.fill();
          ctx.beginPath();
          for (let i = 0; i < 2 * Math.PI; i += 0.1) {
            const dx = ripple.radius * Math.cos(i) * (1 + 0.05 * Math.random());
            const dy = ripple.radius * Math.sin(i) * (1 + 0.05 * Math.random());
            ctx.lineTo(ripple.x + dx, ripple.y + dy);
          }
          ctx.closePath();
          ctx.strokeStyle = `rgba(66, 153, 225, ${ripple.alpha * 0.7})`; 
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });
      requestAnimationFrame(animateBackground);
    };
    const handleCanvasClick = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = event.clientX - rect.left;
      const clickY = event.clientY - rect.top;
      const now = Date.now();
      for (let i = 0; i < 3; i++) {
        ripples.push({
          x: clickX,
          y: clickY,
          radius: 0,
          maxRadius: 100 + i * 20, 
          alpha: 1,
          startTime: now + i * 300,
        });
      }
    };
    canvas.addEventListener('click', handleCanvasClick);
    animateBackground();
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('click', handleCanvasClick);
    };
  }, [ripples]);
  return <canvas ref={canvasRef} style={{ display: 'block', width: '100vw', height: '100vh' }} />;
};

export default RippleCanvas;
