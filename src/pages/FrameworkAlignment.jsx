import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { VscTypeHierarchySuper } from "react-icons/vsc";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { TbListCheck } from "react-icons/tb";
import { PiRocket } from "react-icons/pi";
import { PiLaptop } from "react-icons/pi";
import { RiShieldStarLine } from "react-icons/ri";
import { HiOutlinePuzzle } from "react-icons/hi";
import { FaRegStar } from "react-icons/fa6";
import SignupComponent from "../components/home/SignupComponent";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";


const FrameworkAlignment = () => {
  const [selectedTab, setSelectedTab] = useState("LearnTheFramework");

  const content = {
    LearnTheFramework: {
      title: "Nice Workforce Framework for Cybersecurity",
      description:
        "Ensure your training aligns with the latest industry standards and best practices.",

      image:
        "https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/644bbe737bce787793bdb9f2_Frame%2096093-p-500.webp",
      icon: <VscTypeHierarchySuper className="text-3xl" />,
    },
    TakeAction: {
      title: "DoD 8140/8570",
      description:
        " Meet the rigorous cybersecurity requirements set forth by the Department of Defense",
      image:
        "https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/643e705ccb8ecc0d48213c7a_home-learn-p-800.webp",
      icon: <HiOutlineRocketLaunch className="text-3xl" />,
    },
    DevelopAPlan: {
      title: "MITRE ATT&CK Framework",
      description:
        " Learn to identify and mitigate advanced threats using the industry's most comprehensive adversarial tactics, techniques, and common knowledge (TTP) database.",
      image:
        "https://149359217.v2.pressablecdn.com/wp-content/uploads/2019/01/plan-1170x766.jpg",
      icon: <TbListCheck className="text-3xl" />,
    },
  };

  const courses = [
    {
      title: "SC-200 Microsoft Security Operations Analyst",
      subtitle:
        " ● Learn to: Reduce risk by rapidly remediating active attacks in your Salesforce environment,advise on improvements to threat protection practices, and refer policy violations to appropriate stakeholders. ● Prerequisites: Familiarity with Microsoft 365, Azure cloud services, and Windows and Linux operating systems.",

      badge: "COURSE",
      duration: "8H:20M",
      ceus: "8 CEUS",
      image: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64e784d38835d8cfd88b476b_SC-200_cover-p-500.png",
      link: '/course/sc-200-microsoft-security-operations-analyst'
    },
    {
      title: "CompTIA Security+ Certification Prep",
      subtitle:
        "● Learn to: Master cybersecurity principles and best practices, essential for entry-level cybersecurity positions. ● Outcome: Prepare for the globally recognized CompTIA Security+ certification exam.",

      badge: "COURSE",
      duration: "18H:28M",
      ceus: "10 CEUS",
      image: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c1717d5c861ce9d59709_CompTIA_Security_-p-500.png",
      link: '/course/sc-200-microsoft-security-operations-analyst'
    },
    {
      title: "OWASP Top 10 - A08:2021 - Software and Data Integrity Failures",
      subtitle:
        "● Learn to: Implement best practices for data and software integrity verification and risk mitigation in Salesforce environments. ● Outcome: Protect your Salesforce applications from vulnerabilities related to software and data integrity failures",
      duration: "2H:37M",
      ceus: "3 CEUS",
      image: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c1717d5c861ce9d59709_CompTIA_Security_-p-500.png",
      link: '/course/sc-200-microsoft-security-operations-analyst'
    },
    {
      title: "OWASP Top 10 - A04:2021 - Insecure Design",
      subtitle:
        "● Learn to: Utilize threat modeling and other techniques to safeguard your Salesforce organization against critical design flaws. ● Outcome: Prevent adversaries from exploiting vulnerabilities in your Salesforce application's design.",
      badge: "COURSE",
      duration: "1H:34M",
      ceus: "2 CEUS",
      image: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c1717d5c861ce9d59709_CompTIA_Security_-p-500.png",
      link: '/course/sc-200-microsoft-security-operations-analyst'
    },
    {
      title: "OWASP Top 10 - A09:2021 - Security Logging and Monitoring Failures",
      subtitle:
        "● Learn to: Develop effective security logging and monitoring solutions for your Salesforce environment. ● Outcome: Improve your ability to detect and respond to security incidents within Salesforce. ",
      badge: "COURSE",
      duration: "2H:4M",
      ceus: "2 CEUS",
      image: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c1717d5c861ce9d59709_CompTIA_Security_-p-500.png",
      link: '/course/sc-200-microsoft-security-operations-analyst'
    },
    {
      title: " OWASP Top 10 - A10:2021 - Server-Side Request Forgery (SSRF) (2 Hours, 10 Minutes, 2CEUs)",
      subtitle:
        "● Learn to: Identify, exploit, and remediate SSRF vulnerabilities in Salesforce applications. ● Outcome: Enhance your offensive security and penetration testing skills specifically for Salesforce.",
      badge: "COURSE",
      duration: "2H:10M",
      ceus: "2 CEUS",
      image: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c1717d5c861ce9d59709_CompTIA_Security_-p-500.png",
      link: '/course/sc-200-microsoft-security-operations-analyst'
    },
    {
      title: "OWASP Top 10 - A05:2021 - Security Misconfiguration",
      subtitle:
        "● Learn to: Identify and address security misconfigurations in Salesforce environments. ● Outcome: Strengthen the security posture of your Salesforce applications and prevent unauthorized access.",
      badge: "COURSE",
      duration: "2H:46M",
      ceus: "4 CEUS",
      image: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c1717d5c861ce9d59709_CompTIA_Security_-p-500.png",
      link: '/course/sc-200-microsoft-security-operations-analyst'
    },
    {
      title: " OWASP Top 10 - A02:2021 - Cryptographic Failures",
      subtitle:
        "● Learn to: Identify, exploit, and remediate cryptographic failures in Salesforce applications. ● Outcome: Protect your Salesforce data from unauthorized access and data breaches.",
      badge: "COURSE",
      duration: "2H:19M",
      ceus: "3 CEUS",
      image: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c1717d5c861ce9d59709_CompTIA_Security_-p-500.png",
      link: '/course/sc-200-microsoft-security-operations-analyst'
    },
  ];


  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const totalPages = Math.ceil(courses.length / itemsPerPage);

  const currentCourses = courses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="bg-black mt-40 text-white py-16 px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h1 className="text-3xl md:text-6xl leading-tight mb-6">
            Salesforce-Aligned Cybersecurity Training
          </h1>
          <p className="text-gray-400 mb-8">
            At Cybrary, we understand the importance of providing
            high-quality, industry-relevant cybersecurity training. That’s why we’ve meticulously aligned our curriculum
            with key industry frameworks such as the NICE Framework, DOD 8140/8570, and MITRE ATT&CK. Our
            Salesforce-specific training courses ensure that you stay up-to-date with the latest industry trends and
            best practices, equipping you with the skills and knowledge to protect your organization's valuable data
            and assets.
          </p>
          <button className="px-6 py-3 bg-gradient-to-r from-red-500 via-pink-600  to-fuchsia-600 text-white font-semibold text-lg rounded-lg hover:opacity-90 transition-opacity">
            <NavLink to='/upgrade'>
              Get Started
            </NavLink>
          </button>
        </div>
        <div className="relative flex justify-center items-center">
          <img
            src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/668e459f9b23d37a2e368bd0_image%209-min.png"
            alt="Main Visual"
            className="w-72 rounded-lg shadow-lg"
          />
        </div>
      </div>
      <div className="mt-28 w-full mx-auto sm:w-4/5 px-4">


        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

          <div className="flex flex-col">
            <div className="w-20 h-20 relative flex justify-center items-center rounded-3xl mb-4">
              <img className='absolute top-0 left-0 z-2' src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64369e04d29c9d9b21942d66_home-icon-background.webp" alt="Puzzle" />
              <HiOutlinePuzzle className="text-5xl z-10" />
            </div>
            <h2 className="text-2xl">Meet rigorous Salesforce security standards with ease</h2>
            <p className="text-gray-400 text-[17px] max-w-[90%] mx-auto mt-4">

            </p>
          </div>

          <div className="flex flex-col">
            <div className="w-20 h-20 relative flex justify-center items-center rounded-3xl mb-4">
              <img className='absolute top-0 left-0 z-2' src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64369e04d29c9d9b21942d66_home-icon-background.webp" alt="Star" />
              <FaRegStar className="text-5xl z-10" />
            </div>
            <h2 className=" text-2xl">Achieve industry-recognized Salesforce certifications.</h2>
            <p className="text-gray-400 text-[17px] max-w-[90%] mx-auto mt-4">
            </p>
          </div>

          <div className="flex flex-col">
            <div className="w-20 h-20 relative flex justify-center items-center rounded-3xl mb-4">
              <img className='absolute top-0 left-0 z-2' src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64369e04d29c9d9b21942d66_home-icon-background.webp" alt="Hierarchy" />
              <VscTypeHierarchySuper className="text-5xl z-10" />
            </div>
            <h2 className=" text-2xl">Excel in Salesforce cybersecurity</h2>
            <p className="text-gray-400 text-[17px] max-w-[90%] mx-auto mt-4">

            </p>
          </div>
          {/* Repeat for other items */}
        </div>
      </div>
      {/* Tabbed Content Section */}
      <div className="mt-16 w-5/6 mx-auto">
        <div className="flex lg:flex-row flex-col gap-12 lg:gap-2 items-center">
          <div className="flex flex-col">
            <h2 className="text-5xl mb-12">
              Gain access to relevant, <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-fuchsia-500">comprehensive </span>training
            </h2>
            <div className="lg:w-1/2 space-y-8">
              {Object.keys(content).map((key) => (
                <div key={key}>
                  <div
                    onClick={() => setSelectedTab(key)}
                    className={`flex items-center cursor-pointer ${selectedTab === key ? "text-white" : "text-gray-400"
                      }`}
                  >
                    <div className={`h-4 w-4 mr-2 bg-gradient-to-tr from-red-500 to-fuchsia-500 rounded-full ${selectedTab === key ? "visible" : "hidden"}`}>
                    </div>
                    {content[key].icon}
                    <h3
                      className={`ml-2 text-xl ${selectedTab === key ? "font-bold" : "font-normal"
                        }`}
                    >
                      {content[key].title}
                    </h3>
                  </div>
                  {selectedTab === key && (
                    <div className="mt-4 text-gray-400">
                      <p>{content[key].description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 flex items-center h-full">
            <img
              src={content[selectedTab].image}
              alt={content[selectedTab].title}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Courses Section */}
      <div className="bg-black py-10 mt-40 lg:w-5/6 mx-auto">
        <h2 className="text-center mx-auto text-5xl mb-12 md:w-2/3">
          Curriculum Built on <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-fuchsia-500"> Trusted Industry</span> Frameworks
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  mx-auto gap-6 px-5 md:px-10">
          {currentCourses.map((course) => (
            <div
              key={course.id}
              className={`group relative rounded-lg border-gray-100 border shadow-lg bg-gray-900 overflow-hidden transition-all duration-300 hover:pb-16`}
            >
              <NavLink to={course.link}>
                <img className="rounded-lg" src={course.image} alt={course.title} />
                <div className="p-4 transition-all duration-300">
                  <div className="mb-4">
                    <span className="text-xs font-bold bg-pink-600 py-2 px-3 rounded-full uppercase">
                      Course
                    </span>
                    <div className="flex gap-2 mt-6">
                      <span className="py-1 bg-black rounded-xl px-3">{course.duration}</span>
                      <span className="py-1 bg-black rounded-xl px-3">{course.ceus}</span>
                    </div>
                  </div>
                  <p className="mt-6 text-2xl font-semibold">{course.title}</p>
                  <p className="text-md mt-2 text-gray-300 line-clamp-3">{course.subtitle}</p>
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
        <div className="flex justify-center gap-4 items-center mt-6">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className={`p-4 rounded-full bg-gray-800 text-white ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-700"
              }`}
          >
            <FiArrowLeft />
          </button>
          <span className="text-gray-400">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`p-4 rounded-full bg-gray-800 text-white ${currentPage === totalPages
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-700"
              }`}
          >
            <FiArrowRight />
          </button>
        </div>
      </div>
      <div className="w-full mt-24 flex justify-center">
        <SignupComponent />
      </div>
    </div>
  );
};

export default FrameworkAlignment;