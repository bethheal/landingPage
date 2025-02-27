import React from "react";
import { motion } from "framer-motion";
import {
  productImage,
  productImage1,
  productImage2,
  productImage3,
} from "../../assets";
import Testimonials from "./testimonials";

const Products = ({ productsRef }) => {
  const products = [
    { id: 1, name: "Product 1", price: "GHS25", image: productImage },
    { id: 2, name: "Product 2", price: "GHS30", image: productImage1 },
    { id: 3, name: "Product 3", price: "GHS40", image: productImage2 },
    { id: 4, name: "Product 4", price: "GHS50", image: productImage3 },
  ];

  return (
    <section ref={productsRef} className="p-8">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">Products</h2>

      <h1 className="text-lg lg:text-xl font-semibold text-yellow-400 pb-4">
        Our Products{" "}
      </h1>

      <div className="grid grid-cols-1 sm:grid-flow-col sm:grid-rows-3 gap-4 h-auto sm:h-[80vh]">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`relative overflow-hidden group ${
              index === 0 || index === 1
                ? "sm:row-span-3 sm:col-span-1"
                : index === 2
                ? "sm:col-span-4 sm:row-span-1"
                : "sm:col-span-4 sm:row-span-2"
            }`}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition duration-300"
            />

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 p-4"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
            >
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-sm">{product.price}</p>
              <button
                className="bg-yellow-400 hover:before:bg-yellow-400 border-yellow-400 relative h-[50px] w-40 overflow-hidden
                  border px-3 text-white shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 
                  before:top-0 before:z-0 before:h-full before:w-0 before:bg-yellow-600 before:transition-all before:duration-500 
                  hover:text-white hover:shadow-yellow-400 hover:before:left-0 hover:before:w-full"
              >
                <span className="relative z-10">Products</span>
              </button>
            </motion.div>
          </div>
        ))}
      </div>
      <Testimonials />
    </section>
  );
};

export default Products;
