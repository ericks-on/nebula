import React from 'react';
import { Quote, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const FounderStory = () => {
    const personalJourney = [
        {
          year: "Early Career",
          title: "Banking Foundation",
          description: "Building expertise in traditional banking and financial services"
        },
        {
          year: "Transition",
          title: "Tech Integration",
          description: "Bridging finance and technology through data science and Python, R, SQL mastery"
        },
        {
          year: "Innovation",
          title: "Healthcare & Education Impact",
          description: "Leading groundbreaking projects in hospital readmissions and smart education systems"
        }
      ];

  return (
    <div className="w-full dark:bg-gray-800" id='founder'>
    {/* Hero Section */}
    <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
      <div className="max-w-6xl mx-auto px-8 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 md:order-1">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-2xl" />
            <Image 
              className="rounded-2xl shadow-xl relative z-10 w-full object-cover"
              src="/images/loyce.jpeg"
              alt="Loyce Tsuma"
              width={800}
              height={600}
            />
            <div className="absolute bottom-4 left-4 right-4 bg-black/40 backdrop-blur-sm rounded-xl p-4 z-20">
              <h2 className="text-xl font-semibold">Loyce Tsuma</h2>
              <p className="text-blue-200">Founder & Chief Data Scientist</p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              From Data Dreams to Reality
            </h1>
            <p className="text-xl text-blue-200">
              My journey from a curious data scientist to founding one of the most innovative 
              data science companies started with a simple question: &quot;How can we make data 
              science accessible to everyone?&quot;
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Personal Story Section */}
    <div className="max-w-4xl mx-auto px-8 py-16">
      <div className="prose prose-lg dark:prose-invert">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">My Story</h2>
        <div className="space-y-6 text-gray-700 dark:text-gray-300">
          <p>
            My path in finance began in traditional banking, where I developed a deep 
            understanding of financial systems and client needs. However, I saw a 
            growing gap between traditional banking practices and the rapid advancement 
            of technology.
          </p>
          <p>
            This observation led me to explore the world of data science, mastering 
            Python, R, and SQL. I realized that by combining my banking expertise 
            with technical skills, I could create solutions that would transform how 
            financial institutions operate and serve their clients.
          </p>
          <p>
            Through projects like &quot;Predicting Hospital Readmissions&quot; and &quot;Smart 
            Education Systems,&quot; I&apos;ve demonstrated how data science can create impact 
            across various sectors. These experiences shaped my vision for Nebula 
            Analytics - a company that bridges the gap between traditional finance 
            and cutting-edge technology.
          </p>
        </div>

        {/* Personal Quote */}
        <div className="my-12 bg-gray-50 dark:bg-gray-600 rounded-2xl p-8 relative">
          <Quote className="w-12 h-12 text-blue-600/20 dark:text-blue-400/20 absolute top-8 left-8" />
          <p className="text-2xl text-gray-700 dark:text-gray-300 italic ml-16">
            &quot;I believe that data science isn&apos;t just about algorithms and models – it&apos;s about 
            empowering people to make better decisions and create positive change in the world.&quot;
          </p>
        </div>

        {/* Personal Journey Timeline */}
        <div className="space-y-12 my-16">
          {personalJourney.map((milestone, index) => (
            <div key={index} className="flex gap-8 items-start">
              <div className="w-32 flex-shrink-0">
                <div className="text-xl font-bold text-blue-600 dark:text-blue-400">{milestone.year}</div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{milestone.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-6 text-gray-700 dark:text-gray-300">
          <p>
            At Nebula Analytics, we&apos;re not just building another fintech company - 
            we&apos;re creating a bridge between traditional financial expertise and the 
            limitless possibilities of data science. Our work spans across sectors, 
            from healthcare to education, always grounded in solid financial principles 
            and powered by cutting-edge technology.
          </p>
          <p>
            Looking ahead, I&apos;m excited to continue pushing the boundaries of what&apos;s 
            possible when we combine financial expertise with data science. The 
            future of finance is being shaped by this intersection, and we&apos;re proud 
            to be at the forefront of this transformation.
          </p>
        </div>

        {/* Connect Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Let&apos;s Connect</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            I&apos;m always eager to connect with fellow professionals interested in the 
            intersection of finance, technology, and data science.
          </p>
          <Link href="https://www.linkedin.com/in/loycetsuma-datascientist/" target='blank'>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center">
              Connect with Loyce
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
  );
};

export default FounderStory;