import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, Calendar, Clock, Share2, ChevronRight } from 'lucide-react';
import { certifications } from '@/app/lib/data';

const BlogPost = () => {
  const blogData = {
    title: "Top 10 Data Analytics Certifications in 2025",
    description: "Discover the best data analytics certifications to boost your career, including Google Data Analytics, AWS Certified Data Analytics, and more. Learn about costs, duration, and career benefits.",
    publishDate: "February 12, 2025",
    readTime: "8 min read",
    author: "Data Analytics Expert",
    mainImage: "/blog/blog1.png"
  };

  return (
    <div className="w-full bg-gray-900">
      <Head>
        <title>{blogData.title} | Nebula Analytics Blog</title>
        <meta name="description" content={blogData.description} />
        <meta name="keywords" content="data analytics certifications, data analyst certification, Google Data Analytics, AWS Data Analytics, Microsoft Data Analyst, data analytics career, 2025 certifications, Nebula Analytics" />
        <meta property="og:title" content={blogData.title} />
        <meta property="og:description" content={blogData.description} />
        <meta property="og:image" content={blogData.mainImage} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Navigation */}
        <Link href="/blog" className="text-orange-500 hover:text-orange-400 flex items-center gap-2 mb-12">
          <ChevronLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        {/* Nebula Analytics Banner */}
        <div className="mb-16 p-12 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-2xl border border-orange-500/20">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-orange-500/20 rounded-full mb-6">
              <p className="text-sm font-semibold text-orange-300">
                Featured Company
              </p>
            </div>
            <h2 className="text-3xl font-bold text-white mb-6">Transform Your Data Analytics Journey with Nebula Analytics</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join a team of innovative data professionals at Nebula Analytics. We're revolutionizing data-driven decision making with cutting-edge AI technology and comprehensive analytics solutions.
            </p>
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-600 transition-colors text-lg"
            >
              Explore Nebula Analytics
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Article Container */}
        <article className="bg-gray-800/50 rounded-2xl border border-gray-700/50 overflow-hidden">
          {/* Article Hero */}
          <div className="relative h-[500px] mb-12">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90 z-10" />
            <Image
              src={blogData.mainImage}
              alt={blogData.title}
              width={1200}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Article Content */}
          <div className="px-8 lg:px-16 pb-16">
            {/* Article Header */}
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl font-bold text-white mb-8 leading-tight">
                {blogData.title}
              </h1>
              
              <div className="flex items-center gap-8 text-gray-300 mb-16 border-b border-gray-700/50 pb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  {blogData.publishDate}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  {blogData.readTime}
                </div>
                <button className="flex items-center gap-2 hover:text-orange-500 transition-colors">
                  <Share2 className="w-5 h-5" />
                  Share
                </button>
              </div>

              {/* Introduction */}
              <div className="space-y-16 text-gray-300">
                <section>
                  <h2 className="text-3xl font-bold text-white mb-8">Introduction</h2>
                  <p className="text-xl leading-relaxed mb-8">
                    In today's data-driven world, having the right certifications can significantly boost your career prospects in data analytics. This comprehensive guide explores the most valuable data analytics certifications in 2025, helping you make an informed decision about your professional development.
                  </p>
                </section>

                {/* Why Get Certified */}
                <section>
                  <h2 className="text-3xl font-bold text-white mb-8">Why Get Certified in Data Analytics?</h2>
                  <p className="text-xl leading-relaxed mb-8">
                    Before diving into specific certifications, it's important to understand their value in today's competitive job market.
                  </p>
                  <ul className="space-y-4 text-lg">
                    <li className="flex items-start gap-4">
                      <span className="text-orange-500">•</span>
                      Validate your skills to potential employers with industry-recognized credentials
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="text-orange-500">•</span>
                      Command higher salaries (20-30% increase on average)
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="text-orange-500">•</span>
                      Stay current with industry standards and best practices
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="text-orange-500">•</span>
                      Access better job opportunities and career advancement
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="text-orange-500">•</span>
                      Build a strong professional network within the data analytics community
                    </li>
                  </ul>
                </section>

                {/* Certifications */}
                <section>
                  <h2 className="text-3xl font-bold text-white mb-8">Top 10 Data Analytics Certifications</h2>
                  
                  <div className="space-y-12">
                  {certifications.map((cert, index) => (
                      <div key={index} className="p-8 bg-gray-800 rounded-xl border border-gray-700">
                        <h3 className="text-2xl font-bold text-white mb-6">{cert.title}</h3>
                        <div className="grid md:grid-cols-3 gap-6 mb-6">
                          <div>
                            <p className="text-sm text-gray-400 mb-1">Provider</p>
                            <p className="text-lg">{cert.provider}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-400 mb-1">Duration</p>
                            <p className="text-lg">{cert.duration}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-400 mb-1">Cost</p>
                            <p className="text-lg">{cert.cost}</p>
                          </div>
                        </div>
                        <p className="text-lg leading-relaxed">{cert.description}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* How to Choose */}
                <section>
                  <h2 className="text-3xl font-bold text-white mb-8">How to Choose the Right Certification</h2>
                  <p className="text-xl leading-relaxed mb-8">
                    Selecting the right certification requires careful consideration of several factors:
                  </p>
                  <ul className="space-y-4 text-lg">
                    <li className="flex items-start gap-4">
                      <span className="text-orange-500">•</span>
                      Align with your career goals and current skill level
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="text-orange-500">•</span>
                      Consider industry recognition and market demand
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="text-orange-500">•</span>
                      Evaluate cost and time commitment requirements
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="text-orange-500">•</span>
                      Check prerequisites and required experience
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="text-orange-500">•</span>
                      Review certification renewal requirements
                    </li>
                  </ul>
                </section>

                {/* Conclusion */}
                <section>
                  <h2 className="text-3xl font-bold text-white mb-8">Conclusion</h2>
                  <p className="text-xl leading-relaxed">
                    The right data analytics certification can significantly impact your career trajectory. Consider your current skills, career goals, and available resources when choosing a certification path. Remember that hands-on experience and practical application of skills are just as important as the certification itself.
                  </p>
                </section>

              </div>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
};

export default BlogPost;