import React from 'react';
import EventCard from './EventCard';
import { events } from '../data/events';

export default function Events() {
  return (
    <section id="events" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Upcoming Events</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Join us at our upcoming events and expand your network
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white dark:bg-gray-800 dark:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            View All Events
          </button>
        </div>
      </div>
    </section>
  );
}