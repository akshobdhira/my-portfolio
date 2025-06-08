
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const LinkedInArticles = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Mock articles data (in real implementation, this would come from LinkedIn API or RSS feed)
  const articles = [
    {
      id: 1,
      title: "The Future of AI in Web Development: Trends to Watch in 2024",
      excerpt: "Exploring how artificial intelligence is revolutionizing the way we build and interact with web applications, from automated code generation to intelligent user experiences.",
      publishDate: "2024-01-15",
      readTime: "5 min read",
      likes: 142,
      comments: 23,
      link: "https://linkedin.com/pulse/article1",
      tags: ["AI", "Web Development", "Technology Trends"]
    },
    {
      id: 2,
      title: "Building Scalable React Applications: Lessons from the Trenches",
      excerpt: "Key insights and best practices learned while developing large-scale React applications, including state management, performance optimization, and component architecture.",
      publishDate: "2024-01-08",
      readTime: "7 min read",
      likes: 89,
      comments: 15,
      link: "https://linkedin.com/pulse/article2",
      tags: ["React", "JavaScript", "Best Practices"]
    },
    {
      id: 3,
      title: "From Student to Developer: My Journey in Computer Science",
      excerpt: "Sharing my personal journey through computer science education, internships, and the transition into professional development work.",
      publishDate: "2024-01-01",
      readTime: "4 min read",
      likes: 56,
      comments: 8,
      link: "https://linkedin.com/pulse/article3",
      tags: ["Career", "Education", "Personal Growth"]
    }
  ];

  return (
    <section id="articles" className="py-20 bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Latest <span className="gradient-text">Articles</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Thoughts and insights on technology, development, and my journey 
            in the world of computer science.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <Card className="glass border-0 h-full card-hover group">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <div className="text-sm text-muted-foreground">
                      {new Date(article.publishDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {article.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-neon-blue transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {article.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span>❤️ {article.likes}</span>
                      <span>💬 {article.comments}</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => window.open(article.link, '_blank')}
                      className="text-neon-blue hover:text-neon-blue/80"
                    >
                      Read More →
                    </Button>
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
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open('https://linkedin.com/in/alexjohnson', '_blank')}
            className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-background"
          >
            View All Articles on LinkedIn
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default LinkedInArticles;
