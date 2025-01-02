import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function AboutHero() {
  return (
    <section className="relative h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80"
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
          Welcome to Jec Forge – Empowering Innovators, Solving Challenges
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto animate-fade-in-delay">
          An initiative by Jaipur Engineering College students to build a better future through collaboration and innovation
        </p>
        <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 animate-fade-in-delay-2">
          Explore Our Journey
          <ChevronRight className="ml-2 h-5 w-5" />
        </button>
      </div>
    </section>
  );
}