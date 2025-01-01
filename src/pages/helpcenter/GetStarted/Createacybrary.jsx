import React from "react";
import { NavLink } from "react-router-dom";

function Createacybrary() {
  const recentlyViewedArticles = [
    "Cybrary Insider Pro Billing FAQs",
    "Cyber Risk Impact FAQs",
    "Cybrary for Teams: Assigning Goals",
    "Cybrary for Teams: Creating Career Paths",
    "Cybrary Baseline FAQ",
  ];

  const relatedArticles = [
    "How to Get Started: Register and Login to Cybrary",
    "How to Get Started! Upgrade and Accepted Payment Methods",
    "How to: Delete your Cybrary Account",
    "2024 Content Catalog Changes",
    "How to Get Started: How Do I Get Started in Cybersecurity?",
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
              to="/help.cybrary.it/How-to-Add-Multiple-Emails-To-an-Account"
              className="block text-gray-600 hover:bg-black hover:text-white w-full text-left"
            >
             How to: Add Multiple Emails To an Account
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/help.cybrary.it/How-to-Get-Started-Account-Profile"
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

        <h1 className="text-3xl font-bold text-gray-600 mt-16">
        How To Get Started! Create a Cybrary account
        </h1>

        {/* Main Content Header */}
        <div className="text-center mb-6">
         
          <p className="text-gray-500 text-left text-sm mt-6">
            1 year ago • Updated
          </p>
        </div>
        <div className="mt-20">
  <p className="text-gray-700 mb-4">
    To create a free account with us, please visit{" "}
    <a
      href="https://www.cybrary.it/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-black hover:underline"
    >
      https://www.cybrary.it/
    </a>
  </p>
</div>


        {/* Image Section */}
        <div className="flex justify-center mr-10 mb-6">
          <img
            src="https://help.cybrary.it/hc/article_attachments/18411614673811"
            alt="Cybrary for Teams"
            className="rounded shadow-lg w-full max-w-3xl"
          />
        </div>
        <div className="mt-10  mr-36 ml-24">
  <p className="text-gray-700 mb-4">
    Our platform is best optimized for Google Chrome. As such, please be sure to utilize this browser when visiting our platform. If Chrome is not a viable browser option, please visit our article on accepted browsers for other options
    <a
      href="/help.cybrary.it/Tech-Know-How-Browser-Capability"
      target="_blank"
      rel="noopener noreferrer"
      className="text-black hover:underline"
    >
      Tech Know-How: Browser Capability
    </a>
  </p>
</div>


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

export default Createacybrary;
