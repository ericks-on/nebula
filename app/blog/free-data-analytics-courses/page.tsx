import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, Calendar, Clock, Share2, ChevronRight } from 'lucide-react';
import { freeCertifications } from '@/app/lib/data';
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';

const BlogPost = () => {
  const blogData = {
    title: "Free Data Analytics Courses to Boost Your Career",
    description: "Explore the best free data analytics courses from platforms like Coursera, edX, and Cisco. Learn SQL, Python, and data visualization without spending a dime. Perfect for beginners and professionals looking to upskill.",
    publishDate: "February 12, 2025",
    readTime: "7 min read",
    author: "Data Analytics Expert",
    mainImage: "/blog/blog2.jpg"
  };

  return (
    <div className="w-full bg-gray-900 pt-24">
      <Head>
        <title>{blogData.title} | Nebula Analytics Blog</title>
        <meta name="description" content={blogData.description} />
        <meta name="keywords" content="free data analytics courses, data analytics training, learn data analytics, free SQL courses, Python for data analytics, data visualization courses, Coursera free courses, edX data analytics, Google Data Analytics, data analytics for beginners" />
        <meta property="og:title" content={blogData.title} />
        <meta property="og:description" content={blogData.description} />
        <meta property="og:image" content={blogData.mainImage} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header />

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
              Ready to apply your data analytics skills? Join Nebula Analytics and work with cutting-edge AI technology and real-world data challenges.
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

              {/* Content Sections */}
              <div className="space-y-16 text-gray-300">
                {/* Introduction */}
                <section>
                  <h2 className="text-3xl font-bold text-white mb-8">Introduction</h2>
                  <p className="text-xl leading-relaxed mb-8">
                    Breaking into data analytics doesn&apos;t have to break the bank. With the growing demand for data professionals, many prestigious institutions and tech companies now offer high-quality, free courses to help you build essential skills. In this guide, we&apos;ll explore the best free resources to start your data analytics journey or advance your existing skills.
                  </p>
                </section>

                {/* Essential Skills */}
                <section>
                  <h2 className="text-3xl font-bold text-white mb-8">Essential Skills You&apos;ll Learn</h2>
                  <ul className="space-y-4 text-lg">
                    <li className="flex items-start gap-4">
                      <span className="text-orange-500">•</span>
                      SQL for data querying and manipulation
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="text-orange-500">•</span>
                      Python programming for data analysis
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="text-orange-500">•</span>
                      Data visualization techniques
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="text-orange-500">•</span>
                      Statistical analysis fundamentals
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="text-orange-500">•</span>
                      Business intelligence tools
                    </li>
                  </ul>
                </section>

                {/* Top Free Courses */}
                <section>
                  <h2 className="text-3xl font-bold text-white mb-8">Top Free Data Analytics Courses</h2>
                  
                  <div className="space-y-12">
                    {freeCertifications.map((certification, index) => (
                        <div key={index} className="p-8 bg-gray-800 rounded-xl border border-gray-700">
                        <h3 className="text-2xl font-bold text-white mb-6">{certification.title}</h3>
                        <div className="grid md:grid-cols-3 gap-6 mb-6">
                            <div>
                            <p className="text-sm text-gray-400 mb-1">Provider</p>
                            <p className="text-lg">{certification.provider}</p>
                            </div>
                            <div>
                            <p className="text-sm text-gray-400 mb-1">Link</p>
                            <a href={certification.link} className="text-lg text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                                Visit Course
                            </a>
                            </div>
                        </div>
                        <p className="text-lg leading-relaxed">
                            Learn from industry experts and gain hands-on experience with real-world projects through this certification program.
                        </p>
                        </div>
                    ))}

                  </div>
                </section>

                {/* Learning Paths */}
                <section>
                  <h2 className="text-3xl font-bold text-white mb-8">Recommended Learning Paths</h2>
                  <p className="text-xl leading-relaxed mb-8">
                    Choose your path based on your current skill level and career goals:
                  </p>
                  <div className="space-y-8">
                    <div className="p-6 bg-gray-800/50 rounded-xl">
                      <h3 className="text-2xl font-bold text-white mb-4">Beginners (0-3 months)</h3>
                      <p className="text-lg leading-relaxed">Start with SQL basics and Excel fundamentals. Focus on understanding data types, basic queries, and data cleaning techniques.</p>
                    </div>
                    <div className="p-6 bg-gray-800/50 rounded-xl">
                      <h3 className="text-2xl font-bold text-white mb-4">Intermediate (3-6 months)</h3>
                      <p className="text-lg leading-relaxed">Progress to Python programming, statistical analysis, and data visualization tools like Tableau.</p>
                    </div>
                    <div className="p-6 bg-gray-800/50 rounded-xl">
                      <h3 className="text-2xl font-bold text-white mb-4">Advanced (6+ months)</h3>
                      <p className="text-lg leading-relaxed">Focus on machine learning basics, advanced SQL, and big data technologies.</p>
                    </div>
                  </div>
                </section>

                {/* Success Tips */}
                <section>
                  <h2 className="text-3xl font-bold text-white mb-8">Tips for Success</h2>
                  <ul className="space-y-4 text-lg">
                    <li className="flex items-start gap-4">
                      <span className="text-orange-500">•</span>
                      Create a consistent study schedule
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="text-orange-500">•</span>
                      Build a portfolio as you learn
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="text-orange-500">•</span>
                      Join online communities for support
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="text-orange-500">•</span>
                      Practice with real-world datasets
                    </li>
                  </ul>
                </section>

                {/* Conclusion */}
                <section>
                  <h2 className="text-3xl font-bold text-white mb-8">Conclusion</h2>
                  <p className="text-xl leading-relaxed">
                    Free data analytics courses offer an excellent starting point for your career journey. Focus on building practical skills, creating projects for your portfolio, and networking with other learners. Remember, consistency and hands-on practice are key to success in data analytics.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;