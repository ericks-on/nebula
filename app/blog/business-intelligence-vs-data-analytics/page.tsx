import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, Calendar, Clock, Share2, ChevronRight } from 'lucide-react';
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';

const BlogPost = () => {
  const blogData = {
    title: "Business Intelligence vs Data Analytics: What's the Difference?",
    description: "Understand the distinctions between business intelligence and data analytics, and how they work together to drive data-driven decision-making in organizations.",
    publishDate: "February 18, 2025",
    readTime: "8 min read",
    author: "Data Strategy Expert",
    mainImage: "/blog/blog6.jpg"
  };

  return (
    <div className="w-full bg-gray-900 pt-24">
      <Head>
        <title>{blogData.title} | Nebula Analytics Blog</title>
        <meta name="description" content={blogData.description} />
        <meta name="keywords" content="business intelligence, data analytics, BI vs DA, data-driven decision making, business intelligence tools, data analytics tools, BI and DA differences, data strategy, business intelligence vs data science" />
        <meta property="og:title" content={blogData.title} />
        <meta property="og:description" content={blogData.description} />
        <meta property="og:image" content={blogData.mainImage} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-12">
        
        <Link href="/blog" className="text-orange-500 hover:text-orange-400 flex items-center gap-2 mb-12">
          <ChevronLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        <div className="mb-16 p-12 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-2xl border border-orange-500/20">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-orange-500/20 rounded-full mb-6">
              <p className="text-sm font-semibold text-orange-300">
                Data Strategy
              </p>
            </div>
            <h2 className="text-3xl font-bold text-white mb-6">Master Data-Driven Decision Making</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Learn how to leverage both Business Intelligence and Data Analytics to drive better business outcomes.
            </p>
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-600 transition-colors text-lg"
            >
              Explore Data Strategy
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        <article className="bg-gray-800/50 rounded-2xl border border-gray-700/50 overflow-hidden">
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
          
          <div className="px-8 lg:px-16 pb-16">
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

              <div className="space-y-16 text-gray-300">
                <section>
                  <h2 className="text-3xl font-bold text-white mb-8">Introduction</h2>
                  <p className="text-xl leading-relaxed mb-8">
                    Business Intelligence (BI) and Data Analytics (DA) are often used interchangeably, but they serve distinct purposes in the data ecosystem. While BI focuses on historical data to inform decision-making, DA dives deeper into data to uncover trends, patterns, and insights. This guide breaks down the differences, use cases, and how they work together to drive business success.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-white mb-8">What is Business Intelligence?</h2>
                  <div className="space-y-8">
                    <div className="p-8 bg-gray-800 rounded-xl border border-gray-700">
                      <h3 className="text-2xl font-bold text-white mb-6">Definition</h3>
                      <p className="text-lg leading-relaxed mb-6">
                        Business Intelligence (BI) refers to the tools, technologies, and practices used to collect, integrate, analyze, and present business data. Its primary goal is to support better decision-making by providing actionable insights based on historical and current data.
                      </p>
                      <h3 className="text-2xl font-bold text-white mb-6">Key Features</h3>
                      <ul className="space-y-4 text-lg">
                        <li className="flex items-start gap-4">
                          <span className="text-orange-500">•</span>
                          <strong>Focus:</strong> Descriptive analytics (what happened and why)
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="text-orange-500">•</span>
                          <strong>Output:</strong> Dashboards, reports, and KPIs
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="text-orange-500">•</span>
                          <strong>Tools:</strong> Tableau, Power BI, QlikView
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-white mb-8">What is Data Analytics?</h2>
                  <div className="space-y-8">
                    <div className="p-8 bg-gray-800 rounded-xl border border-gray-700">
                      <h3 className="text-2xl font-bold text-white mb-6">Definition</h3>
                      <p className="text-lg leading-relaxed mb-6">
                        Data Analytics (DA) involves examining raw data to uncover patterns, trends, and insights. It goes beyond BI by using advanced techniques like predictive and prescriptive analytics to answer questions about what might happen in the future and what actions to take.
                      </p>
                      <h3 className="text-2xl font-bold text-white mb-6">Key Features</h3>
                      <ul className="space-y-4 text-lg">
                        <li className="flex items-start gap-4">
                          <span className="text-orange-500">•</span>
                          <strong>Focus:</strong> Predictive and prescriptive analytics (what will happen and what should we do)
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="text-orange-500">•</span>
                          <strong>Output:</strong> Insights, forecasts, and recommendations
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="text-orange-500">•</span>
                          <strong>Tools:</strong> Python, R, SQL, Machine Learning libraries
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-white mb-8">Key Differences</h2>
                  <div className="p-8 bg-gray-800 rounded-xl border border-gray-700">
                    <h3 className="text-2xl font-bold text-white mb-6">1. Purpose</h3>
                    <ul className="space-y-4 text-lg">
                      <li className="flex items-start gap-4">
                        <span className="text-orange-500">•</span>
                        <strong>BI:</strong> Focuses on reporting and monitoring business performance.
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="text-orange-500">•</span>
                        <strong>DA:</strong> Focuses on exploring data to uncover insights and predict future trends.
                      </li>
                    </ul>
                    <h3 className="text-2xl font-bold text-white mb-6 mt-8">2. Time Orientation</h3>
                    <ul className="space-y-4 text-lg">
                      <li className="flex items-start gap-4">
                        <span className="text-orange-500">•</span>
                        <strong>BI:</strong> Primarily deals with historical and current data.
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="text-orange-500">•</span>
                        <strong>DA:</strong> Looks at historical, current, and future data.
                      </li>
                    </ul>
                    <h3 className="text-2xl font-bold text-white mb-6 mt-8">3. Tools and Techniques</h3>
                    <ul className="space-y-4 text-lg">
                      <li className="flex items-start gap-4">
                        <span className="text-orange-500">•</span>
                        <strong>BI:</strong> Uses visualization tools like Tableau and Power BI.
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="text-orange-500">•</span>
                        <strong>DA:</strong> Uses programming languages like Python and R, along with machine learning algorithms.
                      </li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-white mb-8">How BI and DA Work Together</h2>
                  <div className="p-8 bg-gray-800 rounded-xl border border-gray-700">
                    <h3 className="text-2xl font-bold text-white mb-6">Complementary Roles</h3>
                    <ul className="space-y-4 text-lg">
                      <li className="flex items-start gap-4">
                        <span className="text-orange-500">•</span>
                        <strong>BI Provides the Foundation:</strong> BI tools help organizations monitor performance and identify areas for improvement.
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="text-orange-500">•</span>
                        <strong>DA Drives Innovation:</strong> Data analytics builds on BI insights to uncover deeper trends and recommend actionable strategies.
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="text-orange-500">•</span>
                        <strong>Example:</strong> BI identifies a drop in sales, while DA analyzes customer behavior to predict future trends and recommend targeted marketing campaigns.
                      </li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-white mb-8">Conclusion</h2>
                  <p className="text-xl leading-relaxed">
                    Both Business Intelligence and Data Analytics are essential for data-driven decision-making. While BI helps organizations understand their current state, DA empowers them to predict future outcomes and take proactive actions. By leveraging both, businesses can achieve a competitive edge in today's data-driven world.
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