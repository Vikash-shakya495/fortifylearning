import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FiArrowDown, FiArrowUp } from "react-icons/fi"; // Import the arrow icons
import fortifyLearningLogo from '../assets/fortifyLearning.png';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa';

function Footer() {
    const [openSections, setOpenSections] = useState({
        solutions: false,
        company: false,
        platform: false,
        resources: false,
    });

    const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

    const toggleSection = (section) => {
        setOpenSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <footer className="text-white mt-20 p-8 w-5/6 mx-auto">
            <div className="container mx-auto px-6">
                {/* Top Row: Logo and Social Media Icons */}
                <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start border-b border-gray-800 p-6">
                    {/* Logo */}
                    <div className="text-xl font-bold mb-4 sm:mb-0">
                        <img src={fortifyLearningLogo} alt="Cybrary Logo" className="w-44" />
                    </div>

                        {/* Add your social media links here */}
                        
  <div className="flex flex-wrap gap-4 justify-center sm:justify-start ">
                        <NavLink to="https://facebook.com" target="_blank" rel="noopener noreferrer" className="border bg-gray-900 rounded-full p-2 hover:text-gray-400">
                            <FaFacebook size={20} />
                        </NavLink>
                        <NavLink to="https://twitter.com" target="_blank" rel="noopener noreferrer" className="border bg-gray-900 rounded-full p-2 hover:text-gray-400">
                            <FaTwitter size={20} />
                        </NavLink>
                        <NavLink to="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="border bg-gray-900 rounded-full p-2 hover:text-gray-400">
                            <FaLinkedin size={20} />
                        </NavLink>
                        <NavLink to="https://instagram.com" target="_blank" rel="noopener noreferrer" className="border bg-gray-900 rounded-full p-2 hover:text-gray-400">
                            <FaInstagram size={20} />
                        </NavLink>
                        <NavLink to="https://www.twitch.tv/" target="_blank" rel="noopener noreferrer" className="border bg-gray-900 rounded-full p-2 hover:text-gray-400">
                            <FaTwitch size={20} />
                        </NavLink>
                        <NavLink to="https://youtube.com" target="_blank" rel="noopener noreferrer" className="border bg-gray-900 rounded-full p-2 hover:text-gray-400">
                            <FaYoutube size={20} />
                        </NavLink>
                    </div>
                    
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col sm:flex-wrap sm:flex-row gap-4 sm:justify-between mt-6">
                    <div>
                        <div className="flex justify-between items-center cursor-pointer border-b border-gray-700 sm:border-none pb-2" onClick={() => toggleSection('solutions')}>
                            <h3 className="font-semibold mb-2 text-2xl ">Solutions</h3>
                            {openSections.solutions ? <FiArrowUp className='sm:hidden'/> : <FiArrowDown className='sm:hidden'/>}
                        </div>
                        {(openSections.solutions || !isMobile) && (
                            <ul className="">
                                <li>
                                    <NavLink to="/individuals" className="flex items-center mb-4 text-lg text-gray-400 hover:text-white group transition-colors">
                                        For Individuals
                                        <MdOutlineKeyboardArrowRight className='mt-1 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/teams" className="flex items-center mb-4 text-lg text-gray-400 hover:text-white group transition-colors">
                                        For Teams
                                        <MdOutlineKeyboardArrowRight className='mt-1 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/government" className="flex items-center mb-4 text-lg text-gray-400 hover:text-white group transition-colors">
                                        Government
                                        <MdOutlineKeyboardArrowRight className='mt-1 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                                    </NavLink>
                                </li>
                            </ul>
                        )}
                    </div>

                    <div>
                        <div className="flex justify-between items-center cursor-pointer border-b border-gray-700 sm:border-none pb-2" onClick={() => toggleSection('company')}>
                            <h3 className="font-semibold mb-2 text-2xl ">Company</h3>
                            {openSections.company ? <FiArrowUp className='sm:hidden'/> : <FiArrowDown className='sm:hidden'/>}
                        </div>
                        {(openSections.company || !isMobile) && (
                            <ul className="">
                                <li>
                                    <NavLink to="/about" className="flex items-center mb-4 text-lg text-gray-400 hover:text-white group transition-colors">
                                        About
                                        <MdOutlineKeyboardArrowRight className='mt -1 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/careers" className="flex items-center mb-4 text-lg text-gray-400 hover:text-white group transition-colors">
                                        Careers
                                        <MdOutlineKeyboardArrowRight className='mt-1 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/press" className="flex items-center mb-4 text-lg text-gray-400 hover:text-white group transition-colors">
                                        Press
                                        <MdOutlineKeyboardArrowRight className='mt-1 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/fortifylearning-impact-hub" className="flex items-center mb-4 text-lg text-gray-400 hover:text-white group transition-colors">
                                        Cybrary Impact Hub
                                        <MdOutlineKeyboardArrowRight className='mt-1 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                                    </NavLink>
                                </li>
                            </ul>
                        )}
                    </div>

                    <div>
                        <div className="flex justify-between items-center cursor-pointer border-b border-gray-700 sm:border-none pb-2" onClick={() => toggleSection('platform')}>
                            <h3 className="font-semibold mb-2 text-2xl ">Platform</h3>
                            {openSections.platform ? <FiArrowUp className='sm:hidden'/> : <FiArrowDown className='sm:hidden'/>}
                        </div>
                        {(openSections.platform || !isMobile) && (
                            <ul className="">
                                <li>
                                    <NavLink to="/catalog" className="flex items-center mb-4 text-lg text-gray-400 hover:text-white group transition-colors">
                                        Catalog
                                        <MdOutlineKeyboardArrowRight className='mt-1 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/instructor" className="flex items-center mb-4 text-lg text-gray-400 hover:text-white group transition-colors">
                                        Instructors
                                        <MdOutlineKeyboardArrowRight className='mt-1 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/alliances" className="flex items-center mb-4 text-lg text-gray-400 hover:text-white group transition-colors">
                                        Alliances
                                        <MdOutlineKeyboardArrowRight className='mt-1 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                                    </NavLink>
                                </li>
                            </ul>
                        )}
                    </div>

                    <div>
                        <div className="flex justify-between items-center cursor-pointer border-b border-gray-700 sm:border-none pb-2" onClick={() => toggleSection('resources')}>
                            <h3 className="font-semibold mb-2 text-2xl ">Resources</h3>
                            {openSections.resources ? <FiArrowUp className='sm:hidden'/> : <FiArrowDown className='sm:hidden'/>}
                        </div>
                        {(openSections.resources || !isMobile) && (
                            <ul className="">
                                <li>
                                    <NavLink to="/blog" className="flex items-center mb-4 text-lg text-gray-400 hover:text-white group transition-colors">
                                        Blog
                                        <MdOutlineKeyboardArrowRight className='mt-1 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/help-center" className="flex items-center mb-4 text-lg text-gray-400 hover:text-white group transition-colors">
                                        Help Center
                                        <MdOutlineKeyboardArrowRight className='mt-1 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/podcast" className="flex items-center mb-4 text-lg text-gray-400 hover:text-white group transition-colors">
                                        The Cybrary Podcast
                                        <MdOutlineKeyboardArrowRight className='mt-1 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/report-vulnerability" className="flex items-center mb-4 text-lg text-gray-400 hover:text-white group transition-colors">
                                        Report a Vulnerability <MdOutlineKeyboardArrowRight className='mt-1 ml-2 transition-transform duration-300 transform group-hover:translate-x-1' />
                                    </NavLink>
                                </li>
                            </ul>
                        )}
                    </div>
                </div>

                {/* Bottom Row: Terms & Privacy */}
                <div className="mt-12 flex flex-col sm:flex-row gap-8 text-center sm:text-left text-sm text-gray-500">
                    <NavLink to="/privacy-policy" className="hover:underline mb-4 sm:mb-0 text-lg text-gray-400">Privacy Policy</NavLink>
                    <NavLink to="/terms-of-service" className="hover:underline mb-4 sm:mb-0 text-lg text-gray-400">Terms of Service</NavLink>
                    <p className="hover:underline mb-4 sm:mb-0 text-lg text-gray-400">Cybrary, Inc. © 2024</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;