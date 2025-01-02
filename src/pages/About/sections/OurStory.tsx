import React from 'react';
import { Calendar, Users, Target } from 'lucide-react';

const milestones = [
  {
    year: '2024',
    title: 'Inception',
    description: 'Founded by a group of visionary students from the Batch of 2025 with a mission to solve real-world problems in college and hostel life.',
    icon: Calendar,
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80'
  },
  {
    year: '2024',
    title: 'Purpose',
    description: 'To provide a platform where students can collaborate on projects, mentor juniors, and tackle real-world challenges through technology and innovation.',
    icon: Target,
    image: 'https://images.unsplash.com/photo-1531498860502-7c67cf02f657?auto=format&fit=crop&q=80'
  },
  {
    year: '2024',
    title: 'Impact',
    description: 'Over time, Jec Forge has become a hub for creative problem-solving, empowering students to create meaningful solutions.',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80'
  }
];

export default function OurStory() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">Our Story</h2>
        
        <div className="space-y-24">
          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            return (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center gap-8 scroll-fade-in"
                style={{
                  flexDirection: index % 2 === 0 ? 'row' : 'row-reverse'
                }}
              >
                <div className="flex-1">
                  <div className="relative">
                    <img
                      src={milestone.image}
                      alt={milestone.title}
                      className="rounded-lg shadow-xl"
                    />
                    <div className="absolute -top-4 -left-4 bg-indigo-600 text-white p-3 rounded-lg">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <div className="text-indigo-600 dark:text-indigo-400 text-lg font-semibold">
                    {milestone.year}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {milestone.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}