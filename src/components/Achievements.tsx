import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Award, Code, GitBranch, Target, Users } from 'lucide-react';

const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    {
      icon: <Trophy size={32} />,
      title: 'ANITS Business Combat Finalist',
      description: 'Secured position in Top 50 among thousands of participants',
      details: 'Selected for the final round of prestigious business competition',
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'bg-yellow-50 border-yellow-200'
    },
    {
      icon: <Code size={32} />,
      title: 'LeetCode 1700+ Rating',
      description: 'Consistently solving algorithmic challenges',
      details: 'Active problem solver with strong DSA foundation',
      color: 'from-blue-500 to-purple-600',
      bgColor: 'bg-blue-50 border-blue-200'
    },
    {
      icon: <Target size={32} />,
      title: 'CodeChef 1200+ Rating',
      description: 'Competitive programming excellence',
      details: 'Regular participation in coding contests',
      color: 'from-green-500 to-teal-600',
      bgColor: 'bg-green-50 border-green-200'
    },
    {
      icon: <GitBranch size={32} />,
      title: 'GSSoC 2024 Contributor',
      description: 'Rank 222 among thousands of contributors',
      details: 'Contributed to 20+ issues across multiple open source projects',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-50 border-purple-200'
    },
    {
      icon: <Users size={32} />,
      title: 'Hacktoberfest Contributor',
      description: 'Active open source participant',
      details: 'Contributed to 5+ projects during Hacktoberfest',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50 border-orange-200'
    },
    {
      icon: <Award size={32} />,
      title: 'Academic Excellence',
      description: 'CGPA: 8.91/10 in Engineering',
      details: 'Consistent academic performance throughout college',
      color: 'from-indigo-500 to-blue-600',
      bgColor: 'bg-indigo-50 border-indigo-200'
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
            Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recognition and milestones that reflect dedication to excellence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`group ${achievement.bgColor} border-2 rounded-2xl p-6 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105`}
            >
              <div className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-2xl mx-auto mb-4 flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                  {achievement.icon}
                </div>
                
                <h3 className="font-poppins text-xl font-bold text-gray-800 mb-3">
                  {achievement.title}
                </h3>
                
                <p className="text-gray-600 mb-2 font-medium">
                  {achievement.description}
                </p>
                
                <p className="text-gray-500 text-sm">
                  {achievement.details}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 text-white hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 transform hover:-translate-y-2"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="hover:scale-110 transition-transform duration-300 cursor-default">
              <div className="text-3xl md:text-4xl font-bold mb-2">1700+</div>
              <div className="text-purple-200">LeetCode Rating</div>
            </div>
            <div className="hover:scale-110 transition-transform duration-300 cursor-default">
              <div className="text-3xl md:text-4xl font-bold mb-2">1200+</div>
              <div className="text-purple-200">CodeChef Rating</div>
            </div>
            <div className="hover:scale-110 transition-transform duration-300 cursor-default">
              <div className="text-3xl md:text-4xl font-bold mb-2">20+</div>
              <div className="text-purple-200">Open Source Issues</div>
            </div>
            <div className="hover:scale-110 transition-transform duration-300 cursor-default">
              <div className="text-3xl md:text-4xl font-bold mb-2">8.91</div>
              <div className="text-purple-200">CGPA</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;