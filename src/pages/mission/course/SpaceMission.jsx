// course/cve-series-couchdb-rce-cve-2022-24706
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { togglePopup } from "../../../store/signupPopupSlice";
import SignupPopup from "../../../loginSystem/SignupPopup";
import { FiShare2 } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { TbPointFilled } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";

import FortifyLearningLogo from "../../../assets/fortifyLearning.png";

function SpaceMission() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  // popUp share button
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
    <div className="mt-44 md:w-full">
      <div className="flex flex-col md:flex-row items-center justify-center w-full text-white py-8 px-6 sm:px-12 lg:px-36 gap-8 lg:gap-8">
        {/* Left Section */}
        <div className="w-full md:w-1/2 text-center md:text-left flex flex-col">
          <button className="w-1/4 py-1 bg-gradient-to-r from-red-500 via-pink-500 to-fuchsia-500 rounded-2xl text-white font-semibold mx-auto md:mx-0">
            FREE
          </button>
          <h2 className="text-2xl sm:text-3xl md:mb-6 lg:mb-12 md:text-4xl lg:text-5xl mt-4">
            Challenge: Space Mission
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            In this challenge, you will take on a cryptography challenge by
            decrypting intercepted encrypted messages. Malicious attackers use
            cryptography to their advantage for attacks and remaining
            undetected. The goal is to show how attackers can effortlessly embed
            data within messages to hide their activity.
          </p>
          <div className="flex items-center text-sm sm:text-base text-gray-500 mt-4 gap-2 justify-center md:justify-start">
            <FiShare2 className="text-lg sm:text-2xl text-gray-400" />
            <button onClick={sharePopup} className="text-gray-500">
              Share
            </button>
          </div>
          <div className="flex flex-col md:flex-row items-center mt-4 gap-4 justify-center md:justify-start">
            <button
              onClick={() => dispatch(togglePopup())}
              className="w-full md:w-1/4 py-3 bg-gradient-to-r from-red-500 via-pink-500 to-fuchsia-500 rounded-2xl text-white font-semibold hover:shadow-[0px_0px_10px_purple,0px_0px_10px_#FF4D6D] duration-500"
            >
              Enroll Now
            </button>
            <NavLink to="/business">
              <button className="px-4 md:px-6 py-3 md:py-4 rounded-xl bg-black flex items-center gap-4 text-sm sm:text-base">
                Need to train your team? Learn more <FaArrowRight />
              </button>
            </NavLink>
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
                onClick={() => (window.location.href = "https://google.com")}
                className="w-12 h-12 border border-black p-1 rounded flex items-center justify-center"
                aria-label="Sign up with Google"
              >
                <img
                  src="https://lh3.googleusercontent.com/qnaJEbFIpvsWJm2KrRI_GIvz1yZdXntgEsCZxy-1pVZi244bCk1RFwdk0ZBRmmvdHiUl6sIa_tsmskL5WLKiigp2AMsIIxinOJNf39qCmacViRGXIOY"
                  alt="Google"
                />
              </button>
              <button
                onClick={() => (window.location.href = "https://apple.com")}
                className="w-12 h-12 border border-black p-1 rounded flex items-center justify-center"
                aria-label="Sign up with Apple"
              >
                <img
                  src="https://static.vecteezy.com/system/resources/previews/019/136/322/non_2x/amazon-logo-amazon-icon-free-free-vector.jpg"
                  alt="Apple"
                />
              </button>
              <button
                onClick={() => (window.location.href = "https://microsoft.com")}
                className="w-12 h-12 border border-black p-1 rounded flex items-center justify-center"
                aria-label="Sign up with Microsoft"
              >
                <img
                  src="https://static-00.iconduck.com/assets.00/microsoft-icon-1024x1024-5w26drb6.png"
                  alt="Microsoft"
                />
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

      <div className="flex flex-col-reverse lg:flex-row mx-auto mt-32 w-11/12 lg:w-4/5 p-4 gap-12">
        <div className="w-full lg:w-2/3">
          <div className="flex flex-wrap gap-20 mt-16">
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-2xl lg:text-3xl">1H 0M</h1>
              <span className="text-gray-400 font-semibold">TIME</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-2xl lg:text-3xl">Intermediate</h1>
              <span className="text-gray-400 font-semibold">DIFFICULTY</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-2xl lg:text-3xl">1</h1>
              <span className="text-gray-400 font-semibold">CEU/CPE</span>
            </div>
          </div>
          <div className="bg-black text-white p-4 mt-20">
            <h2 className="text-3xl font-bold mb-4">Course Content</h2>
            {/* Header Section */}
            <div
              className="flex flex-col cursor-pointer border-b border-gray-600"
              onClick={toggleContent}
            >
              <div className="flex justify-between items-center mt-4 mb-4">
                <p className="text-lg">Decode</p>
                {/* Arrow */}
                <span
                  className={`transform transition-transform duration-300 ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <IoIosArrowDown />
                </span>
              </div>
              <ul
                className={`mt-4 overflow-hidden transition-all duration-300 ${
                  isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <li className="pl-4 mb-4 flex text-gray-400 justify-between">
                  <span>The Art of Cryptography</span> <span>0M</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="p-4 mt-12">
            <h1 className="text-4xl">Course Description</h1>
            <div className="mt-10">
              <h2 className="text-3xl">Blue Team Analyst POV: Cryptography</h2>
              <p className="text-gray-400 mt-4">
                In this challenge, you have intercepted an encrypted message but
                have yet to learn what encryption technique. Your task is to
                decipher the message to uncover its secrets.
                <p className="text-gray-400 mt-4">
                  To solve this challenge, you will need to use your knowledge
                  of cryptography and problem-solving skills. You may need to
                  try different approaches and techniques to determine the key
                  and decrypt the message.
                </p>
                <p className="text-gray-400 mt-4">
                  {" "}
                  ![CySeeker
                  Peculiar](//images.ctfassets.net/kvf8rpi09wgk/qbEzmd4efRzpA1lBEW8vZ/CySeeker_Peculiar.png)
                </p>
              </p>
            </div>
            <div className="mt-6">
              <h2 className="text-3xl">Who is this for:</h2>
              <p className="text-gray-400 mt-4">
                Early career to mid practitioners. This challenge may be
                difficult for individuals new to cybersecurity, but the
                difficulty rating on this challenge is relatively low. We
                encourage using any internet resources and community/colleague
                assistance in completing the challenge.
              </p>
            </div>
            <div className="mt-10">
              <h2 className="text-3xl">Are write-ups permitted?</h2>
              <p className="text-gray-400 mt-4">
                Yes, write-ups are permitted; please do not post answers
                directly. All write-ups should include a link to Cybrary and the
                Cybrary Course.
              </p>
            </div>
            <div className="mt-10">
              <h2 className="text-3xl">
                What resources are available to help solve this challenge?:
              </h2>
              <p className="text-gray-400 mt-4">
                Online search, community, colleagues, or fellow practitioners.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/3">
          <div className="mt-16 lg:mt-24 text-xl lg:text-2xl">
            <h1>Instruced by</h1>
          </div>
          <div className="p-8 flex items-center gap-4 border bg-slate-900 rounded-xl mt-12">
            <LiaChalkboardTeacherSolid className="w-1/3 text-3xl lg:text-6xl" />
            <div className="w-2/3 text-center">
              <h2 className="text-lg lg:text-xl bg-gradient-to-r from-red-600 via-pink-500 to-fuchsia-700 rounded-xl p-1">
                Instructor
              </h2>
              <p className="text-xl mt-4">Raymond Evans</p>
            </div>
          </div>
          <div className="flex flex-col mt-12">
            <h1 className="text-2xl font-semibold">Provider</h1>
            <img src={FortifyLearningLogo} className="w-[200px] " alt="" />
          </div>
          <div className="mt-12">
            <h1 className="text-2xl font-semibold">
              Certificate of Completion
            </h1>
            <img
              className="mt-6"
              src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/646f4845f85ad0cd7e7ed522_image%2022-p-500.webp"
              alt=""
            />
            <p className="text-center text-gray-400 mt-8">
              Complete this entire course to earn a CVE Series: CouchDB RCE
              (CVE-2022-24706) Certificate of Completion
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpaceMission;