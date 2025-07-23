import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, FileText, Megaphone, Heart, Star, Handshake } from 'lucide-react';

const Leadership = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const roles = [
    {
      icon: <FileText size={28} />,
      title: 'Documentation Team',
      organization: 'Vidhyadhaan Social Club',
      description: 'Leading documentation initiatives and content creation',
      responsibilities: [
        'Manage and maintain comprehensive project documentation',
        'Create engaging content for social media and community outreach',
        'Coordinate with team members to ensure quality deliverables',
        'Streamline documentation processes for better efficiency'
      ],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50 border-blue-200'
    },
    {
      icon: <Megaphone size={28} />,
      title: 'Campus Ambassador',
      organization: 'GSSoC 2025',
      description: 'Promoting open source culture and community engagement',
      responsibilities: [
        'Organize and conduct open source awareness sessions',
        'Mentor newcomers in their open source journey',
        'Bridge the gap between students and the global open source community',
        'Facilitate workshops and coding events on campus'
      ],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50 border-green-200'
    },
    {
      icon: <Star size={28} />,
      title: 'Campus Ambassador',
      organization: 'Quark (BITS Pilani)',
      description: 'Representing technical excellence and innovation',
      responsibilities: [
        'Promote technical events and competitions among students',
        'Act as liaison between BITS Pilani Quark team and local institutions',
        'Encourage participation in technical festivals and workshops',
        'Foster innovation and technical skills development'
      ],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50 border-purple-200'
    }
  ];

  const impact = [
    { icon: <Users size={24} />, number: '400+', label: 'Students Reached' },
    { icon: <Heart size={24} />, number: '10+', label: 'Events Organized' },
    { icon: <Handshake size={24} />, number: '25+', label: 'Collaborations' }
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
            Leadership & Community
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Driving positive change and fostering growth through leadership and community engagement
          </p>
        </motion.div>

        <div className="space-y-8 mb-16">
          {roles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`group ${role.bgColor} border-2 rounded-2xl p-8 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105`}
            >
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 bg-gradient-to-r ${role.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                    {role.icon}
                  </div>
                </div>

                <div className="flex-1">
                  <div className="mb-6">
                    <h3 className="font-poppins text-2xl font-bold text-gray-800 mb-2">
                      {role.title}
                    </h3>
                    <p className={`text-lg font-semibold mb-3 bg-gradient-to-r ${role.color} bg-clip-text text-transparent`}>
                      {role.organization}
                    </p>
                    <p className="text-gray-600 text-lg">
                      {role.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-4">Key Responsibilities:</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {role.responsibilities.map((responsibility, respIndex) => (
                        <div key={respIndex} className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-200">
                          <span className={`w-2 h-2 bg-gradient-to-r ${role.color} rounded-full mt-2 flex-shrink-0`}></span>
                          <span className="text-gray-600">{responsibility}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Impact Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 text-white hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 transform hover:-translate-y-2"
        >
          <h3 className="font-poppins text-2xl font-bold text-center mb-8">Community Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impact.map((item, index) => (
              <div key={index} className="text-center hover:scale-110 transition-transform duration-300 cursor-default">
                <div className="w-16 h-16 bg-white/20 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  {item.icon}
                </div>
                <div className="text-3xl font-bold mb-2">{item.number}</div>
                <div className="text-purple-200">{item.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Leadership;