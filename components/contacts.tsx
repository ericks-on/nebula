import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send
} from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';

const ContactPage = () => {
  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6 text-orange-500" />,
      title: "Phone",
      info: "+254 712 345 678",
      subInfo: "Monday - Friday, 9am - 6pm EAT"
    },
    {
      icon: <Mail className="w-6 h-6 text-orange-500" />,
      title: "Email",
      info: "info@nebulaanalytics.com",
      subInfo: "We'll respond within 24 hours"
    },
    {
      icon: <MapPin className="w-6 h-6 text-orange-500" />,
      title: "Office",
      info: "Nairobi, Kenya",
      subInfo: "Westlands Business Center, 4th Floor"
    },
    {
      icon: <Clock className="w-6 h-6 text-orange-500" />,
      title: "Working Hours",
      info: "9:00 AM - 6:00 PM EAT",
      subInfo: "Weekend meetings by appointment"
    }
  ];

  const socialLinks = [
    { 
        icon: <FaFacebook className="w-5 h-5" />,
        href: "#",
        label: "Facebook" 
    },
    { 
        icon: <BsTwitterX className="w-5 h-5" />,
        href: "#", 
        label: "Twitter"
    },
    { 
        icon: <FaLinkedin className="w-5 h-5" />,
        href: "https://www.linkedin.com/company/nebula-analytics-kenya/posts/?feedView=all", 
        label: "LinkedIn" 
    },
    {
        icon: <FaInstagram className="w-5 h-5" />,
        href: "#",
        label: "Instagram"
    }
  ];

  return (
    <div className="w-full bg-gray-900 text-gray-100 pt-26" id='contact'>
      {/* Network background effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
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

      {/* Header Section */}
      <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative">
        <div className="max-w-6xl mx-auto px-8 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have questions about our data science solutions? We&apos;re here to help transform your data into actionable insights.
          </p>
        </div>
      </div>
    
      {/* Contact Methods Grid */}
      <div className="max-w-6xl mx-auto px-8 py-16 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 transform hover:-translate-y-1">
              <div className="mb-4">
                {method.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-100 mb-2">
                {method.title}
              </h3>
              <p className="text-gray-300 font-medium mb-1">
                {method.info}
              </p>
              <p className="text-sm text-gray-400">
                {method.subInfo}
              </p>
            </div>
          ))}
        </div>
    
        {/* Contact Form Section */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50">
            <h2 className="text-2xl font-bold text-gray-100 mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-gray-100"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-gray-100"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-gray-100"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea 
                  className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 h-32 text-gray-100"
                  placeholder="Your message..."
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
    
          <div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 mb-8">
              <h2 className="text-2xl font-bold text-gray-100 mb-6">Connect With Us</h2>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-gray-700/50 p-3 rounded-lg border border-gray-600 hover:border-orange-500/50 hover:text-orange-500 transition-all duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
    
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50">
              <h2 className="text-2xl font-bold text-gray-100 mb-6">Book a Consultation</h2>
              <p className="text-gray-300 mb-6">
                Schedule a free consultation with our data science experts to discuss your specific needs and how we can help.
              </p>
              <button className="w-full bg-transparent text-orange-500 font-semibold py-3 px-6 rounded-lg border-2 border-orange-500 hover:bg-orange-500/10 transition-colors">
                Schedule Meeting
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;