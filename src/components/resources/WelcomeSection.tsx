import React from 'react';
import { BookOpen, Compass } from 'lucide-react';

export default function WelcomeSection() {
  return (
    <div className="text-center mb-12">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        Welcome to Jec Forge Resources
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
        Explore our curated collection of resources to enhance your development journey. From beginner guides to advanced tutorials, we've got you covered.
      </p>
      <div className="flex justify-center space-x-4">
        <button className="flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
          <BookOpen className="h-5 w-5 mr-2" />
          Start Learning
        </button>
        <button className="flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
          <Compass className="h-5 w-5 mr-2" />
          Browse Topics
        </button>
      </div>
    </div>
  );
}