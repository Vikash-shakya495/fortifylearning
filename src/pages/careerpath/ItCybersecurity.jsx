import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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

const ItCybersecurity = () => {
  const courses = [
    {
      title: "Network Reference Models",
      subtitle:
        "In this hands-on lab, you will learn about the OSI and TCP/IP Reference Models and how they are used to organize the communications standards used by computer networks. You will then explore the different layers of the two models using Wireshark and a PCAP file containing wireless network traffic",
      duration: "1H:0M",
      ceus: "1 CEUS",
      image: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64e784d38835d8cfd88b476b_SC-200_cover-p-500.png",
      link:"/career-path/it-cybersecurity"
    },
    {
      title: "Linux CLI Basics",
      subtitle:
        "In this hands-on lab, you will learn the basics of the Linux Command Line Interface. You will learn and practice several common Linux commands.",
      badge: "COURSE",
      duration: "1H:0M",
      ceus: "1 CEUS",
      image: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64e784d38835d8cfd88b476b_SC-200_cover-p-500.png",
      link:"/career-path/it-cybersecurity"
    },
    {
      title: "IP Addressing Basics",
      subtitle:
        "In this hands-on lab, you will learn the basics of IP addressing. You will practice analyzing a TCP/IP network topology in the GNS3 network simulator using basic Linux commands.",
      badge: "COURSE",
      duration: "1H:20M",
      ceus: "1 CEUS",
      image: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64e784d38835d8cfd88b476b_SC-200_cover-p-500.png",
      link:"/career-path/it-cybersecurity"
    },
    {
      title: "Network Device Basics",
      subtitle:
        "In this hands-on lab, you will learn the basics of network devices. You will practice assessing and configuring a simple network topology in the GNS3 network simulator..",
      badge: "COURSE",
      duration: "0H:20M",
      ceus: "1 CEUS",
      image: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64e784d38835d8cfd88b476b_SC-200_cover-p-500.png",
      link:"/career-path/it-cybersecurity"
    },
    {
      title: "Linux File System Basics",
      subtitle:
        "In this hands-on lab, you will learn the basics of the Linux file system. You will practice using the Linux CLI to navigate the Linux file system and explore important directories.",
      badge: "COURSE",
      duration: "1H:0M",
      ceus: "1 CEUS",
      image: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64e784d38835d8cfd88b476b_SC-200_cover-p-500.png",
      link:"/career-path/it-cybersecurity"
    },
    {
      title: "Cryptography Basics",
      subtitle: 
        "In this hands-on lab, you will learn about the basics of cryptography and the cryptographic process. You will practice encrypting and decrypting messages using a simple simple cipher.",
      badge: "COURSE",
      duration: "0H:30M",
      ceus: "1 CEUS",
      image: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64e784d38835d8cfd88b476b_SC-200_cover-p-500.png",
      link:"/career-path/it-cybersecurity"
    },
    {
      title: "Symmetric Cryptography",
      subtitle:
        "In this hands-on lab, you will learn about the basics of symmetric cryptography. You will practice encrypting and decrypting messages using symmetric cryptography.",
      badge: "COURSE",
      duration: "0H:55M",
      ceus: "1 CEUS",
      image: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64e784d38835d8cfd88b476b_SC-200_cover-p-500.png",
      link:"/career-path/it-cybersecurity"
    },
    {
      title: "Asymmetric Cryptography",
      subtitle:
        "In this hands-on lab, you will learn about the basics of asymmetric cryptography. You will practice encrypting and decrypting messages using asymmetric cryptography.",
      badge: "COURSE",
      duration: "1H:5M",
      ceus: "1 CEUS",
      image: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64e784d38835d8cfd88b476b_SC-200_cover-p-500.png",
      link:"/career-path/it-cybersecurity"
    },
    {
      title: "Cryptographic Hash Functions",
      subtitle:
        "In this hands-on lab, you will learn about the basics of cryptographic hash functions. You will practice generating and comparing hash values.",
      badge: "COURSE",
      duration: "1H:0M",
      ceus: "1 CEUS",
      image: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64e784d38835d8cfd88b476b_SC-200_cover-p-500.png",
      link:"/career-path/it-cybersecurity"
    },
    {
      title: "Windows CLI Basics",
      subtitle:
        "In this hands-on lab, you will learn the basics of the Windows Command Line Interface. You will learn and practice several common Windows commands.",
      badge: "COURSE",
      duration: "1H:0M",
      ceus: "1 CEUS",
      image: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64e784d38835d8cfd88b476b_SC-200_cover-p-500.png",
      link:"/career-path/it-cybersecurity"
    },
    {
      title: "Access Control Basics",
      subtitle:
        "In this hands-on lab, you will learn the basics of access control, including different types of access control. You will practice using Windows Security Permissions and icacls to manage and verify and access control.",
      badge: "COURSE",
      duration: "1H:10M",
      ceus: "1 CEUS",
      image: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64e784d38835d8cfd88b476b_SC-200_cover-p-500.png",
      link:"/career-path/it-cybersecurity"
    },
    {
      title: "Windows File System Basics",
      subtitle:
        "In this hands-on lab, you will learn the basics of the Windows file system. You will practice using the File Explorer and the Windows CLI to navigate the Windows file system and explore important directories.",
      badge: "COURSE",
      duration: "1H:10M",
      ceus: "1 CEUS",
      image: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64e784d38835d8cfd88b476b_SC-200_cover-p-500.png",
      link:"/career-path/it-cybersecurity"
    },
    {
      title: "Data Backup and Recovery",
      subtitle:
        "In this lab we will simulate the recovery phase where we must perform a backup in a server environment.",
      badge: "COURSE",
      duration: "1H:0M",
      ceus: "0 CEUS",
      image: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64e784d38835d8cfd88b476b_SC-200_cover-p-500.png",
      link:"/career-path/it-cybersecurity"
    },
    {
      title: "Windows Services",
      subtitle:
        "In this hands-on lab, you learn the basics of Windows Services. You will explore several key Windows Services using the Service Control Manager and PowerShell, and demonstrate the risks associated with unquoted service paths.",
      badge: "COURSE",
      duration: "1H:10M",
      ceus: "1 CEUS",
      image: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64e784d38835d8cfd88b476b_SC-200_cover-p-500.png",
      link:"/career-path/it-cybersecurity"
    },
    {
      title: "Wireshark",
      subtitle:
        "This lab exercise is designed to allow the trainee become familiar with the use of Wireshark.",
      badge: "COURSE",
      duration: "1H:0M",
      ceus: "0 CEUS",
      image: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64e784d38835d8cfd88b476b_SC-200_cover-p-500.png",
      link:"/career-path/it-cybersecurity"
    },
    {
      title: "Nmap Basics",
      subtitle:
        "In this hands-on lab, you will learn the basics of Nmap, including basic functionality and practical applications. You will practice scanning and enumeration using a range of different Nmap options..",
      badge: "COURSE",
      duration: "1H:15M",
      ceus: "1 CEUS",
      image: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64e784d38835d8cfd88b476b_SC-200_cover-p-500.png",
      link:"/career-path/it-cybersecurity"
    },
    {
      title: "VPN Basics",
      subtitle:
        "In this lab, you will learn the basics of Virtual Private Networks (VPNs). You will practice configuring a site-to-site IPsec VPN implementation using two pfSense firewall appliances..",
      badge: "COURSE",
      duration: "1H:25M",
      ceus: "1 CEUS",
      image: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64e784d38835d8cfd88b476b_SC-200_cover-p-500.png",
      link:"/career-path/it-cybersecurity"
    },
    {
      title: "Active Directory Basics",
      subtitle:
        "In this hands-on lab, you will learn the basics of the Domain Controller and Active Directory features of the Windows Server operating system. You will practice configuring a Domain Controller and using Active Directory to manage users and groups..",
      badge: "COURSE",
      duration: "1H:15M",
      ceus: "1 CEUS",
      image: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c1717d5c861ce9d59709_CompTIA_Security_-p-500.png",
      link:"/career-path/it-cybersecurity"
    },
    {
      title: "Group Policy Basics",
      subtitle:
        "In this hands-on lab, you will learn the basics of Group Policy. You will practice using the the Group Policy Management Console (GPMC) to manage Group Policy Objects in a Microsoft Active Directory environment.",
      badge: "COURSE",
      duration: "1H:30M",
      ceus: "1 CEUS",
      image: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c1717d5c861ce9d59709_CompTIA_Security_-p-500.png",
      link:"/career-path/it-cybersecurity"
    },
    {
      title: "Firewall Basics",
      subtitle:
        "In this hands-on lab, you will learn the basics of firewalls, including core functionality and practical applications. You will practice writing, setting, and validating rules using the host-based iptables firewall on a Linux system.",
      badge: "COURSE",
      duration: "1H:0M",
      ceus: "1 CEUS",
      image: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c1717d5c861ce9d59709_CompTIA_Security_-p-500.png",
      link:"/career-path/it-cybersecurity"
    },
    {
      title: "IDS Setup",
      subtitle:
        "The IDS Setup virtual lab from CybrScore guides the student through setting up an intrusion detection system (ISD) using Security Onion. This will include configuring the interfaces and reviewing a dashboard in Snorby.",
      badge: "COURSE",
      duration: "1H:0M",
      ceus: "1 CEUS",
      image: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c1717d5c861ce9d59709_CompTIA_Security_-p-500.png",
      link:"/career-path/it-cybersecurity"
    },
    {
      title: "Network Troubleshooting Basics",
      subtitle:
        "In this hands-on lab, you will learn the basics of network troubleshooting. You will practice using common network troubleshooting tools and techniques to diagnose and resolve various network connectivity issues..",
      badge: "COURSE",
      duration: "1H:10M",
      ceus: "1 CEUS",
      image: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c1717d5c861ce9d59709_CompTIA_Security_-p-500.png",
      link:"/career-path/it-cybersecurity"
    },
    {
      title: "Vulnerability Scanner Basics",
      subtitle:
        "In this hands-on lab, you will learn the basics of vulnerability scanners, including basic functionality and practical applications. You will practice configuring and analyzing scans using the OpenVAS vulnerability scanner..",
      badge: "COURSE",
      duration: "1H:0M",
      ceus: "1 CEUS",
      image: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c1717d5c861ce9d59709_CompTIA_Security_-p-500.png",
      link:"/career-path/it-cybersecurity"
    },
    {
      title: "Patching Basics",
      subtitle:
        "In this hands-on lab, you will learn the basics of patching. You will practice installing security patches on both Windows and Linux systems, as well as a Docker container..",
      badge: "COURSE",
      duration: "1H:5M",
      ceus: "1 CEUS",
      image: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c1717d5c861ce9d59709_CompTIA_Security_-p-500.png",
      link:"/career-path/it-cybersecurity"
    },
  ];

  const dispatch = useDispatch();
  const url = "https://www.cybrary.it/career-path/network-engineer";

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
          IT & Cybersecurity Foundations Career Path
          </h2>
          <p className="text-gray-300 mt-4 mb-6">
          Get everything you need to start your cybersecurity career journey, and stop wasting your time (and money) sorting through unreliable information from questionable sources. While this industry offers very lucrative career opportunities, finding accurate, relevant information to break into the field can be incredibly frustrating. That’s why we’ve crafted this IT and Cybersecurity Foundations path, featuring thoughtful, bite-sized content from expert instructors covering core concepts found across all cybersecurity roles. These instructors have helped thousands of other beginners grasp essential IT and cybersecurity topics. Get ready to take your first steps into cybersecurity by diving into core concepts needed for any cybersecurity role. Build practical skills and gain confidence as you begin your cybersecurity journey.
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
      </div> <div className="bg-black md:w-5/6 mx-auto mt-20 text-white p-8">
      <h1 className="text-3xl font-bold mb-4">Purpose Statement</h1>
      <p className="text-lg leading-relaxed">
        <span className="font-semibold">Cybrary Career Paths</span> are
        comprehensive training programs designed to prepare you for the most
        in-demand roles in the cybersecurity workforce. Each path follows a{" "}
        <span className="italic">Learn, Practice, Prove</span> model and
        includes different activity types aligned to key topics within the
        path’s security domain. As you progress through the path, your progress
        will be measured in real time using Experience Points (XP) that serve
        as a comprehensive capability score for each topic. Upon completing all
        of the requirements for a path, you will be rewarded with a shareable
        digital badge via Credly.
      </p>
    </div>
     
      <div className="flex flex-col lg:flex-row mx-auto mt-32 w-11/12 lg:w-4/5 p-4 gap-12">
        <div className="w-full lg:w-2/3">

          <div className="flex flex-wrap justify-between mt-16">
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-2xl lg:text-3xl">31H 40M</h1>
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


              
              <h1 className="text-3xl mt-6">
              Who is this career path for?
              </h1>
              <p className="text-gray-300 mt-4">
              This path is for newcomers who are just beginning to explore IT and cybersecurity careers and skillsets. Whether you’ve recently graduated with a technical degree or are making a pivot from a technical or operations-focused role.
              </p>
              <h1 className="text-3xl mt-6">
              What skills will I gain by completing this path?
              </h1>
              <p className="text-gray-300 mt-4">
              This path covers foundational skills that all cybersecurity roles and job functions are built upon. You’ll learn key concepts and skills including: Wireshark, NMAP, Cryptography, Firewall, IDS, and Vulnerability scanner basics.
              </p>
              
              <h1 className="text-3xl mt-6">
              Will this prepare me for an entry-level role?
              </h1>
              <p className="text-gray-300 mt-4">
              This course will prepare you to begin the search for your first cybersecurity role. While more specialized skills may be needed for your desired role, this path is designed to get you comfortable with essential concepts and on-the-job skills, giving you confidence to start the application and interview process
              </p>
           
              

              {/* New Section: Is a Systems Administrator a Good Career to Get Into? */}
              <h1 className="text-3xl mt-6">
              What prerequisites are needed for this career path? Do I need on-the-job experience?
              </h1>
              <p className="text-gray-300 mt-4">
              No previous experience, knowledge, or skills are required for this path. All you need is intellectual curiosity and a growth-oriented mindset. On-the-job experience is not required but may be helpful for learners transitioning from a technical role in a different field
              
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
</h2>
<p  className="text-gray-400"> Focused on the core IT competencies that cybersecurity professionals need to succeed in any career path.</p>
            </div>
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
        <h2 className="text-3xl font-bold mb-4 mt-8 flex items-center md:w-5/6 mx-auto md:px-10">
          <div className="h-4 w-4 rounded-full bg-gradient-to-r from-red-500 to-fuchsia-500 mr-2"></div>Courses Outline
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

export default ItCybersecurity;