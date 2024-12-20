import React, { useState } from 'react';
import cybraryLogo from '../../assets/cybraryLogo.png';
import { RiShoppingBag4Line, RiTeamFill, RiQuestionAnswerLine } from "react-icons/ri";
import { GiSkills, GiTeamIdea, GiProgression, GiFamilyHouse } from "react-icons/gi";
import { PiCertificateBold, PiTargetLight, PiBrowsersLight } from "react-icons/pi";
import { MdOutlineForum, MdCompareArrows } from "react-icons/md";
import { BsShieldCheck } from "react-icons/bs";
import { DiGitCompare } from "react-icons/di";
import { IoMdPerson } from "react-icons/io";
import { TbTargetArrow } from "react-icons/tb";
import { BiSolidBusiness } from "react-icons/bi";
import { SiFramework } from "react-icons/si";
import { NavLink } from 'react-router-dom';

const dropdownData = {
    catalog: [
        { icon: <RiShoppingBag4Line className='text-2xl mr-2' />, name: 'Career Paths', description: 'Launch or advance your career with curated collections of courses, labs, and more.', link: '/career-path' },
        { icon: <GiSkills className='text-2xl mr-2' />, name: 'Skill Paths', description: 'Launch or advance your career with curated collections of courses, labs, and more.', link: '/skill-paths' },
        { icon: <PiCertificateBold className='text-2xl mr-2' />, name: 'Certification Prep', description: 'Prepare for and maintain leading cybersecurity certifications.', link: '/certifications' },
        { icon: <PiTargetLight className='text-2xl mr-2' />, name: 'Mission Readiness', description: 'Learn how to detect and mitigate the latest threats and vulnerabilities.', link: '/mitre-attack' },
        { icon: <PiBrowsersLight className='text-2xl mr-2' />, name: 'Browse the Catalog', link: '/catalog' },
        { icon: <RiQuestionAnswerLine className='text-2xl mr-2' />, name: 'Instructors', link: '/instructor' },
    ],
    individuals: [
        { icon: <RiShoppingBag4Line className='text-2xl mr-2' />, name: 'Career Paths', description: 'Launch or advance your career with curated collections of courses, labs, and more.', link: '/career-path' },
        { icon: <MdOutlineForum className='text-2xl mr-2' />, name: 'Forums', description: 'Discuss all things cybersecurity for free among the vast Cybrary community.', link: '/forum' },
        { icon: <BsShieldCheck className='text-2xl mr-2' />, name: 'Free Access', description: 'Get a taste of the catalog with certification prep, introductory courses, and more.', link: '/free-content' },
        { icon: <GiProgression className='text-2xl mr-2' />, name: 'Insider Pro', description: 'Everything you need to learn, practice, and prove your cybersecurity skills.', link: '/cybrary-insider-pro' },
        { icon: <RiTeamFill className='text-2xl mr-2' />, name: 'For Teams', description: 'Build your team’s cybersecurity skills and achieve new certifications, all in one place.', link: '/business' },
        { icon: <DiGitCompare className='text-2xl mr-2' />, name: 'Compare Plans', description: 'Compare features across all plans.', link: '/upgrade' },
        { icon: <IoMdPerson className='text-2xl mr-2' />, name: 'Individual', },
    ],
    business: [
        { icon: <GiTeamIdea className='text-2xl mr-2' />, name: 'Teams Features', description: 'Build your team’s cybersecurity skills and achieve new certifications, all in one place.', link: '/business' },
        { icon: <GiFamilyHouse className='text-2xl mr-2' />, name: 'For Government', description: 'Support your organization with a custom plan that works for your organization.', link: '/government' },
        { icon: <TbTargetArrow className='text-2xl mr-2' />, name: 'Mission Readiness', description: 'Learn how to detect and mitigate the latest threats and vulnerabilities.', link: '/mitre-attack' },
        { icon: <BiSolidBusiness className='text-2xl mr-2' />, name: 'Business Resources', description: 'Learn how Cybrary can help your team thrive.', link: '/business-resources' },
        { icon: <SiFramework className='text-2xl mr-2' />, name: 'Framework Alignment', description: 'Learn how Cybrary aligns to established industry frameworks.', link: '/upgrade?team=true' },
        { icon: <MdCompareArrows className='text-2xl mr-2' />, name: 'Teams Pricing', description: 'Compare features across all plans.' },
        { icon: <RiTeamFill className='text-2xl mr-2' />, name: 'Teams' },
    ]
};

