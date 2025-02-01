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
    name: "ApexLine Credit Solutions",
    avatar: "/images/cred.jpg",
    quote: "Cutting-edge data solutions and personable services. Nebula Analytics is a game changer in the industry.",
  },
];

const TestimonialSection = () => {
  return (
    <div className="w-full bg-gray-900 py-16 relative overflow-hidden" id="testimonials">
      {/* Animated background particles */}
      <div className="absolute inset-0 opacity-10">
        <div className="relative w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-orange-500 rounded-full w-1 h-1 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Hear from our satisfied clients who have experienced the transformative power of our data science solutions.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
          {testimonials.map((testimonial ) => (
            <div
              key={testimonial.id}
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 flex-1 flex flex-col group hover:-translate-y-2"
            >
              {/* Glowing Quote Icon */}
              <div className="relative mb-6">
                <Quote className="w-8 h-8 text-orange-500 relative z-10" />
                <div className="absolute -inset-1 bg-orange-500/20 blur-sm rounded-full" />
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-300 mb-8 flex-grow text-lg leading-relaxed">
                &quot;{testimonial.quote}&quot;
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4 relative">
                <div className="relative">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={100}
                    height={100}
                    className="w-12 h-12 rounded-full object-cover border-2 border-gray-700 group-hover:border-orange-500 transition-colors"
                  />
                  <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-orange-500 transition-colors">
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