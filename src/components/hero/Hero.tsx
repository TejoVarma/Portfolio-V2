import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Download, User, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [isDownloadHovered, setIsDownloadHovered] = useState(false);
  const [isContactHovered, setIsContactHovered] = useState(false);

  const handleDownloadResume = () => {
    // Google Drive direct download method
    // Your Google Drive file ID
    const fileId = '1QgQT2bi2JDkKKkHnvgtoVzQXFYbHvO_a';
    const directDownloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

    // Alternative: Open in new tab for viewing first
    // const viewUrl = `https://drive.google.com/file/d/${fileId}/view`;

    try {
      // Method 1: Direct download
      const link = document.createElement('a');
      link.href = directDownloadUrl;
      link.download = 'Tejo_Varma_Alluri_Resume.pdf';
      link.target = '_blank'; // Fallback to new tab if download fails
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Download failed:', error);
      // Fallback: Open in new tab
      window.open(directDownloadUrl, '_blank');
    }
  };

  // Alternative method for better user experience
  const handleViewResume = () => {
    const fileId = '1QgQT2bi2JDkKKkHnvgtoVzQXFYbHvO_a';
    const viewUrl = `https://drive.google.com/file/d/${fileId}/view`;
    window.open(viewUrl, '_blank');
  };

  const handleContactMe = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  // Animation variants with proper typing
  const containerVariants: Variants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  };

  const titleVariants: Variants = {
    hidden: {
      opacity: 0,
      x: -100
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image - Professional workspace */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1586717791821-3bd00f6266c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/70" />
      </div>

      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-white/5 rounded-full blur-xl"
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 0.8, 1]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 w-full px-6 pt-20 sm:pt-24">
        <motion.div
          className="flex items-center min-h-screen"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Side Content */}
          <motion.div className="w-full lg:w-1/2 space-y-8" variants={itemVariants}>
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white"
              variants={titleVariants}
            >
              I am{' '}
              <motion.span
                className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0%', '100%', '0%']
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear'
                }}
                style={{
                  backgroundSize: '200% auto'
                }}
              >
                Full Stack Developer
              </motion.span>{' '}
              based in{' '}
              <motion.span
                className="relative inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                India
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1.5 }}
                />
              </motion.span>
            </motion.h1>

            {/* Developer Description */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-lg">
                Passionate about creating beautiful and efficient websites that combine stunning visuals with
                seamless functionality. Specialized in React, TypeScript, and modern web technologies.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-6"
              variants={itemVariants}
            >
              {/* Download Resume Button */}
              <motion.button
                onClick={handleDownloadResume}
                className="w-full sm:w-auto group relative px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300 flex items-center justify-center overflow-hidden text-base sm:text-lg"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setIsDownloadHovered(true)}
                onHoverEnd={() => setIsDownloadHovered(false)}
              >
                <motion.span
                  className="flex items-center"
                  animate={isDownloadHovered ? { x: -5 } : { x: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Download size={18} className="mr-2" />
                  Download Resume
                </motion.span>
              </motion.button>

              {/* Contact Me Button */}
              <motion.button
                onClick={handleContactMe}
                className="w-full sm:w-auto group relative px-6 sm:px-8 py-3 sm:py-4 border-2 border-white hover:bg-white hover:text-black text-white rounded-lg font-semibold transition-all duration-300 flex items-center justify-center overflow-hidden text-base sm:text-lg"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(255, 255, 255, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setIsContactHovered(true)}
                onHoverEnd={() => setIsContactHovered(false)}
              >
                <motion.span
                  className="flex items-center"
                  animate={isContactHovered ? { x: -3 } : { x: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <User size={18} className="mr-2" />
                  Contact Me
                </motion.span>
              </motion.button>
            </motion.div>

            {/* Right Side - Hidden on smaller screens, shows background image */}
            <div className="hidden lg:block lg:w-1/2"></div>
          </motion.div>

          {/* Scroll Indicator - Centered at bottom */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <motion.div
              className="cursor-pointer flex flex-col items-center"
              onClick={scrollToProjects}
              whileHover={{ scale: 1.05 }}
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex flex-col items-center space-y-3">
                <motion.div
                  className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white rounded-full flex justify-center relative"
                >
                  <motion.div
                    className="w-1 h-2 sm:h-3 bg-white rounded-full mt-1 sm:mt-2"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  />
                </motion.div>
                <motion.div
                  animate={{ y: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.3, ease: "easeInOut" }}
                >
                  <ArrowDown size={16} className="text-white sm:hidden" />
                  <ArrowDown size={18} className="text-white hidden sm:block" />
                </motion.div>
                <span className="text-xs sm:text-sm text-gray-200 font-medium text-center">Scroll Down</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;