import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  number: string;
}

const Projects: React.FC = () => {
  // Sample projects data - you can replace with your actual projects
  const projects: Project[] = [
    {
      id: 1,
      title: "My Portfolio",
      description: "Ohh this!! its just the same website that you are looking it. Its also my favourite works. So had to put it at the top. Worked on framer-motion, got to contribute to react-bits(open-source library) because of a bug i encountered",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      technologies: ["react", "typescript"],
      githubUrl: "https://github.com/yourusername/portfolio",
      liveUrl: "https://your-portfolio.com",
      number: "01"
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "A comprehensive e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, payment integration, inventory management, and admin dashboard with real-time analytics.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      technologies: ["react", "node.js", "mongodb", "stripe"],
      githubUrl: "https://github.com/yourusername/ecommerce",
      liveUrl: "https://your-ecommerce-demo.com",
      number: "02"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A modern task management application with real-time collaboration features. Built with React, TypeScript, and Socket.io for instant updates across team members with beautiful animations and intuitive design.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2339&q=80",
      technologies: ["react", "typescript", "socket.io", "express"],
      githubUrl: "https://github.com/yourusername/taskmanager",
      liveUrl: "https://your-taskmanager-demo.com",
      number: "03"
    }
  ];

  // Technology icons mapping
  const getTechIcon = (tech: string) => {
    const icons: { [key: string]: string } = {
      'react': '⚛️',
      'typescript': 'TS',
      'node.js': '🟢',
      'mongodb': '🍃',
      'stripe': '💳',
      'socket.io': '🔌',
      'express': '⚡'
    };
    return icons[tech.toLowerCase()] || '🔧';
  };

  const getTechColor = (tech: string) => {
    const colors: { [key: string]: string } = {
      'react': 'text-blue-400',
      'typescript': 'text-blue-500',
      'node.js': 'text-green-400',
      'mongodb': 'text-green-500',
      'stripe': 'text-purple-400',
      'socket.io': 'text-yellow-400',
      'express': 'text-gray-400'
    };
    return colors[tech.toLowerCase()] || 'text-gray-400';
  };

  return (
    <section id="projects" className="py-20 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            My{' '}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Showcase of my recent work and creative solutions
          </motion.p>
        </motion.div>

        {/* Projects List - One by One */}
        <div className="space-y-32">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={project.id}
                className={`flex flex-col lg:flex-row items-center gap-12 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                initial={{
                  opacity: 0,
                  y: 100
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{
                  type: "spring",
                  damping: 25,
                  stiffness: 120,
                  mass: 0.8,
                  duration: 0.8,
                  delay: index * 0.1
                }}
              >
                {/* Project Image */}
                <motion.div
                  className="lg:w-1/2 relative group"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{
                    opacity: 1,
                    scale: 1
                  }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{
                    type: "spring",
                    damping: 20,
                    stiffness: 100,
                    delay: index * 0.1 + 0.2
                  }}
                  whileHover={{
                    scale: 1.03,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                >
                  <div className="relative rounded-2xl overflow-hidden bg-gray-800 shadow-2xl">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Project Number */}
                    <div className="absolute top-6 right-6">
                      <span className="text-orange-400 text-lg font-bold">
                        {project.number}
                      </span>
                    </div>

                    {/* Hover Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-black/40 flex items-center justify-center space-x-6 opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-gray-900/80 rounded-full text-white hover:bg-gray-800 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github size={24} />
                      </motion.a>
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-blue-600/80 rounded-full text-white hover:bg-blue-500 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ArrowUpRight size={24} />
                      </motion.a>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Project Content */}
                <motion.div
                  className="lg:w-1/2 space-y-6"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{
                    opacity: 1,
                    y: 0
                  }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{
                    type: "spring",
                    damping: 25,
                    stiffness: 120,
                    delay: index * 0.1 + 0.3
                  }}
                >
                  <div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 text-lg leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-4">
                    <h4 className="text-white font-semibold text-lg">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-4">
                      {project.technologies.map((tech) => (
                        <motion.div
                          key={tech}
                          className="flex items-center space-x-2 bg-gray-900 px-4 py-2 rounded-lg border border-gray-700"
                          whileHover={{ scale: 1.05, borderColor: '#3b82f6' }}
                          transition={{ duration: 0.2 }}
                        >
                          <span className="text-lg">{getTechIcon(tech)}</span>
                          <span className={`font-medium ${getTechColor(tech)}`}>
                            {tech}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4 pt-4">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="mr-2" size={18} />
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-6 py-3 border border-gray-600 text-gray-300 rounded-lg font-semibold hover:border-gray-500 hover:text-white transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="mr-2" size={18} />
                      View Code
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;