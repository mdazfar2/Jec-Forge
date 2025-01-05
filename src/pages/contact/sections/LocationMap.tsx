import React from 'react';

export default function LocationMap() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Find Us on Campus
        </h2>
        <div className="aspect-[16/9] w-full rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.bing.com/maps?q=jaipur+engineering+college+kukas+location&FORM=HDRSC6&cp=27.028287%7E75.894374&lvl=20.6"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}