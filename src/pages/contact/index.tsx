import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ContactHero from './sections/ContactHero';
import ContactForm from './sections/ContactForm';
import ContactInfo from './sections/ContactInfo';
import LocationMap from './sections/LocationMap';
import ContactCTA from './sections/ContactCTA';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <main className="pt-16">
        <ContactHero />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
        <LocationMap />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}