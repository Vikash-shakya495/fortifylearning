import React, { useState } from "react";

import { MdOutlineOndemandVideo } from "react-icons/md";
import { CiLaptop } from "react-icons/ci";
import { FaLaptopCode } from "react-icons/fa";
import { PiCertificate } from "react-icons/pi";
import { NavLink } from "react-router-dom";
// Sample images (replace with your actual images)
// import learnImage from "../../assets/learnImage.png";
// import practiceImage from "../../assets/practiceImage.png";
// import proveImage from "../../assets/proveImage.png";
function Catalog() {
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
  
  const filters2 = ["MITRE ATT&CK","Threat Actor Campaigns","CVE Series","Cybrary Challenges","OWASP Top 10"];
  const filters = ["Beginner", "Intermediate", "Advanced" ];
  const [filter, setFilter] = useState(null); // Active filter (Beginner, Intermediate, Advanced)
  const [currentPage, setCurrentPage] = useState(1); // Active page
  const coursesPerPage = 6;

  const handleFilter = (level) => {
    setFilter(level);
    setCurrentPage(1); // Reset to the first page when changing filters
  };

  // Filter courses based on the selected level
  const filteredCourses = filter
    ? salesforceCourses.filter((course) => course.level === filter)
    : salesforceCourses;

  // Calculate total pages
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);

  // Get courses for the current page
  const paginatedCourses = filteredCourses.slice(
    (currentPage - 1) * coursesPerPage,
    currentPage * coursesPerPage
  );

  return (
    <div className="bg-black mt-20 text-white min-h-screen flex flex-col  justify-center overflow-x-hidden">
      <div className="flex flex-col sm:flex-row items-center gap-8 px-20 mt-24">
        {/* Header Section */}
        <div className=" w-1/2 ">
          <h1 className="text-4xl md:text-6xl ">
            Browse the{" "}
            <span className="text-gradient bg-gradient-to-r from-pink-500 via-red-500 to-purple-500 bg-clip-text text-transparent ">
              Full Catalog
            </span>
          </h1>
          <p className="mt-6  text-gray-400 text-lg">
            Cybrary’s comprehensive, framework-aligned catalog has been
            reorganized to provide you with an intentional, guided learning
            experience. Advance your career, prep for certifications, and build
            your skills whenever, wherever.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row  gap-4">
            <button className="bg-gradient-to-r from-pink-500 via-red-500 to-purple-500 text-white font-semibold px-6 py-3 rounded-md hover:opacity-90 transition">
              Start Learning for Free
            </button>
            <button className="border border-gray-600 text-gray-400 px-6 py-3 rounded-md hover:text-white hover:border-white transition">
              Try Cybrary for Teams &rarr;
            </button>
          </div>
        </div>

        {/* Cards Section */}
        <div class=" w-1/2">
          <img
            src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/668e459f9b23d37a2e368bd0_image%209-min-p-500.png"
            alt=""
          />
        </div>
      </div>
      <div className="mt-28 w-full jusify bg-gray-900 pt-20 pb-32">
        {" "}
        <div className="flex flex-col items-center justify-center">
          {" "}
          <h1 className="text-4xl md:text-5xl w-2/3 text-center">
            The content and tools you need to build{" "}
            <span className="bg-gradient-to-r from-pink-500 via-red-500 to-purple-500 bg-clip-text text-transparent">
              {" "}
              real-world skills
            </span>
          </h1>
          <p class="text-gray-500 pt-10 w-2/6  ">
            Rapidly develop your skills via an integrated and engaging learning
            experience on the Cybrary platform.
          </p>
        </div>{" "}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 ">
          <div className="flex flex-col items-center text-center relative">
            <div className="w-20 h-20 relative flex justify-center items-center rounded-3xl mb-4">
              <img
                className="absolute top-0 left-0 z-0"
                src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64369e04d29c9d9b21942d66_home-icon-background.webp"
                alt="Rocket"
              />
              <MdOutlineOndemandVideo className="text-5xl z-10" />
            </div>
            <h2 className="font-bold text-2xl">Bite-sized Video Training</h2>
            <p className="text-gray-400 text-[17px] max-w-[90%] mx-auto mt-4">
              Manageable instruction from industry experts
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 relative flex justify-center items-center rounded-3xl mb-4">
              <img
                className="absolute top-0 left-0 z-2"
                src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64369e04d29c9d9b21942d66_home-icon-background.webp"
                alt="Laptop"
              />
              <CiLaptop className="text-5xl z-10" />
            </div>
            <h2 className="font-bold text-2xl">Hands-On Learning</h2>
            <p className="text-gray-400 text-[17px] max-w-[90%] mx-auto mt-4">
              Put your skills to the test in virtual labs, challenges, and
              simulated environments
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 relative flex justify-center items-center rounded-3xl mb-4">
              <img
                className="absolute top-0 left-0 z-2"
                src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64369e04d29c9d9b21942d66_home-icon-background.webp"
                alt="Shield"
              />
              <FaLaptopCode className="text-5xl z-10" />
            </div>
            <h2 className="font-bold text-2xl">Practice Exams</h2>
            <p className="text-gray-400 text-[17px] max-w-[90%] mx-auto mt-4">
              Prepare for industry certifications with insider tips and practice
              exams
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 relative flex justify-center items-center rounded-3xl mb-4">
              <img
                className="absolute top-0 left-0 z-2"
                src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64369e04d29c9d9b21942d66_home-icon-background.webp"
                alt="Puzzle"
              />
              <PiCertificate className="text-5xl z-10" />{" "}
            </div>
            <h2 className="font-bold text-2xl">Earn Industry Badges</h2>{" "}
            <p className="text-gray-400 text-[17px] max-w-[90%] mx-auto mt-4">
              Complete coursework to earn industry-recognized badges via Credly
            </p>
          </div>
          {/* Repeat for other items */}
        </div>
      </div>
      <div className="bg-gray-900 text-white min-h-screen p-8 flex px-20 gap-16">
      {/* Sidebar Filters */}
      <div className="flex flex-col space-y-6 mb-8">
        <h1 className="text-4xl">Certification Prep</h1>
        {filters.map((level) => (
          <div
            key={level}
            onClick={() => handleFilter(level)}
            className="flex items-center cursor-pointer space-x-3 group transition-all duration-300"
          >
            {(filter === level) && (
              <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
            )}
            <span
              className={`text-xl transform transition-transform duration-300 ${
                filter === level
                  ? "font-semibold text-white translate-x-4"
                  : "font-normal text-gray-400"
              }`}
            >
              {level}
            </span>
          </div>
        ))}
        {filter && (
          <div
            onClick={() => handleFilter(null)}
            className="mt-4 text-center text-sm font-semibold cursor-pointer text-gray-400 hover:text-white transition-colors duration-300"
          >
            Clear
          </div>
        )}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {paginatedCourses.map((course, index) => (
          <NavLink to={course.link} key={index}>
            <div className="relative bg-gray-800 h-auto rounded-lg shadow-lg group hover:shadow-xl transition-shadow border border-gray-600 flex flex-col items-between overflow-hidden">
              <img
                src={course.img}
                alt=""
                className="h-[200px] w-full object-cover rounded-t-lg"
              />
              <div className="py-4 px-4 flex flex-col gap-4 flex-1">
                <h3 className="text-xl md:text-2xl font-semibold mb-2 text-white">
                  {course.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm md:text-base">{course.overview}</p>
                <div className="text-gray-300 text-sm md:text-lg py-2 px-4 border rounded-xl mb-2 bg-slate-900">
                  <span className="font-semibold">Duration:</span> {course.duration}
                </div>
                <div className="text-gray-300 text-sm md:text-lg py-2 px-4 border rounded-xl mb-2">
                  <span className="font-semibold">Format:</span> {course.format}
                </div>
              </div>
              <button className="absolute bottom-0 left-0 w-full bg-gradient-to-r from-orange-600 via-pink-600 to-fuchsia-600 py-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 mt-12">
                Learn More and Enroll
              </button>
            </div>

            
          </NavLink>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-4 mt-8">
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
              className={`text-sm px-4 py-2 rounded ${
                currentPage === index + 1
                  ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                  : "bg-gray-700 text-white hover:bg-gray-600"
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
    <div className="bg-black-900 text-white min-h-screen p-8 flex px-20 gap-16">
    <div className="flex flex-col space-y-6 mb-8">
        <h1 className="text-4xl">Career Paths</h1>
       
        {filter && (
          <div
            onClick={() => handleFilter(null)}
            className="mt-4 text-center text-sm font-semibold cursor-pointer text-gray-400 hover:text-white transition-colors duration-300"
          >
            Clear
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {paginatedCourses.map((course, index) => (
          <NavLink to={course.link} key={index}>
            <div className="relative bg-gray-800 h-auto rounded-lg shadow-lg group hover:shadow-xl transition-shadow border border-gray-600 flex flex-col items-between overflow-hidden">
              <img
                src={course.img}
                alt=""
                className="h-[200px] w-full object-cover rounded-t-lg"
              />
              <div className="py-4 px-4 flex flex-col gap-4 flex-1">
                <h3 className="text-xl md:text-2xl font-semibold mb-2 text-white">
                  {course.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm md:text-base">{course.overview}</p>
                <div className="text-gray-300 text-sm md:text-lg py-2 px-4 border rounded-xl mb-2 bg-slate-900">
                  <span className="font-semibold">Duration:</span> {course.duration}
                </div>
                <div className="text-gray-300 text-sm md:text-lg py-2 px-4 border rounded-xl mb-2">
                  <span className="font-semibold">Format:</span> {course.format}
                </div>
              </div>
              <button className="absolute bottom-0 left-0 w-full bg-gradient-to-r from-orange-600 via-pink-600 to-fuchsia-600 py-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 mt-12">
                Learn More and Enroll
              </button>
              
            </div>
            

            
          </NavLink>
        ))}
      </div>
      
    
      </div>
      <div className="bg-gray-900 text-white min-h-screen p-8 flex px-20 gap-16">
      {/* Sidebar Filters */}
      <div className="flex flex-col space-y-5 mb-8">
        <h3 className="text-3x4">Stay Ahead</h3>
        {filters2.map((level) => (
          <div
            key={level}
            onClick={() => handleFilter(level)}
            className="flex items-center cursor-pointer space-x-3 group transition-all duration-300"
          >
            {(filter === level) && (
              <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
            )}
            <span
              className={`text-xl transform transition-transform duration-300 ${
                filter === level
                  ? "font-semibold text-white translate-x-4"
                  : "font-normal text-gray-400"
              }`}
            >
              {level}
            </span>
          </div>
        ))}
        {filter && (
          <div
            onClick={() => handleFilter(null)}
            className="mt-4 text-center text-sm font-semibold cursor-pointer text-gray-400 hover:text-white transition-colors duration-300"
          >
            Clear
          </div>
        )}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {paginatedCourses.map((course, index) => (
          <NavLink to={course.link} key={index}>
            <div className="relative bg-gray-800 h-auto rounded-lg shadow-lg group hover:shadow-xl transition-shadow border border-gray-600 flex flex-col items-between overflow-hidden">
              <img
                src={course.img}
                alt=""
                className="h-[200px] w-full object-cover rounded-t-lg"
              />
              <div className="py-4 px-4 flex flex-col gap-4 flex-1">
                <h3 className="text-xl md:text-2xl font-semibold mb-2 text-white">
                  {course.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm md:text-base">{course.overview}</p>
                <div className="text-gray-300 text-sm md:text-lg py-2 px-4 border rounded-xl mb-2 bg-slate-900">
                  <span className="font-semibold">Duration:</span> {course.duration}
                </div>
                <div className="text-gray-300 text-sm md:text-lg py-2 px-4 border rounded-xl mb-2">
                  <span className="font-semibold">Format:</span> {course.format}
                </div>
              </div>
              <button className="absolute bottom-0 left-0 w-full bg-gradient-to-r from-orange-600 via-pink-600 to-fuchsia-600 py-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 mt-12">
                Learn More and Enroll
              </button>
            </div>

            
          </NavLink>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-4 mt-8">
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
              className={`text-sm px-4 py-2 rounded ${
                currentPage === index + 1
                  ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                  : "bg-gray-700 text-white hover:bg-gray-600"
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
      
    </div>
  );
}

export default Catalog;
