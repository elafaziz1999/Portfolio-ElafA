"use client"
// components/NavBarWithSidebar.js
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import '@fontsource-variable/playfair-display';
import '@fontsource/lato';
import '@fontsource/lobster';

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const sidebarVariants = {
        open: { x: 0, transition: { duration: 0.3 } }, // sets the transition to be executed in 0.3s, positioned 0 on the x-axis (displayed on the left side of the page)
        closed: { x: '-100%', transition: { duration: 0.3 } }, // sets the transition to be executed in 0.3s, positioned -100% on the x-axis (displayed on the left side of the page) making it invisible
    };

    return (
        <div>
            {/* Navbar */}
            <nav className="flex items-center justify-between p-4 bg-[#A0C9D8]">
                <a href="/">
                    <div className="py-1 flex items-center text-[#333333] text-5xl font-bold font-lobster">
                        Elaf Aziz
                    </div>
                </a>

                <div className="hidden md:flex items-center space-x-5">                    
                    <a href='/aboutme'>
                    <button className="text-[#333333] font-bold rounded-lg px-3 py-1 flex items-center hover:underline">
                        <span>About Me</span>
                    </button></a>
                    <a href='/myeducation'>
                    <button className="text-[#333333] font-bold rounded-lg px-3 py-1 flex items-center hover:underline">
                        <span>Education</span>
                    </button></a>
                    <a href='/myexperience'>
                    <button className="text-[#333333] font-bold rounded-lg px-3 py-1 flex items-center hover:underline">
                        <span>Work Experience</span>
                    </button></a>
                    <a href='/projects'>
                    <button className="text-[#333333] font-bold rounded-lg px-3 py-1 flex items-center hover:underline">
                        <span>Projects</span>
                    </button></a>
                    <a href='/CV.pdf' target='_blank'>
                    <button className="text-[#333333] font-bold rounded-lg px-3 py-1 flex items-center hover:underline">
                        <span>CV</span>
                    </button></a>
                    <a href='/contactme'>
                    <button className="text-[#333333] font-bold rounded-lg px-3 py-1 flex items-center hover:underline">
                        <span>Contact Me</span>
                    </button></a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsSidebarOpen(true)}
                    className="md:hidden text-[#333333] p-2 focus:outline-none"
                >
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </nav>

            {/* Sidebar */}
            <motion.div
                className="fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-[#B078D8] to-[#A0C9D8] shadow-lg z-50"
                initial="closed"
                animate={isSidebarOpen ? 'open' : 'closed'}
                variants={sidebarVariants}
            >
                <div className="flex items-center justify-between p-4 border-b">
                    <h2 className="text-5xl font-lobster font-extrabold text-white">Elaf Aziz</h2>
                    <button
                        onClick={() => setIsSidebarOpen(false)}
                        className="text-gray-700 focus:outline-none"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                <ul className="px-4 py-2">
                    <li className="py-2">
                        <a href="#" className="text-white">
                            About Me
                        </a>
                    </li>
                    <li className='py-2'>
                        <a href='/myeducation' className='text-white'>
                            Education
                        </a>
                    </li>
                    <li className="py-2">
                        <a href="/myexperience" className="text-white">
                            Work Experience
                        </a>
                    </li>
                    <li className="py-2">
                        <a href="/projects" className="text-white">
                            Projects
                        </a>
                    </li>
                    <li className="py-2">
                        <a href="/CV.pdf" className="text-white">
                            CV
                        </a>
                    </li>
                    <li className="py-2">
                        <a href="/contactme" className="text-white">
                            Contact Me
                        </a>
                    </li>
                </ul>
            </motion.div>

            {/* Overlay (optional, to close the sidebar when clicking outside) */}
            {isSidebarOpen && (
                <div
                    onClick={() => setIsSidebarOpen(false)}
                    className="fixed inset-0 bg-black opacity-50 z-40"
                />
            )}
        </div>
    );
};

export default Navbar;
