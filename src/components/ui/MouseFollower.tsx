import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useStore } from '../../store/useStore';

const MouseFollower: React.FC = () => {
  const { mousePosition, setMousePosition } = useStore();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [setMousePosition]);

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="cursor-dot w-4 h-4 bg-white rounded-full"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28
        }}
        style={{ mixBlendMode: 'difference' }}
      />

      {/* Outer cursor ring */}
      <motion.div
        className="cursor-dot w-8 h-8 border border-white/50 rounded-full"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20
        }}
        style={{ mixBlendMode: 'difference' }}
      />
    </>
  );
};

export default MouseFollower;