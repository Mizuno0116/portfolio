import { motion } from 'framer-motion';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:you@example.com`;
  };

  return (
    <motion.section
      className="relative flex-grow px-4 pt-24 pb-20 text-white bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url('/portfolio/images/contact.jpg')` }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 z-0 bg-black/60 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 max-w-xl mx-auto text-center">
        <h2 className="mb-6 text-4xl font-bold">Contact Me</h2>
        <p className="mb-6 text-lg text-purple-200">
          Let's work together. Reach out through any of the contacts below.
        </p>

        {/* Real Contact Info */}
        <div className="mb-10 space-y-2 text-lg text-purple-300">
          <p><strong>Email:</strong> taigamizuno0116@gmail.com</p>
          <p><strong>MicrosoftTeams:</strong> Taiga Mizuno</p>
        </div>

        {/* Button */}
        <form onSubmit={handleSubmit}>
          <button
            type="submit"
            className="w-full px-6 py-3 text-lg font-semibold transition-all duration-300 ease-in-out shadow-lg bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 rounded-xl hover:scale-105 hover:shadow-2xl hover:from-purple-600 hover:to-indigo-600"
          >
            ✉️ Send Message
          </button>
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;
