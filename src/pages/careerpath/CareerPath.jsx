import React from 'react';
// import Navbar from '../../components/Navbar';
import SalesforceCourses from '../../components/careerPath/SalesForceCourses';
import { IoTvOutline } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa";
import { VscTypeHierarchySuper } from 'react-icons/vsc';
import { SiCodementor } from 'react-icons/si';
import { PiCertificate } from 'react-icons/pi';
import { GrGroup } from "react-icons/gr";
import TestimonialsCarousel from '../../components/home/TestimonialsCarousel';
import SignupComponent from '../../components/home/SignupComponent';
import { Outlet, Link } from 'react-router-dom';

import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { togglePopup } from '../../store/signupPopupSlice';
import SignupPopup from '../../loginSystem/SignupPopup';
// import Footer from '../../components/Footer';

function CareerPath() {
    const dispatch = useDispatch()
    return (
        <div className="bg-black text-white min-h-screen flex flex-col items-center overflow-x-hidden">
            {/* <Navbar /> */}
            <header className="mt-28 flex flex-col lg:flex-row px-6 md:px-48">
                <div className="mt-8 xl:mt-40 flex flex-col items-center md:items-start">
                    <h1 className="text-4xl md:text-6xl text-center md:text-left">
                        <span className="text-transparent text-[50px] md:text-[70px] bg-clip-text bg-gradient-to-r from-orange-600 via-pink-600 to-fuchsia-600">
                            Career Paths
                        </span>
                        <br />
                        in Salesforce
                    </h1>
                    <p className="mt-4 text-gray-400 max-w-full md:max-w-2xl text-center md:text-left">
                        Explore our role-specific Career Paths designed to help you launch your career, transition to
                        new roles, or land your dream job within the Salesforce ecosystem. Develop the knowledge and
                        skills needed to succeed in Salesforce Administration, Development, Marketing Cloud, and
                        more. What are you waiting for?
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row justify-center sm:justify-start items-center">
                        <button className="bg-gradient-to-r from-orange-500 to-pink-500 px-8 py-3 rounded-md text-white hover:shadow-lg hover:shadow-pink-500/50 transition-shadow duration-300"
                            onClick={() => dispatch(togglePopup())}>
                            Fortify Learning for Business
                        </button>
                        <span className="mt-4 sm:mt-0 sm:ml-4 text-white-400 hover:text-white hover:cursor-pointer"
                            onClick={() => dispatch(togglePopup())}>
                            Start Learning for Free &gt;
                        </span>
                    </div>
                </div>
                <div className="flex lg:w-4/5 justify-center py-0 mt-8 md:mt-16 relative">
                    {/* Skewed images container */}
                    <div className="flex flex-col gap-4 items-center md:mt-60 mt-72">
                        {/* <img src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/66967e1bd3704d004dcb2238_Mask%20group%20(1).png" alt=""
                            className='absolute top-20 left-20 z-10 block sm:hidden'
                        /> */}
                        <img
                            src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/66a0b86d11db5ba03b2498c7_1-p-500.png" // Replace with actual image URL
                            alt="Image 1"
                            className="w-full max-w-[400px] h-auto transform skew-y-[5deg] ml-60 mb- shadow-lg rounded-lg"
                            style={{ zIndex: 1, marginTop: '-160px' }}
                        />
                        <img
                            src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/66a0b87933bed93faaab7aed_22-p-500.png" // Replace with different image URL or the same for demo
                            alt="Image 2"
                            className="w-full max-w-[400px] h-auto transform skew-y-[5deg] ml-32 mb-12 shadow-lg rounded-lg"
                            style={{ zIndex: 2, marginTop: '-220px' }}
                        />
                        <img
                            src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/66a0b8827baaf7a520566635_333-p-500.png" // Replace with another image URL or the same for demo
                            alt="Image 3"
                            className="w-full max-w-[400px] h-auto transform skew-y-[5deg] shadow-lg rounded-lg"
                            style={{ zIndex: 3, marginTop: '-280px' }}
                        />
                        {/* <img src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/66967dc8fc876e89974c4bd0_Mask%20group.png" alt=""
                            className='absolute -bottom-10 z-10 -right-10 block sm:hidden'
                        /> */}
                    </div>
                </div>

            </header>
            <main className="mt-28 flex flex-col lg:flex-row gap-32 px-6 md:px-48">
                <div className="flex lg:w-4/5 justify-center py-0 mt-8 md:mt-44 relative">
                    {/* Rotated images container */}
                    <div className="flex flex-col gap-4 items-center mt-20">
                        <img
                            src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/668f8b80eb68ffa78e304c5d_career-paths-mockup-p-800.png" // Replace with actual image URL
                            alt="Image 1"
                            className="w-full max-w-[500px] h-auto transform rotate-[0deg] shadow-lg"
                        />
                    </div>
                </div>
                <div className="mt-8 xl:mt-40 flex flex-col items-center md:items-start">
                    <h1 className="text-4xl md:text-6xl text-center md:text-left">
                        Learning Tailored to Your Salesforce Needs
                    </h1>
                    <p className="mt-4 text-gray-400 max-w-full md:max-w-2xl text-center md:text-left">
                        FortifyLearning Career Paths are comprehensive training programs designed to prepare you for
                        the most in-demand roles in Salesforce. Each path follows our Learn, Practice, Prove model
                        and includes various activities aligned with key topics within the Salesforce domain.
                    </p>
                    <p className="mt-4 text-gray-400 max-w-full md:max-w-2xl text-center md:text-left">
                        As you progress through the path, your achievements will be tracked in real-time using
                        Experience Points (XP), providing a detailed capability score for each topic. Upon completion,
                        you will be awarded a shareable digital badge via Credly to showcase your expertise.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row justify-center sm:justify-start items-center">
                        <button className="bg-gradient-to-r from-orange-500 to-pink-500 px-8 py-3 rounded-md text-white hover:shadow-lg hover:shadow-pink-500/50 transition-shadow duration-300"
                            onClick={() => dispatch(togglePopup())}>
                            Start learning for free
                        </button>
                    </div>
                </div>


            </main>
            <div>
                <SalesforceCourses />
            </div>
            <div className="mt-28 w-full sm:w-4/5 px-4">
                <div className="flex justify-between flex-col flex-wrap items-center">
                    <h2 className="text-3xl md:text-4xl text-center mb-8">
                        All the <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-pink-600 to-fuchsia-600'>Resources</span> You Need to Succeed
                    </h2>
                    <p className='text-center w-2/3 mb-12 text-gray-400'> Upgrade to SkillAdvance Pro or SkillAdvance for Teams to gain access to our comprehensive
                        resources and support, designed to enhance your Salesforce skills and career growth.</p>
                    <NavLink to='/upgrade'>
                        <button className='bg-gradient-to-r from-orange-500 to-pink-500 px-8 py-3 rounded-md text-white hover:shadow-lg hover:shadow-pink-500/50 transition-shadow duration-300'>upgrade for full access</button>
                    </NavLink>
                </div>

                <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    <div className="flex flex-col items-center text-center relative">
                        <div className="w-20 h-20 relative flex justify-center items-center rounded-3xl mb-4">
                            <img className='absolute top-0 left-0 z-0' src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64369e04d29c9d9b21942d66_home-icon-background.webp" alt="Rocket" />
                            <IoTvOutline className="text-5xl z-10" />
                        </div>
                        <h2 className="font-bold text-2xl">Expertly Curated Paths</h2>
                        <p className="text-gray-400 text-[17px] max-w-[90%] mx-auto mt-4">
                            Our Career Paths are thoughtfully designed to keep you motivated, on track, and achieving your
                            Salesforce goals.
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <div className="w-20 h-20 relative flex justify-center items-center rounded-3xl mb-4">
                            <img className='absolute top-0 left-0 z-2' src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64369e04d29c9d9b21942d66_home-icon-background.webp" alt="Laptop" />
                            <FaLaptopCode className="text-5xl z-10" />
                        </div>
                        <h2 className="font-bold text-2xl">On-Demand Learning</h2>
                        <p className="text-gray-400 text-[17px] max-w-[90%] mx-auto mt-4">
                            Learn anytime, anywhere from industry leaders and Salesforce experts.
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <div className="w-20 h-20 relative flex justify-center items-center rounded-3xl mb-4">
                            <img className='absolute top-0 left-0 z-2' src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64369e04d29c9d9b21942d66_home-icon-background.webp" alt="Shield" />
                            <VscTypeHierarchySuper className="text-5xl z-10" />
                        </div>
                        <h2 className="font-bold text-2xl">Hands-On Practice</h2>
                        <p className="text-gray-400 text-[17px] max-w-[90%] mx-auto mt-4">
                            Put your skills to the test with our interactive labs, challenges, and real-world simulations.
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <div className="w-20 h-20 relative flex justify-center items-center rounded-3xl mb-4">
                            <img className='absolute top-0 left-0 z-2' src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64369e04d29c9d9b21942d66_home-icon-background.webp" alt="Puzzle" />
                            <SiCodementor className="text-5xl z-10" />
                        </div>
                        <h2 className="font-bold text-2xl">Community of Mentors
                        </h2>
                        <p className="text-gray-400 text-[17px] max-w-[90%] mx-auto mt-4">
                            Gain access to mentors through our supportive community of Salesforce professionals.
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <div className="w-20 h-20 relative flex justify-center items-center rounded-3xl mb-4">
                            <img className='absolute top-0 left-0 z-2' src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64369e04d29c9d9b21942d66_home-icon-background.webp" alt="Star" />
                            <PiCertificate className="text-5xl z-10" />
                        </div>
                        <h2 className="font-bold text-2xl">Assess Your Skills</h2>
                        <p className="text-gray-400 text-[17px] max-w-[90%] mx-auto mt-4">
                            Our assessment tools provide detailed insights into your growth and development.
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <div className="w-20 h-20 relative flex justify-center items-center rounded-3xl mb-4">
                            <img className='absolute top-0 left-0 z-2' src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64369e04d29c9d9b21942d66_home-icon-background.webp" alt="Hierarchy" />
                            <GrGroup className="text-5xl z-10" />
                        </div>
                        <h2 className="font-bold text-2xl">Earn Credly-Certified Badges</h2>
                        <p className="text-gray-400 text-[17px] max-w-[90%] mx-auto mt-4">
                            Upon completing a Career Path, you’ll earn an industry-recognized badge to showcase your
                            expertise to current or prospective employers.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full mt-20">
                <TestimonialsCarousel />
            </div>
            <div className="w-full mt-24 flex justify-center">
                <SignupComponent />
            </div>
            <Outlet />
        </div>
    );
}

export default CareerPath;
