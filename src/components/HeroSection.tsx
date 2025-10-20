import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import AnimatedNeuralNetwork from '@/components/AnimatedNeuralNetwork';

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
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden overflow-x-hidden pt-16">
      <AnimatedNeuralNetwork />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold break-words"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="block text-foreground">Hi, I'm</span>
            <span className="block text-primary">
              R N R Akshob Dhira
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-base sm:text-xl md:text-2xl text-black dark:text-white font-mono max-w-3xl mx-auto leading-relaxed"
          >
            I break, learn, and build technology to solve problems that matter
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-full"
          >
            <Button
              onClick={handleHireMe}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-2 border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-background font-semibold px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-neon-blue/25"
            >
              Hire Me
            </Button>
            
            <Button
              onClick={handleDownloadResume}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-2 border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-background font-semibold px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-neon-blue/25"
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
