"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoClose, IoMenuSharp } from 'react-icons/io5';
import { useRouter } from 'next/navigation';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();

    const handleScrollToSection = (sectionId:string) => {
      if (window.location.pathname === '/') {
        // If already on the homepage, scroll to the section
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Navigate to the homepage with the hash
        router.push(`/#${sectionId}`);
      }
    };

    return (
        <header className="flex items-center justify-between p-4 h-24 w-screen shadow-md fixed top-0 bg-gray-900 text-gray-100 z-50 pr-20">
            {/* Logo */}
            <Link href="/">
                <div className="logo-container relative pl-8">
                    <Image
                        className="logo shadow-md"
                        src="/logo.ico"
                        alt="Nebula Analytics"
                        width={70}
                        height={70}
                    />
                </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
                <ul className="flex space-x-8">
                    <li>
                    <button
                        onClick={() => handleScrollToSection('about')}
                        className="text-gray-300 hover:text-orange-500 transition-colors"
                    >
                        About us
                    </button>
                    </li>
                    <li>
                        <button
                            onClick={() => handleScrollToSection('services')}
                            className="text-gray-300 hover:text-orange-500 transition-colors"
                        >
                            Services
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => handleScrollToSection('team')}
                            className="text-gray-300 hover:text-orange-500 transition-colors"
                        >
                            Meet the Team
                        </button>
                    </li>
                    <li>
                    <button
                        onClick={() => handleScrollToSection('contact')}
                        className="text-gray-300 hover:text-orange-500 transition-colors"
                    >
                        Contact
                    </button>
                    </li>
                    <li>
                        <Link href="/blog" className="hover:text-orange-500 transition-colors">
                            Blog
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* Mobile Menu Toggle */}
            <div className="block md:hidden">
                <button
                    className="flex items-center justify-center p-2 rounded-md border border-gray-700 shadow-md hover:bg-gray-800 transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <IoMenuSharp className="text-2xl" />
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed top-0 left-0 w-full h-full bg-gray-900 text-gray-100 z-50 p-4 ${
                    isMenuOpen ? 'block' : 'hidden'
                }`}
            >
                {/* Mobile Menu Logo */}
                <div className="flex items-center justify-center">
                    <Link href="/">
                        <div>
                            <Image
                                className="shadow-md"
                                src="/logo.ico"
                                alt="Nebula Analytics"
                                width={100}
                                height={100}
                            />
                        </div>
                    </Link>
                </div>

                {/* Mobile Navigation Links */}
                <nav className="flex flex-col items-center justify-center h-full space-y-6">
                    <Link
                        href="#about"
                        onClick={() => setIsMenuOpen(false)}
                        className="hover:text-orange-500 transition-colors"
                    >
                        About us
                    </Link>
                    <Link
                        href="#services"
                        onClick={() => setIsMenuOpen(false)}
                        className="hover:text-orange-500 transition-colors"
                    >
                        Our Services
                    </Link>
                    <Link
                        href="#founder"
                        onClick={() => setIsMenuOpen(false)}
                        className="hover:text-orange-500 transition-colors"
                    >
                        Meet our Founder
                    </Link>
                    <Link
                        href="#contact"
                        onClick={() => setIsMenuOpen(false)}
                        className="hover:text-orange-500 transition-colors"
                    >
                        Contact Us
                    </Link>
                </nav>

                {/* Mobile Menu Close Button */}
                <div className="fixed top-0 right-14 p-4">
                    <button
                        className="flex items-center justify-center p-2 rounded-md border border-gray-700 shadow-md hover:bg-gray-800 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <IoClose className="text-2xl" />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;