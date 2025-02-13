// import React from 'react';
// import { Quote } from 'lucide-react';
// import Image from 'next/image';

// const FounderStory = () => {
//     const personalJourney = [
//         {
//           year: "Early Career",
//           title: "Banking Foundation",
//           description: "Building expertise in traditional banking and financial services"
//         },
//         {
//           year: "Transition",
//           title: "Tech Integration",
//           description: "Bridging finance and technology through data science and Python, R, SQL mastery"
//         },
//         {
//           year: "Innovation",
//           title: "Healthcare & Education Impact",
//           description: "Leading groundbreaking projects in hospital readmissions and smart education systems"
//         }
//       ];

//   return (
//     <div className="w-full bg-gray-900 text-gray-100" id='founder'>
//       {/* Founder Section */}
//       <div className="max-w-6xl mx-auto px-8 py-16">
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           {/* Founder Image */}
//           <div className="relative">
//             <div className="absolute inset-0 bg-gray-300 rounded-2xl" />
//             <Image 
//               className="rounded-2xl shadow-xl relative z-10 w-full object-cover"
//               src="/images/loyce.png"
//               alt="Loyce Tsuma"
//               width={800}
//               height={600}
//             />
//             <div className="absolute bottom-4 left-4 right-4 bg-black/40 backdrop-blur-sm rounded-xl p-4 z-20">
//               <h2 className="text-xl font-semibold">Loyce Tsuma</h2>
//               <p className="text-blue-200">Founder & Chief Data Scientist</p>
//             </div>
//           </div>

//           {/* Founder Info */}
//           <div className="space-y-6">
//             <h2 className="text-3xl font-bold">Our Visionary Leader</h2>
//             <p className="text-gray-300">
//               Loyce Tsuma, the founder of Nebula Analytics, brings a wealth of experience in data science, 
//               finance, and technology. Her expertise has been instrumental in shaping the company&apos;s 
//               innovative approach to solving complex problems.
//             </p>

//             {/* Personal Quote */}
//             <div className="bg-gray-800 rounded-2xl p-6 relative">
//               <Quote className="w-8 h-8 text-blue-600/20 absolute top-6 left-6" />
//               <p className="text-lg text-gray-300 italic pl-12">
//                 &quot;I believe that data science isn&apos;t just about algorithms and models – it&apos;s about 
//                 empowering people to make better decisions and create positive change in the world.&quot;
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Personal Journey Timeline */}
//         <div className="max-w-4xl mx-auto mt-16">
//           <h3 className="text-2xl font-bold text-center mb-8">Key Milestones</h3>
//           <div className="space-y-8">
//             {personalJourney.map((milestone, index) => (
//               <div key={index} className="flex gap-8 items-start">
//                 <div className="w-32 flex-shrink-0">
//                   <div className="text-xl font-bold text-blue-400">{milestone.year}</div>
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-semibold text-gray-100 mb-2">{milestone.title}</h3>
//                   <p className="text-gray-400">{milestone.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default FounderStory;

import React from 'react';
import Image from 'next/image';

const FounderStory = () => {
    const teamMembers = [
        {
            name: "Erickson Mbuvi",
            title: "Lead Developer",
            bio: "Erickson Mbuvi brings his background in computer science and mathematics, along with his expertise in data science and software development, to his work at Nebula Analytics. He focuses on building data-driven applications and predictive analytics to empower smarter decision-making and innovative solutions.",
            image: "/images/sarah.png"
        },
        {
            name: "Austin Murunga",
            title: "Lead Analyst",
            bio: "Austin Murunga, at Nebula Analytics, leverages his engineering background alongside data science proficiency, utilizing BI and Tableau to convert intricate datasets into actionable insights. His adeptness at trend analysis and narrative visualization ensures that your strategic business decisions are both data-driven and visionary.",
            image: "/images/marcus.png"
        }
    ];

    return (
        <div className="w-full bg-gray-900 text-gray-100" id="team">
            <div className="max-w-6xl mx-auto px-8 py-24">
                {/* Section Title */}
                <h2 className="text-4xl font-bold text-center mb-16">
                    Our Leadership Team
                </h2>

                {/* Founder Section */}
                <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gray-300 rounded-2xl" />
                        <Image 
                            className="rounded-2xl shadow-xl relative z-10 w-full object-cover"
                            src="/images/loyce.png"
                            alt="Loyce Tsuma"
                            width={800}
                            height={600}
                            priority
                        />
                        <div className="absolute bottom-4 left-4 right-4 bg-black/40 backdrop-blur-sm rounded-xl p-4 z-20">
                            <h2 className="text-xl font-semibold">Loyce Tsuma</h2>
                            <p className="text-blue-200">Founder & Chief Data Scientist</p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="space-y-6">
                            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                Our Visionary Leader
                            </h3>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Loyce Tsuma, the founder of Nebula Analytics, brings a wealth of experience in data science, 
                                finance, and technology. Her expertise has been instrumental in shaping the company&apos;s 
                                innovative approach to solving complex problems. With a unique blend of technical expertise 
                                and strategic vision, she leads our team in developing cutting-edge solutions that transform 
                                how businesses leverage their data.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Team Members Section */}
                <div className="grid md:grid-cols-2 gap-12">
                    {teamMembers.map((member, index) => (
                        <div 
                            key={index} 
                            className="bg-gray-800/50 backdrop-blur rounded-2xl p-8 border border-gray-700 hover:border-orange-600 transition-colors duration-300"
                        >
                            <div className="relative h-72 mb-8">
                                <div className="absolute inset-0 bg-gray-300 rounded-xl" />
                                <Image 
                                    className="rounded-xl w-full h-full object-cover relative z-10"
                                    src={member.image}
                                    alt={member.name}
                                    width={400}
                                    height={300}
                                />
                                <div className="absolute bottom-4 left-4 right-4 bg-black/40 backdrop-blur-sm rounded-xl p-4 z-20">
                                    <h3 className="text-xl font-semibold">{member.name}</h3>
                                    <p className="text-blue-200">{member.title}</p>
                                </div>
                            </div>
                            <p className="text-gray-300 leading-relaxed">{member.bio}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FounderStory;