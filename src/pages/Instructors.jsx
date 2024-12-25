import React, { useState } from "react";
import { AiFillStar, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { FaBook } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Instructors = () => {
  const [selected, setSelected] = useState(1); // State to track which button is selected
  const [startIndex, setStartIndex] = useState(0); // State to track the start index for the visible instructors

  const instructors = [
    {
      name: "Clint Kehr",
      title: "Ethical Hacker",
      role: "SENIOR INSTRUCTOR",
      rating: "5",
      courses: "25",
      image: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468bfaffcf04101cf885b72_1573577794412.jpeg",
    },
    {
      name: "Corey Holzer",
      title: "Information Systems Engineer",
      role: "SENIOR INSTRUCTOR",
      rating: "5",
      courses: "8",
      image: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468bf75fffbc7c304c76841_corey.jpeg",
    },
    {
      name: "Kelly Handerhan",
      title: "Senior Instructor",
      role: "SENIOR INSTRUCTOR",
      rating: "5",
      courses: "35",
      image: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468b6358455658a941e581f_d2d81836134dde5dc59b0a08b349e827-bpfull.jpeg",
    },
    {
      name: "Matthew Mullins",
      title: "Security Researcher - Adversary Emulation",
      role: "SENIOR INSTRUCTOR",
      rating: "0",
      courses: "41",
      image: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468bfbf1f5ef0847b92625b_Owen_Dubiel_Headshot.png",
    },
    {
      name: "Marc Balingit",
      title: "Security Researcher - Adversary Emulation",
      role: "INSTRUCTOR",
      rating: "",
      courses: "7",
      image: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468bfe4006d9ed84b12d3b4_IMG_7641__1_.jpeg",
    },
    {
      name: "Anthony Fecondo",
      title: "Splunk Professional Service Consultant",
      role: "INSTRUCTOR",
      rating: "5",
      courses: "1",
      image: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468bf7d046b92b8127919b4_Anthony_Fecondo.jpeg",
    },
    {
      name: "Brad Rhodes",
      title: "Head of Cybersecurity, zvelo & Lieutenant Colonel, Cyber Warface",
      role: "INSTRUCTOR",
      rating: "5",
      courses: "1",
      image: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468bfa2743e430cbf97c3b6_headshot.png",
    },
    {
      name: "Brain Rogalski",
      title: "CEO of Hexacapes",
      role: "INSTRUCTOR",
      rating: "5",
      courses: "1",
      image: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468bf29951cfced190ba875_Brian_Rogalski.jpeg",
    },
    {
      name: "Carter Schoenberg",
      title: "Executive VP of IPKeys Power Partners",
      role: "INSTRUCTOR",
      rating: "5",
      courses: "1",
      image: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468be551f5ef0847b913ce5_carter_shoenberg.jpeg",
    },
    {
      name: "Chris Kubecka",
      title: "Founder and CEO of HypaSec",
      role: "INSTRUCTOR",
      rating: "5",
      courses: "1",
      image: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468bf61046b92b81278ee50_IMG_20191008_192920.jpeg",
    },
    {
      name: "Chris Stevens",
      title: "Senior Privacy Consultant and Instructor",
      role: "INSTRUCTOR",
      rating: "5",
      courses: "1",
      image: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468bf85530a67fc41505e08_Stevens_Picture.png",
    },
    {
      name: "Christian D'Amico",
      title: "Data Compilance Manager",
      role: "INSTRUCTOR",
      rating: "5",
      courses: "1",
      image: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468beb20c3cb1ddf88d8ae2_0__1_.jpeg",
    },
    {
      name: "Dary Kempa",
      title: "",
      role: "INSTRUCTOR",
      rating: "5",
      courses: "1",
      image: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468bf38951cfced190bc6d0_Darcy_Kempa.jpeg",
    },
    {
      name: "Dustin Sachs",
      title: "",
      role: "INSTRUCTOR",
      rating: "5",
      courses: "4",
      image: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64dc8028cf3fd199cb230f66_Screenshot_2023-08-15_at_12.50.52_PM.png",
    },
    {
      name: "Kevin Mayo",
      title: "Director of Cybersecurity",
      role: "INSTRUCTOR",
      rating: "5",
      courses: "2",
      image: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468bed35841f3b080624f67_Kevin_Mayo.png",
    },
    {
      name: "Lisa Martino",
      title: "Director, Information Security Governance, Risk & Compliance",
      role: "INSTRUCTOR",
      rating: "5",
      courses: "1",
      image: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468bf6ce2f446d007ffeb36_IMG_0301.jpeg",
    }
  ];

  // Function to load instructors based on the selected page
  const loadInstructors = (page) => {
    if (page === 2) {
      setStartIndex(8); // Start showing from index 8 when page 2 is selected
    } else {
      setStartIndex(0); // Show the first 8 instructors for page 1
    }
  };



  return (
    <div className="bg-black text-white font-sans">
      {/* Header Section */}
      <div
        className="text-center py-20 px-4 bg-cover bg-center h-[600px] sm:h-[400px] md:h-[500px]"
        style={{
          backgroundImage: "url('https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/646fa67c080e747f5bf2519e_Teams_Centered_2.webp')",
        }}
      >
        <h1 className="text-4xl md:text-6xl mb-4 mt-32">Meet Our Instructors</h1>
        <div className="w-full flex justify-center items-center">
          <p className="text-base sm:text-sm md:text-lg mb-6 text-center w-full sm:w-3/4 md:w-1/2">
            We work with subject matter experts from a variety of teams and disciplines to provide you with an extensive cybersecurity training catalog. Learn from the best with Cybrary's collection of high-quality courses and learning activities taught by subject matter experts.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-gradient-to-r from-pink-600 via-pink-700 to-pink-800 text-white py-2 px-4 md:py-3 md:px-5 rounded-xl hover:opacity-90 text-sm md:text-lg hover:shadow-[2px_2px_12px_6px_rgba(219,39,119,0.4)] transition-shadow duration-300">
            Start Learning for Free
          </button>
          <NavLink to='/catalog'>
            <button className="text-white text-sm md:text-lg py-2 px-4 md:px-6 rounded-xl font-semibold border-[1px] border-gray-300 hover:border-white transition-all duration-300">
              Explore Courses
            </button>
          </NavLink>
        </div>
      </div>

      {/* Instructors Section */}
      <div className="overflow-x-auto py-10 sm:py-16 md:py-20 px-4 sm:px-8">
        <div className="flex flex-wrap gap-8 justify-center">
          {instructors.slice(startIndex, startIndex + 8).map((instructor, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg text-center shadow-lg w-full sm:w-[350px] md:w-[450px] lg:w-[560px] flex flex-col sm:flex-row lg:h-[250px]"
            >
              {/* Image Section */}
              <div className="w-full sm:w-56 h-48 sm:h-full md:h-full flex-shrink-0">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full h-full object-cover rounded-t-lg sm:rounded-l-lg sm:rounded-t-none"
                />
              </div>

              {/* Content Section */}
              <div className="p-4 flex flex-col justify-center">
                {/* Role */}
                <div className="flex justify-center sm:justify-start items-center gap-4 mb-2 sm:mb-4">
                  <span className="bg-gradient-to-r from-pink-600 via-pink-500 to-purple-900 text-white text-xs sm:text-sm px-3 py-1 rounded-full font-semibold">
                    {instructor.role}
                  </span>
                </div>

                {/* Name */}
                <div className="flex justify-center sm:justify-start items-center gap-4 mb-2 sm:mb-4">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">{instructor.name}</h3>
                </div>

                {/* Title */}
                {instructor.title && (
                  <div className="flex justify-center sm:justify-start items-center gap-4 mb-2 sm:mb-4">
                    <span className="text-gray-200 text-sm sm:text-base font-semibold text-left">
                      {instructor.title}
                    </span>
                  </div>
                )}

                <div className="flex flex-wrap justify-center sm:justify-start text-xs sm:text-sm gap-3">
                  {instructor.rating && (
                    <span className="text-white flex items-center font-semibold bg-gray-800 py-1 px-3 rounded-full">
                      <AiFillStar className="text-white mr-2" /> {instructor.rating} RATING
                    </span>
                  )}

                  {instructor.courses && (
                    <span className="text-white flex items-center font-semibold bg-gray-800 py-1 px-3 rounded-full">
                      <FaBook className="text-white-400 mr-1" /> {instructor.courses} COURSES
                    </span>
                  )}
                </div>
              </div>
            </div>

          ))}
        </div>

        {/* Pagination Section */}
        <div className="flex justify-center items-center py-6">
          <div className="flex gap-4">
            <button
              className="w-10 h-10 sm:w-12 sm:h-12 text-white rounded-full flex items-center justify-center text-sm sm:text-xl transition duration-200 bg-transparent border-gray-300 border-2"
              onClick={() => {
                if (selected > 1) {
                  setSelected(selected - 1);
                  loadInstructors(selected - 1); // Load previous instructors
                }
              }}
            >
              <AiOutlineLeft />
            </button>

            {[1, 2].map((number) => (
              <button
                key={number}
                className={`w-10 h-10 sm:w-12 sm:h-12 text-white rounded-full flex items-center justify-center text-sm sm:text-xl transition duration-200
                  ${selected === number ? "border-white bg-transparent border-2" : "border-gray-300 bg-transparent border"}`}
                onClick={() => {
                  setSelected(number);
                  loadInstructors(number); // Load instructors based on the selected page
                }}
              >
                {number}
              </button>
            ))}

            <button
              className="w-10 h-10 sm:w-12 sm:h-12 text-white rounded-full flex items-center justify-center text-sm sm:text-xl transition duration-200 bg-transparent border-gray-300 border-2"
              onClick={() => {
                if (selected < 2) {
                  setSelected(selected + 1);
                  loadInstructors(selected + 1); // Load next instructors
                }
              }}
            >
              <AiOutlineRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Instructors;
