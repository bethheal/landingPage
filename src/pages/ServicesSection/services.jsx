import React from 'react';

const Services = () => {
  return (
    <section id="services">
      <div className="bg-img">
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
          <h1 className="text-3xl font-bold mb-4">Empowering the Less Privileged</h1>
          <p className="text-lg mb-6 max-w-lg text-center">
            We provide training programs to equip underprivileged individuals with essential skills.
          </p>
          <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition">
            Register Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
