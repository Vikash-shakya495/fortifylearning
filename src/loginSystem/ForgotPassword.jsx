import React from 'react';

function ForgotPassword() {
  return (
    <div className="flex  justify-center min-h-screen bg-gray-50">
      <div className="max-w-2xl w-full min-h-[500px] my-7 py-7">

        {/* Change with Salesforce Later */}
        <div className="flex justify-center">
          <img
            src="https://images.ctfassets.net/kvf8rpi09wgk/6HtXDpiYT7GMU8yp0DS4Dy/5b42c213353afb410ac8e52e7db7c77f/cybrary_logo_black.svg?w=250"
            alt="Forgot Password Illustration"
            className="h-30 max-w-80 object-none"
          />
        </div>

        <h1 className="text-6xl font-extrabold text-center text-gray-900 mb-10">Forgot Password</h1>
        <p className="text-base text-start text-black mb-6">
          Required fields are marked with an <span className="text-red-500">*</span>
        </p>
        <form>
          <label htmlFor="email" className="block text-xl font-bold text-gray-700 mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-4 border border-gray-300 text-black rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
            required
          />
          <button
            type="submit"
            className="w-full mt-6 bg-pink-600 py-4 px-4 rounded-md text-xl font-medium hover:bg-pink-600 transition"
          >
            Request
          </button>
        </form>
        <div className="mt-6 text-center">
          <a href="/login" className="text-pink-700 text-xl hover:underline">
            Back to Sign In »
          </a>
        </div>
        <div className="mt-4 text-center">
          <p className="text-2xl text-gray-900">
            Don't have an account?{" "}
            <a href="/register" className="text-pink-500 hover:underline">
              Sign Up »
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;