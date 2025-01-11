import React, { useState } from "react";
import "../../App.css";
import SignupComponent from "../../components/home/SignupComponent";

// Ye hai SideBar ka content
const Sidebar = ({ topics, activeTopic, setActiveTopic }) => {
  return (
    <div className="w-2/5 bg-black text-gray-400 h-screen p-4 overflow-y-scroll sticky top-0 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 text-lg">
      <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
      <ul>
        {topics.map((topic, index) => (
          <li
            key={index}
            className={`mb-2 cursor-pointer hover:text-gray-400 ${
              activeTopic === topic ? "text-white text-xl" : ""
            }`}
            onClick={() => setActiveTopic(topic)}
          >
            {topic}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Quiz Card Component
const QuizCard = ({ question, options, answer, breakdown }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="bg-black p-6 rounded-lg shadow-lg mb-4 relative">
      <h2 className="text-lg font-bold mb-4">{question}</h2>
      <ul className="mb-4">
        {options.map((option, index) => (
          <li key={index} className="mb-2">
            {index + 1}. {option}
          </li>
        ))}
      </ul>
      <button
        onClick={() => setShowAnswer(!showAnswer)}
        className="bg-gray-950 text-white px-4 py-2 rounded"
      >
        {showAnswer ? "Hide Answer and Breakdown" : "Show Answer and Breakdown"}
      </button>
      <div
        className={`mt-4 p-4 rounded-lg bg-gray-900 border border-gray-400 border-[1px] text-gray-300 font-bold transition-all duration-500 ease-in-out ${
          showAnswer ? "blur-0" : "blur-sm"
        }`}
      >
        Answer: {answer}
        <br />
        Breakdown: {breakdown}
      </div>
    </div>
  );
};


function ComptiaNetworkPlus() {
  const topics = [
    "Basic Network Components",
    "Dynamic NAT",
    "NAT Basics",
    "Exterior Gateway Protocols (EGP)",
    "Preventing Routing Loops",
    "Believability of a Route",
    "Default Route",
    "Destination IP Address",
    "IPv6 Address Abbreviation",
    "Classful Masks",
    "Network Subnetting",
    "Prefix Notation",
    "IP Address Assignment",
    "IP Address Classes",
    "Decimal To Binary Conversion",
    "Binary To Decimal Conversion",
    "Network Authentication",
    "Packet Sniffing Fundamentals",
    "Power Over Ethernet Specifications",
    "Spanning Tree Protocol Basics",
    "VLAN Essentials",
    "Ethernet Collision Detection and Handling",
    "Ethernet Origins",
    "Proxy Server Benefits",
    "Specialized Network Devices",
  ];

  const questions = {
    "Basic Network Components": {
      question:
        "Which of the following is a component that provides resources over a network?",
      options: ["Client", "LAN", "Router", "Server"],
      answer: "The correct answer is 4.",
      breakdown:
        "Breakdown: A server provides or “serves” up resources to a network. Examples of resources are access to email, pages on a web server, or files on a file server.",
    },
    "Dynamic NAT": {
      question:
        "What NAT variation automatically assigns an inside global address to a device on the private network from a pool of available addresses?",
      options: ["SNAT", "DNAT", "PAT", "GNAT"],
      answer: "The correct answer is 2.",
      breakdown:
        "Breakdown: Dynamic NAT (DNAT) automatically assigns inside global IP addresses from a pool of addresses as opposed to Static NAT (SNAT) where manual (static) assignment is performed.",
    },
  };

  const [activeTopic, setActiveTopic] = useState(topics[0]);

  return (
    <div>
      
      <div
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6475555dc9934aa2462b8430_comptia.webp')",
        }}
      >
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-1/2 mx-32 px-8">
          <span className="bg-pink-600 rounded-3xl px-2 py-1">
            CAREER RESOURCES
          </span>
          <h1 className="text-7xl text-white">
            CompTIA Network+ Certification Study Guide for Network+ Exam
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            Need more than a study guide? Cybrary's Network Plus course can help
            you learn everything you need to take the certification exam!
          </p>
        </div>
      </div>

      {/* Quiz Section */}
      <div className="flex justify-center my-16">
        <div className="flex w-[70%] items-center justify-center bg-black text-white">
          <Sidebar
            topics={topics}
            activeTopic={activeTopic}
            setActiveTopic={setActiveTopic}
          />
          <div className="w-3/4 p-8 bg-black h-screen overflow-y-auto">
            {questions[activeTopic] ? (
              <QuizCard
                question={questions[activeTopic].question}
                options={questions[activeTopic].options}
                answer={questions[activeTopic].answer}
                breakdown={questions[activeTopic].breakdown}
              />
            ) : (
              <p className="text-gray-500">Select a topic from the sidebar.</p>
            )}
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

export default ComptiaNetworkPlus;