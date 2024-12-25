import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoTvOutline } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa";
import { VscTypeHierarchySuper } from 'react-icons/vsc';
import { SiCodementor } from 'react-icons/si';
import { PiCertificate, PiCertificateLight, PiLaptop, PiRocket } from 'react-icons/pi';
import { GrGroup } from "react-icons/gr";
import { MdOutlineOndemandVideo } from 'react-icons/md';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { RiTeamLine } from 'react-icons/ri';
import { GoShieldX } from 'react-icons/go';
import { TbBrandGithub } from 'react-icons/tb';
import Marquee from 'react-fast-marquee';
import TestimonialsCarousel from '../components/home/TestimonialsCarousel';
import SignupComponent from '../components/home/SignupComponent';

function Certifications() {
    const courses = [
        {
            id: 1,
            title: "Salesforce Fundamentals",
            duration: "4 hours",
            format: "On-demand video",
            description:
                "Master the basics of Salesforce, including navigation, data management, and reporting.",
            img: 'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c320276e5718758b7549_CISSP.png',
            link: '/course/certified-information-systems-security-professional'
        },
        {
            id: 2,
            title: "Advanced Salesforce Administration",
            duration: "6 hours",
            format: "Interactive labs",
            description:
                "Dive into advanced admin topics like custom objects, complex workflows, and data management",
            img: 'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c320276e5718758b7549_CISSP.png',
            link: '/course/certified-information-systems-security-professional'
        },
        {
            id: 3,
            title: "Salesforce Developer Essentials",
            duration: "8 hours",
            format: "Hands-on projects",
            description:
                "Learn core development skills for building and customizing Salesforce applications using Apex and Visualforce.",
            img: 'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c320276e5718758b7549_CISSP.png',
            link: '/course/certified-information-systems-security-professional'
        },
        {
            id: 4,
            title: "Salesforce Integration Strategies",
            duration: "5 hours",
            format: "Case studies and exercises",
            description:
                "Explore integration methods and tools for connecting Salesforce with other systems, including APIs and middleware.",
            img: 'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c320276e5718758b7549_CISSP.png',
            link: '/course/certified-information-systems-security-professional'
        },
        {
            id: 5,
            title: "Data Migration with Salesforce",
            duration: "4 hours",
            format: "Live demonstrations",
            description:
                "Master data import, export, and transformation techniques for smooth data migration into Salesforce.",
            img: 'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c320276e5718758b7549_CISSP.png',
            link: '/course/certified-information-systems-security-professional'
        },
        {
            id: 6,
            title: "Salesforce Lightning Experience",
            duration: "3 hours",
            format: "On-demand video tutorials",
            description: "Transition from Classic to Lightning Experience, focusing on new features and functionalities.",
            img: 'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c320276e5718758b7549_CISSP.png',
            link: '/course/salesforce-lightning-experience'
        },
        {
            id: 7,
            title: "Salesforce Service Cloud Mastery",
            duration: "6 hours",
            format: "Interactive scenarios",
            description: "Enhance skills in managing customer service operations with Salesforce Service Cloud, including case management and automation.",
            img: 'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c320276e5718758b7549_CISSP.png',
            link: '/course/salesforce-service-cloud-mastery'
        },
        {
            id: 8,
            title: "Salesforce Marketing Cloud Insights",
            duration: "5 hours",
            format: "Case studies and exercises",
            description: "Learn advanced marketing automation and analytics within Salesforce Marketing Cloud.",
            img: 'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c320276e5718758b7549_CISSP.png',
            link: '/course/salesforce-marketing-cloud-insights'
        },
        {
            id: 9,
            title: "Salesforce Security Best Practices",
            duration: "4 hours",
            format: "On-demand video",
            description: "Understand best practices for securing your Salesforce instance, including user access and data protection.",
            img: 'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c320276e5718758b7549_CISSP.png',
            link: '/course/salesforce-security-best-practices'
        },
        {
            id: 10,
            title: "Salesforce CPQ Fundamentals",
            duration: "5 hours",
            format: "Interactive labs",
            description: "Get to grips with Salesforce CPQ (Configure, Price, Quote) to streamline sales processes and quoting accuracy.",
            img: 'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c320276e5718758b7549_CISSP.png',
            link: '/course/salesforce-cpq-fundamentals'
        },
        {
            id: 11,
            title: "Salesforce Analytics Cloud Training",
            duration: "4 hours",
            format: "Interactive labs",
            description: "Gain hands-on experience with Salesforce Analytics Cloud, focusing on dashboards and data insights.",
            img: 'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c320276e5718758b7549_CISSP.png',
            link: '/course/salesforce-analytics-cloud-training'
        },
        {
            id: 12,
            title: "Salesforce Community Cloud Essentials",
            duration: "5 hours",
            format: "On-demand video and projects",
            description: "Build and manage Salesforce Communities to enhance collaboration with external users.",
            img: 'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c320276e5718758b7549_CISSP.png',
            link: '/course/salesforce-community-cloud-essentials'
        },
        {
            id: 13,
            title: "Salesforce Data Architecture",
            duration: "5 hours",
            format: "Interactive labs",
            description: "Learn about Salesforce data models, schema design, and architecture principles.",
            img: 'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c320276e5718758b7549_CISSP.png',
            link: '/course/salesforce-data-architecture'
        },
        {
            id: 14,
            title: "Salesforce Automation with Flow",
            duration: "6 hours",
            format: "Hands-on projects",
            description: "Automate business processes using Salesforce Flow, including process automation and approval workflows.",
            img: 'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c320276e5718758b7549_CISSP.png',
            link: '/course/salesforce-automation-with-flow'
        },
        {
            id: 15,
            title: "Salesforce Einstein Analytics",
            duration: "5 hours",
            format: "On-demand video",
            description: "Explore Salesforce Einstein Analytics for advanced data analysis and AI-driven insights.",
            img: 'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c320276e5718758b7549_CISSP.png',
            link: '/course/salesforce-einstein-analytics'
        },
        {
            id: 16,
            title: "Salesforce Mobile App Development",
            duration: "6 hours",
            format: "Interactive labs",
            description: "Develop and customize Salesforce mobile applications for enhanced user experiences on mobile devices.",
            img: 'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c320276e5718758b7549_CISSP.png',
            link: '/course/salesforce-mobile-app-development'
        },
        {
            id: 17,
            title: "Salesforce Nonprofit Cloud Essentials",
            duration: "5 hours",
            format: "Case studies and exercises",
            description: "Get started with Salesforce Nonprofit Cloud to manage donor relations, fundraising, and program management.",
            img: 'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c320276e5718758b7549_CISSP.png',
            link: '/course/salesforce-nonprofit-cloud-essentials'
        },
        {
            id: 18,
            title: "Salesforce Health Cloud Fundamentals",
            duration: "6 hours",
            format: "On-demand video",
            description: "Learn how to use Salesforce Health Cloud to manage patient data and improve healthcare services.",
            img: 'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c320276e5718758b7549_CISSP.png',
            link: '/course/salesforce-health-cloud-fundamentals'
        },
        {
            id: 19,
            title: "Salesforce Commerce Cloud Basics",
            duration: "4 hours",
            format: "Interactive labs",
            description: "Understand the basics of Salesforce Commerce Cloud for e-commerce and digital storefronts.",
            img: 'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c320276e5718758b7549_CISSP.png',
            link: '/course/salesforce-commerce-cloud-basics'
        },
        {
            id: 20,
            title: "Salesforce Field Service Lightning",
            duration: "5 hours",
            format: "Hands-on projects",
            description: "Optimize field service operations with Salesforce Field Service Lightning, including scheduling and mobile workforce management.",
            img: 'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c320276e5718758b7549_CISSP.png',
            link: '/course/salesforce-field-service-lightning'
        },
        {
            id: 21,
            title: "Salesforce Integration with Marketing Automation",
            duration: "4 hours",
            format: "Interactive labs",
            description: "Integrate Salesforce with marketing automation tools like Pardot and Marketo for streamlined marketing efforts.",
            img: 'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c320276e5718758b7549_CISSP.png',
            link: '/course/salesforce-integration-with-marketing-automation'
        },
        {
            id: 22,
            title: "Salesforce Customization and Development",
            duration: "8 hours",
            format: "Hands-on projects",
            description: "Customize Salesforce applications with Visualforce, Apex, and Lightning components.",
            img: 'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c320276e5718758b7549_CISSP.png',
            link: '/course/salesforce-customization-and-development'
        },
        {
            id: 23,
            title: "Salesforce Lightning App Builder",
            duration: "4 hours",
            format: "On-demand video tutorials",
            description: "Build custom applications using Salesforce Lightning App Builder, including custom pages and components.",
            img: 'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c320276e5718758b7549_CISSP.png',
            link: '/course/salesforce-lightning-app-builder'
        },
        {
            id: 24,
            title: "Salesforce Deployment Strategies",
            duration: "5 hours",
            format: "Case studies and interactive labs",
            description: "Learn best practices for deploying Salesforce configurations and customizations across different environments.",
            img: 'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c320276e5718758b7549_CISSP.png',
            link: '/course/salesforce-deployment-strategies'
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
            <header className="mt-28 flex flex-col lg:flex-row px-6 md:px-48">
                <div className="mt-8 xl:mt-40 flex flex-col items-center md:items-start">
                    <h1 className="text-4xl md:text-6xl text-center md:text-left">
                        <span className="text-[50px] md:text-[70px]">
                            Salesforce Certification Prep
                        </span>
                    </h1>
                    <p className="mt-10 text-gray-400 max-w-full md:max-w-2xl text-center md:text-left">
                        Whether you are looking to start a new career, earn a certification, or optimize your
                        organization's Salesforce environment, FortifyLearning has you covered.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row justify-center sm:justify-start items-center">
                        <button className="bg-gradient-to-r from-orange-500 to-pink-500 px-8 py-3 rounded-md text-white hover:shadow-lg hover:shadow-pink-500/50 transition-shadow duration-300">
                            Start Learning for Free
                        </button>
                    </div>
                </div>
                <div className="flex lg:w-4/5 justify-center py-0 mt-8 md:mt-16 relative">
                    <div className="flex flex-col gap-4 items-center md:mt-60 mt-72">
                        <img
                            src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/6697a7554304078de3dc4c2d_64ca067210f57a2bd2b09b91_CIS_Control_5-p-500.png"
                            alt="Image 1"
                            className="w-full max-w-[400px] h-auto transform skew-y-[5deg] ml-60 mb- shadow-lg rounded-lg"
                            style={{ zIndex: 1, marginTop: '-160px' }}
                        />
                        <img
                            src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/6697a7644291e0306742e902_64e784d38835d8cfd88b476b_SC-200_cover-p-500.png"
                            alt="Image 2"
                            className="w-full max-w-[400px] h-auto transform skew-y-[5deg] ml-32 mb-12 shadow-lg rounded-lg"
                            style={{ zIndex: 2, marginTop: '-220px' }}
                        />
                        <img
                            src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/6697a7774304078de3dc6005_6468c1b3b299c17024b611e1_CompTIA_Project_-p-500.png"
                            alt="Image 3"
                            className="w-full max-w-[400px] h-auto transform skew-y-[5deg] shadow-lg rounded-lg"
                            style={{ zIndex: 3, marginTop: '-280px' }}
                        />
                    </div>
                </div>
            </header>
            <main className="mt-28 flex flex-col lg:flex-row gap-32 px-6 md:px-48">
                <div className="flex lg:w-4/5 justify-center py-0 mt-8 md:mt-44 relative">
                    <div className="flex flex-col gap-4 items-center mt-20">
                        <img
                            src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/668f8b80eb68ffa78e304c5d_career-paths-mockup-p-800.png"
                            alt="Image 1"
                            className="w-full max-w-[500px] h-auto transform rotate-[0deg] shadow-lg"
                        />
                    </div>
                </div>
                <div className="mt-8 xl:mt-40 flex flex-col items-center md:items-start">
                    <h1 className="text-4xl md:text-6xl text-center md:text-left">
                        Your Roadmap to Certification Success
                    </h1>
                    <p className="mt-4 text-gray-400 max-w-full md:max-w-2xl text-center md:text-left">
                        Follow FortifyLearning’s step-by-step approach to getting exam-ready. Quiz your knowledge to
                        identify key focus areas. Prepare with on-demand courses, then validate and apply what you
                        learned with practice tests and interactive virtual labs for a fraction of what a boot camp costs.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row justify-center sm:justify-start items-center">
                        <button className="bg-gradient-to-r from-orange-500 to-pink-500 px-8 py-3 rounded-md text-white hover:shadow-lg hover:shadow-pink-500/50 transition-shadow duration-300">
                            Start learning for free
                        </button>
                    </div>
                </div>
            </main>
            <div className="py-10 text-white">
                <h2 className="text-5xl text-center mb-6">Expert Developed Courses</h2>
                <p className="text-center text-gray-400 mb-10 md:w-2/4 mx-auto">
                    Explore our on-demand courses developed by seasoned Salesforce experts, aligned with the
                    key learning objectives of Salesforce certification exams
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
                <div className="flex justify-between flex-wrap items-center">
                    <h1 className="text-[32px] mx-auto sm:text-5xl leading-tight">
                        Everything Your Team Needs to Succeed
                    </h1>
                    <p className='md:w-2/3 mx-auto text-gray-300 text-center mt-4'> Get everything you need to ace the certification exam, from prep courses to practice tests.</p>
                </div>

                <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    <div className="flex flex-col items-center text-center relative">
                        <div className="w-20 h-20 relative flex justify-center items-center rounded-3xl mb-4">
                            <img className='absolute top-0 left-0 z-0' src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64369e04d29c9d9b21942d66_home-icon-background.webp" alt="Rocket" />
                            <TbBrandGithub className="text-5xl z-10" />
                        </div>
                        <h2 className="font-bold text-2xl">Interactive Virtual Labs</h2>
                        <p className="text-gray-400 text-[17px] max-w-[90%] mx-auto mt-4">
                            Apply learned concepts and techniques in realistic Salesforce scenarios to develop skills you
                            can implement immediately.
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <div className="w-20 h-20 relative flex justify-center items-center rounded-3xl mb-4">
                            <img className='absolute top-0 left-0 z-2' src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64369e04d29c9d9b21942d66_home-icon-background.webp" alt="Laptop" />
                            <PiLaptop className="text-5xl z-10" />
                        </div>
                        <h2 className="font-bold text-2xl">Practice Tests</h2>
                        <p className="text-gray-400 text-[17px] max-w-[90%] mx-auto mt-4">
                            Validate and measure your performance with hundreds of Salesforce exam-like questions.
                            Customize test sets to refocus your preparation efforts.
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <div className="w-20 h-20 relative flex justify-center items-center rounded-3xl mb-4">
                            <img className='absolute top-0 left-0 z-2' src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64369e04d29c9d9b21942d66_home-icon-background.webp" alt="Shield" />
                            <VscTypeHierarchySuper className="text-5xl z-10" />
                        </div>
                        <h2 className="font-bold text-2xl"> Learning Goals</h2>
                        <p className="text-gray-400 text-[17px] max-w-[90%] mx-auto mt-4">
                            Set completion deadlines to track your progress and hold yourself or your team accountable for
                            Salesforce learning milestones.
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <div className="w-20 h-20 relative flex justify-center items-center rounded-3xl mb-4">
                            <img className='absolute top-0 left-0 z-2' src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64369e04d29c9d9b21942d66_home-icon-background.webp" alt="Puzzle" />
                            <PiCertificateLight className="text-5xl z-10" />
                        </div>
                        <h2 className="font-bold text-2xl">Earn Continuing Education Units (CEUs)</h2>
                        <p className="text-gray-400 text-[17px] max-w-[90%] mx-auto mt-4">
                            Unlock courses on relevant Salesforce topics and earn CEUs to maintain your credentials.
                            Receive a completion certificate to share with your credential institution.
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <div className="w-20 h-20 relative flex justify-center items-center rounded-3xl mb-4">
                            <img className='absolute top-0 left-0 z-2' src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64369e04d29c9d9b21942d66_home-icon-background.webp" alt="Star" />
                            <RiTeamLine className="text-5xl z-10" />
                        </div>
                        <h2 className="font-bold text-2xl">Join Our Peers & Mentors Community</h2>
                        <p className="text-gray-400 text-[17px] max-w-[90%] mx-auto mt-4">
                            Learn Salesforce exam tips and tricks from a community of industry peers and mentors who are
                            ready to help you succeed.
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <div className="w-20 h-20 relative flex justify-center items-center rounded-3xl mb-4">
                            <img className='absolute top-0 left-0 z-2' src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64369e04d29c9d9b21942d66_home-icon-background.webp" alt="Hierarchy" />
                            <GoShieldX className="text-5xl z-10" />
                        </div>
                        <h2 className="font-bold text-2xl">Find Certifications for Your Career Path</h2>
                        <p className="text-gray-400 text-[17px] max-w-[90%] mx-auto mt-4">
                            Discover Salesforce certifications aligned with different career paths to help you break into the
                            Salesforce ecosystem and achieve your career goals.
                        </p>
                    </div>
                    {/* Repeat for other items */}
                </div>
            </div>


            <div className="mt-20 h-[600px] w-full relative">
                <img
                    className="absolute w-full h-full object-cover opacity-20"
                    src="https://1hairstop.in/cdn/shop/files/business-team-meeting-boardroom.webp?v=1717149564&width=3840"
                    alt="Background"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-3xl md:text-4xl text-white font-bold md:w-2/4">
                        Empower Your Team, Optimize Your Salesforce Environment
                    </h1>
                    <p className="mt-4 text-gray-300  max-w-2xl">
                        Empower your team to master Salesforce and enhance your organization's performance with
                        FortifyLearning. Request a demo today for access to hands-on practice labs, assessments,
                        custom content, and more.
                    </p>
                    <NavLink to='/business'>
                        <button
                            className="mt-8 bg-gradient-to-r from-red-500 to-fuchsia-500 py-3 px-8 text-white font-semibold rounded-2xl hover:shadow-lg transition-all">
                            FortifyLearning for free
                        </button>
                    </NavLink>
                </div>
            </div>
            <div className="mt-20 h-[600px] w-full ">
                <div className="inset-0 flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-3xl md:text-6xl text-white md:w-2/3">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-pink-600 to-fuchsia-600">
                            Industry-Leading
                        </span>
                        <br />
                        Certification Preparation

                    </h1>
                    <p className="mt-4 text-gray-300  max-w-2xl">
                        Explore our on-demand courses developed by seasoned Salesforce experts, aligned with the
                        key learning objectives of Salesforce certification exams.
                    </p>
                    <NavLink to='/business'>
                        <button
                            className="mt-8 bg-gradient-to-r from-red-500 to-fuchsia-500 py-3 px-8 text-white font-semibold rounded-2xl hover:shadow-lg transition-all">
                            Start Learning for free
                        </button>
                    </NavLink>
                </div>
                <div className="text-center flex flex-col items-center mt-10 lg:mt-20 px-4">
                    <div className="relative mt-8 md:mt-12 h-[100px] md:h-[150px] w-full max-w-6xl">
                        <Marquee className="h-full w-auto mx-auto overflow-hidden" direction="left" speed={100} delay={5}>
                            <div className="mx-8 md:mx-[60px]">
                                <img className="h-[30px] md:h-[50px]" src="https://clinicaltrialsbsva.com/wp-content/uploads/2017/07/cropped-logo-1.png" alt="Logo 1" />
                            </div>
                            <div className="mx-8 md:mx-[60px]">
                                <img className="h-[30px] md:h-[50px]" src="https://www.nicepng.com/png/full/395-3959971_verizon-logo-white-beige.png" alt="Logo 2" />
                            </div>
                            <div className="mx-8 md:mx-[60px]">
                                <img className="h-[30px] md:h-[50px]" src="https://white.logodownload.org/wp-content/uploads/2020/11/google-white-logo-1.png" alt="Logo 3" />
                            </div>
                            <div className="mx-8 md:mx-[60px]">
                                <img className="h-[30px] md:h-[50px]" src="https://biosciences.ecoexploratorio.org/wp-content/uploads/2023/08/AMGEN-logo-white-021fu.png" alt="Logo 4" />
                            </div>
                            <div className="mx-8 md:mx-[60px]">
                                <img className="h-[30px] md:h-[50px]" src="https://images.squarespace-cdn.com/content/v1/56b38e2aa3360ce530d55c24/2bf6f206-fc54-4067-9116-6a28f62a8dd1/Booz_Allen_logo_white-R-HiRes.png" alt="Logo 5" />
                            </div>
                            <div className="mx-8 md:mx-[60px]">
                                <img className="h-[30px] md:h-[50px]" src="https://companieslogo.com/img/orig/GD.D-18841bdb.png?t=1720244492" alt="Logo 6" />
                            </div>
                        </Marquee>
                        <div className="absolute top-0 left-0 w-1/4 md:w-1/2 h-full bg-gradient-to-r from-black/50 to-transparent"></div>
                        <div className="absolute top-0 right-0 w-1/4 md:w-1/2 h-full bg-gradient-to-l from-black/50 to-transparent"></div>
                    </div>
                </div>
            </div>
            <div className="w-full mt-20">
                <TestimonialsCarousel />
            </div>
            <div className="w-full mt-24 flex justify-center">
                <SignupComponent />
            </div>
        </div>
    );
}

export default Certifications;
