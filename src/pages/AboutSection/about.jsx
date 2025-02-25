import React from "react";
import { aboutUsImg, agriSupIcon, shoeIcon, soapIcon } from "../../assets";

// GifIcon Component for Reusability
const GifIcon = ({ src, alt, className }) => (
  <img
    src={src}
    alt={alt}
    className={`w-34 h-34 max-w-[34px] max-h-[34px] object-contain ${className}`}
  />
);

const About = () => {
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

  // Data for Mission, Vision, and Impact
  // const infoSections = [
  //   {
  //     title: "Our Mission",
  //     content:
  //       "To promote sustainable entrepreneurship by transforming waste into valuable products while empowering persons with disabilities and rural communities.",
  //   },
  //   {
  //     title: "Our Vision",
  //     content:
  //       "A future where waste is no longer discarded but transformed into opportunity, where persons with disabilities are recognized as valuable innovators and job creators.",
  //   },
  //   {
  //     title: "The Impact So Far",
  //     content: `
  //       - Increased employment opportunities for PWDs in rural Ghana.  
  //       - Reduced waste pollution through eco-friendly repurposing.  
  //       - Supported farmers with affordable agricultural products.  
  //       - Improved hygiene standards with low-cost soap production.`,
  //   },
  // ];

  return (
    <div id="about">
    {/* About Us Section */}
    <section className="mx-auto max-w-6xl py-16 lg:py-24">
      <div className="flex flex-col-reverse lg:flex-row-reverse items-center justify-between gap-8 lg:gap-14">
        
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            src={aboutUsImg}
            alt="About Us"
            className="w-full max-w-md lg:max-w-lg object-cover rounded-lg shadow-lg"
          />
        </div>
  
        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
          <h1 className="text-lg lg:text-xl font-semibold text-yellow-400 pb-4">
            Turning Waste into Opportunity
          </h1>
  
          <p className="max-w-xl text-base text-left pb-6 text-gray-700 leading-8">
            Issah Abdulai, a physically challenged entrepreneur from Sankor, Ahafo Region, is transforming waste into opportunity. He repurposes waste materials to create handmade 
            <strong> shoes, slippers, and sandals</strong>, while also producing 
            <strong> local bar soap from waste palm oil</strong>.
          </p>
  
          <p className="max-w-xl text-gray-700 leading-8 text-base text-left pb-6">
            His initiative also manufactures <strong>affordable herbicides</strong> for rural farmers, boosting agriculture and employment opportunities for persons with disabilities (PWDs). By promoting sustainable practices, Issah is recycling 
            <span className="italic"> <strong>hope, opportunities, and a better future.</strong></span>
          </p>
  
          <p className="max-w-xl text-gray-700 leading-8 text-base text-left pb-6">
            <strong className="text-yellow-400">Purpose Behind the Innovation:</strong> Issah's vision extends beyond sustainability—he aims to 
            <strong> empower marginalized communities</strong> by creating economic opportunities for PWDs, reducing environmental waste, and providing affordable agricultural and hygiene solutions. His work is a testament to how 
            <span className="italic"> innovation can drive social change and inclusive growth.</span>
          </p>
  
          {/* Impact Section - Moved Inside the About Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {/* Top two items */}
            {impactData.slice(0, 2).map((item, index) => (
              <div 
                key={index} 
                className="flex items-center p-4 shadow-yellow-400 shadow-2xl rounded-lg bg-white transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-yellow-50"
              >
                <GifIcon 
                  src={item.icon} 
                  alt={`Impact ${index + 1}`} 
                  className="w-12 h-12 mr-4 transition-all hover:text-yellow-500"
                />
                <p className="text-gray-700 text-base transition-all hover:text-yellow-600">{item.text}</p>
              </div>
            ))}
  
            {/* Last item centered below */}
            <div 
              className="flex items-center p-4 shadow-yellow-400 shadow-2xl rounded-lg bg-white sm:col-span-2 justify-center transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-yellow-50"
            >
              <GifIcon 
                src={impactData[2].icon} 
                alt="Impact 3" 
                className="w-12 h-12 mr-4 transition-all hover:text-yellow-500"
              />
              <p className="text-gray-700 text-base transition-all hover:text-yellow-600">{impactData[2].text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  
  

      
  );
};

export default About;
