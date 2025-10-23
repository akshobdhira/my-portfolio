
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';

interface MediumArticle {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  categories: string[];
  thumbnail?: string;
}

const LinkedInArticles = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [articles, setArticles] = useState<MediumArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const MEDIUM_USERNAME = 'akshobdhira';
  const MEDIUM_RSS_URL = `https://medium.com/feed/@${MEDIUM_USERNAME}`;

  useEffect(() => {
    const fetchMediumArticles = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(MEDIUM_RSS_URL)}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch articles');
        }

        const data = await response.json();

        if (data.status === 'ok' && data.items) {
          setArticles(data.items.slice(0, 3));
        } else {
          throw new Error('Invalid response from RSS feed');
        }
      } catch (err) {
        console.error('Error fetching Medium articles:', err);
        setError('Failed to load articles. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchMediumArticles();
  }, []);

  const stripHtml = (html: string) => {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  const getReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const words = content.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
  };

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
            in the world of computer science from my Medium blog.
          </p>
        </motion.div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="glass border-0 h-full">
                <CardHeader>
                  <Skeleton className="h-4 w-32 mb-2" />
                  <Skeleton className="h-6 w-full" />
                </CardHeader>
                <CardContent className="space-y-4">
                  <Skeleton className="h-20 w-full" />
                  <div className="flex gap-2">
                    <Skeleton className="h-6 w-16" />
                    <Skeleton className="h-6 w-16" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">{error}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => {
              const cleanDescription = stripHtml(article.description);
              const excerpt = cleanDescription.length > 150
                ? cleanDescription.substring(0, 150) + '...'
                : cleanDescription;

              return (
                <motion.div
                  key={article.link}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                >
                  <Card className="glass border-0 h-full card-hover group bg-gradient-to-br from-blue-100 to-blue-300 dark:bg-card">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <div className="text-sm text-muted-foreground">
                          {new Date(article.pubDate).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {getReadTime(cleanDescription)}
                        </div>
                      </div>
                      <CardTitle className="text-xl group-hover:text-neon-blue transition-colors">
                        {article.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {excerpt}
                      </p>

                      {article.categories && article.categories.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {article.categories.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}

                      <div className="flex items-center justify-end pt-4 border-t border-border">
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
              );
            })}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open(`https://medium.com/@${MEDIUM_USERNAME}`, '_blank')}
            className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-background"
          >
            View All Articles on Medium
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default LinkedInArticles;
