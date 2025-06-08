
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const CodingProfiles = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const profiles = [
    {
      name: "LeetCode",
      username: "alexjohnson_dev",
      stats: {
        solved: "450+",
        ranking: "Top 15%",
        streak: "45 days"
      },
      color: "from-orange-500 to-yellow-500",
      icon: "💻",
      url: "https://leetcode.com/alexjohnson",
      description: "Algorithmic problem solving"
    },
    {
      name: "GitHub",
      username: "alexjohnson-dev",
      stats: {
        repos: "25+",
        followers: "120",
        stars: "300+"
      },
      color: "from-gray-700 to-gray-900",
      icon: "🐙",
      url: "https://github.com/alexjohnson",
      description: "Open source contributions"
    },
    {
      name: "CodeChef",
      username: "alex_chef",
      stats: {
        rating: "1850",
        rank: "4 Star",
        contests: "25+"
      },
      color: "from-brown-600 to-orange-600",
      icon: "👨‍🍳",
      url: "https://codechef.com/users/alex_chef",
      description: "Competitive programming"
    },
    {
      name: "Codeforces",
      username: "alexj_cf",
      stats: {
        rating: "1650",
        rank: "Expert",
        contests: "30+"
      },
      color: "from-blue-600 to-purple-600",
      icon: "⚔️",
      url: "https://codeforces.com/profile/alexj_cf",
      description: "Algorithmic contests"
    },
    {
      name: "HackerRank",
      username: "alexjohnson2024",
      stats: {
        badges: "15+",
        rank: "Gold",
        score: "2500+"
      },
      color: "from-green-500 to-emerald-600",
      icon: "🏆",
      url: "https://hackerrank.com/alexjohnson2024",
      description: "Skills assessment"
    },
    {
      name: "Stack Overflow",
      username: "alex-dev",
      stats: {
        reputation: "1.2k",
        answers: "45",
        questions: "12"
      },
      color: "from-orange-600 to-red-600",
      icon: "📚",
      url: "https://stackoverflow.com/users/alex-dev",
      description: "Community support"
    }
  ];

  return (
    <section id="profiles" className="py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Coding <span className="gradient-text">Profiles</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My journey across various coding platforms, showcasing problem-solving 
            skills and contributions to the developer community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profiles.map((profile, index) => (
            <motion.div
              key={profile.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.8 }}
            >
              <Card 
                className="glass border-0 h-full card-hover group cursor-pointer"
                onClick={() => window.open(profile.url, '_blank')}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${profile.color} rounded-lg flex items-center justify-center text-2xl`}>
                      {profile.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold group-hover:text-neon-blue transition-colors">
                        {profile.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        @{profile.username}
                      </p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">
                    {profile.description}
                  </p>

                  <div className="grid grid-cols-3 gap-3">
                    {Object.entries(profile.stats).map(([key, value]) => (
                      <div key={key} className="text-center p-2 bg-muted/30 rounded-lg">
                        <div className="text-lg font-bold text-foreground">
                          {value}
                        </div>
                        <div className="text-xs text-muted-foreground capitalize">
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 text-center">
                    <span className="text-sm text-neon-blue group-hover:underline">
                      View Profile →
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
          className="mt-16 p-8 glass rounded-xl text-center"
        >
          <h3 className="text-2xl font-semibold mb-4">
            Total Problem Solving Statistics
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold text-neon-blue">500+</div>
              <div className="text-muted-foreground">Problems Solved</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-neon-purple">100+</div>
              <div className="text-muted-foreground">Contests Participated</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-neon-pink">25+</div>
              <div className="text-muted-foreground">Badges Earned</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-neon-green">2+</div>
              <div className="text-muted-foreground">Years Active</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CodingProfiles;
