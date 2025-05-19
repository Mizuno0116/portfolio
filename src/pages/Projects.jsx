import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Projects = () => (
  <motion.section
    className="relative flex-grow px-4 pt-20 pb-16 text-center text-white bg-center bg-no-repeat bg-cover"
    style={{ backgroundImage: `url('/images/project.jpg')` }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4 }}
  >
    {/* Blurred overlay */}
    <div className="absolute inset-0 z-0 bg-black/50 backdrop-blur-sm" />

    {/* Content */}
    <div className="relative z-10 max-w-6xl mx-auto">
      <h2 className="mb-12 text-4xl font-bold">Featured Projects</h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: 'React + Tailwind Portfolio',
            desc: 'A modern developer portfolio built with React and Tailwind CSS.',
            image: '/images/project1.png',
            live: 'https://react-tailwindcss-portfolio.netlify.app',
          },
          {
            title: 'Spree Commerce Storefront',
            desc: 'Open-source headless e-commerce storefront built with Rails.',
            image: '/images/project2.png',
            live: 'https://demo.spreecommerce.org/',
          },
          {
            title: 'GitHub Finder – React App',
            desc: 'Search and view GitHub user profiles using the GitHub API.',
            image: '/images/project3.png', // Make sure this image exists
            live: 'https://github-find-user.vercel.app/',
          },
        ].map((project, index) => (
          <div
            key={index}
            className="flex flex-col overflow-hidden transition duration-300 shadow-lg bg-gray-900/80 rounded-xl hover:shadow-2xl"
          >
            <img
              src={project.image}
              alt={project.title}
              className="object-cover w-full h-48"
            />
            <div className="flex flex-col justify-between flex-grow p-5 text-left">
              <div>
                <h3 className="mb-2 text-2xl font-semibold">{project.title}</h3>
                <p className="mb-4 text-sm text-purple-200">{project.desc}</p>
              </div>
              <div className="flex justify-center mt-auto">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded hover:bg-purple-700"
                >
                  <ExternalLink size={16} className="mr-2" />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </motion.section>
);

export default Projects;
