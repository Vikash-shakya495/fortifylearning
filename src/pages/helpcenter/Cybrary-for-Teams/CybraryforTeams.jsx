import React from "react";
import { NavLink } from "react-router-dom"; // Ensure you have react-router-dom installed

function CybraryforTeams() {
  const faqData = [
    { title: "Cyber Risk Impact FAQs", isImportant: true ,
       link: "/help.cybrary.it/Cyber-Risk-Impact-FAQs" },
    { title: "Training Project Widget FAQs", isImportant: true },
    { title: "Cybrary Baseline FAQ", isImportant: true },
    { title: "Cybrary for Teams Handbook" },
    { title: "Cybrary for Teams: Groups and Hierarchies" },
    { title: "Content Replacement: Custom Paths" },
    {
      title:
        "Self-Service Guide to SAML 2.0 SSO Configuration for Okta, OneLogin, and Azure",
    },
    {
      title:
        "How to Build a Future-Proof Cybersecurity Skills Development Program - a Guide",
    },
    { title: "Subscription Change: Cybrary Insider Pro to Cybrary for Teams" },
    { title: "Goals Overview" },
    { title: "Cybrary for Teams: Invite New Team Members" },
    { title: "Cybrary for Teams: Roles & Permissions - Organization Owner" },
    { title: "Cybrary for Teams: Roles & Permissions - User Roles" },
    {
      title:
        "Getting Started as a Team Admin on the Business Platform - How Can I Edit a User on my Team?",
    },
    { title: "Roles & Permissions - Switching Between Groups" },
    { title: "How to: Add more Cybrary for Teams licenses" },
    {
      title:
        "Getting Started as a Team Admin on the Business Platform - Custom Career Development Programs",
    },
    {
      title:
        "Getting Started as a Team Learner on the Business Platform - Viewing my Goals",
    },
  ];

  return (

    <div className="min-h-screen bg-white flex flex-col">
      
      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center px-4">
        <div className="w-full max-w-5xl mx-auto p-6">
          {/* Search Bar Section */}
          <div className="mb-6">
            <div className="bg-white rounded-full shadow-lg w-full max-w-md mx-auto flex items-center px-4 py-2">
              <i className="fa-solid fa-magnifying-glass text-gray-400 mr-3"></i>
              <input
                type="text"
                placeholder="Search"
                className="w-full px-2 py-1 border-none focus:outline-none text-gray-700 text-base"
              />
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex sm:flex-row space-x-4 sm:space-x-6 mb-6">
  <NavLink to="/help-center" className="text-black hover:underline">
    Cybrary
  </NavLink>
  <NavLink
    to="/help-center/sections/360010736014-Cybrary-for-Teams"
    className="text-black hover:underline"
  >
    Cybrary for Teams
  </NavLink>
</div>


          {/* Header Section */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
            <div>
              <h1 className="text-2xl md:text-3xl font-semibold text-gray-600">
                Cybrary for Teams
              </h1>
              <p className="text-gray-600  md:text-base italic mt-2">
                If you are a team learner or team admin—find answers on
                navigation, "how-to's," and more!
              </p>
            </div>
            <NavLink to="/components/360010736014-Sign-in-to-Cybrary">
              <button className="border border-black text-black bg-transparent hover:bg-black hover:text-white transition duration-300 px-4 py-2 rounded">
                Follow
              </button>
            </NavLink>
          </div>

          {/* Button Section */}
          <NavLink to="/help.cybrary.it/Cybrary-New-Admin-Onboarding">
          <button className="w-full text-gray-600 mt-8 text-left px-4 py-2 bg-transparent border-t-2 border-b-2 border-gray-600 hover:text-black focus:outline-none">
            Cybrary New Admin Onboarding
          </button>
          </NavLink>

          {/* FAQ Section */}
          <div className="mt-8">
            <ul className="space-y-4">
              {faqData.map((item, index) => (
                <li key={index} className="flex items-center">
                  {item.isImportant ? (
                    <span className="text-yellow-500 mr-2">★</span>
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

export default CybraryforTeams;
