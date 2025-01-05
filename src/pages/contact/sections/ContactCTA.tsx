import React from 'react';
import { MessageSquarePlus } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section className="bg-indigo-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Have feedback or suggestions?
        </h2>
        <p className="text-xl text-indigo-100 mb-8">
          We're always looking to improve and would love to hear your ideas!
        </p>
        <button className="inline-flex items-center px-6 py-3 border border-transparent text-lg font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105">
          <MessageSquarePlus className="h-5 w-5 mr-2" />
          Share Your Ideas
        </button>
      </div>
    </section>
  );
}