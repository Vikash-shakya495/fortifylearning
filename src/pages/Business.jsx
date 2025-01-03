// App.js
import React, { useState } from "react";
import "../App.css";
import Marquee from "react-fast-marquee";

// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

import SignupComponent from "../components/home/SignupComponent";

const cards = [
  {
    id: 1,
    title: "Baseline & Benchmark team member’s knowledge and skills",
    description:
      "Our next-gen assessments evaluate practical skills and benchmark capabilities across a range of experience, industry, and role. By using the data from the largest global provider of cybersecurity skill development and certification prep, you’ll gain unprecedented insights into your team’s capabilities.",
  },
  {
    id: 2,
    title: "Structured Career Paths Aligned to Key Industry Frameworks",
    description:
      "Our integration of practical cybersecurity skill training with industry frameworks provides realistic scenarios designed to build real skills. This equips teams not only with theoretical knowledge but also with applicable skills used in their everyday jobs.",
  },
  {
    id: 3,
    title:
      "Hands-on Technical Training and Certification Prep for Your Enterprise",
    description:
      "Combined with on-demand certification prep for the industry’s most in-demand exams, Cybrary offers the only holistic solution for both technical cybersecurity skill development and certification prep.",
  },
  {
    id: 4,
    title:
      "Stay Ahead of Salesforce Threats with Courses Covering the Latest CVEs and Threat Actors",
    description:
      " Our Salesforce Threat Intelligence Team monitors the latest threats and threat actors to create realistic “threat-breaking” simulations. Map the vulnerabilities, tactics, and techniques to industry frameworks and build visualizations to MITRE ATT&CK.",
  },
  {
    id: 5,
    title:
      "Identify Up-and-Coming Talent and Increase Retention of Your Current Salesforce Workforce 48%",
    description:
      "Learning analytics and skill insights allow managers to identify key talent within their organizations and create new opportunities for their most committed personnel. Properly invest in your people and watch your retention rates soar.",
  },
  {
    id: 6,
    title:
      "Work with a Dedicated Customer Success Team to Create and Implement an Effective Salesforce Training Strategy",
    description:
      "Implementing a Salesforce skills strategy is challenging. Our team has worked with the most prominent commercial businesses and government entities to help build, develop, and scale incredibly effective training programs. We're ready to do the same for you.",
  },
];

const secCards = [
  {
    id: 1,
    title: "CVE Simulations",
    description:
      " Realistic simulations of “threat-breaking” Common Vulnerabilities and Exposures as observed by the Salesforce Threat Intelligence Team. Get hands-on with the CVEs in a safe, browser-based sandbox.",
  },
  {
    id: 2,
    title: "Purple Team Exercises",
    description:
      "Curious how active threat-actors' tactics and techniques come together to exploit organizations? Purple Team Exercises recreate realistic threat campaign simulations observed being used by real threat actors like APT35, Royal, APT41, and more.",
  },
  {
    id: 3,
    title: "Baseline & Benchmark",
    description:
      "Salesforce’s Baseline feature allows Team Administrators to proactively assign role-based assessments to their team members and gain nuanced insight into their development. Learn how to start measuring your team's skills effectively.",
  },
];

