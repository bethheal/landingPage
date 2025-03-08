import React from "react";
import { emailIcon, callIcon, fbIcon, IGIcon, locationIcon, tiktokIcon } from "../../assets";

const Contacts = () => {
  return (
    <section id="contact">
      <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
          <div className="mt-8 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-6 mr-2 bg-white dark:bg-gray-800 sm:rounded-lg">
                <h1 className="josefin-sans text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight">
                  Get in touch
                </h1>
                <p className="poppins-sans text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                  Fill in the form to start a conversation
                </p>

                <div className="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                  <img src={locationIcon} alt="Location" className="w-8 h-8" />
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    Kwapong- Ahafo Region|| Daworo Ano
                  </div>
                </div>

                <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                  <img src={callIcon} alt="Phone" className="w-8 h-8" />
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    +233 248 082 240
                  </div>
                </div>

                <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                  <img src={emailIcon} alt="Email" className="w-8 h-8" />
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    abdulaiissah256@gmail.com
                  </div>
                </div>

                {/* Centered Social Media Icons */}
                <div className="flex justify-center space-x-6 mt-6">
                  <a href="https://web.facebook.com/profile.php?id=61573764350478" className="text-gray-500 dark:text-gray-400 hover:text-blue-500">
                    <img src={fbIcon} alt="Facebook" className="w-8 h-8" />
                  </a>
                  <a href="https://www.tiktok.com/@issahbuabilityven?lang=en" className="text-gray-500 dark:text-gray-400 hover:text-blue-400">
                    <img src={tiktokIcon} alt="Tiktok" className="w-8 h-8" />
                  </a>
                  <a href="https://www.instagram.com/issahbuability_ventures/" className="text-gray-500 dark:text-gray-400 hover:text-pink-500">
                    <img src={IGIcon} alt="Instagram" className="w-8 h-8" />
                  </a>
                </div>
              </div>

              <form className="poppins-regular p-6 flex flex-col justify-center">
                <div className="flex flex-col">
                  <label htmlFor="name" className="hidden">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                    className="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-white font-semibold focus:border-yellow-400 focus:outline-none"
                  />
                </div>

                <div className="flex flex-col mt-2">
                  <label htmlFor="email" className="hidden">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-white font-semibold focus:border-yellow-400 focus:outline-none"
                  />
                </div>

                <div className="flex flex-col mt-2">
                  <label htmlFor="tel" className="hidden">
                    Number
                  </label>
                  <input
                    type="tel"
                    name="tel"
                    id="tel"
                    placeholder="Telephone Number"
                    className="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-white font-semibold focus:border-yellow-400 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="md:w-32 poppins-regular bg-yellow-400 text-gray-900 font-bold py-3 px-6 rounded-lg mt-3 hover:bg-yellow-300 transition ease-in-out duration-300"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-white rounded-lg m-4 poppins-regular">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023 <a href="https://github.com/bethheal" className="hover:underline">LiT</a>. All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li><a href="#" className="hover:underline me-4 md:me-6">Home</a></li>
            <li><a href="#about" className="hover:underline me-4 md:me-6">About</a></li>
            <li><a href="#products" className="hover:underline me-4 md:me-6">Products</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
      </footer>
    </section>
  );
};

export default Contacts;
