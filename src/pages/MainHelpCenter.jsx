import React from "react";
import { NavLink } from "react-router-dom";
import fortifyLearningLogo from "../assets/fortifyLearning.png";
// import cybraryLogos from "../assets/search.png";
const MainHelpCenter = () => {
  const boxes = [
    {
      title: "Cybrary for Teams",
      description:
        'If you are a team learner or team admin—find answers on navigation, "how-tos," and more!',
      link: "/help-center/sections/360010736014-Cybrary-for-Teams",
    },
    {
      title: "How to Get Started!",
      description: "Learn all aspects of getting started in the platform!",
      link:"/help.cybrary.it/How-to-Get-Started",
    },
    {
      title: "Billing",
      description: "Answers to your billing questions and concerns.",
    },
    {
      title: "Tech Know-How",
      description: "Common technical occurrences you may experience.",
    },
    {
      title: "General FAQ",
      description: "Find answers for the most frequently asked questions.",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Help Center Boxes */}
      <div className="md:w-4/6 mx-auto p-4">
        <div className="relative">
          <img src={fortifyLearningLogo} alt="" />
          <div>
            search bar bana de
            <div className="absolute bottom-0  w-full border-b-2 border-black"></div>
          </div>
        </div>
     

      {/* Content */}
      <div className="relative flex justify-center items-center h-full">
        {/* Search Bar */}
        <div className="bg-white rounded-full shadow-lg w-11/12 max-w-xl flex items-center px-4 py-3">
          <i className="fa-solid fa-magnifying-glass text-gray-400 mr-4"></i>
          <input
            type="text"
            placeholder="Search"
            className="w-full px-2 py-1 border-none focus:outline-none text-gray-700 text-lg"
          />
        </div>
      {/* </div> */}
    </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {boxes.map((box, index) => (
            <NavLink to={box.link || "#"} key={index}>
              <div className="border border-black rounded-md p-4 text-center shadow-md transition-shadow duration-300 bg-white group hover:bg-black hover:text-white">
                <h3 className="text-black text-lg font-semibold mb-2 group-hover:text-white">
                  {box.title}
                </h3>
                <p className="text-black text-sm group-hover:text-white">
                  {box.description}
                </p>
              </div>
            </NavLink>
          ))}
        </div>

        {/* Promoted Articles Section */}
        <div className="mt-12">
          <h1 className="text-black text-xl mb-6 text-left">
            Promoted articles
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Row 1 */}
            <button className="p-4 rounded text-left border-b-2 border-black text-black bg-white">
              Cyber Risk Impact FAQs
            </button>
            <button className="p-4 rounded text-left border-b-2 border-black text-black bg-white">
              Training Project Widget FAQs
            </button>
            <button className="p-4 rounded text-left border-b-2 border-black text-black bg-white">
              Cybrary Baseline FAQ
            </button>
            {/* Row 2 */}
            <button className="p-4 rounded text-left border-b-2 border-black text-black bg-white">
              Vimeo Subtitle Translator
            </button>
            <button className="p-4 rounded text-left border-b-2 border-black text-black bg-white">
              Cybrary Assessments
            </button>
            <button className="p-4 rounded text-left border-b-2 border-black text-black bg-white">
              2024 Content Catalog Changes
            </button>
          </div>
        </div>

        {/* Recent Activity Section */}
        <div className="mt-20">
          <h1 className="text-black text-xl mb-6 text-center font-semibold">
            Recent Activity
          </h1>
          <div className="max-w-4xl mx-auto">
            {/* Container for the button layout */}
            <div className="flex justify-between items-center mb-8">
              <div>
                {/* Primary Heading */}
                <button className="text-black text-lg font-bold text-left mb-2 transition">
                  Cybrary for Teams
                </button>

                {/* Subheading */}
                <button className="text-black text-md text-left mb-1 border-b border-black pb-1 transition flex">
                  Cybrary for Teams Handbook
                </button>
              </div>

              {/* Small text on the right */}
              <p className="text-black text-sm text-right">
                Article created 1 month ago
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto">
          {/* Container for the button layout */}
          <div className="flex justify-between items-center mb-8">
            <div>
              {/* Primary Heading */}
              <button className="text-black text-lg font-bold text-left mb-2 transition">
                General FAQ
              </button>

              {/* Subheading */}
              <button className="text-black text-md text-left mb-1 border-b border-black pb-1 transition flex">
                2024 Content Catalog Changes
              </button>
            </div>

            {/* Small text on the right */}
            <p className="text-black text-sm text-right">
              Article created 3 months ago
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            {/* Container for the button layout */}
            <div className="flex justify-between items-center mb-8">
              <div>
                {/* Primary Heading */}
                <button className="text-black text-lg font-bold text-left mb-2 transition">
                  Cybrary for Teams
                </button>

                {/* Subheading */}
                <button className="text-black text-md text-left mb-1 border-b border-black pb-1 transition flex">
                  Cyber Risk Impact FAQs
                </button>
              </div>

              {/* Small text on the right */}
              <p className="text-black text-sm text-right">
                Article created 5 month ago
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              {/* Container for the button layout */}
              <div className="flex justify-between items-center mb-8">
                <div>
                  {/* Primary Heading */}
                  <button className="text-black text-lg font-bold text-left mb-2 transition">
                    Cybrary for Teams
                  </button>

                  {/* Subheading */}
                  <button className="text-black text-md text-left mb-1 border-b border-black pb-1 transition flex">
                    Training Project Widget FAQs
                  </button>
                </div>

                {/* Small text on the right */}
                <p className="text-black text-sm text-right">
                  Article created 5 month ago
                </p>
              </div>
              <div className="max-w-4xl mx-auto">
                {/* Container for the button layout */}
                <div className="flex justify-between items-center mb-8">
                  <div>
                    {/* Primary Heading */}
                    <button className="text-black text-lg font-bold text-left mb-2 transition">
                      Tech Know-How
                    </button>

                    {/* Subheading */}
                    <button className="text-black text-md text-left mb-1 border-b border-black pb-1 transition flex">
                      Tech Know-How: Virtual Keyboards
                    </button>
                  </div>

                  {/* Small text on the right */}
                  <p className="text-black text-sm text-right">
                    Article created 6 month ago
                  </p>
                </div>
                <footer className="relative w-full border-t-2 border-gray-300 bg-gray-100 py-4">
                  <div className="container mx-auto ">
                  <NavLink to='/help-center'> 
                    <button className="text-gray-700">Cybrary</button>
                    </NavLink>
                  </div>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHelpCenter;
