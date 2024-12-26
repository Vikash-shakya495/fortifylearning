import React, { useState } from "react";
import {
    RiArrowRightSLine,
    RiGraduationCapFill,
    //   RiUserCommunityFill,
    RiTeamLine,
    RiCommunityLine,
} from "react-icons/ri";
import { RxDiscordLogo } from "react-icons/rx";
import { LiaChartBarSolid } from "react-icons/lia";
import { PiBuildingsBold, PiCertificateLight } from "react-icons/pi";
import { GiSkills } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import PricingPlans from './pricing/PricingPlans';
import SignupComponent from "../components/home/SignupComponent";
// import {  } from "react-icons/ri";


function Pricing() {
    const plansData = {
        Overview: [
            { feature: "Course & Labs Library", free: "Limited Access", pro: "✔", teams: "✔"}, 
            { feature: "Career Paths", free: "Limited Access", pro: "✔", teams: "✔"}, 
            { feature: "Skill Paths", free: "Limited Access", pro: "✔", teams: "✔"}, 
            { feature: "Certification Prep Paths", free: "Limited Access", pro: "✔", teams: "✔"}, 
            { feature: "Salesforce Readiness", free: "✘", pro: "✔", teams: "✔"}, 
            { feature: "Community", free: "✘", pro: "✔", teams: "✔"}, 
            { feature: "Baseline & Benchmark", free: "✘", pro: " ✘", teams: "✔"}, 
            { feature: "Team Insights & Analytics", free: "✘", pro: "✘", teams: "✔"}, 
        ],
        Core: [
            { feature: "Video Library", free: "✔", pro: "✔", teams: "✔"}, 
            { feature: "Assessments", free: "✔", pro: "✔", teams: "✔"}, 
            { feature: "Badges, XP & Levels", free: "✔", pro: "✔", teams: "✔"}, 
            { feature: "Hands-on Labs", free: "✘", pro: "✔", teams: "✔"}, 
            { feature: "Practice Tests", free: "✘", pro: "✔", teams: "✔"}, 
            { feature: "Digtial Credentials", free: "✘", pro: "coming soon", teams: "coming soon"}, 
        ],
        "Career Paths": [
            { feature: "Introduction to IT & Cybersecurity", free: "✘", pro: "✔", teams: "✔"}, 
            { feature: "SOC Analyst", free: "✘", pro: "✔", teams: "✔"}, 
            { feature: "Jr Penetration Tester", free: "✘", pro: "✔", teams: "✔"}, 
            { feature: "Security Engineer", free: "✘", pro: "coming soon", teams: "coming soon"}, 
            { feature: "Custom Career Paths", free: "✘", pro: "✘", teams: "✔"}, 
        ],
        "Salesforce Skills": [
            { feature: "Introduction to Salesforce", free: "✘", pro: "✔", teams: "✔"}, 
            { feature: "Salesforce Administrator", free: "✘", pro: "✔", teams: "✔"}, 
            { feature: "Salesforce Developer", free: "✘", pro: "✔", teams: "✔"}, 
            { feature: "Salesforce Consultant", free: "✘", pro: "✔", teams: "✔"}, 
            { feature: "Custom Salesforce Career Paths", free: "coming soon", pro: "coming soon", teams: "coming soon"}, 
        ],
        "Certification Prep": [
            { feature: "40+ Certification Video Courses", free: "✔", pro: "✔", teams: "✔"}, 
            { feature: "CEUs/CPEs (Continuing Education)", free: "✔", pro: "✔", teams: "✔"}, 
            { feature: "Test Readiness Programs (Labs & Practice Tests)", free: "✘", pro: "✔", teams: "✔"}, 
            { feature: "Certification Insights", free: "✘", pro: "✘", teams: "✔"}, 
        ],
        "Cyber Threat-Readiness": [
            { feature: "CVE Emulation", free: "✘", pro: "✔", teams: "✔"}, 
            { feature: "Threat Actor Campaigns", free: "✘", pro: "✔", teams: "✔"}, 
            { feature: "Salesforce Training & Certification", free: "✘", pro: "✔", teams: "✔"}, 
            { feature: "Threat Readiness Insights", free: "✘", pro: "✘", teams: "✔"}, 
        ],
        Community: [
            { feature: "Forums", free: "✔", pro: "✔", teams: "✔"}, 
            { feature: "Mentor & Career Coaching", free: "✘", pro: "✔", teams: "✔"}, 
        ],
        Teams: [
            { feature: "Onboard New Team Members", free: "✘", pro: "✘", teams: "✔"}, 
            { feature: "Create & Customize Career Paths", free: "✘", pro: "✘", teams: "✔"}, 
            { feature: "50+ Out-of-the-Box Training Paths", free: "✘", pro: "✘", teams: "✔"}, 
            { feature: "Baseline & Benchmark Skill Capabilities  (NEW)", free: "✘", pro: "✘", teams: "✔"}, 
            { feature: "Align to Industry Frameworks (ATT&CK, NICE CWF, DoD 8140, MITRE)", free: "✘", pro: "✘", teams: "✔"}, 
            { feature: "Scheduled Reporting", free: "✘", pro: "✘", teams: "✔"}, 
            { feature: "Data Export", free: "✘", pro: "✘", teams: "✔"}, 
            { feature: "Usage & Management Analytics", free: "✘", pro: "✘", teams: "✔"}, 
            { feature: "User Roles & Permissions", free: "✘", pro: "✘", teams: "✔"}, 
            { feature: "Group Management", free: "✘", pro: "✘", teams: "✔"}, 
            { feature: "Cybersecurity Training Advisor", free: "✘", pro: "✘", teams: "✔ 10+ Team members"}, 
            { feature: "Single Sign-On (SSO)", free: "✘", pro: "✘", teams: "✔ 10+ Team members"}, 
            { feature: "LMS Integration", free: "✘", pro: "✘", teams: "✔ 10+ Team members"}, 
            { feature: "Data API", free: "✘", pro: "✘", teams: "✔ 10+ Team members"}, 
        ],
    };

    const sectionIcons = {
        Overview: <RiGraduationCapFill className="text-2xl z-10" />,
        Core: <RxDiscordLogo className="text-2xl z-10" />,
        "Career Paths": <LiaChartBarSolid className="text-2xl z-10" />,
        "Cyber Skills": <GiSkills className="text-2xl z-10" />,
        "Certification Prep": <PiCertificateLight className="text-2xl z-10" />,
        "Cyber Threat-Readiness": <PiBuildingsBold className="text-2xl z-10" />,
        Community: <RiCommunityLine className="text-2xl z-10" />,
        Teams: <RiTeamLine className="text-2xl z-10" />,
    };


    const [openSections, setOpenSections] = useState(["Overview"]);

    const toggleSection = (section) => {
        setOpenSections((prev) =>
            prev.includes(section)
                ? prev.filter((s) => s !== section) // Close section
                : [...prev, section] // Open section
        );
    };


    return (
        <div className='mt-40'>
            <PricingPlans />
            <div className="mt-24 w-full bg-cover bg-center bg-opacity-50" style={{ backgroundImage: "url('https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/65ae205da78ed7f6ff3adec2_8.png')" }}>
                <div className="w-4/5 mx-auto py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
                    <div>
                        <h2 className='text-5xl'>
                            What are the differences between an <span className='text-pink-500'>Insider Pro &</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-pink-600 to-fuchsia-600">Teams Plan?</span>
                        </h2>
                    </div>
                    <div>
                        <h2 className='text-5xl flex flex-wrap'>
                            FortifyLearning<span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-fuchsia-600">Insider Pro</span>
                        </h2>
                        <p className='text-gray-100 font-semibold text-xl mt-4'>For Individuals</p>
                        <p className='text-lg mt-4 text-gray-400'>
                            <span className='text-gray-100 font-semibold'>FortifyLearning Insider Pro </span>
                            (CIP) contains the tools and resources individuals need to effectively prepare for cybersecurity jobs.
                            CIPs have access to industry framework aligned Career Paths, Skill Paths, and Certification Prep, as well as Credly-validated digital badges, threat-informed content, and much more!
                        </p>
                        <NavLink to='/insider-pro'>
                            <button className="px-6 py-3 w-full flex items-center justify-center mt-10 text-lg bg-transparent border rounded-2xl">
                                Explore more <RiArrowRightSLine />
                            </button>
                        </NavLink>
                    </div>
                    <div>
                        <h2 className='text-5xl flex flex-wrap'>
                            FortifyLearning<span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-fuchsia-600">For Teams</span>
                        </h2>
                        <p className='text-lg mt-4 text-gray-400'>
                            <span className='text-gray-100 font-semibold'>FortifyLearning For Teams </span>
                            includes all that CIP offers, plus the tools and functionality to build, manage, and scale a cybersecurity training program across an organization.
                        </p>
                        <ul className="mt-4 space-y-2 text-gray-100">
                            <li className='flex items-center font-semibold'>
                                <img className='h-5 w-5 mr-2' src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/668bdbd0cefcee5c0bdce079_Group%20313.svg" alt="" />
                                Utilize and customize repeatable onboarding programs
                            </li>
                            <li className='flex items-center font-semibold'>
                                <img className='h-5 w-5 mr-2' src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/668bdbd0cefcee5c0bdce079_Group%20313.svg" alt="" />
                                Baseline and benchmark your team's skills
                            </li>
                            <li className='flex items-center font-semibold'>
                                <img className='h-5 w-5 mr-2' src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/668bdbd0cefcee5c0bdce079_Group%20313.svg" alt="" />
                                Easily remediate skill gaps
                            </li>
                            <li className='flex items-center font-semibold'>
                                <img className='h-5 w-5 mr-2' src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/668bdbd0cefcee5c0bdce079_Group%20313.svg" alt="" />
                                Prepare your team for certifications
                            </li>
                            <li className='flex items-center font-semibold'>
                                <img className='h-5 w-5 mr-2' src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/668bdbd0cefcee5c0bdce079_Group%20313.svg" alt="" />
                                Assign tailored coursework aligned to key industry frameworks
                            </li>
                            <li className='flex items-center font-semibold'>
                                <img className='h-5 w-5 mr-2' src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/668bdbd0cefcee5c0bdce079_Group%20313.svg" alt="" />
                                Stay ahead of existing threats and better protect your organization
                            </li>
                        </ul>
                        <NavLink to='/business'>
                            <button className="px-6 py-3 w-full flex items-center justify-center mt-10 text-lg bg-transparent border rounded-2xl">
                                Explore more <RiArrowRightSLine />
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row w-4/5 items-center mx-auto mt-20 gap-10 lg:gap-20">
                <div className="w-full lg:w-2/5 text-center lg:text-left">
                    <h2 className="text-4xl sm:text-5xl flex flex-wrap">
                        FortifyLearning
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-fuchsia-600">
                            Risk Impact
                        </span>
                    </h2>
                    <p className="text-gray-400 mt-4">
                        How does your team's activity on Cybrary reduce your company's cyber risk?
                        To decrease your risk impact by 2%, your team needs to average just 4 hours of learning per month.
                    </p>
                </div>
                <div className="w-full lg:w-3/5">
                    <img
                        src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/67325bea05c0f86df8ac7d33_Frame%2096093-min-p-1080.png"
                        alt=""
                        className="w-full h-auto"
                    />
                </div>
            </div>

            <div className="mt-20 mx-auto bg-gradient-to-b from-gray-900 to-black text-white py-12">
                <h1 className="text-4xl sm:text-5xl text-center mb-10 mt-6">Compare our plans</h1>
                <div className="w-11/12 w-5/5 sm:w-4/5 mx-auto bg-gray-950 p-2 sm:p-10 rounded-3xl overflow-y-auto">
                    <div className="overflow-x-auto">
                        <table className="w-full mt-3 border-b-2 mb-4 border-gray-700">
                            <thead>
                                <tr className="">
                                    <th className="border-gray-700 p-2 text-left">Plan Features</th>
                                    <th className="border-gray-700 p-2">
                                        <h2 className="flex flex-col text-center">
                                            FortifyLearning
                                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-fuchsia-600">
                                                Free Edition
                                            </span>
                                        </h2>
                                    </th>
                                    <th className="border-gray-700 p-2">
                                        <h2 className="flex flex-col text-center">
                                            FortifyLearning
                                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-fuchsia-600">
                                                Insider Pro
                                            </span>
                                        </h2>
                                    </th>
                                    <th className="border-gray-700 p-2">
                                        <h2 className="flex flex-col text-center">
                                            FortifyLearning
                                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-fuchsia-600">
                                                For Teams
                                            </span>
                                        </h2>
                                    </th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                    {Object.entries(plansData).map(([section, plans]) => (
                        <div key={section} className="mb-4">
                            <button
                                onClick={() => toggleSection(section)}
                                className="w-full py-4 rounded-lg flex gap-4 sm:gap-6 items-center"
                            >
                                <span>
                                    <RiArrowRightSLine className="text-pink-500 text-2xl sm:text-3xl" />
                                </span>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 relative flex justify-center items-center rounded-3xl">
                                        <img
                                            className="absolute top-0 left-0 z-2"
                                            src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64369e04d29c9d9b21942d66_home-icon-background.webp"
                                            alt="Star"
                                        />
                                        {sectionIcons[section]}
                                    </div>
                                    <span className="font-semibold text-sm sm:text-base">{section}</span>
                                </div>
                            </button>
                            {openSections.includes(section) && (
                                <div className="overflow-x-auto">
                                    <table className="w-full mt-3  border-collapse">
                                        <tbody className="text-center">
                                            {plans.map((plan, index) => (
                                                <tr key={index}>
                                                    <td className="px-4 sm:px-8 py-2 text-left sm:w-1/4 text-sm sm:text-base">{plan.feature}</td>
                                                    <td className="px-4 sm:px-8 py-2 text-sm sm:w-1/4 sm:text-base">{plan.free}</td>
                                                    <td className="px-4 sm:px-8 py-2 text-sm sm:w-1/4 sm:text-base">{plan.pro}</td>
                                                    <td className="px-4 sm:px-8 py-2 text-sm sm:w-1/4 sm:text-base">{plan.teams}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full mt-24 flex justify-center">
                <SignupComponent />
            </div>
        </div>
    )
}

export default Pricing;
