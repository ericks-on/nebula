"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoClose, IoMenuSharp } from 'react-icons/io5';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                        <Link href="#about" className="hover:text-orange-500 transition-colors">
                            About us
                        </Link>
                    </li>
                    <li>
                        <Link href="#services" className="hover:text-orange-500 transition-colors">
                            Our Services
                        </Link>
                    </li>
                    <li>
                        <Link href="#founder" className="hover:text-orange-500 transition-colors">
                            Meet our Founder
                        </Link>
                    </li>
                    <li>
                        <Link href="#contact" className="hover:text-orange-500 transition-colors">
                            Contact Us
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