import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { togglePopup } from '../../store/signupPopupSlice';
import SignupPopup from '../../loginSystem/SignupPopup';

function SignupComponent() {
    const dispatch = useDispatch();
    return (
        <div className="flex flex-col items-center md:flex-row justify-center md:w-5/6  text-white py-8 px-12 md:px-12 gap-12">
            <div className='w-full md:w-2/4 mb-8 md:mb-0 text-center md:text-left'>
                <h2 className='text-3xl sm:text-4xl md:text-5xl'>
                    Start Salesforce Training for <span className='text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 via-pink-700 to-pink-700'>Free</span> Today
                </h2>
                <p className='text-lg sm:text-xl text-gray-400 mt-4'>
                Join over 3 million professionals and 96% of Fortune 1000 companies enhancing their
                Salesforce skills and capabilities with FortifyLearning
                </p>
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
                    <NavLink to="/login" className="hover:underline">Sign in</NavLink>
                    <span className="hover:underline " onClick={() => dispatch(togglePopup())}>View all SSO options</span>
                </div>
            </div>
        </div>
    );
}

export default SignupComponent;
