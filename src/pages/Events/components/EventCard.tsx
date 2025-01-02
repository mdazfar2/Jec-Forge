import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { Event } from '../../../types/event';

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02]">
      <div className="relative h-48">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4">
          <span className={`
            px-3 py-1 rounded-full text-sm font-medium
            ${event.category === 'Tech' ? 'bg-blue-500' :
              event.category === 'Sports' ? 'bg-green-500' :
              event.category === 'Cultural' ? 'bg-purple-500' :
              'bg-orange-500'} text-white
          `}>
            {event.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
          {event.title}
        </h3>
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <Calendar className="h-5 w-5 mr-2" />
            {new Date(event.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <Clock className="h-5 w-5 mr-2" />
            {event.time}
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <MapPin className="h-5 w-5 mr-2" />
            {event.location}
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          {event.description}
        </p>
        <div className="flex gap-4">
          <button className="flex-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white py-2 px-4 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            Details
          </button>
          <button className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors">
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
}