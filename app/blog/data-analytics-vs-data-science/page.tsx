import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, Calendar, Clock, Share2, ChevronRight } from 'lucide-react';

const BlogPost = () => {
  const blogData = {
    title: "Data Analytics vs Data Science: Which Career is Right for You?",
    description: "Discover the key differences between data analytics and data science careers. Compare job responsibilities, required skills, salary potential, and career paths to make an informed decision about your future in data.",
    publishDate: "February 12, 2025",
    readTime: "8 min read",
    author: "Data Career Expert",
    mainImage: "/blog/blog3.jpg"
  };

  return (
    <div className="w-full bg-gray-900">
      <Head>
        <title>{blogData.title} | Nebula Analytics Blog</title>
        <meta name="description" content={blogData.description} />
        <meta name="keywords" content="data analytics vs data science, data career paths, data analyst career, data scientist career, data analytics salary, data science salary, data skills comparison, data jobs comparison, data analytics skills, data science skills" />
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
            <h2 className="text-3xl font-bold text-white mb-6">Start Your Data Career with Nebula Analytics</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Whether you choose data analytics or data science, Nebula Analytics offers mentorship and real-world projects to accelerate your career growth.
            </p>
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-600 transition-colors text-lg"
            >
              Explore Opportunities
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
                    The data revolution has created two distinct yet related career paths: data analytics and data science. While both fields work with data to drive business decisions, they require different skills, tools, and approaches. This guide will help you understand the key differences and choose the path that best matches your interests and career goals.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-white mb-8">Core Responsibilities</h2>
                  <div className="space-y-8">
                    <div className="p-6 bg-gray-800/50 rounded-xl">
                      <h3 className="text-2xl font-bold text-white mb-4">Data Analytics</h3>
                      <ul className="space-y-4 text-lg">
                        <li className="flex items-start gap-4">
                          <span className="text-orange-500">•</span>
                          Analyzing current data to identify trends and patterns
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="text-orange-500">•</span>
                          Creating dashboards and visualizations
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="text-orange-500">•</span>
                          Generating reports and presenting insights
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="text-orange-500">•</span>
                          Supporting data-driven decision making
                        </li>
                      </ul>
                    </div>
                    <div className="p-6 bg-gray-800/50 rounded-xl">
                      <h3 className="text-2xl font-bold text-white mb-4">Data Science</h3>
                      <ul className="space-y-4 text-lg">
                        <li className="flex items-start gap-4">
                          <span className="text-orange-500">•</span>
                          Developing predictive models and algorithms
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="text-orange-500">•</span>
                          Implementing machine learning solutions
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="text-orange-500">•</span>
                          Creating and testing hypotheses
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="text-orange-500">•</span>
                          Building complex data pipelines
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-white mb-8">Required Skills</h2>
                  <div className="space-y-12">
                    <div className="p-8 bg-gray-800 rounded-xl border border-gray-700">
                      <h3 className="text-2xl font-bold text-white mb-6">Data Analytics Skills</h3>
                      <ul className="space-y-4 text-lg">
                        <li className="flex items-start gap-4">
                          <span className="text-orange-500">•</span>
                          SQL and database management
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="text-orange-500">•</span>
                          Excel and spreadsheet analysis
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="text-orange-500">•</span>
                          Data visualization (Tableau, Power BI)
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="text-orange-500">•</span>
                          Basic statistics and business intelligence
                        </li>
                      </ul>
                    </div>
                    <div className="p-8 bg-gray-800 rounded-xl border border-gray-700">
                      <h3 className="text-2xl font-bold text-white mb-6">Data Science Skills</h3>
                      <ul className="space-y-4 text-lg">
                        <li className="flex items-start gap-4">
                          <span className="text-orange-500">•</span>
                          Advanced programming (Python, R)
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="text-orange-500">•</span>
                          Machine learning and AI
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="text-orange-500">•</span>
                          Advanced statistics and mathematics
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="text-orange-500">•</span>
                          Big data technologies
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-white mb-8">Career Growth and Salary Potential</h2>
                  <div className="space-y-8">
                    <div className="p-6 bg-gray-800/50 rounded-xl">
                      <h3 className="text-2xl font-bold text-white mb-4">Data Analytics Career Path</h3>
                      <p className="text-lg leading-relaxed mb-4">Entry-level positions typically start at $55,000-$75,000, with senior roles reaching $100,000-$130,000. Career progression often leads to roles like Senior Data Analyst, Analytics Manager, or Business Intelligence Manager.</p>
                    </div>
                    <div className="p-6 bg-gray-800/50 rounded-xl">
                      <h3 className="text-2xl font-bold text-white mb-4">Data Science Career Path</h3>
                      <p className="text-lg leading-relaxed mb-4">Starting salaries range from $70,000-$95,000, with experienced professionals earning $120,000-$200,000+. Career advancement includes roles like Senior Data Scientist, Machine Learning Engineer, or Chief Data Scientist.</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-white mb-8">Which Path Should You Choose?</h2>
                  <p className="text-xl leading-relaxed mb-8">Consider choosing Data Analytics if you:</p>
                  <ul className="space-y-4 text-lg mb-8">
                    <li className="flex items-start gap-4">
                      <span className="text-orange-500">•</span>
                      Enjoy finding patterns in data and creating visualizations
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="text-orange-500">•</span>
                      Want to focus on practical business insights
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="text-orange-500">•</span>
                      Prefer working with existing data and tools
                    </li>
                  </ul>
                  <p className="text-xl leading-relaxed mb-8">Consider choosing Data Science if you:</p>
                  <ul className="space-y-4 text-lg">
                    <li className="flex items-start gap-4">
                      <span className="text-orange-500">•</span>
                      Have a strong background in mathematics and programming
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="text-orange-500">•</span>
                      Want to build predictive models and algorithms
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="text-orange-500">•</span>
                      Enjoy research and experimental approaches
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-white mb-8">Conclusion</h2>
                  <p className="text-xl leading-relaxed">
                    Both data analytics and data science offer rewarding career paths with strong growth potential. Your choice should align with your interests, technical aptitude, and career goals. Remember that many professionals start in data analytics and transition to data science as they build their skills. Whichever path you choose, focus on continuous learning and gaining practical experience to succeed in these dynamic fields.
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