"use client"
import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoClose, IoMenuSharp } from 'react-icons/io5';
import ThemeSwitcher from './theme-button';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const logoContainerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className="flex items-center justify-between p-4 h-24 w-screen shadow-md fixed top-0 bg-white z-50 pr-20 dark:bg-gray-800 dark:text-gray-100">
            <Link href="/">
                <div
                    ref={logoContainerRef}
                    className="logo-container relative  pl-8 transition-all duration-300 ease-in-out"
                >
                    {/* Final Logo (Smaller) */}
                    <Image
                        className={`logo-final shadow-md transition-all duration-300 ease-in-out absolute top-0 left-0 ${
                            isScrolled ? 'opacity-100 visible' : 'opacity-0 invisible'
                        }`}
                        src="/logo.ico"
                        alt="Nebula Analytics"
                        width={70}
                        height={70}
                    />
                    {/* Initial Logo (Larger) */}
                    <Image
                        className={`logo-initial shadow-md transition-all duration-300 ease-in-out -mb-20 ${
                            isScrolled ? 'opacity-0 invisible' : 'opacity-100 visible'
                        }`}
                        src="/logo.ico"
                        alt="Nebula Analytics"
                        width={100}
                        height={100}
                    />
                </div>
            </Link>
            <nav className='hidden md:block'>
                <ul className="flex space-x-6">
                    <li>
                        <Link href="#about">About us</Link>
                    </li>
                    <li>
                        <Link href="#services">Our Services</Link>
                    </li>
                    <li>
                        <Link href="#founder">Meet our Founder</Link>
                    </li>
                    <li>
                        <a href="#contact">Contact Us</a>
                    </li>
                </ul>
            </nav>
            <div className="block md:hidden">
                <button 
                    className="flex items-center justify-center p-2 rounded-md border shadow-md"
                    onClick={() => setIsMenuOpen(!isMenuOpen)} >
                    <IoMenuSharp className="text-2xl" />
                </button>
            </div>
            <div className={`fixed top-0 left-0 w-full h-full bg-white text-bg-gray-800 dark:bg-gray-800 dark:text-gray-100 z-50 p-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
                {/* logo */}
                <div className="flex items-center justify-center">
                    <Link href="/">
                        <div>
                            <Image
                                className=' shadow-md'
                                src="/logo.ico"
                                alt="Nebula Analytics"
                                width={100}
                                height={100}
                            />
                        </div>
                    </Link>
                </div>
                <nav className="flex flex-col items-center justify-center h-full space-y-6">
                    <Link 
                        href="#about"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}>About us</Link>
                    <Link 
                        href="#services"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}>Our Services</Link>
                    <Link 
                        href="#founder"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}>Meet our Founder</Link>
                    <Link 
                        href="#contact"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}>Contact Us</Link>
                </nav>
                <div className="fixed top-0 right-14 p-4">
                    <button 
                        className="flex items-center justify-center p-2 rounded-md border shadow-md"
                        onClick={() => setIsMenuOpen(!isMenuOpen)} >
                        <IoClose className="text-2xl" />
                    </button>
                </div>
            </div>
            <ThemeSwitcher />
        </header>
    );
};

export default Header;