function Business() {
  const [openIndex, setOpenIndex] = useState(null);

  const questions = [
    {
      question: "1. Continuously demonstrate and measure cyber capability",
      description:
        "Use Salesforce’s integrated tools to create realistic simulations and virtual challenge environments, allowing professionals to showcase their strengths and develop new skills.",
    },
    {
      question: "2. Reduce Cybersecurity Costs",
      description:
        "Cut down on the costs of losing cybersecurity personnel, which can average $50,000 per employee. Consolidate training budgets and minimize reliance on external consultants by using Salesforce’s comprehensive solutions.",
    },
    {
      question: "3. Maximize your cybersecurity budget",
      description:
        "Avoid high-cost licenses with Salesforce’s cost-effective solutions. Get more value for less by optimizing your cybersecurity budget.",
    },
    {
      question: "4. Improve Speed and Quality of Response",
      description:
        "Build foundational skills for junior employees and ensure continual training against emerging threats to enhance your team’s response time and effectiveness.",
    },
    {
      question: "5. Improve Recruitment and Career Development",
      description:
        "Standardize fundamentals for new hires with Salesforce, ensuring consistency across your team. Develop a scalable and repeatable cybersecurity skill development program.",
    },
    {
      question: "6. Reduce AWS and Microsoft Azure Vulnerabilities",
      description:
        "Utilize Salesforce’s training programs to get your team certified and proficient in AWS and Microsoft Azure. Engage in hands-on virtual labs to manage and secure cloud environments effectively.",
    },
  ];

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const threeCards = [
    {
      title: "Salesforce Security Best Practices",
      description:
        "Salesforce’s exclusive courses empower your team to master Salesforce security features and best practices. Learn how to implement robust security measures, manage user permissions effectively, and detect potential vulnerabilities. Equip your team to handle Salesforce-specific threats and ensure your CRM remains secure",
      // Change image with Salesforce later
      img: "https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/644d22f785577caeb6a692ff_Frame%20375.webp",
    },
    {
      title: "Salesforce Administration and Development",
      description:
        "Ensure your team’s training aligns with the core principles of Salesforce administration and development. Our courses cover essential areas, including user management, data security, and integration best practices. Maximize your training investment by developing skilled Salesforce administrators and developers.",

      // Change image with Salesforce later

      img: "https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/644d22f785577caeb6a692ff_Frame%20375.webp",
    },
    {
      title: "Salesforce Certification Prep",
      description:
        "Prepare your team for Salesforce certification with targeted courses and practice exams. Our comprehensive resources cover Salesforce Administrator,Developer, and Architect certifications, providing your team with the knowledge and skills needed to excel in their roles and advance their careers.",

      // Change image with Salesforce later

      img: "https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/644d22f785577caeb6a692ff_Frame%20375.webp",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center overflow-x-hidden">
      {/* <Navbar /> */}
      <header className="mt-28 flex flex-col lg:flex-row px-6 md:px-48">
        <div className="mt-8 xl:mt-40 flex flex-col items-center md:items-start">
          <h1 className="text-4xl md:text-6xl text-center md:text-left">
            Unlock
            <span className="text-transparent text-[50px] md:text-[70px] bg-clip-text bg-gradient-to-r from-orange-600 via-pink-600 to-fuchsia-600">
              {" "}
              Effective{" "}
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-700 via-pink-700 to-fuchsia-600">
              {" "}
              Cyberseccurity{" "}
            </span>
            Professional <br /> Development
          </h1>
          <p className="mt-4 text-gray-400 max-w-full md:max-w-2xl text-center md:text-left">
            Join SkillAdvance for Teams to better protect your organization and
            enhance your Salesforce capabilities. Invest in your employees,
            onboard new team members, and retain top talent. Baseline and
            benchmark your team’s skills, remediate gaps, and prepare for
            Salesforce certifications. Align with key industry frameworks and
            ensure your team’s expertise stays current—all within SkillAdvance.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center  sm:justify-start items-center ">
            <button className="bg-gradient-to-r from-orange-500 to-pink-500 px-8 py-3 rounded-md text-white hover:shadow-lg hover:shadow-pink-500/50 transition-shadow duration-300">
              Schedule a Demo
            </button>

            <a
              href="/"
              className="mt-4 sm:mt-0 sm:ml-4 text-white-400 hover:text-white"
            >
              Start Today &gt;
            </a>
          </div>
        </div>

        <div className="flex lg:w-4/5 justify-center py-0 mt-8 md:mt-28">
          {/* Change image with Salesforce later */}
          <img
            src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/668ba26005381ce421f76c04_Group%2039859-min-p-800.png"
            alt="Laptop with cybersecurity courses"
            className="w-full max-w-[800px] h-auto"
          />
        </div>
      </header>
      <div className="w-[80%]">
        <div className="text-center flex flex-col items-center mt-10 lg:mt-20 px-4 mb-20">
          <h1 className="text-2xl md:text-5xl text-center md:text-center">
            <span className="text-transparent text-[50px] md:text-[48px] bg-clip-text bg-gradient-to-r from-orange-600 via-pink-600 to-fuchsia-600">
              Leading
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-700 via-pink-700 to-fuchsia-600">
              {" "}
              Organizations{" "}
            </span>
            trust Salesforce to keep their teams <br /> sharp with advanced
            cybersecurity <br /> training and integration.
          </h1>

          <div className="relative mt-8 md:mt-12 h-[100px] md:h-[150px] w-full max-w-6xl">
            <Marquee
              className="h-full w-auto mx-auto overflow-hidden"
              direction="left"
              speed={100}
              delay={5}
            >
              {/* Add your logos here */}
              <div className="mx-8 md:mx-[60px]">
                {/* Change image with Salesforce later */}
                <img
                  className="h-[30px] md:h-[50px]"
                  src="https://clinicaltrialsbsva.com/wp-content/uploads/2017/07/cropped-logo-1.png"
                  alt="Logo 1"
                />
              </div>
              <div className="mx-8 md:mx-[60px]">
                <img
                  className="h-[30px] md:h-[50px]"
                  src="https://www.nicepng.com/png/full/395-3959971_verizon-logo-white-beige.png"
                  alt="Logo 2"
                />
              </div>
              <div className="mx-8 md:mx-[60px]">
                <img
                  className="h-[30px] md:h-[50px]"
                  src="https://white.logodownload.org/wp-content/uploads/2020/11/google-white-logo-1.png"
                  alt="Logo 3"
                />
              </div>
              <div className="mx-8 md:mx-[60px]">
                <img
                  className="h-[30px] md:h-[50px]"
                  src="https://biosciences.ecoexploratorio.org/wp-content/uploads/2023/08/AMGEN-logo-white-021fu.png"
                  alt="Logo 4"
                />
              </div>
              <div className="mx-8 md:mx-[60px]">
                <img
                  className="h-[30px] md:h-[50px]"
                  src="https://images.squarespace-cdn.com/content/v1/56b38e2aa3360ce530d55c24/2bf6f206-fc54-4067-9116-6a28f62a8dd1/Booz_Allen_logo_white-R-HiRes.png"
                  alt="Logo 5"
                />
              </div>
              <div className="mx-8 md:mx-[60px]">
                <img
                  className="h-[30px] md:h-[50px]"
                  src="https://companieslogo.com/img/orig/GD.D-18841bdb.png?t=1720244492"
                  alt="Logo 6"
                />
              </div>
            </Marquee>
            <div className="flex justify-center">
              <img
                src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/668ba83cca34696350f851a3_image%2055-min.png"
                alt="Salesforce Image"
                className="max-w-[70%]"
              />
            </div>

            <div className="absolute top-0 left-0 w-1/4 md:w-1/2 h-full bg-gradient-to-r from-black/50 to-transparent"></div>
            <div className="absolute top-0 right-0 w-1/4 md:w-1/2 h-full bg-gradient-to-l from-black/50 to-transparent"></div>
          </div>
        </div>

        <div className="block w-full px-[8.75rem] mt-20">
          {" "}
          <div className="flex flex-col items-center justify-center">
            <div>
              <div className="bg-black text-white text-center py-16 px-4">
                <h2 className="text-5xl md:text-6xl font-semibold mb-6">
                  Why Salesforce for Teams?
                </h2>
                <p className="text-lg text-gray-400 mb-12">
                  Provide team members with clarity on how to learn, grow, and
                  advance their careers within your organization.
                </p>
                <div className="flex flex-col md:flex-row justify-center gap-10">
                  <div className="max-w-xs">
                    <h3 className="text-4xl text-orange-500 font-bold mb-4">
                      80%
                    </h3>
                    <p className="text-gray-300">
                      of security professionals feel inadequately prepared to
                      defend their organization
                    </p>
                  </div>
                  <div className="hidden md:block h-28 border-l border-gray-600"></div>

                  <div className="max-w-xs">
                    <h3 className="text-4xl text-red-500 font-bold mb-4">
                      68%
                    </h3>
                    <p className="text-gray-300">
                      of security professionals don't believe their organization
                      provides the right training
                    </p>
                  </div>
                  <div className="hidden md:block h-28 border-l border-gray-600"></div>

                  <div className="max-w-xs">
                    <h3 className="text-4xl text-pink-500 font-bold mb-4">
                      70%
                    </h3>
                    <p className="text-gray-300">
                      of professionals claim their organization is impacted by
                      the security skills shortage
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-black text-white py-16 px-6 flex flex-col md:flex-row justify-center md:items-start gap-10">
                  <div className="flex flex-col items-center md:items-start">
                    <h2 className="text-4xl md:text-5xl font-semibold">
                      <span className="text-pink-500">People first,</span>{" "}
                      Security first
                    </h2>
                    <div className="mt-6 flex gap-4">
                      <button className="bg-gradient-to-r from-pink-500 to-orange-500 text-white py-3 px-6 rounded-full font-semibold hover:opacity-90 hover:shadow-[0px_0px_10px_purple,0px_0px_10px_#FF4D6D] duration-500">
                        Schedule a Demo
                      </button>
                      <button className="text-white-300 font-semibold hover:underline">
                        Start today →
                      </button>
                    </div>
                  </div>

                  <div className="max-w-2xl text-lg text-center md:text-left">
                    <p className="text-gray-400 mb-4">
                      Many companies provide “online training.” But in digital
                      transformation, that’s not enough. Now, more than ever,
                      companies need effective, hands-on training that prepares
                      teams to stay ahead of emerging trends, technologies, and
                      customer expectations.
                    </p>
                    <p className="text-gray-400">
                      With our baselining and benchmarking tools, role-aligned
                      Career Paths, and focused Certification Prep courses, your
                      team will shore up their skills and join a community of
                      over 4 million professionals worldwide. Partner with
                      Salesforce to unlock your team’s potential and protect
                      your organization from harm.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-black text-white text-xl py-16 px-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cards.map((card) => (
                      <div
                        key={card.id}
                        className="bg-[#111111] p-6 rounded-3xl shadow-lg flex flex-col"
                      >
                        <div className="w-16 h-16 flex items-center justify-center rounded-3xl bg-gradient-to-r from-pink-500 to-orange-500 text-white text-2xl font-semibold mb-4">
                          {card.id}
                        </div>

                        <h3 className="text-2xl font-semibold mb-4">
                          {card.title}
                        </h3>

                        <p className="text-gray-400">{card.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h1 className="text-2xl md:text-5xl text-center md:text-center">
                  Bonus Perks:
                  <span className="text-transparent text-[50px] md:text-[48px] bg-clip-text bg-gradient-to-r from-orange-600 via-pink-600 to-fuchsia-600">
                    Exclusive to
                  </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-700 via-pink-700 to-fuchsia-600">
                    {" "}
                    Salesforce for Teams{" "}
                  </span>
                </h1>
                <button className="bg-gradient-to-r from-pink-500 to-orange-500 text-white py-4 px-7 rounded-3xl font-semibold hover:opacity-90 mt-5 hover:shadow-[0px_0px_10px_purple,0px_0px_10px_#FF4D6D] duration-500">
                  Schedule a Demo
                </button>

                <div className="bg-black text-white text-xl py-16 px-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {secCards.map((secCards) => (
                      <div
                        key={secCards.id}
                        className="bg-[#111111] p-6 rounded-3xl shadow-lg flex flex-col"
                      >
                        <div className="w-16 h-16 flex items-center justify-center rounded-3xl bg-gradient-to-r from-pink-500 to-orange-500 text-white text-2xl font-semibold mb-4">
                          {secCards.id}
                        </div>

                        <h3 className="text-2xl font-semibold mb-4">
                          {secCards.title}
                        </h3>

                        <p className="text-gray-400 text-start">
                          {secCards.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <div className=" text-white min-h-screen p-6">
                  <div className="mb-8">
                    <h1 className="text-5xl">
                      Here's how Cybrary <br /> improves your <br /> employees'{" "}
                      <br /> cybersecurity training
                    </h1>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Questions Section */}
                    <div>
                      {questions.map((item, index) => (
                        <div
                          key={index}
                          className="border-b border-gray-800 py-12 pb-4 mb-4 cursor-pointer"
                        >
                          <div
                            className="flex justify-between items-center"
                            onClick={() => toggleQuestion(index)}
                          >
                            <h3 className="text-2xl">{item.question}</h3>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className={`h-6 w-6 transform transition-transform ${
                                openIndex === index ? "rotate-180" : ""
                              }`}
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          {openIndex === index && (
                            <p className="mt-3 text-gray-400">
                              {item.description}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-center items-center">
                      {/* Change image with Salesforce later */}

                      <img
                        src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64dcf01ddb7b5b826c960e93_demonstrate_cyber_capability_2x.webp"
                        alt="Illustration"
                        className="rounded-lg shadow-lg max-w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="text-white min-h-screen p-24">
                  <h1 className="text-center text-3xl md:text-5xl font-semibold mb-10">
                    Empower Your Team with <br />
                    <span className="text-pink-500">
                      Framework-Aligned Training Programs
                    </span>
                  </h1>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {threeCards.map((threeCards, index) => (
                      <div
                        key={index}
                        className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 w-56 mx-auto md:w-auto h-[38rem]"
                      >
                        <img
                          src={threeCards.img}
                          alt={threeCards.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4 flex flex-col h-full">
                          <h3 className="text-lg font-semibold mb-2">
                            {threeCards.title}
                          </h3>
                          <p className="text-gray-400 text-lg flex-grow overflow-hidden">
                            {threeCards.description}
                          </p>
                          <div className="">
                            <button className="text-pink-500 font-semibold hover:underline hover:shadow-[0px_0px_10px_purple,0px_0px_10px_#FF4D6D] duration-500">
                              Learn More &rarr;
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-gray-900 rounded-3xl text-white min-h-screen flex items-center justify-center p-8">
                  <div className="w-full max-w-6xl h-[80vh] grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col justify-center h-full">
                      <h2 className="text-4xl md:text-5xl font-semibold mb-6 leading-snug">
                        Read the Latest Research: The <br />
                        Myths of Training <br />
                        Salesforce Professionals
                      </h2>
                      <p className="text-gray-400 text-lg mb-6">
                        Training in Salesforce is vital for optimizing your
                        organization's CRM and operations, yet common myths
                        often prevent leadership from committing to structured
                        training programs. New research debunks these
                        misconceptions, demonstrating the value of investing in
                        targeted Salesforce training to drive efficiency and
                        success.
                      </p>
                      <button className="bg-gradient-to-r from-pink-500 to-orange-500 text-white py-4 px-8 rounded-lg font-semibold  text-xl transition-shadow self-start hover:shadow-[0px_0px_10px_purple,0px_0px_10px_#FF4D6D] duration-500">
                        Download Now
                      </button>
                    </div>

                    {/* Change Later with salesforce */}
                    <div className="h-full flex justify-center items-center relative">
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-pink-500 to-orange-500 rounded-lg -z-10"></div>
                      <img
                        src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/644d22f8944e63b87d2a09d4_Frame%2016.webp"
                        alt="Cybersecurity"
                        className="h-[80%] w-auto rounded-3xl shadow-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Remaining Part */}

              <div></div>
            </div>
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

export default Business;