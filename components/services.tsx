import React from 'react';
import { 
  Code, 
  Brain, 
  TrendingUp, 
  BarChart3,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';

const DataScienceContainer = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Data Analysis",
      description: "Transform raw data into meaningful insights through statistical analysis, data visualization, and advanced analytics techniques."
    },
    {
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      title: "Machine Learning",
      description: "Implement cutting-edge ML algorithms to automate processes, detect patterns, and make data-driven predictions."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: "Predictive Modeling",
      description: "Build sophisticated models to forecast trends, identify opportunities, and mitigate risks in your business operations."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
      title: "Business Intelligence",
      description: "Transform complex data into actionable insights through interactive dashboards and real-time reporting solutions."
    }
  ];

  return (
<div className="w-full dark:bg-gray-800" id='services'>
  {/* Enhanced Header Section */}
  <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white">
    <div className="max-w-6xl mx-auto px-8 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-block px-4 py-2 bg-blue-700/30 rounded-full mb-6">
            <p className="text-sm font-semibold text-blue-200">
              Leading Data Science Solutions
            </p>
          </div>
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Transforming Data into 
            <span className="text-blue-300"> Strategic Advantage</span>
          </h1>
          <p className="text-lg text-blue-100 mb-8 leading-relaxed">
            Our expert team of analysts and data scientists pioneers innovative solutions 
            in data science and business intelligence. We deliver actionable insights 
            that drive informed decision-making and create lasting competitive advantages.
          </p>
          <div className="flex gap-4">
            <Link href="#contact" className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2">
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
                  i % 2 === 0 ? 'from-blue-500/20 to-blue-400/20' : 'from-blue-400/10 to-blue-300/10'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Services Grid */}
  <div className="max-w-6xl mx-auto py-16">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {services.map((service, index) => (
        <div 
          key={index}
          className="bg-white dark:bg-gray-600 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div className="mb-4">
            {service.icon}
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            {service.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            {service.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</div>
  );
};

export default DataScienceContainer;