import React from 'react';
import { Sparkles } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Network background effect */}
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

      <div className="relative container mx-auto px-4 py-16">
        {/* Mission Section */}
        <div className="mb-16">
          <div className="flex items-center space-x-4 mb-8">
            <span className="text-gray-500 text-6xl font-serif">"</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white">Our Mission</h1>
          </div>
          
          <div className="text-gray-300 text-lg leading-relaxed mb-12 max-w-4xl transform transition-all duration-500 ease-in-out hover:scale-102">
            Our mission is to empower businesses with data-driven insights, leveraging our expertise in Data Analysis, 
            Machine Learning, and Predictive Modeling. We strive to transform complex data into actionable strategies, 
            fostering growth and innovation. We are committed to delivering excellence, ensuring the highest level of 
            accuracy, integrity, and confidentiality in our services.
          </div>
        </div>

        {/* Company Description */}
        <div className="bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700 transform transition-all duration-500 ease-in-out hover:border-orange-500/50">
          <div className="flex items-center space-x-4 mb-6">
            <Sparkles className="w-8 h-8 text-orange-500" />
            <h2 className="text-2xl font-bold text-white">Who We Are</h2>
          </div>
          
          <p className="text-gray-300 text-lg leading-relaxed">
            At Nebula Analytics, we're not just building another fintech company - 
            we're creating a bridge between traditional financial expertise and the 
            limitless possibilities of data science. Our work spans across sectors, 
            from healthcare to education, always grounded in solid financial principles 
            and powered by cutting-edge technology.
          </p>
        </div>

        {/* Core Values */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Innovation",
              description: "Pushing boundaries with cutting-edge data science solutions"
            },
            {
              title: "Excellence",
              description: "Delivering the highest quality insights and analysis"
            },
            {
              title: "Integrity",
              description: "Maintaining unwavering commitment to data security and ethics"
            }
          ].map((value) => (
            <div
              key={value.title}
              className="bg-gray-800/30 p-6 rounded-xl border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
              <p className="text-gray-400">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;