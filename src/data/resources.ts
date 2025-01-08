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
    description: 'A treasure trove of CSS techniques, tips, and tutorials for developers of Advanced.',
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
  },
  {
    id: 60,
    title: 'Next.js Official Documentation',
    description: 'Comprehensive guide and API reference for Next.js.',
    category: 'Frontend',
    subcategory: 'Next.js',
    difficulty: 'Advanced',
    url: 'https://nextjs.org/docs'
  },
  {
    id: 61,
    title: 'The Complete Guide to Next.js',
    description: 'A detailed course covering the fundamentals and advanced features of Next.js.',
    category: 'Frontend',
    subcategory: 'Next.js',
    difficulty: 'Intermediate',
    url: 'https://academind.com/learn/nextjs/'
  },
  {
    id: 62,
    title: 'Next.js Crash Course',
    description: 'A beginner-friendly crash course to quickly learn Next.js.',
    category: 'Frontend',
    subcategory: 'Next.js',
    difficulty: 'Beginner',
    url: 'https://www.youtube.com/watch?v=mTz0GXj8NN0'
  },
  {
    id: 63,
    title: 'Next.js & React - The Complete Guide',
    description: 'A hands-on course to build scalable applications using Next.js and React.',
    category: 'Frontend',
    subcategory: 'Next.js',
    difficulty: 'Advanced',
    url: 'https://www.udemy.com/course/nextjs-react-complete-guide/'
  },
  {
    id: 64,
    title: 'How to Build a Blog with Next.js',
    description: 'A tutorial on creating a modern blog using Next.js and Markdown.',
    category: 'Frontend',
    subcategory: 'Next.js',
    difficulty: 'Intermediate',
    url: 'https://nextjs.org/learn/basics/create-nextjs-app'
  },
  {
    id: 65,
    title: 'Next.js Performance Optimization',
    description: 'Learn techniques to optimize the performance of your Next.js applications.',
    category: 'Frontend',
    subcategory: 'Next.js',
    difficulty: 'Advanced',
    url: 'https://vercel.com/blog/nextjs-performance-optimization'
  },
  {
    id: 66,
    title: 'Nuxt.js Official Documentation',
    description: 'The official documentation for Nuxt.js, covering setup, usage, and features.',
    category: 'Frontend',
    subcategory: 'Nuxt.js',
    difficulty: 'Advanced',
    url: 'https://nuxtjs.org/docs'
  },
  {
    id: 67,
    title: 'Nuxt.js Fundamentals',
    description: 'A beginner-friendly guide to understanding and using Nuxt.js for server-side rendering.',
    category: 'Frontend',
    subcategory: 'Nuxt.js',
    difficulty: 'Beginner',
    url: 'https://www.youtube.com/watch?v=ltzlhAxJr74'
  },
  {
    id: 68,
    title: 'Build and Deploy with Nuxt.js',
    description: 'Step-by-step tutorial to build and deploy modern web applications with Nuxt.js.',
    category: 'Frontend',
    subcategory: 'Nuxt.js',
    difficulty: 'Intermediate',
    url: 'https://www.udemy.com/course/nuxtjs-vuejs-on-steroids/'
  },
  {
    id: 69,
    title: 'Mastering Nuxt.js',
    description: 'Comprehensive course to master Nuxt.js and server-side rendering.',
    category: 'Frontend',
    subcategory: 'Nuxt.js',
    difficulty: 'Advanced',
    url: 'https://masteringnuxt.com/'
  },
  {
    id: 70,
    title: 'Nuxt.js and Firebase Tutorial',
    description: 'Learn to integrate Nuxt.js with Firebase for a full-stack application.',
    category: 'Frontend',
    subcategory: 'Nuxt.js',
    difficulty: 'Intermediate',
    url: 'https://www.youtube.com/watch?v=5BRfRkJLkX8'
  },
  {
    id: 71,
    title: 'Nuxt.js Auth and State Management',
    description: 'Understand authentication and state management with Nuxt.js and Vuex.',
    category: 'Frontend',
    subcategory: 'Nuxt.js',
    difficulty: 'Advanced',
    url: 'https://nuxtjs.org/blog/auth-with-vuex'
  },
  {
    id: 72,
    title: 'Svelte Official Documentation',
    description: 'The official Svelte documentation, covering the basics to advanced features.',
    category: 'Frontend',
    subcategory: 'Svelte',
    difficulty: 'Advanced',
    url: 'https://svelte.dev/docs'
  },
  {
    id: 73,
    title: 'Svelte for Beginners',
    description: 'A complete beginner’s guide to building apps with Svelte.',
    category: 'Frontend',
    subcategory: 'Svelte',
    difficulty: 'Beginner',
    url: 'https://fireship.io/lessons/svelte-tutorial/'
  },
  {
    id: 74,
    title: 'Svelte Crash Course',
    description: 'A free crash course to quickly get started with Svelte.',
    category: 'Frontend',
    subcategory: 'Svelte',
    difficulty: 'Beginner',
    url: 'https://www.youtube.com/watch?v=3TVy6GdtNuQ'
  },
  {
    id: 75,
    title: 'Advanced Svelte Patterns',
    description: 'Explore advanced Svelte patterns and best practices for building scalable apps.',
    category: 'Frontend',
    subcategory: 'Svelte',
    difficulty: 'Advanced',
    url: 'https://svelte.dev/blog/patterns-for-svelte'
  },
  {
    id: 76,
    title: 'SvelteKit Introduction',
    description: 'Learn the basics of SvelteKit for building server-side rendered apps.',
    category: 'Frontend',
    subcategory: 'Svelte',
    difficulty: 'Intermediate',
    url: 'https://kit.svelte.dev/'
  },
  {
    id: 77,
    title: 'Tailwind CSS Official Documentation',
    description: 'Comprehensive guide to using Tailwind CSS with examples and configuration options.',
    category: 'Frontend',
    subcategory: 'Tailwind_CSS',
    difficulty: 'Advanced',
    url: 'https://tailwindcss.com/docs'
  },
  {
    id: 78,
    title: 'Tailwind CSS Crash Course',
    description: 'A beginner-friendly crash course on building websites using Tailwind CSS.',
    category: 'Frontend',
    subcategory: 'Tailwind_CSS',
    difficulty: 'Beginner',
    url: 'https://www.youtube.com/watch?v=dFgzHOX84xQ'
  },
  {
    id: 79,
    title: 'Mastering Tailwind CSS',
    description: 'An advanced course to master Tailwind CSS and build modern UIs.',
    category: 'Frontend',
    subcategory: 'Tailwind_CSS',
    difficulty: 'Advanced',
    url: 'https://www.udemy.com/course/mastering-tailwind-css/'
  },
  {
    id: 80,
    title: 'Tailwind CSS Playground',
    description: 'An interactive playground to experiment with Tailwind CSS utilities.',
    category: 'Frontend',
    subcategory: 'Tailwind_CSS',
    difficulty: 'Intermediate',
    url: 'https://play.tailwindcss.com/'
  },
  {
    id: 81,
    title: 'Build Responsive Websites with Tailwind CSS',
    description: 'Learn to create fully responsive websites using Tailwind CSS.',
    category: 'Frontend',
    subcategory: 'Tailwind_CSS',
    difficulty: 'Intermediate',
    url: 'https://scrimba.com/learn/tailwind'
  },
  {
    id: 82,
    title: 'Tailwind UI Components',
    description: 'Pre-built UI components and templates designed with Tailwind CSS.',
    category: 'Frontend',
    subcategory: 'Tailwind_CSS',
    difficulty: 'Advanced',
    url: 'https://tailwindui.com/'
  },
  {
    id: 83,
    title: 'Bootstrap Official Documentation',
    description: 'Complete guide to Bootstrap framework, including components, utilities, and responsive design.',
    category: 'Frontend',
    subcategory: 'Bootstrap',
    difficulty: 'Advanced',
    url: 'https://getbootstrap.com/docs/'
  },
  {
    id: 84,
    title: 'Bootstrap 5 Crash Course',
    description: 'A comprehensive crash course to get started with Bootstrap 5.',
    category: 'Frontend',
    subcategory: 'Bootstrap',
    difficulty: 'Beginner',
    url: 'https://www.youtube.com/watch?v=4sosXZsdy-s'
  },
  {
    id: 85,
    title: 'Bootstrap Grid System Explained',
    description: 'Learn about the Bootstrap grid system for responsive web design.',
    category: 'Frontend',
    subcategory: 'Bootstrap',
    difficulty: 'Intermediate',
    url: 'https://www.freecodecamp.org/news/bootstrap-grid-system-explained/'
  },
  {
    id: 86,
    title: 'Material-UI Official Documentation',
    description: 'Comprehensive guide to using Material-UI components and themes.',
    category: 'Frontend',
    subcategory: 'Material_UI',
    difficulty: 'Advanced',
    url: 'https://mui.com/'
  },
  {
    id: 87,
    title: 'Material-UI Basics',
    description: 'Learn how to build stunning UIs with Material-UI.',
    category: 'Frontend',
    subcategory: 'Material_UI',
    difficulty: 'Intermediate',
    url: 'https://www.udemy.com/course/react-material-ui/'
  },
  {
    id: 88,
    title: 'Advanced Styling with Material-UI',
    description: 'Discover advanced techniques for customizing Material-UI components.',
    category: 'Frontend',
    subcategory: 'Material_UI',
    difficulty: 'Advanced',
    url: 'https://dev.to/material-ui/advanced-styling-with-material-ui-38g4'
  },
  {
    id: 89,
    title: 'Chakra UI Official Documentation',
    description: 'Guidelines to build accessible and responsive web applications with Chakra UI.',
    category: 'Frontend',
    subcategory: 'Chakra_UI',
    difficulty: 'Advanced',
    url: 'https://chakra-ui.com/docs'
  },
  {
    id: 90,
    title: 'Chakra UI Crash Course',
    description: 'A quick guide to get started with Chakra UI.',
    category: 'Frontend',
    subcategory: 'Chakra_UI',
    difficulty: 'Beginner',
    url: 'https://www.youtube.com/watch?v=lw0FbB4-1F8'
  },
  {
    id: 91,
    title: 'Advanced Customization with Chakra UI',
    description: 'Master advanced techniques in Chakra UI for professional design systems.',
    category: 'Frontend',
    subcategory: 'Chakra_UI',
    difficulty: 'Advanced',
    url: 'https://chakra-ui.dev/advanced-tutorials'
  },
  {
    id: 92,
    title: 'Webpack Official Guide',
    description: 'Official documentation for learning and configuring Webpack for your projects.',
    category: 'Frontend',
    subcategory: 'Webpack',
    difficulty: 'Intermediate',
    url: 'https://webpack.js.org/concepts/'
  },
  {
    id: 93,
    title: 'Webpack Basics',
    description: 'A beginner-friendly guide to understanding Webpack and bundling.',
    category: 'Frontend',
    subcategory: 'Webpack',
    difficulty: 'Beginner',
    url: 'https://www.freecodecamp.org/news/webpack-tutorial/'
  },
  {
    id: 94,
    title: 'Advanced Webpack Configuration',
    description: 'Learn how to configure Webpack for large-scale applications.',
    category: 'Frontend',
    subcategory: 'Webpack',
    difficulty: 'Advanced',
    url: 'https://dev.to/webpack/advanced-webpack-configuration-1j6o'
  },
  {
    id: 95,
    title: 'Vite Official Documentation',
    description: 'Learn how to use Vite for fast frontend tooling and development.',
    category: 'Frontend',
    subcategory: 'Vite',
    difficulty: 'Advanced',
    url: 'https://vitejs.dev/guide/'
  },
  {
    id: 96,
    title: 'Getting Started with Vite',
    description: 'Learn how to set up Vite for your modern JavaScript projects.',
    category: 'Frontend',
    subcategory: 'Vite',
    difficulty: 'Beginner',
    url: 'https://scotch.io/tutorials/getting-started-with-vite-js'
  },
  {
    id: 97,
    title: 'Vite vs Webpack: A Comparison',
    description: 'Explore the differences between Vite and Webpack.',
    category: 'Frontend',
    subcategory: 'Vite',
    difficulty: 'Intermediate',
    url: 'https://blog.logrocket.com/vite-vs-webpack/'
  },
  {
    id: 98,
    title: 'Gatsby Official Documentation',
    description: 'Comprehensive guide to building blazing-fast websites with Gatsby.',
    category: 'Frontend',
    subcategory: 'Gatsby',
    difficulty: 'Advanced',
    url: 'https://www.gatsbyjs.com/docs/'
  },
  {
    id: 99,
    title: 'Gatsby Crash Course',
    description: 'Quickly learn the basics of Gatsby to build static sites.',
    category: 'Frontend',
    subcategory: 'Gatsby',
    difficulty: 'Beginner',
    url: 'https://www.youtube.com/watch?v=8t0vNu2fCCM'
  },
  {
    id: 100,
    title: 'Advanced Gatsby Plugins and Themes',
    description: 'Learn how to extend Gatsby with plugins and custom themes.',
    category: 'Frontend',
    subcategory: 'Gatsby',
    difficulty: 'Advanced',
    url: 'https://www.gatsbyjs.com/plugins/'
  },
  {
    id: 101,
    title: 'Three.js Fundamentals',
    description: 'Learn the basics of 3D programming with Three.js, a powerful JavaScript library.',
    category: 'Frontend',
    subcategory: 'Three.js',
    difficulty: 'Beginner',
    url: 'https://threejs.org/manual/'
  },
  {
    id: 102,
    title: 'Three.js Journey',
    description: 'Comprehensive course to master Three.js and create 3D experiences on the web.',
    category: 'Frontend',
    subcategory: 'Three.js',
    difficulty: 'Intermediate',
    url: 'https://threejs-journey.com/'
  },
  {
    id: 103,
    title: 'Three.js Advanced Techniques',
    description: 'Explore advanced techniques for creating optimized 3D web applications.',
    category: 'Frontend',
    subcategory: 'Three.js',
    difficulty: 'Advanced',
    url: 'https://discoverthreejs.com/'
  },
  {
    id: 104,
    title: 'jQuery API Documentation',
    description: 'Official documentation for jQuery to learn DOM manipulation, events, and AJAX.',
    category: 'Frontend',
    subcategory: 'jQuery',
    difficulty: 'Advanced',
    url: 'https://api.jquery.com/'
  },
  {
    id: 105,
    title: 'jQuery Crash Course',
    description: 'A quick introduction to the core features of jQuery.',
    category: 'Frontend',
    subcategory: 'jQuery',
    difficulty: 'Beginner',
    url: 'https://www.youtube.com/watch?v=SZpRzZJH3ks'
  },
  {
    id: 106,
    title: 'Redux Official Documentation',
    description: 'Learn how to use Redux for state management in React and JavaScript applications.',
    category: 'Frontend',
    subcategory: 'Redux',
    difficulty: 'Intermediate',
    url: 'https://redux.js.org/'
  },
  {
    id: 107,
    title: 'Redux Toolkit Tutorial',
    description: 'Learn Redux Toolkit for simplifying state management.',
    category: 'Frontend',
    subcategory: 'Redux',
    difficulty: 'Intermediate',
    url: 'https://redux-toolkit.js.org/tutorials/quick-start'
  },
  {
    id: 108,
    title: 'Mastering Redux',
    description: 'Deep dive into Redux concepts and best practices.',
    category: 'Frontend',
    subcategory: 'Redux',
    difficulty: 'Advanced',
    url: 'https://egghead.io/courses/getting-started-with-redux'
  },
  {
    id: 109,
    title: 'SASS Official Documentation',
    description: 'Official guide to learning SASS for better CSS development.',
    category: 'Frontend',
    subcategory: 'SASS',
    difficulty: 'Advanced',
    url: 'https://sass-lang.com/guide'
  },
  {
    id: 110,
    title: 'SASS Crash Course',
    description: 'A beginner-friendly guide to getting started with SASS.',
    category: 'Frontend',
    subcategory: 'SASS',
    difficulty: 'Beginner',
    url: 'https://www.youtube.com/watch?v=_a5j7KoflTs'
  },
  {
    id: 111,
    title: 'LESS Official Documentation',
    description: 'Learn LESS for managing styles with variables and mixins.',
    category: 'Frontend',
    subcategory: 'LESS',
    difficulty: 'Advanced',
    url: 'https://lesscss.org/'
  },
  {
    id: 112,
    title: 'LESS Crash Course',
    description: 'Quick guide to using LESS for CSS preprocessing.',
    category: 'Frontend',
    subcategory: 'LESS',
    difficulty: 'Beginner',
    url: 'https://www.youtube.com/watch?v=q6uULV12eyU'
  },
  {
    id: 113,
    title: 'TypeScript Official Handbook',
    description: 'Complete guide to TypeScript, a superset of JavaScript.',
    category: 'Frontend',
    subcategory: 'TypeScript',
    difficulty: 'Advanced',
    url: 'https://www.typescriptlang.org/docs/'
  },
  {
    id: 114,
    title: 'TypeScript Crash Course',
    description: 'Learn TypeScript with hands-on examples and use cases.',
    category: 'Frontend',
    subcategory: 'TypeScript',
    difficulty: 'Beginner',
    url: 'https://www.youtube.com/watch?v=BwuLxPH8IDs'
  },
  {
    id: 115,
    title: 'Advanced TypeScript Concepts',
    description: 'Dive into advanced features of TypeScript for large projects.',
    category: 'Frontend',
    subcategory: 'TypeScript',
    difficulty: 'Advanced',
    url: 'https://basarat.gitbook.io/typescript/'
  },
  {
    id: 116,
    title: 'Emotion Official Documentation',
    description: 'Learn how to use Emotion for CSS-in-JS styling.',
    category: 'Frontend',
    subcategory: 'Emotion',
    difficulty: 'Advanced',
    url: 'https://emotion.sh/docs/introduction'
  },
  {
    id: 117,
    title: 'Styled Components Official Docs',
    description: 'Learn to style React components with styled-components.',
    category: 'Frontend',
    subcategory: 'Styled_Components',
    difficulty: 'Advanced',
    url: 'https://styled-components.com/docs'
  },
  {
    id: 118,
    title: 'D3.js Official Documentation',
    description: 'Official guide to D3.js for creating data-driven visualizations.',
    category: 'Frontend',
    subcategory: 'D3.js',
    difficulty: 'Intermediate',
    url: 'https://d3js.org/'
  },
  {
    id: 119,
    title: 'Framer Motion Basics',
    description: 'Learn Framer Motion for animating React components.',
    category: 'Frontend',
    subcategory: 'Framer_Motion',
    difficulty: 'Beginner',
    url: 'https://www.framer.com/docs/'
  },
  {
    id: 120,
    title: 'GreenSock Animation Platform (GSAP) Guide',
    description: 'Comprehensive GSAP tutorials for web animations.',
    category: 'Frontend',
    subcategory: 'GreenSock (GSAP)',
    difficulty: 'Intermediate',
    url: 'https://greensock.com/learning/'
  },
  {
    id: 121,
    title: 'A-Frame Official Documentation',
    description: 'Official guide to creating immersive VR experiences with A-Frame.',
    category: 'Frontend',
    subcategory: 'A-Frame',
    difficulty: 'Advanced',
    url: 'https://aframe.io/docs/'
  },
  {
    id: 122,
    title: 'A-Frame Crash Course',
    description: 'Learn A-Frame by building your first VR scene in this step-by-step guide.',
    category: 'Frontend',
    subcategory: 'A-Frame',
    difficulty: 'Beginner',
    url: 'https://www.youtube.com/watch?v=qhXIDscwNYo'
  },
  {
    id: 123,
    title: 'Zustand State Management Guide',
    description: 'Learn how to manage state efficiently with Zustand.',
    category: 'Frontend',
    subcategory: 'Zustand',
    difficulty: 'Intermediate',
    url: 'https://docs.pmnd.rs/zustand/getting-started/introduction'
  },
  {
    id: 124,
    title: 'Zustand Crash Course',
    description: 'A beginner-friendly tutorial on using Zustand in React applications.',
    category: 'Frontend',
    subcategory: 'Zustand',
    difficulty: 'Beginner',
    url: 'https://www.youtube.com/watch?v=w4w94V2z4a4'
  },
  {
    id: 125,
    title: 'PWA Documentation by Google',
    description: 'Official guide to building Progressive Web Apps using modern web technologies.',
    category: 'Frontend',
    subcategory: 'PWA (Progressive Web Apps)',
    difficulty: 'Advanced',
    url: 'https://web.dev/learn/pwa/'
  },
  {
    id: 126,
    title: 'PWA Builder',
    description: 'Turn your web app into a Progressive Web App with ease.',
    category: 'Frontend',
    subcategory: 'PWA (Progressive Web Apps)',
    difficulty: 'Beginner',
    url: 'https://www.pwabuilder.com/'
  },
  {
    id: 127,
    title: 'Parcel Official Documentation',
    description: 'Learn how to use Parcel, a fast web application bundler.',
    category: 'Frontend',
    subcategory: 'Parcel',
    difficulty: 'Advanced',
    url: 'https://parceljs.org/docs/'
  },
  {
    id: 128,
    title: 'Parcel Crash Course',
    description: 'Learn Parcel by bundling a simple web project.',
    category: 'Frontend',
    subcategory: 'Parcel',
    difficulty: 'Beginner',
    url: 'https://www.youtube.com/watch?v=OK_ntuXHsmM'
  },
  {
    id: 129,
    title: 'Qwik Documentation',
    description: 'Official guide to building ultra-fast web applications using Qwik.',
    category: 'Frontend',
    subcategory: 'Qwik',
    difficulty: 'Advanced',
    url: 'https://qwik.builder.io/docs/getting-started/'
  },
  {
    id: 130,
    title: 'Qwik Crash Course',
    description: 'Learn the basics of Qwik with this beginner-friendly tutorial.',
    category: 'Frontend',
    subcategory: 'Qwik',
    difficulty: 'Beginner',
    url: 'https://www.youtube.com/watch?v=JmeY4dCIP7c'
  },
  {
    id: 131,
    title: 'SolidJS Official Documentation',
    description: 'Comprehensive guide to building reactive user interfaces with SolidJS.',
    category: 'Frontend',
    subcategory: 'SolidJS',
    difficulty: 'Advanced',
    url: 'https://solidjs.com/docs/'
  },
  {
    id: 132,
    title: 'SolidJS Crash Course',
    description: 'Learn SolidJS and its core concepts with a practical example.',
    category: 'Frontend',
    subcategory: 'SolidJS',
    difficulty: 'Beginner',
    url: 'https://www.youtube.com/watch?v=LyLa7dU5tp8'
  },
  {
    id: 133,
    title: 'Handlebars.js Documentation',
    description: 'Learn Handlebars.js, a templating engine for creating reusable HTML templates.',
    category: 'Frontend',
    subcategory: 'Handlebars.js',
    difficulty: 'Advanced',
    url: 'https://handlebarsjs.com/guide/'
  },
  {
    id: 134,
    title: 'Handlebars.js Crash Course',
    description: 'A beginner-friendly guide to Handlebars.js templating.',
    category: 'Frontend',
    subcategory: 'Handlebars.js',
    difficulty: 'Beginner',
    url: 'https://www.youtube.com/watch?v=wSNa5b1mS5Y'
  },
  {
    id: 135,
    title: 'Mustache.js Official Guide',
    description: 'Learn Mustache.js for simple and logic-less templating in JavaScript.',
    category: 'Frontend',
    subcategory: 'Mustache.js',
    difficulty: 'Advanced',
    url: 'https://mustache.github.io/mustache.5.html'
  },
  {
    id: 136,
    title: 'Mustache.js Quick Start Guide',
    description: 'Understand Mustache.js basics with practical examples.',
    category: 'Frontend',
    subcategory: 'Mustache.js',
    difficulty: 'Beginner',
    url: 'https://www.digitalocean.com/community/tutorials/mustache-templating'
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