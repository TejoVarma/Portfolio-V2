import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown, Github, Linkedin, Instagram, Mail } from 'lucide-react';
import { useStore } from '../../store/useStore';

const Header: React.FC = () => {
  const { isMenuOpen, setIsMenuOpen, currentPage, setCurrentPage } = useStore();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
        setIsDropdownOpen(false);
      }
    };

    // Close menu when pressing Escape key
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        setIsDropdownOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isMenuOpen, setIsMenuOpen]);

  const navigationItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    {
      name: 'Drop',
      href: '#',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Case Studies', href: '#case-studies' },
        { name: 'Blog', href: '#blog' }
      ]
    },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (name: string, href: string) => {
    setCurrentPage(name.toLowerCase());
    setIsMenuOpen(false);
    setIsDropdownOpen(false);

    if (href.startsWith('#') && href !== '#') {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-sm border-b border-gray-800/50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Header Bar */}
      <div className="max-w-[100%]">
        <div className="flex items-center justify-between py-3 sm:py-4 px-4 sm:px-6">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-1 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavClick('home', '#home')}
          >
            <motion.div
              className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg"
              whileHover={{
                rotate: 5,
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(59, 130, 246, 0.4)"
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative">
                <span
                  className="text-white font-bold text-base sm:text-lg tracking-tight"
                  style={{
                    fontFamily: 'serif',
                    fontStyle: 'italic',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                    transform: 'skewX(-5deg)'
                  }}
                >
                  T
                </span>
                <span
                  className="text-blue-200 font-bold text-sm sm:text-base ml-0.5 tracking-tight"
                  style={{
                    fontFamily: 'serif',
                    fontStyle: 'italic',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                    transform: 'skewX(-5deg)'
                  }}
                >
                  V
                </span>
                <div className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-gradient-to-r from-white to-blue-200 rounded-full opacity-80"></div>
                {/* Decorative flourish */}
                <div className="absolute -top-1 -right-1 w-1 h-1 bg-white rounded-full opacity-60"></div>
                <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-blue-200 rounded-full opacity-60"></div>
              </div>
            </motion.div>
            <span className="text-lg sm:text-2xl font-bold text-white ml-2">Tejo Varma Alluri</span>
          </motion.div>

          {/* Hamburger Menu Button (Always visible) */}
          <motion.button
            className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} className="sm:hidden" /> : <Menu size={20} className="sm:hidden" />}
            {isMenuOpen ? <X size={24} className="hidden sm:block" /> : <Menu size={24} className="hidden sm:block" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile/Hamburger Menu - Full Width */}
      <motion.div
        className="overflow-hidden w-full bg-black"
        initial={{ height: 0 }}
        animate={{ height: isMenuOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
      >
        <nav className="px-4 sm:px-6 py-4 space-y-4 border-t border-gray-800">
          {navigationItems.map((item) => (
            <div key={item.name}>
              {item.hasDropdown ? (
                <div>
                  <motion.button
                    className="flex items-center justify-between w-full text-left text-white hover:text-blue-400 transition-colors py-3 text-base sm:text-lg"
                    whileHover={{ x: 10 }}
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    <span>{item.name}</span>
                    <motion.div
                      animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown size={16} />
                    </motion.div>
                  </motion.button>

                  {/* Dropdown items */}
                  <motion.div
                    className="overflow-hidden"
                    initial={{ height: 0 }}
                    animate={{ height: isDropdownOpen ? 'auto' : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="pl-4 space-y-2 pt-2">
                      {item.dropdownItems?.map((dropItem) => (
                        <motion.button
                          key={dropItem.name}
                          className="block w-full text-left text-gray-300 hover:text-blue-400 transition-colors py-2 text-sm sm:text-base"
                          whileHover={{ x: 5 }}
                          onClick={() => handleNavClick(dropItem.name, dropItem.href)}
                        >
                          {dropItem.name}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                </div>
              ) : (
                <motion.button
                  className="block w-full text-left text-white hover:text-blue-400 transition-colors py-3 text-base sm:text-lg"
                  whileHover={{ x: 10 }}
                  onClick={() => handleNavClick(item.name, item.href)}
                >
                  <span className="relative">
                    {item.name}
                    {currentPage === item.name.toLowerCase() && (
                      <motion.div
                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500 rounded-full"
                        layoutId="activeMobileNav"
                      />
                    )}
                  </span>
                </motion.button>
              )}
            </div>
          ))}

          {/* Social Links in Menu */}
          <div className="flex items-center space-x-4 pt-4 border-t border-gray-800">
            <motion.a
              href="mailto:tejo.varma.alluri@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="w-5 h-5 text-white" />
            </motion.a>
            <motion.a
              href="https://github.com/TejoVarma"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-5 h-5 text-white" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/tejo-varma-alluri-666860184"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="w-5 h-5 text-white" />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/im._.tejo/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Instagram className="w-5 h-5 text-white" />
            </motion.a>
          </div>
        </nav>
      </motion.div>
    </motion.header>
  );
};

export default Header;