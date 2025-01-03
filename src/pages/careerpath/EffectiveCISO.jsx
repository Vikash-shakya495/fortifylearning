import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { togglePopup } from "../../store/signupPopupSlice";
import SignupPopup from "../../loginSystem/SignupPopup";
import { FiShare2 } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { GrDatabase } from "react-icons/gr";
import { TbPointFilled } from "react-icons/tb";
import TestimonialsCarousel from "../../components/home/TestimonialsCarousel";

const EffectiveCISO = () => {
  const courses = [
    {
      title: "CISO Competency - Innovation",
      subtitle:
        "This is the first course in Ed Amoroso's Twelve Competencies of the Effective CISO, which focuses on the CISO Competency in Innovation. The habit of innovation is an essential competency for any CISO trying to navigate variety of dynamic threats, risks, oppurtunities, and failures, so it is essential in an evolving business environment..",
      badge: "COURSE",
      duration: "0H:58M",
      ceus: "1 CEUS",
      image: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64e784d38835d8cfd88b476b_SC-200_cover-p-500.png",
      link:"/career-path/it-cybersecurity"
    },
    {
        title: "CISO Competency - Finance & Administration",
        subtitle:
          "This is the second course in Ed Amoroso's Twelve Competencies of the Effective CISO, which focuses on the CISO Competency in Finance & Administration. An awareness and understanding of corporate finance and business administration is essential to succeed as an exec. This includes expertise in competing for budget, resources, staff, and more..",
        badge: "COURSE",
        duration: "0H:55M",
        ceus: " 1 CEUS",
        image: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64e784d38835d8cfd88b476b_SC-200_cover-p-500.png",
        link:"/career-path/it-cybersecurity"
      },
      {
        title: "CISO Competency - Business",
        subtitle:
          "This is the third course in Ed Amoroso's Twelve Competencies of the Effective CISO, which focuses on the CISO Competency in Business Operations. Modern CISOs must have in-depth knowledge in optimizing the increasingly-complex, connection between security and business operations..",
        badge: "COURSE",
        duration: "1H:0M",
        ceus: "1 CEUS",
        image: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64e784d38835d8cfd88b476b_SC-200_cover-p-500.png",
        link:"/career-path/it-cybersecurity"
      },
      {
        title: "CISO Competency - Security",
        subtitle:
          "This is the fourth course in Ed Amoroso's Twelve Competencies of the Effective CISO, which focuses on the CISO Competency in Cyber Security Expertise. The CISO must serve as the governing expert in cyber security for the organization. The CISO must possess excellent working-knowledge of critical security issues.",
        badge: "COURSE",
        duration: "0H:59M",
        ceus: "1 CEUS",
        image: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64e784d38835d8cfd88b476b_SC-200_cover-p-500.png",
        link:"/career-path/it-cybersecurity"
      },
      {
        title: "CISO Competency - Discretion",
        subtitle:
          "This is the fifth course in Ed Amoroso's Twelve Competencies of the Effective CISO, which focuses on the CISO Competency in Discretion and Trust. The CISO must be able to exhibit and manage high levels of discretion and trust in dealing with sensitive information regarding threats, investigations, and on-going initiatives..",
        badge: "COURSE",
        duration: "1H:1M",
        ceus: "1 CEUS",
        image: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64e784d38835d8cfd88b476b_SC-200_cover-p-500.png",
        link:"/career-path/it-cybersecurity"
      },
    {
      title: "CISO Competency - Public Speaking",
      subtitle:
        "This is the sixth course in Ed Amoroso's Twelve Competencies of the Effective CISO, which focuses on the CISO Competency in Public Speaking. As a senior executive, the CISO must have the ability to speak confidently and effectively before groups ranging from large audiences to corporate boards..",
      badge: "COURSE",
      duration: "0H:58M",
      ceus: "1 CEUS",
      image: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c1717d5c861ce9d59709_CompTIA_Security_-p-500.png",
      link:"/career-path/it-cybersecurity"
    },
    {
      title: "CISO Competency - Productivity",
      subtitle:
        "This is the seventh course in Ed Amoroso's Twelve Competencies of the Effective CISO, which focuses on the CISO Competency in Personal Productivity. The CISO should be able to optimize personal productivity by developing effective time management processes and prioritization skills..",
      badge: "COURSE",
      duration: "1H:2M",
      ceus: "1 CEUS",
      image: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c1717d5c861ce9d59709_CompTIA_Security_-p-500.png",
      link:"/career-path/it-cybersecurity"
    },
    {
      title: "CISO Competency - Technology",
      subtitle:
        "This is the eighth course in Ed Amoroso's Twelve Competencies of the Effective CISO, which focuses on the CISO Competency in Technology. The CISO must consistantly produce deep insights into the current status and trends associated with information technology, especially in relation to security..",
      badge: "COURSE",
      duration: "0H:56M",
      ceus: "1 CEUS",
      image: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c1717d5c861ce9d59709_CompTIA_Security_-p-500.png",
      link:"/career-path/it-cybersecurity"
    },
    {
      title: "CISO Competency - Threats",
      subtitle:
        "This is the ninth course in Ed Amoroso's Twelve Competencies of the Effective CISO, which focuses on the CISO Competency in Threat Insights. The CISO must maintain accurate and realistic insights into the evolving threats facing cyber security teams, and produce qualitative and quantitative assessments for risk decisions..",
      badge: "COURSE",
      duration: "1H:2M",
      ceus: "1 CEUS",
      image: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c1717d5c861ce9d59709_CompTIA_Security_-p-500.png",
      link:"/career-path/it-cybersecurity"
    },
    {
      title: "CISO Competency - Compliance",
      subtitle:
        "This is the tenth course in Ed Amoroso's Twelve Competencies of the Effective CISO, which focuses on the CISO Competency in Balancing Compliance. The effective CISO navigates compliance and security in supporting a balanced cyber risk management program, with an in depth understanding of industry frameworks..",
      badge: "COURSE",
      duration: "0H:59M",
      ceus: "1 CEUS",
      image: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c1717d5c861ce9d59709_CompTIA_Security_-p-500.png",
      link:"/career-path/it-cybersecurity"
    },
    {
      title: "CISO Competency - Risk",
      subtitle:
        "This is the eleventh course in Ed Amoroso's Twelve Competencies of the Effective CISO, which focuses on the CISO Competency in Risk Orientation. Developing a complete risk structure and framework for enterprise security prioritizes safeguards, minimizes expenses, and maximizes support and mitigation for business operations..",
      badge: "COURSE",
      duration: "0H:59M",
      ceus: "1 CEUS",
      image: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c1717d5c861ce9d59709_CompTIA_Security_-p-500.png",
      link:"/career-path/it-cybersecurity"
    },
    {
      title: "CISO Competency - Leadership",
      subtitle:
        "This is the twelfth course in Ed Amoroso's Twelve Competencies of the Effective CISO, which focuses on the CISO Competency in Leadership and Vision. Every successful CISO incorporates leadership skills and a clear vision into their approach to guiding their program, staff, and other stakeholders, including the CEO and Board..",
      badge: "COURSE",
      duration: "1H:3M",
      ceus: "1 CEUS",
      image: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c1717d5c861ce9d59709_CompTIA_Security_-p-500.png",
      link:"/career-path/it-cybersecurity"
    },
  ];

  const dispatch = useDispatch();
  const url = `${location.origin}${location.pathname}`;

  const [showPopup, setShowPopup] = useState(false);

  const sharePopup = () => {
    setShowPopup(!showPopup);
  };

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        alert("Link copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };
  return (
    <div className="mt-40 bg-black text-white">

      <div className="flex flex-col items-center md:flex-row justify-center md:full  text-white py-8 px-12 md:px-16 lg:px-44 gap-12">
        <div className="w-full md:w-1/2 md:mb-0 text-center md:text-left flex flex-col">
          <h2 className="text-2xl sm:text-4xl md:mb-2 md:text-5xl">
          12 Competencies of the Effective CISO
          </h2>
          <p className="text-gray-300 mt-4 mb-6">
          Dr. Edward G. Amoroso, CEO of TAG Cyber and former CISO of AT&T develops insights into the twelve technical, management, and business competencies that are required to serve as an effective Chief Information Security Officer (CISO).
          </p>
          <div className="flex items-center justify-between mt-8 flex-wrap md:mt-0">
            <button
              onClick={() => console.log("Create account action")}
              className="w-2/4 md:w-2/5 py-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl text-white font-semibold hover:shadow-[0px_0px_10px_purple,0px_0px_10px_#FF4D6D] duration-500"
            >
              Create a Free Account
            </button>
            <button className="w-2/4 md:w-3/5 px-6 py-4 rounded-xl bg-black border border-gray-500">
              Need to train your team? Learn more
            </button>
          </div>
          <div className="flex items-center text-xl text-gray-500 mt-4 gap-2">
            <FiShare2 className="text-3xl text-gray-300" />
            <button onClick={sharePopup} className="text-gray-500">
              Share
            </button>
          </div>
          {showPopup && (
            <div className="fixed top-0 left-32 h-full bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-gray-900 p-8 flex flex-col gap-8 rounded-lg">
                <h3 className="text-3xl flex items-center justify-between">
                  <span>Share</span>
                  <button onClick={sharePopup} className="text-white">
                    <RxCross2 />
                  </button>
                </h3>
                <div className="flex gap-4">
                  <button className="border p-3 rounded-full">
                    <FaFacebookSquare className="text-3xl text-white" />
                  </button>
                  <button className="border p-3 rounded-full">
                    <FaSquareTwitter className="text-3xl text-white" />
                  </button>
                  <button className="border p-3 rounded-full">
                    <BsLinkedin className="text-3xl text-white" />
                  </button>
                  <button className="border p-3 rounded-full">
                    <MdOutlineMarkEmailRead className="text-3xl text-white" />
                  </button>
                </div>
                <div className="flex items-center gap-4">
                  <input
                    type="text"
                    readOnly
                    value={url}
                    className="bg-gray-900 border border-gray-500 px-4 py-2 text-white rounded w-2/3 mt-4"
                  />
                  <button
                    onClick={copyToClipboard}
                    className="mt-4 bg-purple-600 py-2 px-2  w-1/3 rounded-lg text-white hover:bg-purple-700"
                  >
                    Copy Link
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="bg-white text-black p-8 rounded-3xl shadow-lg w-full md:w-1/2 h-[auto] max-w-lg mx-auto">
          <h2 className="text-1xl md:text-4xl mb-6">Create a free account to start exploring the platform.</h2>
          <div className="w-full flex px-3 py-2 mb-6 rounded-3xl border border-gray-600 text-black focus-within:ring-2 focus-within:ring-pink-500">
            <input
              type="email"
              placeholder="name@email.com"
              className="w-full p-1 rounded text-xl placeholder-gray-400 focus:outline-none"
            />
            <button
              onClick={() => dispatch(togglePopup())}
              className="w-full py-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl text-white font-semibold hover:shadow-[0px_0px_10px_purple,0px_0px_10px_#FF4D6D] duration-500 "
            >
              Create a Free Account
            </button>
          </div>
          <SignupPopup />
          <div className="flex justify-around items-center mt-6">
            <span className="text-gray-600">or sign up with</span>
            <span className="flex gap-4">
              <button
                onClick={() => (window.location.href = "https://google.com")}
                className="w-12 h-12 border border-black p-1 rounded flex items-center justify-center cursor-pointer"
                aria-label="Sign up with Google"
              >
                <img
                  src="https://lh3.googleusercontent.com/qnaJEbFIpvsWJm2KrRI_GIvz1yZdXntgEsCZxy-1pVZi244bCk1RFwdk0ZBRmmvdHiUl6sIa_tsmskL5WLKiigp2AMsIIxinOJNf39qCmacViRGXIOY"
                  alt="Google"
                />
              </button>
              <button
                onClick={() => (window.location.href = "https://apple.com")}
                className="w-12 h-12 border border-black p-1 rounded flex items-center justify-center cursor-pointer"
                aria-label="Sign up with Apple"
              >
                <img
                  src="https://static.vecteezy.com/system/resources/previews/019/136/322/non_2x/amazon-logo-amazon-icon-free-free-vector.jpg"
                  alt="Apple"
                />
              </button>
              <button
                onClick={() => (window.location.href = "https://microsoft.com")}
                className="w-12 h-12 border border-black p-1 rounded flex items-center justify-center cursor-pointer"
                aria-label="Sign up with Microsoft"
              >
                <img
                  src="https://static-00.iconduck.com/assets.00/microsoft-icon-1024x1024-5w26drb6.png"
                  alt="Microsoft"
                />
              </button>
            </span>
          </div>
          <div className="w-full flex justify-between text-lg p-6 mt-8 border-t">
            <NavLink to="/signup" className="hover:underline">
              Sign in
            </NavLink>
            <NavLink to="/sso-options" className="hover:underline">
              View all SSO options
            </NavLink>
          </div>
        </div>
      </div>
      <div className="bg-black text-white mt-20 p-8 md:w-5/6 mx-auto">
      <h1 className="text-3xl font-bold mb-4">Purpose Statement</h1>
      <p className="text-lg leading-relaxed">
      Cybrary Career Paths are comprehensive training programs designed to prepare you for the most in-demand roles in the cybersecurity workforce. Each path follows a Learn, Practice, Prove model and includes different activity types aligned to key topics within the path’s security domain. As you progress through the path, your progress will be measured in real time using Experience Points (XP) that serve as a comprehensive capability score for each topic. Upon completing all of the requirements for a path, you will be rewarded with a shareable digital badge via Credly.
      </p>
    </div>
      <div className="flex flex-col lg:flex-row mx-auto mt-32 w-11/12 lg:w-4/5 p-4 gap-12">
        <div className="w-full lg:w-2/3">

          <div className="flex flex-wrap justify-between mt-16">
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-2xl lg:text-3xl">11H 52M</h1>
              <span className="text-gray-400 font-semibold">TIME</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-2xl lg:text-3xl">Intermediate</h1>
              <span className="text-gray-400 font-semibold">DIFFICULTY</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-2xl lg:text-3xl">0</h1>
              <span className="text-gray-400 font-semibold">CEU/CPE</span>
            </div>
          </div>
          <div className="mt-32 ">
            <h1 className="font-semibold text-2xl lg:text-3xl">Overview</h1>
            <div className="mt-12">


              <p className="text-gray-300 mt-4">
              These competencies are also shown to provide an excellent career development and learning roadmap for anyone desiring advancement in the enterprise security management field. Lectures address the twelve insights with invited experts from the field offering their key insights and advice for participants.
              </p>
              <h1 className="text-3xl mt-6">
            
              </h1>
              <p className="text-gray-300 mt-4">
              Learning Objectives Participants will develop the valuable insights and insider knowledge necessary to support (1) optimizing career success and performance in their current enterprise security management or leadership role, and/or (2) increasing their chances of successful promotion to a senior leadership position, including the CISO role, within their present or future organization.
              </p>
              <h1 className="text-3xl mt-6">
                
              </h1>
              <p className="text-gray-300 mt-4">
              Target Participants The course is designed for working practitioners of enterprise security, at all possible stages of career growth, within business or government environments, who are either currently in management and leadership roles, or who aspire to improve their chances of promotion into executive roles, such as CISO.
              </p>
              <p className="text-gray-300 mt-4">
              The Competencies: Innovation Finance & Administration Business Operations Cybersecurity Expertise Discretion & Trust Public Speaking Personal Productivity Information Technology Threat Insights Balancing Compliance Risk Orientation Team Leadership and Vision
              </p>



            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/3">
          <div className="mt-16 lg:mt-72 text-xl lg:text-2xl">
            <h1>What Will I Learn?</h1>
          </div>
          <div className="p-8 flex flex-col gap-4 border bg-slate-900 rounded-xl mt-8">
            <GrDatabase className="text-3xl lg:text-5xl" />
            <div>
              <h2 className="font-semibold text-xl lg:text-2xl">
                Engineering and Operations
              </h2>
              <p className="text-gray-400">
                Focused on building and operating information systems.
              </p>
            </div>
            <div>
              <h2 className="font-semibold text-xl lg:text-2xl">
              Leadership and Management
              </h2>
              <p className="text-gray-400">
              Focused on program design and oversight. Covers project and program management
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black py-10">
        <h2 className="text-center text-4xl font-bold mb-12">
           Courses Outline
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:w-5/6 mx-auto gap-6 px-5 md:px-10">
          {courses.map((course) => (
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
        
      </div>
      <div className="w-full mt-20">
        <TestimonialsCarousel />
      </div>
    </div>
  );
};

export default EffectiveCISO;