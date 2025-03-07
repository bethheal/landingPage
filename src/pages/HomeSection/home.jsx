import React from "react";
import { innovatorImage2 } from "../../assets";
import { motion } from "framer-motion";

const Home = ({ aboutRef, productsRef }) => {
  // Scroll to About section
  const handleScrollToAbout = () => {
    if (aboutRef?.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Scroll to Products section
  const handleScrollToProduct = () => {
    if (productsRef?.current) {
      productsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="home" className="relative w-full">
      <section className="relative hero-img w-full h-[60vh] md:h-[80vh] flex  md:flex-row items-center justify-between px-6 md:px-16 lg:px-42">
        {/* Left Content */}
        <div className="z-10 max-w-lg text-white flex-1 text-center md:text-left mt-8 md:mt-24">
          <motion.h2
            initial={{ opacity: 0, x: -50 }} // Slide in from left
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl pb-6 font-bold leading-tight"
          >
            <span className="block whitespace-nowrap">Empowering Lives</span>
            <span className="block whitespace-nowrap">Through Hygiene.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -50 }} // Slide in from left
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
            className="text-sm md:text-base pb-6 leading-relaxed"
          >
            <span className="block">Creating opportunities through innovation</span>
            <span className="block">
              Empowering lives with affordable hygiene and cleaning solutions.
            </span>
          </motion.p>

          {/* Scroll to Products Button */}
          <motion.button
            initial={{ opacity: 0, y: 30 }} // Slide in from bottom
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="bg-yellow-400 hover:bg-yellow-500 border-yellow-400 h-12 w-36 border px-4 text-white shadow-lg transition-all hover:shadow-yellow-400"
            onClick={handleScrollToProduct}
          >
            Products
          </motion.button>
        </div>

        {/* Image with Tilt Effect - Only visible on tablet and desktop */}
        <div className="hidden md:block mt-8 md:mt-0 w-32 h-32 sm:w-60 md:w-72 md:h-72 lg:w-80 lg:h-80 relative overflow-hidden rounded-full transform transition-all duration-500 ease-in-out hover:scale-110 hover:rotate-[10deg] hover:translate-x-2 hover:translate-y-2">
          <img
            src={innovatorImage2}
            loading="lazy"
            alt="Innovator's picture"
            className="w-full h-full object-cover rounded-full transition-all duration-500 ease-in-out"
          />
          {/* Overlay with details */}
          <motion.div
            initial={{ opacity: 0, y: 50 }} // Slide in from bottom
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 p-4"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
          >
            {/* Scroll to About Button */}
            <motion.button
              initial={{ opacity: 0, y: 30 }} // Slide in from bottom
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="bg-yellow-400 hover:bg-yellow-500 border-yellow-400 h-12 w-36 border px-4 text-white shadow-lg transition-all hover:shadow-yellow-400"
              onClick={handleScrollToAbout}
            >
              Meet Innovator
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
