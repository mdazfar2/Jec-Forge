import React from 'react';
import { Target, Eye, Compass } from 'lucide-react';

const cards = [
  {
    title: 'Mission',
    description: 'To mentor juniors and foster a culture of innovation by solving college and hostel problems.',
    icon: Target
  },
  {
    title: 'Vision',
    description: 'To make Jaipur Engineering College a center of excellence in technology and collaboration.',
    icon: Eye
  },
  {
    title: 'Purpose',
    description: 'Creating impactful solutions for real-world challenges while providing hands-on learning opportunities for students.',
    icon: Compass
  }
];

export default function MissionVision() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Mission, Vision & Purpose
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 scroll-fade-in"
              >
                <div className="bg-indigo-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {card.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}