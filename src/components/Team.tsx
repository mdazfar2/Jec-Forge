import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Github, Linkedin, Mail } from 'lucide-react';
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  description: string;
  social: {
    github: string;
    linkedin: string;
    email: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Azfar Alam',
    role: 'Founder & Lead Developer',
    image: '/assets/azfar.webp',
    description: 'Leads project development, oversees technical architecture, and ensures innovation in creating impactful solutions.',
    social: {
      github: 'https://github.com/mdazfar2',
      linkedin: 'https://linkedin.com/in/md-azfar-alam',
      email: 'mailto:azfaralam.ops@gmail.com'
    }
  },
  {
    id: 2,
    name: 'Nitish Kumar Jha',
    role: 'Co-founder & Technical Lead',
    image: '/assets/Nitish Kumar Jha.webp',
    description: 'Manages the technical roadmap, resolves critical issues, and coordinates development efforts across teams.',
    social: {
      github: 'https://github.com/nitishkumar525',
      linkedin: 'https://linkedin.com/in/nitish-kumar-jha',
      email: 'mailto:nitishjha.dev@gmail.com'
    }
  },
  {
    id: 3,
    name: 'Manikant Singh',
    role: 'Project Coordinator',
    image: '/assets/mani2.webp',
    description: 'Organizes tasks, monitors progress, and ensures timely delivery of project milestones with effective communication.',
    social: {
      github: 'https://github.com/manikant69',
      linkedin: 'https://linkedin.com/in/manikant69',
      email: 'mailto:manikant.dev07@gmail.com'
    }
  },
  {
    id: 4,
    name: 'Ravishankar Kumar',
    role: 'Backend Developer',
    image: '/assets/ravisk.webp',
    description: 'Develops scalable APIs, optimizes server-side logic, and ensures secure database integration for applications.',
    social: {
      github: 'https://github.com/ravisksingh1999',
      linkedin: 'https://linkedin.com/in/ravisksingh1999',
      email: 'mailto:ravishankarks199@gmail.com'
    }
  },
  {
    id: 5,
    name: 'Sachin Singh',
    role: 'DevOps Associate',
    image: '/assets/sachin-2.webp',
    description: 'Supports CI/CD pipelines, optimizes deployment processes, and ensures seamless software delivery.',
    social: {
      github: 'https://github.com/sachin2815',
      linkedin: 'https://linkedin.com/in/sa-chin',
      email: 'mailto:sachin.profess0@gmail.com'
    }
  },
  {
    id: 6,
    name: 'Raviranjan Kumar',
    role: 'Frontend Developer',
    image: '/assets/ravirj.webp',
    description: 'Builds intuitive user interfaces, enhances user experience, and integrates designs seamlessly with backend systems.',
    social: {
      github: 'https://github.com/raviranjan0',
      linkedin: 'https://linkedin.com/in/raviranjan0',
      email: 'mailto:webravi11@gmail.com'
    }
  },
  {
    id: 7,
    name: 'Anuj Kumar',
    role: 'Frontend Developer',
    image: '/assets/anuj.webp',
    description: 'Creates responsive and dynamic web interfaces, focusing on accessibility and cross-platform compatibility.',
    social: {
      github: 'https://github.com/anujgaurave',
      linkedin: 'https://linkedin.com/in/anuj-gaurave',
      email: 'mailto:anujgaurave@gmail.com'
    }
  },
  {
    id: 8,
    name: 'Aditya Kumar',
    role: 'Community Manager',
    image: '/assets/adi2.webp',
    description: 'Engages with the community, manages outreach programs, and fosters collaboration among developers and users.',
    social: {
      github: 'https://github.com/Aditya05-dev',
      linkedin: 'https://linkedin.com/in/aditya-kumar-559850252',
      email: 'mailto:ar44350@gmail.com'
    }
  }
];

const TeamMemberCard = ({ member }: { member: TeamMember }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div 
      className="flex flex-col items-center text-center relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative mb-4">
        <div className="absolute -top-4 -left-4 text-blue-400">
          <Leaf className="w-8 h-8 transform rotate-45" />
        </div>
        <img
          src={member.image}
          alt={member.name}
          className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-lg transition-transform duration-300 ease-in-out"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 flex items-center justify-center gap-4 bg-black bg-opacity-50 rounded-full"
        >
          <a
            href={member.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white rounded-full text-gray-800 hover:text-blue-600 transition-colors duration-200"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href={member.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white rounded-full text-gray-800 hover:text-blue-600 transition-colors duration-200"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href={member.social.email}
            className="p-2 bg-white rounded-full text-gray-800 hover:text-blue-600 transition-colors duration-200"
          >
            <Mail className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{member.name}</h3>
      <p className="text-blue-600 font-medium mb-3">{member.role}</p>
      <p className="text-gray-600 dark:text-gray-400 text-sm max-w-xs">
        {member.description}
      </p>
    </div>
  );
};

export default function Team() {
  return (
    <div>
      <Navbar /> {/* Add the Navbar component */}
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-8">OUR TEAM</h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Meet the creators of JEC Forge – a platform built by 2025 B.Tech CSE graduates from JEC, Kukas.
            </p>
            <div className="w-full max-w-3xl mx-auto h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent my-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </div>
      <Footer /> {/* Add the Footer component */}
    </div>
  );
}