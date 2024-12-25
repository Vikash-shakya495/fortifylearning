import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { togglePopup } from '../store/signupPopupSlice';

import cybraryLogo from '../assets/cybraryLogo.png';

import { FaRegQuestionCircle } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { NavLink } from 'react-router-dom';

function SignupPopup() {
    const dispatch = useDispatch();
    const showPopup = useSelector((state) => state.signupPopup.showPopup);

    // State to handle password input and validation
    const [password, setPassword] = useState('');
    const [showRequirements, setShowRequirements] = useState(false);

    // Validation functions for password requirements
    const hasNumber = /[0-9]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const isLengthValid = password.length >= 8;

    // Toggles password requirements visibility and arrow rotation
    const toggleRequirements = () => {
        setShowRequirements(!showRequirements);
    };

    // Update password state
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    return (
        <div>
            {/* Popup Form */}
            {showPopup && (
                <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50 overflow-y-auto">
                    <div className="bg-gray-900 p-8 rounded-lg shadow-xl w-full max-w-3xl h-full md:h-[760px] overflow-y-auto flex flex-col md:flex-row gap-8 md:gap-16">
                        <div className='w-full md:w-1/2 flex flex-col items-center md:items-start'>
                            <img className='w-[150px] md:w-[300px] h-auto mb-4 md:mb-8' src={cybraryLogo} alt="Cybrary Logo" />
                            <h2 className="text-2xl md:text-4xl text-white mb-4 md:mb-8">Register</h2>
                            <p className="text-gray-400 mb-4 md:mb-6 text-center md:text-left text-lg">
                                Join over <span className="font-semibold text-white">3 million</span>  Salesforce Professionals Advancing Their Careers.
                            </p>

                            {/* Social Media Signup */}
                            <p className="text-gray-400 mb-4 text-center md:text-left text-lg">or sign up with</p>
                            <div className="flex gap-2 md:gap-4 mb-4 justify-center md:justify-start">
                                <button className="bg-white p-2 rounded-lg">
                                    <img className='h-6 md:h-8' src="https://lh3.googleusercontent.com/qnaJEbFIpvsWJm2KrRI_GIvz1yZdXntgEsCZxy-1pVZi244bCk1RFwdk0ZBRmmvdHiUl6sIa_tsmskL5WLKiigp2AMsIIxinOJNf39qCmacViRGXIOY" alt="Google" />
                                </button>
                                <button className="bg-white p-2 rounded-lg">
                                    <img className='h-6 md:h-8' src="https://static.vecteezy.com/system/resources/previews/019/136/322/non_2x/amazon-logo-amazon-icon-free-free-vector.jpg" alt="Apple" />
                                </button>
                                <button className="bg-white p-2 rounded-lg">
                                    <img className='h-6 md:h-8' src="https://static-00.iconduck.com/assets.00/microsoft-icon-1024x1024-5w26drb6.png" alt="Microsoft" />
                                </button>
                                <button className="bg-white p-2 rounded-lg">
                                    <img className='h-6 md:h-8' src="https://banner2.cleanpng.com/20180712/jrc/aaw6si4mt.webp" alt="Facebook" />
                                </button>
                                <button className="bg-white p-2 rounded-lg">
                                    <img className='h-6 md:h-8' src="https://i.pinimg.com/736x/b2/f8/28/b2f828513f21444829a619ce563d4d4e.jpg" alt="LinkedIn" />
                                </button>
                            </div>
                        </div>

                        <div className='w-full md:w-1/2 flex flex-col'>
                            {/* Email and Password Fields */}
                            <form>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-lg font-medium text-white mb-2">Email Address*</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="name@email.com"
                                        className="w-full px-4 py-2 border border-gray-600 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="password" className="block text-lg font-medium text-white mb-2">Password*</label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        value={password}
                                        onChange={handlePasswordChange}
                                        className="w-full px-4 py-2 border border-gray-600 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                                    />
                                </div>

                                {/* Password Requirements */}
                                <div className="mb-4 flex items-center text-white text-lg gap-2 cursor-pointer" onClick={toggleRequirements}>
                                    <FaRegQuestionCircle /> See Password Requirements
                                    {showRequirements ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
                                </div>

                                {showRequirements && (
                                    <div className="mb-6 text-gray-400">
                                        <ul>
                                            <li className={`flex items-center gap-2 ${isLengthValid ? 'text-green-500' : 'text-red-500'}`}>
                                                <div className={`w-3 h-3 border rounded-full ${isLengthValid ? 'bg-green-500' : 'bg-red-500'}`} />
                                                At least 8 characters
                                            </li>
                                            <li className={`flex items-center gap-2 ${hasNumber ? 'text-green-500' : 'text-red-500'}`}>
                                                <div className={`w-3 h-3 border rounded-full ${hasNumber ? 'bg-green-500' : 'bg-red-500'}`} />
                                                At least 1 number
                                            </li>
                                            <li className={`flex items-center gap-2 ${hasLowerCase ? 'text-green-500' : 'text-red-500'}`}>
                                                <div className={`w-3 h-3 border rounded-full ${hasLowerCase ? 'bg-green-500' : 'bg-red-500'}`} />
                                                At least 1 lowercase letter
                                            </li>
                                            <li className={`flex items-center gap-2 ${hasUpperCase ? 'text-green-500' : 'text-red-500'}`}>
                                                <div className={`w-3 h-3 border rounded-full ${hasUpperCase ? 'bg-green-500' : 'bg-red-500'}`} />
                                                At least 1 uppercase letter
                                            </li>
                                        </ul>
                                    </div>
                                )}

                                <div className="mb-4 flex items-center">
                                    <input type="checkbox" id="updates" className="mr-2" />
                                    <label htmlFor="updates" className="text-sm text-gray-400">
                                        Iwant to receive new courses, feature updates, news, and discounts from FortifLearning.
                                    </label>
                                </div>

                                <div className="mb-6 flex items-center">
                                    <input type="checkbox" id="terms" className="mr-2" required />
                                    <label htmlFor="terms" className="text-sm text-gray-400">
                                        By creating an account, you agree to the <a href="#" className="text-pink-500">Terms of Service</a> and <a href="#" className="text-pink-500">Privacy Policy</a>.
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full px-6 py-3 text-lg rounded-full bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold hover:shadow-lg hover:shadow-pink-500/50 transition-shadow duration-300"
                                >
                                    Create Free Account
                                </button>
                            </form>

                            <p className="mt-4 text-center text-white font-semibold">
                                Already have an account? <NavLink href="/login" className="text-pink-500">Sign in</NavLink>
                            </p>
                            <p className="text-gray-400 text-center mt-8 text-xs md:text-sm">
                                This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                            </p>
                            <button
                                className="text-white mt-4 text-center font-bold underline"
                                onClick={() => dispatch(togglePopup())}
                            >
                                Close Popup
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SignupPopup;
