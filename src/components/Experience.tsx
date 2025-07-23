import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [expandedItems, setExpandedItems] = useState<{ [key: number]: boolean }>({});

  const toggleExpanded = (index: number) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const experiences = [
    {
      title: 'Software Developer Intern',
      company: 'Sweet Design Hub',
      period: 'May 2025 – Present',
      type: 'Current',
      shortDescription: 'Building AI-powered solutions and browser-based applications',
      details: [
        'Built AI Redliner using RAG (Retrieval-Augmented Generation) for intelligent document processing',
        'Developed Browser-based Word Editor using ONLYOFFICE for collaborative document editing',
        'Implemented ChromaDB + LangChain + MiniLM for advanced search and compliance features',
        'Optimized application performance and user experience'
      ],
      technologies: ['Python', 'RAG', 'ChromaDB', 'LangChain', 'MiniLM', 'ONLYOFFICE']
    },
    {
      title: 'Full Stack Developer Intern',
      company: 'Infosys Springboard',
      period: 'Oct 2024 – Dec 2024',
      type: 'Completed',
      shortDescription: 'Full-stack development with Spring Boot and MySQL',
      details: [
        'Developed robust backend services using Spring Boot framework',
        'Designed and implemented MySQL database schemas for optimal performance',
        'Conducted comprehensive API testing using Postman',
        'Collaborated with cross-functional teams on multiple projects'
      ],
      technologies: ['Spring Boot', 'MySQL', 'Postman', 'Java', 'REST APIs']
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
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 h-full w-0.5 bg-gradient-to-b from-purple-600 to-pink-600"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center mb-16 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full border-4 border-white shadow-lg z-10 hover:scale-125 transition-transform duration-300"></div>

                {/* Content Card */}
                <div className={`ml-20 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className="group bg-white rounded-2xl shadow-xl p-6 border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105">
                    {/* Status Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        exp.type === 'Current' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-blue-100 text-blue-700'
                      } group-hover:scale-105 transition-transform duration-300`}>
                        {exp.type}
                      </span>
                      <div className="flex items-center gap-2 text-gray-500">
                        <Calendar size={16} />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                    </div>

                    <h3 className="font-poppins text-xl font-bold text-gray-800 mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-purple-600 font-semibold mb-3 flex items-center gap-2">
                      <Briefcase size={16} />
                      {exp.company}
                    </p>
                    <p className="text-gray-600 mb-4">{exp.shortDescription}</p>

                    {/* Expandable Details */}
                    <motion.div
                      initial={false}
                      animate={{ height: expandedItems[index] ? 'auto' : 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 border-t border-gray-200 group-hover:border-purple-200 transition-colors duration-300">
                        <ul className="space-y-2 mb-4">
                          {exp.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="text-sm text-gray-600 flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs font-medium hover:bg-purple-200 hover:scale-105 transition-all duration-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>

                    <button
                      onClick={() => toggleExpanded(index)}
                      className="mt-4 flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium text-sm transition-all duration-200 hover:scale-105"
                    >
                      {expandedItems[index] ? (
                        <>
                          <ChevronUp size={16} />
                          Show Less
                        </>
                      ) : (
                        <>
                          <ChevronDown size={16} />
                          Show More
                        </>
                      )}
                    </button>
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

export default Experience;