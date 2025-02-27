import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react"; // Icons for mobile menu
import k from "../constants";

const Navbar = ({ productsRef }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToProduct = () => {
    if (productsRef.current) {
      productsRef.current.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Close menu on mobile after clicking
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 md:px-16 py-4 z-50 transition-all duration-300 
      ${isScrolled ? "shadow-lg bg-white" : "shadow-none bg-transparent"}`}
    >
      {/* Logo */}
      <span className="text-lg font-bold text-gray-900">ISSABUL ABILITY VENTURES</span>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex gap-x-10 items-center">
        {k.NAVLINKS.map((link) => (
          <div key={link.id} className="flex items-center">
            {link.id === "Products" ? (
              <button
                className="relative h-[40px] px-4 border border-yellow-400 bg-white text-black shadow-2xl transition-all 
                before:absolute before:left-0 before:right-0 before:top-0 before:h-0 before:w-full before:bg-yellow-400 before:duration-500 
                after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:bg-yellow-400 after:duration-500 
                hover:text-white hover:shadow-yellow-400 hover:before:h-2/4 hover:after:h-2/4 flex items-center justify-center"
                onClick={handleScrollToProduct}
              >
                <span className="relative z-10">Products</span>
              </button>
            ) : (
              <Link
                to={link.path}
                smooth={true}
                duration={700}
                offset={-80}
                spy={true}
                activeClass="text-yellow-400 font-bold"
                className="cursor-pointer transition-colors duration-300 flex items-center text-gray-700 hover:text-yellow-400"
              >
                {link.name}
              </Link>
            )}
          </div>
        ))}
      </div>
      
      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
      </button>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center py-4 md:hidden">
          {k.NAVLINKS.map((link) => (
            <div key={link.id} className="w-full text-center py-3">
              {link.id === "Products" ? (
                <button
                  className="text-lg font-medium text-gray-700 hover:text-yellow-400"
                  onClick={handleScrollToProduct}
                >
                  Products
                </button>
              ) : (
                <Link
                  to={link.path}
                  smooth={true}
                  duration={700}
                  offset={-80}
                  spy={true}
                  onClick={() => setIsMenuOpen(false)} // Close menu after clicking
                  className="text-lg font-medium text-gray-700 hover:text-yellow-400"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
