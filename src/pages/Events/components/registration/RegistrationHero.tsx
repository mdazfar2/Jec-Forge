import React from 'react';

export default function RegistrationHero() {
  return (
    <div className="relative bg-indigo-600 py-24">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=1000"
          alt="Cricket field"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">
          Register Your Cricket Team for DSML Cricket League
        </h1>
        <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
          Show your skills on the field! Complete the form below to register your team for the tournament.
        </p>
      </div>
    </div>
  );
}