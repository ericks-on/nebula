"use client"
import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoClose, IoMenuSharp } from 'react-icons/io5';

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
        <header className="flex items-center justify-between p-4 h-24 shadow-md sticky top-0 bg-white z-50">
            <Link href="/">
                <div
                    ref={logoContainerRef}
                    className={`logo-container transition-all flex duration-300 ease-in-out h-20 ${isScrolled ? 'transition items-center justify-center' : 'relative '}`}
                >
                    {/* Final Logo (Smaller) */}
                    <Image
                        className={`logo-final shadow-md transition-all duration-300 ease-in-out m-0 ${isScrolled ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                        src="/logo.ico"
                        alt="Nebula Analytics"
                        width={70}
                        height={70}
                    />
                    {/* Initial Logo (Larger) */}
                    <Image
                        className={`logo-initial shadow-md transition-all duration-300 ease-in-out -mb-20 ${isScrolled ? 'opacity-0 invisible' : 'opacity-100 visible'}`}
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
            <div className={`fixed top-0 left-0 w-full h-full bg-white z-50 p-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
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
                    <Link href="#about">About us</Link>
                    <Link href="#services">Our Services</Link>
                    <Link href="#founder">Meet our Founder</Link>
                    <a href="#contact">Contact Us</a>
                </nav>
                <div className="fixed top-0 right-0 p-4">
                    <button 
                        className="flex items-center justify-center p-2 rounded-md border shadow-md"
                        onClick={() => setIsMenuOpen(!isMenuOpen)} >
                        <IoClose className="text-2xl" />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
