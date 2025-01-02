import { useState, useMemo } from 'react';
import { Event, EventCategory } from '../../../types/event';
import { events as eventData } from '../data/events';

export function useEvents() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<EventCategory>('All');
  const [events] = useState<Event[]>(eventData);

  const filteredEvents = useMemo(() => {
    return events.filter(event => {
      const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [events, searchQuery, selectedCategory]);

  return {
    events,
    filteredEvents,
    searchQuery,
    selectedCategory,
    setSearchQuery,
    setSelectedCategory,
  };
}