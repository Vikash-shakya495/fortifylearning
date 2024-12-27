import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { togglePopup } from '../../store/signupPopupSlice';
import SignupPopup from '../../loginSystem/SignupPopup';
import { FiShare2 } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { TbPointFilled } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import FortifyLearningLogo from '../../assets/fortifyLearning.png';

function MitreAttackFramework() {
    const [openIndex, setOpenIndex] = useState(null);
    const dispatch = useDispatch();
    const url = 'https://www.cybrary.it/career-path/network-engineer';
    const [showPopup, setShowPopup] = useState(false);

    const toggleContent = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const sharePopup = () => {
        setShowPopup(!showPopup);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(url)
            .then(() => {
                alert('Link copied to clipboard!');
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    };

    return (
        <div className='mt-44 md:w-full'>
            <div className="flex flex-col md:flex-row items-center justify-center w-full text-white py-8 px-6 sm:px-12 lg:px-36 gap-8 lg:gap-8">
                {/* Left Section */}
                <div className="w-full md:w-1/2 text-center md:text-left flex flex-col">
                    <h2 className="text-2xl sm:text-3xl md:mb-6 lg:mb-4 md:text-4xl lg:text-6xl mt-4">
                        Application of the MITRE ATT&CK Framework
                    </h2>
                    <p className="text-gray-200 text-sm sm:text-base">
                        This MITRE ATT&CK training is designed to teach students how to apply the matrix to help mitigate current threats. Students will move through the 12 core areas of the framework to develop a thorough understanding of various access ATT&CK vectors.
                    </p>
                    <div className="flex items-center text-sm sm:text-base text-gray-500 mt-4 gap-2 justify-center md:justify-start">
                        <FiShare2 className="text-lg sm:text-2xl text-gray-400" />
                        <button onClick={sharePopup} className="text-gray-500">
                            Share
                        </button>
                    </div>
                    <div className="flex flex-col md:flex-row items-center mt-4 gap-4 justify-center md:justify-start">
                        <button
                            onClick={() => dispatch(togglePopup())}
                            className="w-full md:w-1/4 py-3 bg-gradient-to-r from-red-500 via-pink-500 to-fuchsia-500 rounded-2xl text-white font-semibold hover:shadow-[0px_0px_10px_purple,0px_0px_10px_#FF4D6D] duration-500"
                        >
                            Enroll Now
                        </button>
                        <NavLink to="/business">
                            <button className="px-4 md:px-6 py-3 md:py-4 rounded-xl bg-black flex items-center gap-4 text-sm sm:text-base">
                                Need to train your team? Learn more <FaArrowRight />
                            </button>
                        </NavLink>
                    </div>
                    {showPopup && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <div className="bg-gray-900 p-6 sm:p -8 flex flex-col gap-6 rounded-lg">
                                <h3 className="text-2xl sm:text-3xl flex items-center justify-between">
                                    <span>Share</span>
                                    <button onClick={sharePopup} className="text-white">
                                        <RxCross2 />
                                    </button>
                                </h3>
                                <div className="flex gap-4">
                                    <button className="border p-3 rounded-full">
                                        <FaFacebookSquare className="text-2xl sm:text-3xl text-white" />
                                    </button>
                                    <button className="border p-3 rounded-full">
                                        <FaSquareTwitter className="text-2xl sm:text-3xl text-white" />
                                    </button>
                                    <button className="border p-3 rounded-full">
                                        <BsLinkedin className="text-2xl sm:text-3xl text-white" />
                                    </button>
                                    <button className="border p-3 rounded-full">
                                        <MdOutlineMarkEmailRead className="text-2xl sm:text-3xl text-white" />
                                    </button>
                                </div>
                                <div className="flex items-center gap-4">
                                    <input
                                        type="text"
                                        readOnly
                                        value={url}
                                        className="bg-gray-900 border border-gray-500 px-4 py-2 text-white rounded w-2/3"
                                    />
                                    <button
                                        onClick={copyToClipboard}
                                        className="bg-purple-600 py-2 px-2 w-1/3 rounded-lg text-white hover:bg-purple-700"
                                    >
                                        Copy Link
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Right Section */}
                <div className="bg-white text-black p-6 sm:p-8 rounded-3xl shadow-lg w-full md:w-1/2 h-auto max-w-lg mx-auto">
                    <h2 className="text-2xl md:text-3xl mb-4 sm:mb-6">
                        Create a free account to start exploring the platform.
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 w-full items-center border border-gray-600 px-3 py-2 mb-6 rounded-3xl">
                        <input
                            type="email"
                            placeholder="name@email.com"
                            className="w-full p-2 text-sm sm:text-base placeholder-gray-400 focus:outline-none"
                        />
                        <button
                            onClick={() => dispatch(togglePopup())}
                            className="w-1/2 sm:w-auto py-2 sm:py-2 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl text-white font-semibold hover:shadow-[0px_0px_10px_purple,0px_0px_10px_#FF4D6D] duration-500"
                        >
                            Create a Free Account
                        </button>
                    </div>
                    <SignupPopup />
                    <div className="flex flex-col sm:flex-row justify-around items-center mt-6 gap-4">
                        <span className="text-gray-600">or sign up with</span>
                        <div className="flex gap-4">
                            <button
                                onClick={() => window.location.href = 'https://google.com'}
                                className="w-12 h-12 border border-black p-1 rounded flex items-center justify-center"
                                aria-label="Sign up with Google"
                            >
                                <img src="https://lh3.googleusercontent.com/qnaJEbFIpvsWJm2KrRI_GIvz1yZdXntgEsCZxy-1pVZi244bCk1RFwdk0ZBRmmvdHiUl6sIa_tsmskL5WLKiigp2AMsIIxinOJNf39qCmacViRGXIOY" alt="Google" />
                            </button>
                            <button
                                onClick={() => window.location.href = 'https://apple.com'}
                                className="w-12 h-12 border border-black p-1 rounded flex items-center justify-center"
                                aria-label="Sign up with Apple"
                            >
                                <img src="https://static.vecteezy.com/system/resources/previews/019/136/322/non_2x/amazon-logo-amazon-icon-free-free-vector.jpg" alt="Apple" />
                            </button>
                            <button
                                onClick={() => window.location.href = 'https://microsoft.com'}
                                className="w-12 h-12 border border-black p-1 rounded flex items-center justify-center"
                                aria-label="Sign up with Microsoft"
                            >
                                <img src="https://static-00.iconduck.com/assets.00/microsoft-icon-1024x1024-5w26drb6.png" alt="Microsoft" />
                            </button>
                        </div>
                    </div>
                    <div className="w-full flex flex-col sm:flex-row justify-between text-lg p-6 mt-8 border-t gap-4">
                        <NavLink to="/signup" className="hover:underline">
                            Sign in
                        </NavLink>
                        <NavLink to="/sso-options" className="hover:underline">
                            View all SSO options
                        </NavLink>
                    </div>
                </div>
            </div>

            <div className='flex flex-col-reverse lg:flex-row mx-auto mt-32 w-11/12 lg:w-4/5 p-4 gap-12'>
                <div className='w-full lg:w-2/3'>
                    <div className='flex flex-wrap gap-20 mt-16'>
                        <div className='flex flex-col items-center gap-2'>
                            <h1 className='text-2xl lg:text-3xl'>1H 5M</h1>
                            <span className='text-gray-400 font-semibold'>TIME</span>
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <h1 className='text-2xl lg:text-3xl'>Intermediate</h1>
                            <span className='text-gray-400 font-semibold'>DIFFICULTY</span>
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <h1 className='text-2xl lg:text-3xl'>1</h1>
                            <span className='text-gray-400 font-semibold'>CEU/CPE</span>
                        </div>
                    </div>
                    <div className="bg-black text-white p-4 mt-20">
                        <h2 className="text-3xl font-bold mb-4">Course Content</h2>
                        {/* Course Introduction */}
                        <div
                            className="flex flex-col cursor-pointer border-b border-gray-600"
                            onClick={() => toggleContent(0)}
                        >
                            <div className='flex justify-between items-center mt-4 mb-4'>
                                <p className="text-lg">Course Introduction</p>
                                <span
                                    className={`transform transition-transform duration-300 ${openIndex === 0 ? "rotate-180" : "rotate-0"}`}
                                >
                                    <IoIosArrowDown />
                                </span>
                            </div>
                            <ul
                                className={`mt-4 overflow-hidden transition-all duration-300 ${openIndex === 0 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                            >
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Course Overview</span> <span>3m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>What is the MITRE ATT&CK Framework?</span> <span>7m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Where is the MITRE ATT&CK Framework Being Used?</span> <span>10m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Navigation and Review</span> <span>9m</span></li>
                            </ul>
                        </div>

                        {/* Initial Access */}
                        <div
                            className="flex flex-col cursor-pointer border-b border-gray-600"
                            onClick={() => toggleContent(1)}
                        >
                            <div className='flex justify-between items-center mt-4 mb-4'>
                                <p className="text-lg">Initial Access</p>
                                <span
                                    className={`transform transition-transform duration-300 ${openIndex === 1 ? "rotate-180" : "rotate-0"}`}
                                >
                                    <IoIosArrowDown />
                                </span>
                            </div>
                            <ul
                                className={`mt-4 overflow-hidden transition-all duration-300 ${openIndex === 1 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                            >
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>What is Initial Access?</span> <span>5m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>External Remote Services</span> <span>12m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Spearphishing Link</span> <span>11m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Supply Chain Compromise Part 1</span> <span>7m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Supply Chain Compromise Part 2</span> <span>8m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Trusted Relationship</span> <span>14m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Valid Accounts Part 1</span> <span>8m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Valid Accounts Part 2</span> <span>7m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Initial Access Case Study</span> <span>5m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Module 2 Summary</span> <span>5m</span></li>
                            </ul>
                        </div>

                        {/* Execution */}
                        <div
                            className="flex flex-col cursor-pointer border-b border-gray-600"
                            onClick={() => toggleContent(2)}
                        >
                            <div className='flex justify-between items-center mt-4 mb-4'>
                                <p className="text-lg">Execution</p>
                                <span
                                    className={`transform transition-transform duration-300 ${openIndex === 2 ? "rotate-180" : "rotate-0"}`}
                                >
                                    <IoIosArrowDown />
                                </span>
                            </div>
                            <ul
                                className={`mt-4 overflow-hidden transition-all duration-300 ${openIndex === 2 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                            >
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>What is Execution?</span> <span>2m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Command Line Interface</span> <span>10m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Execution Through API</span> <span>7m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Control Panel Items</span> <span>10m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Powershell</span> <span>10m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Scripting</span> <span>10m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>User Execution</span> <span>10m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Execution Case Study</span> <span>7m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Module 3 Summary</span> <span>5m</span></li>
                            </ul>
                        </div>

                        {/* Persistence */}
                        <div
                            className="flex flex-col cursor-pointer border-b border-gray-600"
                            onClick={() => toggleContent(3)}
                        >
                            <div className='flex justify-between items-center mt-4 mb-4'>
                                <p className="text-lg">Persistence</p>
                                <span
                                    className={`transform transition-transform duration-300 ${openIndex === 3 ? "rotate-180" : "rotate-0"}`}
                                >
                                    <IoIosArrowDown />
                                </span>
                            </div>
                            <ul
                                className={`mt-4 overflow-hidden transition-all duration-300 ${openIndex === 3 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                            >
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>What is Persistence?</span> <span>2m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Accessibility Features</span> <span>10m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Bootkit</span> <span>9m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Browser Extension</span> <span>10m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Component Firmware</span> <span>8m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Create Account</span> <span>10m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Hooking</span> <span>4m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>New Service</span> <span>7m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Persistence Case Study</span> <span>5m</span>
                                </li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Module 4 Summary</span> <span>2m</span></li>
                            </ul>
                        </div>

                        {/* Privilege Escalation */}
                        <div
                            className="flex flex-col cursor-pointer border-b border-gray-600"
                            onClick={() => toggleContent(4)}
                        >
                            <div className='flex justify-between items-center mt-4 mb-4'>
                                <p className="text-lg">Privilege Escalation</p>
                                <span
                                    className={`transform transition-transform duration-300 ${openIndex === 4 ? "rotate-180" : "rotate-0"}`}
                                >
                                    <IoIosArrowDown />
                                </span>
                            </div>
                            <ul
                                className={`mt-4 overflow-hidden transition-all duration-300 ${openIndex === 4 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                            >
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>What is Privilege Escalation?</span> <span>2m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Access Token Manipulation</span> <span>8m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Elevation Escalation with Prompt</span> <span>6m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Exploitation for Privilege Escalation</span> <span>9m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>File System Permission Weakness</span> <span>6m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Scheduled Task</span> <span>7m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Sudo</span> <span>7m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Web Shell</span> <span>10m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Privilege Escalation Case Study</span> <span>8m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Module 5 Summary</span> <span>2m</span></li>
                            </ul>
                        </div>

                        {/* Defense Evasion */}
                        <div
                            className="flex flex-col cursor-pointer border-b border-gray-600"
                            onClick={() => toggleContent(5)}
                        >
                            <div className='flex justify-between items-center mt-4 mb-4'>
                                <p className="text-lg">Defense Evasion</p>
                                <span
                                    className={`transform transition-transform duration-300 ${openIndex === 5 ? "rotate-180" : "rotate-0"}`}
                                >
                                    <IoIosArrowDown />
                                </span>
                            </div>
                            <ul
                                className={`mt-4 overflow-hidden transition-all duration-300 ${openIndex === 5 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                            >
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>What is Defense Evasion?</span> <span>2m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Clear Command History</span> <span>6m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Compile After Delivery</span> <span>7m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Disabling Security Tools</span> <span>4m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Hidden Files and Directories</span> <span>5m</span></li>

                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Hidden Users</span> <span>4m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Process Hollowing</span> <span>6m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Software Packing</span> <span>5m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Defense Evasion Case Study</span> <span>7m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Module 6 Summary</span> <span>2m</span></li>
                            </ul>
                        </div>

                        {/* Credential Access */}
                        <div
                            className="flex flex-col cursor-pointer border-b border-gray-600"
                            onClick={() => toggleContent(6)}
                        >
                            <div className='flex justify-between items-center mt-4 mb-4'>
                                <p className="text-lg">Credential Access</p>
                                <span
                                    className={`transform transition-transform duration-300 ${openIndex === 6 ? "rotate-180" : "rotate-0"}`}
                                >
                                    <IoIosArrowDown />
                                </span>
                            </div>
                            <ul
                                className={`mt-4 overflow-hidden transition-all duration-300 ${openIndex === 6 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                            >
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>What is Credential Access?</span> <span>1m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Bash History</span> <span>4m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Brute Forces</span> <span>7m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Credential Dumping</span> <span>4m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Steal Web Session Cookie</span> <span>4m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Credential Access Case Study</span> <span>4m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Module 7 Summary</span> <span>1m</span></li>
                            </ul>
                        </div>

                        {/* Discovery */}
                        <div
                            className="flex flex-col cursor-pointer border-b border-gray-600"
                            onClick={() => toggleContent(7)}
                        >
                            <div className='flex justify-between items-center mt-4 mb-4'>
                                <p className="text-lg">Discovery</p>
                                <span
                                    className={`transform transition-transform duration-300 ${openIndex === 7 ? "rotate-180" : "rotate-0"}`}
                                >
                                    <IoIosArrowDown />
                                </span>
                            </div>
                            <ul
                                className={`mt-4 overflow-hidden transition-all duration-300 ${openIndex === 7 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                            >
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>What is Discovery?</span> <span>2m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Account Discovery</span> <span>5m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Browser Bookmark Discovery</span> <span>8m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>System Owner/User Discovery</span> <span>4m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Discovery Case Study</span> <span>4m</span></li>

                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Module 8 Summary</span> <span>1m</span></li>
                            </ul>
                        </div>

                        {/* Lateral Movement */}
                        <div
                            className="flex flex-col cursor-pointer border-b border-gray-600"
                            onClick={() => toggleContent(8)}
                        >
                            <div className='flex justify-between items-center mt-4 mb-4'>
                                <p className="text-lg">Lateral Movement</p>
                                <span
                                    className={`transform transition-transform duration-300 ${openIndex === 8 ? "rotate-180" : "rotate-0"}`}
                                >
                                    <IoIosArrowDown />
                                </span>
                            </div>
                            <ul
                                className={`mt-4 overflow-hidden transition-all duration-300 ${openIndex === 8 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                            >
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>What is Lateral Movement?</span> <span>1m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Application Deployment Software</span> <span>5m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Exploitation of Remote Services</span> <span>8m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>SSH Hijacking</span> <span>5m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Lateral Movement Case Study</span> <span>7m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Module 9 Summary</span> <span>1m</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className='p-4 mt-12'>
                        <h1 className='text-4xl'>Course Description</h1>
                        <div className='mt-10'>
                            <h2 className='text-3xl'>MITRE ATT&CK Framework Overview</h2>
                            <p className='text-gray-400 mt-4'>
                                In this course, we will move through the 14 areas of the MITRE Attack Framework and discuss how security professionals should use the matrix to assist them in overlaying solutions or controls to address current threats.
                            </p>
                            <p className='text-gray-400 mt-4'>
                                The MITRE Attack Framework is a globally accessible knowledge base of tactics and techniques provided from real-world observations. Using the attack framework, a security consultant or blue team member can formulate a strategy for reducing risk in both the public and private sectors.
                            </p>
                            <p className='text-gray-400 mt-4'>
                                Since the methods of attack change regularly, this course is going to focus on examples for several of the attack types in each section and applicable mitigation tactics. These principles can then be applied across the entire framework whether you are looking at adding a security solution to your current stack or are doing research on known attack vectors for academic purposes.
                            </p>
                        </div>
                        <div className='mt-10'>
                            <h2 className='text-3xl'>Prerequisites</h2>
                            <ul className='text-gray-400 mt-2'>
                                <li>Basic cyber defense technical terminology understanding</li>
                                <li>Basic terminology in association with controls</li>
                                <li>Basic terminology in association with risk reduction</li>
                            </ul>
                        </div>
                        <div className='mt-10'>
                            <h2 className='text-3xl'>Course Goals</h2>
                            <p className='text-gray-400 mt-4'>
                                By the end of the course, students should be able to understand how to defend against the adversarial tactics of:
                            </p>
                            <ul className='text-gray-400 mt-2'>
                                <li>Reconnaissance</li>
                                <li>Resource Development</li>
                                <li>Initial Access</li>
                                <li>Execution</li>
                                <li>Persistence</li>
                                <li>Privilege Escalation</li>
                                <li>Defense Evasion</li>
                                <li>Credential Access</li>
                                <li>Discovery</li>
                                <li>Lateral Movement</li>
                                <li>Collection</li>
                                <li>Command and Control</li>
                                <li>Exfiltration</li>
                                <li>Impact</li>
                            </ul>
                        </div>
                        <div className='mt-10'>
                            <h2 className='text-3xl'>What is the MITRE ATT&CK Framework?</h2>
                            <p className='text-gray-400 mt-4'>
                                MITRE ATT&CK was created as a model used to document and track a variety of different techniques that attackers use during the phases of a cyberattack to break into an organization’s network and obtain sensitive data.
                            </p>
                            <p className='text-gray-400 mt-4'>
                                ATT&CK is an acronym for Adversarial Tactics, Techniques, and Common Knowledge. Essentially, the framework is a matrix of those techniques sorted by different tactics. It includes different matrices for Windows, Mac, LINUX, and mobile systems. The framework is used by various IT professionals including red teamers, threat hunters, and defenders to help classify attacks and assess a company’s risk.
                            </p>
                            <p className='text-gray-400 mt-4'>
                                MITRE ATT&CK was launched in 2013 and has since become one of the most respected and used resources in cybersecurity. It’s an essential tool for professionals in the IT industry to be familiar with ATT&CK.
                            </p>
                        </div>
                        <div className='mt-10'>
                            <h2 className='text-3xl'>What is Involved in the MITRE ATT&CK Training?</h2>
                            <p className='text-gray-400 mt-4'>
                                In this application of the MITRE ATTACK Training Course, students will learn how to use the framework to reduce security risks to their organizations. The course will focus on breaking down several types of attacks and learning methods and tactics to mitigate those threats. ```javascript
                                The current framework of ATT&CK includes 12 tactics, each of which has numerous techniques.
                            </p>
                            <p className='text-gray-400 mt-4'>
                                When completed with this course, students will have the skills to understand primary access ATT&CK vectors, including:
                            </p>
                            <ul className='text-gray-400 mt-2'>
                                <li>Spear Phishing Link</li>
                                <li>Drive-by Compromise</li>
                                <li>Supply Chain Compromise</li>
                                <li>Trusted Relationship</li>
                            </ul>
                            <p className='text-gray-400 mt-4'>
                                Students who enroll in this MITRE ATTACK training should have an understanding of basic technical terminology, basic terminology in association with controls, and basic terminology in association with risk reduction. There are no other requirements for this beginner level course.
                            </p>
                            <p className='text-gray-400 mt-4'>
                                In this course, students will earn 10 CEU/CPE and will receive a Mitre Att&ck Certificate of Completion when finished with the class.
                            </p>
                        </div>
                        <div className='mt-10'>
                            <h2 className='text-3xl'>How is the MITRE ATT&CK Framework Used?</h2>
                            <p className='text-gray-400 mt-4'>
                                The MITRE ATT&CK framework, a staple of the security community, works by organizing the steps that cyber attackers take to infiltrate networks, compromise hosts, escalate privileges, move without detection, and ultimately, obtain important data. Cybersecurity teams can better test, develop, and prioritize their current means of detection and response to be relevant to their organizations’ business, industry, and intellectual property.
                            </p>
                        </div>
                        <div className='mt-10'>
                            <h2 className='text-3xl'>Why Is Understanding the MITRE ATT&CK Framework Important in IT?</h2>
                            <p className='text-gray-400 mt-4'>
                                MITRE ATT&CK is a framework that has been around for a number of years, but it’s fairly recently that it’s become a universal tool. It’s important in the IT industry because it’s very effective at helping organizations, government agencies, and end users share cyberthreat intelligence. Of course, there are other means through which intelligence like this is shared, what sets ATT&CK apart is that it uses a common language that is standardized and accessible worldwide.
                            </p>
                            <p className='text-gray-400 mt-4'>
                                Another benefit of using the ATT&CK framework is that it allows defenders and analysts to work together with information to compare and contrast different threat groups. Analysts are able to structure intelligence based on behavior and defenders can structure information based on behavior. Together they are able to detect and mitigate threats.
                            </p>
                            <p className='text-gray-400 mt-4'>
                                Additionally, users are able to understand adversaries and how they operate on a deeper level – the steps that they will use to infiltrate networks and obtain the data they are after. This means that defenders don’t necessarily have to focus only on defensive tactics, but also have to have a good understanding of how the offense is working. That will allow cybersecurity professionals to better defend their networks and systems.
                            </p>
                        </div>
                        <div className='mt-10'>
                            <h2 className='text-3xl'>What Is the Best Way to Learn about MITRE ATT&CK Framework?</h2>
                            <p className='text-gray-400 mt-4'>
                                The MITRE ATT&CK framework is an important and widely used tool for cybersecurity professionals. It’s a means for sharing intelligence with the goal of reducing the risk of cyberattacks for organizations. Learning about the ATT&CK framework is essential for IT and cybersecurity professionals to stay up to date in their industry and ahead of the bad guys.
                            </p>
                            <p className='text-gray-400 mt-4'>
                                It’s best to learn about MITRE ATTACK from experts who use it, like Cybrary’s excellent instructors. All of the courses in our extensive library are self-paced, making them convenient for all students. If you’re interested in learning more about the MITRE ATT&CK framework, enrolling in our Application of the MITRE ATTACK Framework training is a great place to start. Enrolling is easy, just click the Register button at the top right of this screen to get started.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='w-full lg:w-1/3'>
                    <div className='mt-16 lg:mt-24'>
                        <h1 className='text-lg text-center mb-6'>This course is part of a Career Path:</h1>
                        <div className='bg-gray-950'>

                            <img src="https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64822a6d202fb8796bdf3d40_BecomeAnIncidentHandler-p-500.png" alt="" />
                            <h2 className='p-4 text-center text-xl'>Incident Handler</h2>
                        </div>
                    </div>
                    <div className='mt-16 lg:mt-24 text-xl lg:text-2xl'>
                        <h1>Instructed by</h1>
                    </div>
                    <div className='p-8 flex items-center gap-4 border bg-slate-900 rounded-xl mt-12'>
                        <LiaChalkboardTeacherSolid className='w-1/3 text-3xl lg:text-6xl' />
                        <div className='w-2/3 text-center'>
                            <h2 className='text-lg lg:text-xl bg-gradient-to-r from-red-600 via-pink-500 to-fuchsia-700 rounded-xl p-1'>Instructor</h2>
                            <p className='text-xl mt-4'>Raymond Evans</p>
                        </div>
                    </div>
                    <div className='flex flex-col mt-12'>
                        <h1 className='text-2xl font-semibold'>Provider</h1>
                        <img src={FortifyLearningLogo} className='w-[200px]' alt="" />
                    </div>
                    <div className='mt-12'>
                        <h1 className='text-2xl font-semibold'>Certificate of Completion</h1>
                        <img className='mt-6' src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/646f4845f85ad0cd7e7ed522_image%2022-p-500.webp" alt="" />
                        <p className='text-center text-gray-400 mt-8'>Complete this entire course to earn a CVE Series: Grafana Directory Traversal (CVE-2021-43798) Certificate of Completion</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MitreAttackFramework;