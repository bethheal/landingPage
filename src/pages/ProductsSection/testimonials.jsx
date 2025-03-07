import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

const testimonials = [
  {
    name: "Aisha Mohammed",
    review: "The liquid soap is amazing! It cleans so well and has a refreshing scent that lasts all day.",
    rating: 5,
  },
  {
    name: "Kwame Boateng",
    review: "I love the shower gel! It lathers perfectly, and my skin feels soft and smooth after every use.",
    rating: 4,
  },
  {
    name: "Fatima Ibrahim",
    review: "Best soap I’ve used in a long time. It’s gentle on the skin yet very effective. Highly recommend!",
    rating: 5,
  },
  // {
  //   name: "Daniel Mensah",
  //   review: "The fragrance of the shower gel is so refreshing! It makes every bath feel like a spa session.",
  //   rating: 5,
  // },
];

const StarRating = ({ rating }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, index) => (
      <svg
        key={index}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className={`w-5 h-5 ${index < rating ? "text-yellow-500" : "text-gray-300"}`}
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
    ))}
  </div>
);

const TestimonialCard = ({ name, review, rating }) => (
  <div className="w-full max-w-xs bg-white shadow-lg rounded-lg p-6">
    <StarRating rating={rating} />
    <p className="text-gray-700 text-sm mt-2">{review}</p>
    <div className="mt-3 text-gray-900 font-semibold">— {name}</div>
  </div>
);

const Testimonials = () => {
  return (
    <section  className="py-10 bg-gray-50">
      <h1 className="text-lg text-center poppins-regular text-yellow-500 mb-8">
        What Customers Say 
      </h1>

      {/* Swiper for mobile screens */}
      <div className="md:hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          centeredSlides={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <TestimonialCard {...testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Grid layout for larger screens */}
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center px-6">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
