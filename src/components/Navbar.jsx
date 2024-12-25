import React, { useState } from 'react';
// HamburgerMenu Component
import HamburgerMenu from './navbar/HamburgerMenu';
import dropdownData from './navbar/DropDownData';
import CustomDropDown from './navbar/CustomDropDown';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { togglePopup } from '../store/signupPopupSlice';
import SignupPopup from '../loginSystem/SignupPopup';
import fortifyLearningLogo from '../assets/fortifyLearning.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const dispatch = useDispatch();

  return (
    <>
      <nav className="flex justify-between items-center px-6 py-6 w-full fixed bg-black z-20 top-0">
        {/* Left Side: Logo */}
        <div className="flex items-center gap-10">
          <img
            className="h-12 md:h-16 w-auto"
            src={fortifyLearningLogo}
            alt="Logo"
          />
        </div>

        {/* Navigation Links: Desktop View */}
        <div className="hidden w-2/4 md:flex justify-center items-center gap-8">
          <ul className="flex w-full p-2">
            <CustomDropDown />
          </ul>
        </div>

        {/* Right Side: Buttons */}
        <div className="hidden md:flex space-x-4">
          <NavLink to='/demo-request'>
            <button className="border border-pink-500 text-white-500 rounded-xl font-bold px-7 py-3 hover:shadow-lg hover:shadow-pink-500/50 transition-shadow duration-300">
              Free Teams Demo
            </button>
          </NavLink>

          <button className="px-6 py-3 rounded-xl bg-black text-white hover:shadow-[4px_-4px_10px_rgba(128,0,128,0.5),-4px_4px_10px_rgba(255,105,180,0.5)] transition-shadow duration-300"
            onClick={() => dispatch(togglePopup())}
          >
            Sign up
          </button>

          <button className="text-white"><NavLink to='/login'>Login</NavLink></button>

          <SignupPopup />
        </div>

        {/* Hamburger Menu: Mobile View */}
        <div className="md:hidden flex items-center" onClick={toggleMenu}>
          <button className="text-white text-2xl">
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </nav>

      {/* Hamburger Menu Component */}
      <HamburgerMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </>
  );
};

export default Navbar;
