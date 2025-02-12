import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, Calendar, Clock, Share2, ChevronRight } from 'lucide-react';

const BlogPost = () => {
  const blogData = {
    title: "How to Get a Data Analytics Job with No Experience",
    description: "Learn proven strategies to break into data analytics without prior experience. Discover essential skills, portfolio building tips, and job hunting tactics that will help you land your first data analytics role.",
    publishDate: "February 12, 2025",
    readTime: "9 min read",
    author: "Career Transition Expert",
    mainImage: "/blog/blog4.jpg"
  };

  return (
    <div className="w-full bg-gray-900">
      <Head>
        <title>{blogData.title} | Nebula Analytics Blog</title>
        <meta name="description" content={blogData.description} />
        <meta name="keywords" content="entry level data analytics jobs, data analyst no experience, how to become data analyst, data analytics portfolio, data analytics projects, data analyst career change, data analytics skills, data analytics certifications, entry level data jobs, data analytics resume" />
        <meta property="og:title" content={blogData.title} />
        <meta property="og:description" content={blogData.description} />
        <meta property="og:image" content={blogData.mainImage} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <Link href="/blog" className="text-orange-500 hover:text-orange-400 flex items-center gap-2 mb-12">
          <ChevronLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        <div className="mb-16 p-12 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-2xl border border-orange-500/20">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-orange-500/20 rounded-full mb-6">
              <p className="text-sm font-semibold text-orange-300">
                Career Guide
              </p>
            </div>
            <h2 className="text-3xl font-bold text-white mb-6">Launch Your Data Career at Nebula Analytics</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We offer entry-level opportunities and structured training programs to help you start your data analytics journey.
            </p>
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-600 transition-colors text-lg"
            >
              View Entry-Level Positions
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
                    Breaking into data analytics without experience might seem daunting, but it's more achievable than you think. Companies are increasingly valuing skills and potential over traditional experience. This guide will show you practical steps to build those skills, create a compelling portfolio, and position yourself for your first data analytics role.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-white mb-8">Essential Skills to Develop</h2>
                  <div className="space-y-8">
                    <div className="p-8 bg-gray-800 rounded-xl border border-gray-700">
                      <h3 className="text-2xl font-bold text-white mb-6">Technical Skills</h3>
                      <ul className="space-y-4 text-lg">
                        <li className="flex items-start gap-4">
                          <span className="text-orange-500">•</span>
                          <strong>SQL for data querying</strong> (Focus on SELECT, JOIN, GROUP BY)
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="text-orange-500">•</span>
                          <strong>Excel</strong> (Pivot tables, VLOOKUP, basic macros)
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="text-orange-500">•</span>
                          <strong>Basic Python or R programming</strong> for data manipulation and analysis
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="text-orange-500">•</span>
                          <strong>Data visualization tools</strong> like Tableau or Power BI
                        </li>
                      </ul>
                    </div>
                    <div className="p-8 bg-gray-800 rounded-xl border border-gray-700">
                      <h3 className="text-2xl font-bold text-white mb-6">Soft Skills</h3>
                      <ul className="space-y-4 text-lg">
                        <li className="flex items-start gap-4">
                          <span className="text-orange-500">•</span>
                          <strong>Problem-solving and analytical thinking</strong> to tackle complex data challenges
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="text-orange-500">•</span>
                          <strong>Clear communication</strong> of technical concepts to non-technical stakeholders
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="text-orange-500">•</span>
                          <strong>Attention to detail</strong> to ensure data accuracy and reliability
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="text-orange-500">•</span>
                          <strong>Business acumen</strong> to understand industry trends and make data-driven decisions
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-white mb-8">Building Your Portfolio</h2>
                  <div className="space-y-8">
                    <div className="p-6 bg-gray-800/50 rounded-xl">
                      <h3 className="text-2xl font-bold text-white mb-4">1. Practice Projects</h3>
                      <p className="text-lg leading-relaxed">Create 3-4 projects that showcase different skills:</p>
                      <ul className="space-y-4 text-lg mt-4">
                        <li className="flex items-start gap-4">
                          <span className="text-orange-500">•</span>
                          <strong>Data cleaning and transformation project</strong> to demonstrate your ability to handle messy data
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="text-orange-500">•</span>
                          <strong>Dashboard creation</strong> with real-world data to showcase your visualization skills
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="text-orange-500">•</span>
                          <strong>Basic predictive analysis project</strong> to highlight your analytical capabilities
                        </li>
                      </ul>
                    </div>
                    <div className="p-6 bg-gray-800/50 rounded-xl">
                      <h3 className="text-2xl font-bold text-white mb-4">2. Data Sources</h3>
                      <p className="text-lg leading-relaxed">Use public datasets from:</p>
                      <ul className="space-y-4 text-lg mt-4">
                        <li className="flex items-start gap-4">
                          <span className="text-orange-500">•</span>
                          <strong>Kaggle datasets</strong> for a wide variety of data
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="text-orange-500">•</span>
                          <strong>Government open data portals</strong> for reliable and relevant data
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="text-orange-500">•</span>
                          <strong>Google Dataset Search</strong> to find datasets across the web
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-white mb-8">Getting Certified</h2>
                  <p className="text-xl leading-relaxed mb-8">
                    Focus on respected certifications that demonstrate practical skills:
                  </p>
                  <div className="space-y-8">
                    <div className="p-6 bg-gray-800/50 rounded-xl">
                      <h3 className="text-2xl font-bold text-white mb-4">Recommended Certifications</h3>
                      <ul className="space-y-4 text-lg">
                        <li className="flex items-start gap-4">
                          <span className="text-orange-500">•</span>
                          <strong>Google Data Analytics Professional Certificate</strong> - A comprehensive program for beginners
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="text-orange-500">•</span>
                          <strong>IBM Data Analyst Professional Certificate</strong> - Focuses on real-world data analysis
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="text-orange-500">•</span>
                          <strong>Microsoft Power BI Data Analyst Associate</strong> - Ideal for mastering Power BI
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-white mb-8">Job Search Strategy</h2>
                  <div className="space-y-8">
                    <div className="p-6 bg-gray-800/50 rounded-xl">
                      <h3 className="text-2xl font-bold text-white mb-4">1. Target the Right Roles</h3>
                      <ul className="space-y-4 text-lg">
                        <li className="flex items-start gap-4">
                          <span className="text-orange-500">•</span>
                          <strong>Junior Data Analyst</strong> - Perfect for entry-level candidates
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="text-orange-500">•</span>
                          <strong>Business Intelligence Analyst</strong> - Focuses on data visualization and reporting
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="text-orange-500">•</span>
                          <strong>Data Operations Analyst</strong> - Involves data management and quality assurance
                        </li>
                      </ul>
                    </div>
                    <div className="p-6 bg-gray-800/50 rounded-xl">
                      <h3 className="text-2xl font-bold text-white mb-4">2. Resume Tips</h3>
                      <ul className="space-y-4 text-lg">
                        <li className="flex items-start gap-4">
                          <span className="text-orange-500">•</span>
                          <strong>Highlight relevant projects</strong> and their impact
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="text-orange-500">•</span>
                          <strong>Include metrics</strong> and quantifiable results
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="text-orange-500">•</span>
                          <strong>Emphasize transferable skills</strong> from previous roles
                        </li>
                      </ul>
                    </div>
                    <div className="p-6 bg-gray-800/50 rounded-xl">
                      <h3 className="text-2xl font-bold text-white mb-4">3. Networking</h3>
                      <ul className="space-y-4 text-lg">
                        <li className="flex items-start gap-4">
                          <span className="text-orange-500">•</span>
                          <strong>Join data analytics communities</strong> on LinkedIn
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="text-orange-500">•</span>
                          <strong>Attend virtual meetups and conferences</strong> to connect with industry professionals
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="text-orange-500">•</span>
                          <strong>Connect with alumni</strong> working in data roles
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-white mb-8">Interview Preparation</h2>
                  <div className="p-8 bg-gray-800 rounded-xl border border-gray-700">
                    <h3 className="text-2xl font-bold text-white mb-6">Key Areas to Focus On</h3>
                    <ul className="space-y-4 text-lg">
                      <li className="flex items-start gap-4">
                        <span className="text-orange-500">•</span>
                        <strong>SQL query writing and optimization</strong> - Practice common queries and joins
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="text-orange-500">•</span>
                        <strong>Data cleaning and preparation scenarios</strong> - Be ready to explain your process
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="text-orange-500">•</span>
                        <strong>Business case studies</strong> - Showcase your problem-solving skills
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="text-orange-500">•</span>
                        <strong>Portfolio project presentations</strong> - Be prepared to walk through your projects
                      </li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-white mb-8">Conclusion</h2>
                  <p className="text-xl leading-relaxed">
                    Landing your first data analytics job without experience requires dedication and a strategic approach. Focus on building practical skills through projects, getting relevant certifications, and networking with industry professionals. By following this guide, you'll be well on your way to launching a successful career in data analytics.
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