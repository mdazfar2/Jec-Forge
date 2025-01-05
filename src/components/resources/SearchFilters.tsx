import { useState } from 'react';
import { Filter } from 'lucide-react';

interface SearchFiltersProps {
  selectedDifficulty: string;
  onDifficultyChange: (difficulty: string) => void;
}

const levels = ['All Levels', 'Beginner', 'Intermediate', 'Advanced'];

export default function SearchFilters({ selectedDifficulty, onDifficultyChange }: SearchFiltersProps) {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="relative mt-2">
      <button
        onClick={() => setShowFilters(!showFilters)}
        className="flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
      >
        <Filter className="h-4 w-4 mr-1" />
        Filters
      </button>

      {showFilters && (
        <div className="absolute z-10 mt-2 w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
          <div>
            <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Difficulty Level</h4>
            <div className="flex flex-wrap gap-2">
              {levels.map(level => (
                <button
                  key={level}
                  onClick={() => {
                    onDifficultyChange(level === 'All Levels' ? '' : level);
                    setShowFilters(false);
                  }}
                  className={`px-3 py-1 text-sm rounded-full border ${
                    (level === 'All Levels' && !selectedDifficulty) || level === selectedDifficulty
                      ? 'border-indigo-500 bg-indigo-50 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-200'
                      : 'border-gray-300 dark:border-gray-600 hover:border-indigo-500 dark:hover:border-indigo-400'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}