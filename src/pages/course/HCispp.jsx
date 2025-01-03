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

function HCispp() {
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
                    <button className='bg-gradient-to-r from-red-500 to-fuchsia-500 h-10 w-20 rounded-2xl'>Free</button>
                    <h2 className="text-2xl sm:text-3xl md:mb-6 lg:mb-4 md:text-4xl lg:text-6xl mt-4">
                        HCISPP
                    </h2>
                    <p className="text-gray-200 text-lg ">
                        As our healthcare industry grows, so do the risks associated with keeping health information secure. The HCISPP certification is ideal for security professionals responsible for safeguarding protected health information (PHI). Take this HCISPP training course to prepare to manage and implement security controls for healthcare information.
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
                            className="w-1/2 sm:w-auto py-2 sm:py-2 px-8 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl text-white font-semibold hover:shadow-[0px_0px_10px_purple,0px_0px_10px_#FF4D6D] duration-500"
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
                            <h1 className='text-2xl lg:text-3xl'>5H 29M</h1>
                            <span className='text-gray-400 font-semibold'>TIME</span>
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <h1 className='text-2xl lg:text-3xl'>Intermediate</h1>
                            <span className='text-gray-400 font-semibold'>DIFFICULTY</span>
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <h1 className='text-2xl lg:text-3xl'>6</h1>
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
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Network Services</span> <span>15m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>SOHO Networks</span> <span>13m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Common Network Configuration Concepts</span> <span>20m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Internet and Network Connection Types</span> <span>16m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Networking Tools</span> <span>11m</span></li>
                            </ul>
                        </div>
                        {/* Domain 3 */}
                        <div
                            className="flex flex-col cursor-pointer border-b border-gray-600"
                            onClick={() => toggleContent(2)}
                        >
                            <div className='flex justify-between items-center mt-4 mb-4'>
                                <p className="text-lg">Domain 3: Hardware</p>
                                <span
                                    className={`transform transition-transform duration-300 ${openIndex === 2 ? "rotate-180" : "rotate-0"}`}
                                >
                                    <IoIosArrowDown />
                                </span>
                            </div>
                            <ul
                                className={`mt-4 overflow-hidden transition-all duration-300 ${openIndex === 2 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                            >
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Basic Cable Types - Network and Fiber</span> <span>15m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Basic Cable Types - Peripheral, Video, and Hard Drive</span> <span>13m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>RAM and RAM Types</span> <span>15m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Storage Devices</span> <span>17m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Motherboards and CPUs</span> <span>14m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>BIOS and UEFI</span> <span>15m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Motherboard Expansion Cards and Cooling</span> <span>7m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Power Supplies</span> <span>10m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Printers and Multifunction Devices</span> <span>15m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Printer Consumables</span> <span>15m</span></li>
                            </ul>
                        </div>
                        {/* Domain 4 */}
                        <div
                            className="flex flex-col cursor-pointer border-b border-gray-600"
                            onClick={() => toggleContent(3)}
                        >
                            <div className='flex justify-between items-center mt-4 mb-4'>
                                <p className="text-lg">Domain 4: Virtualization and Cloud Computing</p>
                                <span
                                    className={`transform transition-transform duration-300 ${openIndex === 3 ? "rotate-180" : "rotate-0"}`}
                                >
                                    <IoIosArrowDown />
                                </span>
                            </div>
                            <ul
                                className={`mt-4 overflow-hidden transition-all duration-300 ${openIndex === 3 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                            >
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Cloud Computing Concepts</span> <span>13m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Client-Side Virtualization</span> <span>10m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Creating and Modifying a Virtual Machine</span> <span>0m</span></li>
                            </ul>
                        </div>
                        {/* Domain 5 */}
                        <div
                            className="flex flex-col cursor-pointer border-b border-gray-600"
                            onClick={() => toggleContent(4)}
                        >
                            <div className='flex justify-between items-center mt-4 mb-4'>
                                <p className="text-lg">Domain 5: Hardware and Network Troubleshooting</p>
                                <span
                                    className={`transform transition-transform duration-300 ${openIndex === 4 ? "rotate-180" : "rotate-0"}`}
                                >
                                    <IoIosArrowDown />
                                </span>
                            </div>
                            <ul
                                className={`mt-4 overflow-hidden transition-all duration-300 ${openIndex === 4 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                            >
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>CompTIA A+ 220-1101 Practice Test</span> <span>2m</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className='p-4 mt-12'>
                        <h1 className='text-4xl'>Course Description</h1>
                        <div className='mt-10'>
                            <p className='text-gray-400 mt-4'>
                                This HCISPP training is made up of 7 Domains: Healthcare Industry, Information Governance in Healthcare, Information Technologies in Healthcare, Regulatory and Standards Environment, Privacy and Security in Healthcare, Risk Management and Risk Assessment, and Third-Party Risk Management.
                            </p>
                        </div>
                        <div className='mt-10'>
                            <h2 className='text-3xl'>Target Audience</h2>
                            <p className='text-gray-400 mt-4'>
                                The HCISPP is ideal for security professionals responsible for safeguarding protected health information (PHI). It demonstrates you have the knowledge and ability to successfully assess, manage, and implement privacy and security controls for patient and healthcare information.
                            </p>
                        </div>
                        <div className='mt-10'>
                            <h2 className='text-3xl'>Prerequisites</h2>
                            <p className='text-gray-400 mt-4'>
                                Users should have a basic understanding of Information Security, Audit, and/or Compliance and Risk Management.
                            </p>
                        </div>
                        <div className='mt-10'>
                            <h2 className='text-3xl'>Course Goals</h2>
                            <p className='text-gray-400 mt-4'>
                                By the end of this course, students should be able to:
                            </p>
                            <ul className='text-gray-400 mt-2'>
                                <li>Understand Security and Privacy in the Healthcare Industry</li>
                                <li>Understand Risk Management in the Healthcare Industry</li>
                                <li>Recognize Regulatory Standards in the Healthcare Industry</li>
                                <li>Successfully pass the HCISPP exam</li>
                            </ul>
                        </div>
                        <div className='mt-10'>
                            <h2 className='text-3xl'>What is the HCISPP Certification?</h2>
                            <p className='text-gray-400 mt-4'>
                                The healthcare industry is growing, and it’s expected to keep doing so. As a result, the risks associated with keeping health information secure and protected are increasing, as well. That’s why there is such a need for professionals who have the skills to protect and secure health information. The HCISPP certification was created by the International Information Systems Security Certification Consortium (ISC2) to help meet that demand. This certification is a great help to both employees and employers in the healthcare industry. The certification demonstrates that certified individuals have the ability and dedication to maintain the security and privacy of healthcare data.
                            </p>
                        </div>
                        <div className='mt-10'>
                            <h2 className='text-3xl'>What Does this HCISPP Training Cover?</h2>
                            <p className='text-gray-400 mt-4'>
                                The HCISPP certification is currently the only one that combines information security skills with privacy techniques and best practices. It’s a credential that validates proficiency in implementing, managing, and assessing security and privacy protocols that are designed to secure healthcare organizations’ data by using strategies and methods established by cybersecurity experts at ISC2.
                            </p>
                            <p className='text-gray-400 mt-4'>
                                In this HCISPP training, students will learn what it takes to successfully pass the certification exam. There are six domains included in the exam which will be covered thoroughly in this course. Those domains are:
                            </p>
                            <ul className='text-gray-400 mt-2'>
                                <li>1. The Healthcare Industry</li>
                                <li>2. Regulatory Environment</li>
                                <li>3. Privacy and Security in Healthcare</li>
                                <li>4. Information Governance and Risk Management</li>
                                <li>5. Information Risk and Assessment</li>
                                <li>6. Third-Party Risk Management</li>
                            </ul>
                            <p className='text-gray-400 mt-4'>
                                Students will also learn test-taking strategies to become ready to take the HCISPP certification exam. Upon completing the course, students will receive a Certificate of Completion.
                            </p>
                        </div>
                        <div className='mt-10'>
                            <h2 className='text-3xl'>Is the HCISPP Certification Worth It?</h2>
                            <p className='text-gray-400 mt-4'>
                                Becoming HCISPP certified is a valid way for students to build their careers and demonstrate to potential employers that they want to be in the forefront of protecting patient health information and complying with a complex regulatory environment. The HCISPP certification comes with many benefits, including:
                            </p>
                            <ul className='text-gray-400 mt-2'>
                                <li>Validation of skills, knowledge, experience, and dedication of a healthcare information security professional.</li>
                                <li>Demonstration of qualifications that an individual possesses to assess, implement, and manage appropriate security and privacy measures for healthcare organizations.</li>
                                <li>Advancement of a cybersecurity professional’s career by validating the competency and experience in healthcare information security best practices.</li>
                                <li>Enhancement of HCISPP professionals’ marketability and credibility as healthcare security practitioners, because the certification is endorsed by the ISC2, a reputable and globally recognized standard in the certification of information security.</li>
                            </ul>
                        </div>
                        <div className='mt-10'>
                            <h2 className='text-3xl'>How Hard is the HCISPP Certification Exam?</h2>
                            <p className='text-gray-400 mt-4'>
                                It’s difficult to say just how hard the HCISPP certification exam is, because different individuals have varying levels of knowledge and experience, as well as different test-taking techniques. Those who are well-prepared are likely to find that the exam isn’t too difficult.
                            </p>
                            <p className='text-gray-400 mt-4'>
                                The HCISPP exam consists of 125 questions, for which candidates have three hours to complete. The questions are multiple choice and they cover the seven domains, which are weighted as follows:
                            </p>
                            <ul className='text-gray-400 mt-2'>
                                <li>1. The Healthcare Industry (10%)</li>
                                <li>2. Regulatory Environment (16%)</li>
                                <li>3. Privacy and Security in Healthcare (26%)</li>
                                <li>4. Information Governance and Risk Management (17%)</li>
                                <li>5. Information Risk and Assessment (16%)</li>
                                <li>6. Third-Party Risk Management (15%)</li>
                            </ul>
                            <p className='text-gray-400 mt-4'>
                                Candidates must score at least 700 points to pass the exam. To take the HCISPP certification exam, candidates must have some work experience (at least two years) in one or more of the HCISPP knowledge areas of the ISC2 Common Body of Knowledge (CBK), which includes privacy, security, and compliance. There are some substitutions that may be accepted in place of paid work experience, but they must be approved by the ISC2 prior to an individual taking the exam.
                            </p>
                        </div>
                        <div className='mt-10'>
                            <h2 className='text-3xl'>How is it Best to Prepare to Pass the HCISPP Certification Exam?</h2>
                            <p className='text-gray-400 mt-4'>
                                Passing the HCISPP certification exam is a major step toward a successful career in cybersecurity as a frontline defense professional to protect health data. To pass the exam, it’s important that you have a thorough understanding of the material. One of the most effective ways to learn the concepts and skills required on the exam is with Cybrary’s HCISPP training. The course is convenient and self-paced, so students can complete it, no matter what their schedule. Get started with HCISPP by clicking on the Register button at the top right of this screen.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='w-full lg:w-1/3'>
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
                    <div className='flex flex-col mt-12 text-3xl pt-4 border-t border-gray-600'>
                        <h1 className='text-4xl font-semibold'>Certified Body</h1>
                        <h3 className='ml-4 text-2xl mt-4'>HCISPP</h3>
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

export default HCispp;