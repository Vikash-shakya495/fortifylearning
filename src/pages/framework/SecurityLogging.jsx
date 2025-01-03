import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
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

function SecurityLogging() {
    const [openIndex, setOpenIndex] = useState(null);
    const dispatch = useDispatch();
    const url = `${location.origin}${location.pathname}`;
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
                        OWASP Top 10 - A09:2021 - Security Logging and Monitoring Failures
                    </h2>
                    <p className="text-gray-200 text-sm sm:text-base">
                        The OWASP Top 10 features the most critical web application security vulnerabilities. In this part, A09: Security Logging and Monitoring Failures, you'll take advice from a trusted offensive security professional on how to implement best practices for developing security logging and monitoring solutions at your organization.
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
                        {/* A09-Security Logging and Monitoring Failures Section */}
                        <div
                            className="flex flex-col cursor-pointer border-b border-gray-600"
                            onClick={() => toggleContent(0)}
                        >
                            <div className='flex justify-between items-center mt-4 mb-4'>
                                <p className="text-lg">A09-Security Logging and Monitoring Failures</p>
                                <span
                                    className={`transform transition-transform duration-300 ${openIndex === 0 ? "rotate-180" : "rotate-0"}`}
                                >
                                    <IoIosArrowDown />
                                </span>
                            </div>
                            <ul
                                className={`mt-4 overflow-hidden transition-all duration-300 ${openIndex === 0 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                            >
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Overview: Security Logging and Monitoring Failures</span> <span>5m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Understanding Security Logging and Monitoring Failures</span> <span>7m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Demo: Security Logging and Monitoring Failures</span> <span>4m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Scenario: The OPM Hack</span> <span>15m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Lab: OWASP Mutillidae Practice</span> <span>30m</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className='p-4 mt-12'>
                        <h1 className='text-4xl'>Course Description</h1>
                        <div className='mt-10'>
                            <p className='text-gray-400 mt-4'>
                                Our newest OWASP courses contain exclusive content updates for the September 2021 version of the OWASP Top 10 list.
                            </p>
                        </div>
                        <div className='mt-10'>
                            <h2 className='text-3xl'>OWASP Top 10 - A09:2021 - Security Logging and Monitoring Failures</h2>
                            <p className='text-gray-400 mt-4'>
                                In the A09: Security Logging and Monitoring Failures course, you’ll be introduced to this revised category on the OWASP Top 10 list, which was renamed from Insufficient Logging and Monitoring. Learn about all of the new types of failures included in this category and what the CVE/CVSS data shows us. Discover how adversaries can take advantage of security logging and monitoring failures to gain access to sensitive data, which is why strong log analysis and detection tools are important. Research on this category reveals a need for organizations to develop best practices and incident response plans that sufficiently consider security logging and monitoring failures.
                            </p>
                        </div>
                        <div className='mt-10'>
                            <h2 className='text-3xl'>Who should take this course?</h2>
                            <p className='text-gray-400 mt-4'>
                                Our OWASP Top 10 course is designed for someone who is a seasoned offensive security professional, SOC analyst, or Windows system administrator who wants to know how to exploit and protect against the latest vulnerabilities impacting enterprise systems.
                            </p>
                        </div>
                        <div className='mt-10'>
                            <h2 className='text-3xl'>What are the prerequisites for this course?</h2>
                            <p className='text-gray-400 mt-4'>
                                You will gain the most benefit from this course if you have a basic understanding of: web applications, programming languages, web browsers, and web application hacking.
                            </p>
                        </div>
                        <div className='mt-10'>
                            <h2 className='text-3xl'>Why should I take this course?</h2>
                            <p className='text-gray-400 mt-4'>
                                The Open Web Application Security Project (OWASP) is a non-profit organization focused on web security. The OWASP Top 10 features the most critical web application security vulnerabilities. Our course gives you the knowledge needed to identify, exploit, and offer remediation suggestions for these vulnerabilities.
                            </p>
                        </div>
                        <div className='mt-10'>
                            <h2 className='text-3xl'>What makes this course different from other courses on similar topics?</h2>
                            <p className='text-gray-400 mt-4'>
                                This course is available on the Cybrary platform in a series of installments. Along with an introductory module, each of the subsequent 10 modules are contained separately as installments of the course series. The multimodal design allows for more self-paced, customizable learning. Our on-demand format affords you the flexibility to learn at your own pace.
                            </p>
                            <p className='text-gray-400 mt-4'>
                                This course was developed by Clint Kehr, who is a senior technical manager for a financial services company’s Responsible Disclosure Team, where he interacts with ethical hackers who find vulnerabilities in the company’s infrastructure. Clint is a former Special Agent with the Department of Justice where he specialized in internet investigations and conducted numerous cases on cyber threat actors on the surface, deep, and dark web, resulting in Clint earning the Attorney General’s Distinguished Service Award. Clint has trained over 1,000 law enforcement officers, prosecutors, and civilians on the dark web and dark market websites. Clint has a master’s degree in intelligence studies from American Military University, where he graduated with honors. He also has a master’s degree in Information Technology from Carnegie Mellon University, where he graduated with highest distinction. As a former Navy Reserve Officer, Clint served in many roles, such as a division officer and department head for commands in the information warfare community.
                            </p>
                        </div>
                        <div className='mt-10'>
                            <h2 className='text-3xl'>Why should I take this course on Cybrary and not somewhere else?</h2>
                            <p className='text-gray-400 mt-4'>
                                Cybrary is the first cybersecurity education platform to release exclusive, updated course content for the new OWASP Top 10 list that was released on September 24th, 2021. The list has been significantly revised since the release of the last 2017 top 10 list, as the new list combines, reorders, and adds new web application vulnerabilities. OWASP has focused on more data-centered research in their creation of the new top 10 list.
                            </p>
                            <p className='text-gray-400 mt-4'>
                                Our OWASP courses are lightly theoretical and heavily hands-on. We keep the lectures short and give you the tools and secure virtual environments where you will enjoy capture-the-flag style training exercises. These labs allow you to actively practice and demonstrate your skills in penetration testing. Our courses make you better prepared for handling security incidents in the real world.
                            </p>
                        </div>
                        <div className='mt-10'>
                            <h2 className='text-3xl'>This Cybrary OWASP Top 10 (2021) course includes:</h2>
                            <ul className='text-gray-400 mt-2'>
                                <li>Engaging video overview lessons that summarize each category and list of CVEs covered, as well as describe how the category in the 2021 list is distinctive from how the category was presented in the 2017 list.</li>
                                <li>Written scenarios that highlight the relevance of the OWASP Top 10 web application vulnerabilities in real-world ransomware attacks and data breaches, including the 2015 U.S. Office of Personnel Management data breach, the 2021 Colonial Pipeline Hack, and the 2017 Equifax Breach. You will gain insights of the history and significance of these incidents, as well as learn the tactics and techniques used by adversaries.</li>
                                <li>A custom virtual lab environment where you can practice the skills you've learned using the OWASP Mutillidae web application.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='w-full lg:w-1/3'>
                    <div className='mt-16 lg:mt-24 text-xl lg:text-2xl'>
                        <h1>Instructed by</h1>
                    </div>
                    <div className='p-8 flex items-center gap-4 border bg-slate-900 rounded-xl mt-12'>
                        <img className='w-1/3 rounded-full' src="https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468bfb5fcf04101cf88673c_Screen_Shot_2022-08-26_at_12.50.00_PM.png" alt="" />
                        <div className='w-2/3 '>
                            <h2 className='text-lg text-center lg:text-xl bg-gradient-to-r from-red-600 via-pink-500 to-fuchsia-700 rounded-xl p-1'>Senior Instructor</h2>
                            <p className='text-xl mt-4'>Matthew Mullins</p>
                            <p className='mt-2 text-gray-400 line-clamp-3'>Matt has led multiple Red Team engagements, ranging from a few weeks to a year and covering multiple security domains. Outside of Red Teaming, Matt is also a seasoned penetration tester with interests in: AppSec, OSINT, Hardware, Wifi, Social Engineering, and Physical Security. Matt has a Master's degree in Information Assurance and an exhaustive number of certifications ranging from frameworks, management, and hands-on hacking. Matt is a Technical SME at Cybrary, focusing on Adversarial Emulation and Red Teaming for course content.</p>
                        </div>
                    </div>
                    <div className='p-8 flex items-center gap-4 border bg-slate-900 rounded-xl mt-12'>
                        <img className='w-1/3 rounded-full' src="https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468bfbf1f5ef0847b92625b_Owen_Dubiel_Headshot.png" alt="" />
                        <div className='w-2/3 '>
                            <h2 className='text-lg text-center lg:text-xl bg-gradient-to-r from-red-600 via-pink-500 to-fuchsia-700 rounded-xl p-1'>Senior Instructor</h2>
                            <p className='text-xl mt-4'>Owen Dubiel</p>
                            <p className='mt-2 text-gray-400 line-clamp-3'>Owen is certified in the GIAC GSEC, CompTIA CySA+, and various other vendor-related certifications. He works both as a technical security engineer and as an SME architect instructor in his spare time. Spreading the word of cyber security is a passion of his. Owen lives in Southeast Michigan with his beautiful wife, daughter, and his dog, Thor. In his free time, Owen enjoys watching sports and movies, and spending time with his family.</p>
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

export default SecurityLogging;