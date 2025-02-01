import React from 'react';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';

const Footer = () => {
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

  const quickLinks = [
    "about",
    "services",
    "founder",
    "contact",

  ];

  const services = [
    "Data Analysis",
    "Machine Learning",
    "Predictive Modeling",
    "Business Intelligence",
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-8 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Data Science Mastery</h3>
            <p className="text-gray-400 mb-6">
              Transforming data into actionable insights for businesses worldwide. Your trusted partner in data science and analytics.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-gray-800 p-2 rounded-lg hover:bg-orange-500 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={`#${link}`} className="hover:text-orange-500 transition-colors inline-flex items-center">
                    {link}
                    <ArrowUpRight className="w-3 h-3 ml-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#services" className="hover:text-orange-500 transition-colors inline-flex items-center">
                    {service}
                    <ArrowUpRight className="w-3 h-3 ml-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <div className="space-y-4">
              <a href="mailto:contact@example.com" className="flex items-center space-x-3 hover:text-orange-500 transition-colors">
                <Mail className="w-5 h-5" />
                <span>contact@example.com</span>
              </a>
              <a href="tel:+1234567890" className="flex items-center space-x-3 hover:text-orange-500 transition-colors">
                <Phone className="w-5 h-5" />
                <span>+1 (234) 567-890</span>
              </a>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5" />
                <span>123 Data Street, Analytics City, 12345</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Nebula Analytics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;