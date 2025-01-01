import React from "react";
import { NavLink } from "react-router-dom"; // Ensure you have react-router-dom installed

function Getstarted() {
  const faqData = [
    { title: "How to Get Started: How Do I Get Started in Cybersecurity?", isImportant: true ,
       },
    { title: "Cybrary Career Paths, Skill Paths, Cert Prep, and Collections FAQ", isImportant: true },
    { title: "How To Get Started! What is Cybrary Insider Pro?", isImportant: true },
    { title: "How To Get Started! What is Cybrary for Teams?" },
    { title: "How to Get Started! Upgrade and Accepted Payment Methods" },
    { title: "How To Get Started! FAQ's" },
   
    {
      title:
        "Getting Started with Cybrary Insider Pro - Updating your Career Path Curriculum",
    },
    {
      title:
        "How To Get Started! Forgot Your Password?",
    },
  ];

  return (

    <div className="min-h-screen bg-white flex flex-col ">
      
      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center mt-10 px-4">
        <div className="w-full max-w-5xl mx-auto p-6">
          {/* Search Bar Section */}
          <div className="mb-6">
            <div className="bg-white rounded-full mt-8 shadow-lg w-full max-w-md mx-auto flex items-center px-4 py-2">
              <i className="fa-solid fa-magnifying-glass  text-gray-400 mr-3"></i>
              <input
                type="text"
                placeholder="Search"
                className="w-full px-2 py-1 border-none focus:outline-none text-gray-700 text-base"
              />
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex sm:flex-row space-x-4  text-center sm:space-x-6 mb-6">
  <NavLink to="/help-center" className="text-black hover:underline">
    Cybrary
  </NavLink>
  <NavLink
    to="/help.cybrary.it/How-to-Get-Started"
    className="text-black hover:underline"
  >
    How to Get Started!
  </NavLink>
</div>


          {/* Header Section */}
          <div className="flex flex-col  md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
            <div>
              <h1 className="text-2xl md:text-3xl font-semibold text-gray-500">
              How to Get Started!
              </h1>
              <p className="text-gray-600  md:text-base italic mt-2">
              Learn all aspects of getting started in the platform!
              </p>
            </div>
            <NavLink to="/components/360010736014-Sign-in-to-Cybrary">
              <button className="border border-black text-black bg-transparent hover:bg-black hover:text-white transition duration-300 px-4 py-2 rounded">
                Follow
              </button>
            </NavLink>
          </div>

          {/* Button Section */}
          <NavLink to="/help.cybrary.it/Cybrary-Basics">
          <button className="w-full text-gray-600 mt-8 text-left px-4 py-2 bg-transparent border-t-2 border-b-2 border-gray-600 hover:text-black focus:outline-none">
          Cybrary Basics
          </button>
          </NavLink>

          {/* FAQ Section */}
          <div className="mt-8">
            <ul className="space-y-4">
              {faqData.map((item, index) => (
                <li key={index} className="flex items-center  mt-14">
                  {item.isImportant ? (
                    <span className="text-yellow-500 mr-2"></span>
                  ) : (
                    <span className="text-gray-400 mr-2"></span>
                  )}
                  <button className="text-left text-gray-600 hover:underline">
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="border-t-2 border-gray-300 bg-gray-100 py-4">
        <div className="container mx-auto ">
          <NavLink to="/help-center">
            <button className="text-gray-700 hover:underline">Cybrary</button>
          </NavLink>
        </div>
      </footer>
    </div>
  );
}

export default Getstarted;
