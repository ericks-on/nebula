import React from 'react';
import { Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: "Paul N & Co.",
    avatar: "/images/paul.jpg",
    quote: "Excellent Data Science company. Nebula Analytics provides top-notch data analysis and machine learning services",
  },
  {
    id: 2,
    name: "CIC Group",
    avatar: "/images/hajj.png",
    quote: "Exceptional Services from Nebula Analytics. Adept at turning complex data into clear insights",
  },
  {
    id: 3,
    name: "Freddie V.",
    avatar: "/images/freddie.jpg",
    quote: "Cutting-edge data solutions and personable services. Nebula Analytics is a game changer in the industry.",
  },
];

const TestimonialSection = () => {
  return (
    <div className="w-full bg-gray-50 dark:bg-gray-900 py-16" id="testimonials">
      <div className="max-w-6xl mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Hear from our satisfied clients who have experienced the transformative power of our data science solutions.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />

              {/* Testimonial Text */}
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                {testimonial.quote}
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {testimonial.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;