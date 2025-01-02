import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { Event } from '../types/event';

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
        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
          Register Now
        </button>
      </div>
    </div>
  );
}