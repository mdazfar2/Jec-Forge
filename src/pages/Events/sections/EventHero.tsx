import React from 'react';
import { Search } from 'lucide-react';

interface EventHeroProps {
  searchQuery: string;
  onSearch: (query: string) => void;
}

export default function EventHero({ searchQuery, onSearch }: EventHeroProps) {
  return (
    <section className="relative h-[60vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80"
        >
          <source
            src="https://static.videezy.com/system/resources/previews/000/042/007/original/Students-Working-on-Computer.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
          Discover Exciting Events at Jec Forge!
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-fade-in-delay">
          Explore, participate, and grow with a variety of events designed for everyone.
        </p>
        <div className="max-w-2xl mx-auto">
          <div className="relative animate-fade-in-delay-2">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search for events..."
              value={searchQuery}
              onChange={(e) => onSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/90 backdrop-blur-sm text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
            />
          </div>
        </div>
      </div>
    </section>
  );
}