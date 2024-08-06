"use client";
import React, { useRef, useEffect } from 'react';

interface Ripple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
  startTime: number; // When the ripple should start expanding
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
      const waveSpeed = 0.5; // Speed of the gradient movement

      // Calculate gradient offsets
      const offsetX = (Math.sin(time * waveSpeed) * canvas.width) % canvas.width;
      const offsetY = (Math.cos(time * waveSpeed) * canvas.height) % canvas.height;

      // Create animated background using a gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, `rgba(173, 216, 230, ${0.7 + 0.2 * Math.sin(time * waveSpeed)})`); // Light blue with less opacity
      gradient.addColorStop(1, `rgba(66, 153, 225, ${0.7 + 0.2 * Math.cos(time * waveSpeed)})`); // Darker blue with less opacity

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw ripples
      const now = Date.now();
      ripples.forEach((ripple, index) => {
        if (now < ripple.startTime) return; // Delay the start of the ripple

        const elapsed = now - ripple.startTime;
        const progress = elapsed / 1000; // Ripple duration in seconds

        if (progress > 1) {
          ripples.splice(index, 1); // Remove the ripple when it exceeds duration
        } else {
          ripple.radius = ripple.maxRadius * progress;
          ripple.alpha = 1 - progress; // Fade out the ripple

          // Draw the ripple with a lighter blue gradient
          const rippleGradient = ctx.createRadialGradient(
            ripple.x, ripple.y, ripple.radius * 0.8,
            ripple.x, ripple.y, ripple.radius
          );
          rippleGradient.addColorStop(0, `rgba(66, 153, 225, ${ripple.alpha * 0.5})`); // Blue.400
          rippleGradient.addColorStop(1, `rgba(66, 153, 225, 0)`); // Transparent

          ctx.beginPath();
          ctx.arc(ripple.x, ripple.y, ripple.radius, 0, 2 * Math.PI);
          ctx.fillStyle = rippleGradient;
          ctx.fill();

          // Add some noise to the ripple edges
          ctx.beginPath();
          for (let i = 0; i < 2 * Math.PI; i += 0.1) {
            const dx = ripple.radius * Math.cos(i) * (1 + 0.05 * Math.random());
            const dy = ripple.radius * Math.sin(i) * (1 + 0.05 * Math.random());
            ctx.lineTo(ripple.x + dx, ripple.y + dy);
          }
          ctx.closePath();
          ctx.strokeStyle = `rgba(66, 153, 225, ${ripple.alpha * 0.7})`; // Blue.400
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

      // Create three ripples with staggered start times
      for (let i = 0; i < 3; i++) {
        ripples.push({
          x: clickX,
          y: clickY,
          radius: 0,
          maxRadius: 100 + i * 20, // Increase the max radius for subsequent ripples
          alpha: 1,
          startTime: now + i * 300, // Stagger the start time
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
