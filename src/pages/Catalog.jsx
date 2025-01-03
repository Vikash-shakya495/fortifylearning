import React, { useState } from "react";

import { MdOutlineOndemandVideo } from "react-icons/md";
import { CiLaptop } from "react-icons/ci";
import { FaLaptopCode } from "react-icons/fa";
import { PiCertificate } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import TestimonialsCarousel from "../components/home/TestimonialsCarousel";
import SignupComponent from "../components/home/SignupComponent";

function Catalog() {

  const instructors = [
    {
      name: "Georgia Weidman",
      title: "Founder and CTO at Shevirah and Bulb Security",
      image: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468b63924fc968858a9ae90_georgia_weidman.jpeg", // Replace with the actual image URL
    },
    {
      name: "Max Alexander",
      title: "VP, Cybersecurity Incident Response Planning at JPMorgan",
      image: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468b63b51ca842c6794392d_max_alexander.jpeg", // Replace with the actual image URL
    },
    {
      name: "Joe Perry",
      title: "Senior Technical Instructor at FireEye, Inc",
      image: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468b63d8d9f852a6465b978_joe-perry-profile-238x300.png", // Replace with the actual image URL
    },
    {
      name: "Carter Schoenberg",
      title: "Executive VP of IPKeys Power Partners",
      image: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468be551f5ef0847b913ce5_carter_shoenberg.jpeg", // Replace with the actual image URL
    },
  ];

  const salesforceCourses = [
    {
      level: "Beginner",
      img: "https://isodoc.co.uk/wp-content/uploads/2023/06/training-procedure.jpg",
      title: "Salesforce Fundamentals",
      overview:
        "Get started with the basics of Salesforce, including navigation, data management, and reporting.",
      duration: "4 hours",
      format: "On-demand video",
      link: "/course/cyber-network-security",
    },
    {
      level: "Intermediate",
      img: "https://cdn.shopaccino.com/igmguru/products/salesforce-training-igmguru_1400382585_l.jpg?v=500",
      title: "Advanced Salesforce Administration",
      overview:
        "Dive deeper into advanced admin topics, including custom objects, complex workflows, and advanced data management.",
      duration: "6 hours",
      format: "Interactive lab sessions",
      link: "/practice-lab/secure-network-access",
    },
    {
      level: "Advanced",
      img: "https://dianapps.com/blog/wp-content/uploads/2022/12/Reasons-Why-Every-Company-Needs-a-Dedicated-Salesforce-Developer.png",
      title: "Salesforce Developer Essentials",
      overview:
        "Learn the core development skills needed to build and customize Salesforce applications using Apex and Visualforce.",
      duration: "8 hours",
      format: "Hands-on projects and coding exercises",
      link: "/practice-lab/configure-a-virtual-network-service-endpoint",
    },
    {
      level: "Intermediate",
      img: "https://www.apexhours.com/wp-content/uploads/2021/06/Factors-Influencing-Salesforce-Org-Strategy.png",
      title: "Salesforce Integration Strategies",
      overview:
        "Understand various integration methods and tools for connecting Salesforce with other systems, including APIs and middleware.",
      duration: "5 hours",
      format: "Case studies and practical exercises",
      link: "/practice-lab/configure-linux-firewall-acl-rules",
    },
    {
      level: "Advanced",
      img: "https://360degreecloud.com/wp-content/uploads/2024/03/Salesforce-Data-Migration-Why-Its-Time-to-Make-the-Move-1024x535.jpg",
      title: "Data Migration with Salesforce",
      overview:
        "Master data import, export, and transformation techniques to ensure smooth data migration into Salesforce.",
      duration: "4 hours",
      format: "Live demonstrations and guided practice",
      link: "/practice-lab/configure-ip-routing-with-linux-on-azure",
    },
  ];


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
  ]

  const filters = ["Beginner", "Intermediate", "Advanced"];
  const [filter, setFilter] = useState(null); // Active filter
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 6;

  // Handle filter selection
  const handleFilter = (level) => {
    setFilter(level);
    setCurrentPage(1); // Reset to the first page
  };

  const filteredCourses = filter
    ? salesforceCourses.filter((course) => course.level === filter)
    : salesforceCourses;

  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);

  const paginatedCourses = filteredCourses.slice(
    (currentPage - 1) * coursesPerPage,
    currentPage * coursesPerPage
  );


  // stay ahead

  const stayAheadCourses = [
    {
      category: "Mitre Attack",
      img: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c320276e5718758b7549_CISSP.png",
      title: "Understanding Mitre Attack Framework",
      overview: "Learn about the Mitre Attack framework and how to apply it in real-world scenarios.",
      duration: "3 hours",
      format: "On-demand video",
      link: "/course/mitre-attack",
    },
    {
      category: "Threat",
      img: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c320276e5718758b7549_CISSP.png",
      title: "Threat Intelligence Fundamentals",
      overview: "An introduction to threat intelligence and its importance in cybersecurity.",
      duration: "4 hours",
      format: "Interactive lab sessions",
      link: "/course/threat-intelligence",
    },
    {
      category: "CVE Series",
      img: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c320276e5718758b7549_CISSP.png",
      title: "CVE Analysis and Management",
      overview: "Learn how to analyze and manage Common Vulnerabilities and Exposures (CVEs).",
      duration: "5 hours",
      format: "Hands-on projects",
      link: "/course/cve-analysis",
    },
    {
      category: "Challenges",
      img: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c320276e5718758b7549_CISSP.png",
      title: "Cybersecurity Challenges",
      overview: "Participate in various cybersecurity challenges to test your skills.",
      duration: "2 hours",
      format: "Live challenges",
      link: "/course/cybersecurity-challenges",
    },
    {
      category: "OWASP",
      img: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c320276e5718758b7549_CISSP.png",
      title: "OWASP Top Ten Vulnerabilities",
      overview: "Understand the OWASP Top Ten vulnerabilities and how to mitigate them.",
      duration: "3 hours",
      format: "Webinars and discussions",
      link: "/course/owasp-top-ten",
    },
  ];


  const stayAheadFilters = ["Mitre Attack", "Threat", "CVE Series", "Challenges", "OWASP"];
  const [stayAheadFilter, setStayAheadFilter] = useState(null); // Active filter for Stay Ahead
  const [stayAheadCurrentPage, setStayAheadCurrentPage] = useState(1);
  const stayAheadCoursesPerPage = 6;


  const filteredStayAheadCourses = stayAheadFilter
    ? stayAheadCourses.filter((course) => course.category === stayAheadFilter)
    : stayAheadCourses;

  const totalStayAheadPages = Math.ceil(filteredStayAheadCourses.length / stayAheadCoursesPerPage);

  const paginatedStayAheadCourses = filteredStayAheadCourses.slice(
    (stayAheadCurrentPage - 1) * stayAheadCoursesPerPage,
    stayAheadCurrentPage * stayAheadCoursesPerPage
  );




  return (
    <div className="bg-black mt-20 text-white min-h-screen flex flex-col  justify-center overflow-x-hidden">
      <div className="flex flex-col sm:flex-row items-center gap-8 md:w-5/6 mx-auto mt-24">
        {/* Header Section */}
        <div className="w-full sm:w-1/2">
          <h1 className="text-4xl md:text-6xl">
            Browse the{" "}
            <span className="text-gradient bg-gradient-to-r from-pink-500 via-red-500 to-purple-500 bg-clip-text text-transparent">
              Full Catalog
            </span>
          </h1>
          <p className="mt-6 text-gray-400 text-lg">
            Cybrary’s comprehensive, framework-aligned catalog has been reorganized to provide you with an intentional, guided learning experience. Advance your career, prep for certifications, and build your skills whenever, wherever.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="bg-gradient-to-r from-pink-500 via-red-500 to-purple-500 text-white font-semibold px-6 py-3 rounded-md hover:opacity-90 transition">
              Start Learning for Free
            </button>
            <button className="border border-gray-600 text-gray-400 px-6 py-3 rounded-md hover:text-white hover:border-white transition">
              Try Cybrary for Teams &rarr;
            </button>
          </div>
        </div>

        {/* Cards Section */}
        <div className="w-full sm:w-1/2 flex justify-center">
          <img
            className="w-full h-auto max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl"
            src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/668e459f9b23d37a2e368bd0_image%209-min-p-500.png"
            alt="Catalog Image"
          />
        </div>
      </div>
      <div className="mt-28 w-full justify-center px-4 sm:px-10 md:px-20 lg:px-40 bg-gradient-to-b from-gray-900 to-transparent pt-20 pb-32">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl w-full sm:w-2/3 text-center">
            The content and tools you need to build{" "}
            <span className="bg-gradient-to-r from-pink-500 via-red-500 to-purple-500 bg-clip-text text-transparent">
              real-world skills
            </span>
          </h1>
          <p className="text-gray-500 pt-10 w-full sm:w-2/3 text-center">
            Rapidly develop your skills via an integrated and engaging learning
            experience on the Cybrary platform.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 relative flex justify-center items-center rounded-3xl mb-4">
              <img
                className="absolute top-0 left-0 z-0"
                src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64369e04d29c9d9b21942d66_home-icon-background.webp"
                alt="Rocket"
              />
              <MdOutlineOndemandVideo className="text-5xl z-10" />
            </div>
            <h2 className="font-bold text-2xl text-center">Bite-sized Video Training</h2>
            <p className="text-gray-400 text-[17px] max-w-[90%] mx-auto mt-4 text-center">
              Manageable instruction from industry experts
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-20 h-20 relative flex justify-center items-center rounded-3xl mb-4">
              <img
                className="absolute top-0 left-0 z-0"
                src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64369e04d29c9d9b21942d66_home-icon-background.webp"
                alt="Laptop"
              />
              <CiLaptop className="text-5xl z-10" />
            </div>
            <h2 className="font-bold text-2xl text-center">Hands-On Learning</h2>
            <p className="text-gray-400 text-[17px] max-w-[90%] mx-auto mt-4 text-center">
              Put your skills to the test in virtual labs, challenges, and simulated environments
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-20 h-20 relative flex justify-center items-center rounded-3xl mb-4">
              <img
                className="absolute top-0 left-0 z-0"
                src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64369e04d29c9d9b21942d66_home-icon-background.webp"
                alt="Shield"
              />
              <FaLaptopCode className="text-5xl z-10" />
            </div>
            <h2 className="font-bold text-2xl text-center">Practice Exams</h2>
            <p className="text-gray-400 text-[17px] max-w-[90%] mx-auto mt-4 text-center">
              Prepare for industry certifications with insider tips and practice exams
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-20 h-20 relative flex justify-center items-center rounded-3xl mb-4">
              <img
                className="absolute top-0 left-0 z-0"
                src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64369e04d29c9d9b21942d66_home-icon-background.webp"
                alt="Puzzle"
              />
              <PiCertificate className="text-5xl z-10" />
            </div>
            <h2 className="font-bold text-2xl text -center">Earn Industry Badges</h2>
            <p className="text-gray-400 text-[17px] max-w-[90%] mx-auto mt-4 text-center">
              Complete coursework to earn industry-recognized badges via Credly
            </p>
          </div>
          {/* Repeat for other items */}
        </div>
      </div>
      <div className="text-white p-4 md:p-8 flex flex-col md:flex-row md:px-40 gap-8">
        {/* Sidebar Filters */}
        <div className="flex flex-col space-y-6 mb-8 w-full md:w-1/4">
          <h1 className="text-4xl">Certification Prep</h1>
          <div className="flex justify-between">
            <span>Filter By</span>
            <span>
              <div
                onClick={() => handleFilter(null)}
                className="text-center font-semibold cursor-pointer text-gray-400 hover:text-white transition-colors duration-300"
              >
                Clear
              </div>
            </span>
          </div>
          {filters.map((level) => (
            <div
              key={level}
              onClick={() => handleFilter(level)}
              className="flex items-center cursor-pointer space-x-3 group transition-all duration-300"
            >
              {filter === level && (
                <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
              )}
              <div className="group flex items-center cursor-pointer">
                <span
                  className={`text-xl transform transition-transform duration-300 group-hover:translate-x-4 ${filter === level ? "font-semibold text-white" : "font-normal text-gray-400"
                    }`}
                >
                  {level}
                </span>
                <span className="ml-4 text-xl transform transition-transform duration-300 group-hover:translate-x-2 text-gray-400 group-hover:text-white">
                  <FiArrowRight />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full md:w-3/4">
          {paginatedCourses.map((course) => (
            <div
              key={course.id}
              className={`group relative rounded-lg border-gray-100 border shadow-lg bg-gray-900 overflow-hidden transition-all duration-300 hover:pb-16`}
            >
              <NavLink to={course.link}>
                <img className="w-full rounded-tr-lg rounded-tl-lg" src={course.img} alt={course.title} />
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
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-4 mt-8 w-full">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="text-sm px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 disabled:opacity-50"
            >
              Previous
            </button>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`text-sm px-4 py-2 rounded ${currentPage === index + 1
                  ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                  : "bg-gray-700 text -white hover:bg-gray-600"
                  }`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="text-sm px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
      <div className="bg-black-900 text-white p-8 flex flex-col lg:flex-row md:w-5/6 mx-auto lg:gap-8 xl:gap-36">
        <div className="flex flex-col space-y-6 mb-8">
          <h1 className="text-4xl md:w-1/4">Career Paths</h1>
        </div>

        {/* Responsive grid layout */}
        <div className="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
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
      </div>
      <div className="text-white p-8 flex flex-col lg:flex-row md:w-5/6 mx-auto gap-16">
        {/* Sidebar Filters for Stay Ahead */}
        <div className="flex flex-col  space-y-6 mb-8 md:w-1/4">
          <h1 className="text-4xl">Stay Ahead</h1>
          <div className="flex justify-between">
            <span>Filter By</span>
            <span>
              <div
                onClick={() => setStayAheadFilter(null)}
                className="text-center font-semibold cursor-pointer text-gray-400 hover:text-white transition-colors duration-300"
              >
                Clear
              </div>
            </span>
          </div>
          <div>
            {stayAheadFilters.map((category) => (
              <div
                key={category}
                onClick={() => {
                  setStayAheadFilter(category);
                  setStayAheadCurrentPage(1); // Reset to the first page
                }}
                className="flex items-center cursor-pointer space-x-3 group transition-all duration-300"
              >
                {stayAheadFilter === category && (
                  <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
                )}
                <div className="group flex items-center cursor-pointer mb-4">
                  <span
                    className={`text-xl transform transition-transform duration-300 group-hover:translate-x-4 ${stayAheadFilter === category ? "font-semibold text-white" : "font-normal text-gray-400"
                      }`}
                  >
                    {category}
                  </span>
                  <span className="ml-4 text-xl transform transition-transform duration-300 group-hover:translate-x-2 text-gray-400 group-hover:text-white">
                    <FiArrowRight />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cards for Stay Ahead */}
        <div className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedStayAheadCourses.map((course) => (
            <div
              key={course.title}
              className={`group relative rounded-lg border-gray-100 border shadow-lg bg-gray-900 overflow-hidden transition-all duration-300 hover:pb-16`}
            >
              <NavLink to={course.link}>
                <img className="w-full rounded-tr-lg rounded-tl-lg" src={course.img} alt={course.title} />
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

        {/* Pagination Controls for Stay Ahead */}
        {totalStayAheadPages > 1 && (
          <div className="flex justify-center items-center space-x-4 mt-8 w-full">
            <button
              onClick={() => setStayAheadCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={stayAheadCurrentPage === 1}
              className="text-sm px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 disabled:opacity-50"
            >
              Previous
            </button>
            {[...Array(totalStayAheadPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setStayAheadCurrentPage(index + 1)}
                className={` text-sm px-4 py-2 rounded ${stayAheadCurrentPage === index + 1
                  ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                  : "bg-gray-700 text-white hover:bg-gray-600"
                  }`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => setStayAheadCurrentPage((prev) => Math.min(prev + 1, totalStayAheadPages))}
              disabled={stayAheadCurrentPage === totalStayAheadPages}
              className="text-sm px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
      <div className="bg-gradient-to-b from-gray-900 to-black py-16">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-white">Our Instructors</h2>
          <p className="text-purple-500 font-medium mt-2">
            Industry seasoned. Cybrary trained.
          </p>
          <p className="text-gray-300 mt-2">
            Our instructors are current cybersecurity professionals trained by
            Cybrary to deliver engaging, consistent, quality content.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6">
          {instructors.map((instructor, index) => (
            <div
              key={index}
              className="bg-gray-900 border text-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={instructor.image}
                alt={instructor.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="bg-pink-600 text-xs font-bold uppercase px-2 py-1 inline-block rounded-full">
                  Instructor
                </div>
                <h3 className="text-lg font-semibold mt-2">{instructor.name}</h3>
                <p className="text-sm text-gray-300 mt-1">{instructor.title}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className=" text-white border px-6 py-2 rounded-lg hover:bg-purple-700 transition">
            See All Instructors
          </button>
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

export default Catalog;
