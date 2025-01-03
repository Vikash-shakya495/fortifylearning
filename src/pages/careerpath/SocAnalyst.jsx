// course/cve-series-couchdb-rce-cve-2022-24706
import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { togglePopup } from '../../store/signupPopupSlice';
import SignupPopup from '../../loginSystem/SignupPopup';
import { FiShare2 } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { GrDatabase } from "react-icons/gr";
import { TbPointFilled } from "react-icons/tb";
import TestimonialsCarousel from '../../components/home/TestimonialsCarousel';
import { GoShieldCheck } from "react-icons/go";

// import FortifyLearningLogo from '../../assets/fortifyLearning.png';

function SocAnalyst() {

    const salesforceCourses = [
        {
            img: 'https://isodoc.co.uk/wp-content/uploads/2023/06/training-procedure.jpg',
            title: 'Salesforce Fundamentals',
            overview: 'Get started with the basics of Salesforce, including navigation, data management, and reporting.',
            duration: '4 hours',
            format: 'On-demand video',
            link: '/course/cyber-network-security'
        },
        {
            img: 'https://cdn.shopaccino.com/igmguru/products/salesforce-training-igmguru_1400382585_l.jpg?v=500',
            title: 'Advanced Salesforce Administration',
            overview: 'Dive deeper into advanced admin topics, including custom objects, complex workflows, and advanced data management.',
            duration: '6 hours',
            format: 'Interactive lab sessions',
            link: '/practice-lab/secure-network-access'
        },
        {
            img: 'https://dianapps.com/blog/wp-content/uploads/2022/12/Reasons-Why-Every-Company-Needs-a-Dedicated-Salesforce-Developer.png',
            title: 'Salesforce Developer Essentials',
            overview: 'Learn the core development skills needed to build and customize Salesforce applications using Apex and Visualforce.',
            duration: '8 hours',
            format: 'Hands-on projects and coding exercises',
            link: '/practice-lab/configure-a-virtual-network-service-endpoint'
        },
        {
            img: 'https://www.apexhours.com/wp-content/uploads/2021/06/Factors-Influencing-Salesforce-Org-Strategy.png',
            title: 'Salesforce Integration Strategies',
            overview: 'Understand various integration methods and tools for connecting Salesforce with other systems, including APIs and middleware.',
            duration: '5 hours',
            format: 'Case studies and practical exercises',
            link: '/practice-lab/configure-linux-firewall-acl-rules'
        },
        {
            img: 'https://360degreecloud.com/wp-content/uploads/2024/03/Salesforce-Data-Migration-Why-Its-Time-to-Make-the-Move-1024x535.jpg',
            title: 'Data Migration with Salesforce',
            overview: 'Master data import, export, and transformation techniques to ensure smooth data migration into Salesforce.',
            duration: '4 hours',
            format: 'Live demonstrations and guided practice',
            link: '/practice-lab/configure-ip-routing-with-linux-on-azure'
        },
    ]

    // popUp share button
    const dispatch = useDispatch();
   const url = `https://www.fortifylearning.it${location.pathname}`;

    const [showPopup, setShowPopup] = useState(false);

    const sharePopup = () => {
        setShowPopup(!showPopup);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(url)
            .then(() => {
                alert('Link copied to clipboard!');
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    };
    return (
        <div className="mt-44 md:w-full">
            <div className="flex flex-col md:flex-row items-center justify-center w-full text-white py-8 px-6 sm:px-12 lg:px-36 gap-8 lg:gap-8">
                {/* Left Section */}
                <div className="w-full md:w-1/2 text-center md:text-left flex flex-col">
                    <h2 className="text-2xl sm:text-3xl md:mb-6 lg:mb-12 md:text-4xl lg:text-5xl mt-4">
                        SOC Analyst Career Path
                    </h2>
                    <p className="text-gray-400 text-sm sm:text-base">
                        SOC Analysts are the front line of defensive security operations and the most in-demand job in cybersecurity. They are responsible for receiving, analyzing, and triaging security tickets as part of an organization’s Security Operations Center. This career path is designed to provide you with foundational knowledge and key skills required to succeed as an entry-level SOC Analyst. Over the course of 20 courses and hands-on virtual labs, you will learn Defensive Security Fundamentals, Log Analysis, Network-Based Detection, and Host-Based Detection. Completing this career path and the associated Assessments will prepare you for pursuing a career as a SOC Analyst and further specializing in advanced skills like Threat Intelligence, Threat Hunting, Incident Response, Malware Analysis, and Digital Forensics.
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

                {/* Right Section */}
                <div className="bg-white text-black p-8 rounded-3xl shadow-lg w-full md:w-1/2 h-[auto] max-w-lg mx-auto">
                    <h2 className="text-2xl md:text-2xl mb-6">Create a free account to start exploring the platform.</h2>
                    <div className="w-full flex px-3 py-2 mb-6 rounded-3xl border border-gray-600 text-black focus-within:ring-2 focus-within:ring-pink-500">
                        <input
                            type="email"
                            placeholder="name@email.com"
                            className="w-full p-1 rounded text-xl placeholder-gray-400 focus:outline-none"
                        />
                        <button
                            onClick={() => dispatch(togglePopup())}
                            className="w-full py-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl text-white font-semibold hover:shadow-[0px_0px_10px_purple,0px_0px_10px_#FF4D6D] duration-500 ">
                            Create a Free Account
                        </button>
                    </div>
                    <SignupPopup />
                    <div className="flex justify-around items-center mt-6">
                        <span className='text-gray-600'>or sign up with</span>
                        <span className='flex gap-4'>
                            <button
                                onClick={() => window.location.href = 'https://google.com'}
                                className="w-12 h-12 border border-black p-1 rounded flex items-center justify-center cursor-pointer"
                                aria-label="Sign up with Google"
                            >
                                <img src="https://lh3.googleusercontent.com/qnaJEbFIpvsWJm2KrRI_GIvz1yZdXntgEsCZxy-1pVZi244bCk1RFwdk0ZBRmmvdHiUl6sIa_tsmskL5WLKiigp2AMsIIxinOJNf39qCmacViRGXIOY" alt="Google" />
                            </button>
                            <button
                                onClick={() => window.location.href = 'https://apple.com'}
                                className="w-12 h-12 border border-black p-1 rounded flex items-center justify-center cursor-pointer"
                                aria-label="Sign up with Apple"
                            >
                                <img src="https://static.vecteezy.com/system/resources/previews/019/136/322/non_2x/amazon-logo-amazon-icon-free-free-vector.jpg" alt="Apple" />
                            </button>
                            <button
                                onClick={() => window.location.href = 'https://microsoft.com'}
                                className="w-12 h-12 border border-black p-1 rounded flex items-center justify-center cursor-pointer"
                                aria-label="Sign up with Microsoft"
                            >
                                <img src="https://static-00.iconduck.com/assets.00/microsoft-icon-1024x1024-5w26drb6.png" alt="Microsoft" />
                            </button>
                        </span>
                    </div>
                    <div className="w-full flex justify-between text-lg p-6 mt-8 border-t">
                        <NavLink to="/signup" className="hover:underline">Sign in</NavLink>
                        <NavLink to="/sso-options" className="hover:underline">View all SSO options</NavLink>
                    </div>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row mx-auto mt-32 w-11/12 lg:w-4/5 p-4 gap-12'>
                <div className='w-full lg:w-2/3'>
                    <div>
                        <h1 className='text-2xl lg:text-3xl'>Purpose Statement</h1>
                        <p><span className='font-semibold'>Cybrary Career Paths</span> are comprehensive training programs designed to prepare you for the most in-demand roles in the cybersecurity workforce. Each path follows a Learn, Practice, Prove model and includes different activity types aligned to key topics within the path’s security domain. As you progress through the path, your progress will be measured in real time using Experience Points (XP) that serve as a comprehensive capability score for each topic. Upon completing all of the requirements for a path, you will be rewarded with a shareable digital badge via Credly.</p>
                    </div>
                    <div className='flex flex-wrap gap-20 mt-16'>
                        <div className='flex flex-col items-center gap-2'>
                            <h1 className='text-2xl lg:text-3xl'>24H 20M</h1>
                            <span className='text-gray-400 font-semibold'>TIME</span>
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <h1 className='text-2xl lg:text-3xl'>Beginner</h1>
                            <span className='text-gray-400 font-semibold'>DIFFICULTY</span>
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <h1 className='text-2xl lg:text-3xl'>0</h1>
                            <span className='text-gray-400 font-semibold'>CEU/CPE</span>
                        </div>
                    </div>
                    <div className='mt-32 '>
                        <h1 className='font-semibold text-2xl lg:text-3xl'>Overview</h1>
                        <div className='mt-12'>
                            <h1 className='text-3xl lg:text-5xl'>What Are Some SOC Analyst Roles and Responsibilities?</h1>
                            <p className='mt-4 text-gray-400'>Most SOC analysts plan, monitor, and implement security measures to protect an organization’s computer systems, networks, and data. To do this, SOC analysts must constantly educate themselves on new intelligence, including adversaries' practices and tactics, to anticipate and prevent security threats and breaches.</p>
                            <p className='mt-8 text-gray-400 font-semibold'>In addition to the above, as an SOC analyst, you will likely be required to:</p>
                            <ul className='text-gray-400 mt-2'>
                                <li className='flex gap-4'><TbPointFilled className='text-white mt-1' /> Provide threat analysis and security logs for security devices.</li>
                                <li className='flex gap-4'><TbPointFilled className='text-white mt-1' /> Analyze and respond to hardware and software weaknesses and vulnerabilities.</li>
                                <li className='flex gap-4'><TbPointFilled className='text-white mt-1' /> Investigate, document, and report security problems and emerging security trends.</li>
                                <li className='flex gap-4'><TbPointFilled className='text-white mt-1' /> Coordinate with other analysts and departments regarding system and network security when needed.</li>
                                <li className='flex gap-4'><TbPointFilled className='text-white mt-1' /> Create, implement, and maintain security protocols and controls, including the protection of digital files and data against unauthorized access.</li>
                                <li className='flex gap-4'><TbPointFilled className='text-white mt-1' /> Maintain data and monitor security access.</li>
                                <li className='flex gap-4'><TbPointFilled className='text-white mt-1' /> Perform risk analyses, vulnerability testing, and security assessments.</li>
                                <li className='flex gap-4'><TbPointFilled className='text-white mt-1' /> Work with network users to solve any systems issues.</li>
                                <li className='flex gap-4'><TbPointFilled className='text-white mt-1' /> Perform security audits, internal and external.</li>
                                <li className='flex gap-4'><TbPointFilled className='text-white mt-1' /> Manage network intrusion detection systems.</li>
                                <li className='flex gap-4'><TbPointFilled className='text-white mt-1' /> Analyze all security breaches to determine the root causes.</li>
                                <li className='flex gap-4'><TbPointFilled className='text-white mt-1' /> Make recommendations of countermeasures and install approved tools.</li>
                                <li className='flex gap-4'><TbPointFilled className='text-white mt-1' /> Coordinate security plans with relevant vendors.</li>
                            </ul>
                            <h1 className='text-3xl lg:text-5xl mt-12'>
                                What Are Some SOC Analyst Job Requirements?
                            </h1>
                            <p className='mt-4 text-gray-400'>Each organization that seeks to hires an SOC analyst will have unique experience requirements for candidates. However, most organizations require that SOC analyst candidates have earned a bachelor’s degree in computer science or another relevant field, as well as at least one year of IT work experience.</p>
                            <p className='mt-8 text-gray-400 font-semibold'>Some of the other common requirements for SOC analyst positions are:</p>
                            <ul className='text-gray-400 mt-2'>
                                <li className='flex gap-4'><TbPointFilled className='text-white mt-1' /> Knowledge of all security policies.</li>
                                <li className='flex gap-4'><TbPointFilled className='text-white mt-1' /> Training or educating network users about security protocols.</li>
                                <li className='flex gap-4'><TbPointFilled className='text-white mt-1' /> Administration of network firewalls.</li>
                                <li className='flex gap-4'><TbPointFilled className='text-white mt-1' /> Troubleshooting and problem-solving skills.</li>
                                <li className='flex gap-4'><TbPointFilled className='text-white mt-1' /> Identification of security areas that can be improved, and the implementation of solutions to those areas.</li>
                                <li className='flex gap-4'><TbPointFilled className='text-white mt-1' /> Dependability and flexibility, being on-call or available outside of regular work hours.</li>
                                <p className='mt-8 text-gray-400 font-semibold'>Some of the common technical knowledge requirements include:</p>
                                <li className='flex gap-4'><TbPointFilled className='text-white mt-1' /> Security Information and Event Management (SIEM).</li>
                                <li className='flex gap-4'><TbPointFilled className='text-white mt-1' /> SQL</li>
                                <li className='flex gap-4'><TbPointFilled className='text-white mt-1' /> TCP/IP, computer networking, routing and switching.</li>
                                <li className='flex gap-4'><TbPointFilled className='text-white mt-1' /> C, C++, C#, Java or PHP programming languages.</li>
                                <li className='flex gap-4'><TbPointFilled className='text-white mt-1' /> IDS/IPS, penetration and vulnerability testing.</li>
                                <li className='flex gap-4'><TbPointFilled className='text-white mt-1' /> Firewall and intrusion detection/prevention protocols.</li>
                                <li className='flex gap-4'><TbPointFilled className='text-white mt-1' /> Windows, UNIX and Linux operating systems.</li>
                                <li className='flex gap-4'><TbPointFilled className='text-white mt-1' /> Network protocols and packet analysis tools.</li>
                                <li className='flex gap-4'><TbPointFilled className='text-white mt-1' /> Anti-virus and anti-malware.</li>
                                <li className='flex gap-4'><TbPointFilled className='text-white mt-1' /> Various certifications including Security+, CEH, GIAC, CASP, CISSP.</li>
                            </ul>
                            <h1 className='text-3xl lg:text-5xl mt-12'>
                                What is a Typical SOC Analyst Job Description?
                            </h1>
                            <p className='text-gray-300 mt-4'>As a security operations center analyst, your primary duty is to ensure that the organization’s digital assets are secure and protected from unauthorized access. You must protect both the online and on-premise infrastructures, monitor metrics and data to identify suspicious activity, and identify and mitigate risks before adversaries breach your system. Some adversaries will still breach your system, and a SOC analyst fights the frontline battle.</p>
                            <p className='text-gray-300 mt-4'>Additionally, SOC analysts must generate reports for managers and IT administrators to evaluate the effectiveness of current security protocols. Then, you will make any necessary modifications to establish a more secure network. In some roles, your duties will include creating training programs and curriculum to educate the organization’s employees and network users on proper security policies and procedures.</p>
                            <p className='text-gray-300 mt-4'>Candidates for the SOC analyst position must have analytical skills, communication skills, and the desire to stay up-to-date on the latest technology. In this role, you may need to sift through huge amounts of information to identify threats or other security issues. Threats and attacks can happen at any time, day or night, so you may need to work nights and weekends.</p>
                            <h1 className='text-5xl mt-12 '>
                                A Day in the Life of an SOC Analyst
                            </h1>
                            <p className='text-gray-300 mt-4'>No two days are alike in a security operations center – adversaries don’t follow a specific schedule, and how much time you have to spend on an individual incident can depend on many factors. You may be able to circumvent an attack quickly in some cases, while others might take much more time, attention, and work.</p>
                            <p className='text-gray-300 mt-4'>On a daily basis, you will need to ascertain the weaknesses of hardware, software, and network infrastructure and establish ways to protect it. But the nature of information security means each day may bring different situations, tasks, and challenges, so you’ll rarely feel bored. When a threat or an attack arises, your team will likely work nonstop to expose the attack, shut down access to your systems, resolve the issue, work to prevent the same type of attack from happening in the future, and document and communicate appropriate information to management or clients.</p>
                            <p className='text-gray-300 mt-4'>SOC analysts may need to work odd hours, outside of the normal workday, to perform the necessary incident response to protect the digital assets of the organization.</p>
                        </div>
                    </div>
                </div>
                <div className='w-full lg:w-1/3'>
                    <div className='mt-16 lg:mt-72 text-xl lg:text-2xl'>
                        <h1>What Will I Learn?</h1>
                    </div>
                    <div className='p-8 flex flex-col gap-4 border bg-slate-900 rounded-xl mt-8'>
                        <GoShieldCheck className='text-3xl lg:text-5xl' />
                        <div>
                            <h2 className='font-semibold text-xl lg:text-2xl'>Defensive Security</h2>
                            <p className='text-gray-400'>Focused on trying to find the bad guys. Topics such as threat intelligence, threat hunting, network monitoring, incident response. Defensive security is a reactive measure taken once a vulnerability is found through prevention, detection, and response.</p>
                        </div>
                    </div>
                    <div className='p-8 flex flex-col gap-4 border bg-slate-900 rounded-xl mt-8'>
                        <GrDatabase className='text-3xl lg:text-5xl' />
                        <div>
                            <h2 className='font-semibold text-xl lg:text-2xl'>Engineering and Operations</h2>
                            <p className='text-gray-400'>Focused on building and operating information systems.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-24 w-full text-white py-12 px-4 md:px-32 xl:px-68 flex flex-col items-center justify-center ">
                {/* Heading Section */}
                <div className='flex items-center mb-12 gap-6'>
                    <h2 className="h-6 w-6 bg-gradient-to-r from-red-500 to-fuchsia-500 rounded-[50%]">
                    </h2>
                    <p className="text-center text-3xl text-gray-400">
                        Course Outine
                    </p>
                </div>

                {/* Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:w-5/6 mx-auto gap-6 px-5 md:px-10">
                    {salesforceCourses.map((course) => (
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
            </div>
            <div className="w-full mt-20">
                <TestimonialsCarousel />
            </div>
        </div>
    )
}

export default SocAnalyst;