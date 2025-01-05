import React from 'react';
import { Mail, Phone, MapPin, Github, Twitter, Linkedin } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'contact@jecforge.com',
    href: 'mailto:contact@jecforge.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91-9876543210',
    href: 'tel:+919876543210',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: 'Jaipur Engineering College, Kukas, Jaipur, Rajasthan',
    href: 'https://www.bing.com/maps?q=jaipur+engineering+college+kukas+location&FORM=HDRSC6&cp=27.028287%7E75.894374&lvl=20.6',
  },
];

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export default function ContactInfo() {
  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Contact Information
      </h3>
      
      <div className="space-y-6 mb-8">
        {contactInfo.map(({ icon: Icon, label, value, href }) => (
          <a
            key={label}
            href={href}
            className="flex items-center space-x-4 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <Icon className="h-6 w-6" />
            <div>
              <p className="font-medium">{label}</p>
              <p>{value}</p>
            </div>
          </a>
        ))}
      </div>

      <div>
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Connect With Us
        </h4>
        <div className="flex space-x-6">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors transform hover:scale-110"
            >
              <Icon className="h-6 w-6" />
              <span className="sr-only">{label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}