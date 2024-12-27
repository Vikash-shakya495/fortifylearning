import React, { useState } from 'react';

import { IoTvOutline } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa";
import { VscTypeHierarchySuper } from 'react-icons/vsc';
import { SiCodementor } from 'react-icons/si';
import { PiCertificate, PiLaptop } from 'react-icons/pi';
import { GrGroup } from "react-icons/gr";
import TestimonialsCarousel from '../components/home/TestimonialsCarousel';
import SignupComponent from '../components/home/SignupComponent';
import { Outlet, Link, NavLink } from 'react-router-dom';
import { MdOutlineOndemandVideo } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { togglePopup } from '../store/signupPopupSlice';
import SignupPopup from '../loginSystem/SignupPopup';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

// import Footer from '../../components/Footer';

function SkillsPath() {
    const dispatch = useDispatch();
    const courses = [
        {
            id: 1,
            title: "Salesforce Fundamentals",
            duration: "4 hours",
            format: "On-demand video",
            description: "Master the basics of Salesforce, including navigation, data management, and reporting.",
            img: 'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c320276e5718758b7549_CISSP.png',
            link: '/course/certified-information-systems-security-professional'
        },
        {
            id: 2,
            title: "Salesforce Administration Essentials",
            duration: "4 hours",
            format: "On-demand video",
            description: "Master the fundamentals of Salesforce administration, including user management, data security, and customization. Learn best practices for managing and optimizing Salesforce environments.",
            img: 'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c320276e5718758b7549_CISSP.png',
            link: '/course/salesforce-administration-essentials'
        },
        {
            id: 3,
            title: "Salesforce Development with Apex",
            duration: "5 hours",
            format: "On-demand video",
            description: "Dive into Salesforce development using Apex. Learn to write custom code, automate processes, and build powerful applications on the Salesforce platform.",
            img: 'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c320276e5718758b7549_CISSP.png',
            link: '/course/salesforce-development-with-apex'
        },
        {
            id: 4,
            title: "Salesforce Lightning Component Development",
            duration: "6 hours",
            format: "On-demand video",
            description: "Develop skills needed to create Lightning components. Explore the Lightning Component Framework, build reusable components, and create dynamic user interfaces.",
            img: 'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c320276e5718758b7549_CISSP.png',
            link: '/course/salesforce-lightning-component-development'
        },
        {
            id: 5,
            title: "Salesforce Data Management",
            duration: "4 hours",
            format: "On-demand video",
            description: "Learn how to manage and migrate data within Salesforce. Review data import/export, data quality, and data mapping. Explore tools and strategies for successful data migration and integration.",
            img: 'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c320276e5718758b7549_CISSP.png',
            link: '/course/salesforce-data-management'
        },
        {
            id: 6,
            title: "Salesforce Sales Cloud Fundamentals",
            duration: "4 hours",
            format: "On-demand video",
            description: "Gain a comprehensive understanding of Salesforce Sales Cloud. Learn to configure and use Sales Cloud features to manage sales processes, track opportunities, and drive revenue.",
            img: 'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c320276e5718758b7549_CISSP.png',
            link: '/course/salesforce-sales-cloud-fundamentals'
        },
        {
            id: 7,
            title: "Salesforce Service Cloud Essentials",
            duration: "4 hours",
            format: "On-demand video",
            description: "Explore the core features and functionalities of Salesforce Service Cloud. Learn to set up and manage service operations, including case management and customer support tools.",
            img: 'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c320276e5718758b7549_CISSP.png',
            link: '/course/salesforce-service-cloud-essentials'
        },
        {
            id: 8,
            title: "Salesforce Marketing Cloud Basics",
            duration: "4 hours",
            format: "On-demand video",
            description: "Get introduced to Salesforce Marketing Cloud. Learn to utilize Marketing Cloud tools for email marketing, campaign management, and customer engagement.",
            img: 'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c320276e5718758b7549_CISSP.png',
            link: '/course/salesforce-marketing-cloud-basics'
        },
        {
            id: 9,
            title: "Salesforce Integration Techniques",
            duration: "5 hours",
            format: "On-demand video",
            description: "Explore methods for integrating Salesforce with other systems. Learn about APIs, middleware tools, and integration best practices. Review scenarios for connecting Salesforce with third-party applications.",
            img: 'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c320276e5718758b7549_CISSP.png',
            link: '/course/salesforce-integration-techniques'
        },
        {
            id: 10,
            title: "Salesforce Einstein Analytics",
            duration: "5 hours",
            format: "On-demand video",
            description: "Explore the capabilities of Salesforce Einstein Analytics. Learn to analyze data, create visualizations, and generate insights with AI-driven analytics.",
            img: 'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c320276e5718758b7549_CISSP.png',
            link: '/course/salesforce-einstein-analytics'
        },
        {
            id: 11,
            title: "Salesforce DevOps Essentials",
            duration: "5 hours",
            format: "On-demand video",
            description: "Understand the principles of Salesforce DevOps. Learn to implement continuous integration, continuous delivery, and version control in Salesforce development.",
            img: 'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c320276e5718758b7549_CISSP.png',
            link: '/course/salesforce-devops-essentials'
        },
        {
            id: 12,
            title: "Salesforce Field Service Lightning",
            duration: "4 hours",
            format: "On-demand video",
            description: "Gain an understanding of Salesforce Field Service Lightning. Learn to optimize field service operations, manage work orders, and improve service delivery.",
            img: 'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c320276e5718758b7549_CISSP.png',
            link: '/course/salesforce-field-service-lightning'
        },
        {
            id: 13,
            title: "Salesforce CPQ (Configure, Price, Quote) Fundamentals",
            duration: "4 hours",
            format: "On-demand video",
            description: "Master the basics of Salesforce CPQ. Learn to configure complex pricing models, generate accurate quotes, and streamline the sales process.",
            img: 'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c320276e5718758b7549_CISSP.png',
            link: '/course/salesforce-cpq-fundamentals'
        },
        {
            id: 14,
            title: "Salesforce Experience Cloud (formerly Community Cloud)",
            duration: "4 hours",
            format: "On-demand video",
            description: "Explore Salesforce Experience Cloud. Learn to create engaging communities and portals, manage user access, and integrate with Salesforce data.",
            img: 'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c320276e5718758b7549_CISSP.png',
            link: '/course/salesforce-experience-cloud'
        },
        {
            id: 15,
            title: "Salesforce B2B Marketing Automation",
            duration: "4 hours",
            format: "On-demand video",
            description: "Delve into Salesforce’s B2B marketing automation tools. Learn to automate marketing processes, segment audiences, and track campaign performance.",
            img: 'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c320276e5718758b7549_CISSP.png',
            link: '/course/salesforce-b2b-marketing-automation'
        },
        {
            id: 16,
            title: "Salesforce Security and Compliance",
            duration: "4 hours",
            format: "On-demand video",
            description: "Focus on Salesforce security and compliance best practices. Learn to implement security measures, manage user access, and ensure data protection.",
            img: 'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c320276e5718758b7549_CISSP.png',
            link: '/course/salesforce-security-and-compliance'
        },
        {
            id: 17,
            title: "Salesforce Virtual Agent Development",
            duration: "5 hours",
            format: "On-demand video",
            description: "Explore the development of Salesforce Virtual Agents. Learn to create and deploy AI-driven chatbots to enhance customer interactions.",
            img: 'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c320276e5718758b7549_CISSP.png',
            link: '/course/salesforce-virtual-agent-development'
        }
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 8;

    // Calculate total pages
    const totalPages = Math.ceil(courses.length / cardsPerPage);

    // Get current cards
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = courses.slice(indexOfFirstCard, indexOfLastCard);

    // Handlers for pagination
    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const goToPage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    return (
        <div className="bg-black text-white min-h-screen flex flex-col items-center overflow-x-hidden">
            {/* <Navbar /> */}
            <header className="mt-28 flex flex-col lg:flex-row px-6 md:px-48">
                <div className="mt-8 xl:mt-40 flex flex-col items-center md:items-start">
                    <h1 className="text-4xl md:text-6xl text-center md:text-left">
                        <span className="text-transparent text-[50px] md:text-[70px] bg-clip-text bg-gradient-to-r from-orange-600 via-pink-600 to-fuchsia-600">
                            Skill Paths
                        </span>
                    </h1>
                    <p className="mt-4 text-gray-400 max-w-full md:max-w-2xl text-center md:text-left">
                        Staying ahead in the Salesforce ecosystem is all about keeping your skills and knowledge up to
                        date. That’s why we’ve designed topic-specific learning pathways. With each Skill Path, you’ll
                        test your abilities as you delve into Salesforce administration, development, data management,
                        integration, and much more.s
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row justify-center sm:justify-start items-center">
                        <button className="bg-gradient-to-r from-orange-500 to-pink-500 px-8 py-3 rounded-md text-white hover:shadow-lg hover:shadow-pink-500/50 transition-shadow duration-300"
                            onClick={() => dispatch(togglePopup())}>

                            Start for Free
                        </button>
                        <span className="mt-4 sm:mt-0 sm:ml-4 text-white-400 hover:text-white"
                            onClick={() => dispatch(togglePopup())}>

                            Try SkillAcademy for Teams &gt;
                        </span>
                    </div>
                </div>
                <div className="flex lg:w-4/5 justify-center py-0 mt-8 md:mt-16 relative">
                    {/* Skewed images container */}
                    <div className="flex flex-col gap-4 items-center md:mt-60 mt-72">
                        {/* <img src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/66967e1bd3704d004dcb2238_Mask%20group%20(1).png" alt=""
                            className='absolute top-20 left-20 z-10 block sm:hidden'
                        /> */}
                        <img
                            src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/6697a7554304078de3dc4c2d_64ca067210f57a2bd2b09b91_CIS_Control_5-p-500.png" // Replace with actual image URL
                            alt="Image 1"
                            className="w-full max-w-[400px] h-auto transform skew-y-[5deg] ml-60 mb- shadow-lg rounded-lg"
                            style={{ zIndex: 1, marginTop: '-160px' }}
                        />
                        <img
                            src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/6697a7644291e0306742e902_64e784d38835d8cfd88b476b_SC-200_cover-p-500.png" // Replace with different image URL or the same for demo
                            alt="Image 2"
                            className="w-full max-w-[400px] h-auto transform skew-y-[5deg] ml-32 mb-12 shadow-lg rounded-lg"
                            style={{ zIndex: 2, marginTop: '-220px' }}
                        />
                        <img
                            src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/6697a7774304078de3dc6005_6468c1b3b299c17024b611e1_CompTIA_Project_-p-500.png" // Replace with another image URL or the same for demo
                            alt="Image 3"
                            className="w-full max-w-[400px] h-auto transform skew-y-[5deg] shadow-lg rounded-lg"
                            style={{ zIndex: 3, marginTop: '-280px' }}
                        />
                        {/* <img src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/66967dc8fc876e89974c4bd0_Mask%20group.png" alt=""
                            className='absolute -bottom-10 z-10 -right-10 block sm:hidden'
                        /> */}
                    </div>
                </div>

            </header>
            <main className="mt-28 flex flex-col lg:flex-row gap-32 px-6 md:px-48">
                <div className="flex lg:w-4/5 justify-center py-0 mt-8 md:mt-44 relative">
                    {/* Rotated images container */}
                    <div className="flex flex-col gap-4 items-center mt-20">
                        <img
                            src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/668f8b80eb68ffa78e304c5d_career-paths-mockup-p-800.png" // Replace with actual image URL
                            alt="Image 1"
                            className="w-full max-w-[500px] h-auto transform rotate-[0deg] shadow-lg"
                        />
                    </div>
                </div>
                <div className="mt-8 xl:mt-40 flex flex-col items-center md:items-start">
                    <h1 className="text-4xl md:text-6xl text-center md:text-left">
                        Skill Development Tailored to Your Needs
                    </h1>
                    <p className="mt-4 text-gray-400 max-w-full md:max-w-2xl text-center md:text-left">
                        FortifyLearning Skill Paths allow learners to focus their attention on a single topic within a Career
                        Path. Each Skill Path follows our Learn, Practice, Prove model and includes different activity
                        types aligned to key topics within the Salesforce domain
                    </p>
                    <p className="mt-4 text-gray-400 max-w-full md:max-w-2xl text-center md:text-left">
                        As you learn a skill, your progress will be measured in real-time using Experience Points (XP), which serve as a comprehensive capability score for each topic. Upon completion, you will be rewarded with a shareable digital badge via Credly.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row justify-center sm:justify-start items-center">
                        <button className="bg-gradient-to-r from-orange-500 to-pink-500 px-8 py-3 rounded-md text-white hover:shadow-lg hover:shadow-pink-500/50 transition-shadow duration-300"
                            onClick={() => dispatch(togglePopup())}>
                            Start learning for free
                        </button>
                    </div>
                </div>


            </main>
            <div className="py-10 mt-20 text-white">
                <h2 className="text-5xl text-center mb-6">Master Key <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-fuchsia-500'>Salesforce</span>  Skills</h2>
                <p className="text-center text-gray-400 mb-10 md:w-2/4 mx-auto">
                    Explore our on-demand Skill Paths developed by certified Salesforce practitioners. These Skill
                    Paths align with and are supplementary to our Career Paths, ensuring you gain comprehensive
                    expertise in Salesforce.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:w-5/6 mx-auto gap-6 px-5 md:px-10">
                    {currentCards.map((course) => (
                        <div
                            key={course.id}
                            className={`group relative rounded-lg border-gray-100 border shadow-lg bg-gray-900 overflow-hidden transition-all duration-300 hover:pb-16`}
                        >
                            <NavLink to={course.link}>
                                <img className="rounded-lg" src={course.img} alt={course.title} />
                                <div className="p-4 transition-all duration-300">
                                    <div className="mb-4">
                                        <span className="text-xs font-bold bg-pink-600 py-2 px-3 rounded-full uppercase">
                                            Course
                                        </span>
                                        <div className="flex gap-2 mt-6">
                                            <span className="py-1 bg-black rounded-xl px-3">{course.duration}</span>
                                            <span className="py-1 bg-black rounded-xl px-3">{course.format}</span>
                                        </div>
                                    </div>
                                    <p className="mt-6 text-2xl font-semibold">{course.title}</p>
                                    <p className="text-md mt-2 text-gray-300 line-clamp-3">{course.description}</p>
                                </div>
                                {/* Learn More Button */}
                                <div className="absolute bottom-4 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <button className="px-4 py-2 bg-gradient-to-r from-orange-600 via-pink-600 to-fuchsia-600 text-white rounded-lg hover:bg-pink-700">
                                        Learn More and Enroll
                                    </button>
                                </div>
                            </NavLink>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center items-center mt-8 space-x-4">
                    <button
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                        className={`px-4 py-4 bg-gray-900 border rounded-full ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-600"}`}
                    >
                        <FiArrowLeft />
                    </button>
                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToPage(index + 1)}
                            className={`px-4 py-2 rounded-lg ${currentPage === index + 1 ? "bg-pink-600 text-white" : "bg-gray-700 hover:bg-gray-600"}`}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        className={`px-4 py-4 bg-gray-900 border rounded-full ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-600"}`}
                    >
                        <FiArrowRight />
                    </button>
                </div>
            </div>
            <div className="mt-28 w-full sm:w-4/5 px-4">
                <div className="flex justify-between flex-col flex-wrap items-center">
                    <h2 className="text-3xl md:text-5xl text-center mb-8">
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-pink-600 to-fuchsia-600'>Everything</span> You Need to Succeed
                    </h2>
                    <p className='text-center w-2/3 mb-12 text-gray-400'> Upgrade to FortifyLearning Pro or FortifyLearning for Teams to gain access to our comprehensive
                        resources and support, designed to enhance your Salesforce skills and career growth.</p>
                    <NavLink to='/upgrade'>
                        <button className='bg-gradient-to-r from-orange-500 to-pink-500 px-8 py-3 rounded-md text-white hover:shadow-lg hover:shadow-pink-500/50 transition-shadow duration-300'>upgrade for full access</button>
                    </NavLink>
                </div>

                <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    <div className="flex flex-col items-center text-center relative">
                        <div className="w-20 h-20 relative flex justify-center items-center rounded-3xl mb-4">
                            <img className='absolute top-0 left-0 z-0' src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64369e04d29c9d9b21942d66_home-icon-background.webp" alt="Rocket" />
                            <MdOutlineOndemandVideo className="text-5xl z-10" />
                        </div>
                        <h2 className="font-bold text-2xl">Expertly Curated Skill Paths</h2>
                        <p className="text-gray-400 text-[17px] max-w-[90%] mx-auto mt-4">
                        Our Skill Paths are intentionally designed to keep you motivated,
                        on track, and achieving your Salesforce goals
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <div className="w-20 h-20 relative flex justify-center items-center rounded-3xl mb-4">
                            <img className='absolute top-0 left-0 z-2' src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64369e04d29c9d9b21942d66_home-icon-background.webp" alt="Laptop" />
                            <PiLaptop className="text-5xl z-10" />
                        </div>
                        <h2 className="font-bold text-2xl">On-Demand Learning</h2>
                        <p className="text-gray-400 text-[17px] max-w-[90%] mx-auto mt-4">
                        Learn anytime, anywhere from industry leaders and Salesforce subject
                        matter experts.
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <div className="w-20 h-20 relative flex justify-center items-center rounded-3xl mb-4">
                            <img className='absolute top-0 left-0 z-2' src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64369e04d29c9d9b21942d66_home-icon-background.webp" alt="Shield" />
                            <VscTypeHierarchySuper className="text-5xl z-10" />
                        </div>
                        <h2 className="font-bold text-2xl">Hands-On Practice</h2>
                        <p className="text-gray-400 text-[17px] max-w-[90%] mx-auto mt-4">
                        Learn by doing with practical exercises and real Salesforce tools in our
                        on-demand lab environment.
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <div className="w-20 h-20 relative flex justify-center items-center rounded-3xl mb-4">
                            <img className='absolute top-0 left-0 z-2' src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64369e04d29c9d9b21942d66_home-icon-background.webp" alt="Puzzle" />
                            <SiCodementor className="text-5xl z-10" />
                        </div>
                        <h2 className="font-bold text-2xl">Community of Mentors
                        </h2>
                        <p className="text-gray-400 text-[17px] max-w-[90%] mx-auto mt-4">
                        Gain access to mentors through our supportive community of
                        Salesforce professionals.
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <div className="w-20 h-20 relative flex justify-center items-center rounded-3xl mb-4">
                            <img className='absolute top-0 left-0 z-2' src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64369e04d29c9d9b21942d66_home-icon-background.webp" alt="Star" />
                            <PiCertificate className="text-5xl z-10" />
                        </div>
                        <h2 className="font-bold text-2xl">Assess Your Skills</h2>
                        <p className="text-gray-400 text-[17px] max-w-[90%] mx-auto mt-4">
                        Our baselining metrics provide detailed insight into your growth and
                        development
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <div className="w-20 h-20 relative flex justify-center items-center rounded-3xl mb-4">
                            <img className='absolute top-0 left-0 z-2' src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64369e04d29c9d9b21942d66_home-icon-background.webp" alt="Hierarchy" />
                            <GrGroup className="text-5xl z-10" />
                        </div>
                        <h2 className="font-bold text-2xl">Earn Credly-Certified Badges</h2>
                        <p className="text-gray-400 text-[17px] max-w-[90%] mx-auto mt-4">
                        Upon completing a Skill Path, you’ll automatically earn an
                        industry-recognized badge to share with your current or prospective employer
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full mt-20">
                <TestimonialsCarousel />
            </div>
            <div className="w-full mt-24 flex justify-center">
                <SignupComponent />
            </div>
            <Outlet />
        </div>
    );
}

export default SkillsPath;