const HamburgerMenu = ({ toggleMenu, isMenuOpen }) => {
    const [openDropdown, setOpenDropdown] = useState('');

    const handleDropdownToggle = (section) => {
        setOpenDropdown(openDropdown === section ? '' : section);
    };

    return (
        <>
            <div
                className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 z-20 ${isMenuOpen ? 'block' : 'hidden'
                    }`}
                onClick={toggleMenu}
            />

            <div
                className={`fixed top-0 left-0 w-3/4 h-full bg-black bg-opacity-90 transform transition-transform duration-300 z-30 overflow-y-auto px-2 ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'
                    }`}
            >
                <div className="flex justify-between px-4">
                    <img src={cybraryLogo} alt="" className='w-2/3' />
                    <button
                        className="text-white text-3xl"
                        onClick={toggleMenu}
                    >
                        <i className="fa-solid fa-times"></i>
                    </button>
                </div>

                <div className="flex flex-col items-start space-y-4 mt-4 pl-6 ">
                    <div>
                        <p className="text-[18px] cursor-pointer flex items-center" onClick={() => handleDropdownToggle('catalog')}>
                            Catalog <i className={`fa-solid fa-angle-down ml-2 ${openDropdown === 'catalog' ? 'rotate-180' : ''}`}></i>
                        </p>
                        {openDropdown === 'catalog' && (
                            <ul className="pl-4 mt-2 space-y-2 text-white">
                                {dropdownData.catalog.map((item, index) => (
                                    <NavLink to={item.link}>
                                        <li key={index} className="flex gap-2 p-2 hover:bg-gray-800 rounded-lg items-start">
                                            {item.icon}
                                            <div>
                                                <p className="font-bold">{item.name}</p>
                                                {item.description && <p className="text-sm">{item.description}</p>}
                                            </div>
                                        </li>
                                    </NavLink>
                                ))}
                            </ul>
                        )}
                    </div>

                    <div className='border-t py-2 border-gray-800 w-5/6'>
                        <p className="text-[18px] cursor-pointer flex items-center " onClick={() => handleDropdownToggle('individuals')}>
                            For Individuals <i className={`fa-solid fa-angle-down ml-2 ${openDropdown === 'individuals' ? 'rotate-180' : ''}`}></i>
                        </p>
                        {openDropdown === 'individuals' && (
                            <ul className="pl-4 mt-2 space-y-2 text-white">
                                {dropdownData.individuals.map((item, index) => (
                                <NavLink to={item.link}>
                                    <li key={index} className="flex gap-2 p-2 hover:bg-gray-800 rounded-lg items-start">
                                        {item.icon}
                                        <div>
                                            <p className="font-bold">{item.name}</p>
                                            {item.description && <p className="text-sm">{item.description}</p>}
                                        </div>
                                    </li>
                                </NavLink>
                                ))}
                            </ul>
                        )}
                    </div>

                    <div className='border-t py-2 border-gray-800 w-5/6'>
                        <p className="text-[18px] cursor-pointer flex items-center" onClick={() => handleDropdownToggle('business')}>
                            For Business <i className={`fa-solid fa-angle-down ml-2 ${openDropdown === 'business' ? 'rotate-180' : ''}`}></i>
                        </p>
                        {openDropdown === 'business' && (
                            <ul className="pl-4 mt-2 space-y-2 text-white">
                                {dropdownData.business.map((item, index) => (
                                    <NavLink to={item.link}>
                                    <li key={index} className="flex gap-2 p-2 hover:bg-gray-800 rounded-lg items-start">
                                        {item.icon}
                                        <div>
                                            <p className="font-bold">{item.name}</p>
                                            {item.description && <p className="text-sm">{item.description}</p>}
                                        </div>
                                    </li>
                                    </NavLink>
                                ))}
                            </ul>
                        )}
                    </div>

                    <p className="text-[18px] cursor-pointer border-t py-2 border-gray-800 w-5/6">Pricing</p>
                </div>
                <div className="flex flex-col  space-y-4 p-8">
                    <button className="border border-pink-500 text-white-500 font-bold px-7 py-3 rounded hover:shadow-lg hover:shadow-pink-500/50 transition-shadow duration-300">
                        Free Teams Demo
                    </button>
                    <button className="px-6 py-3 rounded-xl bg-black text-white hover:shadow-[4px_-4px_10px_rgba(128,0,128,0.5),-4px_4px_10px_rgba(255,105,180,0.5)] transition-shadow duration-300">
                        Sign up
                    </button>
                    <button className="text-white">Login</button>
                </div>
            </div>
        </>
    );
};

export default HamburgerMenu;
