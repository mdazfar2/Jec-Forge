import React from 'react';
import { EventCategory } from '../../../types/event';

interface EventFiltersProps {
  selectedCategory: EventCategory;
  onCategoryChange: (category: EventCategory) => void;
}

const categories: EventCategory[] = ['All', 'Sports', 'Tech', 'Non-Tech', 'Cultural'];

export default function EventFilters({ selectedCategory, onCategoryChange }: EventFiltersProps) {
  return (
    <div className="bg-white dark:bg-gray-900 sticky top-16 z-40 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8 overflow-x-auto py-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`
                px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all
                ${selectedCategory === category
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}