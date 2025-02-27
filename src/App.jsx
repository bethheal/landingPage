import React, { useEffect, useState, useRef } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import BackToTopButton from "./components/BackToTopButton";
import Home from "./pages/HomeSection/home";
import About from "./pages/AboutSection/about";
import Products from "./pages/ProductsSection/products";
import Contact from "./pages/ContactSection/contact";
import Loader from "./components/loader";

function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const productsRef = useRef(null);
  const aboutRef = useRef(null);
  const sections = ["home", "about", "products", "contacts"];

  useEffect(() => {
    // Simulate loading time (e.g., API fetch, assets load)
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust delay as needed

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    sections.forEach((section) => {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        const sectionTop = sectionElement.offsetTop;
        const sectionHeight = sectionElement.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section);
        }
      }
    });
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div style={{ backgroundColor: "white", minHeight: "100vh", color: "#111827" }}>
          <Navbar activeSection={activeSection} productsRef={productsRef} />
          <div id="home" className="section">
            <Home aboutRef={aboutRef} productsRef={productsRef} />
          </div>
          <div id="about" ref={aboutRef} className="section">
            <About />
          </div>
          <div id="products" ref={productsRef} className="section">
            <Products />
          </div>
          <div id="contacts" className="section">
            <Contact />
          </div>
          <BackToTopButton />
        </div>
      ),
    },
  ]);

  return <>{loading ? <Loader /> : <RouterProvider router={router} />}</>;
}

export default App;
