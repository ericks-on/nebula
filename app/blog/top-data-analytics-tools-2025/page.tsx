import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, Calendar, Clock, Share2, ChevronRight } from 'lucide-react';

const BlogPost = () => {
  const blogData = {
    title: "Top Data Analytics Tools for Beginners in 2025",
    description: "A comprehensive guide to the best data analytics tools, including Tableau, Power BI, and Python libraries. Learn which tools are essential for beginners and how to get started with them.",
    publishDate: "February 15, 2025",
    readTime: "10 min read",
    author: "Data Tools Expert",
    mainImage: "/blog/blog5.jpg"
  };

  return (
    <div className="w-full bg-gray-900">
      <Head>
        <title>{blogData.title} | Nebula Analytics Blog</title>
        <meta name="description" content={blogData.description} />
        <meta name="keywords" content="data analytics tools, Tableau, Power BI, Python for data analysis, data visualization tools, beginner data tools, data analytics software, data tools 2025, data analysis libraries, data tools for beginners" />
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
                Tools Guide
              </p>
            </div>
            <h2 className="text-3xl font-bold text-white mb-6">Master Data Analytics Tools with Nebula Analytics</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Explore our curated resources and training programs to help you master the top data analytics tools in 2025.
            </p>
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-600 transition-colors text-lg"
            >
              Explore Tools Training
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
                    Data analytics tools are essential for anyone looking to break into the field. In 2025, the landscape of tools continues to evolve, offering beginners powerful yet accessible options. This guide covers the top tools for beginners, their key features, and how to get started with each.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-white mb-8">Top Tools for Beginners</h2>
                  <div className="space-y-8">
                    <div className="p-8 bg-gray-800 rounded-xl border border-gray-700">
                      <h3 className="text-2xl font-bold text-white mb-6">1. Tableau</h3>
                      <ul className="space-y-4 text-lg">
                        <li className="flex items-start gap-4">
                          <span className="text-orange-500">•</span>
                          <strong>Best for:</strong> Data visualization and interactive dashboards
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="text-orange-500">•</span>
                          <strong>Key Features:</strong> Drag-and-drop interface, real-time data collaboration, and extensive visualization options
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="text-orange-500">•</span>
                          <strong>Getting Started:</strong> Download Tableau Public (free) and explore their beginner tutorials.
                        </li>
                      </ul>
                    </div>
                    <div className="p-8 bg-gray-800 rounded-xl border border-gray-700">
                      <h3 className="text-2xl font-bold text-white mb-6">2. Power BI</h3>
                      <ul className="space-y-4 text-lg">
                        <li className="flex items-start gap-4">
                          <span className="text-orange-500">•</span>
                          <strong>Best for:</strong> Business intelligence and reporting
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="text-orange-500">•</span>
                          <strong>Key Features:</strong> Integration with Microsoft products, DAX language for advanced calculations, and AI-driven insights
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="text-orange-500">•</span>
                          <strong>Getting Started:</strong> Use the free version and follow Microsoft's Power BI learning path.
                        </li>
                      </ul>
                    </div>
                    <div className="p-8 bg-gray-800 rounded-xl border border-gray-700">
                      <h3 className="text-2xl font-bold text-white mb-6">3. Python Libraries (Pandas, Matplotlib, Seaborn)</h3>
                      <ul className="space-y-4 text-lg">
                        <li className="flex items-start gap-4">
                          <span className="text-orange-500">•</span>
                          <strong>Best for:</strong> Data manipulation, analysis, and advanced visualizations
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="text-orange-500">•</span>
                          <strong>Key Features:</strong> Open-source, highly customizable, and widely used in the industry
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="text-orange-500">•</span>
                          <strong>Getting Started:</strong> Install Python and Jupyter Notebook, then explore tutorials on Pandas and Matplotlib.
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-white mb-8">How to Choose the Right Tool</h2>
                  <div className="p-8 bg-gray-800 rounded-xl border border-gray-700">
                    <h3 className="text-2xl font-bold text-white mb-6">Factors to Consider</h3>
                    <ul className="space-y-4 text-lg">
                      <li className="flex items-start gap-4">
                        <span className="text-orange-500">•</span>
                        <strong>Your Goals:</strong> Are you focused on visualization, reporting, or advanced analysis?
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="text-orange-500">•</span>
                        <strong>Ease of Use:</strong> Some tools are more beginner-friendly than others.
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="text-orange-500">•</span>
                        <strong>Cost:</strong> Many tools offer free versions or trials for beginners.
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="text-orange-500">•</span>
                        <strong>Industry Demand:</strong> Research which tools are most sought after in your target industry.
                      </li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-white mb-8">Learning Resources</h2>
                  <div className="space-y-8">
                    <div className="p-6 bg-gray-800/50 rounded-xl">
                      <h3 className="text-2xl font-bold text-white mb-4">1. Tableau Learning</h3>
                      <ul className="space-y-4 text-lg">
                        <li className="flex items-start gap-4">
                          <span className="text-orange-500">•</span>
                          <strong>Tableau Public Gallery:</strong> Explore public dashboards for inspiration.
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="text-orange-500">•</span>
                          <strong>Tableau Training Videos:</strong> Free tutorials on the Tableau website.
                        </li>
                      </ul>
                    </div>
                    <div className="p-6 bg-gray-800/50 rounded-xl">
                      <h3 className="text-2xl font-bold text-white mb-4">2. Power BI Learning</h3>
                      <ul className="space-y-4 text-lg">
                        <li className="flex items-start gap-4">
                          <span className="text-orange-500">•</span>
                          <strong>Microsoft Learn:</strong> Free Power BI learning path.
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="text-orange-500">•</span>
                          <strong>Power BI Community:</strong> Join forums and discussions.
                        </li>
                      </ul>
                    </div>
                    <div className="p-6 bg-gray-800/50 rounded-xl">
                      <h3 className="text-2xl font-bold text-white mb-4">3. Python Learning</h3>
                      <ul className="space-y-4 text-lg">
                        <li className="flex items-start gap-4">
                          <span className="text-orange-500">•</span>
                          <strong>Kaggle Learn:</strong> Free Python and data analysis courses.
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="text-orange-500">•</span>
                          <strong>Real Python:</strong> Tutorials and articles for beginners.
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-white mb-8">Conclusion</h2>
                  <p className="text-xl leading-relaxed">
                    Choosing the right data analytics tool is a critical step for beginners. Whether you start with Tableau, Power BI, or Python, each tool offers unique advantages. By leveraging the resources and tips in this guide, you'll be well-equipped to begin your journey into data analytics in 2025.
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