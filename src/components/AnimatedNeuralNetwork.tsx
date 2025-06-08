
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
      const colors = ['#00d4ff', '#9945ff', '#ff0080', '#00ff88'];
      
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 8 + 4,
          color: colors[Math.floor(Math.random() * colors.length)],
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.6 + 0.4,
        });
      }
      
      setParticles(newParticles);
    };

    generateParticles();
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

      {/* Cursor attraction effect */}
      {particles.slice(0, 15).map((particle) => (
        <motion.div
          key={`attraction-${particle.id}`}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size * 0.6}px`,
            height: `${particle.size * 0.6}px`,
            backgroundColor: particle.color,
            opacity: 0.3,
          }}
          animate={{
            x: mousePosition.x * (particle.size * 2),
            y: mousePosition.y * (particle.size * 2),
            scale: [0.8, 1.4, 0.8],
          }}
          transition={{
            x: {
              type: "spring",
              stiffness: 200,
              damping: 20,
            },
            y: {
              type: "spring",
              stiffness: 200,
              damping: 20,
            },
            scale: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }
          }}
        />
      ))}

      {/* Background glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 via-neon-purple/5 to-neon-pink/5"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Connection lines between nearby particles */}
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
        {particles.map((particle, i) => 
          particles.slice(i + 1, i + 4).map((otherParticle, j) => {
            const distance = Math.sqrt(
              Math.pow(particle.x - otherParticle.x, 2) + 
              Math.pow(particle.y - otherParticle.y, 2)
            );
            
            if (distance < 25) {
              return (
                <motion.line
                  key={`line-${i}-${j}`}
                  x1={`${particle.x}%`}
                  y1={`${particle.y}%`}
                  x2={`${otherParticle.x}%`}
                  y2={`${otherParticle.y}%`}
                  stroke="url(#connectionGradient)"
                  strokeWidth="1"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: [0.2, 0.6, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: (i + j) * 0.1,
                  }}
                />
              );
            }
            return null;
          })
        )}
        
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(0, 212, 255)" stopOpacity="0.4" />
            <stop offset="50%" stopColor="rgb(153, 69, 255)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="rgb(255, 0, 128)" stopOpacity="0.4" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
};

export default AnimatedNeuralNetwork;
