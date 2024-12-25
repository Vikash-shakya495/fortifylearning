import React from 'react';
import reactLogo from '../assets/logo.svg';

function Login() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-between bg-white sm:bg-transparent px-4 sm:px-8">
        {/* Logo */}
        <div className="mb-4 text-center">
          <img
            src={reactLogo}
            alt="Cybrary"
            className="w-56 mx-auto mt-5"
          />
        </div>

        {/* Sign In Heading */}
        <h2 className="text-4xl font-bold mb-6 text-center">Sign In</h2>

        {/* Outer container (only shows on mobile) */}
        <div className="max-w-full sm:max-w-4xl w-full flex flex-col sm:flex-row justify-center p-6 sm:p-8 rounded-lg bg-white shadow-md sm:bg-transparent sm:shadow-none">

          {/* Left side (Email, Remember Me, Next Button, Forgot Password) */}
          <div className="flex flex-col justify-center sm:pr-8 w-full sm:w-1/2 text-left">
            {/* Line with required fields note */}
            <p className="text-sm mb-3">
              Required fields are marked with an{' '}
              <span className="text-pink-600">*</span>
            </p>

            {/* Email input */}
            <form className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-lg font-bold ">
                  Email <span className="text-pink-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-2 w-full px-4 py-2 text-xl outline-none border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-blue-500 focus:border-2"
                />
              </div>

              {/* Remember Me Checkbox */}
              <div className="flex items-center justify-start mt-4">
                <input id="rememberMe" type="checkbox" className="h-5 w-5 text-pink-600 focus:ring-pink-500 border-gray-300 rounded" />
                <label htmlFor="rememberMe" className="ml-3 block text-lg font-bold">
                  Remember Me
                </label>
              </div>

              {/* Next Button */}
              <button
                type="submit"
                className="w-full sm:w-[28rem] bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-sm text-lg mt-4"
              >
                Next
              </button>
            </form>

            {/* Forgot Password */}
            <div className="mt-4 text-right">
              <a href="/forgot-password" className="text-pink-600 hover:text-pink-700 text-lg">
                Forgot your password?
              </a>
            </div>
          </div>

         {/* Vertical line above OR */}
         <div className="flex flex-col items-center justify-center mx-8 mb-8 md:mb-0 w-full md:w-auto">
            {/* Vertical line above OR */}
            <div className="h-full flex-grow sm:w-full md:w-0">
              <div className="border-b border-gray-300 sm:border-b-0 md:border-l sm:h-28 md:h-full"></div>
            </div>

            {/* OR text with padding on both sides */}
            <div className="text-lg font-medium text-gray-500 mb-5 px-8 mx-8 mt-5">
              OR
            </div>

            {/* Vertical line below OR */}
            <div className="h-full flex-grow">
            <div className="border-b border-gray-300 sm:border-b-0 md:border-l sm:h-28 md:h-full"></div>

            </div>
        </div>

          {/* Right side (Social Sign-In Buttons) */}
          <div className="flex flex-col justify-center w-full text-left">
            <div className="space-y-4">

              {/* Google Sign-In Button */}
              <button className="w-full sm:w-[28rem] flex items-center justify-start h-[3rem] border border-gray-300 rounded-sm shadow-sm bg-white hover:bg-gray-50 text-md mx-auto">
                <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google" className="w-6 h-6 ml-4" />
                <span className="w-full text-center">Sign in with Google</span>
              </button>

              {/* Apple Sign-In Button */}
              <button className="w-full sm:w-[28rem] flex items-center justify-start h-[3rem] border border-gray-300 rounded-sm shadow-sm bg-white hover:bg-gray-50 text-md mx-auto">
                <img src="https://img.icons8.com/color/48/000000/mac-os.png" alt="Apple" className="w-6 h-6 ml-4" />
                <span className="w-full text-center">Sign in with Apple</span>
              </button>

              {/* Microsoft Sign-In Button */}
              <button className="w-full sm:w-[28rem] flex items-center justify-center h-[3rem] border border-gray-300 rounded-sm shadow-sm bg-white hover:bg-gray-50 text-md mx-auto">
                <img src="https://img.icons8.com/color/48/000000/microsoft.png" alt="Microsoft" className="w-6 h-6 ml-4" />
                <span className="w-full text-center">Sign in with Microsoft</span>
              </button>

              {/* Facebook Sign-In Button */}
              <button className="w-full sm:w-[28rem] flex items-center justify-center h-[3rem] border border-gray-300 rounded-sm shadow-sm bg-white hover:bg-gray-50 text-md mx-auto">
                <img src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="Facebook" className="w-6 h-6 ml-4" />
                <span className="w-full text-center">Sign in with Facebook</span>
              </button>

              {/* LinkedIn Sign-In Button */}
              <button className="w-full sm:w-[28rem] flex items-center justify-center h-[3rem] border border-gray-300 rounded-sm shadow-sm bg-white hover:bg-gray-50 text-md mx-auto">
                <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn" className="w-6 h-6 ml-4" />
                <span className="w-full text-center">Sign in with LinkedIn</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom (Sign Up Link without bold, with underline) */}
        <div className="mt-5 text-center">
          <p className="text-lg">
            Don't have an account?{' '}
            <a href="/register" className="text-pink-600 hover:text-pink-700 underline">
              Sign Up »
            </a>
          </p>
        </div>

        {/* Footer (© 2024 Cybrary, Terms of Service, Privacy Policy) */}
        <div className="w-full flex flex-col items-center justify-center gap-2 mt-10 text-sm text-gray-600 mb-4">
          <div className="flex space-x-6">
            <p>© 2024 Cybrary</p>
            <a href="/terms-of-service" className="text-black hover:text-pink-700 underline">Terms of Service</a>
            <a href="/privacy-policy" className="text-black hover:text-pink-700 underline">Privacy Policy</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
