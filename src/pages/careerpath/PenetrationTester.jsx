// course/cve-series-couchdb-rce-cve-2022-24706
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
import { FaArrowRight } from "react-icons/fa6";
import { GrDatabase } from "react-icons/gr";
import { TbPointFilled } from "react-icons/tb";
import TestimonialsCarousel from "../../components/home/TestimonialsCarousel";
import { GoShieldCheck } from "react-icons/go";

// import FortifyLearningLogo from '../../assets/fortifyLearning.png';

function PenetrationTester() {
  const salesforceCourses = [
    {
      img: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c29097e20ef212d01e03_osint_fundamentals.jpeg",
      title: "Salesforce Fundamentals",
      overview:
        "Get started with the basics of Salesforce, including navigation, data management, and reporting.",
      demo: "COURSE",
      duration: "1H:56M",

      format: "2 CEUS",
      link: "/course/cyber-network-security",
    },
    {
      img: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6516a7ee77af65fe9873416c_Network_Sniffing-p-500.png",
      title: "Advanced Salesforce Administration",
      overview:
        "Dive deeper into advanced admin topics, including custom objects, complex workflows, and advanced data management.",
      demo: "LAB",
      duration: "1H:20M",
      format: "1 CEUS",
      link: "/practice-lab/secure-network-access",
    },
    {
      img: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468ef74f13917ef2dd9861e_Perform_Network_Sniffing-p-500.png",
      title: "Salesforce Developer Essentials",
      overview:
        "Learn the core development skills needed to build and customize Salesforce applications using Apex and Visualforce.",
      demo: "LAB",
      duration: "0H:30M",
      format: "0 CEUS",
      link: "/practice-lab/configure-a-virtual-network-service-endpoint",
    },
    {
      img: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6516a7e5b25ec34174a35f2a_Metasploit_Basics-p-500.png",
      title: "Salesforce Integration Strategies",
      overview:
        "Understand various integration methods and tools for connecting Salesforce with other systems, including APIs and middleware.",
      demo: "LAB",
      duration: "1H:15M",
      format: "1 CEUS",
      link: "/practice-lab/configure-linux-firewall-acl-rules",
    },
    {
      img: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6516a7d570c271919545a70e_Burp_Suite_Basics-p-500.png",
      title: "Data Migration with Salesforce",
      overview:
        "Master data import, export, and transformation techniques to ensure smooth data migration into Salesforce.",
      demo: "LAB",
      duration: "1H:20M",
      format: "1 CEUS",
      link: "/practice-lab/configure-ip-routing-with-linux-on-azure",
    },
  ];

  // popUp share button
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
    <div className="mt-44 md:w-full">
      <div className="flex flex-col md:flex-row items-center justify-center w-full text-white py-8 px-6 sm:px-12 lg:px-36 gap-8 lg:gap-8">
        <div className="w-full md:w-1/2 text-center md:text-left flex flex-col">
          <h2 className="text-2xl sm:text-3xl md:mb-6 lg:mb-12 md:text-4xl lg:text-5xl mt-4">
            Penetration Tester Career Path
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Penetration Testers are professional ethical hackers. They are
            responsible for assessing an organization's defenses from the
            perspective of a threat actor. This program is designed to provide
            you with the foundational knowledge and key skills required to
            succeed as an entry-level Penetration Tester. Over the course of 22
            courses and hands-on virtual labs, you will learn Offensive Security
            Fundamentals, Reconnaissance and Enumeration, Application Attacks,
            Network Attacks, and Evasion.
          </p>
          <div className="flex flex-col md:flex-row items-center mt-4 gap-4 justify-center md:justify-start">
            <button
              onClick={() => dispatch(togglePopup())}
              className="w-full md:w-1/3 py-3 bg-gradient-to-r from-red-500 via-pink-500 to-fuchsia-500 rounded-2xl text-white font-semibold hover:shadow-[0px_0px_10px_purple,0px_0px_10px_#FF4D6D] duration-500"
            >
              Create Free Account
            </button>
            <NavLink to="/business">
              <button className="px-4 md:px-6 py-3 md:py-4 rounded-xl bg-black flex items-center gap-4 text-sm sm:text-base">
                Need to train your team? Learn more <FaArrowRight />
              </button>
            </NavLink>
          </div>
          <div className="flex items-center text-sm sm:text-base text-gray-500 mt-4 gap-2 justify-center md:justify-start">
            <FiShare2 className="text-lg sm:text-2xl text-gray-400" />
            <button onClick={sharePopup} className="text-gray-500">
              Share
            </button>
          </div>
          {showPopup && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-gray-900 p-6 sm:p-8 flex flex-col gap-6 rounded-lg">
                <h3 className="text-2xl sm:text-3xl flex items-center justify-between">
                  <span>Share</span>
                  <button onClick={sharePopup} className="text-white">
                    <RxCross2 />
                  </button>
                </h3>
                <div className="flex gap-4">
                  <button className="border p-3 rounded-full">
                    <FaFacebookSquare className="text-2xl sm:text-3xl text-white" />
                  </button>
                  <button className="border p-3 rounded-full">
                    <FaSquareTwitter className="text-2xl sm:text-3xl text-white" />
                  </button>
                  <button className="border p-3 rounded-full">
                    <BsLinkedin className="text-2xl sm:text-3xl text-white" />
                  </button>
                  <button className="border p-3 rounded-full">
                    <MdOutlineMarkEmailRead className="text-2xl sm:text-3xl text-white" />
                  </button>
                </div>
                <div className="flex items-center gap-4">
                  <input
                    type="text"
                    readOnly
                    value={url}
                    className="bg-gray-900 border border-gray-500 px-4 py-2 text-white rounded w-2/3"
                  />
                  <button
                    onClick={copyToClipboard}
                    className="bg-purple-600 py-2 px-2 w-1/3 rounded-lg text-white hover:bg-purple-700"
                  >
                    Copy Link
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="bg-white text-black p-8 rounded-3xl shadow-lg w-full md:w-1/2 h-[auto] max-w-lg mx-auto">
          <h2 className="text-2xl md:text-2xl mb-6">
            Create a free account to start exploring the platform.
          </h2>
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
          <div>
            <h1 className="text-4xl lg:text-3xl my-3">Purpose Statement</h1>
            <p>
              <span className="font-semibold text-lg">
                Cybrary Career Paths
              </span>{" "}
              are comprehensive training programs designed to prepare you for
              the most in-demand roles in the cybersecurity workforce. Each path
              follows a Learn, Practice, Prove model and includes different
              activity types aligned to key topics within the path’s security
              domain. As you progress through the path, your progress will be
              measured in real time using Experience Points (XP) that serve as a
              comprehensive capability score for each topic. Upon completing all
              of the requirements for a path, you will be rewarded with a
              shareable digital badge via Credly.
            </p>
          </div>
          <div className="flex flex-wrap gap-20 mt-16">
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-2xl lg:text-3xl">22H 0M</h1>
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
              <h1 className="text-3xl lg:text-5xl">
                What Are Some SOC Analyst Roles and Responsibilities?
              </h1>
              <p className="mt-4 text-gray-400">
                Penetration testers seek to identify security vulnerabilities in
                an organization’s networks and then resolve them, sometimes
                creating new or improved security protocols. Your job would
                involve many responsibilities and tasks.
              </p>
              <p className="mt-8 text-gray-400 font-semibold">
                As a penetration tester, you will likely be required to:
              </p>
              <ul className="text-gray-400 mt-2">
                <li className="flex gap-4">
                  <TbPointFilled className="text-white mt-1" /> Perform
                  penetration tests on computer systems, networks, and
                  applications
                </li>
                <li className="flex gap-4">
                  <TbPointFilled className="text-white mt-1" /> Create new
                  testing methods to identify vulnerabilities
                </li>
                <li className="flex gap-4">
                  <TbPointFilled className="text-white mt-1" /> Perform physical
                  security assessments of systems, servers, and other network
                  devices to identify areas that require physical protection
                </li>
                <li className="flex gap-4">
                  <TbPointFilled className="text-white mt-1" /> Pinpoint methods
                  and entry points that attackers may use to exploit
                  vulnerabilities or weaknesses
                </li>
                <li className="flex gap-4">
                  <TbPointFilled className="text-white mt-1" /> Search for
                  weaknesses in common software, web applications, and
                  proprietary systems
                </li>
                <li className="flex gap-4">
                  <TbPointFilled className="text-white mt-1" /> Research,
                  evaluate, document, and discuss findings with IT teams and
                  management
                </li>
                <li className="flex gap-4">
                  <TbPointFilled className="text-white mt-1" /> Review and
                  provide feedback for information security fixes
                </li>
                <li className="flex gap-4">
                  <TbPointFilled className="text-white mt-1" /> Establish
                  improvements for existing security services, including
                  hardware, software, policies, and procedures
                </li>
                <li className="flex gap-4">
                  <TbPointFilled className="text-white mt-1" /> Identify areas
                  where improvement is needed in security education and
                  awareness for users
                </li>
                <li className="flex gap-4">
                  <TbPointFilled className="text-white mt-1" /> Be sensitive to
                  corporate considerations when performing testing (minimize
                  downtime and loss of employee productivity)
                </li>
                <li className="flex gap-4">
                  <TbPointFilled className="text-white mt-1" /> Stay updated on
                  the latest malware and security threats
                </li>
              </ul>
              <p className="mt-4 text-gray-400">
                While the above are typical responsibilities for a penetration
                tester, you may have additional duties depending on the
                organization you work for. Sometimes there is overlap in IT
                positions, so it is essential to be flexible and to work as part
                of a cohesive team.
              </p>
              <h1 className="text-3xl lg:text-5xl mt-12">
                What Are Some Penetration Tester Job Requirements?
              </h1>
              <p className="mt-4 text-gray-400">
                While it may be possible to find a job as a penetration tester
                based solely on having the right set of skills, most employers
                prefer to hire penetration testers who have previous relevant
                work experience. Some employers want employees who have at least
                a bachelor’s degree. The U.S. Bureau of Labor Statistics
                indicates that employers prefer to fill entry-level positions in
                the field of information security analysis with applicants who
                have a bachelor’s degree in computer science, information
                security, or another comparable field of study. Some employers
                may want penetration testers to have programming skills in
                specific programming languages and operating systems.
                Additionally, employers may require that penetration testers
                have certification in ethical hacking and other IT security
                areas.
              </p>
              <p className="mt-4 text-gray-400">
                Most employers will want penetration testers to have excellent
                computer skills so they can attempt hacking systems. Penetration
                testers require solid analytical skills to evaluate and analyze
                the processes involved in resolving existing and potential
                security threats. It’s also important for penetration testers to
                have proficient communication skills as they will be writing
                reports and working closely with other IT professionals and
                departments. Most importantly, penetration testers must have
                exceptional problem-solving skills to determine the best course
                of action when resolving issues and protecting networks from
                potential threats or breaches.
              </p>
              <h1 className="text-3xl lg:text-5xl mt-12">
                What is a Typical Penetration Tester Job Description?
              </h1>
              <p className="text-gray-300 mt-4">
                As a penetration tester, you will be responsible for protecting
                computer information systems from adversaries. Your role will
                include running tests on applications, networks, and software.
                You will attempt to hack in, allowing you to access data that
                should not be accessible to unauthorized individuals. You will
                be responsible for identifying any potential weaknesses in
                existing systems and collaborating with other departments and
                professionals to determine the most effective and efficient way
                to resolve them. This may require adding new or additional
                security measures and rewriting program code.
              </p>
              <p className="text-gray-300 mt-4">
                Additional duties for a penetration tester includes reviewing
                any security system incidents, documenting threats, and
                completing reports concerning your findings. You may also be
                asked to design improved security protocols and policies.
              </p>
              <p className="text-gray-300 mt-4">
                Ultimately, you will utilize your knowledge to find
                vulnerabilities in networks, internal systems, and applications.
                This may include automated testing but may also require manually
                attempting to breach security. It may also include creating new
                tests to identify system weaknesses and pinpointing entry points
                for adversaries. When vulnerabilities are identified, you will
                be responsible for advising managers or executives on how to
                make systems more secure.
              </p>
              <h1 className="text-5xl mt-12 ">
                A Day in the Life of a Penetration Tester
              </h1>
              <p className="text-gray-300 mt-4">
                What a typical day as a penetration tester looks like will
                depend on your employer. Some may travel between different sites
                or be required to work evenings and weekends to not disrupt the
                company’s workflow, or they may be able to perform some duties
                remotely or by telecommuting. The heart of the penetration
                tester position is identifying security system vulnerabilities
                by attempting to exploit them and then coming up with solutions
                to resolve the weaknesses to keep their organization’s
                information safe.
              </p>
              <p className="text-gray-300 mt-4">
                A typical day for a penetration tester may include the following
                tasks:
              </p>
              <ul className="text-gray-400 mt-2">
                <li className="flex gap-4">
                  <TbPointFilled className="text-white mt-1" /> Plan a specific
                  penetration test
                </li>
                <li className="flex gap-4">
                  <TbPointFilled className="text-white mt-1" /> Create or select
                  the appropriate testing tools
                </li>
                <li className="flex gap-4">
                  <TbPointFilled className="text-white mt-1" /> Perform the
                  penetration test on networks, applications, or systems
                </li>
                <li className="flex gap-4">
                  <TbPointFilled className="text-white mt-1" /> Document
                  methodologies
                </li>
                <li className="flex gap-4">
                  <TbPointFilled className="text-white mt-1" /> Identify
                  vulnerabilities using the data gathered
                </li>
                <li className="flex gap-4">
                  <TbPointFilled className="text-white mt-1" /> Review and
                  evaluate findings
                </li>
                <li className="flex gap-4">
                  <TbPointFilled className="text-white mt-1" /> Establish
                  possible solutions for the weaknesses
                </li>
              </ul>
              <p className="text-gray-300 mt-4">
                Provide feedback and recommendations to management or clients.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/3">
          <div className="mt-16 lg:mt-72 text-xl lg:text-2xl">
            <h1>What Will I Learn?</h1>
          </div>
          <div className="p-8 flex flex-col gap-4 border bg-slate-900 rounded-xl mt-8">
            <GoShieldCheck className="text-3xl lg:text-5xl" />
            <div>
              <h2 className="font-semibold text-xl lg:text-2xl">
                Offensive Security
              </h2>
              <p className="text-gray-400">
                Focused on validating security controls by trying to break them
                (i.e. penetration testing or ethical hacking). Topics such as
                Kali Linux, metasploit, scanning, and privilege escalation.
                Offensive security seeks out the problem or vulnerability
                through ethical hacking and finds a solution to disable the
                operation.
              </p>
            </div>
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
      <div className="mt-24 w-full text-white py-12 px-4 md:px-32 xl:px-68 flex flex-col items-center justify-center ">
        <div className="flex items-center mb-12 gap-6">
          <h2 className="h-6 w-6 bg-gradient-to-r from-red-500 to-fuchsia-500 rounded-[50%]"></h2>
          <p className="text-start text-3xl text-gray-400 ">Course Outine</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:w-5/6 mx-auto gap-6 px-5 md:px-10">
          {salesforceCourses.map((course) => (
            <div
              key={course.id}
              className={`group relative rounded-lg border-gray-100 border shadow-lg bg-gray-900 overflow-hidden transition-all duration-300 hover:pb-16`}
            >
              <NavLink to={course.link}>
                <img
                  className="rounded-lg"
                  src={course.img}
                  alt={course.title}
                />
                <div className="p-4 transition-all duration-300">
                  <div className="mb-4">
                    <span className="text-xs font-bold bg-pink-600 py-2 px-3 rounded-full uppercase">
                      Course
                    </span>
                    <div className="flex gap-2 mt-6">
                      <span className="py-1 bg-black rounded-xl px-3">
                        {course.duration}
                      </span>
                      <span className="py-1 bg-black rounded-xl px-3">
                        {course.format}
                      </span>
                    </div>
                  </div>
                  <p className="mt-6 text-2xl font-semibold">{course.title}</p>
                  <p className="text-md mt-2 text-gray-300 line-clamp-3">
                    {course.overview}
                  </p>
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
}

export default PenetrationTester;