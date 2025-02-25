import React from "react";
import { motion } from "framer-motion";
import { productImage } from "../../assets";

const products = [
  { id: 1, name: "Product 1", price: "$25", image: productImage },
  { id: 2, name: "Product 2", price: "$30", image: productImage },
  { id: 3, name: "Product 3", price: "$40", image: productImage },
  { id: 4, name: "Product 4", price: "$50", image: productImage },
];

const Products = () => {
  return (
    <section id="products" className="p-8">
     <div className="grid grid-flow-col grid-rows-3 gap-4 h-[80vh]">
  {products.map((product, index) => (
    <div
      key={product.id}
      className={`relative overflow-hidden group ${
        index === 0 || index === 1 ? "row-span-3 col-span-1" : 
        index === 2 ? "col-span-4 row-span-1" : 
        "col-span-4 row-span-2"
      }`}
    >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition duration-300"
            />

            {/* Overlay with details */}
            <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileHover={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, ease: "easeInOut" }}
  className="absolute inset-0 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 p-4"
  style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }} // Adjust opacity here
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
    </section>
  );
};

export default Products;
