import React from "react";
import { motion } from "framer-motion";
import { agriSupIcon, innovatorImage2, shoeIcon, soapIcon } from "../../assets";

// GifIcon Component
const GifIcon = ({ src, alt, className }) => (
  <img
    src={src}
    alt={alt}
    className={`w-34 h-34 max-w-[34px] max-h-[34px] object-contain ${className}`}
  />
);

const About = ({ aboutRef }) => {
  // Data for impact section
  const impactData = [
    {
      icon: soapIcon,
      text: "Producing affordable herbicides for rural farmers, improving crop yields and food security.",
    },
    {
      icon: agriSupIcon,
      text: "Transforming waste palm oil into handmade soaps, providing affordable hygiene solutions.",
    },
    {
      icon: shoeIcon,
      text: "Eco-Friendly Footwear Production. Creating shoes, slippers, and sandals from recycled materials, reducing waste, and promoting environmental conservation.",
    },
  ];

  // Animation Variants
  const sectionVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const fadeInVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <motion.section
  id="about"
  ref={aboutRef}
  variants={sectionVariant}
  initial="hidden"
  animate="visible"
  viewport={{ once: true, amount: 0.2 }}
  className="mx-auto max-w-6xl py-16 lg:py-24 px-6 lg:px-0 text-center"
>
  <div className="flex flex-col-reverse lg:flex-row-reverse items-center justify-between gap-8 lg:gap-14">
    {/* Image Section */}
    <motion.div
      className="w-full lg:w-1/2 flex justify-center"
      variants={fadeInVariant}
      custom={0}
    >
      <img
        src={innovatorImage2}
        alt="About Us"
        className="w-full max-w-xs sm:max-w-md lg:max-w-lg object-cover rounded-lg shadow-lg"
      />
    </motion.div>

    {/* Text Section */}
    <motion.div
      className="w-full lg:w-1/2 text-center lg:text-left"
      variants={fadeInVariant}
      custom={1}
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Innovator</h2>
      <h1 className="text-lg lg:text-xl font-semibold text-yellow-400 pb-4">
        Turning Waste into Opportunity
      </h1>

      <p className="max-w-xl mx-auto lg:mx-0 text-base text-gray-700 leading-8 pb-6">
        Issah Abdulai, a physically challenged entrepreneur from Sankor, Ahafo Region, is transforming waste into opportunity. He repurposes waste materials to create handmade 
        <strong> shoes, and bags</strong>, while also producing 
        <strong> local shower Gels and liquid soap </strong>.
      </p>

      <p className="max-w-xl mx-auto lg:mx-0 text-gray-700 leading-8 text-base pb-6">
        His initiative also manufactures <strong>affordable herbicides</strong> for rural farmers, boosting agriculture and employment opportunities for persons with disabilities (PWDs). By promoting sustainable practices, Issah is recycling 
        <span className="italic"> <strong>hope, opportunities, and a better future.</strong></span>
      </p>

      <p className="max-w-xl mx-auto lg:mx-0 text-gray-700 leading-8 text-base pb-6">
        <strong className="text-yellow-400">Purpose Behind the Innovation:</strong> Issah's vision extends beyond sustainability—he aims to 
        <strong> empower marginalized communities</strong> by creating economic opportunities for PWDs, reducing environmental waste, and providing affordable agricultural and hygiene solutions. His work is a testament to how 
        <span className="italic"> innovation can drive social change and inclusive growth.</span>
      </p>

      {/* Impact Section - Animated */}
      <motion.div className="grid grid-cols-1 gap-6 mt-6">
        {impactData.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center p-5 shadow-md rounded-lg bg-white hover:scale-105 hover:shadow-lg hover:bg-yellow-50"
            variants={fadeInVariant}
            custom={index}
          >
            <GifIcon src={item.icon} alt={`Impact ${index + 1}`} className="w-14 h-14 mb-4" />
            <p className="text-gray-700 text-base">{item.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  </div>
</motion.section>

  );
};

export default About;
