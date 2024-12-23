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

function AzureCloud() {
  const salesforceCourses = [
    {
      img: "https://isodoc.co.uk/wp-content/uploads/2023/06/training-procedure.jpg",
      title: "Salesforce Fundamentals",
      overview:
        "Get started with the basics of Salesforce, including navigation, data management, and reporting.",
      duration: "4 hours",
      format: "On-demand video",
      link: "/course/cyber-network-security",
    },
    {
      img: "https://cdn.shopaccino.com/igmguru/products/salesforce-training-igmguru_1400382585_l.jpg?v=500",
      title: "Advanced Salesforce Administration",
      overview:
        "Dive deeper into advanced admin topics, including custom objects, complex workflows, and advanced data management.",
      duration: "6 hours",
      format: "Interactive lab sessions",
      link: "/practice-lab/secure-network-access",
    },
    {
      img: "https://dianapps.com/blog/wp-content/uploads/2022/12/Reasons-Why-Every-Company-Needs-a-Dedicated-Salesforce-Developer.png",
      title: "Salesforce Developer Essentials",
      overview:
        "Learn the core development skills needed to build and customize Salesforce applications using Apex and Visualforce.",
      duration: "8 hours",
      format: "Hands-on projects and coding exercises",
      link: "/practice-lab/configure-a-virtual-network-service-endpoint",
    },
    {
      img: "https://www.apexhours.com/wp-content/uploads/2021/06/Factors-Influencing-Salesforce-Org-Strategy.png",
      title: "Salesforce Integration Strategies",
      overview:
        "Understand various integration methods and tools for connecting Salesforce with other systems, including APIs and middleware.",
      duration: "5 hours",
      format: "Case studies and practical exercises",
      link: "/practice-lab/configure-linux-firewall-acl-rules",
    },
    {
      img: "https://360degreecloud.com/wp-content/uploads/2024/03/Salesforce-Data-Migration-Why-Its-Time-to-Make-the-Move-1024x535.jpg",
      title: "Data Migration with Salesforce",
      overview:
        "Master data import, export, and transformation techniques to ensure smooth data migration into Salesforce.",
      duration: "4 hours",
      format: "Live demonstrations and guided practice",
      link: "/practice-lab/configure-ip-routing-with-linux-on-azure",
    },
    {
      img: "https://ceptes.com/wp-content/uploads/2020/02/Top-10-lightning-features-1-1.jpg",
      title: "Salesforce Lightning Experience",
      overview:
        "Transition smoothly from Classic to Lightning Experience with a comprehensive guide on new features and functionalities.",
      duration: "3 hours",
      format: "On-demand video tutorials",
      link: "/practice-lab/configure-network-connectivity-for-linux-on-azure",
    },
    {
      img: "https://www.mastersoftwaresolutions.com/wp-content/uploads/2024/02/mss-founded-by-ravi-garg-website-insights-key-components-and-features-of-salesforce-service-cloud.webp",
      title: "Salesforce Service Cloud Mastery",
      overview:
        "Enhance your skills in managing customer service operations using Salesforce Service Cloud, focusing on case management and service automation.",
      duration: "6 hours",
      format: "Interactive scenarios and quizzes",
      link: "/practice-lab/deploy-ubuntu-linux-virtual-machines-in-the-microsoft-azure",
    },
    {
      img: "https://www.ksolves.com/wp-content/uploads/Blog-3.jpg",
      title: "Salesforce Marketing Cloud Insights",
      overview:
        "Explore advanced marketing automation and analytics capabilities within Salesforce Marketing Cloud.",
      duration: "5 hours",
      format: "Case studies and practical exercises",
      link: "/practice-lab/can-you-use-pki-to-secure-a-network-environment-expert",
    },
    {
      img: "https://www.techforceservices.com/wp-content/uploads/2021/03/top-5-salesforce-security-best-practices.webp",
      title: "Salesforce Security Best Practices",
      overview:
        "Learn best practices for securing your Salesforce instance, including user access management and data protection.",
      duration: "4 hours",
      format: "On-demand video and security assessments",
      link: "/practice-lab/configure-a-network-security-group-in-a-virtual-network",
    },
    {
      img: "https://dwlrs858nh2or.cloudfront.net/wp-content/uploads/2024/02/14195041/Salesforce-CPQ-Basics.webp",
      title: "Salesforce CPQ Fundamentals",
      overview:
        "Understand the essentials of Salesforce CPQ (Configure, Price, Quote) to streamline your sales process and quoting accuracy.",
      duration: "5 hours",
      format: "Interactive labs and real-world scenarios",
      link: "/practice-lab/identify-non-secure-network-traffic",
    },
    {
      img: "https://sunshineskill.com/wp-content/uploads/2024/07/analytics-cloud.jpg",
      title: "Salesforce Analytics Cloud Training",
      overview: "Get hands-on experience with Salesforce Analytics Cloud.",
      duration: "5 hours",
      format: "Practical exercises and case studies",
      link: "/practice-lab/identify-non-secure-network-traffic",
    },
    {
      img: "https://www.techforceservices.com/wp-content/uploads/2024/05/Salesforce-Community-Cloud-Crafting-Dynamic-Online-Communities.webp",
      title: "Salesforce Community Cloud Essentials",
      overview:
        "Learn to build and manage Salesforce Communities to enhance collaboration and engagement with external users.",
      duration: "5 hours",
      format: "On-demand video and project-based learning",
      link: "/practice-lab/identify-non-secure-network-traffic",
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
    <div>
      <div className="mt-44 flex flex-col items-center md:flex-row justify-center md:full  text-white py-8 px-12 md:px-16 lg:px-44 gap-12">
        <div className="w-full md:w-1/2 md:mb-0 text-center md:text-left flex flex-col">
          <h2 className="text-3xl sm:text-4xl md:mb-12 md:text-5xl">
          Azure Cloud Engineer Certification Path
          </h2>
          <p className="mt-4 text-gray-400">
          As one of the dominant cloud computing services, Microsoft Azure is responsible for more than 700,000 current job openings in the cloud industry. Whether you’re here to develop your Azure engineering skills or simply to learn about the cloud, Cybrary’s Azure Cloud Engineer collection will deliver best in class instruction to ensure you acquire the real-world skills needed to become a successful Azure cloud engineer.
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
      </div>
      <div className="flex flex-col lg:flex-row mx-auto mt-32 w-11/12 lg:w-4/5 p-4 gap-12">
        <div className="w-full lg:w-2/3">
          <div>
            <h1 className="text-2xl lg:text-3xl">Purpose Statement</h1>
            <p>
              <span className="font-semibold">Cybrary Career Paths</span> are
              comprehensive training programs designed to prepare you for the
              most in-demand roles in the cybersecurity workforce. Each path
              follows a Learn, Practice, Prove model and includes different
              activity types aligned to key topics within the path’s security
              domain. As you progress through the path, your progress will be
              measured in real time using Experience Points (XP) that serve as a
              comprehensive capability score for each topic. Upon completing all
              of the requirements for a path, you will be rewarded with a
              shareable digital badge via Credly.
            </p>
          </div>
          <div className="flex flex-wrap justify-between mt-16">
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-2xl lg:text-3xl">52H 36M</h1>
              <span className="text-gray-400 font-semibold">TIME</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-2xl lg:text-3xl">intermediate</h1>
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
              <h1 className="font-semibold text-2xl lg:text-3xl">
                What is an Azure Cloud Engineer?
              </h1>

              <p className="mt-4 text-gray-400">
                Microsoft Azure is one of the leading cloud service providers in
                the world, offering more than 100 services to users across 60
                regions and 140 countries. The platform equips IT professionals
                and developers with tools and frameworks to develop, implement,
                and maintain cloud-based applications efficiently. With at least
                95% of Fortune 500 companies relying on Azure, earning an Azure
                Cloud Certification has become essential for advancing in the IT
                field.
              </p>
              <p className="mt-8 text-gray-400 font-semibold">
                The Azure Cloud Engineer Certification Career Path is
                specifically designed to help students acquire the skills needed
                to pass key certification exams and qualify for roles like Azure
                Cloud Engineer. Through this career path, students will learn
                about cloud computing, cloud security, networking services,
                virtual machines, and other essential Azure services. Microsoft
                provides multiple role-based certifications aligned with market
                demands, including exams such as Microsoft Azure AZ-900, AZ-104,
                AZ-303, AZ-304, and AZ-500, preparing candidates for success in
                the rapidly growing Azure ecosystem.
              </p>
              <h1 className="font-semibold text-2xl lg:text-3xl mt-6">
                What is an Azure Cloud Engineer?
              </h1>
              <p className="mt-8 text-gray-400 font-semibold">
                Azure Cloud Engineers are responsible for many cloud-related
                activities. They will assess an organization’s IT infrastructure
                to determine options for moving to the cloud. A cloud engineer
                will then oversee the migration process and maintain the new
                system. Some of the specific duties of an Azure Cloud Engineer
                may include:
              </p>
              <ul className="text-gray-400 mt-2">
                <li className="flex gap-4">
                  <TbPointFilled className="text-white mt-1" /> Working on
                  Microsoft Azure networking
                </li>
                <li className="flex gap-4">
                  <TbPointFilled className="text-white mt-1" /> Handling Azure
                  virtual machines
                </li>
                <li className="flex gap-4">
                  <TbPointFilled className="text-white mt-1" /> Deploying Azure
                  virtual machines in a highly available environment
                </li>
                <li className="flex gap-4">
                  <TbPointFilled className="text-white mt-1" /> Designing
                  virtual networks that support workloads with a high level of
                  security and performance
                </li>
                <li className="flex gap-4">
                  <TbPointFilled className="text-white mt-1" /> Exploring how to
                  configure hybrid connectivity between Azure and on-site
                  environments, as well as how to monitor network performance to
                  comply with service-level agreements
                </li>
                <li className="flex gap-4">
                  <TbPointFilled className="text-white mt-1" /> Using PowerShell
                  to implement repeatable deployments with ARM templates
                </li>
                <li className="flex gap-4">
                  <TbPointFilled className="text-white mt-1" /> Continuing to
                  learn new ways to utilize PowerShell to define and deploy
                  services to Azure and how to scale resources in Azure
                </li>
                <li className="flex gap-4">
                  <TbPointFilled className="text-white mt-1" /> Using automation
                  technology options within Azure
                </li>
                <li className="flex gap-4">
                  <TbPointFilled className="text-white mt-1" /> Designing and
                  implementing data protection options in Azure
                </li>
                <li className="flex gap-4">
                  <TbPointFilled className="text-white mt-1" /> Establishing and
                  implementation of monitoring and management infrastructure for
                  both availability and performance management
                </li>
                <p className="mt-4 text-gray-400">
                  In addition to technical skills, an Azure Cloud Engineer also
                  requires leadership and managerial skills. Strong
                  communication skills are needed as a cloud engineer may be
                  required to coordinate with other IT members or teams,
                  negotiate with vendors, and communicate with senior management
                  about cloud-related projects.
                </p>
              </ul>
              <h1 className="font-semibold text-2xl lg:text-3xl mt-8">
                What Kind of Azure Cloud Engineer Jobs Are There?
              </h1>
              <p className="mt-4 text-gray-400">
                There are numerous career options for candidates with Microsoft
                Azure certifications. One of the most popular job titles, Cloud
                Engineer, may represent a category of different job roles that
                include cloud support associate, cloud developer, and cloud
                architect:
              </p>
              <p className="mt-8 text-gray-400 font-semibold">
                Cloud Support Engineer: Cloud Support Engineers often work for
                the actual service provider, including Microsoft. They are
                responsible for onboarding, troubleshooting, and maintenance of
                cloud computing services.
              </p>
              <ul className="text-gray-400 mt-2">
                <li className="flex gap-4">
                  <TbPointFilled className="text-white mt-1" /> Cloud Developer: These developers perform the software engineering and coding that bring architects’ visions to life. They utilize traditional programming skills alongside specialized knowledge of one or more of the popular cloud services platforms, like Azure, to build, deploy, and optimize cloud applications.
                </li>
                <li className="flex gap-4">
                  <TbPointFilled className="text-white mt-1" /> Cloud Architect: A Cloud Architect plans the infrastructure and applications that will operate in the cloud. They use technical expertise and solid business acumen to design and optimize cloud computing blueprints of organizations.
                </li>
                <p className="flex gap-4 text-gray-400  mt-10 mb-6">
                    The following job titles are also frequently available to Cloud Engineers:
                </p>
                <li className="flex gap-4">
                  <TbPointFilled className="text-white mt-1" /> Cloud Support Associate
                </li>
                <li className="flex gap-4">
                  <TbPointFilled className="text-white mt-1" /> Cloud Systems Analyst

                </li>
                <li className="flex gap-4">
                  <TbPointFilled className="text-white mt-1" /> Cloud Security Engineer
                </li>
                <li className="flex gap-4">
                  <TbPointFilled className="text-white mt-1" /> Senior Cloud Engineer
                </li>
                <li className="flex gap-4">
                  <TbPointFilled className="text-white mt-1" />DevOps Architect
                </li>
                <p className="mt-4 text-gray-400">
                Cloud computing knowledge, including that of the Microsoft Azure platform, is not only important for jobs that have “cloud” in the title. These experts are also in demand for more traditional technology roles like software engineer, data scientist, and cybersecurity specialist as well.
              </p>
                
              </ul>
              <h3 className="text-3xl lg:text-5xl mt-12">
              Why Pursue an Azure Cloud Certification?
              </h3>
              <p className="text-gray-300 mt-4">
              The Microsoft Azure cloud computing platform offers a vast range of cloud-based services and applications, giving users access to powerful computing capabilities and cutting-edge technological advancements that revolutionize their operations. As more organizations adopt Microsoft Azure for their cloud computing needs, the demand for professionals with an Azure Cloud Certification continues to grow. Currently, there is a significant shortage of qualified Azure experts to fill open positions, creating a strong advantage for skilled candidates in securing career opportunities and negotiating higher salaries.
              </p>
              <p className="text-gray-300 mt-4">
              Earning an Azure Cloud Engineer Certification not only validates a candidate's in-depth knowledge of the Azure platform but also highlights their commitment to continuous learning and staying current with technological trends. These are qualities that IT recruiters and hiring managers highly value when seeking IT professionals. With the increasing demand for Azure expertise, there has never been a better time to pursue an Azure Cloud Certification and advance your career in cloud computing.
              </p>
             
             
             
            </div>
          </div>
        </div>
       
        
      </div>
      <div className="mt-20 text-white py-12 px-4 md:px-32 xl:px-68 flex flex-col items-center">
        <h2 className="text-3xl  md:text-4xl  mb-8">
        Course Outline
         
        </h2>
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {salesforceCourses.map((course, index) => (
            <NavLink to={course.link} key={index}>
              <div className="relative bg-gray-800 rounded-lg shadow-lg group hover:shadow-xl transition-shadow border border-gray-600 flex flex-col items-between overflow-hidden">
                <img
                  src={course.img}
                  alt=""
                  className="h-[200px] w-full object-cover rounded-t-lg"
                />
                <div className="py-4 px-4 pb-16">
                  <h3 className="text-2xl font-semibold mb-2 text-white">
                    {course.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{course.overview}</p>
                  <div className="text-gray-300 text-lg py-2 px-4 border rounded-xl mb-2 bg-slate-900">
                    <span className="font-semibold">Duration:</span>{" "}
                    {course.duration}
                  </div>
                  <div className="text-lg py-2 px-4 border rounded-xl mb-2 text-gray-300">
                    <span className="font-semibold">Format:</span>{" "}
                    {course.format}
                  </div>
                </div>
                {/* Button */}
                <button className="absolute bottom-0 left-0 w-full bg-gradient-to-r from-orange-600 via-pink-600 to-fuchsia-600 py-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 mt-12">
                  Learn More and Enroll
                </button>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
      <div className="mt-12">
        <TestimonialsCarousel />
      </div>
    </div>
  );
}

export default AzureCloud;
