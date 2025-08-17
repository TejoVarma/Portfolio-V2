import React from 'react';
import Header from '../components/header/Header';
import Hero from '../components/hero/Hero';
import Projects from '../components/projects/Projects';
import MouseFollower from '../components/ui/MouseFollower';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Custom Mouse Cursor */}
      <MouseFollower />

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Projects Section */}
      <Projects />

      {/* Placeholder sections for future development */}
      <section id="contact" className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Contact Section</h2>
          <p className="text-gray-400">Coming next - We'll build this section step by step</p>
        </div>
      </section>
    </div>
  );
};

export default Home;