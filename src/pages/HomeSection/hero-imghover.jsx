import { useRef, useEffect } from "react";
import React from "react";
import { innovatorImage } from "../../assets";

const HoverImage = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;
    if (!imageElement) return;

    const handleMouseMove = (e) => {
      let rect = imageElement.getBoundingClientRect();
      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;

      let dx = (x - rect.width / 2) / (rect.width / 2);
      let dy = (y - rect.height / 2) / (rect.height / 2);

      imageElement.style.transform = `perspective(500px) rotateY(${dx * 5}deg) rotateX(${-dy * 5}deg)`;
    };

    const handleMouseLeave = () => {
      imageElement.style.transform = "";
    };

    imageElement.addEventListener("mousemove", handleMouseMove);
    imageElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      imageElement.removeEventListener("mousemove", handleMouseMove);
      imageElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="flex justify-center items-center">
      <img
        
        className="w-64 h-64 rounded-full object-cover transition-transform duration-200"
        src={innovatorImage}
        alt="Innovator's image"
      />
    </div>
  );
};

export default HoverImage;
