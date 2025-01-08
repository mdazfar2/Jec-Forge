import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Layout,
  Server,
  Cloud,
  Database,
  Terminal,
  Smartphone,
  Shield,
  Cpu,
  GitBranch,
  ChevronDown,
  ChevronRight,
  Drum,
} from 'lucide-react';

interface Category {
  name: string;
  icon: React.ElementType;
  subcategories: string[];
}

const categories: Category[] = [
  {
    name: 'Frontend',
    icon: Layout,
    subcategories: [
        'React',
        'Vue',
        'Angular',
        'CSS',
        'JavaScript',
        'HTML',
        'Next.js',
        'Nuxt.js',
        'Svelte',
        'Tailwind_CSS',
        'Bootstrap',
        'Material_UI',
        'Chakra_UI',
        'Webpack',
        'Vite',
        'Gatsby',
        'Three.js',
        'jQuery',
        'Redux',
        'SASS',
        'LESS',
        'TypeScript',
        'Emotion',
        'Styled_Components',
        'Lit',
        'Alpine.js',
        'Stitches',
        'Storybook',
        'Chart.js',
        'D3.js',
        'Framer_Motion',
        'GreenSock (GSAP)',
        'A-Frame',
        'Zustand',
        'PWA (Progressive Web Apps)',
        'Parcel',
        'Qwik',
        'SolidJS',
        'Handlebars.js',
        'Mustache.js'
    ]
},

{
  name: 'Backend',
  icon: Server,
  subcategories: [
    'Node.js',
    'Express.js',
    'Python',
    'Django',
    'Flask',
    'Java',
    'Spring_Boot',
    'Go',
    'Gin',
    'Ruby_on_Rails',
    'PHP',
    'Laravel',
    'ASP.NET_Core',
    'Kotlin',
    'Ktor',
    'Rust',
    'Actix_Web'
  ]
},

  {
    name: 'Cloud_Computing',
    icon: Cloud,
    subcategories: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Docker']
  },
  {
    name: 'Databases',
    icon: Database,
    subcategories: ['SQL', 'MongoDB', 'Redis', 'PostgreSQL', 'Firebase']
  },
  {
    name: 'DevOps',
    icon: Terminal,
    subcategories: ['CI_CD', 'Jenkins', 'GitLab', 'Terraform', 'Ansible']
  },
  {
    name: 'Mobile_Development',
    icon: Smartphone,
    subcategories: ['React_Native', 'Flutter', 'iOS', 'Android', 'Xamarin']
  },
  {
    name: 'Security',
    icon: Shield,
    subcategories: ['Web_Security', 'Cryptography', 'OAuth', 'JWT', 'HTTPS']
  },
  {
    name: 'System_Design',
    icon: Cpu,
    subcategories: ['Architecture', 'Scalability', 'Microservices', 'APIs', 'Caching']
  },
  {
    name: 'Version_Control',
    icon: GitBranch,
    subcategories: ['Git', 'GitHub', 'GitLab', 'Bitbucket', 'SVN']
  },
  {
    name: 'Ethical_Hacking',
    icon: Drum,
    subcategories: ['Malware', 'GitHub', 'GitLab', 'Bitbucket', 'SVN']
  }
];

interface Props {
  isOpen: boolean;
}

export default function ResourcesSidebar({ isOpen }: Props) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleCategory = (categoryName: string) => {
    setExpandedCategory(expandedCategory === categoryName ? null : categoryName);
  };

  return (
    <aside
      className={`fixed left-0 top-16 h-[calc(100vh-4rem)] bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 overflow-y-auto ${
        isOpen ? 'w-64' : 'w-0'
      }`}
    >
      <nav className="p-4">
        {categories.map(category => (
          <div key={category.name} className="mb-2">
            <button
              onClick={() => toggleCategory(category.name)}
              className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <div className="flex items-center">
                <category.icon className="h-5 w-5 mr-2 text-indigo-600 dark:text-indigo-400" />
                <span className="text-gray-700 dark:text-gray-200">{category.name}</span>
              </div>
              {expandedCategory === category.name ? (
                <ChevronDown className="h-4 w-4 text-gray-500" />
              ) : (
                <ChevronRight className="h-4 w-4 text-gray-500" />
              )}
            </button>
            {expandedCategory === category.name && (
              <div className="ml-7 mt-1 space-y-1">
                {category.subcategories.map(sub => (
                  <Link
                    key={sub}
                    to={`/resources/${category.name.toLowerCase()}/${sub.toLowerCase()}`}
                    className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md transition-colors"
                  >
                    {sub}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}