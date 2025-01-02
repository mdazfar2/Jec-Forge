import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import AboutHero from './sections/AboutHero';
import OurStory from './sections/OurStory';
import MissionVision from './sections/MissionVision';
import WhyJecForge from './sections/WhyJecForge';
import Founders from './sections/Founders';
import Gallery from './sections/Gallery';
import ClosingCTA from './sections/ClosingCTA';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <main className="pt-16">
        <AboutHero />
        <OurStory />
        <MissionVision />
        <WhyJecForge />
        <Founders />
        <Gallery />
        <ClosingCTA />
      </main>
      <Footer />
    </div>
  );
}