import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Search, Bell, Bookmark, HelpCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import ResourcesSidebar from '../components/resources/ResourcesSidebar';
import ResourceCard from '../components/resources/ResourceCard';
import Breadcrumbs from '../components/resources/Breadcrumbs';
import WelcomeSection from '../components/resources/WelcomeSection';
import CommunityCards from '../components/resources/CommunityCards';
import Navbar from '../components/Navbar';


export default function ResourcesPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  // Extract category and subcategory from URL
  const pathParts = location.pathname.split('/').filter(Boolean);
  const category = pathParts[1] || '';
  const subcategory = pathParts[2] || '';

  const showWelcomePage = !category && !subcategory;

  return (<>
    <Navbar />
    <div className="pt-16 min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search resources..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
            </div>

            {/* Utility Icons */}
            <div className="flex items-center space-x-4 ml-4">
              <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <Bell className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              </button>
              <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <Bookmark className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex">
          {/* Sidebar */}
          <ResourcesSidebar isOpen={sidebarOpen} />

          {/* Main Content */}
          <div className={`flex-1 ${sidebarOpen ? 'ml-64' : 'ml-0'} transition-all duration-300`}>
            {/* Toggle Sidebar Button */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="fixed left-0 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-r-lg shadow-lg"
            >
              {sidebarOpen ? (
                <ChevronLeft className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              ) : (
                <ChevronRight className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              )}
            </button>

            {/* Breadcrumbs */}
            <Breadcrumbs />

            {/* Welcome Page or Resource Grid */}
            {showWelcomePage ? (
              <>
                <WelcomeSection />
                <CommunityCards />
              </>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                <ResourceCard
                  searchQuery={searchQuery}
                  category={category}
                  subcategory={subcategory}
                />
              </div>
            )}

            {/* Call-to-Action Section */}
            <div className="mt-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Have a resource to share? Let us know!
              </h3>
              <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300">
                Submit Your Resources
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Help Button */}
      <button className="fixed bottom-8 right-8 bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition-colors duration-300">
        <HelpCircle className="h-6 w-6" />
      </button>
    </div>
    </>
  );
}