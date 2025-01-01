import React from "react";
import { NavLink } from "react-router-dom";
// import cybraryLogo from "../assets/Helpcenter.png";

function Newadmin() {
  const faqData = [
    { 
      title: "Cybrary for Teams: New Admin Training Videos",
      link: "/help.cybrary.it/Cybrary-for-Teams-New-Admin-Training-Videos",
    },
    { 
      title: "Cybrary for Teams: Assigning Goals",
      link: "/help.cybrary.it/Cybrary-for-Teams-Assigning-Goals", 
    },
    { 
      title: "Cybrary for Teams: Creating Career Paths",
      link: "/help.cybrary.it/Cybrary-for-Teams-Creating-Career-Paths", 
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Help Center Boxes */}
      <div className="min-h-screen  flex flex-col">
        {/* Main Content */}
        <div className="flex-grow flex flex-col items-center justify-start px-4 sm:px-6 md:px-8">
          <div className="w-full max-w-4xl mx-auto py-6">
            {/* Breadcrumb Navigation */}
            <div className="text-sm text-gray-600 mb-4">
              <NavLink to="/help-center" className="hover:underline">
                Cybrary
              </NavLink>{" "}
              &gt;{" "}
              <NavLink
                to="/help-center/sections/360010736014-Cybrary-for-Teams"
                className="hover:underline"
              >
                Cybrary for Teams
              </NavLink>{" "}
              &gt;{" "}
              <button className="hover:underline">
                Cybrary New Admin Onboarding
              </button>
            </div>

            {/* Search Bar and Follow Button */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
              <div className="flex-grow mb-4 sm:mb-0">
                <h1 className="text-3xl font-semibold text-gray-800">
                  Cybrary New Admin Onboarding
                </h1>
                <p className="text-gray-600  mt-2 text-sm italic">
                  The following resources will be helpful in onboarding your
                  team to Cybrary, ensuring you have what you need to begin
                  learning and managing members.
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-white rounded-full shadow-md flex items-center px-4 py-2">
                  <i className="fa-solid fa-magnifying-glass text-gray-400 mr-2"></i>
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full text-sm text-gray-700 border-none focus:outline-none"
                  />
                </div>
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
                  <li key={index} className="text-gray-800 hover:underline">
                    {item.link ? (
                      <NavLink to={item.link}>{item.title}</NavLink>
                    ) : (
                      item.title
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Section */}
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

export default Newadmin;
