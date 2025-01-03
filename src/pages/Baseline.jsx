import React from "react";
import "../App.css";
import SignupComponent from "../components/home/SignupComponent";

const Card = ({ title, duration, items, image }) => {
  return (
    <div className="bg-gray-900 rounded-2xl items-center justify-center mt-14 shadow-lg overflow-hidden">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-50 object-cover" />
      </div>

      <div className="p-6">
        <div className="flex items-center mb-3">
          <span className="bg-purple-700 text-white text-xs font-bold py-1 px-3 rounded-xl">
            ASSESSMENT PATH
          </span>
          <span className="text-white text-xs font-bold py-1 px-3 ">
            {duration}
          </span>
        </div>
        <h3 className="text-white text-2xl font-semibold mb-2">{title}</h3>

        <ul className="text-gray-400 text-sm list-disc list-inside space-y-1">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

function Baseline() {
  const cards = [
    {
      title: "IT and Cybersecurity Fundamentals",
      duration: "4H:15M",
      items: [
        "Scripting And Programming Fundamentals",
        "Network Fundamentals",
        "Cybersecurity Fundamentals",
        "Operating System Fundamentals",
      ],
      image:
        "https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/65aa3361405b98a42c07bcb6_Rectangle%208.png",
    },
    {
      title: "Penetration Tester",
      duration: "4H:15M",
      items: [
        "Offensive Security Fundamentals",
        "Scripting for Offensive Security",
        "Application Attacks",
        "Network Attacks",
      ],
      image:
        "https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/65aa36353761c869a3a649cd_Rectangle%208.png",
    },
    {
      title: "SOC Analyst",
      duration: "4H:15M",
      items: [
        "Digital Forensics",
        "Defensive Security Fundamentals",
        "Log Analysis",
        "Network Communications Analysis",
        "Host Analysis",
      ],
      image:
        "https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/65aa3634939a3be0dd9a9ad7_Rectangle%208%20(1).png",
    },
  ];

  return (
    <div className="bg-gray-950 mt-24">
      <div className="relative w-full h-screen bg-gradient-to-r from-slate-950 via-green-900 via-pink-800 to-slate-950 flex items-center justify-center">
        <div className="relative bg-white bg-opacity-10 text-white rounded-3xl shadow-lg p-10 max-w-6xl w-[90%] md:w-[70%] flex flex-col md:flex-row items-center gap-10 h-[65vh]">
          <div className="w-full md:w-2/5">
            <button className="bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-2xl px-3 font-semibold py-1">Baseline</button>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
              Understand where your team stands on a global{" "}
              <span className="text-green-400">scale</span>
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Baseline enables organizations to gauge their team's competencies
              against crucial job roles in cybersecurity. These practical assessments are designed to provide a clear baseline of current abilities.
            </p>
            <button className="bg-gradient-to-r from-red-500 to-fuchsia-500 hover:bg-pink-600 text-white py-3 px-6 rounded-lg text-lg font-medium hover:shadow-[0px_0px_10px_purple,0px_0px_10px_#FF4D6D] duration-500">
              Request Free Demo
            </button>
          </div>

          <div className="w-full md:w-[45%] ml-auto mr-[-10%]">
            <img
              src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/65afcbf2c417f8de645185c9_Baseline_Hero_GIF.gif"
              alt="Cybersecurity baseline animation"
              className="rounded-md shadow-md w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      <div className="text-white py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-6 w-[90%] md:w-[70%] mx-auto">
          {[
            {
              img: "https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/65a8d8c4d3eb3cfc2fb794a3_11.svg",
              title: "Unparalleled Team Skills Measurement",
            },
            {
              img: "https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/65a8d8c448ff8c3713af9f74_22.svg",
              title: "Streamline Career Progression",
            },
            {
              img: "https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/65a8d8c4dabb667133f212a4_33.svg",
              title: "Benchmark Against Global Teams",
            },
            {
              img: "https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/65a8d8c45bac6ffb0412a9f4_44.svg",
              title: "SEC Cyber Disclosure Rules Compliance",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-2"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-28 h-28 object-cover rounded-3xl"
              />
              <p className="text-2xl font-semibold">{item.title}</p>
            </div>
          ))}
        </div>

        <div className="relative mt-10 w-[90%] md:w-[70%] mx-auto">
          <div
            className="bg-cover bg-center h-60 flex items-center justify-center rounded-3xl"
            style={{
              backgroundImage:
                "url('https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/65a8d3c790bf40ac00edc556_Group%2039781.png')",
            }}
          >
            <h2 className="text-5xl font-bold text-center">
              Your Security Is About{" "}
              <span className="text-green-500">Knowing</span> Your People
            </h2>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center min-h-auto">
        <div className="w-[90%] md:w-[70%] text-white">
          <div className="flex items-center justify-center mb-8">
            <h1 className="text-5xl">Job Role Powered Assessment Paths</h1>
          </div>
          <div className="px-6 md:px-20 flex items-center justify-center">
            <p className="text-xl font-medium text-center text-gray-400">
              Gauge team members competencies against crucial job roles in
              cybersecurity, or educate IT or non-technical professionals on
              cybersecurity foundations. These assessment paths are designed to
              provide a clear baseline of current knowledge gaps and skills
              deficiencies, then deliver a clear guide to learning, development,
              and career progression.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-max w -11/12 ">
              {cards.map((card, index) => (
                <Card key={index} {...card} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-center mt-16 text-3xl">
          <h1 className="text-[#00ed99]">New Assessments Released Monthly</h1>
        </div>
        <div className="text-white min-h-auto flex items-center justify-center my-20">
          <div className="flex w-[90%] md:w-[70%] h-[60vh] bg-[#1b2027] rounded-3xl overflow-hidden shadow-lg">
            <div className="w-1/2 flex items-center justify-center p-0">
              <img
                src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/65a8d591d495e22277f82b8f_Frame%2015.png"
                alt="Cybersecurity Dashboard"
                className="rounded-3xl shadow-md"
              />
            </div>
            <div className="w-1/2 p-10 flex flex-col justify-center">
              <h1 className="text-5xl font-normal mb-6">
                <p>Stand Tall on</p> <p>Global Scale</p>
              </h1>
              <span>
                <p className="text-lg text-gray-300 font-medium mb-6">
                  Cybrary's Global Benchmarking feature allows you to compare
                  your team's performance against a worldwide community of
                  cybersecurity practitioners, providing critical insights into
                  your global standing and identifying areas for improvement.
                </p>
              </span>
              <span>
                <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold text-lg shadow-md hover:shadow-[0px_0px_10px_purple,0px_0px_10px_#FF4D6D] duration-500">
                  Request Free Demo
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="text-white min-h-auto flex items-center justify-center my-20">
          <div className="flex w-[90%] md:w-[70%] h-[60vh] bg-[#1b2027] rounded-3xl overflow-hidden shadow-lg">
            <div className="w-1/2 p-10 flex flex-col justify-center">
              <h1 className="text-5xl font-normal mb-6">
                <p>Streamline Career</p> <p>Progression</p>
              </h1>
              <span>
                <p className="text-lg text-gray-300 font-medium mb-6">
                  Cybrary Baseline isn't just an assessment tool; it's a
                  stepping stone for career progression. Our platform identifies
                  skill gaps and provides comprehensive recommendations for
                  Career Paths, helping your team members effectively advance
                  their careers in cybersecurity.
                </p>
              </span>
              <span>
                <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold text-lg shadow-md hover:shadow-[0px_0px_10px_purple,0px_0px_10px_#FF4D6D] duration-500">
                  Request Free Demo
                </button>
              </span>
            </div>

            <div className="w-1/2 flex items-center justify-center p-0">
              <img
                src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/65a8d5afb60abd235dd92d6d_Frame%2016.png"
                alt="Cybersecurity Dashboard"
                className="rounded-3xl shadow-md"
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="text-white min-h-auto flex items-center justify-center my-20">
          <div className="flex w-[90%] md:w-[70%] h-[60vh] bg-[#1b2027] rounded-3xl overflow-hidden shadow-lg">
            <div className="w-1/2 flex items-center justify-center p-0">
              <img
                src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/ 65a8d5beb1bd343d6214561e_Frame%2015%20(1).png"
                alt="Cybersecurity Dashboard"
                className="rounded-3xl shadow-md"
              />
            </div>
            <div className="w-1/2 p-10 flex flex-col justify-center">
              <h1 className="text-5xl font-normal mb-6">
                <p>Comply with SEC</p> <p>Cyber Disclosure Rules</p>
              </h1>
              <span>
                <p className="text-lg text-gray-300 font-medium mb-6">
                  Measure your team's cybersecurity aptitude against critical
                  job roles through practical evaluations, offering a clear
                  understanding of current capabilities and enabling informed
                  decisions about security training.
                </p>
              </span>
              <span>
                <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold text-lg shadow-md hover:shadow-[0px_0px_10px_purple,0px_0px_10px_#FF4D6D] duration-500">
                  Request Free Demo
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="flex items-center justify-center mt-16 text-4xl">
            <h1 className="text-[#00ed99] font-semibold">
              Unlock trending performance insights and benchmark{" "}
            </h1>
          </div>
          <div className="flex items-center justify-center mt-3 text-4xl">
            <p className="leading-snug font-semibold text-center">
              your team's skills against data from hundreds of <br /> thousands
              of practitioners worldwide.
            </p>
          </div>
          <div className="flex justify-center">
            <span>
              <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md mt-8 text-lg hover:shadow-[0px_0px_10px_purple,0px_0px_10px_#FF4D6D] duration-500">
                Request Free Demo
              </button>
            </span>
          </div>
        </div>
      </div>

      {/* Signup Section */}
      <div className="w-full mt-24 flex justify-center">
        <SignupComponent />
      </div>
    </div>
  );
}

export default Baseline;