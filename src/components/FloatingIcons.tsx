
import { motion } from 'framer-motion';

const FloatingIcons = () => {
  const icons = [
    { symbol: '⚛️', x: '10%', y: '20%', delay: 0 },
    { symbol: '🚀', x: '85%', y: '15%', delay: 0.2 },
    { symbol: '💻', x: '15%', y: '70%', delay: 0.4 },
    { symbol: '🎯', x: '80%', y: '75%', delay: 0.6 },
    { symbol: '⚡', x: '50%', y: '10%', delay: 0.8 },
    { symbol: '🔥', x: '20%', y: '50%', delay: 1.0 },
    { symbol: '✨', x: '75%', y: '45%', delay: 1.2 },
    { symbol: '🌟', x: '90%', y: '60%', delay: 1.4 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          className="absolute text-3xl md:text-4xl"
          style={{ left: icon.x, top: icon.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 0.3, 
            scale: 1,
            y: [0, -20, 0],
          }}
          transition={{
            delay: icon.delay,
            duration: 1,
            y: {
              duration: 3 + (index * 0.2),
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          {icon.symbol}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingIcons;
