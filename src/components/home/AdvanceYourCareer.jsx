// src/components/AdvanceYourCareer.js
import React from 'react';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { SlGraph } from "react-icons/sl";
import { BsBug } from "react-icons/bs";
import { MdLiveTv } from "react-icons/md";
import { IoBagCheck } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { togglePopup } from '../../store/signupPopupSlice';  // Import the action
import SignupPopup from '../../loginSystem/SignupPopup';

function AdvanceYourCareer() {
  const dispatch = useDispatch();

  return (
    <div className='flex flex-col items-center sm:p-2 md:p-6'>
      <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-[46px] w-full max-w-[840px] mx-auto text-center'>
        Stand out from the crowd and <br />
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 via-pink-700 to-pink-700'>
          advance your
        </span> career with FortifyLearning
      </h1>


      {/* Updated flex container for items with mobile responsiveness */}
      <div className='flex mt-12 gap-2 flex-wrap justify-between'>
        {[
          { icon: <IoShieldCheckmarkOutline />, text: "Certification Prep", route: "/certification-prep" },
          { icon: <SlGraph />, text: "Career Paths", route: "/career-path" },
          { icon: <BsBug />, text: "Skill Paths", route: "/skill-paths" },
          { icon: <MdLiveTv />, text: "MITRA ATT&CK", route: "/mitre-attack" },
          { icon: <IoBagCheck />, text: "Threat Actor Campaigns", route: "/threat-actor-campaigns" },
          { icon: <FaRegStar />, text: "CVE series", route: "/cve-series" }
        ].map((item, index) => (
          <NavLink to={item.route} key={index} className="w-full sm:w-48 md:w-1/4">
            <button
              className='w-full px-2 py-3 bg-slate-900 text-white flex justify-between items-center gap-4 rounded-xl border border-gray-700 hover:border-gray-400 transition-all duration-300'
            >
              <div className='flex items-center gap-4'>
                {item.icon}
                <span>{item.text}</span>
              </div>
              <MdOutlineKeyboardArrowRight className='text-3xl' />
            </button>
          </NavLink>
        ))}
      </div>

      {/* Button Section */}
      <div className='mt-8 flex gap-6 sm:gap-12 items-center flex-wrap'>
        <button
          className='px-6 py-3 text-lg rounded-xl bg-gradient-to-r from-red-400 via-pink-600 to-fuchsia-600 hover:shadow-lg hover:shadow-pink-500/50 transition-shadow duration-300'
          onClick={() => dispatch(togglePopup())} // Toggle popup visibility
        >
          Start Learning for Free
        </button>
        <SignupPopup />
        <NavLink to="/business">
          <button className='flex items-center'>
            Train your team <MdOutlineKeyboardArrowRight className='mt-1' />
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default AdvanceYourCareer;
