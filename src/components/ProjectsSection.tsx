
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Clarity-steps",
      description: "AI Career & Acadenic Companion for Parents to help their children ",
      longDescription: "Indian parents want to support their child's academic and career journey, but often struggle with what to do on a week-to-week basis. Well-intentioned conversations turn into pressure, guidance becomes comparison, and support leads to confusion. Most existing solutions offer static advice or one-time counselling that fails to adapt to a child's real context. This project takes a different approach by focusing on clear, practical actions parents can follow every week.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      technologies: ["Python", "google-adk", "Streamlit"],
      github: "https://github.com/akshobdhira/clarity-steps",
      demo: "https://clarity-steps.streamlit.app/",
      features: [
        "Analyzes parent concerns to identify hidden pressure points and blind spots",
        "Generates a personalized 12-week, week-by-week action plan",
        "Focuses on practical weekly actions instead of generic career advice",
        "Works through a simple web interface with no sign-up required",
        "Downloadable PDF report with actionable insights"
      ]
    },
    {
      id: 2,
      title: "Smart Campus Management System",
      description: "IoT-integrated campus management system for student attendance, facility booking, and resource optimization.",
      longDescription: "A comprehensive campus management solution that integrates IoT sensors for smart attendance tracking, facility management, and resource optimization. The system provides real-time analytics and automated reporting for administrative efficiency.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      technologies: ["React", "Python", "PostgreSQL", "Arduino", "MQTT", "Chart.js"],
      github: "https://github.com",
      demo: "https://demo.com",
      features: [
        "IoT-based attendance tracking",
        "Facility booking system",
        "Resource optimization algorithms",
        "Real-time analytics dashboard",
        "Automated report generation"
      ]
    },
    {
      id: 3,
      title: "ML-Based Stock Prediction App",
      description: "Machine learning application for stock price prediction using historical data and technical indicators.",
      longDescription: "Advanced stock prediction application using LSTM neural networks and technical analysis indicators. The system processes historical stock data, news sentiment, and market indicators to generate price predictions with confidence intervals.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      technologies: ["Python", "TensorFlow", "React", "FastAPI", "PostgreSQL", "Redis"],
      github: "https://github.com",
      demo: "https://demo.com",
      features: [
        "LSTM-based price prediction",
        "Technical indicator analysis",
        "News sentiment integration",
        "Real-time data processing",
        "Interactive chart visualization"
      ]
    },
    {
      id: 4,
      title: "Real-time Chat Application",
      description: "Modern chat application with real-time messaging, file sharing, and video calling capabilities.",
      longDescription: "Feature-rich chat application built with modern web technologies. Supports real-time messaging, file sharing, group chats, and video calling. Includes message encryption, user presence indicators, and message history search.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      technologies: ["React", "Socket.io", "Node.js", "WebRTC", "MongoDB", "Express"],
      github: "https://github.com",
      demo: "https://demo.com",
      features: [
        "Real-time messaging",
        "File sharing capabilities",
        "Video calling integration",
        "Group chat functionality",
        "Message encryption"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore my portfolio of innovative projects that showcase my technical skills 
            and passion for creating impactful solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group relative glass rounded-xl overflow-hidden card-hover bg-gradient-to-br from-blue-100 to-blue-300 dark:bg-card"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 3} more
                    </Badge>
                  )}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(project.github, '_blank')}
                    className="flex-1"
                  >
                    GitHub
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => window.open(project.demo, '_blank')}
                    className="flex-1 bg-neon-blue hover:bg-neon-blue/90"
                  >
                    Live Demo
                  </Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSelectedProject(project)}
                      >
                        Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-6">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-64 object-cover rounded-lg"
                        />
                        <p className="text-muted-foreground">{project.longDescription}</p>
                        
                        <div>
                          <h4 className="font-semibold mb-3">Key Features:</h4>
                          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                            {project.features.map((feature, idx) => (
                              <li key={idx}>{feature}</li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3">Technologies Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-3 pt-4">
                          <Button
                            variant="outline"
                            onClick={() => window.open(project.github, '_blank')}
                            className="flex-1"
                          >
                            View on GitHub
                          </Button>
                          <Button
                            onClick={() => window.open(project.demo, '_blank')}
                            className="flex-1 bg-neon-blue hover:bg-neon-blue/90"
                          >
                            Live Demo
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
