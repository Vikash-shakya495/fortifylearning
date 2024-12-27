import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import cybraryLogo from '../../assets/cybraryLogo.png';
import { TbTargetArrow } from 'react-icons/tb';
import { GiFamilyHouse, GiProgression, GiSkills, GiTeamIdea } from 'react-icons/gi';
import { RiQuestionAnswerFill, RiShoppingBag2Line, RiShoppingBag4Fill, RiTeamFill } from 'react-icons/ri';
import { PiBrowserLight, PiCertificateBold, PiTargetLight } from 'react-icons/pi';
import { BiSolidBusiness } from 'react-icons/bi';
import { SiFramework } from 'react-icons/si';
import { MdCompareArrows, MdOutlineForum } from 'react-icons/md';
import { BsShieldCheck } from 'react-icons/bs';
import { DiGitCompare } from 'react-icons/di';
import { IoMdPerson } from 'react-icons/io';

const dropdownData = {

    catalog: [
        { icon: <RiShoppingBag4Fill className='text-2xl mr-2' />, name: 'Career Paths', description: 'Launch or advance your career with curated collections of courses, labs, and more.', link: '/career-path' },
        { icon: <GiSkills className='text-2xl mr-2' />, name: 'Skill Paths', description: 'Launch or advance your career with curated collections of courses, labs, and more.', link: '/skill-paths' },
        { icon: <PiCertificateBold className='text-2xl mr-2' />, name: 'Certification Prep', description: 'Prepare for and maintain leading cybersecurity certifications.', link: '/certification-prep', 
            subItems: [
                {
                    name: 'Beginner',
                    subItems: [
                        { name: 'Comptia Security+ Certification Prep', link: '/certification-prep-courses/security-plus' },
                        { name: 'CompTIA Project+ Certification Training (PKO-004)', link: '/course/comptia-project-plus-pk0-004' },
                        { name: 'AZ 900 Azure Fundamentals', link: '/certification-prep-courses/microsoft-azure-fundamentals' },
                        { name: 'CompTIA A+ Certification Course & Training', link: '/course/comptia-a-plus' },
                    ],
                },
                {
                    name: 'Intermediate',
                    // link: '/subitem-2',
                    subItems: [
                        { name: 'CISA Certification Prep', link: '/certification-prep-courses/certified-information-systems-auditor' },
                        { name: 'CertNexus Cybersec First Responder', link: '/certification-prep-courses/cybersec-first-responder' },
                        { name: 'Certified Cloud Security Professional (CCSP) Certification Prep', link: '/certification-prep-courses/certified-cloud-security-professional' },
                        { name: 'AWS Certified Security Specialty Certification Prep', link: '/certification-prep-courses/aws-certified-security-specialty' },
                    ],
                },
                {
                    name: 'Advance',
                    // link: '/subitem-2',
                    subItems: [
                        { name: 'CRISC Certification Prep', link: '/certification-prep-courses/certified-in-risk-and-information-systems-control-crisc' },
                        { name: 'AZ-305 Designing Microsoft Azure Infrastructure Solutions Certification Prep', link: '/certification-prep-courses/designing-microsoft-azure-infrastructure-solutions' },
                        { name: 'CompTIA CASP+ Certification Prep', link: '/certification-prep-courses/casp-plus' },
                        { name: 'CISSP Certification Prep', link: '/course/certified-information-systems-security-professional' },
                    ],
                },
            
            ],
        },
        { icon: <PiTargetLight className='text-2xl mr-2' />, name: 'Mission Readiness', description: 'Learn how to detect and mitigate the latest threats and vulnerabilities.', link: '/mitre-attack' },
        { icon: <PiBrowserLight className='text-2xl mr-2' />, name: 'Browse the Catalog', link: '/catalog' },
        { icon: <RiQuestionAnswerFill className='text-2xl mr-2' />, name: 'Instructors', link: '/instructor' },
    ],

    individuals: [
        {
            icon: <RiShoppingBag2Line className='text-2xl mr-2' />, name: 'Career Paths', description: 'Launch or advance your career with curated collections of courses, labs, and more.', link: '/career-path',
            subItems: [
                {
                    name: 'Foundations',
                    subItems: [
                        { name: 'IT and Cybersecurity Foundations', link: '/career-path/foundations' },
                        { name: 'IT & Cybersecurity Foundations Career Path', link: '/career-path/foundations' },
                    ],
                },
                {
                    name: 'Defensvie Security',
                    // link: '/subitem-2',
                    subItems: [
                        { name: 'Become an Incident Handler', link: '/career-path/incident-handler' },
                        { name: 'Become a SOC Analyst - Level 3', link: '/career-path/soc-analyst' },
                        { name: 'Become a SOC Analyst - Level 2', link: '/career-path/soc-analyst' },
                        { name: 'Become a SOC Analyst - Level 1', link: '/career-path/soc-analyst' },
                        { name: 'Incident Handler Collection', link: '/career-path/incident-handler' },
                        { name: 'SOC Analyst Career Path', link: '/career-path/soc-analyst' },
                    ],
                },
                {
                    name: 'Offensive Security',
                    // link: '/subitem-2',
                    subItems: [
                        { name: 'Become a Penetration Tester', link: '/career-path/penetration-tester' },
                        { name: 'Penetration Tester Career Path', link: '/career-path/penetration-tester' },
                    ],
                },
                {
                    name: 'Engineering and Operations',
                    // link: '/subitem-2',
                    subItems: [
                        { name: 'Become a Network Engineer', link: '/career-path/network-engineer' },
                        { name: 'Become a Cyber Security Engineer', link: '/career-path/security-engineer' },
                        { name: 'Become an Azure Cloud Engineer', link: '/career-path/microsoft-azure-cloud-engineer' },
                        { name: 'Become a System Administrator', link: '/career-path/system-administrator' },
                        { name: 'Network Engineer Collection', link: '/career-path/network-engineer' },
                        { name: 'Security Engineer Career Path', link: '/career-path/security-engineer' },
                        { name: 'Azure Cloud Engineer Certification Path', link: '/career-path/microsoft-azure-cloud-engineer' },
                        { name: 'System Administrator Collection', link: '/career-path/system-administrator' },
                    ],
                },
                {
                    name: 'Leadership and Management',
                    // link: '/subitem-2',
                    subItems: [
                        { name: 'Become a CISO', link: '/career-path/leadership-and-management' },
                        { name: '50 CISO Security Controls', link: '/career-path/50-ciso-security-controls' },
                        { name: '12 Competencies of the Effective CISO', link: '/career-path/12-competencies-of-the-effective-ciso' },
                    ],
                },
            ],
        },
        { icon: <MdOutlineForum className='text-2xl mr-2' />, name: 'Forums', description: 'Discuss all things cybersecurity for free among the vast Cybrary community.', link: '/forum' },
        { icon: <BsShieldCheck className='text-2xl mr-2' />, name: 'Free Access', description: 'Get a taste of the catalog with certification prep, introductory courses, and more.', link: '/free-content' },
        { icon: <GiProgression className='text-2xl mr-2' />, name: 'Insider Pro', description: 'Everything you need to learn, practice, and prove your cybersecurity skills.', link: '/cybrary-insider-pro' },
        { icon: <RiTeamFill className='text-2xl mr-2' />, name: 'For Teams', description: 'Build your team’s cybersecurity skills and achieve new certifications, all in one place.', link: '/business' },
        { icon: <DiGitCompare className='text-2xl mr-2' />, name: 'Compare Plans', description: 'Compare features across all plans.', link: '/upgrade' },
        {
            icon: <IoMdPerson className='text-2xl mr-2' />, name: 'Individual', subItems: [
                { name: 'Cybrary Insider Pro', link: '/cybrary-insider-pro' },
                { name: 'Free access', link: '/free-content' },
                { name: 'Career Path', link: '/career-path' },
                { name: 'Success Stories', link: '/success-stories' },
            ],
        },
    ],
    business: [
        { icon: <GiTeamIdea className='text-2xl mr-2' />, name: 'Teams Features', description: 'Build your team’s cybersecurity skills and achieve new certifications, all in one place.', link: '/business' },
        { icon: <GiFamilyHouse className='text-2xl mr-2' />, name: 'For Government', description: 'Support your organization with a custom plan that works for your organization.', link: '/government' },
        {
            icon: <TbTargetArrow className="text-2xl mr-2" />,
            name: 'Mission Readiness',
            description: 'Learn how to detect and mitigate the latest threats and vulnerabilities.',
            subItems: [
                {
                    name: 'Threat Actor Compaigns',
                    subItems: [
                        { name: 'Magic Hound', link: '/threat-actor-campaign/magic-hound' },
                        { name: 'Raspberry Robin', link: '/threat-actor-campaign/raspberry-robin' },
                        { name: 'Double Trouble with Double Dragon', link: '/threat-actor-campaign/double-trouble-with-double-dragon' },
                        { name: 'Weak Link in the Supply Chain', link: '/threat-actor-campaign/weak-link-in-the-supply-chain' },
                        { name: 'Spinning a Web Shell for Initial Access', link: '/threat-actor-campaign/spinning-a-web-shell-for-initial-access' },
                        { name: 'Exfiltration and Extortion', link: '/threat-actor-campaign/exfiltration-and-extortion' },
                    ],
                },
                {
                    name: 'CVE Series',
                    // link: '/subitem-2',
                    subItems: [
                        { name: 'CVE Series: F5 BIG-IP (CVE-2022-1388)', link: '/course/cve-series-f5-big-ip-cve-2022-1388' },
                        { name: 'CVE Series: CouchDB RCE (CVE-2022-24706)', link: '/course/cve-series-couchdb-rce-cve-2022-24706' },
                        { name: 'CVE Series: Atlassian Bitbucket Command Injection (CVE-2022-36804)', link: '/course/cve-series-atlassian-bitbucket-command-injection-cve-2022-36804' },
                        { name: 'CVE Series: Grafana Directory Traversal (CVE-2021-43798)', link: '/course/cve-series-grafana-directory-traversal-cve-2021-43798' },
                        { name: 'CVE Series: Blind NoSQL Injection (CVE-2021-22911)', link: '/course/cve-series-blind-nosql-injection-cve-2021-22911' },
                        { name: 'CVE Series: Apache HTTPD (CVE-2021-42013)', link: '/course/cve-series-apache-httpd-cve-2021-42013' },
                    ],
                },
                {
                    name: 'Cybrary Challenges',
                    // link: '/subitem-2',
                    subItems: [
                        { name: 'Challenge: Space Mission', link: '/course/cybrary-challenge-space-mission1' },
                        { name: 'Challenge: A Message Within A Message', link: '/course/cybrary-challenge-a-message-within-a-message' },
                        { name: "Challenge: Don't Believe What You Hear", link: '/course/cybrary-challenge-donot-believe-what-you-hear' },
                        { name: 'Challenge: Chatting with ChatGPT', link: '/course/cybrary-challenge-chatting-with-chatgpt' },
                        { name: 'Challenge: Saving a Fellow Monster', link: '/course/cybrary-challenge-saving-a-fellow-monster' },
                        { name: 'Challenge: Gobble Gobble Conceal & Deceive', link: '/course/cybrary-challenge-gobble-gobble-conceal-and-deceive' },
                    ],
                },
                { name: 'MITRE ATTACK', link: '/mitre-attack' },
            ],
        },
        {
            icon: <BiSolidBusiness className='text-2xl mr-2' />, name: 'Business Resources', description: 'Learn how Cybrary can help your team thrive.', subItems: [
                { name: 'Case Studies', link: '/business-resources#case-studies' },
                { name: 'Research Papers', link: '/business-resources#research-papers' },
                { name: 'Articles', link: '/business-resources#articles' },
                { name: 'White Papers', link: '/business-resources#white-papers' },
            ],
        },
        { icon: <SiFramework className='text-2xl mr-2' />, name: 'Framework Alignment', description: 'Learn how Cybrary aligns to established industry frameworks.', link: '/upgrade?team=true' },
        { icon: <MdCompareArrows className='text-2xl mr-2' />, name: 'Teams Pricing', description: 'Compare features across all plans.' },
        {
            icon: <RiTeamFill className='text-2xl mr-2' />, name: 'Teams', subItems: [
                { name: 'For Security Teams', link: '/business' },
                { name: 'Baselining', link: '/baseline' },
                { name: 'For Government', link: '/government' },
                { name: 'Teams Resources', link: '/business-resources' },
            ],
        },
    ],

    resources: [
        { icon: <PiCertificateBold className='text-2xl mr-2' />, name: 'Career Resources', description: 'Discover all the information you need to launch a cybersecurity career.', 
            subItems: [
                { name: 'How to Retool IT Skills for Cybersecurity Roles', link: '/business-resources/how-to-retool-it-skills-for-cybersecurity-roles' },
                { name: 'The Complete Cybersecurity Career Playbook', link: '/resources/cybersecurity-career-guide' },
            ],
            
        },
        { icon: <PiTargetLight className='text-2xl mr-2' />, name: 'Podcasts', description: 'Listen to industry experts talk about the latest news and trends in security.', link: '/podcast',
            subItems: [
                { name: 'Go For It', link: '/podcast-series/go-for-it' },
                { name: '401 Access Denied', link: '/podcast-series/401-access-denied' },
                { name: 'Cybrary Podcasts', link: '/podcast' },
                { name: "Intruder Alert: Conversations with Cybrary's Hackers", link: '/podcast-series/intruder-alert' },
            ],
         },
        { icon: <PiBrowserLight className='text-2xl mr-2' />, name: 'Study Guides', description: "Supplement Certification Prep courses to prepare for exams",
            subItems: [
                { name: 'CompTIA A+', link: '/study-guide/comptia-a-plus' },
                { name: 'Computer Hacking Forensic investigator', link: '/study-guide/chfi' },
                { name: 'CompTIA Sec+', link: '/study-guide/comptia-security-plus' },
                { name: "Cisco CCNA", link: '/study-guide/ccna' },
                { name: "CompTIA Network+", link: '/study-guide/comptia-network-plus' },
                { name: "Project Management Professional", link: '/study-guide/pmp' },
                { name: "CompTIA CASP", link: '/study-guide/casp' },
                { name: "Certified Ethical Hacker", link: '/study-guide/ceh' },
                { name: "ISC2 CISSP", link: '/study-guide/cissp' },
            ],
         },
        { icon: <RiQuestionAnswerFill className='text-2xl mr-2' />, name: 'Webinar', description:"Get industry advice straight from the experts' mouths", link: '/webinar',
            subItems: [
                { name: 'Cybrary Threat Intelligence', link: '/webinar#ctig' },
                { name: 'Team Management', link: '/webinar#team-management' },
                { name: 'Career and Skills Development', link: '/webinar#career-skills-development' },
                { name: "Certifications", link: '/webinar#certifications' },
                { name: "New and Events", link: '/webinar#news-events' },
            ],
         },
    ],

};

