import React from "react";

const Contact = () => {
  return (
    <section id="contact">

    <h1 className="text-base py-8 pb-12 poppins-regular  text-yellow-400">
      Testimonials 
  </h1>
    <div className="card w-64 p-4 bg-white shadow-lg rounded-lg">
      <div className="stars flex gap-1">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="star w-5 h-5 text-yellow-500"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        ))}
      </div>

      <div className="infos mt-2">
        <p className="date-time text-gray-500 text-sm">2 days ago</p>
        <p className="description text-gray-700 text-sm mt-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint commodi repudiandae consequuntur.
        </p>
      </div>

      <div className="author mt-3 text-gray-900 font-semibold">— John Doe</div>
    </div>
    </section>
  );
};

const ContactList = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center p-4">
      {[...Array(4)].map((_, index) => (
        <Contact key={index} />
      ))}
    </div>
  );
};

export default ContactList;
