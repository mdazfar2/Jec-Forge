import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import EventHero from './sections/EventHero';
import EventFilters from './sections/EventFilters';
import EventGrid from './sections/EventGrid';
import EventCTA from './sections/EventCTA';
import { useEvents } from './hooks/useEvents';

export default function EventsPage() {
  const {
    filteredEvents,
    searchQuery,
    selectedCategory,
    setSearchQuery,
    setSelectedCategory,
  } = useEvents();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <main className="pt-16">
        <EventHero searchQuery={searchQuery} onSearch={setSearchQuery} />
        <EventFilters
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        <EventGrid events={filteredEvents} />
        <EventCTA />
      </main>
      <Footer />
    </div>
  );
}