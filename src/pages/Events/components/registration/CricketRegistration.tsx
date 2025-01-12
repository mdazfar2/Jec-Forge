import React, { useState } from 'react';
import { Send, Plus, Trash2 } from 'lucide-react';
import RegistrationHero from './RegistrationHero';
import PlayerFields from './PlayerFields';

interface Player {
  name: string;
  role: string;
}

export default function CricketRegistration() {
  const [formData, setFormData] = useState({
    teamName: '',
    captainName: '',
    email: '',
    phone: '',
    players: [{ name: '', role: '' }] as Player[],
    preferredSlot: '',
    agreement: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.teamName) newErrors.teamName = 'Team name is required';
    if (!formData.captainName) newErrors.captainName = "Captain's name is required";
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number';
    }
    if (formData.players.length < 6) {
      newErrors.players = 'Minimum 6 players required';
    }
    if (!formData.preferredSlot) newErrors.preferredSlot = 'Please select a preferred slot';
    if (!formData.agreement) newErrors.agreement = 'You must agree to the tournament rules';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      // Handle form submission
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-12">
      <RegistrationHero />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8">
          {/* Team Information */}
          <div className="space-y-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Team Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Team Name *
                </label>
                <input
                  type="text"
                  value={formData.teamName}
                  onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
                />
                {errors.teamName && <p className="mt-1 text-sm text-red-600">{errors.teamName}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Captain's Name *
                </label>
                <input
                  type="text"
                  value={formData.captainName}
                  onChange={(e) => setFormData({ ...formData, captainName: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
                />
                {errors.captainName && <p className="mt-1 text-sm text-red-600">{errors.captainName}</p>}
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
                />
                {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
              </div>
            </div>
          </div>

          {/* Player Details */}
          <PlayerFields
            players={formData.players}
            setPlayers={(players) => setFormData({ ...formData, players })}
            error={errors.players}
          />

          {/* Match Preferences */}
          <div className="space-y-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Match Preferences</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Preferred Match Slot *
              </label>
              <select
                value={formData.preferredSlot}
                onChange={(e) => setFormData({ ...formData, preferredSlot: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
              >
                <option value="">Select a time slot</option>
                <option value="morning">Morning (9:00 AM - 12:00 PM)</option>
                <option value="afternoon">Afternoon (2:00 PM - 5:00 PM)</option>
                <option value="evening">Evening (5:00 PM - 8:00 PM)</option>
              </select>
              {errors.preferredSlot && <p className="mt-1 text-sm text-red-600">{errors.preferredSlot}</p>}
            </div>
          </div>

          {/* Agreement */}
          <div className="mb-8">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={formData.agreement}
                onChange={(e) => setFormData({ ...formData, agreement: e.target.checked })}
                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
              <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">
                I agree to the tournament rules and guidelines
              </span>
            </label>
            {errors.agreement && <p className="mt-1 text-sm text-red-600">{errors.agreement}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex justify-center items-center gap-2 bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 transition-all duration-300"
          >
            <Send className="h-5 w-5" />
            Register My Team
          </button>
        </form>
      </div>
    </div>
  );
}