import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Code, Database, Server } from 'lucide-react';
import retail from '../assets/retail.png';
import Trace from '../assets/tracechain.png';
import Kanban from '../assets/kanban.png';
import comp from '../assets/comp.png'; // adjust path as needed
import iot from '../assets/iotproject.jpeg';
import ai from '../assets/AI.png';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'Retail AI',
      description: 'AI-powered inventory management system with intelligent forecasting and automated stock optimization.',
      longDescription: 'Advanced retail inventory management system leveraging machine learning algorithms for demand prediction and stock optimization.',
      technologies: ['Flask', 'RandomForest', 'Python', 'MERN', 'mongo atlas'],
      liveDemo: 'https://retail-ai-rose.vercel.app/',
      github: 'https://github.com/MudadlaYogitha/Retail-AI',
      icon: <Server size={24} />,
      gradient: 'from-blue-500 to-cyan-500',
      image: retail // Placeholder for project image
    },
    {
      title: 'Trace Trust',
      description: 'Blockchain-based product traceability platform ensuring transparency and authenticity throughout the supply chain.',
      longDescription: 'Full-stack blockchain application for supply chain transparency using MERN stack with Solidity smart contracts.',
      technologies: ['MERN', 'Solidity', 'Ethereum', 'Smart Contracts'],
      liveDemo: 'https://trace-trust.vercel.app',
      github: 'https://github.com/mudadlayogitha/TraceTrust',
      icon: <Database size={24} />,
      gradient: 'from-green-500 to-emerald-500',
      image: Trace // Placeholder for project image
    },
    {
      title: 'My Kanban',
      description: 'Intuitive task flow management application with drag-and-drop functionality and real-time collaboration features.',
      longDescription: 'Modern task management system with Spring Boot backend and MySQL database for team collaboration.',
      technologies: ['Spring Boot', 'MySQL', 'React', 'Java', 'REST APIs'],
      liveDemo: 'https://my-kanban-app.vercel.app',
      github: 'https://github.com/MudadlaYogitha/Kanban_Flow_Infosys_Internship_Oct2024',
      icon: <Code size={24} />,
      gradient: 'from-purple-500 to-pink-500',
      image: Kanban
    },
    {
  title: 'AI Redliner',
  description: 'AI-powered contract review tool using RAG and open-source LLMs for compliance checks.',
  longDescription:
    'AI Redliner streamlines contract review by automatically checking compliance against uploaded playbooks using Retrieval-Augmented Generation (RAG). Built with React and powered by Mistral-7B-Instruct through Hugging Face API, it retrieves relevant rules using LangChain and MiniLM embeddings, then generates a detailed, audit-ready report. Features include uploading contracts/playbooks, generating reports via Mistral, and downloading results in .txt format.',
  technologies: [
    'Mistral-7B-Instruct',
    'LangChain',
    'ChromaDB',
    'Hugging Face',
    'MiniLM',
    'React',
    'RAG'
  ],
  liveDemo: 'https://redline-x.vercel.app/', // Optional: Add if you have a hosted version or demo link
  github: 'https://github.com/MudadlaYogitha/RedlineX', // Replace with correct link if different
  icon: <Code size={24} />,
  gradient: 'from-rose-500 to-pink-500',
  image: ai // Replace with image import if available
},
    {
      title: 'Huff-n-Stuff',
      description: 'Advanced file compression and decompression tool using Huffman coding algorithm for optimal data compression.',
      longDescription: 'Efficient file compression utility implementing Huffman coding algorithm with intuitive drag-and-drop interface.',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Huffman Algorithm', 'File API'],
      liveDemo: 'https://huff-n-stuff.vercel.app/',
      github: 'https://github.com/MudadlaYogitha/Huff-n-Stuff',
      icon: <Server size={24} />,
      gradient: 'from-indigo-500 to-purple-600',
      image: comp
    },
    {
  title: 'Electricity Bill Modulator',
  description: 'Real-time energy monitoring system with appliance-level tracking and mobile IoT integration.',
  longDescription:
    'Engineered a real-time electricity usage tracker using Arduino Uno and embedded C, integrating voltage, current, and temperature sensors for precise appliance-level monitoring. Enabled live visualization of energy cost and consumption via the Blynk IoT platform. Designed the system to support daily/monthly analytics and forecasting for smarter energy usage and cost optimization.',
  technologies: ['Arduino Uno', 'Embedded C', 'IoT', 'Blynk', 'Sensors'],
  liveDemo: '', // Optional: if you have a video demo or documentation site
  github: 'https://github.com/MudadlaYogitha/electricity-bill-modulator', // replace if your actual repo link differs
  icon: <Database size={24} />,
  gradient: 'from-yellow-400 to-orange-500',
  image: iot // Replace with local image import if available
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
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing innovative solutions that blend cutting-edge technology with practical applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105"
            >
              {/* Project Image */}
              {/* Project Image */}
<div className="relative overflow-hidden">
  <div className="w-full h-48 overflow-hidden">
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
    />
  </div>
  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
</div>



              {/* Project Header */}
              <div className={`bg-gradient-to-r ${project.gradient} p-6 text-white relative overflow-hidden group-hover:shadow-lg transition-shadow duration-300`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      {project.icon}
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                      >
                        <Github size={18} />
                      </a>
                      <a
                        href={project.liveDemo}
                        className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                  <h3 className="font-poppins text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-white/90 text-sm">{project.description}</p>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 group-hover:bg-gray-50 transition-colors duration-300">
                <p className="text-gray-600 mb-6 line-clamp-3">{project.longDescription}</p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-purple-100 hover:text-purple-700 transition-all duration-200 hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.liveDemo}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-4 rounded-lg font-medium text-center hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1 flex items-center justify-center gap-2"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="flex-1 bg-gray-800 text-white py-3 px-4 rounded-lg font-medium text-center hover:bg-gray-900 transition-all duration-300 hover:scale-105 hover:-translate-y-1 flex items-center justify-center gap-2"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;