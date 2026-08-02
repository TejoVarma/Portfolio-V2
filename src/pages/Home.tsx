import React from 'react';
import Header from '../components/header/Header';
import Hero from '../components/hero/Hero';
import Projects from '../components/projects/Projects';
import Contact from '../components/contact/Contact';
import MouseFollower from '../components/ui/MouseFollower';
import AboutExplorer from '../components/about_me/AboutExplorer';

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

      {/* About Section */}
      <AboutExplorer />

      {/* Contact Section */}
      <Contact />
    </div>
  );
};

export default Home;