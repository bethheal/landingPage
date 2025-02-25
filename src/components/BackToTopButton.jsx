import React, { useEffect, useState } from "react";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    console.log("Scrolling to top...");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      id="buttonToTop"
      className={`fixed bottom-5 right-5 z-50 cursor-pointer rounded-full bg-red-600 p-3 text-xs font-medium uppercase 
      text-white shadow-md transition duration-150 ease-in-out 
      hover:bg-red-700 hover:shadow-2xl hover:shadow-amber-400 
      focus:bg-red-700 focus:shadow-2xl focus:shadow-amber-400 focus:outline-none 
      active:bg-red-800 active:shadow-lg 
      ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      onClick={scrollToTop}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="3"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
      </svg>
    </button>
  );
};

export default BackToTopButton;
