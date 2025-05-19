import { motion } from 'framer-motion';

const Home = () => (
  <motion.section
    className="flex-grow px-4 pt-20 text-center text-white bg-center bg-no-repeat bg-cover"
    style={{ backgroundImage: `url('/portfolio/images/dev-avatar.jpg')` }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4 }}
  >
    <div className="w-full max-w-2xl px-4 py-8 ml-auto bg-black rounded-lg sm:px-8 sm:py-10 bg-opacity-60">
      <h1 className="text-2xl font-bold sm:text-3xl md:text-5xl">
        Hi, I am Taiga Mizuno.
      </h1>
      <div className="mt-8 space-y-6 text-xl font-semibold text-purple-200 sm:text-4xl">
              {[
                'UI/UX expert',
                'HTML',
                'JavaScript',
                'MongoDB',
                'GitHub',
                'React',
                'GraphQL',
                'WordPress',
                'MySQL',
              ].map((tech, index) => (
                <motion.p
                  key={tech}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.2, duration: 0.4 }}
                  //className="overflow-hidden"
                >
                  {tech}
                </motion.p>
              ))}
            </div>
    </div>
  </motion.section>
);

export default Home;
