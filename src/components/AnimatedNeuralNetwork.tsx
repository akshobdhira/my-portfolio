
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  speedX: number;
  speedY: number;
  opacity: number;
}

const AnimatedNeuralNetwork = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    // Generate random particles
    const generateParticles = () => {
      const newParticles: Particle[] = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 8 + 4,
          color: '#2193b0', // Oceanic blue
          speedX: (Math.random() - 0.5) * 0.25, // Slower movement
          speedY: (Math.random() - 0.5) * 0.25, // Slower movement
          opacity: Math.random() * 0.6 + 0.4,
        });
      }
      setParticles(newParticles);
    };
    generateParticles();
  }, []);

  useEffect(() => {
    // Animate particles
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev.map((p) => {
          let nx = p.x + p.speedX;
          let ny = p.y + p.speedY;
          if (nx > 100) nx = 0;
          if (nx < 0) nx = 100;
          if (ny > 100) ny = 0;
          if (ny < 0) ny = 100;
          return { ...p, x: nx, y: ny };
        })
      );
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 pointer-events-none overflow-hidden"
      animate={{
        x: mousePosition.x * 20,
        y: mousePosition.y * 20,
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 30,
        mass: 0.5
      }}
    >
      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full shadow-lg"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            opacity: particle.opacity,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
          }}
          animate={{
            x: [0, particle.speedX * 100, 0],
            y: [0, particle.speedY * 100, 0],
            scale: [1, 1.2, 1],
            opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity],
          }}
          transition={{
            duration: 4 + (particle.id * 0.1),
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.id * 0.1,
          }}
          whileHover={{
            scale: 1.5,
            transition: { duration: 0.2 }
          }}
        />
      ))}
    </motion.div>
  );
};

export default AnimatedNeuralNetwork;
