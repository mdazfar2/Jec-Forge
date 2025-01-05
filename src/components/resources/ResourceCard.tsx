import React from 'react';
import { Link2, ExternalLink } from 'lucide-react';
import { resources, filterResources } from '../../data/resources';

interface ResourceCardProps {
  searchQuery: string;
  category?: string;
  subcategory?: string;
}

export default function ResourceCard({ searchQuery, category, subcategory }: ResourceCardProps) {
  // If no category/subcategory selected and no search query, show all resources
  const filteredResources = category || subcategory || searchQuery 
    ? filterResources(resources, searchQuery, category, subcategory)
    : resources;

  if (filteredResources.length === 0) {
    return (
      <div className="col-span-full text-center py-8">
        <p className="text-gray-600 dark:text-gray-400">No resources found matching your criteria.</p>
      </div>
    );
  }

  return (
    <>
      {filteredResources.map(resource => (
        <div
          key={resource.id}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
        >
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {resource.title}
            </h3>
            <span className={`px-2 py-1 text-xs rounded-full ${
              resource.difficulty === 'Beginner' 
                ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                : resource.difficulty === 'Intermediate'
                ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
            }`}>
              {resource.difficulty}
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {resource.description}
          </p>
          <div className="flex space-x-2">
            <button
              onClick={() => navigator.clipboard.writeText(resource.url)}
              className="flex items-center px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <Link2 className="h-4 w-4 mr-1" />
              Copy Link
            </button>
            <a
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-3 py-1.5 text-sm bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
            >
              <ExternalLink className="h-4 w-4 mr-1" />
              Visit Site
            </a>
          </div>
        </div>
      ))}
    </>
  );
}