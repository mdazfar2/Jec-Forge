import React from 'react';

export default function ContactHero() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-indigo-600 to-purple-700">
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Get in Touch with JEC Forge
        </h1>
        <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
          We're here to answer your questions, collaborate, and connect!
        </p>
      </div>
    </section>
  );
}