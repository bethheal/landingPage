import React from "react";
import { aboutUsImg, agriSupIcon, shoeIcon, soapIcon } from "../../assets";

const About = () => {
  const GifIcon = ({ src, alt, className }) => {
    return (
      <img
        src={src}
        alt={alt}
        className={`w-10 h-10 max-w-[24px] max-h-[24px] object-contain ${className}`}
      />
    );
  };
  
  
  return (
    <div id="about">
      <section className="mx-auto max-w-6xl   py-16 lg:py-24">
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
            <h2 className="text-4xl font-bold josefin-sans text-gray-800 mb-4">
              About Us
            </h2>
            <h1 className="text-lg lg:text-xl font-semibold poppins-regular text-yellow-400 pb-4">
              Turning Waste into Opportunity
            </h1>

            <p className="max-w-xl text-base poppins-regular text-left pb-6 text-gray-700 leading-8">
  Issah Abdulai, a physically challenged entrepreneur from Sankor, 
  Ahafo Region, is transforming waste into opportunity. He repurposes 
  waste materials to create handmade <strong>shoes, slippers, and sandals</strong>, 
  while also producing <strong>local bar soap from waste palm oil</strong>.
</p>

<p className="max-w-xl text-gray-700 leading-8 text-base poppins-regular text-left pb-6">
  His initiative also manufactures <strong>affordable herbicides</strong> for rural 
  farmers, boosting agriculture and employment opportunities for persons with 
  disabilities (PWDs). By promoting sustainable practices, Issah is recycling 
  <span className="italic"> <strong>hope, opportunities, and a better future.</strong></span>
</p>

<p className="max-w-xl text-gray-700 leading-8 text-base poppins-regular text-left pb-6">
  <strong className="text-yellow-400">Purpose Behind the Innovation</strong> Issah's vision extends beyond 
  sustainability—he aims to <strong>empower marginalized communities</strong> by creating 
  economic opportunities for PWDs, reducing environmental waste, and providing 
  affordable agricultural and hygiene solutions. His work is a testament to how 
  <span className="italic">innovation can drive social change and inclusive growth.</span>
</p>

          </div>
        </div>

       
      </section>

      <section className="section-two flex items-center poppins-regular justify-center py-10">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl">
    <div className="flex flex-col items-center text-center p-4 bg-white shadow-md rounded-lg">
      <GifIcon src={soapIcon} alt="Soap Icon" className="mb-2" />
      <p className="text-gray-700 text-sm">
        Producing affordable herbicides for rural farmers, improving crop yields and food security.
      </p>
    </div>
    <div className="flex flex-col items-center text-center p-4 bg-white shadow-md rounded-lg">
      <GifIcon src={agriSupIcon} alt="Agriculture Support Icon" className="mb-2" />
      <p className="text-gray-700 text-sm">
        Transforming waste palm oil into handmade soaps, providing affordable hygiene solutions.
      </p>
    </div>
    <div className="flex flex-col items-center text-center p-4 bg-white shadow-md rounded-lg">
      <GifIcon src={shoeIcon} alt="Shoe Recycled Icon" className="mb-2" />
      <p className="text-gray-700 text-sm">
        Eco-Friendly Footwear Production – Creating shoes, slippers, and sandals from recycled materials, reducing waste, and promoting environmental conservation.
      </p>
    </div>
  </div>
</section>

<section>
<p className="max-w-xl text-gray-700 leading-8 text-base poppins-regular text-left pb-6">
  <strong className="text-amber-400"> Our Mission</strong><br />
  To promote sustainable entrepreneurship by transforming waste into valuable products while empowering persons with disabilities and rural communities.
</p>

<p className="max-w-xl text-gray-700 leading-8 text-base poppins-regular text-left pb-6">
  <strong className="text-amber-400"> Our Vision</strong><br />
  A future where waste is no longer discarded but transformed into opportunity, where persons with disabilities are recognized as valuable innovators and job creators.
</p>

<p className="max-w-xl text-gray-700 leading-8 text-base poppins-regular text-left pb-6">
  <strong className="text-amber-400"> The Impact So Far</strong><br />
  Increased employment opportunities for PWDs in rural Ghana.<br />
  Reduced waste pollution through eco-friendly repurposing.<br />
  Supported farmers with affordable agricultural products.<br />
   Improved hygiene standards with low-cost soap production.
</p>

</section>

    </div>
  );
};

export default About;
