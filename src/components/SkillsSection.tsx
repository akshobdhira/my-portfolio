import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Cyber Security ",
      skills: [
        {
          name: "Web-App Pentesting",
          level: 90,
          color: "from-blue-500 to-cyan-500",
        },
        { name: "TypeScript", level: 85, color: "from-blue-600 to-indigo-600" },
        { name: "Next.js", level: 80, color: "from-gray-700 to-gray-900" },
        { name: "Tailwind CSS", level: 95, color: "from-cyan-400 to-blue-500" },
        { name: "HTML/CSS", level: 95, color: "from-orange-500 to-red-500" },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 85, color: "from-green-500 to-emerald-500" },
        { name: "Python", level: 90, color: "from-yellow-400 to-amber-500" },
        { name: "Express.js", level: 85, color: "from-gray-600 to-gray-800" },
        { name: "FastAPI", level: 75, color: "from-teal-500 to-cyan-600" },
        { name: "GraphQL", level: 70, color: "from-pink-500 to-purple-500" },
      ],
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "MongoDB", level: 85, color: "from-green-600 to-green-800" },
        { name: "PostgreSQL", level: 80, color: "from-blue-700 to-indigo-700" },
        { name: "Redis", level: 75, color: "from-red-500 to-red-700" },
        { name: "Docker", level: 70, color: "from-blue-500 to-blue-700" },
        { name: "Git", level: 95, color: "from-orange-600 to-red-600" },
      ],
    },
    {
      title: "Machine Learning",
      skills: [
        {
          name: "TensorFlow",
          level: 80,
          color: "from-orange-400 to-orange-600",
        },
        { name: "PyTorch", level: 75, color: "from-red-500 to-pink-500" },
        { name: "Scikit-learn", level: 85, color: "from-blue-400 to-blue-600" },
        { name: "OpenCV", level: 70, color: "from-green-500 to-teal-500" },
        { name: "NLP", level: 75, color: "from-purple-500 to-indigo-500" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My expertise spans across multiple technologies and frameworks,
            constantly evolving with the latest industry trends.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
              className="glass rounded-xl p-6"
            >
              <h3 className="text-2xl font-semibold mb-6 text-center">
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                          duration: 1,
                          ease: "easeOut",
                        }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional skills as badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold mb-8">
            Additional Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Flutter",
              "Firebase",
              "Vercel",
              "Burpsuite",
              "Autopsy",
              "Wireshark",
              "python",
              "Vibe coding",
              "Google ADK",
              "Socket.io",
              "WebRTC",
              "Stripe API",
              "JWT",
              "OAuth",
              "REST APIs",
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.3 }}
                className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border border-neon-blue/20 px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform cursor-default"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
