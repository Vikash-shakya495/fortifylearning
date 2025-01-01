import React from "react";
import { NavLink } from "react-router-dom"; // Ensure you have react-router-dom installed

function Cybrarybasics() {
  const faqData = [
    {
      title: "How To Get Started! Create a Cybrary account",
      isImportant: true,
      link: "/help.cybrary.it/How-To-Get-Started-Create-a-Cybrary-account",
    },
    {
      title: "How to Get Started: Register and Login to Cybrary",
      isImportant: true,
      link: "/help.cybrary.it/Register-and-Login-to-Cybrary",
    },
    {
      title: "How to: Add Multiple Emails To an Account",
      isImportant: true,
      link: "/help.cybrary.it/Add-Multiple-Emails-To-an-Account",
    },
    { title: "How to Get Started! Account Profile", link: "/help.cybrary.it/Account-Profile" },
    { title: "Adding Your Learning Schedule to Your Calendar", link: "/help.cybrary.it/Learning-Schedule-Calendar" },
    { title: "Canceling Your Cybrary Insider Pro Subscription", link: "/help.cybrary.it/Cancel-Subscription" },
    { title: "How to: Delete your Cybrary Account", link: "/help.cybrary.it/Delete-Account" },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center mt-10 px-4">
        <div className="w-full max-w-5xl mx-auto p-6">
          {/* Search Bar Section */}
          <div className="mb-6">
            <div className="bg-white rounded-full mt-8 shadow-lg w-full max-w-md mx-auto flex items-center px-4 py-2">
              <i className="fa-solid fa-magnifying-glass text-gray-400 mr-3"></i>
              <input
                type="text"
                placeholder="Search"
                className="w-full px-2 py-1 border-none focus:outline-none text-gray-700 text-base"
              />
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex sm:flex-row space-x-4 text-center sm:space-x-6 mb-6">
            <NavLink to="/help-center" className="text-black hover:underline">
              Cybrary
            </NavLink>
            <NavLink
              to="/help.cybrary.it/How-to-Get-Started"
              className="text-black hover:underline"
            >
              How to Get Started!
            </NavLink>
            <NavLink
              to="/help.cybrary.it/Cybrary-Basics"
              className="text-black hover:underline"
            >
              Cybrary Basics
            </NavLink>
          </div>

          {/* Header Section */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl md:text-3xl font-semibold text-gray-500">
                Cybrary Basics
              </h1>
              <p className="text-gray-600 md:text-base italic mt-2">
                Quick Ways to Navigate Cybrary
              </p>
            </div>
            <div>
              <NavLink to="/components/360010736014-Sign-in-to-Cybrary">
                <button className="border border-black text-black bg-transparent hover:bg-black hover:text-white transition duration-300 px-4 py-2 rounded">
                  Follow
                </button>
              </NavLink>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-8">
            <ul className="space-y-4">
              {faqData.map((item, index) => (
                <li key={index} className="mt-4">
                  <NavLink
                    to={item.link}
                    className="text-gray-600 hover:underline block text-left"
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="border-t-2 border-gray-300 bg-gray-100 py-4">
        <div className="container mx-auto text-center">
          <NavLink to="/help-center">
            <button className="text-gray-700 hover:underline">Cybrary</button>
          </NavLink>
        </div>
      </footer>
    </div>
  );
}

export default Cybrarybasics;
