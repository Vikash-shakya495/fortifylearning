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
import { GrDatabase } from "react-icons/gr";
import { TbPointFilled } from "react-icons/tb";
import TestimonialsCarousel from '../../components/home/TestimonialsCarousel';
// import CyberVista from "../../assets/CyberVista.jpeg"
// import InfrastructureSecurity from "../../assets/InfrastructureSecurity.png"

function CyberSecurityEngineer() {

    const salesforceCourses = [
        {
            img: 'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c206d1f6c9a99bb24c83_image.png',
            title: 'Infrastructure Security',
            overview: 'From a threat landscape overview to applying defense-in-depth at the perimeter, network, endpoint..',
            type: "COURSE",
            duration: '4H:26M',
            link: 'course/infrastructure-security',
            ceus: "4 CEUS"
        },
        {
            img: 'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/646a76f9c744ca78a2ef22ce_ISC2_CISSP_Practice_Test_Certified_Information_Systems_Security_Professional.jpeg',
            title: 'ISC2 CISSP Pratice Test: Certificated Information Systems Security Professional (2021)',
            overview: 'There is a growing need for information security leaders who possess the depth of expertise...',
            type: "TEST",
            duration: '3H:0M',
            link: '/practice-lab/secure-network-access',
            ceus: ""
        }
    ];


    const dispatch = useDispatch();
    const url = `${location.origin}${location.pathname}`;

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
        <div>
            <div className="mt-44 flex flex-col items-center md:flex-row justify-center md:full  text-white py-8 px-12 md:px-16 lg:px-44 gap-12">
                <div className='w-full md:w-1/2 md:mb-0 text-center md:text-left flex flex-col'>
                    <h2 className='text-3xl sm:text-4xl md:mb-8 md:text-5xl'>
                        Security Engineer Career Path
                    </h2>
                    <p className='md:mb-8'><span className=' text-1xl text-gray-300 '>Security Engineers are security-minded architects and builders. They are responsible for planning and implementing security controls throughout an IT environment. This career path is designed to provide you with foundational knowledge and key skills required to succeed as an entry-level Security Engineer. In this path, you will learn Security Engineering Fundamentals, Infrastructure Security, Application Security, and Data Security. <br /><br /> Completing this career path and the associated Assessments will prepare you for pursuing a career as a Security Engineer and further specializing in advanced skills like Cloud Security and Cybersecurity Architecture.</span></p>
                    <div className='flex items-center justify-between mt-8 flex-wrap md:mt-0'>
                        <button
                            onClick={() => dispatch(togglePopup())}
                            className="w-2/4 md:w-2/5 py-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl text-white font-semibold hover:shadow-[0px_0px_10px_purple,0px_0px_10px_#FF4D6D] duration-500">
                            Create a Free Account
                        </button>
                        <button className='w-2/4 md:w-100 px-6 py-4 rounded-xl bg-black border border-gray-500'>
                            Need to train your team? Learn more
                        </button>
                    </div>
                    <div className='flex items-center text-xl text-gray-500 mt-4 gap-2'>
                        <FiShare2 className='text-3xl text-gray-300' />
                        <button onClick={sharePopup} className='text-gray-500'>Share</button>
                    </div>
                    {showPopup && (
                        <div className='fixed top-0 left-32 h-full bg-black bg-opacity-50 flex items-center justify-center'>
                            <div className='bg-gray-900 p-8 flex flex-col gap-8 rounded-lg'>
                                <h3 className='text-3xl flex items-center justify-between'>
                                    <span>Share</span>
                                    <button onClick={sharePopup} className='text-white'>
                                        <RxCross2 />
                                    </button>
                                </h3>
                                <div className='flex gap-4'>
                                    <button className='border p-3 rounded-full'><FaFacebookSquare className='text-3xl text-white' /></button>
                                    <button className='border p-3 rounded-full'><FaSquareTwitter className='text-3xl text-white' /></button>
                                    <button className='border p-3 rounded-full'><BsLinkedin className='text-3xl text-white' /></button>
                                    <button className='border p-3 rounded-full'><MdOutlineMarkEmailRead className='text-3xl text-white' /></button>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <input
                                        type='text'
                                        readOnly
                                        value={url}
                                        className='bg-gray-900 border border-gray-500 px-4 py-2 text-white rounded w-2/3 mt-4'
                                    />
                                    <button
                                        onClick={copyToClipboard}
                                        className='mt-4 bg-purple-600 py-2 px-2  w-1/3 rounded-lg text-white hover:bg-purple-700'>
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
                        <p className='mt-4'><span className='font-semibold'>Cybrary Career Paths</span> are comprehensive training programs designed to prepare you for the most in-demand roles in the cybersecurity workforce. Each path follows a Learn, Practice, Prove model and includes different activity types aligned to key topics within the path’s security domain. As you progress through the path, your progress will be measured in real time using Experience Points (XP) that serve as a comprehensive capability score for each topic. Upon completing all of the requirements for a path, you will be rewarded with a shareable digital badge via Credly.</p>
                    </div>
                    <div className='flex flex-wrap justify-between mt-16'>
                        <div className='flex flex-col items-center gap-2'>
                            <h1 className='text-2xl lg:text-3xl'>25H 0M</h1>
                            <span className='text-gray-400 font-semibold'>TIME</span>
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <h1 className='text-2xl lg:text-3xl'>Advanced</h1>
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
                            <p className='mt-4 text-gray-400'>Security Engineers are security-minded architects and builders. They are responsible for planning and implementing security controls throughout an IT environment. This career path is designed to provide you with foundational knowledge and key skills required to succeed as an entry-level Security Engineer. Upon completing the career path, you will earn a Credly digital badge that will demonstrate to employers that you’re ready for the job.</p>
                            <p className='mt-4 text-gray-400'>Over the course of 20 courses and hands-on virtual labs, you will learn Security Engineering Fundamentals, Infrastructure Security, Application Security, and Data Security.</p>
                            <p className='mt-8 text-gray-400 font-semibold'>Completing this career path and the associated Assessments will prepare you for pursuing a career as a Security Engineer and further specializing in advanced skills like Cloud Security and Cybersecurity Architecture.</p>
                            <ul className='text-gray-400 mt-2'>
                                <li className='flex gap-4 mt-2'><TbPointFilled className='text-white mt-1' /> Learn, Practice, Prove - Develop and refine new skills across a complete curriculum composed of Courses, Labs, Challenges, and Assessments.</li>
                                <li className='flex gap-4 mt-2'><TbPointFilled className='text-white mt-1' /> Get Hands-On - Learn by doing with live operating systems and real security tools in our on-demand lab environment.</li>
                                <li className='flex gap-4 mt-2'><TbPointFilled className='text-white mt-1' />Measure Your Progress - Track your skills development from lesson to lesson using the Cybrary Skills Tracker.</li>
                                <li className='flex gap-4 mt-2'><TbPointFilled className='text-white mt-1 text-2xl' /> Share Your Achievements - Show the world you're prepared for the job with milestone badges from Cybrary and a digital credential from Credly for completing the entire path.</li>
                                <li className='flex gap-4 mt-2'><TbPointFilled className='text-white mt-1 text-1xl' />Connect with the Community - Have questions? Connect with a community of peers and experts in our Forums and Discord Community.</li>
                            </ul>
                            <h1 className='text-4xl lg:text-4xl mt-12'>
                                Who is this for?
                            </h1>
                            <p className='mt-4 text-gray-400'>This career path is designed for learners with prior experience in cybersecurity, who wish to translate that experience into building secure IT ecosystems. This includes current mid-career IT and security practitioners looking to transition into a Security Engineer role. Experienced security engineering practitioners will also benefit from reviewing core concepts and testing their skills in this path's Challenge and Assessment modules.</p>

                            <h1 className='text-4xl mt-12 '>
                                Topics
                            </h1>
                            <ul className='text-gray-400 mt-4'>
                                <li className='flex gap-4'><TbPointFilled className='text-white mt-1 text-3xl' />Security Engineering Fundamentals - Learn the foundational theory and core functions of Security Engineering. This topic will cover Security Engineering and Cyber Risk, Security Engineering Operations, DevSecOps, Zero-Trust Architecture, and Threat Modeling.</li>
                                <li className='flex gap-4'><TbPointFilled className='text-white mt-1 text-3xl' />Infrastructure Security - Infrastructure Security encompasses security controls implemented at the network and host level. This topic will cover the basics of infrastructure security, as well as SOAR, Email DLP, Next-Gen Firewalls, and Virtualization Security.</li>
                                <li className='flex gap-4'><TbPointFilled className='text-white mt-1 text-3xl' />Application Security - Application Security encompasses security controls implemented at the application level. This topic will cover the basics of application security, as well as static and dynamic code analysis, secure coding best practices, API security, and vulnerability prioritization.</li>
                                <li className='flex gap-4'><TbPointFilled className='text-white mt-1 text-3xl' />Data Security - Data Security encompasses security controls implemented at the data level. This topic will cover data security basics, data masking and obfuscation, database security, data loss prevention, data classification and access, secure data storage and transmission, and file integrity monitoring.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='w-full lg:w-1/3'>
                    <div className='mt-16 lg:mt-72 text-xl lg:text-2xl'>
                        <h1>What Will I Learn?</h1>
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
            <div className="mt-28 text-white py-12 px-4 md:px-32 xl:px-68 flex flex-col">
                <div className='flex'>
                    <div className='mt-3 mr-4'>
                        <img src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/6436be260c08aa16c3b0a986_tab-active.webp" alt="" className='w-5 h-5' />
                    </div>

                    <h2 className="text-3xl md:text-4xl mb-8">

                        Course Outline
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:w-5/6 gap-6 px-5 md:px-10">
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
                                            <span className="py-1 bg-black rounded-xl px-3">{course.ceus}</span>
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
            <div className='mt-12'>
                <TestimonialsCarousel />
            </div>
        </div>
    );
}

export default CyberSecurityEngineer;
