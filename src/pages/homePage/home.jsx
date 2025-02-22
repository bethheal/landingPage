import React from "react";
import { heroImage } from "../../assets";

const Home = () => {
  return (
    <div>
      <section id="hero-section" className="hero-img bg-amber-200">
        {/* <img src={heroImage} alt="collection of what Issah does" /> */}
        <div className="m-24 hero-caption">
          <h1 className="text-base py-8 pb-12 poppins-regular  text-yellow-400">
            From Waste to Wealth
          </h1>
          <h2 className="text-[4rem] pb-12 josefin-sans font-bold leading-none">
            {" "}
            Raising Awareness,
            <span className="block">Inspiring Change</span>
             
          </h2>
          <p className="text-base poppins-regular text-left pb-12">
            Ut enim ad minim veniam, quis nostrud exercitation 
            nisi ut aliquip ex ea{" "}
            <span className="block">
              commodo consequat is aute irure. Ut enim ad minim,
              nostrud exercitation
            </span>
            <span className="block">
              {" "}
              ullamco laboris nisi ut aliquip ex ea commodo consequat is aute
              irure.
            </span>
          </p>

          <button
            className=" bg-yellow-400 hover:before:bg-yellow-400 border-yellow-400 relative h-[50px] w-40 overflow-hidden
           border  px-3 text-white shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 
           before:top-0 before:z-0 before:h-full before:w-0 before:bg-yellow-600 before:transition-all before:duration-500 
           hover:text-white hover:shadow-yellow-400 hover:before:left-0 hover:before:w-full"
          >
            <span class="relative z-10">Products</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
