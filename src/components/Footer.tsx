import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <p className="text-lg font-semibold">
            JEC Forge is founded by 2025 passed-out students from Jaipur Engineering College (JEC), Kukas, B.Tech CSE branch.
          </p>
          <a href="/contributors" className="text-blue-500 hover:underline">
            Founded by 2025 Passed Students
          </a>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Jec Forge. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://github.com/jec-forge" className="hover:text-indigo-400">
              <FaGithub className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com/company/jec-forge" className="hover:text-indigo-400">
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a href="https://discord.gg/gv62bmXuGB" className="hover:text-indigo-400">
              <FaDiscord className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}