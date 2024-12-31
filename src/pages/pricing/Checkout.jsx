import React from 'react';

const Checkout = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 ">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4 text-black">Upgrade To Cybrary Insider Pro</h1>
        <p className="text-center te xt-sm text-gray-600 mb-6">
          Already have an account? <a href="#" className="text-blue-500 font-medium">Sign In</a>
        </p>
        <hr className="mb-6" />
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
            <div className="mt-2 text-sm text-gray-600">
              <p>See Password Requirements:</p>
              <ul className="list-disc list-inside">
                <li>At least 8 character(s)</li>
                <li>At least 1 number(s)</li>
                <li>At least 1 lowercase letter(s)</li>
                <li>At least 1 uppercase letter(s)</li>
              </ul>
            </div>
          </div>
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="text-blue-500 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-700">
                I want to receive new courses, feature updates, news, and discounts from Cybrary
              </span>
            </label>
          </div>
          <div className="mb-6">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                required
                className="text-blue-500 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-700">
                By creating an account, you agree to the{' '}
                <a href="#" className="text-blue-500 font-medium">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="text-blue-500 font-medium">
                  Privacy Policy
                </a>
              </span>
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
