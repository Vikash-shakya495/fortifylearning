import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { togglePopup } from '../../../store/signupPopupSlice';
import SignupPopup from '../../../loginSystem/SignupPopup';
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
import FortifyLearningLogo from '../../../assets/fortifyLearning.png';

function ComptiaProjectPlus() {
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
                    CompTIA Project+ Certification Training (PK0-004)
                    </h2>
                    <p className="text-gray-200 text-sm sm:text-base">
                    This CompTIA Project+ training takes students through a project’s lifecycle, introducing them to the knowledge and skills that are required to collaborate in project environments. Upon Completion, students will be prepared to pass the Project+ certification exam.
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
                                <p className="text-lg">Introduction to Project Management</p>
                                <span
                                    className={`transform transition-transform duration-300 ${openIndex === 0 ? "rotate-180" : "rotate-0"}`}
                                >
                                    <IoIosArrowDown />
                                </span>
                            </div>
                            <ul
                                className={`mt-4 overflow-hidden transition-all duration-300 ${openIndex === 0 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                            >
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Course Introduction</span> <span>4m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Basics of Project Management</span> <span>11m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Organizational Structures</span> <span>6m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Roles and Responsibilities</span> <span>10m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Project Initiation</span> <span>10m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Project Planning</span> <span>6m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Project Execution</span> <span>9m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Project Monitoring and Controlling</span> <span>7m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Project Closing</span> <span>5m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Control of Costs</span> <span>6m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Control of Schedules</span> <span>8m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Agile Methodology</span> <span>7m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Module 1 Review</span> <span>7m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Constraints and Risks</span> <span>Project Constraints</span> <span>9m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Project Influences</span> <span>6m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Risk Management Part 1</span> <span>10m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Risk Management Part 2</span> <span>7m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Module 2 Review</span> <span>3m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Managing Communications and Change</span> <span>Communication Management</span> <span>10m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Communication Challenges</span> <span>8m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Procurement Management</span> <span>8m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Change Management</span> <span>9m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Quality Management</span> <span>10m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Module 3 Review</span> <span>8m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Tools of the Trade</span> <span>Software Packages</span> <span>5m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Charts, Dashboards and Visualizations Part 1</span> <span>5m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Charts, Dashboards and Visualizations Part 2</span> <span>8m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>Module 4 Review</span> <span>4m</span></li>
                                <li className="pl-4 mb-4 flex text-gray-400 justify-between"><span>CompTIA Project+ Practice Exam</span> <span>2m</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className='p-4 mt-12'>
                        <h1 className='text-4xl'>Course Description</h1>
                        <div className='mt-10'>
                            <h2 className='text-3xl'>Welcome to CompTIA Project+ (PK0-004)</h2>
                            <p className='text-gray-400 mt-4'>
                                This course covers the necessary competencies professionals need to manage smaller, less complex projects as part of their other job duties. This CompTIA Project+ (PK0-004) course also covers a project’s lifecycle and will introduce the student to the knowledge and skills necessary to collaborate and complete in project environments. This course maps to the CompTIA Project+ certification exam, which certifies the knowledge and skills required to manage the project life cycle, ensure appropriate communication, manage resources, manage stakeholders, and maintain project documentation.
                            </p>
                        </div>
                        <div className='mt-10'>
                            <h2 className='text-3xl'>What is a Technical Project Manager?</h2>
                            <p className='text-gray-400 mt-4'>
                                Technical project managers assess technical risks, assist with technical problem solving, and cut through the layers of any given project to determine what the core needs and issues are. 
                            </p>
                        </div>
                        <div className='mt-10'>
                            <h2 className='text-3xl'>What will I learn?</h2>
                            <p className='text-gray-400 mt-4'>
                                All stages of project management including initiating, planning, execution, and monitoring/controlling in the context of IT projects.
                            </p>
                        </div>
                        <div className='mt-10'>
                            <h2 className='text-3xl'>Prerequisites for this CompTIA Project+ Training</h2>
                            <p className='text-gray-400 mt-4'>
                                This course is recommended to individuals with one (1) year minimum of managing or participating in small to medium scope projects.
                            </p>
                        </div>
                        <div className='mt-10'>
                            <h2 className='text-3xl'>Course Goals</h2>
                            <ul className='text-gray-400 mt-2'>
                                <li>Develop, plan and manage small-to-medium sized projects</li>
                                <li>Understand how to manage the life-cycle of a project</li>
                                <li>Create, write and maintain project-related documentation</li>
                                <li>Identify basic aspects of the Agile methodology</li>
                            </ul>
                        </div>
                        <div className='mt-10'>
                            <h2 className='text-3xl'>What is CompTIA Project+ Certification?</h2>
                            <p className='text-gray-400 mt-4'>
                                The Project+ certification is offered by the Computing Technology Industry Association (CompTIA) to demonstrate validated learning and skills in project management. The certification allows hiring managers and employers to easily recognize qualified professionals looking to become project managers for organizations.
                            </p>
                        </div>
                        <div className='mt-10'>
                            <h2 className='text-3xl'>What is Involved in this CompTIA Project+ Training?</h2>
                            <p className='text-gray-400 mt-4'>
                                This CompTIA Project+ training is designed for individuals who need the knowledge to manage small, less complex projects in their workplaces. The course covers the same subject areas as the certification exam, so upon completion, students will be prepared to take and pass the exam.
                            </p>
                        </div>
                        <div className='mt-10'>
                            <h2 className='text-3xl'>Which Jobs Use CompTIA Project+ Certified Employees?</h2>
                            <ul className='text-gray-400 mt-2'>
                                <li>Project Team Member</li>
                                <li>Project Coordinator</li>
                                <li>Project Manager</li>
                                <li>Business Analyst</li>
                                <li>Team Leader</li>
                                <li>Manager</li>
                                <li>Director</li>
                            </ul>
                        </div>
                        <div className='mt-10'>
                            <h2 className='text-3xl'>What are the Benefits of a CompTIA Project+ Certification?</h2>
                            <ul className='text-gray-400 mt-2'>
                                <li>Improved communication skills</li>
                                <li>Globally recognized credentials</li>
                                <li>Validation of skills</li>
                                <li>Increased job opportunities</li>
                                <li>Increased responsibilities</li>
                            </ul>
                        </div>
                        <div className='mt-10'>
                            <h2 className='text-3xl'>How is it Best to Prepare for the Project+ Certification Exam?</h2>
                            <p className='text-gray-400 mt-4'>
                                The CompTIA Project+ certification exam (PK0-004) requires that candidates have a good grasp on all subject areas. The topics that are tested are managing the project lifecycle, ensuring appropriate communication, managing resources and stakeholders, and maintaining project documentation.
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

export default ComptiaProjectPlus;