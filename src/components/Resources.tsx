import React from 'react';
import { Search, BookOpen, FileText, HelpCircle } from 'lucide-react';

const resources = [
  {
    id: 1,
    title: 'Getting Started Guide',
    description: 'Learn the basics of our platform and community.',
    icon: BookOpen,
    category: 'Guide',
  },
  {
    id: 2,
    title: 'Best Practices',
    description: 'Coding standards and development workflows.',
    icon: FileText,
    category: 'Tutorial',
  },
  {
    id: 3,
    title: 'FAQs',
    description: 'Common questions and answers about our community.',
    icon: HelpCircle,
    category: 'FAQ',
  },
];

export default function Resources() {
  return (
    <section id="resources" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
          Resources
        </h2>
        <div className="max-w-xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search resources..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource) => (
            <div
              key={resource.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <resource.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                <span className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                  {resource.category}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {resource.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{resource.description}</p>
              <a
                href="#"
                className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium"
              >
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}