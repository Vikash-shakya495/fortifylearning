import React from "react";
import { NavLink } from "react-router-dom";

function Accountprofile() {
  const recentlyViewedArticles = [
    "How To Get Started! Create a Cybrary account",
    "Cybrary for Teams: New Admin Training Videos",
    "Cyber Risk Impact FAQs",
    "Cybrary for Teams: Assigning Goals",
    "Cybrary for Teams: Creating Career Paths",
  ];

  const relatedArticles = [
    "How to Get Started: How Do I Get Started in Cybersecurity?",
    "How to: Add Multiple Emails To an Account",
    "How To Get Started! Forgot Your Password?",
    "How to Get Started! Account Profile",
    "How to Get Started! Account Profile",
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col md:flex-row">
      {/* Left Sidebar */}
      <aside className="w-full md:w-2/4 bg-gray-50 border-b md:border-r border-gray-300 px-4 py-6">
        <h2 className="text-lg font-semibold mb-4 text-gray-600 mt-20">
          Articles in this section
        </h2>
        <ul className="space-y-3">
          <li>
            <NavLink
              to="/help.cybrary.it/How-To-Get-Started-Create-a-Cybrary-account"
              className="block text-gray-600 hover:bg-black hover:text-white w-full text-left"
            >
              How To Get Started! Create a Cybrary account
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/help.cybrary.it/How-to-Get-Started-Register-and-Login-to-Cybrary"
              className="block text-gray-600 hover:bg-black hover:text-white w-full text-left"
            >
              How to Get Started: Register and Login to Cybrary
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className="block text-gray-600 hover:bg-black hover:text-white w-full text-left"
            >
              How to: Add Multiple Emails To an Account
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className="block text-gray-600 hover:bg-black hover:text-white w-full text-left"
            >
              How to Get Started! Account Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className="block text-gray-600 hover:bg-black hover:text-white w-full text-left"
            >
              Adding Your Learning Schedule to Your Calendar
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className="block text-gray-600 hover:bg-black hover:text-white w-full text-left"
            >
              Canceling Your Cybrary Insider Pro Subscription
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className="block text-gray-600 hover:bg-black hover:text-white w-full text-left"
            >
              How to: Delete your Cybrary Account
            </NavLink>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <div className="flex-grow p-6">
        {/* Breadcrumb Navigation */}
        <div className="text-sm text-gray-600 mb-4">
          <NavLink to="/help-center" className="hover:underline">
            Cybrary
          </NavLink>{" "}
          &gt;{" "}
          <NavLink
            to="/help.cybrary.it/How-to-Get-Started"
            className="hover:underline"
          >
            How to Get Started!
          </NavLink>{" "}
          &gt;{" "}
          <NavLink
            to="/help.cybrary.it/Cybrary-Basics"
            className="hover:underline"
          >
            Cybrary Basics
          </NavLink>
        </div>

        <h1 className="text-2xl  w-1/2 font-bold  text-gray-600 mt-16">
          How to Get Started: Register and Login to Cybrary
        </h1>

        {/* Main Content Header */}
        <div className="text-center mb-6">
          <p className="text-gray-500 text-left text-sm mt-6">
            10 months ago • Updated
          </p>
        </div>
        <div className="text-center mb-6">
          <p className="text-gray-500 text-left  text-sm mt-20">
            Learn how to register, login, and administer your Cybrary account
          </p>
        </div>

        {/* Image Section */}

        <div className="mt-4  mr-36 ">
          <p className="text-gray-700 mb-4 text-xl italic  ">
            As of March 1, 2024, 7:00 PM Eastern Standard Time, the outage
            impacting learners' ability to create new accounts and log into
            their existing accounts has been resolved.
          </p>
        </div>
        <div className="mt-4  mr-36 ">
          <p className="text-gray-700  text-xl mb-4 italic  ">
            As of March 1, 2024, 12:30PM Eastern Standard Time, an outage was
            identified with users trying to login or register on the platform.
            Users may have also been forcibly logged out at this time. We
            apologize for the disruption. Our engineering team is investigating
            and quickly working on a fix. Thank you for your patience!
          </p>
        </div>

        <h1 className="text-4xl    text-gray-600 mt-16">
          Registering for a Cybrary Account
        </h1>
        <p className="text-gray-700 mt-10  mr-48 ">
          In order to register for an account, you will need to provide a valid
          email address, create a password, and accept our Terms of Service and
          Privacy Policy. You can register here:
          <a
            href="https://www.cybrary.it/register"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:underline"
          >
            https://www.cybrary.it/register
          </a>
        </p>
        <div className="mt-6">
          <p className=" text-gray-600 leading-relaxed  text-left  text-sm mt-20">
            The password must contain:
          </p>
          <ul className="list-disc pl-6 mt-4 text-gray-700 text-lg  ml-8 space-y-2">
            <li>At least 8 characters</li>
            <li>At least 1 number(s)</li>
            <li>At least 1 lower case letter(s)</li>
            <li>At least 1 upper case letter(s)</li>
          </ul>
          <p className="mt-4 text-gray-700 text-lg mr-48 ">
            Upon registration, you will receive a verification email. You must
            go through the email verification process in order to access the
            Cybrary platform. If you don’t receive the verification email, it
            can be resent.
          </p>
        </div>

        <h1 className="text-3xl   text-gray-600 mt-16">
          Logging into your Cybrary Account
        </h1>
       
        <p className="mt-10 text-gray-700 text-lg mr-48 ">
        Note: If you do not have a valid email associated with your account, you will not be able to use the reset password functionality mentioned above. Please reach out to our Customer Support team via chat or by email at support@cybrary.it.
        </p>
        <h1 className="text-3xl   text-gray-600 mt-16">
        FAQs
        </h1>
        <p className="mt-10 text-gray-700 text-md mr-48 italic ">
        What happens if I don’t get a reset password email?
        </p>
        <p className="mt-10 text-gray-700 text-sm mr-28   ">
        If you attempt to reset your password but do not receive an email, first, ensure that it is not in your spam folder. If it is not, then please contact our Customer Support team via chat or by email at support@cybrary.it.
        </p>
        <p className="mt-10 text-gray-700 text-sm mr-28   ">
        What happens if I don’t get a verification email?
        </p>
        <p className="mt-10 text-gray-700 text-sm mr-28   ">
        If you register for an account but do not receive a verification email, first, ensure that it is not in your spam folder. If it is not, then please contact our Customer Support team via chat or by email at support@cybrary.it.
        </p>
        <p className="mt-10 text-gray-700 text-sm mr-28  italic  ">
        Can I use my username to login?

        </p>
        <p className="mt-10 text-gray-700 text-sm mr-28   ">
        No, your email address is the primary way to log in to your account.

        </p>

        {/* Details Section */}
        <div>
          <div className="max-w-lg p-4">
            <hr className="my-6" />
            <div className="max-w-lg p-4 ml-48 mx-auto">
              <p className="text-center font-semibold text-gray-600">
                Was this article helpful?
              </p>
              <div className="flex justify-center space-x-4 mb-4">
                <button className="bg-black text-white py-2 px-4 rounded hover:bg-black">
                  Yes
                </button>
                <button className="bg-gray-400 text-white py-2 px-4 rounded hover:bg-black">
                  No
                </button>
              </div>

              <p className="text-center text-gray-600">
                2 out of 4 found this helpful
              </p>
            </div>
            <hr className="my-6" />
          </div>
          <div className="flex justify-between p-4">
            {/* Recently Viewed Articles */}
            <div className="w-1/2 pr-4">
              <h3 className="text-lg font-bold mb-2 text-gray-600">
                Recently Viewed Articles
              </h3>
              <div className="space-y-2">
                {recentlyViewedArticles.map((article, index) => (
                  <button
                    key={index}
                    className="w-full text-left  text-gray-600 p-2 rounded hover:underline"
                  >
                    {article}
                  </button>
                ))}
              </div>
            </div>

            {/* Related Articles */}
            <div className="w-1/2 pl-4 mb-16">
              <h3 className="text-lg font-bold mb-2 text-gray-600">
                Related Articles
              </h3>

              <div className="space-y-2">
                {relatedArticles.map((article, index) => (
                  <button
                    key={index}
                    className="w-full text-left text-gray-600 p-2 rounded hover:underline"
                  >
                    {article}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <footer className="border-t-2 border-gray-300  py-4">
          <div className="container mx-auto">
            <NavLink to="/help-center">
              <button className="text-gray-700 mb-28 hover:underline">
                Cybrary
              </button>
            </NavLink>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Accountprofile;
