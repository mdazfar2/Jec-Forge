import React from 'react';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import About from '../../components/About';
import Events from '../../components/Events';
import Resources from '../../components/Resources';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Events />
        <Resources />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}