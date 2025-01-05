import React from 'react';
import { Github, MessageCircle } from 'lucide-react';
import { FaDiscord } from 'react-icons/fa';

const communities = [
  {
    id: 1,
    name: 'Discord Community',
    description: 'Join our vibrant Discord community to connect with fellow developers, share knowledge, and get help with your projects.',
    icon: FaDiscord,
    url: '#',
    color: 'bg-[#5865F2]'
  },
  {
    id: 2,
    name: 'GitHub Discussions',
    description: 'Report bugs, suggest features, and contribute to our open-source projects. Your feedback helps us improve.',
    icon: Github,
    url: '#',
    color: 'bg-gray-900 dark:bg-gray-800'
  },
  {
    id: 3,
    name: 'Developer Forum',
    description: 'Engage in technical discussions, share your experiences, and learn from the community\'s collective knowledge.',
    icon: MessageCircle,
    url: '#',
    color: 'bg-indigo-600'
  }
];

export default function CommunityCards() {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Join Our Community</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {communities.map((community) => (
          <a
            key={community.id}
            href={community.url}
            className="block group"
          >
            <div className="h-full bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
              <div className={`inline-flex p-3 rounded-lg ${community.color} mb-4`}>
                <community.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                {community.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {community.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}