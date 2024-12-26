// App.js
import React from "react";
import '../App.css';
import Marquee from 'react-fast-marquee';
import { useDispatch } from 'react-redux';

// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
import LearnPractProve from '../components/home/LearnPractProve';
import AdvanceYourCareer from '../components/home/AdvanceYourCareer';
import TestimonialsCarousel from "../components/home/TestimonialsCarousel";
import SignupComponent from "../components/home/SignupComponent";
import { togglePopup } from '../store/signupPopupSlice';
import SignupPopup from '../loginSystem/SignupPopup';

import careerpath from '../assets/careerpath.png';
import salesforceProgress from '../assets/salesforceProgressImage.png';
import salesforceTeam from '../assets/salesforceTeamImage.webp';

import { PiRocket } from "react-icons/pi";
import { PiLaptop } from "react-icons/pi";
import { RiShieldStarLine } from "react-icons/ri";
import { HiOutlinePuzzle } from "react-icons/hi";
import { FaRegStar } from "react-icons/fa6";
import { VscTypeHierarchySuper } from "react-icons/vsc";
import { NavLink } from "react-router-dom";


function Home() {
  const dispatch = useDispatch();
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center overflow-x-hidden">
      {/* <Navbar /> */}
      <header className="mt-28 flex flex-col lg:flex-row px-6 md:px-48">
        <div className="mt-8 xl:mt-40 flex flex-col items-center md:items-start">
          <h1 className="text-4xl md:text-6xl text-center md:text-left">
            <span className="text-transparent text-[50px] md:text-[70px] bg-clip-text bg-gradient-to-r from-orange-600 via-pink-600 to-fuchsia-600">
              Salesforce Courses
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-700 via-pink-700 to-fuchsia-600"> & Training </span>
            that Elevate Business Performance
          </h1>
          <p className="mt-4 text-gray-400 max-w-full md:max-w-2xl text-center md:text-left">
            Fortify Learning’s structured, hands-on Salesforce courses and training empower professionals to
            optimize their organization's Salesforce environment. Through curated Skill and Career Paths,
            practical online Salesforce training, and industry-aligned Certification Preparation courses, we
            provide the best tools to enhance your business performance.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center  sm:justify-start items-center ">
            <NavLink to='/business'>
              <button className="bg-gradient-to-r from-orange-500 to-pink-500 px-8 py-3 rounded-md text-white hover:shadow-lg hover:shadow-pink-500/50 transition-shadow duration-300">
                Fortify Learning for Business
              </button>
            </NavLink>

            <span className="mt-4 sm:mt-0 sm:ml-4 text-white-400 hover:text-white hover:cursor-pointer"
              onClick={() => dispatch(togglePopup())}>
              Start Learning for Free &gt;
            </span>
          </div>
        </div>

        <div className="flex lg:w-4/5 justify-center py-0 mt-8 md:mt-28">
          <img
            src={careerpath} // Replace with actual image URL
            alt="Laptop with cybersecurity courses"
            className="w-full max-w-[800px] h-auto"
          />
        </div>
      </header>
      <div className="text-center flex flex-col items-center mt-10 lg:mt-20 px-4">
        <h3 className="text-sm sm:text-base md:text-lg text-gray-500">
          Trusted by leading organizations worldwide
        </h3>

        <div className="relative mt-8 md:mt-12 h-[100px] md:h-[150px] w-full max-w-6xl">
          <Marquee className="h-full w-auto mx-auto overflow-hidden" direction="left" speed={100} delay={5}>
            <div className="mx-8 md:mx-[60px]">
              <img className="h-[30px] md:h-[50px]" src="https://clinicaltrialsbsva.com/wp-content/uploads/2017/07/cropped-logo-1.png" alt="Logo 1" />
            </div>
            <div className="mx-8 md:mx-[60px]">
              <img className="h-[30px] md:h-[50px]" src="https://www.nicepng.com/png/full/395-3959971_verizon-logo-white-beige.png" alt="Logo 2" />
            </div>
            <div className="mx-8 md:mx-[60px]">
              <img className="h-[30px] md:h-[50px]" src="https://white.logodownload.org/wp-content/uploads/2020/11/google-white-logo-1.png" alt="Logo 3" />
            </div>
            <div className="mx-8 md:mx-[60px]">
              <img className="h-[30px] md:h-[50px]" src="https://biosciences.ecoexploratorio.org/wp-content/uploads/2023/08/AMGEN-logo-white-021fu.png" alt="Logo 4" />
            </div>
            <div className="mx-8 md:mx-[60px]">
              <img className="h-[30px] md:h-[50px]" src="https://images.squarespace-cdn.com/content/v1/56b38e2aa3360ce530d55c24/2bf6f206-fc54-4067-9116-6a28f62a8dd1/Booz_Allen_logo_white-R-HiRes.png" alt="Logo 5" />
            </div>
            <div className="mx-8 md:mx-[60px]">
              <img className="h-[30px] md:h-[50px]" src="https://companieslogo.com/img/orig/GD.D-18841bdb.png?t=1720244492" alt="Logo 6" />
            </div>
          </Marquee>
          <div className="absolute top-0 left-0 w-1/4 md:w-1/2 h-full bg-gradient-to-r from-black/50 to-transparent"></div>
          <div className="absolute top-0 right-0 w-1/4 md:w-1/2 h-full bg-gradient-to-l from-black/50 to-transparent"></div>
        </div>
      </div>


      {/* learn practice prove */}
      <div className="flex flex-col justify-center items-center">
        <h1 className="mt-16 p-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-700 to-fuchsia-600 text-3xl sm:text-4xl md:text-5xl lg:text-[78px]">
          Learn. Practice. Prove.
        </h1>
        <LearnPractProve />
      </div>

      {/* why salesforce training */}


      <div className="mt-28 w-full sm:w-4/5 px-4">
        <div className="flex justify-between flex-wrap items-center">
          <h1 className="text-[32px] sm:text-[42px] font-semibold leading-tight">
            Why Choose FortifyLearning for Salesforce Training?
          </h1>
          <button className="bg-gradient-to-r from-orange-500 to-pink-500 px-8 py-3 rounded-md text-white hover:shadow-lg hover:shadow-pink-500/50 transition-shadow duration-300 mt-4 sm:mt-0"
            onClick={() => dispatch(togglePopup())}>
            Get Started
          </button>
        </div>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center relative">
            <div className="w-20 h-20 relative flex justify-center items-center rounded-3xl mb-4">
              <img className='absolute top-0 left-0 z-0' src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64369e04d29c9d9b21942d66_home-icon-background.webp" alt="Rocket" />
              <PiRocket className="text-5xl z-10" />
            </div>
            <h2 className="font-bold text-2xl">Launch Your Career</h2>
            <p className="text-gray-400 text-[17px] max-w-[90%] mx-auto mt-4">
              Start your Salesforce training journey with guided Career Paths that teach foundational concepts related to real, on-the-job responsibilities.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 relative flex justify-center items-center rounded-3xl mb-4">
              <img className='absolute top-0 left-0 z-2' src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64369e04d29c9d9b21942d66_home-icon-background.webp" alt="Laptop" />
              <PiLaptop className="text-5xl z-10" />
            </div>
            <h2 className="font-bold text-2xl">Onboard Team Members</h2>
            <p className="text-gray-400 text-[17px] max-w-[90%] mx-auto mt-4">
              Our scalable, repeatable onboarding courses and programs ensure every new employee has the same foundation of knowledge and skills.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 relative flex justify-center items-center rounded-3xl mb-4">
              <img className='absolute top-0 left-0 z-2' src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64369e04d29c9d9b21942d66_home-icon-background.webp" alt="Shield" />
              <RiShieldStarLine className="text-5xl z-10" />
            </div>
            <h2 className="font-bold text-2xl">Earn Certifications</h2>
            <p className="text-gray-400 text-[17px] max-w-[90%] mx-auto mt-4">
              Ace the exam with Certification Prep Paths developed by industry-leading instructors. Gain insider tips and build confidence with our practice exams.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 relative flex justify-center items-center rounded-3xl mb-4">
              <img className='absolute top-0 left-0 z-2' src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64369e04d29c9d9b21942d66_home-icon-background.webp" alt="Puzzle" />
              <HiOutlinePuzzle className="text-5xl z-10" />
            </div>
            <h2 className="font-bold text-2xl">Upskill and Practice</h2>
            <p className="text-gray-400 text-[17px] max-w-[90%] mx-auto mt-4">
              Master hands-on skills and familiarize yourself with the latest Salesforce features and updates, preparing you for real-world scenarios.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 relative flex justify-center items-center rounded-3xl mb-4">
              <img className='absolute top-0 left-0 z-2' src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64369e04d29c9d9b21942d66_home-icon-background.webp" alt="Star" />
              <FaRegStar className="text-5xl z-10" />
            </div>
            <h2 className="font-bold text-2xl">Retain Top Talent</h2>
            <p className="text-gray-400 text-[17px] max-w-[90%] mx-auto mt-4">
              Create new opportunities for your most committed personnel and watch your retention rates soar.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 relative flex justify-center items-center rounded-3xl mb-4">
              <img className='absolute top-0 left-0 z-2' src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64369e04d29c9d9b21942d66_home-icon-background.webp" alt="Hierarchy" />
              <VscTypeHierarchySuper className="text-5xl z-10" />
            </div>
            <h2 className="font-bold text-2xl">Drive Business Success</h2>
            <p className="text-gray-400 text-[17px] max-w-[90%] mx-auto mt-4">
              Use real-time data to discover how closely correlated employee training is to business success and cost savings.
            </p>
          </div>
          {/* Repeat for other items */}
        </div>
      </div>


      {/* Salesforce progress */}
      <div className="w-full sm:w-3/4 p-4 sm:p-10 mt-24 bg-gradient-to-r from-orange-500 via-red-400 to-fuchsia-500 relative rounded-2xl">
        {/* Absolute divs for the decorative elements */}
        <div className="hidden sm:block absolute top-[-45px] left-[-30px] w-20 h-20">
          <div className="absolute rounded-xl w-[4px] h-[30px] bg-gradient-to-b from-orange-400 via-red-500 to-fuchsia-600 transform rotate-110 top-0 left-8"></div>
          <div className="absolute rounded-xl w-[4px] h-[30px] bg-gradient-to-b from-orange-400 via-red-500 to-fuchsia-600 transform -rotate-45 top-2 left-2"></div>
          <div className="absolute rounded-xl w-[4px] h-[30px] bg-gradient-to-b from-orange-400 via-red-500 to-fuchsia-600 transform -rotate-90 top-8 left-0"></div>
        </div>

        {/* Content section */}
        <div>
          <span className="px-4 py-2 bg-white text-orange-600 rounded-3xl font-mono">New Release</span>
          <h3 className="font-bold text-xl sm:text-3xl mt-4">Baseline & Benchmark</h3>
          <p className="mt-2 text-sm sm:text-base">Nuanced metrics provide administrators with dynamic team data</p>
        </div>

        {/* Image section, hidden on smaller screens */}
        <div className="hidden sm:block absolute -top-3 right-4">
          <img src={salesforceProgress} alt="" className="h-[201px] rounded-tl-lg rounded-tr-lg" />
        </div>
      </div>


      <div className="w-full sm:w-3/4 mt-20 bg-gray-900 flex sm:flex-row flex-col justify-between items-center rounded-3xl p-2">
        <div className="w-full sm:w-2/4 p-12 ">
          <h1 className="text-4xl">FortifyLearning for Teams</h1>
          <p className="mt-4 text-lg text-gray-400">
            Upskill your team with FortifyLearning’s suite of Salesforce training, learning activities, and
            management tools. Benefit from hands-on Salesforce Labs, role-aligned Career Paths, and
            personalized learning plans. Request a demo and discover how FortifyLearning customizes our
            extensive library of training to meet your team’s unique needs.
          </p>
          <NavLink to='/demo-request'>
            <button className="mt-10 bg-gradient-to-r from-orange-400 via-red-500 to-fuchsia-600 text-white px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-pink-500/50 transition-shadow duration-300">
              Schedule a demo
            </button>
          </NavLink>
        </div>

        {/* Image section */}
        <div className="w-full sm:w-1/2 mt-6 sm:mt-0">
          <img src={salesforceTeam} alt="" className="rounded-3xl w-full h-[400px] sm:h-[600px]" />
        </div>
      </div>

      <div className="mt-40 w-3/4">
        <AdvanceYourCareer />
      </div>
      <div className="w-full mt-20">
        <TestimonialsCarousel />
      </div>
      <div className="w-full mt-24 flex justify-center">
        <SignupComponent />
      </div>
    </div>
  );
}

export default Home;
