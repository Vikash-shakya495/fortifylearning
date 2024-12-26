import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { VscTypeHierarchySuper } from "react-icons/vsc";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { TbListCheck, TbListSearch } from "react-icons/tb";
import { FiArrowLeft } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Faq from "../components/Faq";
import SignupComponent from "../components/home/SignupComponent";

function MitreAttack() {
    const salesforceCourses = [
        {
            img: 'https://isodoc.co.uk/wp-content/uploads/2023/06/training-procedure.jpg',
            title: 'Salesforce Administrator Certification',
            overview: ' In this course, you will learn the basics of managing and configuring Salesforce. You will review key features and functionalities, such as user management, security settings, and data management. This course will prepare you for the Salesforce Administrator certification exam',
            duration: '4 hours',
            format: 'On-demand video',
            link: '/course/cyber-network-security'
        },
        {
            img: 'https://cdn.shopaccino.com/igmguru/products/salesforce-training-igmguru_1400382585_l.jpg?v=500',
            title: 'Salesforce Advanced Administrator Certification',
            overview: 'Dive deeper into Salesforce administration with advanced topics such as automation, process builder, and custom reporting. This course is designed for those who have mastered the basics and are looking to enhance their administrative skills and earn the Advanced Administrator certification.',
            duration: '6 hours',
            format: 'Interactive lab sessions',
            link: '/practice-lab/secure-network-access'
        },
        {
            img: 'https://dianapps.com/blog/wp-content/uploads/2022/12/Reasons-Why-Every-Company-Needs-a-Dedicated-Salesforce-Developer.png',
            title: 'Salesforce Platform App Builder Certification',
            overview: 'This course covers the essentials of developing custom applications on the Salesforce platform. Learn about data modeling, user interface design, and business logic. It’s perfect for those looking to pass the Salesforce Platform App Builder certification exam.',
            duration: '8 hours',
            format: 'Hands-on projects and coding exercises',
            link: '/practice-lab/configure-a-virtual-network-service-endpoint'
        },
        {
            img: 'https://www.apexhours.com/wp-content/uploads/2021/06/Factors-Influencing-Salesforce-Org-Strategy.png',
            title: 'Salesforce Sales Cloud Consultant Certification',
            overview: 'Specialize in Salesforce Sales Cloud with this course that focuses on sales processes, opportunity management, and forecasting. This training prepares you for the Sales Cloud onsultant certification exam, helping you optimize sales performance in your organization',
            duration: '5 hours',
            format: 'Case studies and practical exercises',
            link: '/practice-lab/configure-linux-firewall-acl-rules'
        },
        {
            img: 'https://360degreecloud.com/wp-content/uploads/2024/03/Salesforce-Data-Migration-Why-Its-Time-to-Make-the-Move-1024x535.jpg',
            title: '*Salesforce Service Cloud Consultant Certification',
            overview: ' Master Salesforce Service Cloud to improve customer service and support operations. Topics include case management, service console, and knowledge management. This course is aimed at preparing you for the Service Cloud Consultant certification exam.',
            duration: '4 hours',
            format: 'Live demonstrations and guided practice',
            link: '/practice-lab/configure-ip-routing-with-linux-on-azure'
        },
        {
            img: 'https://ceptes.com/wp-content/uploads/2020/02/Top-10-lightning-features-1-1.jpg',
            title: 'Salesforce Marketing Cloud Certification',
            overview: 'Explore Salesforce Marketing Cloud features like email marketing, automation, and data management. This course is ideal for those aiming to become certified Marketing Cloud professionals and enhance their marketing capabilities.',
            duration: '3 hours',
            format: 'On-demand video tutorials',
            link: '/practice-lab/configure-network-connectivity-for-linux-on-azure'
        },
        {
            img: 'https://www.mastersoftwaresolutions.com/wp-content/uploads/2024/02/mss-founded-by-ravi-garg-website-insights-key-components-and-features-of-salesforce-service-cloud.webp',
            title: '*Salesforce Field Service Certification',
            overview: 'Learn how to implement and manage Salesforce Field Service to optimize field operations. This course covers scheduling, mobile workforce, and service resources, preparing you for the Salesforce Field Service certification exam.',
            duration: '6 hours',
            format: 'Interactive scenarios and quizzes',
            link: '/practice-lab/deploy-ubuntu-linux-virtual-machines-in-the-microsoft-azure'
        },
        {
            img: 'https://www.ksolves.com/wp-content/uploads/Blog-3.jpg',
            title: 'Salesforce Integration Architecture Designer Certification',
            overview: ' Gain expertise in integrating Salesforce with other systems. This course covers integration patterns, APIs, and security considerations, helping you prepare for the Integration Architecture Designer certification exam',
            duration: '5 hours',
            format: 'Case studies and practical exercises',
            link: '/practice-lab/can-you-use-pki-to-secure-a-network-environment-expert'
        },
        {
            img: 'https://www.techforceservices.com/wp-content/uploads/2021/03/top-5-salesforce-security-best-practices.webp',
            title: 'Salesforce Data Architect Certification',
            overview: ' Focus on data modeling, data management, and data quality with Salesforce. This course prepares you for the Salesforce Data Architect certification exam by covering advanced data handling and architecture concepts.',
            duration: '4 hours',
            format: 'On-demand video and security assessments',
            link: '/practice-lab/configure-a-network-security-group-in-a-virtual-network'
        },
        {
            img: 'https://dwlrs858nh2or.cloudfront.net/wp-content/uploads/2024/02/14195041/Salesforce-CPQ-Basics.webp',
            title: 'Salesforce Development & Coding',
            overview: 'This course provides an in-depth look at Salesforce development using Apex, Visualforce, and Lightning components. Ideal for aspiring Salesforce developers who want to build custom applications and enhance their coding skills.',
            duration: '5 hours',
            format: 'Interactive labs and real-world scenarios',
            link: '/practice-lab/identify-non-secure-network-traffic'
        },
        {
            img: 'https://sunshineskill.com/wp-content/uploads/2024/07/analytics-cloud.jpg',
            title: 'Salesforce Lightning Experience',
            overview: 'Understand the Lightning Experience interface and how to migrate from Classic to Lightning This course covers customization, new features, and best practices to fully leverage Salesforce Lightning.',
            duration: '5 hours',
            format: 'Practical exercises and case studies',
            link: '/practice-lab/identify-non-secure-network-traffic'
        },
    ];

    const [selectedTab, setSelectedTab] = useState("LearnTheFramework");

    const content = {
        LearnTheFramework: {
            title: "Learn the Framework",
            description:
                "Gain insights on how to read and leverage Salesforce's architecture and best practices to improve your business strategy and map real-world use cases, features, and functionalities to FortifyLearning's custom-designed Salesforce learning paths.",
            image: 'https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/644bbe737bce787793bdb9f2_Frame%2096093-p-500.webp',
            icon: <VscTypeHierarchySuper className="text-3xl" />,
        },
        TakeAction: {
            title: "Take Action",
            description:
                "Gain insights on how to read and leverage Salesforce's architecture and best practices to improve your business strategy and map real-world use cases, features, and functionalities to FortifyLearning’s custom-designed Salesforce learning paths.",
            image: 'https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/643e705ccb8ecc0d48213c7a_home-learn-p-800.webp',
            icon: <HiOutlineRocketLaunch className="text-3xl" />,
        },
        DevelopAPlan: {
            title: "Develop a Plan",
            description:
                "Gain insights on how to read and leverage Salesforce's architecture and best practices to improve your business strategy and map real-world use cases, features, and functionalities to FortifyLearning’s custom-designed Salesforce learning paths.",
            image: 'https://149359217.v2.pressablecdn.com/wp-content/uploads/2019/01/plan-1170x766.jpg',
            icon: <TbListCheck className="text-3xl" />,
        },
        PursueResearch: {
            title: "Pursue Research",
            description:
                " Gain insights on how to read and leverage Salesforce's architecture and best practices to improve your business strategy and map real-world use cases, features, and functionalities to FortifyLearning’s custom-designed Salesforce learning paths.",
            image: 'https://images.deccanherald.com/deccanherald%2Fimport%2Fsites%2Fdh%2Ffiles%2Farticleimages%2F2020%2F09%2F29%2Fistock-11271050131-894483-1601348572.jpg?auto=format%2Ccompress&fmt=webp&fit=max&format=webp&q=70&w=400&dpr=2',
            icon: <TbListSearch className="text-3xl" />,
        },
    };


    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 8;

    // Calculate total pages
    const totalPages = Math.ceil(salesforceCourses.length / cardsPerPage);

    // Get current cards
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = salesforceCourses.slice(indexOfFirstCard, indexOfLastCard);

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
        <div>
            {/* Header Section */}
            <header className="mt-28 flex flex-col lg:flex-row px-6 md:px-48 items-center">
                <div className="mt-8 xl:mt-40 flex flex-col items-center md:items-start">
                    <h1 className="text-4xl md:text-6xl text-center md:text-left">
                        Salesforce Training & Certification
                    </h1>
                    <p className="mt-4 text-gray-300 max-w-full md:max-w-2xl text-center md:text-left">
                        Whether you are looking to start a new career, earn a certification, or optimize your
                        organization's Salesforce environment, FortifyLearning has you covered
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row justify-center sm:justify-start items-center">
                        <NavLink to="/demo-request">
                            <button className="bg-gradient-to-r from-red-500 to-pink-600 px-8 py-3 rounded-md text-white hover:shadow-lg hover:shadow-pink-500/50 transition-shadow duration-300">
                                Schedule a demo
                            </button>
                        </NavLink>
                    </div>
                </div>

                <div className="flex lg:w-4/5 justify-center py-0 mt-8 md:mt-28">
                    <img
                        src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/65794ab1cb60655a821530f8_Group%2040151.png"
                        alt="Laptop with cybersecurity courses"
                        className="w-full max-w-[500px] h-auto"
                    />
                </div>
            </header>

            {/* Tabs Section */}
            <div className="mt-52 w-full">
                <h1 className="text-5xl ml-4 text-center md:ml-40 md:text-left">
                    Align to the MITRE ATT&CK® Framework
                </h1>
                <div className="flex flex-col lg:flex-row mt-8 w-full justify-center gap-20 h-auto text-white py-8 px-4 sm:px-10 md:px-40 rounded-lg space-y-8 lg:space-y-0 lg:space-x-8">
                    {/* Tabs List */}
                    <div className="w-full lg:w-1/2 space-y-8 py-8">
                        {Object.keys(content).map((key) => (
                            <div key={key}>
                                <div
                                    onClick={() => setSelectedTab(key)}
                                    className="flex items-center cursor-pointer space-x-2 rounded-lg group"
                                >
                                    {/* Gradient Dot */}
                                    {selectedTab === key && (
                                        <div className="w-2.5 h-2.5 mr-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />
                                    )}
                                    {content[key].icon}

                                    <span
                                        className={`text-2xl font-sans ${selectedTab === key
                                            ? "font-semibold text-white"
                                            : "font-normal text-gray-400"
                                            }`}
                                    >
                                        {content[key].title}
                                    </span>

                                    <span>
                                        <i
                                            className={`fa-solid fa-chevron-right text-gray-400 transition-transform duration-200 ${selectedTab === key
                                                ? "translate-x-2"
                                                : "group-hover:translate-x-2"
                                                }`}
                                        ></i>
                                    </span>
                                </div>

                                {/* Display content for selected tab */}
                                {selectedTab === key && (
                                    <div className="border-b border-gray-600 py-4">
                                        <p className="text-lg text-gray-400">
                                            {content[key].description}
                                        </p>

                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Image for Selected Tab */}
                    <div className="w-full lg:w-[600px]">
                        <img
                            src={content[selectedTab].image}
                            alt={content[selectedTab].title}
                            className="rounded-lg w-full h-auto"
                        />
                    </div>
                </div>
            </div>
            <div className="mt-24 w-full text-white py-24 px-4 md:px-32 xl:px-68 flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-transparent">
                {/* Heading Section */}
                <h2 className="text-3xl md:text-5xl text-center mb-8">
                    Salesforce-Informed Training
                </h2>
                <p className="text-center w-full md:w-3/5 mb-12 text-gray-400">
                    Optimize and leverage Salesforce with tools, techniques, and scenarios aligned to real-world
                    business processes.
                </p>

                {/* Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:w-5/6 mx-auto gap-6 px-5 md:px-0 ">
                    {currentCards.map((course) => (
                        <div
                            key={course.id}
                            className={`group relative rounded-lg border-gray-100 border shadow-lg bg-gray-900 overflow-hidden transition-all duration-300 hover:pb-16`}
                        >
                            <NavLink to={course.link}>
                                <img className="rounded-lg h-48 w-full object-cover" src={course.img} alt={course.title} />
                                <div className="p-4 transition-all duration-300">
                                    <div className="mb-4">
                                        <span className="text-xs font-bold bg-pink-600 py-2 px-3 rounded-full uppercase">
                                            Course
                                        </span>
                                        <div className="flex gap-2 mt-6 items-center">
                                            <span className="py-1 bg-black rounded-xl px-3">{course.duration}</span>
                                            <span className="py-1 bg-black rounded-xl px-3">{course.format}</span>
                                        </div>
                                    </div>
                                    <p className="mt-6 text-2xl font-semibold">{course.title}</p>
                                    <p className="text-md mt-2 text-gray-300 line-clamp-3">{course.overview}</p>
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

                {/* Pagination Controls */}
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

            <div className="mt-20 flex flex-col lg:flex-row w-11/12 lg:w-4/5 mx-auto gap-8 lg:gap-16">
                {/* Image Section */}
                <div className="w-full lg:w-1/2">
                    <img
                        src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/644bd9f5a52f232f61c87b00_Frame%2096093-p-800.webp"
                        alt="Strengthen Your Defenses"
                        className="w-full object-cover rounded-lg"
                    />
                </div>

                {/* Text Content Section */}
                <div className="w-full lg:w-1/2 p-6 lg:p-12">
                    <h1 className="text-2xl lg:text-3xl font-semibold">
                        Strengthen Your Salesforce Skills
                    </h1>
                    <p className="flex mt-4 gap-4">
                        <img src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/644bdcde184757daa5133632_Group%20313.svg" alt="" />
                        <span className="text-gray-400 text-sm lg:text-base">
                            Be prepared to tackle the latest business challenges with comprehensive Salesforce training.
                        </span>
                    </p>
                    <p className="flex mt-4 gap-4">
                        <img src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/644bdcde184757daa5133632_Group%20313.svg" alt="" />
                        <span className="text-gray-400 text-sm lg:text-base">
                            FortifyLearning's exclusive course offerings aligned with the Salesforce ecosystem will empower
                            you to level up your administrative, analytical, and hands-on skills
                        </span>
                    </p>
                    <p className="flex mt-4 gap-4">
                        <img src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/644bdcde184757daa5133632_Group%20313.svg" alt="" />
                        <span className="text-gray-400 text-sm lg:text-base">
                            Adopt innovative strategies for managing customer relationships, optimizing sales processes,
                            enhancing service delivery, and performing data analysis
                        </span>
                    </p>
                    <p className="flex mt-4 gap-4">
                        <img src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/644bdcde184757daa5133632_Group%20313.svg" alt="" />
                        <span className="text-gray-400 text-sm lg:text-base">
                            Get even more practical, hands-on experience in our Salesforce Certification courses focused
                            on real-world applications and techniques
                        </span>
                    </p>
                    <NavLink to="/demo-request">
                        <button className="mt-6 w-full lg:w-auto bg-gradient-to-r from-red-500 to-fuchsia-500 py-3 px-6 text-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                            Schedule a Demo
                        </button>
                    </NavLink>
                </div>
            </div>

            <div className="w-full mt-20">
                <Faq />
            </div>
            <div className="mt-24 h-[600px] w-full relative">
                <img
                    className="absolute w-full h-full object-cover opacity-50"
                    src="https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6482339878677478af673eec_Group_216.png"
                    alt="Background"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-3xl md:text-4xl text-white font-bold md:w-2/4">
                        Empower Your Team, Optimize Your Salesforce
                    </h1>
                    <p className="mt-4 text-gray-300  max-w-2xl">
                        Empower your team to excel in Salesforce with FortifyLearning. Request a demo today for access
                        to hands-on practice labs, assessments, custom content, and more.
                    </p>
                    <NavLink to='/business'>
                        <button className="mt-8 bg-gradient-to-r from-red-500 to-fuchsia-500 py-3 px-8 text-white font-semibold rounded-2xl hover:shadow-lg transition-all">
                            FortifyLearning for Teams
                        </button>
                    </NavLink>
                </div>
            </div>
            <div className="w-full mt-24 flex justify-center">
                <SignupComponent />
            </div>
        </div>
    );
}

export default MitreAttack;






