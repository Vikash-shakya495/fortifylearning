import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
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

function NetworkEngineer() {

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
        {
            img: 'https://ceptes.com/wp-content/uploads/2020/02/Top-10-lightning-features-1-1.jpg',
            title: 'Salesforce Lightning Experience',
            overview: 'Transition smoothly from Classic to Lightning Experience with a comprehensive guide on new features and functionalities.',
            duration: '3 hours',
            format: 'On-demand video tutorials',
            link: '/practice-lab/configure-network-connectivity-for-linux-on-azure'
        },
        {
            img: 'https://www.mastersoftwaresolutions.com/wp-content/uploads/2024/02/mss-founded-by-ravi-garg-website-insights-key-components-and-features-of-salesforce-service-cloud.webp',
            title: 'Salesforce Service Cloud Mastery',
            overview: 'Enhance your skills in managing customer service operations using Salesforce Service Cloud, focusing on case management and service automation.',
            duration: '6 hours',
            format: 'Interactive scenarios and quizzes',
            link: '/practice-lab/deploy-ubuntu-linux-virtual-machines-in-the-microsoft-azure'
        },
        {
            img: 'https://www.ksolves.com/wp-content/uploads/Blog-3.jpg',
            title: 'Salesforce Marketing Cloud Insights',
            overview: 'Explore advanced marketing automation and analytics capabilities within Salesforce Marketing Cloud.',
            duration: '5 hours',
            format: 'Case studies and practical exercises',
            link: '/practice-lab/can-you-use-pki-to-secure-a-network-environment-expert'
        },
        {
            img: 'https://www.techforceservices.com/wp-content/uploads/2021/03/top-5-salesforce-security-best-practices.webp',
            title: 'Salesforce Security Best Practices',
            overview: 'Learn best practices for securing your Salesforce instance, including user access management and data protection.',
            duration: '4 hours',
            format: 'On-demand video and security assessments',
            link: '/practice-lab/configure-a-network-security-group-in-a-virtual-network'
        },
        {
            img: 'https://dwlrs858nh2or.cloudfront.net/wp-content/uploads/2024/02/14195041/Salesforce-CPQ-Basics.webp',
            title: 'Salesforce CPQ Fundamentals',
            overview: 'Understand the essentials of Salesforce CPQ (Configure, Price, Quote) to streamline your sales process and quoting accuracy.',
            duration: '5 hours',
            format: 'Interactive labs and real-world scenarios',
            link: '/practice-lab/identify-non-secure-network-traffic'
        },
        {
            img: 'https://sunshineskill.com/wp-content/uploads/2024/07/analytics-cloud.jpg',
            title: 'Salesforce Analytics Cloud Training',
            overview: 'Get hands-on experience with Salesforce Analytics Cloud.',
            duration: '5 hours',
            format: 'Practical exercises and case studies',
            link: '/practice-lab/identify-non-secure-network-traffic'
        },
        {
            img: 'https://www.techforceservices.com/wp-content/uploads/2024/05/Salesforce-Community-Cloud-Crafting-Dynamic-Online-Communities.webp',
            title: 'Salesforce Community Cloud Essentials',
            overview: 'Learn to build and manage Salesforce Communities to enhance collaboration and engagement with external users.',
            duration: '5 hours',
            format: 'On-demand video and project-based learning',
            link: '/practice-lab/identify-non-secure-network-traffic'
        },
    ];


    const dispatch = useDispatch();
    const url = 'https://www.cybrary.it/career-path/network-engineer';

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
                    <h2 className='text-3xl sm:text-4xl md:mb-12 md:text-5xl'>
                        Network Engineer Collection
                    </h2>
                    <div className='flex items-center justify-between mt-8 flex-wrap md:mt-0'>
                        <button
                            onClick={() => console.log('Create account action')}
                            className="w-2/4 md:w-2/5 py-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl text-white font-semibold hover:shadow-[0px_0px_10px_purple,0px_0px_10px_#FF4D6D] duration-500">
                            Create a Free Account
                        </button>
                        <button className='w-2/4 md:w-3/5 px-6 py-4 rounded-xl bg-black border border-gray-500'>
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
                        <p><span className='font-semibold'>Cybrary Career Paths</span> are comprehensive training programs designed to prepare you for the most in-demand roles in the cybersecurity workforce. Each path follows a Learn, Practice, Prove model and includes different activity types aligned to key topics within the path’s security domain. As you progress through the path, your progress will be measured in real time using Experience Points (XP) that serve as a comprehensive capability score for each topic. Upon completing all of the requirements for a path, you will be rewarded with a shareable digital badge via Credly.</p>
                    </div>
                    <div className='flex flex-wrap justify-between mt-16'>
                        <div className='flex flex-col items-center gap-2'>
                            <h1 className='text-2xl lg:text-3xl'>23H 0M</h1>
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
                            <h1 className='text-3xl lg:text-5xl'>What Are Some Network Engineer Roles and Responsibilities?</h1>
                            <p className='mt-4 text-gray-400'>Network engineers make and maintain network systems that all employees of the organization will use. Depending on the specific organization you work for, your responsibilities can vary.</p>
                            <p className='mt-8 text-gray-400 font-semibold'>As a network engineer, you will likely be required to:</p>
                            <ul className='text-gray-400 mt-2'>
                                <li className='flex gap-4'><TbPointFilled className='text-white mt-1' /> Administer and maintain computer networks and related computer areas such as hardware, systems software, applications software, and configurations.</li>
                                <li className='flex gap-4'><TbPointFilled className='text-white mt-1' /> Protect the security of hardware, software, and data by establishing, coordinating, and implementing network security procedures.</li>
                                <li className='flex gap-4'><TbPointFilled className='text-white mt-1' /> Perform data backups and disaster recovery operations when necessary.</li>
                                <li className='flex gap-4'><TbPointFilled className='text-white mt-1' /> Order and replace defective or outdated hardware components when necessary.</li>
                                <li className='flex gap-4'><TbPointFilled className='text-white mt-1' /> Monitor system performance to determine when adjustments are necessary.</li>
                                <li className='flex gap-4'><TbPointFilled className='text-white mt-1' /> Troubleshoot any software, hardware, or other system or network issues to diagnose and resolve the problem.</li>
                                <li className='flex gap-4'><TbPointFilled className='text-white mt-1' /> Configure, maintain, and monitor email applications and virus protection programs.</li>
                                <li className='flex gap-4'><TbPointFilled className='text-white mt-1' /> Work with network users to solve any systems issues.</li>
                                <li className='flex gap-4'><TbPointFilled className='text-white mt-1' /> Coordinate access and use of computer networks.</li>
                                <li className='flex gap-4'><TbPointFilled className='text-white mt-1' /> Operate master consoles for monitoring performance of computer systems and networks.</li>
                            </ul>
                            <h1 className='text-3xl lg:text-5xl mt-12'>
                                What Are Some Network Engineer Job Requirements?
                            </h1>
                            <p className='mt-4 text-gray-400'>Many organizations would like network engineers to have a degree in a relevant field of study such as computer science, programming, or engineering, but a degree is not required for the career. Employers prefer their network engineers to have previous experience in the field, either as working with IT systems or in network administration.</p>
                            <p className='mt-8 text-gray-400 font-semibold'>Some of the other requirements for network engineer positions are:</p>
                            <ul className='text-gray-400 mt-2'>
                                <li className='flex gap-4'><TbPointFilled className='text-white mt-1' /> A solid understanding of network infrastructure and hardware.</li>
                                <li className='flex gap-4'><TbPointFilled className='text-white mt-1' /> The ability to implement, administer, maintain, and troubleshoot network infrastructure devices.</li>
                                <li className='flex gap-4'><TbPointFilled className='text-white mt-1' /> An understanding of network infrastructure protocols and application transport.</li>
                                <li className='flex gap-4'><TbPointFilled className='text-white mt-1' /> The ability to provide detailed information for software and hardware upgrades or purchases.</li>
                                <li className='flex gap-4'><TbPointFilled className='text-white mt-1' /> Excellent analytical skills that allow for finding flaws or areas for improvement in complex network systems.</li>
                                <li className='flex gap-4'><TbPointFilled className='text-white mt-1' /> Strong attention to detail and organization.</li>
                                <li className='flex gap-4'><TbPointFilled className='text-white mt-1' /> Leadership skill when the position requires the network engineer to work with a team of other engineers.</li>
                                <li className='flex gap-4'><TbPointFilled className='text-white mt-1' /> The ability to work well with a team of both upper management and subordinates.</li>
                                <li className='flex gap-4'><TbPointFilled className='text-white mt-1' /> Dependability and flexibility.</li>
                                <li className='flex gap-4'><TbPointFilled className='text-white mt-1' /> LAN and WAN experience, as well as network security experience.</li>
                                <li className='flex gap-4'><TbPointFilled className='text-white mt-1' /> Initiative to stay up-to-date on the latest technology.</li>
                                <li className='flex gap-4'><TbPointFilled className='text-white mt-1' /> An understanding of the hardware and wiring needs of the organization.</li>
                            </ul>
                            <h1 className='text-3xl lg:text-5xl mt-12'>
                                What is a Typical Network Engineer Job Description?
                            </h1>
                            <p className='text-gray-300 mt-4'>As a network engineer, you will be responsible for administering and maintaining an organization’s computer networks. The most common duties for the network engineer role include maintaining software, hardware, networks, and other related systems. Additionally, you will be responsible for protecting information, hardware, and software from threats and replacing any defective hardware components when necessary. You will also work closely with network users to identify any issues and resolve them.</p>
                            <p className='text-gray-300 mt-4'>Being a network engineer requires that you have a strong understanding of network hardware and network infrastructure. It’s also necessary to have the ability to implement, administer, maintain, and troubleshoot various network devices including firewalls, WAPs, switches, routers, and controllers. In most cases, a network engineer position also requires extensive knowledge of application transport and network infrastructure protocols.</p>
                            <p className='text-gray-300 mt-4'>Overall, as a network engineer, you need to possess the knowledge and experience that allows you to make and maintain network systems that all organization employees will use. These networks’ complexity can vary widely depending on the organization and may require that you work alongside a Chief Technology Engineer. That means that excellent communication skills are also a must.</p>
                            <h1 className='text-5xl mt-12 '>
                                A Day in the Life of a Network Engineer
                            </h1>
                            <p className='text-gray-400 mt-4'>Your typical day as a network engineer can vary depending on the organization’s culture and your industry. While some network engineers will work a regular 9-5 workday, others may be required to work evenings and weekends or be on call should any network problems arise. However, there are some daily tasks and responsibilities that are generally common to most network engineer positions. Based on those tasks, a typical day for a network engineer may include:</p>
                            <ul className='text-gray-400 mt-2'>
                                <li className='flex gap-4'><TbPointFilled className='text-white mt-1' />Review any downed devices, trouble tickets, and network monitoring tools</li>
                                <li className='flex gap-4'><TbPointFilled className='text-white mt-1' />Diagnose and resolve those network issues and continually monitor ticketing system for new trouble tickets entered throughout the day</li>
                                <li className='flex gap-4'><TbPointFilled className='text-white mt-1' />Monitor network performance tools and investigate any issues.</li>
                                <li className='flex gap-4'><TbPointFilled className='text-white mt-1' />Review and perform scheduled maintenance on network systems, as necessary.</li>
                                <li className='flex gap-4'><TbPointFilled className='text-white mt-1' />Review device configurations to ensure they are correct and up to standards.</li>
                                <li className='flex gap-4'><TbPointFilled className='text-white mt-1' />Work on any ongoing projects including writing project plans, monitoring and documenting the progress of the project, communicating with other departments and upper management regarding the project.</li>
                                <li className='flex gap-4'><TbPointFilled className='text-white mt-1' />Administrative tasks like inventory and documentation.</li>
                            </ul>
                            <p className='text-gray-300 mt-8'>While the network engineer position is not a cookie-cutter job, and daily responsibilities and tasks can be very different depending on the organization, the overall goal is to maintain network systems for users to work efficiently and productively.</p>

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
            <div className="mt-20 text-white py-12 px-4 md:px-32 xl:px-68 flex flex-col items-center">
                <h2 className="text-3xl md:text-4xl text-center mb-8">
                    Upskill at <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-pink-600 to-fuchsia-600'>Any Stage</span> of Your Career
                </h2>
                <p className='text-center w-2/3 mb-12 text-gray-400'>Explore FortifyLearning’s Career Paths designed to take you from novice to expert—and
                    anywhere in between.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {salesforceCourses.map((course, index) => (
                        <div
                            key={course.title}
                            className={`group relative rounded-lg border-gray-100 border shadow-lg bg-gray-900 overflow-hidden transition-all duration-300 hover:pb-16`}
                        >
                            <NavLink to={course.link} key={index}>
                                <img className="h-48 w-full object-cover rounded-lg" src={course.img} alt={course.title} />
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
            <div className='mt-12'>
                <TestimonialsCarousel />
            </div>
        </div>
    );
}

export default NetworkEngineer;
