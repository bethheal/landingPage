import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import RootLayout from './layouts/rootLayout'
import About from './pages/AboutSection/about'
import Contact from './pages/ContactSection/contact'
import Home from './pages/HomeSection/home'
import Services from './pages/ServicesSection/services'
import Products from './pages/ProductsSection/products'
import React, {useEffect, useState } from 'react'
import Navbar from './components/navbar'
import BackToTopButton from "./components/BackToTopButton"; 




  function App() {
    const [activeSection, setActiveSection] = useState('home');
  
    const sections = ['home', 'about', 'services', 'contacts'];
  
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
  
      sections.forEach((section) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          const sectionTop = sectionElement.offsetTop;
          const sectionHeight = sectionElement.offsetHeight;
  
          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(section);
          }
        }
      });
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const router = createBrowserRouter([
      {
        path: '/',
        element: (
          <div
            style={{
              backgroundColor: 'white',
            
              minHeight: '10vh',
              color: '#111827',
            }}
          >
            < Navbar activeSection={activeSection} />
            <div id="home" className="section ">
              <Home />
            </div>
            <div id="about" className="section ">
              <About />
            </div>
            <div id="services" className="section ">
              <Services />
            </div>
            <div id="contacts" className="section ">
              <Products />
            </div>
            <div id="contacts" className="section ">
              <Contact />
            </div>
            <BackToTopButton />

          </div>
        ),
      },
    ]);
   return <RouterProvider router={router} />;

}

export default App;
