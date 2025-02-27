import React from "react";
import { productImage, productImage1, productImage2, productImage3 } from "../../assets";
import PaystackPayment from "../../components/PaystackPayment";
import Testimonials from "./testimonials";

const Products = ({ productsRef }) => {
  const products = [
    { id: 1, name: "Nhyira Nka Boafo) Shower Gel", price: 20, image: productImage },
    { id: 2, name: "Nhyira Nka Boafo) Bar Soap", price: 10, image: productImage1 },
    { id: 3, name: "Nhyira Nka Boafo) Floor Cleaner", price: 20, image: productImage2 },
    { id: 4, name: " Shower Gel bulk", price: 50, image: productImage3 },
  ];

  return (
    <section ref={productsRef} className="container mx-auto p-8">
    <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">
      Products
    </h2>
    <h1 className="text-lg lg:text-xl font-semibold text-yellow-400 pb-4 text-center">
      Our Products
    </h1>
  
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white shadow-lg rounded overflow-hidden"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-sm text-gray-600">GHS {product.price}</p>
            <div className="mt-4">
              <PaystackPayment email="buyer@example.com" amount={product.price} />
            </div>
          </div>
        </div>
      ))}
    </div>
    <Testimonials/>
  </section>
   
  );
};

export default Products;
