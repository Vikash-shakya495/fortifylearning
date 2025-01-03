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

function ServerSideRequest() {
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
                    OWASP Top 10 - A10:2021 - Server-Side Request Forgery (SSRF)
                    </h2>
                    <p className="text-gray-200 text-sm sm:text-base">
                    The OWASP Top 10 features the most critical web application security vulnerabilities. In this part, A10: Server-Side Request Forgery (SSRF), you'll learn to identify, exploit, and offer remediation advice for this vulnerability in a secure lab environment. Build your offensive security and penetration testing skills with this one-of-a-kind course!
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
                        {/* Header Section */}
                        <div
                            className="flex flex-col cursor-pointer border-b border-gray-600"
                            onClick={() => toggleContent(0)}
                        >
                            <div className='flex justify-between items-center mt-4 mb-4'>
                                <p className="text-lg">Domain 1: Mobile Devices</p>
                                <span
                                    className={`transform transition-transform duration-300 ${openIndex === 0 ? "rotate-180" : "rotate-0"}`}
                                >
                                    <IoIosArrowDown />
                                </span>
                            </div>
                            <ul
                                className={`mt-4 overflow-hidden transition-all duration-300 ${openIndex === 0 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                            >
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Course Introduction</span> <span>9m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Laptop Hardware</span> <span>12m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Laptop Display Components</span> <span>14m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Mobile Device Accessories and Ports</span> <span>16m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Mobile Device Connectivity</span> <span>13m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Mobile Device Applications</span> <span>15m</span></li>
                            </ul>
                        </div>
                        {/* Domain 2 */}
                        <div
                            className="flex flex-col cursor-pointer border-b border-gray-600"
                            onClick={() => toggleContent(1)}
                        >
                            <div className='flex justify-between items-center mt-4 mb-4'>
                                <p className="text-lg">Domain 2: Networking</p>
                                <span
                                    className={`transform transition-transform duration-300 ${openIndex === 1 ? "rotate-180" : "rotate-0"}`}
                                >
                                    <IoIosArrowDown />
                                </span>
                            </div>
                            <ul
                                className={`mt-4 overflow-hidden transition-all duration-300 ${openIndex === 1 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                            >
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>TCP/IP Basics</span> <span>13m</span></li>
                                <li className="pl-4 mb-4 flex text-gray- 400 justify-between"><span>TCP & UDP Protocols</span> <span>6m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Common Networking Hardware</span> <span>18m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Wireless Standards</span> <span>17m</span></li>
                          
                            </ul>
                        </div>
                        {/* Domain 3 */}

                    </div>
                    <div className='p-4 mt-12'>
                        <h1 className='text-4xl'>Course Description</h1>
                        <div className='mt-10'>
                            <h2 className='text-3xl'>CompTIA A+ Training Goals</h2>
                            <p className='text-gray-400 mt-4'>
                                By the end of this online CompTIA training course, you should be able to:
                            </p>
                            <ul className='text-gray-400 mt-2'>
                                <li>Identify types and characteristics of PC, laptop, and mobile components, including motherboard, CPU, memory, and storage, input, and output devices.</li>
                                <li>Install, configure, and troubleshoot peripheral devices, system components, print devices, wired and wireless LAN links, and internal access devices.</li>
                                <li>Configure and manage PC and mobile device network connectivity plus users, groups, and shared resources in a typical SOHO network.</li>
                            </ul>
                            <p className='text-gray-400 mt-4'>
                                The current information technology industry is booming – there is no better time to start your new IT career. Our A+ online course will help you put your best foot forward in the IT industry. And if you are already an IT professional, this course will validate your knowledge and enhance your career.
                            </p>
                            <p className='text-gray-400 mt-4'>
                                In our CompTIA A+ training, you will learn the basics of computer technology and repair, networking, installation of PCs, laptops, and other hardware, and configuration of PCs, laptops, and mobile operating systems for Android and Apple iOS devices.
                            </p>
                            <p className='text-gray-400 mt-4'>
                                The A+ course is the best beginner class of all the courses we offer, and it’s designed for anyone looking to begin an IT or cyber security career. Not only does it offer much-needed fundamentals of computer repair, maintenance, and technology, but it will also provide you with enough knowledge that you are able to make informed decisions about your IT career path and which future training programs to take.
                            </p>
                            <p className='text-gray-400 mt-4'>
                                You will learn the difference between careers in systems administration, network administration, cyber security, and many other specialized IT fields. That will make your next career step easy and enjoyable for you.
                            </p>
                            <p className='text-gray-400 mt-4'>
                                This A+ certification training covers all exam objectives, which will prepare you to take the certification exams. Successfully passing the CompTIA A+ certification exam means you will earn the highly reliable and trustworthy credentials that are recognized all over the world.
                            </p>
                        </div>
                        <div className='mt-10'>
                            <h2 className='text-3xl'>What are the Benefits of Completing CompTIA A+ Training?</h2>
                            <p className='text-gray-400 mt-4'>
                                Completing Cybrary’s CompTIA A+ online course will not only prepare you for getting your foot in the door of nearly any IT position, but it also has many other benefits – especially when you go on to receive your A+ certification. Some of those benefits include:
                            </p>
                            <ul className='text-gray-400 mt-2'>
                                <li>Comprehensive and Vendor-Neutral Knowledge – IT professionals who are A+ certified will have a mastery of the technologies that are found in many IT environments.</li>
                                <li>Trusted by Hiring Employers – Employers of all types need IT professionals within their companies, and they trust A+ certified professionals to maintain the operations of their computer systems.</li>
                                <li>Global Recognition – A+ certification is recognized internationally and is compliant with standards that are approved by the U.S. Department of Defense.</li>
                                <li>Validation of Fundamental Skills – A+ certified professionals are well-versed in the troubleshooting, security, and networking skills that prepare them for many IT professions.</li>
                            </ul>
                        </div>
                        <div className='mt-10'>
                            <h2 className='text-3xl'>For Which Careers Does CompTIA A+ Certification Course Prepare Someone?</h2>
                            <p className='text-gray-400 mt-4'>
                                CompTIA A+ certification training ensures that you are ready to work in several IT services positions for many companies and organizations. It’s a reliable way that potential employers can assess the knowledge and skill levels of prospective employees.
                            </p>
                    
                            <p className='text-gray-400 mt-4'>
                                Organizations like Lenovo, Dell, Canon, Hewlett Packard, Intel, the United States Department of Defense, and others are looking for CompTIA A+ certified candidates for their IT needs. They understand that this certification means that they are looking at a candidate who is competent to succeed in a host of IT roles for their business.
                            </p>
                       
                        </div>
                        <div className='mt-10'>
                            <h2 className='text-3xl'>What Does the CompTIA A+ Certification Process Entail?</h2>
                            <p className='text-gray-400 mt-4'>
                                Once you have completed your CompTIA A+ online course, you are ready to proceed to your CompTIA A+ exams. For a small fee, you will take two separate exams for your CompTIA A+ certification, given by the Computing Technology Industry Association (CompTIA).
                            </p>
                            <p className='text-gray-400 mt-4'>
                                The first exam, CompTIA A+ 220-1101, includes questions regarding PC and mobile device hardware and peripherals, network maintenance and installation, troubleshooting connectivity, computer hardware, virtualization, cloud computing, and operating systems.
                            </p>
                          
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

export default ServerSideRequest;