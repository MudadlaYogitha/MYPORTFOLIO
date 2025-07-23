import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const educationData = [
    {
      degree: 'B.Tech in Electronics and Communication Engineering',
      institution: 'Gayatri Vidya Parishad College of Engineering (AU)',
      period: '2022 - 2026',
      grade: 'CGPA: 8.91/10',
      location: 'Visakhapatnam, India',
      type: 'Current',
      color: 'from-purple-500 to-pink-500',
      description: 'Pursuing undergraduate degree with focus on electronics, communication systems, and software development.',
      coursework: ['Data Structures & Algorithms', 'Database Management', 'Computer Networks', 'Software Engineering']
    },
    {
      degree: 'Intermediate (Pre-University)',
      institution: 'IIIT Srikakulam',
      period: '2020 - 2022',
      grade: 'Percentage: 90.2%',
      location: 'Srikakulam, India',
      type: 'Completed',
      color: 'from-blue-500 to-cyan-500',
      description: 'Completed higher secondary education with Mathematics, Physics, and Chemistry.',
      coursework: ['Mathematics', 'Physics', 'Chemistry']
    },
    {
      degree: 'Secondary Education (10th Grade)',
      institution: 'Narayana School',
      period: '2019 - 2020',
      grade: 'Percentage: 97.6%',
      location: 'Bobbili, India',
      type: 'Completed',
      color: 'from-green-500 to-emerald-500',
      description: 'Completed secondary education with excellent academic performance.',
      coursework: ['Mathematics', 'Science', 'Social Studies', 'English']
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
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Academic journey and educational milestones that shaped my technical foundation
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 h-full w-0.5 bg-gradient-to-b from-purple-600 to-pink-600"></div>

            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content Card */}
                <div className={`ml-20 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    {/* Status Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        edu.type === 'Current' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-blue-100 text-blue-700'
                      }`}>
                        {edu.type}
                      </span>
                      <div className="flex items-center gap-2 text-gray-500">
                        <Calendar size={16} />
                        <span className="text-sm">{edu.period}</span>
                      </div>
                    </div>

                    <h3 className="font-poppins text-xl font-bold text-gray-800 mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-purple-600 font-semibold mb-2 flex items-center gap-2">
                      <GraduationCap size={16} />
                      {edu.institution}
                    </p>
                    <p className="text-gray-600 mb-3">{edu.description}</p>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 text-gray-500">
                        <MapPin size={16} />
                        <span className="text-sm">{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-green-600">
                        <Award size={16} />
                        <span className="text-sm font-semibold">{edu.grade}</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Key Coursework:</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, courseIndex) => (
                          <span
                            key={courseIndex}
                            className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;