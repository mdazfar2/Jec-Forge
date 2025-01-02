import React from 'react';
import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-indigo-400">Home</a></li>
              <li><a href="#about" className="hover:text-indigo-400">About</a></li>
              <li><a href="#events" className="hover:text-indigo-400">Events</a></li>
              <li><a href="#resources" className="hover:text-indigo-400">Resources</a></li>
              <li><a href="#contact" className="hover:text-indigo-400">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                info@jecforge.com
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                +1 (555) 123-4567
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-indigo-400">GitHub</a>
              <a href="#" className="hover:text-indigo-400">Twitter</a>
              <a href="#" className="hover:text-indigo-400">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Jec Forge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}