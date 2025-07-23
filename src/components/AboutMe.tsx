import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Calendar, Trophy, Code, Heart, Target, User } from 'lucide-react';
import MyPhoto from '../assets/mine.jpeg';

const AboutMe = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const quickInfo = [
    {
      icon: <MapPin size={20} />,
      label: 'Location',
      value: 'Visakhapatnam, India',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Trophy size={20} />,
      label: 'CGPA',
      value: '8.91/10',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Code size={20} />,
      label: 'LeetCode',
      value: '1700+ Rating',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const highlights = [
    {
      icon: <Target size={24} />,
      title: 'Problem Solver',
      description: 'Passionate about solving complex problems with elegant solutions'
    },
    {
      icon: <Heart size={24} />,
      title: 'Team Player',
      description: 'Love collaborating and contributing to open source communities'
    },
    {
      icon: <Code size={24} />,
      title: 'Continuous Learner',
      description: 'Always exploring new technologies and improving my skills'
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
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate developer dedicated to creating innovative solutions and making a positive impact through technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="group relative max-w-md mx-auto">
              {/* Photo placeholder with enhanced styling */}
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-purple-400 to-pink-400 rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-all duration-500 border-4 border-white/20">
  <div className="w-full h-full bg-gray-200 flex items-center justify-center relative">
    <img
      src={MyPhoto}
      alt="Mudadla Yogitha"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
  </div>
</div>

              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-80 animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 -left-6 w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full opacity-60 animate-pulse delay-500"></div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="prose prose-lg text-gray-600">
              <p className="text-lg leading-relaxed mb-6">
                I'm a passionate Full Stack Developer currently pursuing B.Tech in Electronics and Communication Engineering at GVPCE. 
                With a strong foundation in both frontend and backend technologies, I love creating innovative solutions that make a real impact.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                My journey in tech has been driven by curiosity and a desire to solve complex problems. From AI-powered applications 
                to blockchain solutions, I enjoy exploring cutting-edge technologies and contributing to open source projects.
              </p>
            </div>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {quickInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="group bg-gray-50 rounded-2xl p-4 hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 bg-gradient-to-r ${info.color} rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 font-medium">{info.label}</div>
                      <div className="font-semibold text-gray-800">{info.value}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Highlights */}
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="group flex items-start gap-4 p-4 rounded-xl hover:bg-purple-50 transition-all duration-300 transform hover:translate-x-2"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {highlight.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">{highlight.title}</h4>
                    <p className="text-gray-600">{highlight.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;