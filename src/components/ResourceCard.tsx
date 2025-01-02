import React from 'react';
import { Video, Code, Cloud, Layout, Smartphone, Database } from 'lucide-react';
import { Resource } from '../types/resource';

const icons = {
  video: Video,
  code: Code,
  cloud: Cloud,
  layout: Layout,
  smartphone: Smartphone,
  database: Database,
};

interface ResourceCardProps {
  resource: Resource;
}

export default function ResourceCard({ resource }: ResourceCardProps) {
  const IconComponent = icons[resource.icon as keyof typeof icons];

  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4">
        <div className="h-12 w-12 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
          <IconComponent className="h-6 w-6 text-blue-600 dark:text-blue-400" />
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {resource.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {resource.description}
      </p>
      <a
        href={resource.link}
        className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium inline-flex items-center"
      >
        Learn more
      </a>
    </div>
  );
}