import React from 'react';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const DataScienceContainer = () => {
  const services = [
    {
      imagePath: "/images/ds2.jpg",
      title: "Data Analysis",
      description: "Transform raw data into meaningful insights through statistical analysis, data visualization, and advanced analytics techniques."
    },
    {
      imagePath: "/images/ds3.jpg",
      title: "Machine Learning",
      description: "Implement cutting-edge ML algorithms to automate processes, detect patterns, and make data-driven predictions."
    },
    {
      imagePath: "/images/ds4.jpg",
      title: "Predictive Modeling",
      description: "Build sophisticated models to forecast trends, identify opportunities, and mitigate risks in your business operations."
    },
    {
      imagePath: "/images/bi.jpg",
      title: "Business Intelligence",
      description: "Transform complex data into actionable insights through interactive dashboards and real-time reporting solutions."
    }
  ];

  return (
    <div className="w-full bg-gray-900" id='services'>
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

      {/* Enhanced Header Section */}
      <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto py-16 px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-orange-500/20 rounded-full mb-6">
                <p className="text-sm font-semibold text-orange-300">
                  Advanced Analytics Solutions
                </p>
              </div>
              <h1 className="text-5xl font-bold mb-6 leading-tight text-white">
                Data Science
                <span className="text-orange-500"> Mastery</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Our expert team of analysts and data scientists pioneers innovative solutions 
                in data science and business intelligence. We deliver actionable insights 
                that drive informed decision-making and create lasting competitive advantages.
              </p>
              <div className="flex gap-4">
                <Link href="#contact" className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center gap-2">
                  Contact us
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              {/* Abstract geometric pattern */}
              <div className="grid grid-cols-3 gap-4 opacity-80">
                {[...Array(9)].map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-24 rounded-lg bg-gradient-to-br ${
                      i % 2 === 0 ? 'from-orange-500/20 to-orange-400/20' : 'from-orange-400/10 to-orange-300/10'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto py-16 px-4">
        <div className="flex flex-col md:flex-row gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl bg-gray-800/50 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90 z-10" />
                <Image 
                  src={service.imagePath}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                {/* Glowing Overlay */}
                <div className="absolute inset-0 bg-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
              </div>
              
              {/* Content */}
              <div className="relative p-6 z-30">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-orange-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300">
                  {service.description}
                </p>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-orange-500/0 group-hover:border-orange-500/50 rounded-xl transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataScienceContainer;