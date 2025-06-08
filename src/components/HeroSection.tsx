
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import FloatingIcons from '@/components/FloatingIcons';

const HeroSection = () => {
  const handleDownloadResume = () => {
    console.log('Downloading resume...');
    // Create a sample resume download link
    const link = document.createElement('a');
    link.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent('Resume content would go here');
    link.download = 'resume.txt';
    link.click();
  };

  const handleHireMe = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <FloatingIcons />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="block text-foreground">Hi, I'm</span>
            <span className="block bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent animate-gradient-x">
              Alex Johnson
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-mono"
          >
            <div className="typewriter">
              Full-Stack Developer & AI Enthusiast
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Final year BTech Computer Science Engineering student passionate about creating 
            innovative solutions with modern technologies. Specialized in React, Node.js, 
            Python, and Machine Learning.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={handleHireMe}
              size="lg"
              className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-pink text-white font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-neon-blue/25"
            >
              Hire Me
            </Button>
            
            <Button
              onClick={handleDownloadResume}
              variant="outline"
              size="lg"
              className="border-2 border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-background font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-neon-blue/25"
            >
              Download Resume
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="pt-16"
          >
            <div className="w-6 h-10 border-2 border-neon-blue rounded-full mx-auto relative">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-3 bg-neon-blue rounded-full absolute top-2 left-1/2 transform -translate-x-1/2"
              />
            </div>
            <p className="text-sm text-muted-foreground mt-2">Scroll to explore</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 via-transparent to-neon-purple/5 pointer-events-none" />
    </section>
  );
};

export default HeroSection;
