import React, { useState, useEffect } from "react";
import { Link } from "react-scroll"; 
import k from "../constants";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full flex justify-between px-24 py-6 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-lg bg-white py-4" : "shadow-none bg-transparent"
      }`}
    >
      <span className="text-xl font-bold text-gray-900">LOGO</span>

      <div className="flex gap-x-16 items-center">
        {k.NAVLINKS.map((link) => (
          <div key={link.id} className="flex items-center">
            {link.id === "Products" ? (
              <button
                className="relative h-[40px] px-4 overflow-hidden border border-yellow-400 bg-white text-black shadow-2xl transition-all 
                  before:absolute before:left-0 before:right-0 before:top-0 before:h-0 before:w-full before:bg-yellow-400 before:duration-500 
                  after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:bg-yellow-400 after:duration-500 
                  hover:text-white hover:shadow-yellow-400 hover:before:h-2/4 hover:after:h-2/4 flex items-center justify-center"
              >
                <span className="relative z-10">Products</span>
              </button>
            ) : (
              <Link
                to={link.path}
                smooth={true}
                duration={700}
                offset={-80}
                activeClass="text-yellow-400 font-semibold"
                className="cursor-pointer transition-colors duration-300 flex items-center text-gray-700 hover:text-yellow-400"
              >
                {link.name}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