const HamburgerMenu = ({ toggleMenu, isMenuOpen }) => {
    const [openDropdown, setOpenDropdown] = useState('');
    const [nestedDropdown, setNestedDropdown] = useState(null);
    const [subNestedDropdown, setSubNestedDropdown] = useState(null);

    const handleDropdownToggle = (section) => {
        setOpenDropdown(openDropdown === section ? '' : section);
        setNestedDropdown(null);
        setSubNestedDropdown(null);
    };

    const handleNestedDropdownToggle = (section) => {
        setNestedDropdown(nestedDropdown === section ? null : section);
        setSubNestedDropdown(null);
    };

    const handleSubNestedDropdownToggle = (section) => {
        setSubNestedDropdown(subNestedDropdown === section ? null : section);
    };

    return (
        <>
            <div
                className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 z-20 ${isMenuOpen ? 'block' : 'hidden'
                    }`}
                onClick={toggleMenu}
            />

            <div
                className={`fixed top-0 left-0 w-3/4 h-full bg-gray-900 bg-opacity-90 transform transition-transform duration-300 z-30 overflow-y-auto px-2 ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'
                    }`}
            >
                <div className="flex justify-between px-4">
                    <img src={cybraryLogo} alt="Logo" className="w-2/3" />
                    <button
                        className="text-white text-3xl"
                        onClick={toggleMenu}
                    >
                        <i className="fa-solid fa-times"></i>
                    </button>
                </div>

                <div className="flex flex-col items-start space-y-4 mt-4 pl-6">
                    <div className="border-t py-2 border-gray-800 w-5/6">
                        <p
                            className="text-[18px] cursor-pointer flex items-center"
                            onClick={() => handleDropdownToggle('catalog')}
                        >
                            Catalog{' '}
                            <i
                                className={`fa-solid fa-angle-down ml-2 ${openDropdown === 'catalog' ? 'rotate-180' : ''
                                    }`}
                            ></i>
                        </p>
                        {openDropdown === 'catalog' && (
                            <ul className="pl-4 mt-2 space-y-2 text-white">
                                {dropdownData.catalog.map((item, index) => (
                                    <li key={index} className="flex flex-col">
                                        <div
                                            className="flex gap-2 p-2 hover:bg-gray-800 rounded-lg items-start cursor-pointer"
                                            onClick={() =>
                                                item.subItems
                                                    ? handleNestedDropdownToggle(item.name)
                                                    : null
                                            }
                                        >
                                            <NavLink to={item.link}>
                                                {item.icon}
                                                <div>
                                                    <p className="font-bold">{item.name}</p>
                                                    {item.description && (
                                                        <p className="text-sm">{item.description}</p>
                                                    )}
                                                </div>
                                            </NavLink>
                                        </div>
                                        {nestedDropdown === item.name && item.subItems && (
                                            <div className="ml-4 mt-2">
                                                <button
                                                    className="text-sm text-gray-400 mb-2"
                                                    onClick={() => setNestedDropdown(null)}
                                                >
                                                    &larr; Back
                                                </button>
                                                <ul className="space-y-2">
                                                    {item.subItems.map((subItem, subIndex) => (
                                                        <li key={subIndex} className="flex flex-col">
                                                            <div
                                                                className="p-2 hover:bg-gray-800 rounded-lg cursor-pointer"
                                                                onClick={() =>
                                                                    subItem.subItems
                                                                        ? handleSubNestedDropdownToggle(
                                                                            subItem.name
                                                                        )
                                                                        : null
                                                                }
                                                            >
                                                                <NavLink to={subItem.link}>
                                                                    {subItem.name}
                                                                </NavLink>
                                                            </div>
                                                            {subNestedDropdown === subItem.name && subItem.subItems && (
                                                                <div className="ml-4 mt-2">
                                                                    <button
                                                                        className="text-sm text-gray-400 mb-2"
                                                                        onClick={() => setSubNestedDropdown(null)}
                                                                    >
                                                                        &larr; Back
                                                                    </button>
                                                                    <ul className="space-y-2">
                                                                        {subItem.subItems.map(
                                                                            (
                                                                                subSubItem,
                                                                                subSubIndex
                                                                            ) => (
                                                                                <NavLink
                                                                                    to={
                                                                                        subSubItem.link
                                                                                    }
                                                                                    key={
                                                                                        subSubIndex
                                                                                    }
                                                                                >
                                                                                    <li className="p-2 hover:bg-gray-800 rounded-lg">
                                                                                        {
                                                                                            subSubItem.name
                                                                                        }
                                                                                    </li>
                                                                                </NavLink>
                                                                            )
                                                                        )}
                                                                    </ul>
                                                                </div>
                                                            )}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>

                {/* For individuals */}
                <div className="flex flex-col items-start space-y-4 mt-4 pl-6">
                    <div className="border-t py-2 border-gray-800 w-5/6">
                        <p
                            className="text-[18px] cursor-pointer flex items-center"
                            onClick={() => handleDropdownToggle('individuals')}
                        >
                            For Individuals{' '}
                            <i
                                className={`fa-solid fa-angle-down ml-2 ${openDropdown === 'individuals' ? 'rotate-180' : ''
                                    }`}
                            ></i>
                        </p>
                        {openDropdown === 'individuals' && (
                            <ul className="pl-4 mt-2 space-y-2 text-white">
                                {dropdownData.individuals.map((item, index) => (
                                    <li key={index} className="flex flex-col">
                                        <div
                                            className="flex gap-2 p-2 hover:bg-gray-800 rounded-lg items-start cursor-pointer"
                                            onClick={() =>
                                                item.subItems
                                                    ? handleNestedDropdownToggle(item.name)
                                                    : null
                                            }
                                        >
                                            <NavLink to={item.link}>
                                                {item.icon}
                                                <div>
                                                    <p className="font-bold">{item.name}</p>
                                                    {item.description && (
                                                        <p className="text-sm">{item.description}</p>
                                                    )}
                                                </div>
                                            </NavLink>
                                        </div>
                                        {nestedDropdown === item.name && item.subItems && (
                                            <div className="ml-4 mt-2">
                                                <button
                                                    className="text-sm text-gray-400 mb-2"
                                                    onClick={() => setNestedDropdown(null)}
                                                >
                                                    &larr; Back
                                                </button>
                                                <ul className="space-y-2">
                                                    {item.subItems.map((subItem, subIndex) => (
                                                        <li key={subIndex} className="flex flex-col">
                                                            <div
                                                                className="p-2 hover:bg-gray-800 rounded-lg cursor-pointer"
                                                                onClick={() =>
                                                                    subItem.subItems
                                                                        ? handleSubNestedDropdownToggle(
                                                                            subItem.name
                                                                        )
                                                                        : null
                                                                }
                                                            >
                                                                <NavLink to={subItem.link}>
                                                                    {subItem.name}
                                                                </NavLink>
                                                            </div>
                                                            {subNestedDropdown === subItem.name && subItem.subItems && (
                                                                <div className="ml-4 mt-2">
                                                                    <button
                                                                        className="text-sm text-gray-400 mb-2"
                                                                        onClick={() => setSubNestedDropdown(null)}
                                                                    >
                                                                        &larr; Back
                                                                    </button>
                                                                    <ul className="space-y-2">
                                                                        {subItem.subItems.map(
                                                                            (
                                                                                subSubItem,
                                                                                subSubIndex
                                                                            ) => (
                                                                                <NavLink
                                                                                    to={
                                                                                        subSubItem.link
                                                                                    }
                                                                                    key={
                                                                                        subSubIndex
                                                                                    }
                                                                                >
                                                                                    <li className="p-2 hover:bg-gray-800 rounded-lg">
                                                                                        {
                                                                                            subSubItem.name
                                                                                        }
                                                                                    </li>
                                                                                </NavLink>
                                                                            )
                                                                        )}
                                                                    </ul>
                                                                </div>
                                                            )}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>

                <div className="flex flex-col items-start space-y-4 mt-4 pl-6">
                    <div className="border-t py-2 border-gray-800 w-5/6">
                        <p
                            className="text-[18px] cursor-pointer flex items-center"
                            onClick={() => handleDropdownToggle('business')}
                        >
                            For Business{' '}
                            <i
                                className={`fa-solid fa-angle-down ml-2 ${openDropdown === 'business' ? 'rotate-180' : ''
                                    }`}
                            ></i>
                        </p>
                        {openDropdown === 'business' && (
                            <ul className="pl-4 mt-2 space-y-2 text-white">
                                {dropdownData.business.map((item, index) => (
                                    <li key={index} className="flex flex-col">
                                        <div
                                            className="flex gap-2 p-2 hover:bg-gray-800 rounded-lg items-start cursor-pointer"
                                            onClick={() =>
                                                item.subItems
                                                    ? handleNestedDropdownToggle(item.name)
                                                    : null
                                            }
                                        >
                                            <NavLink to={item.link}>
                                                {item.icon}
                                                <div>
                                                    <p className="font-bold">{item.name}</p>
                                                    {item.description && (
                                                        <p className="text-sm">{item.description}</p>
                                                    )}
                                                </div>
                                            </NavLink>
                                        </div>
                                        {nestedDropdown === item.name && item.subItems && (
                                            <div className="ml-4 mt-2">
                                                <button
                                                    className="text-sm text-gray-400 mb-2"
                                                    onClick={() => setNestedDropdown(null)}
                                                >
                                                    &larr; Back
                                                </button>
                                                <ul className="space-y-2">
                                                    {item.subItems.map((subItem, subIndex) => (
                                                        <li key={subIndex} className="flex flex-col">
                                                            <div
                                                                className="p-2 hover:bg-gray-800 rounded-lg cursor-pointer"
                                                                onClick={() =>
                                                                    subItem.subItems
                                                                        ? handleSubNestedDropdownToggle(
                                                                            subItem.name
                                                                        )
                                                                        : null
                                                                }
                                                            >
                                                                <NavLink to={subItem.link}>
                                                                    {subItem.name}
                                                                </NavLink>
                                                            </div>
                                                            {subNestedDropdown === subItem.name && subItem.subItems && (
                                                                <div className="ml-4 mt-2">
                                                                    <button
                                                                        className="text-sm text-gray-400 mb-2"
                                                                        onClick={() => setSubNestedDropdown(null)}
                                                                    >
                                                                        &larr; Back
                                                                    </button>
                                                                    <ul className="space-y-2">
                                                                        {subItem.subItems.map(
                                                                            (
                                                                                subSubItem,
                                                                                subSubIndex
                                                                            ) => (
                                                                                <NavLink
                                                                                    to={
                                                                                        subSubItem.link
                                                                                    }
                                                                                    key={
                                                                                        subSubIndex
                                                                                    }
                                                                                >
                                                                                    <li className="p-2 hover:bg-gray-800 rounded-lg">
                                                                                        {
                                                                                            subSubItem.name
                                                                                        }
                                                                                    </li>
                                                                                </NavLink>
                                                                            )
                                                                        )}
                                                                    </ul>
                                                                </div>
                                                            )}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
                <div className="flex flex-col items-start space-y-4 mt-4 pl-6">
                    <div className="border-t py-2 border-gray-800 w-5/6">
                        <p
                            className="text-[18px] cursor-pointer flex items-center"
                            onClick={() => handleDropdownToggle('resources')}
                        >
                            Resources{' '}
                            <i
                                className={`fa-solid fa-angle-down ml-2 ${openDropdown === 'resources' ? 'rotate-180' : ''
                                    }`}
                            ></i>
                        </p>
                        {openDropdown === 'resources' && (
                            <ul className="pl-4 mt-2 space-y-2 text-white">
                                {dropdownData.resources.map((item, index) => (
                                    <li key={index} className="flex flex-col">
                                        <div
                                            className="flex gap-2 p-2 hover:bg-gray-800 rounded-lg items-start cursor-pointer"
                                            onClick={() =>
                                                item.subItems
                                                    ? handleNestedDropdownToggle(item.name)
                                                    : null
                                            }
                                        >
                                            <NavLink to={item.link}>
                                                {item.icon}
                                                <div>
                                                    <p className="font-bold">{item.name}</p>
                                                    {item.description && (
                                                        <p className="text-sm">{item.description}</p>
                                                    )}
                                                </div>
                                            </NavLink>
                                        </div>
                                        {nestedDropdown === item.name && item.subItems && (
                                            <div className="ml-4 mt-2">
                                                <button
                                                    className="text-sm text-gray-400 mb-2"
                                                    onClick={() => setNestedDropdown(null)}
                                                >
                                                    &larr; Back
                                                </button>
                                                <ul className="space-y-2">
                                                    {item.subItems.map((subItem, subIndex) => (
                                                        <li key={subIndex} className="flex flex-col">
                                                            <div
                                                                className="p-2 hover:bg-gray-800 rounded-lg cursor-pointer"
                                                                onClick={() =>
                                                                    subItem.subItems
                                                                        ? handleSubNestedDropdownToggle(
                                                                            subItem.name
                                                                        )
                                                                        : null
                                                                }
                                                            >
                                                                <NavLink to={subItem.link}>
                                                                    {subItem.name}
                                                                </NavLink>
                                                            </div>
                                                            {subNestedDropdown === subItem.name && subItem.subItems && (
                                                                <div className="ml-4 mt-2">
                                                                    <button
                                                                        className="text-sm text-gray-400 mb-2"
                                                                        onClick={() => setSubNestedDropdown(null)}
                                                                    >
                                                                        &larr; Back
                                                                    </button>
                                                                    <ul className="space-y-2">
                                                                        {subItem.subItems.map(
                                                                            (
                                                                                subSubItem,
                                                                                subSubIndex
                                                                            ) => (
                                                                                <NavLink
                                                                                    to={
                                                                                        subSubItem.link
                                                                                    }
                                                                                    key={
                                                                                        subSubIndex
                                                                                    }
                                                                                >
                                                                                    <li className="p-2 hover:bg-gray-800 rounded-lg">
                                                                                        {
                                                                                            subSubItem.name
                                                                                        }
                                                                                    </li>
                                                                                </NavLink>
                                                                            )
                                                                        )}
                                                                    </ul>
                                                                </div>
                                                            )}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
                <NavLink to='/pricing'>
                    <p className="text-[18px] cursor-pointer border-t py-6 px-6 border-gray-800 w-5/6">Pricing</p>
                </NavLink>
                <div className="flex flex-col items-center space-y-4 p-8">
                    <NavLink to='/register'>
                        <button className="px-20 py-3 rounded-xl bg-black text-white hover:shadow-[4px_-4px_10px_rgba(128,0,128,0.5),-4px_4px_10px_rgba(255,105,180,0.5)] transition-shadow duration-300">
                            Sign up
                        </button>
                    </NavLink>
                    <NavLink to='/login'>
                        <button className="text-white px-6 ">Login</button>
                    </NavLink>
                    <NavLink to='/demo-request'>
                        <button className="border border-pink-500 text-white-500 font-bold px-7 py-3 rounded-xl hover:shadow-lg hover:shadow-pink-500/50 transition-shadow duration-300">
                            Free Teams Demo
                        </button>
                    </NavLink>
                </div>
            </div>
        </>
    );
};

export default HamburgerMenu;
