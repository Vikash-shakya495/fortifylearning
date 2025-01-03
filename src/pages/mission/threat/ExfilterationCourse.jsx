// course/cve-series-couchdb-rce-cve-2022-24706
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { togglePopup } from "../../../store/signupPopupSlice";
import SignupPopup from "../../../loginSystem/SignupPopup";
import { FiShare2 } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";

import SignupComponent from "../../../components/home/SignupComponent";

function ExfilterationCourse() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  // popUp share button
  const dispatch = useDispatch();
  const url = "https://www.cybrary.it/career-path/network-engineer";

  const [showPopup, setShowPopup] = useState(false);

  const sharePopup = () => {
    setShowPopup(!showPopup);
  };

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        alert("Link copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };
  return (
    <div className="mt-44 md:w-full">
      <div className="flex flex-col md:flex-row items-center justify-center md:w-full  text-white py-8 px-12 md:px-44 gap-12">
        <div className="w-full md:w-1/2 md:mb-0 text-center md:text-left flex flex-col">
          <h2 className="text-3xl sm:text-4xl md:mb-12 md:text-6xl">
          Exfiltration and Extortion
          </h2>
          <p className="text-gray-400">
          Threat actors will use stolen data exfiltrated from victim systems to extort organizations. Once they gain a foothold, they delete critical system files and threaten to release the data or disrupt operations if the victims do not pay up. Understanding these techniques is vital to defending your organization from such attacks.
          </p>
          <div className="flex items-center text-xl text-gray-500 mt-4 gap-2">
            <FiShare2 className="text-2xl text-gray-400" />
            <button onClick={sharePopup} className="text-gray-500">
              Share
            </button>
          </div>
          <div className="flex items-center mt-4">
            <button
              onClick={() => dispatch(togglePopup())}
              className="w-1/4 py-3 bg-gradient-to-r from-red-500 via-pink-500 to-fuchsia-500 rounded-2xl text-white font-semibold hover:shadow-[0px_0px_10px_purple,0px_0px_10px_#FF4D6D] duration-500"
            >
              Enroll Now
            </button>
            <NavLink to="/business">
              <button className="px-6 py-4 rounded-xl bg-black flex items-center gap-4">
                Need to train your team? Learn more <FaArrowRight />
              </button>
            </NavLink>
          </div>
          {showPopup && (
            <div className="fixed top-0 left-32 h-full bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-gray-900 p-8 flex flex-col gap-8 rounded-lg">
                <h3 className="text-3xl flex items-center justify-between">
                  <span>Share</span>
                  <button onClick={sharePopup} className="text-white">
                    <RxCross2 />
                  </button>
                </h3>
                <div className="flex gap-4">
                  <button className="border p-3 rounded-full">
                    <FaFacebookSquare className="text-3xl text-white" />
                  </button>
                  <button className="border p-3 rounded-full">
                    <FaSquareTwitter className="text-3xl text-white" />
                  </button>
                  <button className="border p-3 rounded-full">
                    <BsLinkedin className="text-3xl text-white" />
                  </button>
                  <button className="border p-3 rounded-full">
                    <MdOutlineMarkEmailRead className="text-3xl text-white" />
                  </button>
                </div>
                <div className="flex items-center gap-4">
                  <input
                    type="text"
                    readOnly
                    value={url}
                    className="bg-gray-900 border border-gray-500 px-4 py-2 text-white rounded w-2/3 mt-4"
                  />
                  <button
                    onClick={copyToClipboard}
                    className="mt-4 bg-purple-600 py-2 px-2  w-1/3 rounded-lg text-white hover:bg-purple-700"
                  >
                    Copy Link
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="bg-white text-black p-8 rounded-3xl shadow-lg w-full md:w-1/2 h-[auto] max-w-lg mx-auto">
          <h2 className="text-3xl md:text-2xl mb-6">
            Create a free account to start exploring the platform.
          </h2>
          <div className="w-full flex px-3 py-2 mb-6 rounded-3xl border border-gray-600 text-black focus-within:ring-2 focus-within:ring-pink-500">
            <input
              type="email"
              placeholder="name@email.com"
              className="w-full p-1 rounded text-xl placeholder-gray-400 focus:outline-none"
            />
            <button
              onClick={() => dispatch(togglePopup())}
              className="w-full py-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl text-white font-semibold hover:shadow-[0px_0px_10px_purple,0px_0px_10px_#FF4D6D] duration-500 "
            >
              Create a Free Account
            </button>
          </div>
          <SignupPopup />
          <div className="flex justify-around items-center mt-6">
            <span className="text-gray-600">or sign up with</span>
            <span className="flex gap-4">
              <button
                onClick={() => (window.location.href = "https://google.com")}
                className="w-12 h-12 border border-black p-1 rounded flex items-center justify-center cursor-pointer"
                aria-label="Sign up with Google"
              >
                <img
                  src="https://lh3.googleusercontent.com/qnaJEbFIpvsWJm2KrRI_GIvz1yZdXntgEsCZxy-1pVZi244bCk1RFwdk0ZBRmmvdHiUl6sIa_tsmskL5WLKiigp2AMsIIxinOJNf39qCmacViRGXIOY"
                  alt="Google"
                />
              </button>
              <button
                onClick={() => (window.location.href = "https://apple.com")}
                className="w-12 h-12 border border-black p-1 rounded flex items-center justify-center cursor-pointer"
                aria-label="Sign up with Apple"
              >
                <img
                  src="https://static.vecteezy.com/system/resources/previews/019/136/322/non_2x/amazon-logo-amazon-icon-free-free-vector.jpg"
                  alt="Apple"
                />
              </button>
              <button
                onClick={() => (window.location.href = "https://microsoft.com")}
                className="w-12 h-12 border border-black p-1 rounded flex items-center justify-center cursor-pointer"
                aria-label="Sign up with Microsoft"
              >
                <img
                  src="https://static-00.iconduck.com/assets.00/microsoft-icon-1024x1024-5w26drb6.png"
                  alt="Microsoft"
                />
              </button>
            </span>
          </div>
          <div className="w-full flex justify-between text-lg p-6 mt-8 border-t">
            <NavLink to="/signup" className="hover:underline">
              Sign in
            </NavLink>
            <NavLink to="/sso-options" className="hover:underline">
              View all SSO options
            </NavLink>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col my-20">
        <h1 className="text-5xl">Campaign Ontline</h1>
        <p className="text-center my-5 text-lg text-gray-400">
          Threat Actor Campaigns are comprised of multiple MITRE ATT&CK aligned
          courses. Click <br /> on a course below to learn more.
        </p>
      </div>
      <div className="w-[65%] mx-auto bg-[#13171c] text-white p-6  rounded-3xl py-10 px-8 flex items-center space-x-24">
        <div className="w-1/3 border-gray-700 border-[1px]  rounded-lg  ">
          <img
            src="https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c00494fdd269537ab6c9_Registry_Run_Keys.png"
            alt="Registry Run Keys"
            className="rounded-lg object-cover"
          />
          <div className="flex justify-start mt-2">
            <span className="mx-3 px-3 rounded-3xl bg-pink-600">COURSE</span>
            <span className="rounded-3xl bg-black px-3">0H:50M</span>
            <span className=" bg-black px-3 rounded-3xl">4 CEUS</span>
          </div>
          <h2 className="mt-4 text-xl font-bold px-4">Registry Run Keys</h2>
          <p className="mt-2 text-base text-white font-normal line-clamp-3 overflow-hidden px-4  my-3">
            Many organizations do not monitor for additions to the Windows
            Registry that could be used to trigger autostart execution on system
            boot or logon. This allows adversaries to launch programs that run
            at higher privileges and paves the way for more damaging activity.
            Learn how to detect and mitigate this activity to secure your
            network.
          </p>
        </div>

        <div className="w-2/3">
          <h3 className="text-3xl font-semibold">Overview</h3>
          <p className="mt-4 text-lg text-white font-normal">
            Many organizations do not monitor for additions to the Windows
            Registry that could be used to trigger autostart execution on system
            boot or logon. This allows adversaries to launch programs that run
            at higher privileges and paves the way for more damaging activity.
            Learn how to detect and mitigate this activity to secure your
            network.
          </p>
          <button className="mt-6 bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 px-5 rounded-2xl w-full">
            Start Learning
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center my-4 ">
        <div className="border-l-2 border-dashed border-gray-500 h-24"></div>
      </div>

      <div className="w-[65%] mx-auto bg-[#13171c] text-white p-6  rounded-3xl py-10 px-8 flex items-center space-x-24">
        <div className="w-1/3 border border-gray-700 border-[1px]  rounded-lg  ">
          <img
            src="https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c009743e430cbf97f53e_Lateral_Tool_Transfer.png"
            alt="Lateral Tool Transfer"
            className="rounded-lg object-cover"
          />
          <div className="flex justify-start mt-2">
            <span className="mx-3 px-3 rounded-3xl bg-pink-600">COURSE</span>
            <span className="rounded-3xl bg-black px-3">0H:50M</span>
            <span className=" bg-black px-3 rounded-3xl">4 CEUS</span>
          </div>
          <h2 className="mt-4 text-xl font-bold px-4">Lateral Tool Transfer</h2>
          <p className="mt-2 text-base text-white font-normal line-clamp-3 overflow-hidden px-4  my-3">
            Once adversaries compromise your network, they can transfer tools
            between systems in order to stage them for later use or to support
            lateral movement. They may use file sharing protocols or copy files
            with existing tools like scp, sftp and ftp. Learn how to spot and
            mitigate this behavior so you can stop adversaries in their tracks.
          </p>
        </div>

        <div className="w-2/3">
          <h3 className="text-3xl font-semibold">Overview</h3>
          <p className="mt-4 text-lg text-white font-normal">
            Once adversaries compromise your network, they can transfer tools
            between systems in order to stage them for later use or to support
            lateral movement. They may use file sharing protocols or copy files
            with existing tools like scp, sftp and ftp. Learn how to spot and
            mitigate this behavior so you can stop adversaries in their tracks.
          </p>
          <button className="mt-6 bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 px-5 rounded-2xl w-full">
            Start Learning
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center my-4 ">
        <div className="border-l-2 border-dashed border-gray-500 h-24"></div>
      </div>

      <div className="w-[65%] mx-auto bg-[#13171c] text-white p-6  rounded-3xl py-10 px-8 flex items-center space-x-24">
        <div className="w-1/3 border border-gray-700 border-[1px]  rounded-lg  ">
          <img
            src="https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c006743e430cbf97f4c0_Obtain_Capabilities__Tool.png"
            alt="Obtain Capabilities: Tool"
            className="rounded-lg object-cover"
          />
          <div className="flex justify-start mt-2">
            <span className="mx-3 px-3 rounded-3xl bg-pink-600">COURSE</span>
            <span className="rounded-3xl bg-black px-3">0H:50M</span>
            <span className=" bg-black px-3 rounded-3xl">4 CEUS</span>
          </div>
          <h2 className="mt-4 text-xl font-bold px-4">
            Obtain Capabilities: Tool{" "}
          </h2>
          <p className="mt-2 text-base text-white font-normal line-clamp-3 overflow-hidden px-4  my-3">
            While you may be prepared to detect the use of malware on your
            system, what if an adversary uses a legitimate software tool for a
            nefarious purpose? Adversaries may buy or steal software and use it
            in unexpected ways. Learn how adversaries leverage this technique so
            you can defend your organization.
          </p>
        </div>

        <div className="w-2/3">
          <h3 className="text-3xl font-semibold">Overview</h3>
          <p className="mt-4 text-lg text-white font-normal">
            While you may be prepared to detect the use of malware on your
            system, what if an adversary uses a legitimate software tool for a
            nefarious purpose? Adversaries may buy or steal software and use it
            in unexpected ways. Learn how adversaries leverage this technique so
            you can defend your organization.
          </p>
          <button className="mt-6 bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 px-5 rounded-2xl w-full">
            Start Learning
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center my-4 ">
        <div className="border-l-2 border-dashed border-gray-500 h-24"></div>
      </div>

      <div className="w-[65%] mx-auto bg-[#13171c] text-white p-6  rounded-3xl py-10 px-8 flex items-center space-x-24">
        <div className="w-1/3 border border-gray-700 border-[1px]  rounded-lg  ">
          <img
            src="https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c00d743e430cbf97f5f4_Scheduled_Task.png"
            alt="Scheduled Task"
            className="rounded-lg object-cover"
          />
          <div className="flex justify-start mt-2">
            <span className="mx-3 px-3 rounded-3xl bg-pink-600">COURSE</span>
            <span className="rounded-3xl bg-black px-3">0H:50M</span>
            <span className=" bg-black px-3 rounded-3xl">4 CEUS</span>
          </div>
          <h2 className="mt-4 text-xl font-bold px-4">Scheduled Task</h2>
          <p className="mt-2 text-base text-white font-normal line-clamp-3 overflow-hidden px-4  my-3">
            Some organizations do not configure their operating systems and
            account management to properly protect the use of task scheduling
            functionality. As a result, adversaries can abuse this capability to
            execute malicious code on a victim’s system. Get hands-on practice
            detecting this technique so you can protect your organization.
          </p>
        </div>

        <div className="w-2/3">
          <h3 className="text-3xl font-semibold">Overview</h3>
          <p className="mt-4 text-lg text-white font-normal">
            Some organizations do not configure their operating systems and
            account management to properly protect the use of task scheduling
            functionality. As a result, adversaries can abuse this capability to
            execute malicious code on a victim’s system. Get hands-on practice
            detecting this technique so you can protect your organization.
          </p>
          <button className="mt-6 bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 px-5 rounded-2xl w-full">
            Start Learning
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center my-4 ">
        <div className="border-l-2 border-dashed border-gray-500 h-24"></div>
      </div>

      <div className="w-[65%] mx-auto bg-[#13171c] text-white p-6  rounded-3xl py-10 px-8 flex items-center space-x-24">
        <div className="w-1/3 border border-gray-700 border-[1px]  rounded-lg  ">
          <img
            src="https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c00b743e430cbf97f5bf_User_Discovery.png"
            alt="User Discovery"
            className="rounded-lg object-cover"
          />
          <div className="flex justify-start mt-2">
            <span className="mx-3 px-3 rounded-3xl bg-pink-600">COURSE</span>
            <span className="rounded-3xl bg-black px-3">0H:50M</span>
            <span className=" bg-black px-3 rounded-3xl">4 CEUS</span>
          </div>
          <h2 className="mt-4 text-xl font-bold px-4">User Discovery</h2>
          <p className="mt-2 text-base text-white font-normal line-clamp-3 overflow-hidden px-4  my-3">
            Once on a victim's system, adversaries will perform user discovery
            to determine information, such as the primary user’s identity and
            capabilities. They may seek out users with access to remote systems
            so they can cast their net wider. Discover the attacker instead of
            the other way around with this dynamic, lab-based course!
          </p>
        </div>

        <div className="w-2/3">
          <h3 className="text-3xl font-semibold">Overview</h3>
          <p className="mt-4 text-lg text-white font-normal">
            Once on a victim's system, adversaries will perform user discovery
            to determine information, such as the primary user’s identity and
            capabilities. They may seek out users with access to remote systems
            so they can cast their net wider. Discover the attacker instead of
            the other way around with this dynamic, lab-based course!
          </p>
          <button className="mt-6 bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 px-5 rounded-2xl w-full">
            Start Learning
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center my-4 ">
        <div className="border-l-2 border-dashed border-gray-500 h-24"></div>
      </div>

      <div className="w-[65%] mx-auto bg-[#13171c] text-white p-6  rounded-3xl py-10 px-8 flex items-center space-x-24">
        <div className="w-1/3 border border-gray-700 border-[1px]  rounded-lg  ">
          <img
            src="https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6468c00f7d5c861ce9d4675a_Local_Accounts.png"
            alt="Local Accounts"
            className="rounded-lg object-cover"
          />
          <div className="flex justify-start mt-2">
            <span className="mx-3 px-3 rounded-3xl bg-pink-600">COURSE</span>
            <span className="rounded-3xl bg-black px-3">0H:50M</span>
            <span className=" bg-black px-3 rounded-3xl">4 CEUS</span>
          </div>
          <h2 className="mt-4 text-xl font-bold px-4">Local Accounts</h2>
          <p className="mt-2 text-base text-white font-normal line-clamp-3 overflow-hidden px-4  my-3">
            Organizations that do not enforce strong password policies and audit
            privileged account management can fall victim to attackers who
            leverage access to local accounts. With it, they can gain initial
            access, persistence, privilege escalation, or defense evasion. Learn
            how to detect and prevent this type of activity in this dynamic
            lab-based course.
          </p>
        </div>

        <div className="w-2/3">
          <h3 className="text-3xl font-semibold">Overview</h3>
          <p className="mt-4 text-lg text-white font-normal">
            Organizations that do not enforce strong password policies and audit
            privileged account management can fall victim to attackers who
            leverage access to local accounts. With it, they can gain initial
            access, persistence, privilege escalation, or defense evasion. Learn
            how to detect and prevent this type of activity in this dynamic
            lab-based course.
          </p>
          <button className="mt-6 bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 px-5 rounded-2xl w-full">
            Start Learning
          </button>
        </div>
      </div>

      {/* Signup Section */}
      <div className="w-full mt-24 flex justify-center">
        <SignupComponent />
      </div>
    </div>
  );
}

export default ExfilterationCourse;