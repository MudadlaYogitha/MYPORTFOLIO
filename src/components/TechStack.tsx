import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Server, Wrench, Brain, Layers, Zap, Globe } from 'lucide-react';

const TechStack = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      icon: <Code size={32} />,
      title: 'Programming Languages',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'C++', level: 90, icon: '⚙️' },
        { name: 'C', level: 80, icon: '🔗' },
        { name: 'Python', level: 65, icon: '🐍' },
        { name: 'JavaScript', level: 75, icon: '⚡' }
      ]
    },
    {
      icon: <Layers size={32} />,
      title: 'Frontend Technologies',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'React', level: 90, icon: '⚛️' },
        { name: 'HTML5', level: 95, icon: '🌐' },
        { name: 'CSS3', level: 90, icon: '🎨' },
        { name: 'JavaScript', level: 75, icon: '⚡' }
      ]
    },
    {
      icon: <Server size={32} />,
      title: 'Backend & APIs',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', level: 85, icon: '🟢' },
        { name: 'Express.js', level: 80, icon: '🚀' },
        { name: 'Spring Boot', level: 65, icon: '🍃' },
        { name: 'Flask', level: 50, icon: '🐍' },
        { name: 'REST APIs', level: 80, icon: '🔌' }
      ]
    },
    {
      icon: <Database size={32} />,
      title: 'Databases',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'MongoDB', level: 85, icon: '🍃' },
        { name: 'MySQL', level: 80, icon: '🐬' },
        { name: 'PostgreSQL', level: 75, icon: '🐘' },
        { name: 'ChromaDB', level: 70, icon: '🎨' }
      ]
    },
    {
      icon: <Brain size={32} />,
      title: 'AI & Machine Learning',
      color: 'from-indigo-500 to-purple-600',
      skills: [
        
        { name: 'OpenAI APIs', level: 65, icon: '🤖' },
        { name: 'RAG Systems', level: 40, icon: '📚' },
        { name: 'Hugging Face', level: 40, icon: '🤗' }]
    },
    {
      icon: <Wrench size={32} />,
      title: 'Tools & Platforms',
      color: 'from-pink-500 to-rose-500',
      skills: [
        { name: 'Git', level: 80, icon: '🐙' },
        { name: 'Github', level: 80, icon: '🐳' },
        { name: 'Postman', level: 85, icon: '📮' },
        { name: 'Vercel', level: 80, icon: '▲' },
        { name: 'Netlify', level: 80, icon: '🌐' }
      ]
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-poppins text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Technical Arsenal
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit spanning modern web development, AI/ML, and cutting-edge technologies
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-6 hover:scale-105 border border-gray-100"
            >
              {/* Category Header */}
              <div className="text-center mb-8">
                <div className={`w-20 h-20 bg-gradient-to-r ${category.color} rounded-3xl mx-auto mb-6 flex items-center justify-center text-white shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                  {category.icon}
                </div>
                <h3 className="font-poppins text-xl font-bold text-gray-800">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: (index * 0.1) + (skillIndex * 0.05) }}
                    className="group/skill bg-gray-50 rounded-2xl p-4 hover:bg-white hover:shadow-md transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="font-semibold text-gray-700 group-hover/skill:text-gray-900">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm font-bold text-gray-500">{skill.level}%</span>
                    </div>
                    
                    {/* Animated Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ 
                          duration: 1.5, 
                          delay: (index * 0.1) + (skillIndex * 0.1),
                          ease: "easeOut"
                        }}
                        className={`h-3 bg-gradient-to-r ${category.color} rounded-full relative overflow-hidden`}
                      >
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 rounded-3xl p-8 text-white hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 transform hover:-translate-y-2">
            <h3 className="font-poppins text-2xl font-bold mb-8">Development Philosophy</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center hover:scale-110 transition-transform duration-300 cursor-default">
                <div className="w-16 h-16 bg-white/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <Zap size={28} />
                </div>
                <div className="text-xl font-bold mb-2">Performance First</div>
                <div className="text-gray-300 text-sm">Optimized, scalable solutions</div>
              </div>
              <div className="text-center hover:scale-110 transition-transform duration-300 cursor-default">
                <div className="w-16 h-16 bg-white/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <Globe size={28} />
                </div>
                <div className="text-xl font-bold mb-2">Modern Stack</div>
                <div className="text-gray-300 text-sm">Latest technologies & best practices</div>
              </div>
              <div className="text-center hover:scale-110 transition-transform duration-300 cursor-default">
                <div className="w-16 h-16 bg-white/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <Brain size={28} />
                </div>
                <div className="text-xl font-bold mb-2">AI Integration</div>
                <div className="text-gray-300 text-sm">Intelligent, future-ready applications</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;