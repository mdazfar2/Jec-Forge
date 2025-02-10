import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({
  title = 'Jec-Forge - Real-World Project Collaboration',
  description = 'Jec-Forge is a student-driven community from Jaipur Engineering College, fostering real-world project development and collaboration among tech enthusiasts.',
  keywords = 'Jec-Forge, Azfar Alam, Nitish Kumar Jha,Jaipur Engineering College, kukas, Jec, JEC projects, real-world coding, open-source, real-world projects, Jaipur Engineering College, student community, software development, DevOps, frontend, backend, project collaboration, student community, software development, engineering collaboration, DevOps, full-stack projects, coding club, tech community, problem-solving, Manikant Singh, Ravishankar Kumar, Sachin Singh, Raviranjan Kumar, Anuj Kumar, Aditya Kumar, JEC, student projects, engineering collaboration, open-source community',
  author = 'Azfar Alam'
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta charSet="utf-8" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph for LinkedIn */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/assets/logo.png" />
      <meta property="og:url" content="https://jecforge.vercel.app/" />
      <meta property="og:site_name" content="Jec-Forge" />
      <meta property="og:url" content="https://www.linkedin.com/company/jec-forge" />

      {/* Schema.org Markup for SEO */}
      <script type="application/ld+json">
        {`
          {
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "Jec-Forge",
            "url": "https://jecforge.vercel.app/",
            "logo": "https://jecforge.vercel.app/assets/logo.png",
            "sameAs": [
              "https://www.linkedin.com/company/jec-forge"
            ]
          }
        `}
      </script>
    </Helmet>
  );
};

export default SEO;
