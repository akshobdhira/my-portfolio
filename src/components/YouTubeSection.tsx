import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  views: string;
  publishDate: string;
  url: string;
  tags: string[];
}

interface ChannelStats {
  subscriberCount: string;
  videoCount: string;
  viewCount: string;
  channelTitle: string;
  channelUrl: string;
}

const YouTubeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [channelStats, setChannelStats] = useState<ChannelStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Format duration from ISO 8601 to readable format
  const formatDuration = (duration: string): string => {
    const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
    if (!match) return '0:00';
    
    const hours = parseInt(match[1] || '0');
    const minutes = parseInt(match[2] || '0');
    const seconds = parseInt(match[3] || '0');
    
    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  // Format view count
  const formatViews = (views: string): string => {
    const num = parseInt(views);
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}k`;
    }
    return num.toString();
  };

  // Format subscriber count
  const formatSubscribers = (count: string): string => {
    const num = parseInt(count);
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}k`;
    }
    return num.toString();
  };

  useEffect(() => {
    const fetchYouTubeData = async () => {
      try {
        const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
        const channelId = import.meta.env.VITE_YOUTUBE_CHANNEL_ID;

        if (!apiKey || !channelId) {
          throw new Error('YouTube API key or Channel ID not configured');
        }

        // Fetch channel statistics
        const channelResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?part=statistics,snippet&id=${channelId}&key=${apiKey}`
        );
        const channelData = await channelResponse.json();

        if (channelData.items && channelData.items.length > 0) {
          const channel = channelData.items[0];
          setChannelStats({
            subscriberCount: channel.statistics.subscriberCount,
            videoCount: channel.statistics.videoCount,
            viewCount: channel.statistics.viewCount,
            channelTitle: channel.snippet.title,
            channelUrl: `https://youtube.com/channel/${channelId}`
          });
        }

        // Fetch latest videos (excluding shorts - videos longer than 60 seconds)
        const videosResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&type=video&order=date&maxResults=50&key=${apiKey}`
        );
        const videosData = await videosResponse.json();

        if (videosData.items) {
          // Get detailed video information including duration and view count
          const videoIds = videosData.items.map((item: any) => item.id.videoId).join(',');
          const detailsResponse = await fetch(
            `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${videoIds}&key=${apiKey}`
          );
          const detailsData = await detailsResponse.json();

          // Filter out shorts (videos under 60 seconds) and get only 3 videos
          const longVideos: YouTubeVideo[] = [];

          for (let i = 0; i < videosData.items.length && longVideos.length < 3; i++) {
            const item = videosData.items[i];
            const details = detailsData.items[i];

            // Parse duration to check if it's longer than 60 seconds
            const durationMatch = details.contentDetails.duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
            if (durationMatch) {
              const hours = parseInt(durationMatch[1] || '0');
              const minutes = parseInt(durationMatch[2] || '0');
              const seconds = parseInt(durationMatch[3] || '0');
              const totalSeconds = hours * 3600 + minutes * 60 + seconds;

              // Only include videos longer than 60 seconds (not shorts)
              if (totalSeconds > 60) {
                longVideos.push({
                  id: item.id.videoId,
                  title: item.snippet.title,
                  description: item.snippet.description,
                  thumbnail: item.snippet.thumbnails.maxres?.url || item.snippet.thumbnails.high?.url,
                  duration: formatDuration(details.contentDetails.duration),
                  views: formatViews(details.statistics.viewCount),
                  publishDate: item.snippet.publishedAt,
                  url: `https://youtube.com/watch?v=${item.id.videoId}`,
                  tags: item.snippet.tags?.slice(0, 3) || []
                });
              }
            }
          }

          setVideos(longVideos);
        }
      } catch (err) {
        console.error('Error fetching YouTube data:', err);
        setError('Failed to load YouTube videos');
      } finally {
        setLoading(false);
      }
    };

    fetchYouTubeData();
  }, []);

  if (loading) {
    return (
      <section id="youtube" className="py-20 bg-muted/30" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-neon-blue mx-auto"></div>
            <p className="mt-4 text-muted-foreground">Loading YouTube videos...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="youtube" className="py-20 bg-muted/30" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-red-500">{error}</p>
            <p className="text-sm text-muted-foreground mt-2">
              Please check your API configuration
            </p>
          </div>
        </div>
      </section>
    );
  }

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

        {channelStats && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-center mt-12"
          >
            <div className="mb-8 p-6 glass rounded-xl">
              <h3 className="text-2xl font-semibold mb-4">{channelStats.channelTitle} Statistics</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <div className="text-3xl font-bold text-neon-blue">{channelStats.videoCount}</div>
                  <div className="text-muted-foreground">Videos</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-neon-purple">{formatSubscribers(channelStats.subscriberCount)}</div>
                  <div className="text-muted-foreground">Subscribers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-neon-pink">{formatViews(channelStats.viewCount)}</div>
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
              onClick={() => window.open(channelStats.channelUrl, '_blank')}
              className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
            >
              Subscribe to Channel
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default YouTubeSection;