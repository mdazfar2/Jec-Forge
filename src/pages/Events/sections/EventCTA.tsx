import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function EventCTA() {
  return (
    <section className="bg-indigo-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Don't miss out on these exciting opportunities!
        </h2>
        <p className="text-xl text-indigo-100 mb-8">
          Join the events now and be part of something amazing!
        </p>
        <button className="inline-flex items-center px-6 py-3 border border-transparent text-lg font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 transition-colors">
          View All Events
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </div>
    </section>
  );
}