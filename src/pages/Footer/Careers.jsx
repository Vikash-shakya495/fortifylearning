import React from "react";
import SignupComponent from "../../components/home/SignupComponent";
// import SignupComponent from "./SignupComponent";

const Careers = () => {
  return (
    <div className="bg-black min-h-screen">
      <div className="mt-32 h-[600px] w-full relative">
        {/* Background Image */}
        <img
          className="absolute w-full h-full object-cover opacity-50"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK_UWhsg2BNn8QS7nP5WQiDXmGg72fEC6x1A&s"
          alt="Background"
        />
        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black bg-opacity-10 text-white">
          {/* Placeholder for Logo/Image */}
          <img className="w-[200px]" />
          {/* Title */}
          <h1 className="text-3xl md:text-5xl text-white md:w-2/4">
            Work with Us
          </h1>
          {/* Description */}
          <p className="mt-4 text-gray-300 max-w-2xl">
            At Cybrary, we are guided by one core value - never let your
            teammates down. By incorporating this value into everything we do,
            everything else falls into place. We communicate better, we solve
            problems faster, and we prioritize collaboration.
            <br />
            <br />
            If you’re interested in joining a work environment where everyone
            continues to learn, share, and work toward a common goal, check out
            our open roles below.
          </p>
          {/* Call to Action Button */}
          <button className="mt-8 bg-gradient-to-r from-red-500 to-fuchsia-500 py-3 px-8 text-white font-semibold rounded-2xl hover:shadow-lg transition-all">
            <a href="#career-opportunities">View Careers</a>
          </button>
        </div>
      </div>

      {/* Putting People First Section */}
      <div className="bg-black text-white mt-10 flex items-center justify-center">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center items-center md:items-start">
          {/* Left Content - Title */}
          <div className="md:w-1/3 text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl">Putting people first</h2>
          </div>
          {/* Right Content - Description */}
          <div className="md:w-1/2 text-gray-300 text-center md:text-left">
            <p className="mb-4">
              Our mission is to create a workspace that fosters innovation and
              creativity. We believe that an inspiring environment empowers
              individuals to achieve their full potential.
            </p>
            <p className="mb-4">
              By designing our office with state-of-the-art facilities, open
              collaboration areas, and quiet zones for focused work, we ensure
              that every team member has the tools they need to excel. Regular
              workshops and brainstorming sessions help us stay connected and
              aligned.
            </p>
            <p className="mb-4">
              We are committed to a culture that values teamwork, transparency,
              and growth. Together, we strive to build solutions that make a
              meaningful impact on the world.
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      {/* Benefits Section */}
      <div className="bg-black text-white py-12 px-6">
        <div className="w-5/6 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              img: "https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/646e36ebe1d9243e17c8e292_wellness-image.svg",
              title: "Wellness",
              description:
                "We cover 100% of employee premiums for medical, dental, and vision insurance, and 50% of dependent premiums.",
            },
            {
              img: "https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/646e37c410353f4c0239b882_calendar-image.svg",
              title: "Planning for the future",
              description:
                "We offer stock options and a 401(k) to all full-time employees.",
            },
            {
              img: "https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/646e37c41d0a64450b7da212_house-image.svg", // Replace with an appropriate icon or image
              title: "Student loan repayment",
              description:
                "Student loans are burdensome. We help you pay them off sooner with monthly contributions that increase the longer you work with us.",
            },
            {
              img: "https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/646e37c430fa9bb6180523d6_palm-image.svg", // Replace with an appropriate icon or image
              title: "Flexible leave policy",
              description:
                "Our leave policy is open, so you can take the time off you need, when you need it.",
            },
            {
              img: "https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/646e37c464060fb9fee2156a_bus-image.svg",
              title: "Transportation benefits",
              description:
                "We help you set aside pre-tax dollars to fund your public transportation and provide access to free shuttles to and from the College Park metro.",
            },
          ].map((benefit, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-lg flex flex-col items-start bg-gray border border-gray-700 transition-all"
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-2xl mb-4">
                <img className="w-20" src={benefit.img} alt="" />
              </div>
              {/* Title */}
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              {/* Description */}
              <p className="text-sm text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
        <div
          className="bg-black text-white py-12 px-6"
          id="career-opportunities"
        >
          {/* Add margin to create a gap */}
          <div className="max-w-4xl mx-auto mt-40">
            <h2 className="text-5xl mb-10">Career Opportunities</h2>
            {/* Career Card */}
            <div className="p-6 bg-gray-900 rounded-lg shadow-lg border border-gray-800 max-w-sm">
              {/* Category */}
              <div className="text-xs text-gray-400 uppercase tracking-wide mb-2 bg-gray-800 px-2 py-1 rounded-md inline-block">
                Creative Services
              </div>
              {/* Job Title */}
              <h3 className="text-3xl mb-2">Creative Producer</h3>
              {/* Location */}
              <p className="text-sm text-white-500 font-bold mb-4">
                Location: Anywhere
              </p>
              {/* Button */}
              <button className="bg-gradient-to-r from-orange-500 to-pink-500 px-20 py-3 rounded-md text-white hover:shadow-lg hover:shadow-pink-500/50 transition-shadow duration-300">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-24 flex justify-center">
        <SignupComponent/>
      </div>
    </div>
  );
};

export default Careers;