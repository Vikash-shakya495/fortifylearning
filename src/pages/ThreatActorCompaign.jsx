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

function ThreatActorCompaign() {
    const [visibleIndex, setVisibleIndex] = useState(null);

    // Function to toggle the visibility of paragraphs  
    const toggleParagraph = (index) => {
        setVisibleIndex(visibleIndex === index ? null : index);
    };
    const salesforceCourses = [
        {
            img: 'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/648c705c2f22ab09544d2056_TAC_Royal_Ransomware_Group_0.png',
            title: 'Royal Ransomware Group',
            overview: ' Royal is a spin-off group of Conti, which first emerged in January of 2022. The group consists of veterans of the ransomware industry and brings more advanced capabilities and TTPs against their victims. Begin this campaign to learn how to detect and protect against this newer APT group!',
            duration: '7H:7M    ',
            format: '0 CEUS',
            link: '/course/cyber-network-security'
        },
        {
            img: 'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468f0ef8fa7e6d3b7dc223a_TAC_MagicHound_0.png',
            title: 'Magic Hound',
            overview: 'Magic Hound (APT35) is an Iranian state-sponsored threat group that primarily targets organizations across various industries and geographic regions through cyber espionage. Launch this campaign to start detecting the sophisticated techniques leveraged by this threat group.',
            duration: '6 hours',
            format: 'Interactive lab sessions',
            link: '/practice-lab/secure-network-access'
        },
        {
            img: 'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468f0eda0f0472902002a89_TAC_RaspberryRobin_Cover.png',
            title: 'Raspberry Robin',
            overview: 'Raspberry Robin is a malware family that continues to be manipulated by several different threat groups for their purposes. These threat actors (Clop, LockBit, and Evil Corp) specialize in establishing persistence on a compromised host and creating remote connections to use later. Once established, these C2 connections can be used for multiple purposes, including data exfiltration, espionage, and even further exploitation.',
            duration: '8 hours',
            format: 'Hands-on projects and coding exercises',
            link: '/practice-lab/configure-a-virtual-network-service-endpoint'
        },
        {
            img: 'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468f0eba6842502e45b6e83_TAC_Double_Dragon_2022_Cover.png',
            title: 'Double Trouble with Double Dragon',
            overview: 'Advanced Persistent Threats (APTs) conduct state-sponsored cyberattacks that can radically disrupt global business operations. Launch this campaign to start detecting sophisticated techniques leveraged by APT41, known as "Double Dragon" because they cause double trouble with both espionage and financially-motivated attacks!',
            duration: '5 hours',
            format: 'Case studies and practical exercises',
            link: '/practice-lab/configure-linux-firewall-acl-rules'
        },
        {
            img: 'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468f0e9d58b7dd3fb3797b3_WeakLinkInTheSupplyChain.png',
            title: 'Weak Link in the Supply Chain',
            overview: 'Threat actors known as Advanced Persistent Threats (APTs) conduct highly sophisticated attacks sponsored by nation-states. They maintain a committment to stealth and often use custom malware. This campaign emulates a supply chain attack by APT29 that is similar to the SolarWinds compromise and it has the end goal of stealing sensitive information.',
            duration: '4 hours',
            format: 'Live demonstrations and guided practice',
            link: '/practice-lab/configure-ip-routing-with-linux-on-azure'
        },
        {
            img: 'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468f0e7e5685ff7eca06b03_SpinningWebShell.png',
            title: 'Spinning a Web Shell for Initial Access',
            overview: 'Certain threat actors specialize in targeting vulnerable web servers and gain initial access by exploiting public-facing applications. Then they act as access brokers for ransomware gangs. Such campaigns highlight the need to protect against known vulnerabilities. Understanding these techniques is key to protecting your organization.',
            duration: '3 hours',
            format: 'On-demand video tutorials',
            link: '/practice-lab/configure-network-connectivity-for-linux-on-azure'
        },
        {
            img: 'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468f0e58adeabd92b1365ef_Exfiltration-and-Extortion.png',
            title: 'Exfiltration and Extortion',
            overview: 'Threat actors will use stolen data exfiltrated from victim systems to extort organizations. Once they gain a foothold, they delete critical system files and threaten to release the data or disrupt operations if the victims do not pay up. Understanding these techniques is vital to defending your organization from such attacks.',
            duration: '6 hours',
            format: 'Interactive scenarios and quizzes',
            link: '/practice-lab/deploy-ubuntu-linux-virtual-machines-in-the-microsoft-azure'
        },
        {
            img: 'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468f0e28d514f984c239b5a_Ran_omware_for_Financial_Gain.png',
            title: 'Ransomware for Financial Gain ',
            overview: ' Threat actors continue to leverage ransomware to extort victim organizations. What was once a simple scheme to encrypt target data has expanded to include data disclosure and targeting a victim’s clients or suppliers. Understanding the techniques threat actors use in these attacks is vital to having an effective detection and mitigation strategy',
            duration: '5 hours',
            format: 'Case studies and practical exercises',
            link: '/practice-lab/can-you-use-pki-to-secure-a-network-environment-expert'
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
            <header
                className="mt-28 flex flex-col lg:flex-row px-6 md:px-48 items-center w-full h-[700px]"
                style={`{
        backgroundImage: 'url("https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/646fa669c6e80163629dd6fb_3_Threat_Actor.webp")',
        backgroundSize: '1600px',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }`}>
                <div className="mt-9 xl:mt-40 flex flex-col items-center md:items-start bg-opacity-80">
                    <span className="bg-gradient-to-r from-red-500 to-pink-600 px-4 py-1 bg-pink-500 text-xs font-semibold uppercase rounded-full mb-10">
                        Mission Readlines
                    </span>
                    <h1 className="text-left text-6xl md:text-6xl font-light-bold leading-relaxed mb-6">
                        Threat Actor<br />
                        Campaigns
                    </h1>
                    <p className="mt-4 max-w-full md:max-w-2xl text-center md:text-left text-gray-400">
                        Learn how adversaries target your environment and develop<br />
                        the skills to defend against threats with interactive courses <br />
                        that provide a complete overview of real-world kill chains.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row justify-center sm:justify-start items-center">
                        <NavLink to="/demo-request">
                            <button className="bg-gradient-to-r from-red-500 to-pink-600 px-6 py-3 rounded-md text-white hover:shadow-lg hover:shadow-pink-500/50 transition-shadow duration-300">
                                Start Learning For Free
                            </button>
                        </NavLink>
                    </div>
                </div>
            </header>


            {/* Background Image Section */}

            {/* Tabs Section */}
            <div className="mt-52 w-full">
                <h1 className="relative text-6xl md:text-4xl left-60 font-light-bold leading-relaxed mb-4">
                    Stay Ahead of Agile Adversaries
                </h1>
                <div className="relative flex flex-col lg:flex-row w-full justify-center gap-10 h-auto text-white py-8 px-4 sm:px-10 md:px-40 rounded-lg space-y-8 lg:space-y-0 lg:space-x-8">
                    <p className="relative left-20 text-gray-400 mb-3">
                        Gain a deeper understanding of advanced persistent threats (APTs)<br />
                        and identify methods used to compromise networks and steal<br />
                        sensitive information with real-world case studies, and learn how to<br />
                        effectively mitigate threats from nation-state actors, criminal<br />
                        organizations, and hacktivists with hands-on exercises. Enroll today<br />
                        to stay threat-informed and protect your organization from<br />
                        sophisticated cyber attacks.
                    </p>

                    {/* Image for Selected Tab */}
                    <div className="relative w-full lg:w-[900px] mx-auto">
                        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
                            <img
                                src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/6472ae3808dc67134cf925f2_TACimg.webp"
                                alt="Image Alt Text"
                                className="rounded-lg w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row items-center justify-between px-8 md:px-16 lg:px-24 py-12 bg-black text-white">
                    {/* Left Section */}
                    <div className="relative left-60 lg:w-1/2 space-y-6">
                        <h1 className="text-left text-3xl lg:text-4xl  leading-relaxed mb-6 text-white">
                            Why Threat Actor<br />
                            Campaigns?
                        </h1>


                        {/* Priority Item */}
                        <div className="space-y-8">
                            {/* First Item */}
                            <div className="flex justify-center items-center space-y-6 lg:space-y-0">
                                {/* Container with Flexbox to center all content */}
                                <div className="lg:flex lg:space-x-8 space-y-6 lg:space-y-0 max-w-7xl px-4">

                                    {/* Content Section */}
                                    <div className="flex-1 space-y-8">
                                        {/* First Item */}
                                        <div
                                            className="flex items-center gap-4 text-lg font-semibold text-gray-300 cursor-pointer hover:text-white"
                                            onClick={() => toggleParagraph(1)} // Open the paragraph on click
                                        >
                                            <img
                                                src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/647364c36fc6bf5f6fba066b_plugin.webp"
                                                alt="Warning Icon"
                                                className="w-8 h-8"  // Adjust the width and height as needed
                                            />
                                            <span>Think like an Adversary</span>
                                        </div>

                                        {visibleIndex === 1 && (
                                            <p className="text-gray-400 text-sm">
                                                Follow comprehensive attack scenarios to understand how,<br />
                                                why, and when adversaries will target your environment.
                                            </p>
                                        )}

                                        <hr className="border-gray-700" />

                                        {/* Second Item */}
                                        <div
                                            className="flex items-center gap-4 text-lg font-semibold text-gray-300 cursor-pointer hover:text-white"
                                            onClick={() => toggleParagraph(2)} // Open the paragraph on click
                                        >
                                            <img
                                                src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/647364c08bf42042653f8760_classroom.webp"
                                                alt="Warning Icon"
                                                className="w-8 h-8"  // Adjust the width and height as needed
                                            />
                                            <span>Learn from the Pros</span>
                                        </div>
                                        {visibleIndex === 2 && (
                                            <p className="text-gray-400 text-sm">
                                                Shadow subject matter experts as they identify and validate<br />
                                                threat actor behavior and build detection methods.
                                            </p>
                                        )}
                                        <hr className="border-gray-700" />

                                        {/* Third Item */}
                                        <div
                                            className="flex items-center gap-4 text-lg font-semibold text-gray-300 cursor-pointer hover:text-white"
                                            onClick={() => toggleParagraph(3)} // Open the paragraph on click
                                        >
                                            <img
                                                src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/6467bd74de1c0f8eb6738129_ShieldCheck.webp"
                                                alt="Warning Icon"
                                                className="w-8 h-8"  // Adjust the width and height as needed
                                            />
                                            <span>Respond to Critical Threats</span>
                                        </div>
                                        {visibleIndex === 3 && (
                                            <p className="text-gray-400 text-sm">
                                                Practice detecting adversary techniques with enterprise-class<br />
                                                security tools in a realistic environment.
                                            </p>
                                        )}
                                        <hr className="border-gray-700" />

                                        {/* Fourth Item */}
                                        <div
                                            className="flex items-center gap-4 text-lg font-semibold text-gray-300 cursor-pointer hover:text-white"
                                            onClick={() => toggleParagraph(4)} // Open the paragraph on click
                                        >
                                            <img
                                                src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/647362688126600a5a32ef3f_aim.webp"
                                                alt="Warning Icon"
                                                className="w-8 h-8"  // Adjust the width and height as needed
                                            />
                                            <span>Align to the MITRE ATT&CK® Framework</span>
                                        </div>
                                        {visibleIndex === 4 && (
                                            <p className="text-gray-400 text-sm">
                                                Hone your skills with hands-on training built around observed<br />
                                                adversary tactics and techniques.
                                            </p>
                                        )}
                                    </div>

                                    {/* Image Section */}
                                    <div className="relative left-40 flex-shrink-0 lg:w-[300px]">
                                        <img
                                            src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/643e705ccb8ecc0d48213c7a_home-learn.webp"
                                            alt="CVE Illustration"
                                            className="rounded-lg shadow-lg object-cover"
                                            style={`{ width: '200px', height: 'auto' }`}
                                        />
                                    </div>
                                </div>
                            </div>



                            {/* Text Content Area */}

                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-24 w-full text-white py-24 px-4 md:px-32 xl:px-68 flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-transparent">
                {/* Heading Section */}
                <h2 className="text-left text-6xl md:text-4xl font-light-bold leading-relaxed mb-6">
                    Threat-Informed Training
                </h2>
                <p className="text-center w-full md:w-3/5 mb-12 text-gray-400">
                    Leverage realistic tools, techniques, and attack scenarios to enhance your detection strategies and <br />
                    defend your organization.
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
            </div>
            <div className="mt-20 flex flex-col lg:flex-row w-11/12 lg:w-4/5 mx-auto gap-8 lg:gap-16">
            </div>
            <div className="mt-5 h-[600px] w-full relative">
                <img
                    className="absolute w-full h-full object-cover opacity-50"
                    src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/644a910e1c47c885d7611038_5.webp"
                    alt="Background"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-3xl md:text-5xl text-white  md:w-2/4">
                        Empower Your Team,<br />
                        Protect Your<br />
                        Organization
                    </h1>
                    <p className="mt-4 text-gray-300  max-w-2xl">
                        Empower your team to detect and mitigate cybersecurity threats<br />
                        with Cybrary. Request a demo today for access to hands-on<br />
                        practice labs, assessments, custom content, and more.
                    </p>
                    <button className="mt-8 bg-gradient-to-r from-red-500 to-fuchsia-500 py-3 px-8 text-white font-semibold rounded-2xl hover:shadow-lg transition-all">
                        Schedule a Demo
                    </button>
                </div>
            </div>
            <div className="w-full mt-24 flex justify-center">
                <SignupComponent />
            </div>
        </div>

    );
}

export default ThreatActorCompaign;