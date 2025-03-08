import React from "react";
import { motion } from "framer-motion";
import { communityIcon, innovatorImage, trainingIcon, soapIcon } from "../../assets";

// GifIcon Component
const GifIcon = ({ src, alt, className }) => (
  <img
    src={src}
    alt={alt}
    loading="lazy"
    className={`w-34 h-34 max-w-[34px] max-h-[34px] object-contain ${className}`}
  />
);

const About = ({ aboutRef }) => {
  // Data for impact section
  const impactData = [
    {
      icon: soapIcon,
      text: "Producing affordable shower gel, bar soap, and floor cleaner to promote hygiene and well-being.",
    },
    {
      icon: trainingIcon, // Replace with a suitable icon
      text: "Empowering visually impaired individuals with skills to become self-reliant and independent.",
    },
    {
      icon: communityIcon, // Replace with a suitable icon
      text: "Creating economic opportunities for persons with disabilities through entrepreneurship and innovation.",
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
      className="mx-auto max-w-6xl lg:py-24 px-6 lg:px-0 text-center"
    >
      <div className="flex flex-col-reverse lg:flex-row-reverse justify-between gap-8 lg:gap-14">
        {/* Image Section */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center lg:items-start "
          variants={fadeInVariant}
          custom={0}
        >
          <img
            src={innovatorImage}
            alt="about Innovator"
            loading="lazy"
            className="w-20 h-20 lg:w-28 lg:h-28 object-cover rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="w-full lg:w-1/2 text-center lg:text-left"
          variants={fadeInVariant}
          custom={1}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Meet Innovator
          </h2>
          <h1 className="text-lg lg:text-xl font-semibold text-yellow-400 pb-4">
            Turning Waste into Opportunity
          </h1>

          <p className="max-w-xl mx-auto lg:mx-0 text-base text-gray-700 leading-8 pb-6">
            Issah Abdulai, a visually impaired entrepreneur from Kwapong, Ahafo
            Region, turned adversity into innovation. He refused to become a
            burden on his family and learned to produce
            <strong> shower gel, bar soap</strong> and
            <strong> floor cleaner </strong>.
          </p>

          <p className="max-w-xl mx-auto lg:mx-0 text-gray-700 leading-8 text-base pb-6">
            His initiative not only provides essential hygiene solutions but
            also inspires and empowers other visually impaired individuals to
            become self-reliant.
            <span className="italic">
              {" "}
              <strong>
                {" "}
                Through his work, Issah is proving that disability is not an
                inability it is an opportunity to create change.
              </strong>
            </span>
          </p>

          <p className="max-w-xl mx-auto lg:mx-0 text-gray-700 leading-8 text-base pb-6">
            <strong className="text-yellow-400">
              Purpose Behind the Innovation:
            </strong>{" "}
            Issah's vision extends beyond sustainability he aims to
            <strong> empower marginalized communities</strong> by creating
            economic opportunities for PWDs and ensuring access to affordable hygiene products.
            His work is a testament to how
            <span className="italic">
              {" "}
              innovation can drive social change and inclusive growth.
            </span>
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
                <GifIcon
                  src={item.icon}
                  alt={`Impact ${index + 1}`}
                  className="w-14 h-14 mb-4"
                />
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
