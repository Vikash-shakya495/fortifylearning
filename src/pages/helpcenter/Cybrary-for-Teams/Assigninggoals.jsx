import React from "react";
import { NavLink } from "react-router-dom";

function Assigninggoals() {
  const recentlyViewedArticles = [
    "Cybrary for Teams: New Admin Training Videos",
    "Cybrary for Teams: Creating Career Paths",
    "Cybrary Insider Pro Billing FAQs",
    "Cybrary Impact Hub Discount Program",
    "Cybrary Impact Hub Discount Program",
  ];

  const relatedArticles = [
    "Cybrary for Teams: New Admin Training Videos",
    "Cybrary for Teams: Creating Career Paths",
    "Cybrary Baseline FAQ",
    "Troubleshooting Access",
    "Cybrary for Teams: Roles & Permissions - User Roles",
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
              to="/help.cybrary.it/Cybrary-for-Teams-New-Admin-Training-Videos"
              className="block text-gray-600 hover:bg-black hover:text-white w-full text-left"
            >
              Cybrary for Teams: New Admin Training Videos
            </NavLink>
          </li>

          <li>
            <button className="text-gray-600 hover:bg-black hover:text-white w-full text-left">
              Cybrary for Teams: Assigning Goals
            </button>
          </li>
          <li>
            <NavLink
              to="/help.cybrary.it/Cybrary-for-Teams-Creating-Career-Paths"
              className="block text-gray-600 hover:bg-black hover:text-white w-full text-left"
            >
              Cybrary for Teams: Creating Career Paths
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
            to="/help-center/sections/360010736014-Cybrary-for-Teams"
            className="hover:underline"
          >
            Cybrary for Teams
          </NavLink>{" "}
          &gt;{" "}
          <NavLink
            to="/help.cybrary.it/Cybrary-New-Admin-Onboarding"
            className="hover:underline"
          >
            Cybrary New Admin Onboarding
          </NavLink>
        </div>

        <h1 className="text-3xl font-bold text-gray-600 mt-16">
          Cybrary for Teams: Assigning Goals
        </h1>

        {/* Main Content Header */}
        <div className="text-center mb-6">
          <h2 className="text-lg font-semibold">
            Cybrary for Teams: New Admin Training Videos
          </h2>
          <p className="text-gray-500 text-left text-sm mt-6">
            1 year ago • Updated
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center mb-6">
          <img
            src="https://help.cybrary.it/hc/article_attachments/18410750951187"
            alt="Cybrary for Teams"
            className="rounded shadow-lg w-full max-w-3xl"
          />
        </div>

        {/* Details Section */}
        <div>
          <p className="text-gray-700 mb-4 text- px-28">
            Once a path has been created or you’ve found a course that fits an
            individual/team objective, how do we put this in the hands of a
            user? We use Goals! Think of Goals as Cybrary’s form of an
            assignment. This is an excellent way to promote accountability and
            watch your team upskill.
          </p>

          <div className="max-w-5xl p-4 mx-auto">
            <div className="flex justify-center mb-6">
              <img
                src="https://help.cybrary.it/hc/article_attachments/13800817723155"
                alt="Cybrary for Teams"
                className="rounded shadow-lg w-full max-w-6xl h-auto"
                style={{ width: "800px", height: "auto" }} // Explicit dimensions
              />
            </div>
            <div>
              <p className="text-gray-700 mb-4   mt-14 px-28">
                On an ongoing basis, you can reference the Goals page to monitor
                the teams progress. Additionally, our Dashboard is another
                source where you can better understand who has logged in, what
                they are learning, and who your top learners are.
              </p>
              <p className="text-gray-700 mb-4  mt-14 px-28">
                On an ongoing basis, you can reference the Goals page to monitor
                the teams progress. Additionally, our Dashboard is another
                source where you can better understand who has logged in, what
                they are learning, and who your top learners are.
              </p>
              <p className="text-gray-700 mb-4 mt-14 px-28">
                On an ongoing basis, you can reference the Goals page to monitor
                the teams progress. Additionally, our Dashboard is another
                source where you can better understand who has logged in, what
                they are learning, and who your top learners are.
              </p>
            </div>

            <hr className="my-6" />
            <div className="max-w-lg p-4 ml-48 mx-auto">
              <p className="text-center font-semibold text-gray-600">
                Was this article helpful?
              </p>
              <div className="flex justify-center space-x-4  mt-5 mb-4">
                <button className="bg-black text-white py-2 px-4 rounded hover:bg-black">
                  Yes
                </button>
                <button className="bg-gray-400 text-white py-2 px-4 rounded hover:bg-black">
                  No
                </button>
              </div>

              <p className="text-center text-gray-600">
                1 out of 3 found this helpful
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

export default Assigninggoals;
