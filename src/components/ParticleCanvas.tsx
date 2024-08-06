"use client"
import React, { useRef, useEffect } from 'react';

interface Particle {
  x: number;
  y: number;
  speed: number;
  direction: number; // -1 for left, 1 for right
  targetX: number | null;
  targetY: number | null;
  newY: number | null;
  angle: number; // angle of movement
  startTime: number | null; // timestamp when particle starts moving towards click
}

const ParticleCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]).current;
  const fishImgRef = useRef<HTMLImageElement | null>(null);
  const TIMER_DURATION = 1000; // 3 seconds in milliseconds

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

    const fishImg = new Image();
    fishImg.src = '/fish1.png'; // Replace with your fish PNG path
    fishImgRef.current = fishImg;

    fishImg.onload = () => {
      for (let i = 0; i < 10; i++) { // Reduced number of particles to 10
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          speed: Math.random() * 1 + 0.5, // Speed between 0.5 and 1.5
          direction: Math.random() < 0.5 ? -1 : 1,
          targetX: null,
          targetY: null,
          newY: null,
          angle: 0,
          startTime: null,
        });
      }

      const easeOutQuad = (t: number) => t * (2 - t); // Easing function for smoother transitions

      const drawParticles = () => {
        if (!ctx) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((particle) => {
          const now = Date.now();

          if (particle.targetX !== null && particle.targetY !== null) {
            if (particle.startTime !== null && (now - particle.startTime) > TIMER_DURATION) {
              particle.targetX = null;
              particle.targetY = null;
              particle.newY = Math.random() * canvas.height;
              particle.startTime = null;
            } else {
              // Move to click position
              const dx = particle.targetX - particle.x;
              const dy = particle.targetY - particle.y;
              const dist = Math.sqrt(dx * dx + dy * dy);

              particle.angle = Math.atan2(dy, dx); // Calculate the angle towards the target

              if (dist < 5) { // Adjusted threshold distance to 5
                particle.targetX = null;
                particle.targetY = null;
                particle.newY = Math.random() * canvas.height; // Assign new y-coordinate
                particle.startTime = null;
              } else {
                if(particle.startTime){

                    const elapsed = (now - particle.startTime) / TIMER_DURATION; // Calculate elapsed time as a fraction
                    const easeElapsed = easeOutQuad(elapsed); // Apply easing function
                    particle.x += (dx / dist) * particle.speed * easeElapsed;
                    particle.y += (dy / dist) * particle.speed * easeElapsed;
                }
              }
            }
          } else if (particle.newY !== null) {
            // Move to new y-coordinate
            const dy = particle.newY - particle.y;
            const distY = Math.abs(dy);

            if (distY < 5) { // Adjusted threshold distance to 5
              particle.newY = null;
            } else {
              particle.y += (dy / distY) * particle.speed;
            }

            particle.angle = particle.direction === 1 ? 0 : Math.PI; // Maintain horizontal direction

            particle.x += particle.direction * particle.speed;

            if (particle.x > canvas.width || particle.x < 0) {
              particle.direction *= -1;
              particle.angle = Math.atan2(0, particle.direction); // Update angle when changing direction
            }
          } else {
            // Horizontal motion
            particle.x += particle.direction * particle.speed;

            particle.angle = particle.direction === 1 ? 0 : Math.PI; // Maintain horizontal direction

            if (particle.x > canvas.width || particle.x < 0) {
              particle.direction *= -1;
              particle.angle = Math.atan2(0, particle.direction); // Update angle when changing direction
            }
          }

          ctx.save();
          ctx.translate(particle.x, particle.y);
          ctx.rotate(particle.angle); // Rotate to face the movement direction
          if (fishImgRef.current) {
            ctx.drawImage(fishImgRef.current, -15, -15, 50, 30); // Adjust size as needed
          }
          ctx.restore();
        });

        requestAnimationFrame(drawParticles);
      };

      drawParticles();
    };

    const handleCanvasClick = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = event.clientX - rect.left;
      const clickY = event.clientY - rect.top;

      const now = Date.now();

      particles.forEach((particle) => {
        particle.targetX = clickX;
        particle.targetY = clickY;
        particle.newY = null; // Reset newY when click happens
        particle.startTime = now; // Record the start time of the movement towards the click
      });
    };

    canvas.addEventListener('click', handleCanvasClick);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('click', handleCanvasClick);
    };
  }, [particles]);

  return <canvas ref={canvasRef} style={{ display: 'block', width: '100vw', height: '100vh' }} />;
};

export default ParticleCanvas;
