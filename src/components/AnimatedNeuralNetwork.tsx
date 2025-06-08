import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Node {
  id: string;
  x: number;
  y: number;
  size: number;
  color: string;
}

interface Connection {
  from: string;
  to: string;
  opacity: number;
}

const AnimatedNeuralNetwork = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [nodes] = useState<Node[]>([
    // Input layer
    { id: 'i1', x: 15, y: 20, size: 8, color: 'from-neon-blue to-neon-purple' },
    { id: 'i2', x: 15, y: 35, size: 8, color: 'from-neon-blue to-neon-purple' },
    { id: 'i3', x: 15, y: 50, size: 8, color: 'from-neon-blue to-neon-purple' },
    { id: 'i4', x: 15, y: 65, size: 8, color: 'from-neon-blue to-neon-purple' },
    { id: 'i5', x: 15, y: 80, size: 8, color: 'from-neon-blue to-neon-purple' },
    
    // Hidden layer 1
    { id: 'h1', x: 35, y: 15, size: 10, color: 'from-neon-purple to-neon-pink' },
    { id: 'h2', x: 35, y: 30, size: 10, color: 'from-neon-purple to-neon-pink' },
    { id: 'h3', x: 35, y: 45, size: 10, color: 'from-neon-purple to-neon-pink' },
    { id: 'h4', x: 35, y: 60, size: 10, color: 'from-neon-purple to-neon-pink' },
    { id: 'h5', x: 35, y: 75, size: 10, color: 'from-neon-purple to-neon-pink' },
    { id: 'h6', x: 35, y: 85, size: 10, color: 'from-neon-purple to-neon-pink' },
    
    // Hidden layer 2
    { id: 'h7', x: 55, y: 25, size: 9, color: 'from-neon-pink to-neon-blue' },
    { id: 'h8', x: 55, y: 40, size: 9, color: 'from-neon-pink to-neon-blue' },
    { id: 'h9', x: 55, y: 55, size: 9, color: 'from-neon-pink to-neon-blue' },
    { id: 'h10', x: 55, y: 70, size: 9, color: 'from-neon-pink to-neon-blue' },
    
    // Output layer
    { id: 'o1', x: 75, y: 35, size: 12, color: 'from-neon-blue to-neon-purple' },
    { id: 'o2', x: 75, y: 50, size: 12, color: 'from-neon-blue to-neon-purple' },
    { id: 'o3', x: 75, y: 65, size: 12, color: 'from-neon-blue to-neon-purple' },
    
    // Additional scattered nodes
    { id: 's1', x: 85, y: 15, size: 6, color: 'from-neon-purple to-neon-pink' },
    { id: 's2', x: 90, y: 80, size: 6, color: 'from-neon-blue to-neon-purple' },
    { id: 's3', x: 5, y: 10, size: 7, color: 'from-neon-pink to-neon-blue' },
    { id: 's4', x: 5, y: 90, size: 7, color: 'from-neon-purple to-neon-pink' },
  ]);

  const [connections, setConnections] = useState<Connection[]>([]);

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
    // Create connections between layers
    const newConnections: Connection[] = [];
    
    // Input to hidden layer 1
    ['i1', 'i2', 'i3', 'i4', 'i5'].forEach(input => {
      ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].forEach(hidden => {
        newConnections.push({ from: input, to: hidden, opacity: Math.random() * 0.6 + 0.2 });
      });
    });
    
    // Hidden layer 1 to hidden layer 2
    ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].forEach(h1 => {
      ['h7', 'h8', 'h9', 'h10'].forEach(h2 => {
        newConnections.push({ from: h1, to: h2, opacity: Math.random() * 0.4 + 0.1 });
      });
    });
    
    // Hidden layer 2 to output
    ['h7', 'h8', 'h9', 'h10'].forEach(hidden => {
      ['o1', 'o2', 'o3'].forEach(output => {
        newConnections.push({ from: hidden, to: output, opacity: Math.random() * 0.5 + 0.3 });
      });
    });

    setConnections(newConnections);
  }, []);

  const getNodePosition = (nodeId: string) => {
    const node = nodes.find(n => n.id === nodeId);
    return node ? { x: node.x, y: node.y } : { x: 0, y: 0 };
  };

  return (
    <motion.div 
      className="absolute inset-0 pointer-events-none overflow-hidden"
      animate={{
        x: mousePosition.x * 10,
        y: mousePosition.y * 10,
      }}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 30,
        mass: 1
      }}
    >
      <motion.svg 
        className="w-full h-full" 
        viewBox="0 0 100 100" 
        preserveAspectRatio="xMidYMid slice"
        animate={{
          rotateX: mousePosition.y * 5,
          rotateY: mousePosition.x * 5,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20
        }}
      >
        {/* Animated connections */}
        {connections.map((connection, index) => {
          const fromPos = getNodePosition(connection.from);
          const toPos = getNodePosition(connection.to);
          
          return (
            <motion.line
              key={`${connection.from}-${connection.to}`}
              x1={fromPos.x}
              y1={fromPos.y}
              x2={toPos.x}
              y2={toPos.y}
              stroke="url(#connectionGradient)"
              strokeWidth="0.2"
              initial={{ opacity: 0, pathLength: 0 }}
              animate={{ 
                opacity: connection.opacity,
                pathLength: 1,
              }}
              transition={{ 
                delay: index * 0.05,
                duration: 2,
                opacity: {
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }
              }}
            />
          );
        })}
        
        {/* Gradient definitions */}
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.6" />
            <stop offset="50%" stopColor="rgb(147, 51, 234)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="rgb(236, 72, 153)" stopOpacity="0.6" />
          </linearGradient>
        </defs>
      </motion.svg>

      {/* Animated nodes */}
      {nodes.map((node, index) => (
        <motion.div
          key={node.id}
          className={`absolute rounded-full bg-gradient-to-br ${node.color} shadow-lg`}
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            width: `${node.size}px`,
            height: `${node.size}px`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.4, 1, 0.4],
            scale: [0.8, 1.2, 0.8],
            x: mousePosition.x * (node.size * 0.3),
            y: mousePosition.y * (node.size * 0.3),
          }}
          transition={{
            delay: index * 0.1,
            duration: 3 + (index * 0.1),
            repeat: Infinity,
            ease: "easeInOut",
            x: {
              type: "spring",
              stiffness: 100,
              damping: 15
            },
            y: {
              type: "spring",
              stiffness: 100,
              damping: 15
            }
          }}
        />
      ))}

      {/* Pulsing data flow effect */}
      {connections.slice(0, 8).map((connection, index) => {
        const fromPos = getNodePosition(connection.from);
        const toPos = getNodePosition(connection.to);
        
        return (
          <motion.div
            key={`pulse-${index}`}
            className="absolute w-1 h-1 bg-neon-blue rounded-full shadow-lg"
            initial={{ 
              left: `${fromPos.x}%`,
              top: `${fromPos.y}%`,
              opacity: 0 
            }}
            animate={{
              left: `${toPos.x}%`,
              top: `${toPos.y}%`,
              opacity: [0, 1, 0],
            }}
            transition={{
              delay: index * 0.5,
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        );
      })}
    </motion.div>
  );
};

export default AnimatedNeuralNetwork;
