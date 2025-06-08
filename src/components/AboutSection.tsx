
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full animate-pulse" />
              <div className="absolute inset-2 bg-background rounded-full" />
              <div className="absolute inset-4 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-full flex items-center justify-center">
                <div className="text-6xl">👨‍💻</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-semibold">
              Passionate Developer & Problem Solver
            </h3>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a final-year Computer Science Engineering student with a passion for 
              creating innovative digital solutions. My journey in tech has been driven 
              by curiosity and a desire to solve real-world problems through code.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              With expertise in full-stack development, machine learning, and modern 
              web technologies, I've worked on various projects ranging from web 
              applications to AI-powered solutions. I believe in writing clean, 
              efficient code and creating user experiences that make a difference.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-4 glass rounded-lg">
                <div className="text-3xl font-bold text-neon-blue">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center p-4 glass rounded-lg">
                <div className="text-3xl font-bold text-neon-purple">3.8</div>
                <div className="text-sm text-muted-foreground">CGPA</div>
              </div>
              <div className="text-center p-4 glass rounded-lg">
                <div className="text-3xl font-bold text-neon-pink">15+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
              <div className="text-center p-4 glass rounded-lg">
                <div className="text-3xl font-bold text-neon-green">2+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
