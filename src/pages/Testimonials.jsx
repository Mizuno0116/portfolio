import { motion } from 'framer-motion';

const Home = () => (
  <motion.section
    className="flex-grow px-4 pt-20 text-center text-white bg-center bg-no-repeat bg-cover"
    style={{ backgroundImage: `url('/images/background.jpg')` }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4 }}
  >
    <div className="w-full max-w-2xl px-4 py-8 mx-auto bg-black rounded-lg sm:px-8 sm:py-10 bg-opacity-60">
      <h1 className="text-2xl font-bold sm:text-3xl md:text-5xl">
        Welcome to my Portfolio Site
      </h1>
      <p className="mt-4 text-base sm:text-lg md:text-xl">
        Powered by React and Tailwind CSS.
      </p>
    </div>
  </motion.section>
);

export default Home;
