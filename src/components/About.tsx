import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Building Tomorrow's Tech Leaders
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Our platform serves as a bridge between passionate developers, innovative startups, and industry leaders. We believe in the power of community-driven growth and collaborative learning.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Through mentorship programs, workshops, and networking events, we create opportunities for tech enthusiasts to expand their horizons and reach their full potential.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    🎯
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Our Mission</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    To foster innovation and collaboration in the tech community.
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    👥
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Our Community</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    A diverse group of developers, designers, and tech enthusiasts.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-96">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              alt="Team collaboration"
              className="rounded-lg shadow-xl object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}