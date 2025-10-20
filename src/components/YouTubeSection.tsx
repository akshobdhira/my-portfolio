
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const YouTubeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Mock YouTube videos data (in real implementation, this would come from YouTube API)
  const videos = [
    {
      id: "1",
      title: "Building a Full-Stack MERN Application from Scratch",
      description: "Complete tutorial on creating a modern web application using MongoDB, Express.js, React, and Node.js with authentication and deployment.",
      thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400",
      duration: "45:32",
      views: "12.5k",
      publishDate: "2024-01-20",
      url: "https://youtube.com/watch?v=example1",
      tags: ["React", "Node.js", "MongoDB", "Tutorial"]
    },
    {
      id: "2",
      title: "Machine Learning with Python: Predicting Stock Prices",
      description: "Learn how to build a machine learning model to predict stock prices using Python, TensorFlow, and historical market data.",
      thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400",
      duration: "35:45",
      views: "8.7k",
      publishDate: "2024-01-15",
      url: "https://youtube.com/watch?v=example2",
      tags: ["Python", "Machine Learning", "TensorFlow", "Finance"]
    },
    {
      id: "3",
      title: "CS Interview Preparation: Data Structures & Algorithms",
      description: "Essential data structures and algorithms every computer science student should know for technical interviews.",
      thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400",
      duration: "28:15",
      views: "15.2k",
      publishDate: "2024-01-10",
      url: "https://youtube.com/watch?v=example3",
      tags: ["Interview Prep", "Algorithms", "Data Structures", "Career"]
    }
  ];

  return (
    <section id="youtube" className="py-20 bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            YouTube <span className="gradient-text">Videos</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-center">
            Hands-on tech content in cybersecurity, AI, data science, and emerging tech<br className="hidden sm:block" />
            featuring breaking down tools, building projects,<br className="hidden sm:block" />
            and showing how it really works.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <Card 
                className="glass border-0 h-full card-hover group cursor-pointer bg-gradient-to-br from-blue-100 to-blue-300 dark:bg-card"
                onClick={() => window.open(video.url, '_blank')}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                  <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                    📹 LIVE
                  </div>
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <div className="w-0 h-0 border-l-8 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1" />
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3 line-clamp-2 group-hover:text-neon-blue transition-colors">
                    {video.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {video.description}
                  </p>

                  <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
                    <span>{video.views} views</span>
                    <span>
                      {new Date(video.publishDate).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {video.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="text-center">
                    <span className="text-sm text-neon-blue group-hover:underline">
                      Watch Video →
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-12"
        >
          <div className="mb-8 p-6 glass rounded-xl">
            <h3 className="text-2xl font-semibold mb-4">Channel Statistics</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl font-bold text-neon-blue">25+</div>
                <div className="text-muted-foreground">Videos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-neon-purple">1.2k</div>
                <div className="text-muted-foreground">Subscribers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-neon-pink">50k+</div>
                <div className="text-muted-foreground">Total Views</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-neon-green">98%</div>
                <div className="text-muted-foreground">Like Ratio</div>
              </div>
            </div>
          </div>

          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open('https://youtube.com/@alexjohnson', '_blank')}
            className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
          >
            Subscribe to Channel
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default YouTubeSection;
