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

function CveSeries() {
    const [visibleIndex, setVisibleIndex] = useState(null);  

    // Function to toggle the visibility of paragraphs  
    const toggleParagraph = (index) => {  
      setVisibleIndex(visibleIndex === index ? null : index);  
    };  
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
    <header
    className="mt-28 flex flex-col lg:flex-row px-6 md:px-48 items-center w-full h-[500px]"
    style={{
        backgroundImage:
            'url("https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/646fa66944f4f022ea40b939_2_CVE_Series.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }}
>
    <div className="mt-8 xl:mt-40 flex flex-col items-center md:items-start bg-opacity-80">
        <h1 className="text-left text-6xl md:text-6xl font-light-bold leading-relaxed mb-6">
            CVE Series
        </h1>
        <p className="mt-4 max-w-full md:max-w-2xl text-center md:text-left text-gray-400">
        Reduce risk and keep adversaries out of your environment<br />
        with hands-on training built around the latest vulnerabilities <br />   
        and exploits.
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
            <h1 className="relative text-6xl md:text-4xl left-80 font-light-bold leading-relaxed mb-4">
            Protect Your Environment
            </h1>
            <div className="relative flex flex-col lg:flex-row w-full justify-center gap-10 h-auto text-white py-8 px-4 sm:px-10 md:px-40 rounded-lg space-y-8 lg:space-y-0 lg:space-x-8">
            <p className="relative left-20 text-gray-400 mb-3">
            Our CVE series lets you experience critical vulnerabilities through<br/>
             interactive courses and secure virtual environments to develop the<br/>
            skills necessary to mitigate risk.
            </p>
                    {/* Image for Selected Tab */}
                    <div className="relative w-full lg:w-[500px] mx-auto">
                    <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
                    <img
                    src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64537d956b1a136be7fda126_Frame%2096037.webp"
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
    Explore CVEs From<br />
    Every Angle
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
    src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/6467bd068eb30af7f7ed5a89_Warning.webp"
    alt="Warning Icon"
    className="w-8 h-8"  // Adjust the width and height as needed
  />
  <span>Prioritize Risks</span>
      </div>
      {visibleIndex === 1 && (
        <p className="text-gray-400 text-sm">
          Gain insights on how to read and leverage the MITRE ATT&CK Framework to improve your security strategy and map real-world adversary tactics, techniques, and procedures (TTPs) to Cybrary's custom-designed MITRE ATT&CK matrix.
        </p>
      )}
      <hr className="border-gray-700" />

      {/* Second Item */}
      <div 
        className="flex items-center gap-4 text-lg font-semibold text-gray-300 cursor-pointer hover:text-white"
        onClick={() => toggleParagraph(2)} // Open the paragraph on click
      >
      <img
    src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/6467bd5670ea9fec4ceb5d2d_MagnifyingGlass.webp"
    alt="Warning Icon"
    className="w-8 h-8"  // Adjust the width and height as needed
  />
  <span>Quickly Identify and Address</span>
      </div>
      {visibleIndex === 2 && (
        <p className="text-gray-400 text-sm">
          Gain insights on how to read and leverage the MITRE ATT&CK Framework to improve your security strategy and map real-world adversary tactics, techniques, and procedures (TTPs) to Cybrary's custom-designed MITRE ATT&CK matrix.
        </p>
      )}
      <hr className="border-gray-700" />

      {/* Third Item */}
      <div 
        className="flex items-center gap-4 text-lg font-semibold text-gray-300 cursor-pointer hover:text-white"
        onClick={() => toggleParagraph(3)} // Open the paragraph on click
      >
      <img
    src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/6467bd810d640f665836b920_Sword.webp"
    alt="Warning Icon"
    className="w-8 h-8"  // Adjust the width and height as needed
  />
  <span>Assess Exploitability and Impact</span>
      </div>
      {visibleIndex === 3 && (
        <p className="text-gray-400 text-sm">
          Gain insights on how to read and leverage the MITRE ATT&CK Framework to improve your security strategy and map real-world adversary tactics, techniques, and procedures (TTPs) to Cybrary's custom-designed MITRE ATT&CK matrix.
        </p>
      )}
      <hr className="border-gray-700" />

      {/* Fourth Item */}
      <div 
        className="flex items-center gap-4 text-lg font-semibold text-gray-300 cursor-pointer hover:text-white"
        onClick={() => toggleParagraph(4)} // Open the paragraph on click
      >
      <img
    src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/6467bd74de1c0f8eb6738129_ShieldCheck.webp"
    alt="Warning Icon"
    className="w-8 h-8"  // Adjust the width and height as needed
  />
  <span>Safely Mitigate</span>
      </div>
      {visibleIndex === 4 && (
        <p className="text-gray-400 text-sm">
          Gain insights on how to read and leverage the MITRE ATT&CK Framework to improve your security strategy and map real-world adversary tactics, techniques, and procedures (TTPs) to Cybrary's custom-designed MITRE ATT&CK matrix.
        </p>
      )}
    </div>

    {/* Image Section */}
    <div className="relative left-40 flex-shrink-0 lg:w-[300px]">
      <img
        src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/6467bdd4a7da50119efab8c8_Frame%2016.webp"
        alt="CVE Illustration"
        className="rounded-lg shadow-lg object-cover"
        style={{ width: '200px', height: 'auto' }}
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
                <h2 className="text-left text-6xl md:text-4xl font-light leading-relaxed mb-6">
                Be Ready to Respond
                </h2>
                <p className="text-center w-full md:w-3/5 mb-12 text-gray-400">
                As high-impact security flaws are discovered and exploited by adversaries in the wild, develop the <br />
                skills you need to reduce risk. Subscribe to our CVE Series to be the first to know when new  <br/>
                courses are available.
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
               
                {/* Text Content Section */}
                </div>

           
            <div className="mt-5 h-[600px] w-full relative">
                <img
                    className="absolute w-full h-full object-cover opacity-50"
                    src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/644a910e1c47c885d7611038_5.webp"
                    alt="Background"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-3xl md:text-5xl text-white  md:w-2/4">
                        Empower Your Team,<br/>
                        Protect Your<br/>
                        Organization
                    </h1>
                    <p className="mt-4 text-gray-300  max-w-2xl">
                    Empower your team to detect and mitigate cybersecurity threats<br/>
                    with Cybrary. Request a demo today for access to hands-on<br/> 
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

export default CveSeries;