import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Trophy, Target, ExternalLink, Star, TrendingUp, Award, Zap } from 'lucide-react';

const CodingProfiles = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const profiles = [
    {
      platform: 'LeetCode',
      username: 'mudadlayogitha',
      rating: '1700+',
      problemsSolved: '400+',
      url: 'https://leetcode.com/u/MudadlaYogitha/',
      icon: <Code size={40} />,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-gradient-to-br from-orange-50 to-red-50',
      borderColor: 'border-orange-200',
      description: 'Algorithmic Problem Solving',
      
    },
    {
      platform: 'CodeChef',
      username: 'mudadlayogitha',
      rating: '1200+',
      problemsSolved: '200+',
      url: 'https://www.codechef.com/users/zeal_cook_57',
      icon: <Trophy size={40} />,
      color: 'from-blue-500 to-purple-600',
      bgColor: 'bg-gradient-to-br from-blue-50 to-purple-50',
      borderColor: 'border-blue-200',
      description: 'Competitive Programming',
      
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-poppins text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Coding Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate about algorithmic challenges and competitive programming excellence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {profiles.map((profile, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              {/* Main Card */}
              <div className={`${profile.bgColor} ${profile.borderColor} border-2 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-6 hover:scale-105 relative overflow-hidden`}>
                
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-current transform translate-x-8 -translate-y-8"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-current transform -translate-x-6 translate-y-6"></div>
                </div>

                {/* Header */}
                <div className="relative z-10 text-center mb-8">
                  <div className={`w-20 h-20 bg-gradient-to-r ${profile.color} rounded-3xl mx-auto mb-6 flex items-center justify-center text-white shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                    {profile.icon}
                  </div>
                  <h3 className="font-poppins text-3xl font-bold text-gray-800 mb-2">
                    {profile.platform}
                  </h3>
                  <p className="text-gray-600 font-medium">{profile.description}</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/90 transition-all duration-300">
                    <div className={`text-3xl font-bold bg-gradient-to-r ${profile.color} bg-clip-text text-transparent mb-1`}>
                      {profile.rating}
                    </div>
                    <div className="text-gray-600 text-sm font-medium">Rating</div>
                  </div>
                  <div className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/90 transition-all duration-300">
                    <div className={`text-3xl font-bold bg-gradient-to-r ${profile.color} bg-clip-text text-transparent mb-1`}>
                      {profile.problemsSolved}
                    </div>
                    <div className="text-gray-600 text-sm font-medium">Problems</div>
                  </div>
                </div>

                

                {/* Visit Profile Button */}
                <a
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full bg-gradient-to-r ${profile.color} text-white py-4 px-6 rounded-2xl font-semibold text-center hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 flex items-center justify-center gap-3 group-hover:shadow-2xl`}
                >
                  <span>Explore Profile</span>
                  <ExternalLink size={18} />
                </a>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-60 animate-pulse delay-1000"></div>
            </motion.div>
          ))}
        </div>

        {/* Coding Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 rounded-3xl p-8 text-white hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 transform hover:-translate-y-2"
        >
          <div className="text-center mb-8">
            <h3 className="font-poppins text-2xl font-bold mb-2">Competitive Programming Impact</h3>
            <p className="text-gray-300">Consistent growth through algorithmic challenges</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="hover:scale-110 transition-transform duration-300 cursor-default">
              <div className="w-16 h-16 bg-white/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <Target size={28} />
              </div>
              <div className="text-3xl font-bold mb-2">700+</div>
              <div className="text-gray-300 text-sm">Total Problems</div>
            </div>
            <div className="hover:scale-110 transition-transform duration-300 cursor-default">
              <div className="w-16 h-16 bg-white/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <Trophy size={28} />
              </div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-gray-300 text-sm">Contests</div>
            </div>
            <div className="hover-scale-110 transition-transform duration-300 cursor-default">
              <div className="w-16 h-16 bg-white/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <Zap size={28} />
              </div>
              <div className="text-3xl font-bold mb-2">2+</div>
              <div className="text-gray-300 text-sm">Years Active</div>
            </div>
            <div className="hover:scale-110 transition-transform duration-300 cursor-default">
              <div className="w-16 h-16 bg-white/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <Star size={28} />
              </div>
              <div className="text-3xl font-bold mb-2">Rank 280</div>
              <div className="text-gray-300 text-sm">Highest Contest Rank</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CodingProfiles;