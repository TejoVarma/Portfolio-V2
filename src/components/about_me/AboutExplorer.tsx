import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Heart, ArrowRight, Code, Coffee } from 'lucide-react';

const AboutExplorer: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const handleNavigation = (type: 'professional' | 'personal') => {
    // Add your navigation logic here
    console.log(`Navigating to ${type} about page`);
  };

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-6"
            style={{
              background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #EC4899 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Know Me Better
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Two sides of the same coin. Choose your journey to discover who I am beyond the code.
          </motion.p>
        </motion.div>

        {/* Choice Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Professional Card */}
          <motion.div
            className="relative group cursor-pointer"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            onHoverStart={() => setHoveredCard('professional')}
            onHoverEnd={() => setHoveredCard(null)}
            onClick={() => handleNavigation('professional')}
          >
            <div className="relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 h-80 overflow-hidden transition-all duration-500 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4 w-16 h-16 border-2 border-blue-500 rounded-lg rotate-12"></div>
                <div className="absolute bottom-8 left-6 w-12 h-12 border border-blue-400 rounded-full"></div>
                <div className="absolute top-1/2 right-8 w-8 h-8 bg-blue-500 rounded-sm rotate-45"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col">
                <motion.div
                  className="mb-6"
                  animate={{
                    scale: hoveredCard === 'professional' ? 1.1 : 1,
                    rotate: hoveredCard === 'professional' ? 5 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Professional Me</h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"></div>
                </motion.div>

                <p className="text-gray-300 text-lg leading-relaxed mb-6 flex-grow">
                  Dive into my technical journey, skills, achievements, and the solutions I've crafted.
                  See how I turn ideas into reality through code.
                </p>

                <motion.div
                  className="flex items-center text-blue-400 font-semibold"
                  animate={{ x: hoveredCard === 'professional' ? 8 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <span>Explore Career</span>
                  <ArrowRight className="ml-2 w-5 h-5" />
                </motion.div>
              </div>

              {/* Hover Effects */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredCard === 'professional' ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />

              {/* Floating Icons */}
              <motion.div
                className="absolute top-6 right-6"
                animate={{
                  y: hoveredCard === 'professional' ? [-5, 5, -5] : 0,
                  opacity: hoveredCard === 'professional' ? [0.7, 1, 0.7] : 0.4
                }}
                transition={{
                  duration: 2,
                  repeat: hoveredCard === 'professional' ? Infinity : 0,
                  ease: "easeInOut"
                }}
              >
                <Code className="w-6 h-6 text-blue-400" />
              </motion.div>
            </div>
          </motion.div>

          {/* Personal Card */}
          <motion.div
            className="relative group cursor-pointer"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            onHoverStart={() => setHoveredCard('personal')}
            onHoverEnd={() => setHoveredCard(null)}
            onClick={() => handleNavigation('personal')}
          >
            <div className="relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 h-80 overflow-hidden transition-all duration-500 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-6 left-4 w-14 h-14 border-2 border-purple-500 rounded-full"></div>
                <div className="absolute bottom-6 right-8 w-10 h-10 border border-pink-400 rounded-lg rotate-12"></div>
                <div className="absolute top-1/3 left-1/2 w-6 h-6 bg-purple-500 rounded-full"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col">
                <motion.div
                  className="mb-6"
                  animate={{
                    scale: hoveredCard === 'personal' ? 1.1 : 1,
                    rotate: hoveredCard === 'personal' ? -5 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Personal Me</h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full"></div>
                </motion.div>

                <p className="text-gray-300 text-lg leading-relaxed mb-6 flex-grow">
                  Discover my passions, hobbies, thoughts, and the experiences that shape who I am
                  when I'm not behind the screen.
                </p>

                <motion.div
                  className="flex items-center text-purple-400 font-semibold"
                  animate={{ x: hoveredCard === 'personal' ? 8 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <span>Explore Life</span>
                  <ArrowRight className="ml-2 w-5 h-5" />
                </motion.div>
              </div>

              {/* Hover Effects */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent rounded-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredCard === 'personal' ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />

              {/* Floating Icons */}
              <motion.div
                className="absolute top-6 right-6"
                animate={{
                  y: hoveredCard === 'personal' ? [-5, 5, -5] : 0,
                  opacity: hoveredCard === 'personal' ? [0.7, 1, 0.7] : 0.4,
                  rotate: hoveredCard === 'personal' ? [0, 10, 0] : 0
                }}
                transition={{
                  duration: 2,
                  repeat: hoveredCard === 'personal' ? Infinity : 0,
                  ease: "easeInOut"
                }}
              >
                <Coffee className="w-6 h-6 text-purple-400" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-lg">
            Both paths lead to understanding. Choose your adventure.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutExplorer;