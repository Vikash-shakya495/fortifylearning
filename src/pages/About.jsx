
import React, { useState } from 'react';
import { FaLaptop } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { PiUsersThree } from "react-icons/pi";
import { FaRegFlag } from "react-icons/fa6";
import { AiOutlineAim } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { togglePopup } from '../store/signupPopupSlice';
import SignupPopup from '../loginSystem/SignupPopup';
import { FiShare2 } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import SignupComponent from '../components/home/SignupComponent';

const About = () => {
  const boardMembers = [
    {
      id: 1,
      name: 'Jim Curry',
      role: 'Co-Founder, BuildGroup',
      image: 'https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64f9ae159bf59508004541b1_jim_curry.webp', // Replace with actual image URLs
    },
    {
      id: 2,
      name: 'Kevin Mandia',
      role: 'CEO, Mandiant',
      image: 'https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64f9adfbab96feb3ee4c61f1_kevin_mandia.webp', // Replace with actual image URLs
    },
    {
      id: 3,
      name: 'Ryan Kruizenga',
      role: 'General Partner, Arthur Ventures',
      image: 'https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64f9ae20ab2e2823899e9881_ryan_k.webp', // Replace with actual image URLs
    },
    {
      id: 4,
      name: 'Ron Gula',
      role: 'President & Co-Founder, Gula Tech Adventures',
      image: 'https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64f9aded7b6f7c9f95afb83a_ron_gula-p-500.webp', // Replace with actual image URLs
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  // popUp share button
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

    <div className="mt-40 bg-black items-center justify-center text-white">
      <div className="flex flex-col  md:flex-row items-center justify-center w-full text-white py-8 px-6 sm:px-12 lg:px-36 gap-8 lg:gap-8">
        {/* Left Section */}
        <div className="w-full md:w-1/2 text-center md:text-left flex flex-col">
          <h2 className="text-2xl sm:text-3xl md:mb-6 lg:mb-4 md:text-4xl lg:text-5xl mt-4">
            Meet the Team Behind Cybrary
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Cybrary is a growing community where people, companies and training come together to give everyone the ability to collaborate in an open source way that is revolutionizing the cyber security educational experience.
          </p>
          <div className="flex flex-col md:flex-row items-center mt-4 gap-4 justify-center md:justify-start">
            <button
              onClick={() => dispatch(togglePopup())}
              className="w-full md:w-2/4 py-3 bg-gradient-to-r from-red-500 via-pink-500 to-fuchsia-500 rounded-2xl text-white font-semibold hover:shadow-[0px_0px_10px_purple,0px_0px_10px_#FF4D6D] duration-500"
            >Start Learning for free
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
        <div className="bg-white text-black p-6 sm:p-8 rounded-3xl shadow-lg w-full md:w-1/2 h-auto max-w-lg mx-auto">
          <h2 className="text-2xl md:text-3xl mb-4 sm:mb-6">
            Create a free account to start exploring the platform.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 w-full items-center border border-gray-600 px-3 py-2 mb-6 rounded-3xl">
            <input
              type="email"
              placeholder="name@email.com"
              className="w-full p-2 text-sm sm:text-base placeholder-gray-400 focus:outline-none"
            />
            <button
              onClick={() => dispatch(togglePopup())}
              className="w-1/2 sm:w-auto py-2 sm:py-2 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl text-white font-semibold hover:shadow-[0px_0px_10px_purple,0px_0px_10px_#FF4D6D] duration-500"
            >
              Create a Free Account
            </button>
          </div>
          <SignupPopup />
          <div className="flex flex-col sm:flex-row justify-around items-center mt-6 gap-4">
            <span className="text-gray-600">or sign up with</span>
            <div className="flex gap-4">
              <button
                onClick={() => window.location.href = 'https://google.com'}
                className="w-12 h-12 border border-black p-1 rounded flex items-center justify-center"
                aria-label="Sign up with Google"
              >
                <img src="https://lh3.googleusercontent.com/qnaJEbFIpvsWJm2KrRI_GIvz1yZdXntgEsCZxy-1pVZi244bCk1RFwdk0ZBRmmvdHiUl6sIa_tsmskL5WLKiigp2AMsIIxinOJNf39qCmacViRGXIOY" alt="Google" />
              </button>
              <button
                onClick={() => window.location.href = 'https://apple.com'}
                className="w-12 h-12 border border-black p-1 rounded flex items-center justify-center"
                aria-label="Sign up with Apple"
              >
                <img src="https://static.vecteezy.com/system/resources/previews/019/136/322/non_2x/amazon-logo-amazon-icon-free-free-vector.jpg" alt="Apple" />
              </button>
              <button
                onClick={() => window.location.href = 'https://microsoft.com'}
                className="w-12 h-12 border border-black p-1 rounded flex items-center justify-center"
                aria-label="Sign up with Microsoft"
              >
                <img src="https://static-00.iconduck.com/assets.00/microsoft-icon-1024x1024-5w26drb6.png" alt="Microsoft" />
              </button>
            </div>
          </div>
          <div className="w-full flex flex-col sm:flex-row justify-between text-lg p-6 mt-8 border-t gap-4">
            <NavLink to="/signup" className="hover:underline">
              Sign in
            </NavLink>
            <NavLink to="/sso-options" className="hover:underline">
              View all SSO options
            </NavLink>
          </div>
        </div>
      </div>


      <div class="bg-black text-white py-10 mt-32">
        <div class="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

          <div className='border-r border-gray-600'>
            <p class="text-4xl text-orange-400">2.5M+</p>
            <p class="mt-2 text-sm uppercase text-gray-400">Registered Users</p>
          </div>

          <div className='border-r border-gray-600'>
            <p class="text-4xl text-pink-700">96%</p>
            <p class="mt-2 text-sm uppercase text-gray-400">Of Fortune 1000 Use Cybrary</p>
          </div>

          <div className='border-r border-gray-600'>
            <p class="text-4xl text-purple-400">1000+</p>
            <p class="mt-2 text-sm uppercase text-gray-400">Expert Contributors</p>
          </div>

          <div>
            <p class="text-4xl text-blue-700">500M+</p>
            <p class="mt-2 text-sm uppercase text-gray-400">Learning Minutes Delivered</p>
          </div>
        </div>
      </div>
      <div className="mt-40 flex items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white px-6 py-32">
        <div className="md:w-4/5 grid md:grid-cols-2 gap-20 items-center">
          {/* Left Section */}
          <div>
            <h1 className="text-5xl mb-4 leading-snug">
              Making the industry <br /> more accessible
            </h1>

            <ul className="space-y-4">
              <li className='flex items-center'>
                <p className="items-center flex  text-gray-400 gap-4 mb-6">
                  <FaLaptop size={52} className='p-2' />Cybrary is a platform for learning about cybersecurity and IT. It offers online courses and tools that allow people to learn from anywhere at any time.
                </p>
              </li>
              <li className=" flex items-center">

                <p className=" items-center flex text-gray-400 gap-4">
                  <AiOutlineGlobal size={52} className='p-2' />Cybrary has received industry recognition since its 2015 founding, often being named as an innovator and pioneer in cyber and IT development.
                </p>
              </li>
              <li className="flex items-center">

                <p className=" items-center flex text-gray-400 gap-4">
                  <PiUsersThree size={52} className='p-2' />Since January 2015, Cybrary has grown its user base to over 2 million and has 96% of Fortune 1000 companies learning on their platform.
                </p>
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="flex justify-center md:justify-end">
            <div className="relative rounded-xl overflow-hidden shadow-lg bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 p-[3px]">
              <img
                src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/647100e8a93d52282e16eb98_Frame%2096288-p-800.webp"
                alt="Team Working"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>


      </div>
      <div className="bg-black md:w-5/6 mx-auto text-white flex flex-col md:flex-row items-center p-8 md:p-16">

        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/647383dc944b04bd3bcc888e_Frame%2096289.webp" // Replace with the actual image path
            alt="Cybrary team"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 mt-8 md:mt-0 md:pl-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What we do here at Cybrary</h2>
          <div className="space-y-6">
            <p className="flex items-start">
              <span className="<AiOutlineAim />"><AiOutlineAim /></span>
              <span>
                With over 2 million users worldwide, Cybrary is an unrivaled multi-sided platform
                preparing cybersecurity and IT professionals for the next threat or step in their career.
              </span>
            </p>
            <p className="flex items-start">
              <span className="FaRegFlag"><FaRegFlag /></span>
              <span>
                Our mission is to provide our users with world-class training and career development
                materials and enable them to connect with each other, instructors, and mentors.
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className=" py-10 px-6">
        <h1 className="text-3xl md:text-4xl text-center text-white mb-10">
          Cybrary Board Group
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:w-5/6 mx-auto">
          {boardMembers.map((member) => (
            <div
              key={member.id}
              className="bg-gray-950 border border-gray-600 text-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="mt-2 text-gray-400 text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>


      <div className="w-full mt-24 flex justify-center">
        <SignupComponent />
      </div>

    </div>
  );
};


export default About;