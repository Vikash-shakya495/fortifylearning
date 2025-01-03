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

const SystemAdministrator = () => {
  const courses = [
    {
      title: "SC-200 Microsoft Security Operations Analyst",
      subtitle:
        "Learn to reduce risk by rapidly remediating active attacks in your environment, advising on...",
      badge: "COURSE",
      duration: "8H:20M",
      ceus: "8 CEUS",
      image: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64e784d38835d8cfd88b476b_SC-200_cover-p-500.png",
      link: "/career-path/it-cybersecurity"
    },
    {
      title: "CompTIA Security+ Certification Prep",
      subtitle:
        "CompTIA's Security+ is a globally recognized certification that equips IT professionals with...",
      badge: "COURSE",
      duration: "18H:28M",
      ceus: "10 CEUS",
      image: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c1717d5c861ce9d59709_CompTIA_Security_-p-500.png",
      link: "/career-path/it-cybersecurity"
    },
    {
      title: "OWASP Top 10 - A08:2021 - Software and Data Integrity Failures",
      subtitle:
        "The OWASP Top 10 features the most critical web application security vulnerabilities. In this par...",
      badge: "COURSE",
      duration: "2H:37M",
      ceus: "3 CEUS",
      image: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c1717d5c861ce9d59709_CompTIA_Security_-p-500.png",
      link: "/career-path/it-cybersecurity"
    },
    {
      title: "OWASP Top 10 - A04:2021 - Insecure Design",
      subtitle:
        "The OWASP Top 10 features the most critical web application security vulnerabilities. In this par...",
      badge: "COURSE",
      duration: "1H:34M",
      ceus: "2 CEUS",
      image: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c1717d5c861ce9d59709_CompTIA_Security_-p-500.png",
      link: "/career-path/it-cybersecurity"
    },
    {
      title: "OWASP Top 10 - A04:2021 - Insecure Design",
      subtitle:
        "The OWASP Top 10 features the most critical web application security vulnerabilities. In this par...",
      badge: "COURSE",
      duration: "1H:34M",
      ceus: "2 CEUS",
      image: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c1717d5c861ce9d59709_CompTIA_Security_-p-500.png",
      link: "/career-path/it-cybersecurity"
    },
    {
      title: "OWASP Top 10 - A04:2021 - Insecure Design",
      subtitle:
        "The OWASP Top 10 features the most critical web application security vulnerabilities. In this par...",
      badge: "COURSE",
      duration: "1H:34M",
      ceus: "2 CEUS",
      image: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c1717d5c861ce9d59709_CompTIA_Security_-p-500.png",
      link: "/career-path/it-cybersecurity"
    },
    {
      title: "OWASP Top 10 - A04:2021 - Insecure Design",
      subtitle:
        "The OWASP Top 10 features the most critical web application security vulnerabilities. In this par...",
      badge: "COURSE",
      duration: "1H:34M",
      ceus: "2 CEUS",
      image: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c1717d5c861ce9d59709_CompTIA_Security_-p-500.png",
      link: "/career-path/it-cybersecurity"
    },
    {
      title: "OWASP Top 10 - A04:2021 - Insecure Design",
      subtitle:
        "The OWASP Top 10 features the most critical web application security vulnerabilities. In this par...",
      badge: "COURSE",
      duration: "1H:34M",
      ceus: "2 CEUS",
      image: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c1717d5c861ce9d59709_CompTIA_Security_-p-500.png",
      link: "/career-path/it-cybersecurity"
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
          <h2 className="text-3xl sm:text-4xl md:mb-2 md:text-5xl">
            System Administrator Collection
          </h2>
          <p className="text-gray-300 mt-4 mb-6">
            As a network engineer, you will be responsible for administering
            aThe System Administrator Collection helps build a foundation of knowledge and skills in understanding network devices and configurations, maintaining business systems, and leveraging security tools.
          </p>
          <div className="flex items-center justify-between mt-8 flex-wrap md:mt-0">
            <button
              onClick={() => dispatch(togglePopup())}
              className="w-2/4 md:w-2/5 py-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl text-white font-semibold hover:shadow-[0px_0px_10px_purple,0px_0px_10px_#FF4D6D] duration-500"
            >
              Create a Free Account
            </button>
            <NavLink to='/business' className="w-2/4 md:w-3/5 px-6 py-4 rounded-xl bg-black  border-gray-500">
              <button >
                Need to train your team? Learn more
              </button>
            </NavLink>
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
          <h2 className="text-3xl md:text-4xl mb-6">Create a free account</h2>
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
      <div className="flex flex-col lg:flex-row mx-auto mt-32 w-11/12 lg:w-4/5 p-4 gap-12">
        <div className="w-full lg:w-2/3">

          <div className="flex flex-wrap justify-between mt-16">
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-2xl lg:text-3xl">60H 36M</h1>
              <span className="text-gray-400 font-semibold">TIME</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-2xl lg:text-3xl">Beginner</h1>
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
                This is the Systems Administrator Career Path to get people started in their journey in IT.
              </p>
              <h1 className="text-3xl mt-6">
                What is System Administration?
              </h1>
              <p className="text-gray-300 mt-4">
                Dave starts by walking you through pre-incident planning and developing an incident response team. He then walks you through the management of incidents, including identification, containment, and eradication. You then learn proper methods for recovering from incidents, and spend some time in hands-on labs getting familiar with incident response and digital forensic techniques. You will then get an introduction to the Mitre Att&ck Framework, including a deep dive into Threat Intelligence. Continuing the journey on the offensive side of things, you learn about scanning with NMAP and get some hands-on experience in a lab. You then learn about different attack types, ways to maintain persistence, evasion techniques, and how to be stealthier using techniques like Ghostwriting. The path wraps up with an overview of forensic tools.
              </p>
              <h1 className="text-3xl mt-6">
                How Do You Become a System Administrator?
              </h1>
              <p className="text-gray-300 mt-4">
                There isn’t one specific path that you need to follow to become a system administrator. While it can be helpful to have a bachelor’s degree in computer science or another closely related field, it isn’t a requirement. Many people become system administrators by working their way up from other positions or via internships. You can land the role through promotions from jobs like service desk jobs or desktop support positions. Potentially, this can be the best option because having experience handling user and system issues, providing solutions, and researching computer systems is beneficial for individuals who want to become system administrators.
              </p>
              <p className="text-gray-300 mt-4">
                Most organizations require that their system administrators have some previous experience in the technology industry, possibly in support roles. Additionally, many employers want to see that candidates for the position have specific certifications that verify the individual’s skills. There are three key CompTIA certifications that system administrators should have, A+, Network+, and Security+. In addition to verifying an individual’s competencies in those areas, it also demonstrates to employers their desire to grow and advance their IT careers.
              </p>
              <h1 className="text-3xl mt-6">
                What Are the Duties of a System Administrator?
              </h1>
              <p className="text-gray-300 mt-4">
                While it depends upon the specific position, organization, and work experience of the employee, some general duties system administrators typically perform include:
              </p>
              <ul className="text-gray-300 mt-2 list-disc list-inside">
                <li>Determining a company’s computer and network system needs and implementing those systems</li>
                <li>Installing and upgrading all software and hardware, as needed</li>
                <li>Maintaining computer and network system security and ensuring that systems are running correctly</li>
                <li>Adding, updating, and deleting users and permissions to the network</li>
                <li>Collecting data to evaluate and optimize system or network performance</li>
                <li>Training users on the proper use of software and hardware</li>
                <li>Managing the organization’s servers, desktop, and mobile equipment</li>
                <li>Managing telecommunications networks (in some cases)</li>
              </ul>
              <p className="text-gray-300 mt-4">
                Additionally, some system administrators help network architects with the design and analysis of network models. They may participate in decision-making about future hardware and software purchases and upgrades and supervise computer support specialists who help solve users’ technology problems.
              </p>

              {/* New Section: Is a Systems Administrator a Good Career to Get Into? */}
              <h1 className="text-3xl mt-6">
                Is a Systems Administrator a Good Career to Get Into?
              </h1>
              <p className="text-gray-300 mt-4">
                It’s safe to say that nearly all IT careers are in demand in today’s technology industry. Because technology is continually growing and advancing, more and more professionals are needed to fill key IT positions like system administrators. According to U.S. News and World Reports Best Technology Jobs rankings, computer system administrators come in at #8. The rank is based on various factors, including salary, job market, future growth, stress, and work-life balance.
              </p>
              <p className="text-gray-300 mt-4">
                The system administrator position is one that requires both technical and interpersonal skills to perform well. It’s an ideal role for individuals who enjoy managing and troubleshooting technical issues and working with others, from entry-level employees through senior-level leadership. System administrators must work with all users in an organization, so people and communication skills are essential in this role. For those who love working with technology and people, being a system administrator is a solid choice with lots of growth potential.
              </p>

              {/* New Section: What Should a System Administrator Know? */}
              <h1 className="text-3xl mt-6">
                What Should a System Administrator Know?
              </h1>
              <p className="text-gray-300 mt-4">
                It takes a particular individual to be a system administrator – they tend to have distinct personalities. They are typically intellectual individuals who are inquisitive and introspective. They also possess a methodical, analytical, and rational side, with a healthy dose of curiosity and practicality. They are good
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
          </div>
        </div>
      </div>
      <div className="bg-black py-10">
        <h2 className="text-center text-4xl font-bold mb-12">
          Explore Our Courses
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

export default SystemAdministrator;