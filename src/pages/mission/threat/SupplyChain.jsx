import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { togglePopup } from '../../../store/signupPopupSlice';
import SignupPopup from '../../../loginSystem/SignupPopup';
import { FiShare2 } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { RxBorderDashed } from "react-icons/rx";
import SignupComponent from '../../../components/home/SignupComponent';
// import { GrDatabase } from "react-icons/gr";
// import { TbPointFilled } from "react-icons/tb";

function SupplyChain() {
    const salesforceCourses = [
        {
            img: 'https://isodoc.co.uk/wp-content/uploads/2023/06/training-procedure.jpg',
            title: 'Salesforce Fundamentals',
            overview: 'Get started with the basics of Salesforce, including navigation, data management, and reporting.',
            duration: '4 hours',
            format: 'On-demand video',
            link: '/course/compromise-software-supply-chain'
        },
        {
            img: 'https://cdn.shopaccino.com/igmguru/products/salesforce-training-igmguru_1400382585_l.jpg?v=500',
            title: 'Advanced Salesforce Administration',
            overview: 'Dive deeper into advanced admin topics, including custom objects, complex workflows, and advanced data management.',
            duration: '6 hours',
            format: 'Interactive lab sessions',
            link: '/course/unsecured-credentials-and-domain-accounts'
        },
        {
            img: 'https://dianapps.com/blog/wp-content/uploads/2022/12/Reasons-Why-Every-Company-Needs-a-Dedicated-Salesforce-Developer.png',
            title: 'Salesforce Developer Essentials',
            overview: 'Learn the core development skills needed to build and customize Salesforce applications using Apex and Visualforce.',
            duration: '8 hours',
            format: 'Hands-on projects and coding exercises',
            link: '/course/disable-windows-event-log-and-timestomp'
        },
        {
            img: 'https://www.apexhours.com/wp-content/uploads/2021/06/Factors-Influencing-Salesforce-Org-Strategy.png',
            title: 'Salesforce Integration Strategies',
            overview: 'Understand various integration methods and tools for connecting Salesforce with other systems, including APIs and middleware.',
            duration: '5 hours',
            format: 'Case studies and practical exercises',
            link: '/course/lateral-movement-windows-remote-management'
        },
        {
            img: 'https://360degreecloud.com/wp-content/uploads/2024/03/Salesforce-Data-Migration-Why-Its-Time-to-Make-the-Move-1024x535.jpg',
            title: 'Data Migration with Salesforce',
            overview: 'Master data import, export, and transformation techniques to ensure smooth data migration into Salesforce.',
            duration: '4 hours',
            format: 'Live demonstrations and guided practice',
            link: '/course/application-layer-protocol-for-c2-and-exfil-over-c2'
        },
    ]
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
        <div className='mt-44 md:w-full'>
            <div className='flex flex-col md:flex-row items-center justify-center md:w-full  text-white py-8 px-12 md:px-44 gap-12'>
                <div className='w-full md:w-1/2 md:mb-0 text-center md:text-left flex flex-col'>
                    <h2 className='text-3xl sm:text-4xl md:mb-12 md:text-6xl'>
                        Weak Link in the Supply Chain
                    </h2>
                    <p className='text-gray-400'>
                        Threat actors known as Advanced Persistent Threats (APTs) conduct highly sophisticated attacks sponsored by nation-states. They maintain a committment to stealth and often use custom malware. This campaign emulates a supply chain attack by APT29 that is similar to the SolarWinds compromise and it has the end goal of stealing sensitive information.
                    </p>
                    <div className='flex items-center text-xl text-gray-500 mt-4 gap-2'>
                        <FiShare2 className='text-2xl text-gray-400' />
                        <button onClick={sharePopup} className='text-gray-500'>Share</button>
                    </div>
                    <div className='flex items-center mt-4'>
                        <button
                            onClick={() => dispatch(togglePopup())}
                            className="w-1/4 py-3 bg-gradient-to-r from-red-500 via-pink-500 to-fuchsia-500 rounded-2xl text-white font-semibold hover:shadow-[0px_0px_10px_purple,0px_0px_10px_#FF4D6D] duration-500">
                            Enroll Now
                        </button>
                        <NavLink to='/business'>
                            <button className='px-6 py-4 rounded-xl bg-black flex items-center gap-4'>
                                Need to train your team? Learn more <FaArrowRight />
                            </button>
                        </NavLink>
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
                    <h2 className="text-3xl md:text-2xl mb-6">Create a free account to start exploring the platform.</h2>
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
            <div className="mt-20 text-white py-12 px-4 md:px-32 xl:px-72 flex flex-col items-center">
                <h2 className="text-3xl md:text-5xl text-center mb-8">
                    Campaign Outline
                </h2>
                <p className='text-center w-2/3 mb-12 text-gray-400'>Threat Actor Campaigns are comprised of multiple MITRE ATT&CK aligned courses. Click on a course below to learn more.</p>
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
                    {salesforceCourses.map((course, index) => (
                        <div className='w-full '>
                            <div className='flex flex-col md:flex-row items-center bg-gray-900 p-8 w-full gap-12'>
                                <div key={index} className="bg-gray-900 md:w-1/3 rounded-sm  transition duration-500 hover:rounded-2xl shadow-lg hover:shadow-xl border border-gray-600 ">
                                    <img src={course.img} alt="" className='h-[200px] w-full object-cover transition duration-700 rounded-sm hover:rounded-tl-2xl hover:rounded-tr-2xl' />
                                    <div className='p-6'>
                                        <h3 className="text-2xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-pink-600 to-fuchsia-600">{course.title}</h3>
                                        <p className="text-gray-400 mb-4">{course.overview}</p>
                                    </div>
                                </div>
                                <div className='md:w-2/3' >
                                    <h1 className='text-3xl'>Overview</h1>
                                    <p className='mt-4 text-gray-300'>Threat actors use the technique Compromise Software Supply Chain by altering software that they know their victims will use. They include a backdoor that will give them access to their victim's network once the software is installed. You will detect this technique in a virtual lab and master how to mitigate this threat.</p>
                                    <NavLink to={course.link}>
                                        <button className='mt-8 w-full py-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl text-white font-semibold hover:shadow-[0px_0px_10px_purple,0px_0px_10px_#FF4D6D] duration-500 '>Start Learning</button>
                                    </NavLink>
                                </div>
                            </div>
                            <div className="flex items-center flex-col justify-between gap-1 p-8">
                                <RxBorderDashed className="text-3xl transform rotate-90" />
                                <RxBorderDashed className="text-3xl transform rotate-90" />
                            </div>

                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full mt-24 flex justify-center">
                <SignupComponent />
            </div>
        </div >
    )
}

export default SupplyChain;