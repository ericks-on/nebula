import React from 'react';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';

const BlogPage = () => {
  const blogs = [
    {
      imagePath: "/blog/blog1.png",
      title: "Top 10 Data Analytics Certifications in 2025",
      description: "Discover the best data analytics certifications to boost your career, including Google Data Analytics, AWS Certified Data Analytics, and more.",
      slug: "top-10-data-analytics-certifications-2025",
    },
    {
      imagePath: "/blog/blog2.jpg",
      title: "Free Data Analytics Courses to Boost Your Career",
      description: "Explore free data analytics courses from platforms like Coursera, edX, and Cisco to learn data analytics without breaking the bank.",
      slug: "free-data-analytics-courses",
    },
    {
      imagePath: "/blog/blog3.jpg",
      title: "Data Analytics vs Data Science: Which Career is Right for You?",
      description: "Learn the key differences between data analytics and data science, and find out which career path aligns with your goals.",
      slug: "data-analytics-vs-data-science",
    },
    {
      imagePath: "/blog/blog4.jpg",
      title: "How to Get a Data Analytics Job with No Experience",
      description: "Practical tips and strategies to land your first data analytics job, even if you're starting from scratch.",
      slug: "data-analytics-job-no-experience",
    },
    {
      imagePath: "/blog/blog5.jpg",
      title: "Top Data Analytics Tools for Beginners in 2025",
      description: "A comprehensive guide to the best data analytics tools, including Tableau, Power BI, and Python libraries.",
      slug: "top-data-analytics-tools-2025",
    },
    {
      imagePath: "/blog/blog6.jpg",
      title: "Business Intelligence vs Data Analytics: What's the Difference?",
      description: "Understand the distinctions between business intelligence and data analytics, and how they work together.",
      slug: "business-intelligence-vs-data-analytics",
    },
  ];

  return (
    <div className="w-full bg-gray-900 pt-24" id='blogs'>
      <Header />
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

      {/* Blog Header Section */}
      <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto py-16 px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-orange-500/20 rounded-full mb-6">
                <p className="text-sm font-semibold text-orange-300">
                  Insights & Tutorials
                </p>
              </div>
              <h1 className="text-5xl font-bold mb-6 leading-tight text-white">
                Data Analytics
                <span className="text-orange-500"> Blog</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Explore the latest trends, tools, and techniques in data analytics and data science. 
                Our blog offers actionable insights, tutorials, and career advice to help you stay ahead.
              </p>
              <div className="flex gap-4">
                <Link href="#contact" className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center gap-2">
                  Subscribe
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

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl bg-gray-800/50 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90 z-10" />
                <Image 
                  src={blog.imagePath}
                  alt={blog.title}
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
                  {blog.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {blog.description}
                </p>
                <Link 
                  href={`/blog/${blog.slug}`} 
                  className="text-orange-500 hover:text-orange-400 flex items-center gap-2"
                >
                  Read More
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-orange-500/0 group-hover:border-orange-500/50 rounded-xl transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;