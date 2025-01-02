import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const founders = [
  {
    name: 'Azfar Alam',
    role: 'Founder & Lead Developer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    github: '#',
    linkedin: '#'
  },
  {
    name: 'Nitish',
    role: 'Co-founder & Technical Lead',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80',
    github: '#',
    linkedin: '#'
  },
  // Add more founders here
];

export default function Founders() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-lg text-indigo-600 dark:text-indigo-400 mb-4">
            Built with passion and purpose by the Batch of 2025 students at Jaipur Engineering College, Kukas
          </p>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Meet Our Founders
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative group">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100">
                  <a
                    href={founder.github}
                    className="p-2 bg-white rounded-full hover:scale-110 transition-transform"
                  >
                    <Github className="h-6 w-6 text-gray-900" />
                  </a>
                  <a
                    href={founder.linkedin}
                    className="p-2 bg-white rounded-full hover:scale-110 transition-transform"
                  >
                    <Linkedin className="h-6 w-6 text-gray-900" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {founder.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{founder.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}