import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Zap, Sparkles, User, Briefcase, FolderOpen, Trophy, Users, Mail, Database, Cpu, Globe, Layers, Brain, Rocket, Star } from 'lucide-react';

const Hero = () => {
  const navigationCards = [
    { icon: <User size={20} />, label: 'About', href: '#about', color: 'from-blue-500 to-cyan-500' },
    { icon: <Briefcase size={20} />, label: 'Experience', href: '#experience', color: 'from-green-500 to-emerald-500' },
    { icon: <FolderOpen size={20} />, label: 'Projects', href: '#projects', color: 'from-orange-500 to-red-500' },
    { icon: <Code2 size={20} />, label: 'Coding', href: '#coding', color: 'from-purple-500 to-pink-500' },
    { icon: <Trophy size={20} />, label: 'Achievements', href: '#achievements', color: 'from-yellow-500 to-orange-500' },
    { icon: <Mail size={20} />, label: 'Contact', href: '#contact', color: 'from-pink-500 to-rose-500' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Advanced floating elements
  const floatingElements = [
    { icon: <Code2 size={32} />, color: 'text-purple-400', delay: 0, size: 'w-16 h-16' },
    { icon: <Database size={28} />, color: 'text-blue-400', delay: 1, size: 'w-14 h-14' },
    { icon: <Cpu size={30} />, color: 'text-emerald-400', delay: 2, size: 'w-15 h-15' },
    { icon: <Globe size={34} />, color: 'text-pink-400', delay: 3, size: 'w-17 h-17' },
    { icon: <Brain size={26} />, color: 'text-cyan-400', delay: 4, size: 'w-13 h-13' },
    { icon: <Rocket size={32} />, color: 'text-yellow-400', delay: 5, size: 'w-16 h-16' },
    { icon: <Star size={24} />, color: 'text-rose-400', delay: 6, size: 'w-12 h-12' },
    { icon: <Layers size={28} />, color: 'text-indigo-400', delay: 7, size: 'w-14 h-14' }
  ];

  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Advanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        
        {/* Animated Mesh Gradient Background */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 opacity-30"
            style={{
              background: `
                radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.2) 0%, transparent 50%)
              `
            }}
            animate={{
              background: [
                `radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                 radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
                 radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.2) 0%, transparent 50%)`,
                `radial-gradient(circle at 80% 20%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                 radial-gradient(circle at 20% 80%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
                 radial-gradient(circle at 60% 60%, rgba(120, 219, 255, 0.2) 0%, transparent 50%)`,
                `radial-gradient(circle at 40% 60%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                 radial-gradient(circle at 60% 40%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
                 radial-gradient(circle at 20% 20%, rgba(120, 219, 255, 0.2) 0%, transparent 50%)`
              ]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute w-96 h-96 rounded-full opacity-10 border border-purple-400"
          animate={{
            x: [0, 100, -50, 150, 0],
            y: [0, -100, 50, -75, 0],
            scale: [1, 1.2, 0.8, 1.1, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ top: '10%', left: '5%' }}
        />

        <motion.div
          className="absolute w-80 h-80 opacity-15"
          style={{
            background: 'conic-gradient(from 0deg, rgba(147, 51, 234, 0.3), rgba(219, 39, 119, 0.3), rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3))',
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%'
          }}
          animate={{
            x: [0, -120, 80, -60, 0],
            y: [0, 80, -60, 100, 0],
            rotate: [0, 360],
            borderRadius: [
              '30% 70% 70% 30% / 30% 30% 70% 70%',
              '70% 30% 30% 70% / 70% 70% 30% 30%',
              '50% 50% 50% 50% / 50% 50% 50% 50%',
              '30% 70% 70% 30% / 30% 30% 70% 70%'
            ]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ top: '60%', right: '10%' }}
        />

        <motion.div
          className="absolute w-64 h-64 opacity-20"
          style={{
            background: 'linear-gradient(45deg, rgba(236, 72, 153, 0.4), rgba(251, 146, 60, 0.4))',
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
          }}
          animate={{
            x: [0, 150, -100, 75, 0],
            y: [0, -120, 90, -60, 0],
            rotate: [0, 270, 540],
            scale: [1, 1.3, 0.7, 1.1, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ top: '20%', right: '60%' }}
        />

        {/* Advanced Floating Tech Icons */}
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className={`absolute ${element.color} ${element.size} flex items-center justify-center opacity-60`}
            animate={{
              x: [
                Math.cos(index * 45 * Math.PI / 180) * 300,
                Math.cos((index * 45 + 90) * Math.PI / 180) * 350,
                Math.cos((index * 45 + 180) * Math.PI / 180) * 250,
                Math.cos((index * 45 + 270) * Math.PI / 180) * 300,
                Math.cos(index * 45 * Math.PI / 180) * 300
              ],
              y: [
                Math.sin(index * 45 * Math.PI / 180) * 200,
                Math.sin((index * 45 + 90) * Math.PI / 180) * 250,
                Math.sin((index * 45 + 180) * Math.PI / 180) * 150,
                Math.sin((index * 45 + 270) * Math.PI / 180) * 200,
                Math.sin(index * 45 * Math.PI / 180) * 200
              ],
              rotate: [0, 360, 720],
              scale: [1, 1.3, 0.7, 1.1, 1]
            }}
            transition={{
              duration: 20 + index * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: element.delay
            }}
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-3 border border-white/20">
              {element.icon}
            </div>
          </motion.div>
        ))}

        {/* Particle Network */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-40"
            animate={{
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight
              ],
              scale: [0, 1, 0],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Animated Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#ec4899" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          {[...Array(6)].map((_, i) => (
            <motion.path
              key={i}
              d={`M${i * 200},0 Q${i * 200 + 100},${window.innerHeight / 2} ${i * 200},${window.innerHeight}`}
              stroke="url(#lineGradient)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{
                duration: 3,
                delay: i * 0.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          ))}
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          {/* Name with Enhanced Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-poppins text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            <motion.span
              className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                backgroundSize: '200% 200%'
              }}
            >
              Mudadla Yogitha
            </motion.span>
          </motion.h1>

          {/* Professional Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-6"
          >
            <h2 className="font-inter text-2xl md:text-3xl lg:text-4xl font-semibold text-purple-200 mb-4">
              SWE Intern @Sweet Design Hub
            </h2>
            <div className="flex flex-wrap justify-center gap-6 text-xl md:text-2xl text-gray-300">
              <motion.span 
                className="flex items-center gap-3"
                whileHover={{ scale: 1.05, color: '#a855f7' }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Code2 size={24} className="text-purple-400" />
                Full Stack Developer
              </motion.span>
              <motion.span 
                className="flex items-center gap-3"
                whileHover={{ scale: 1.05, color: '#ec4899' }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Sparkles size={24} className="text-pink-400" />
                AI Enthusiast
              </motion.span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-inter text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
          >
            Building impactful, responsive, and modern web applications with cutting-edge technologies
          </motion.p>
        </motion.div>

        {/* Navigation Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {navigationCards.map((card, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                onClick={() => scrollToSection(card.href)}
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="group bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-r ${card.color} rounded-2xl mx-auto mb-4 flex items-center justify-center text-white shadow-lg`}
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {card.icon}
                </motion.div>
                <span className="font-inter font-semibold text-lg text-white group-hover:text-purple-200 transition-colors duration-200">
                  {card.label}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div 
            className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div 
              className="w-1 h-3 bg-purple-400 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;