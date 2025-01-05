interface Resource {
  id: number;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  url: string;
}

export const resources: Resource[] = [
  // Frontend - React
  {
    id: 1,
    title: 'React Hooks Deep Dive',
    description: 'Master React Hooks with practical examples and best practices for state management and side effects.',
    category: 'Frontend',
    subcategory: 'React',
    difficulty: 'Intermediate',
    url: 'https://react-hooks-guide.com'
  },
  {
    id: 2,
    title: 'React Performance Optimization',
    description: 'Learn techniques to optimize React applications for better performance and user experience.',
    category: 'Frontend',
    subcategory: 'React',
    difficulty: 'Advanced',
    url: 'https://react-performance.com'
  },
  // Frontend - Vue
  {
    id: 3,
    title: 'Vue.js 3 Composition API',
    description: 'Learn how to use Vue 3 Composition API to build scalable applications.',
    category: 'Frontend',
    subcategory: 'Vue',
    difficulty: 'Intermediate',
    url: 'https://vue3-composition-api.com'
  },
  {
    id: 4,
    title: 'Vue.js State Management',
    description: 'Master state management in Vue.js applications using Pinia and Vuex.',
    category: 'Frontend',
    subcategory: 'Vue',
    difficulty: 'Advanced',
    url: 'https://vue-state-management.com'
  },
  // Frontend - Angular
  {
    id: 5,
    title: 'Angular Fundamentals',
    description: 'Get started with Angular framework and learn its core concepts.',
    category: 'Frontend',
    subcategory: 'Angular',
    difficulty: 'Beginner',
    url: 'https://angular-fundamentals.com'
  },
  // Backend - Node.js
  {
    id: 6,
    title: 'Node.js Microservices Architecture',
    description: 'Build scalable microservices with Node.js, Express, and Docker.',
    category: 'Backend',
    subcategory: 'Node.js',
    difficulty: 'Advanced',
    url: 'https://nodejs-microservices.com'
  },
  {
    id: 7,
    title: 'Node.js Security Best Practices',
    description: 'Secure your Node.js applications against common vulnerabilities and attacks.',
    category: 'Backend',
    subcategory: 'Node.js',
    difficulty: 'Intermediate',
    url: 'https://nodejs-security.com'
  },
  // Backend - Python
  {
    id: 8,
    title: 'FastAPI Development',
    description: 'Build high-performance APIs with Python using FastAPI framework.',
    category: 'Backend',
    subcategory: 'Python',
    difficulty: 'Intermediate',
    url: 'https://fastapi-guide.com'
  },
  // Cloud Computing - AWS
  {
    id: 9,
    title: 'AWS Lambda Fundamentals',
    description: 'Get started with serverless computing using AWS Lambda functions.',
    category: 'Cloud_Computing',
    subcategory: 'AWS',
    difficulty: 'Beginner',
    url: 'https://aws-lambda-guide.com'
  },
  {
    id: 10,
    title: 'AWS S3 Deep Dive',
    description: 'Master AWS S3 for scalable and secure object storage solutions.',
    category: 'Cloud_Computing',
    subcategory: 'AWS',
    difficulty: 'Intermediate',
    url: 'https://aws-s3-guide.com'
  },
  // Databases - MongoDB
  {
    id: 11,
    title: 'MongoDB Aggregation Pipeline',
    description: 'Master MongoDB aggregation framework for complex data processing.',
    category: 'Databases',
    subcategory: 'MongoDB',
    difficulty: 'Advanced',
    url: 'https://mongodb-aggregation.com'
  },
  // DevOps - Docker
  {
    id: 12,
    title: 'Docker Container Orchestration',
    description: 'Learn how to orchestrate Docker containers for production environments.',
    category: 'DevOps',
    subcategory: 'Docker',
    difficulty: 'Advanced',
    url: 'https://docker-orchestration.com'
  },
  // Mobile Development - React Native
  {
    id: 13,
    title: 'React Native Navigation',
    description: 'Implement complex navigation patterns in React Native applications.',
    category: 'Mobile_Development',
    subcategory: 'React_Native',
    difficulty: 'Intermediate',
    url: 'https://react-native-navigation.com'
  },
  // Security - Web Security
  {
    id: 14,
    title: 'Web Security Fundamentals',
    description: 'Learn essential web security concepts and best practices.',
    category: 'Security',
    subcategory: 'Web_Security',
    difficulty: 'Beginner',
    url: 'https://web-security-guide.com'
  },
  // System Design - Architecture
  {
    id: 15,
    title: 'Microservices Design Patterns',
    description: 'Learn common design patterns for building microservices architecture.',
    category: 'System_Design',
    subcategory: 'Architecture',
    difficulty: 'Advanced',
    url: 'https://microservices-patterns.com'
  },
  // Version Control - Git
  {
    id: 16,
    title: 'Advanced Git Workflows',
    description: 'Master advanced Git concepts and team collaboration workflows.',
    category: 'Version_Control',
    subcategory: 'Git',
    difficulty: 'Advanced',
    url: 'https://advanced-git-guide.com'
  },
  //ci/cd
  {
    id: 17,
    title: 'devops check',
    description: 'Master advanced Git concepts and team collaboration workflows.',
    category: 'devops',
    subcategory: 'jenkins',
    difficulty: 'Advanced',
    url: 'https://advanced-git-guide.com'
  },
  {
    id: 18,
    title: 'ethical check',
    description: 'Master advanced Git concepts and team collaboration workflows.',
    category: 'ethical_hacking',
    subcategory: 'malware',
    difficulty: 'Advanced',
    url: 'https://advanced-git-guide.com'
  },
  {
    id: 19,
    title: 'Free React Bootcamp',
    description: 'Master advanced Git concepts and team collaboration workflows.',
    category: 'ethical_hacking',
    subcategory: 'malware',
    difficulty: 'Advanced',
    url: 'https://advanced-git-guide.com'
  },
  {
    id: 20,
    title: 'Official React Documentation',
    description: 'Comprehensive guide and reference for React, maintained by Facebook.',
    category: 'Frontend',
    subcategory: 'React',
    difficulty: 'Beginner',
    url: 'https://react.dev'
  },
  {
    id: 21,
    title: 'React Tutorial for Beginners',
    description: 'A step-by-step tutorial for learning React from scratch.',
    category: 'Frontend',
    subcategory: 'React',
    difficulty: 'Beginner',
    url: 'https://www.freecodecamp.org/news/react-beginners-guide/'
  },
  {
    id: 22,
    title: 'Full Stack Open 2024 - React',
    description: 'A free, university-level course that covers React and related concepts.',
    category: 'Frontend',
    subcategory: 'React',
    difficulty: 'Intermediate',
    url: 'https://fullstackopen.com/en/'
  },
  {
    id: 23,
    title: 'Epic React by Kent C. Dodds',
    description: 'A premium course with hands-on projects for mastering React.',
    category: 'Frontend',
    subcategory: 'React',
    difficulty: 'Advanced',
    url: 'https://epicreact.dev/'
  },
  {
    id: 24,
    title: 'React Router Guide',
    description: 'Learn how to implement navigation and routing in React applications.',
    category: 'Frontend',
    subcategory: 'React',
    difficulty: 'Intermediate',
    url: 'https://reactrouter.com/'
  },
  {
    id: 25,
    title: '30 Days of React',
    description: 'A structured guide to learning React in 30 days with practical exercises.',
    category: 'Frontend',
    subcategory: 'React',
    difficulty: 'Beginner',
    url: 'https://github.com/Asabeneh/30-Days-Of-React'
  },
  {
    id: 26,
    title: 'React State Management with Redux',
    description: 'Understand state management in React using Redux and best practices.',
    category: 'Frontend',
    subcategory: 'React',
    difficulty: 'Intermediate',
    url: 'https://redux.js.org/introduction/getting-started'
  },
  {
    id: 27,
    title: 'React Performance Optimization',
    description: 'Learn techniques to optimize the performance of React applications.',
    category: 'Frontend',
    subcategory: 'React',
    difficulty: 'Advanced',
    url: 'https://www.smashingmagazine.com/2020/07/improving-react-applications-performance/'
  },
  {
    id: 28,
    title: 'Official Vue.js Documentation',
    description: 'The official documentation for Vue.js, providing a detailed guide and API references.',
    category: 'Frontend',
    subcategory: 'Vue',
    difficulty: 'Beginner',
    url: 'https://vuejs.org'
  },
  {
    id: 29,
    title: 'Vue Mastery Free Courses',
    description: 'Free beginner-friendly courses and tutorials to get started with Vue.js.',
    category: 'Frontend',
    subcategory: 'Vue',
    difficulty: 'Beginner',
    url: 'https://www.vuemastery.com/free-courses'
  },
  {
    id: 30,
    title: 'The Complete Guide to Vue 3',
    description: 'A full course on Vue.js 3, including Composition API, reactivity, and more.',
    category: 'Frontend',
    subcategory: 'Vue',
    difficulty: 'Intermediate',
    url: 'https://academind.com/learn/vue/vue-3-course'
  },
  {
    id: 31,
    title: 'Build a Real-World App with Vue.js',
    description: 'Learn Vue.js by building a real-world application step-by-step.',
    category: 'Frontend',
    subcategory: 'Vue',
    difficulty: 'Intermediate',
    url: 'https://vuejsdevelopers.com/courses/'
  },
  {
    id: 32,
    title: 'Vue.js Best Practices for Large-Scale Applications',
    description: 'A guide to architecting scalable and maintainable Vue.js applications.',
    category: 'Frontend',
    subcategory: 'Vue',
    difficulty: 'Advanced',
    url: 'https://itnext.io/vue-js-best-practices-for-building-large-scale-applications-b8ca34ed6b69'
  },
  {
    id: 33,
    title: 'Official Angular Documentation',
    description: 'Comprehensive official documentation for Angular, covering setup, guides, and API references.',
    category: 'Frontend',
    subcategory: 'Angular',
    difficulty: 'Beginner',
    url: 'https://angular.io/docs'
  },
  {
    id: 34,
    title: 'Tour of Heroes: Angular Tutorial',
    description: 'A step-by-step tutorial to build a simple app using Angular concepts.',
    category: 'Frontend',
    subcategory: 'Angular',
    difficulty: 'Beginner',
    url: 'https://angular.io/tutorial'
  },
  {
    id: 35,
    title: 'Angular - The Complete Guide (2023 Edition)',
    description: 'A Udemy course that covers everything from Angular basics to advanced concepts.',
    category: 'Frontend',
    subcategory: 'Angular',
    difficulty: 'Intermediate',
    url: 'https://www.udemy.com/course/the-complete-guide-to-angular-2/'
  },
  {
    id: 36,
    title: 'RxJS and Angular: Reactive Programming',
    description: 'Learn how to use RxJS for reactive programming in Angular applications.',
    category: 'Frontend',
    subcategory: 'Angular',
    difficulty: 'Intermediate',
    url: 'https://rxjs.dev/guide'
  },
  {
    id: 37,
    title: 'Scalable Angular Architecture',
    description: 'Best practices for structuring and scaling Angular applications in enterprise projects.',
    category: 'Frontend',
    subcategory: 'Angular',
    difficulty: 'Advanced',
    url: 'https://www.scalable-angular.com/'
  },
  {
    id: 38,
    title: 'MDN Web Docs: CSS',
    description: 'The ultimate reference for CSS with detailed documentation, examples, and browser compatibility.',
    category: 'Frontend',
    subcategory: 'CSS',
    difficulty: 'Beginner',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
  },
  {
    id: 39,
    title: 'CSS Tricks',
    description: 'A treasure trove of CSS techniques, tips, and tutorials for developers of all levels.',
    category: 'Frontend',
    subcategory: 'CSS',
    difficulty: 'Intermediate',
    url: 'https://css-tricks.com/'
  },
  {
    id: 40,
    title: 'Modern CSS with Tailwind',
    description: 'Learn how to use Tailwind CSS for building modern, responsive designs with utility-first principles.',
    category: 'Frontend',
    subcategory: 'CSS',
    difficulty: 'Intermediate',
    url: 'https://tailwindcss.com/docs'
  },
  {
    id: 41,
    title: 'CSS Grid Garden',
    description: 'An interactive game to learn and master CSS Grid properties in a fun and engaging way.',
    category: 'Frontend',
    subcategory: 'CSS',
    difficulty: 'Beginner',
    url: 'https://cssgridgarden.com/'
  },
  {
    id: 42,
    title: 'Mastering Flexbox',
    description: 'A comprehensive guide to understanding and using CSS Flexbox layout with examples and use cases.',
    category: 'Frontend',
    subcategory: 'CSS',
    difficulty: 'Intermediate',
    url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/'
  },
  {
    id: 43,
    title: 'JavaScript.info',
    description: 'A comprehensive guide to modern JavaScript, covering fundamentals to advanced topics.',
    category: 'Frontend',
    subcategory: 'JavaScript',
    difficulty: 'Beginner',
    url: 'https://javascript.info/'
  },
  {
    id: 44,
    title: 'Eloquent JavaScript',
    description: 'A modern introduction to JavaScript programming with interactive examples and exercises.',
    category: 'Frontend',
    subcategory: 'JavaScript',
    difficulty: 'Intermediate',
    url: 'https://eloquentjavascript.net/'
  },
  {
    id: 45,
    title: 'MDN Web Docs: JavaScript',
    description: 'The official documentation for JavaScript with tutorials, references, and examples.',
    category: 'Frontend',
    subcategory: 'JavaScript',
    difficulty: 'Beginner',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
  },
  {
    id: 46,
    title: 'You Don’t Know JS (Yet)',
    description: 'A book series diving deep into JavaScript, its quirks, and powerful features.',
    category: 'Frontend',
    subcategory: 'JavaScript',
    difficulty: 'Advanced',
    url: 'https://github.com/getify/You-Dont-Know-JS'
  },
  {
    id: 47,
    title: 'FreeCodeCamp: JavaScript Algorithms and Data Structures',
    description: 'Learn JavaScript fundamentals with hands-on coding challenges and projects.',
    category: 'Frontend',
    subcategory: 'JavaScript',
    difficulty: 'Beginner',
    url: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/'
  },
  {
    id: 48,
    title: 'JavaScript 30',
    description: 'A 30-day challenge to build 30 projects using vanilla JavaScript.',
    category: 'Frontend',
    subcategory: 'JavaScript',
    difficulty: 'Intermediate',
    url: 'https://javascript30.com/'
  },
  {
    id: 49,
    title: 'The Modern JavaScript Tutorial',
    description: 'A detailed guide to JavaScript, starting with basics and moving to advanced topics.',
    category: 'Frontend',
    subcategory: 'JavaScript',
    difficulty: 'Advanced',
    url: 'https://javascript.info/'
  },
  {
    id: 50,
    title: 'Frontend Masters: JavaScript Course',
    description: 'Comprehensive JavaScript courses taught by industry experts.',
    category: 'Frontend',
    subcategory: 'JavaScript',
    difficulty: 'Advanced',
    url: 'https://frontendmasters.com/courses/javascript/'
  },
  {
    id: 51,
    title: 'JavaScript Design Patterns',
    description: 'Learn design patterns in JavaScript for better coding practices.',
    category: 'Frontend',
    subcategory: 'JavaScript',
    difficulty: 'Advanced',
    url: 'https://addyosmani.com/resources/essentialjsdesignpatterns/book/'
  },
  {
    id: 52,
    title: 'Learn JavaScript with Codecademy',
    description: 'An interactive course to learn JavaScript with hands-on coding exercises.',
    category: 'Frontend',
    subcategory: 'JavaScript',
    difficulty: 'Beginner',
    url: 'https://www.codecademy.com/learn/introduction-to-javascript'
  },
  {
    id: 53,
    title: 'Full-Stack Open: JavaScript',
    description: 'A free course that teaches modern JavaScript and full-stack development.',
    category: 'Frontend',
    subcategory: 'JavaScript',
    difficulty: 'Intermediate',
    url: 'https://fullstackopen.com/en/'
  },
  {
    id: 54,
    title: 'HTML & CSS: Design and Build Websites',
    description: 'A beginner-friendly book to learn HTML and CSS from scratch.',
    category: 'Frontend',
    subcategory: 'HTML',
    difficulty: 'Beginner',
    url: 'https://www.htmlandcssbook.com/'
  },
  {
    id: 55,
    title: 'HTML Living Standard',
    description: 'The official specification for HTML maintained by WHATWG.',
    category: 'Frontend',
    subcategory: 'HTML',
    difficulty: 'Advanced',
    url: 'https://html.spec.whatwg.org/'
  },
  {
    id: 56,
    title: 'MDN Web Docs: HTML',
    description: 'Comprehensive documentation for HTML by Mozilla.',
    category: 'Frontend',
    subcategory: 'HTML',
    difficulty: 'Advanced',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
  },
  {
    id: 57,
    title: 'FreeCodeCamp: Responsive Web Design',
    description: 'A free course to learn HTML and build responsive websites.',
    category: 'Frontend',
    subcategory: 'HTML',
    difficulty: 'Beginner',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/'
  },
  {
    id: 58,
    title: 'HTML Dog Tutorials',
    description: 'Step-by-step tutorials for learning HTML, CSS, and JavaScript.',
    category: 'Frontend',
    subcategory: 'HTML',
    difficulty: 'Beginner',
    url: 'https://www.htmldog.com/guides/html/'
  },
  {
    id: 59,
    title: 'Web.dev: Learn HTML',
    description: 'A modern guide to learning HTML for creating performant websites.',
    category: 'Frontend',
    subcategory: 'HTML',
    difficulty: 'Intermediate',
    url: 'https://web.dev/learn/html/'
  }


];

export const filterResources = (
  resources: Resource[],
  searchQuery: string,
  category?: string,
  subcategory?: string,
  difficulty?: string
) => {
  return resources.filter(resource => {
    const matchesSearch = searchQuery
      ? resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchQuery.toLowerCase())
      : true;

    const matchesCategory = category ? resource.category.toLowerCase() === category.toLowerCase() : true;
    const matchesSubcategory = subcategory
      ? resource.subcategory.toLowerCase() === subcategory.toLowerCase()
      : true;
    const matchesDifficulty = difficulty
      ? resource.difficulty === difficulty
      : true;

    return matchesSearch && matchesCategory && matchesSubcategory && matchesDifficulty;
  });
};