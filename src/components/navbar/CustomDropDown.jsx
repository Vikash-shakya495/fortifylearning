import React, { useState} from 'react'; 
import Dropdown from 'react-multilevel-dropdown';
// import "react-multilevel-dropdown/style.css";
import './dropdownStyles.css'; // Custom CSS for hover behavior
import { RiShoppingBag4Line, RiQuestionAnswerLine, RiTeamFill } from "react-icons/ri";
import { GiSkills, GiProgression, GiTeamIdea, GiFamilyHouse } from "react-icons/gi";
import { PiCertificateBold, PiTargetLight, PiBrowsersLight } from "react-icons/pi";
import { MdOutlineForum, MdCompareArrows } from "react-icons/md";
import { BsShieldCheck } from "react-icons/bs";
import { DiGitCompare } from "react-icons/di";
import { IoMdPerson } from "react-icons/io";
import { TbTargetArrow } from "react-icons/tb";
import { BiSolidBusiness } from "react-icons/bi";
import { SiFramework } from "react-icons/si";
import { Link } from 'react-router-dom';

function CustomDropDown() {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div className='w-full flex justify-evenly items-center p-2 dropdowns'
            onMouseEnter={() => setIsHovered(!true)}
            onMouseLeave={() => setIsHovered(!false)}
            >
            <Dropdown title='Catalog ↴' className="dropdown-container "
                menuClassName="dropdown-menu p-2 catalog"
                itemClassName="dropdown-item "
                submenuClassName="dropdown-submenu "
                openOnHover={isHovered}
                position='right' >
                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center text-white bg-red-500 '>
                    <Link to='career-path' className='flex items-center '>
                        <RiShoppingBag4Line className='text-2xl mr-2 text-white group-hover:text-black' />
                        <div className='flex flex-col flex-wrap w-full'>
                            <h1 className='text-lg font-semibold text-white group-hover:text-black '>Career Paths</h1>
                            <p className='text-sm text-gray-400 flex flex-wrap w-full'>Launch or advance your career with curated <br />collections of courses, labs, and more.</p>
                        </div>
                    </Link>
                </Dropdown.Item>

                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                    <Link to='skill-paths' className='flex items-center'>
                        <GiSkills className='text-2xl mr-2 text-white' />
                        <div>
                            <h1 className='text-lg font-semibold text-white'>Skill Paths</h1>
                            <p className='text-sm text-gray-400 '>Launch or advance your career with curated <br />collections of courses, labs, and more.</p>
                        </div>
                    </Link>
                </Dropdown.Item>

                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg hover:bg-gray-800 items-center'>
                    <Link to='certification-prep' className='flex items-center'>
                        <PiCertificateBold className='text-2xl mr-2 text-white' />
                        <div>
                            <h1 className='text-lg font-semibold text-white'>Certification Prep</h1>
                            <p className='text-sm text-gray-400 '>Prepare for and maintain leading <br />cybersecurity certifications.</p>
                        </div>
                    </Link>
                </Dropdown.Item>

                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg hover:bg-gray-800 items-center'>
                    <Link to='mission-readiness' className='flex items-center'>
                        <PiTargetLight className='text-2xl mr-2 text-white' />
                        <div>
                            <h1 className='text-lg font-semibold text-white'>Mission Readiness</h1>
                            <p className='text-sm text-gray-400 '>Learn how to detect and mitigate the <br />latest threats and vulnerabilities.</p>
                        </div>
                    </Link>
                </Dropdown.Item>

                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg hover:bg-gray-800 items-center'>
                    <Link to='browse-catalog' className='flex items-center'>
                        <PiBrowsersLight className='text-2xl mr-2 text-white' />
                        <div>
                            <h1 className='text-lg font-semibold text-white'>Browse the Catalog</h1>
                        </div>
                    </Link>
                </Dropdown.Item>

                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg hover:bg-gray-800 items-center'>
                    <Link to='instructors' className='flex items-center'>
                        <RiQuestionAnswerLine className='text-2xl mr-2 text-white' />
                        <div>
                            <h1 className='text-lg font-semibold text-white'>Instructors</h1>
                        </div>
                    </Link>
                </Dropdown.Item>
            </Dropdown>

            <Dropdown title='for individuals ↴' className='dropdown-container'
                menuClassName="dropdown-menu p-2 "
                itemClassName="dropdown-item text-white "
                submenuClassName="dropdown-submenu "
                openOnHover={isHovered}
                position='right'>
                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg hover:bg-gray-800 items-center'
                >
                    <Link to='career-path' className='flex items-center'>
                        <RiShoppingBag4Line className='text-2xl mr-2 text-white' />
                        <div>
                            <h1 className='heading text-lg font-semibold text-white'>Career Paths</h1>
                            <p className='text-sm text-gray-400 '>Launch or advance your career with curated <br />collections of courses, labs, and more</p>
                        </div>
                    </Link>
                    <Dropdown.Submenu className='custom-submenu' position='right'>
                        <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                            <h1 className='text-lg text-white'>Foundations</h1>
                            <Dropdown.Submenu className='custom-submenu-submenu' position='right'>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center '>
                                    <Link to='it-cybersecurity' className='flex items-center'>
                                        <div >
                                            <h1 className='text-lg text-white '>It and Cybersecurity Foundations</h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <Link to='career-path/foundations' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white '>It and Cybersecurity Foundations
                                                <br />
                                                career path
                                            </h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                            </Dropdown.Submenu>
                        </Dropdown.Item>
                        <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                            <h1 className='text-lg text-white'>Defensive Security</h1>
                            <Dropdown.Submenu className='custom-submenu-submenu' position='right'>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <Link to='it-cybersecurity' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white'>Become an incident handler</h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <Link to='career-path/foundations' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white '>Become an SOC Analyst - level 3
                                            </h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <Link to='career-path/foundations' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white '>Become an SOC Analyst - level 2
                                            </h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <Link to='career-path/foundations' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white '>Become an SOC Analyst - level 1
                                            </h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <Link to='career-path/foundations' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white '>Incident Handler Collections
                                            </h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <Link to='career-path/soc1' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white '>SOC Analyst 1
                                            </h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <Link to='career-path/foundations' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white '>SOC Analyst 2
                                            </h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <Link to='career-path/foundations' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white '>SOC Analyst 3
                                            </h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <Link to='career-path/foundations' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white '>soc analyst career path
                                            </h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                            </Dropdown.Submenu>
                        </Dropdown.Item>
                        <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                            <h1 className='text-lg text-white'>Offensive Security</h1>
                            <Dropdown.Submenu className='custom-submenu-submenu' position='right'>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <Link to='career-path/penetration-tester' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white '>Become a penetration tester</h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <Link to='career-path/penetration-tester' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white '>Penetration tester career path
                                            </h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                            </Dropdown.Submenu>
                        </Dropdown.Item>
                        <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                            <h1 className='text-lg text-white'>Engineering and Operations</h1>
                            <Dropdown.Submenu className='custom-submenu-submenu' position='right'>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <Link to='career-path/network-engineer' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white ' >Become an Network Engineer</h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <Link to='career-path/security-engineer' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white '>Become a cybersecurity engineer
                                            </h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <Link to='career-path/microsoft-azure-cloud-engineer' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white '>Become an Azure Cloud Engineer
                                            </h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <Link to='career-path/system-administrator' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white '>Become an System Administrator
                                            </h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <Link to='career-path/network-engineer' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white '>Network Engineer Collections
                                            </h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <Link to='career-path/security-engineer' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white '>Security Engineer Career Path
                                            </h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <Link to='career-path/microsoft-azure-cloud-engineer' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white '>Azure Cloud Engineer Collections
                                            </h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <Link to='career-path/system-administrator' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white '>System Administrator Collections
                                            </h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                            </Dropdown.Submenu>
                        </Dropdown.Item>
                        <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                            <h1 className='text-lg text-white'>Leadership and Management</h1>
                            <Dropdown.Submenu className='custom-submenu-submenu' position='right'>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <Link to='career-path/leadership-and-management' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white '>Become a CISO</h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <Link to='career-path/50-ciso-security-controls' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white '>50 Ciso Security Controls
                                            </h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <Link to='career-path/12-competencies-of-the-effective-ciso' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white '>12 Competencies of the Effective <br /> Ciso
                                            </h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <Link to='career-path/leadership-and-management' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white '>CISO Certifications, Training <br /> and Career Path
                                            </h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <Link to='career-path/50-ciso-security-controls' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white '>50 CISO Security Controls
                                            </h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <Link to='career-path/12-competencies-of-the-effective-ciso' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white '>12 Competencies of the Effective <br />Ciso
                                            </h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                            </Dropdown.Submenu>
                        </Dropdown.Item>
                    </Dropdown.Submenu>
                </Dropdown.Item>

                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg hover:bg-gray-800 items-center'>
                    <Link to='forum' className='flex items-center'>
                        <MdOutlineForum className='text-2xl mr-2 text-white' />
                        <div>
                            <h1 className='text-lg font-semibold text-white'>Forums</h1>
                            <p className='text-sm text-gray-400'>Discuss all things cybersecurity for free among <br /> the vast Cybrary community.</p>
                        </div>
                    </Link>
                </Dropdown.Item>
                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg hover:bg-gray-800 items-center'>
                    <Link to='free-access' className='flex items-center'>
                        <BsShieldCheck className='text-2xl mr-2 text-white' />
                        <div>
                            <h1 className='text-lg font-semibold text-white'>Free Access</h1>
                            <p className='text-sm text-gray-400 '>Get a taste of the catalog with certification <br />prep, introductory courses, and more.</p>
                        </div>
                    </Link>
                </Dropdown.Item>
                
                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                    <Link to='insider-pro' className='flex items-center'>
                        <GiProgression className='text-2xl mr-2 text-white' />
                        <div>
                            <h1 className='text-lg font-semibold text-white'>Insider Pro</h1>
                            <p className='text-sm text-gray-400 '>Everything you need to learn, practice, and  <br />prove your cybersecurity skills.</p>
                        </div>
                    </Link>
                </Dropdown.Item>
                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                    <Link to='for-teams' className='flex items-center'>
                        <RiTeamFill className='text-2xl mr-2 text-white' />
                        <div>
                            <h1 className='text-lg font-semibold text-white'>For Teams</h1>
                            <p className='text-sm text-gray-400 '>Build your team’s cybersecurity skills and  <br />achieve new certifications, all <br />in one place.</p>
                        </div>
                    </Link>
                </Dropdown.Item>
                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                    <Link to='insider-pro' className='flex items-center'>
                        <DiGitCompare className='text-2xl mr-2 text-white' />
                        <div>
                            <h1 className='text-lg font-semibold text-white'>Compare Plans</h1>
                            <p className='text-sm text-gray-400'>Compare features across all plans.</p>
                        </div>
                    </Link>
                </Dropdown.Item>
                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                    <Link to='insider-pro' className='flex items-center'>
                        <IoMdPerson className='text-2xl mr-2 text-white' />
                        <div>
                            <h1 className='text-lg font-semibold text-white'>Individuals</h1>
                        </div>
                    </Link>
                    <Dropdown.Submenu className='custom-submenu' position='right'>
                        <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                            <Link to='cybrary-insider' className='flex items-center'>
                                <h1 className='text-lg text-white '>Cybrary Insider Pro</h1>

                            </Link>
                        </Dropdown.Item>
                        <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                            <Link to='free-content' className='flex items-center'>
                                <h1 className='text-lg text-white '>Free Access</h1>
                            </Link>
                        </Dropdown.Item>
                        <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                            <Link to='career-path' className='flex items-center'>
                                <h1 className='text-lg text-white '>Career Paths</h1>
                            </Link>
                        </Dropdown.Item>
                        <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                            <Link to='success-stories' className='flex items-center'>
                                <h1 className='text-lg text-white '>Success Stories</h1>
                            </Link>
                        </Dropdown.Item>
                    </Dropdown.Submenu>
                </Dropdown.Item>
            </Dropdown>

            <Dropdown title='for Business ↴' className="dropdown-container"
                menuClassName="dropdown-menu p-2"
                itemClassName="dropdown-item"
                submenuClassName="dropdown-submenu" 
                openOnHover={isHovered}
                position='right'>
                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg hover:bg-gray-800 items-center'>
                    <Link to='business' className='flex items-center'>
                        <GiTeamIdea className='text-2xl mr-2 text-white' />
                        <div>
                            <h1 className='text-lg font-semibold text-white'>Teams Features</h1>
                            <p className='text-sm text-gray-400'>Build your team’s cybersecurity skills and <br /> achieve new certifications, all in <br />one place.</p>
                        </div>
                    </Link>
                </Dropdown.Item>
                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg hover:bg-gray-800 items-center'>
                    <Link to='government' className='flex items-center'>
                        <GiFamilyHouse className='text-2xl mr-2 text-white' />
                        <div>
                            <h1 className='text-lg font-semibold text-white'>For Government</h1>
                            <p className='text-sm text-gray-400'>Support your organization with a custom <br /> plan that works for your organization.</p>
                        </div>
                    </Link>
                </Dropdown.Item>
                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg hover:bg-gray-800 items-center'>
                    <Link to='mitre-attack' className='flex items-center'>
                        <TbTargetArrow className='text-2xl mr-2 text-white' />
                        <div>
                            <h1 className='text-lg font-semibold text-white'>Mission Readiness</h1>
                            <p className='text-sm text-gray-400'>Learn how to detect and mitigate the <br /> latest threats and vulnerabilities.</p>
                        </div>
                    </Link>
                    <Dropdown.Submenu className='custom-submenu' position='right'>
                        <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                            <Link to='threat-actor-campaign' className='flex items-center'>
                                <div>
                                    <h1 className='text-lg text-white'>Threat Actor Campaigns</h1>
                                </div>
                            </Link>
                            <Dropdown.Submenu className='custom-submenu' position='right'>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <Link to='threat-actor-campaign/magic-hound' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white'>Magic Hound</h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <Link to='threat-actor-campaign/double-trouble-with-double-dragon' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white'>Double trouble with Double <br />dragon
                                            </h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <Link to='threat-actor-campaign/weak-link-in-the-supply-chain' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white'>Weak link in the Supply chain
                                            </h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <Link to='threat-actor-campaign/spinning-a-web-shell-for-initial-access' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white'>Spinning a web shell for initial <br />access
                                            </h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <Link to='threat-actor-campaign/exfiltration-and-extortion' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white'>Exfiltration and Extortion
                                            </h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                            </Dropdown.Submenu>
                        </Dropdown.Item>
                        <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                            <h1 className='text-lg text-white'>CVE Series</h1>

                            <Dropdown.Submenu className='custom-submenu' position='right'>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <Link to='course/cve-series-f5-big-ip-cve-2022-1388' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white'>CVE Series: F5 Big IP <br /> (CVE 2022 1388)</h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <Link to='course/cve-series-couchdb-rce-cve-2022-24706' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white'>CVE Series: CouchDB RCE  <br />(CVE-2022-24706)
                                            </h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <Link to='course//cve-series-atlassian-bitbucket-command-injection-cve-2022-36804' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white'>CVE Series: Atlassian <br />Bitbucket  Command Injection <br /> (CVE-2022-36804)
                                            </h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <Link to='course/cve-series-grafana-directory-traversal-cve-2021-43798' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white'>CVE Series: Grafana Directory <br /> Traversal (CVE-2021-43798)
                                            </h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <Link to='course/cve-series-blind-nosql-injection-cve-2021-22911' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white'>CVE Series: Blind NoSQL <br /> Injection (CVE-2021-22911)
                                            </h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <Link to='course/cve-series-apache-httpd-cve-2021-42013' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white'>CVE Series: Apache HTTPD <br />(CVE-2021-42013)
                                            </h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                            </Dropdown.Submenu>
                        </Dropdown.Item>
                        <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                            <h1 className='text-lg text-white'>Cybrary Challenges</h1>
                            <Dropdown.Submenu className='custom-submenu' position='right'>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <Link to='course/cybrary-challenge-space-mission1' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white'>Challenge: Space Mission</h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <Link to='course/cybrary-challenge-a-message-within-a-message' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white'>Challenge: A Message Within A <br /> Message
                                            </h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <Link to='course/cybrary-challenge-donot-believe-what-you-hear' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white'>Challenge: Don't Believe What <br />You Hear
                                            </h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <Link to='course/cybrary-challenge-chatting-with-chatgpt' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white'>Challenge: Chatting with ChatGPT
                                            </h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <Link to='course/cybrary-challenge-saving-a-fellow-monster' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white'>Challenge: Saving a Fellow <br />Monster
                                            </h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <Link to='course/cybrary-challenge-gobble-gobble-conceal-and-deceive' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white'>Challenge: Gobble Gobble <br />Conceal and Deceive
                                            </h1>
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                            </Dropdown.Submenu>
                        </Dropdown.Item>
                        <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                            <Link to='mitre-attack' className='flex items-center'>
                                <div>
                                    <h1 className='text-lg text-white'>MITRE ATTACK</h1>
                                </div>
                            </Link>
                        </Dropdown.Item>
                    </Dropdown.Submenu>
                </Dropdown.Item>

                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg hover:bg-gray-800 items-center'>
                    <Link to='business' className='flex items-center'>
                        <BiSolidBusiness className='text-2xl mr-2 text-white' />
                        <div>
                            <h1 className='text-lg font-semibold text-white'>Business Resources</h1>
                            <p className='text-sm text-gray-400'>Learn how Cybrary can help <br /> your team thrive.</p>
                        </div>
                    </Link>
                    <Dropdown.Submenu className='custom-submenu' position='right'>
                        <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                            <Link to='business-resources#case-studies' className='flex items-center'>
                                <div>
                                    <h1 className='text-lg text-white'>Case Studies</h1>
                                </div>
                            </Link>
                        </Dropdown.Item>
                        <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                            <Link to='business-resources#case-studies' className='flex items-center'>
                                <div>
                                    <h1 className='text-lg text-white'>Research Pages</h1>
                                </div>
                            </Link>
                        </Dropdown.Item>
                        <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                            <Link to='business-resources#case-studies' className='flex items-center'>
                                <div>
                                    <h1 className='text-lg text-white'>Articles</h1>
                                </div>
                            </Link>
                        </Dropdown.Item>
                        <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                            <Link to='business-resources#case-studies' className='flex items-center'>
                                <div>
                                    <h1 className='text-lg text-white'>White Pages</h1>
                                </div>
                            </Link>
                        </Dropdown.Item>
                    </Dropdown.Submenu>
                </Dropdown.Item>
                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg hover:bg-gray-800 items-center'>
                    <Link to='industry' className='flex items-center'>
                        <SiFramework className='text-2xl mr-2 text-white' />
                        <div>
                            <h1 className='text-lg font-semibold text-white'>Framework Alignment</h1>
                            <p className='text-sm text-gray-400'>Learn how Cybrary aligns to <br />established industry frameworks.</p>
                        </div>
                    </Link>
                </Dropdown.Item>
                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg hover:bg-gray-800 items-center'>
                    <Link to='free-access' className='flex items-center'>
                        <MdCompareArrows className='text-2xl mr-2 text-white' />
                        <div>
                            <h1 className='text-lg font-semibold text-white'>Teams Pricing</h1>
                            <p className='text-sm text-gray-400'>Compare features across all <br /> plans.</p>
                        </div>
                    </Link>
                </Dropdown.Item>
                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg hover:bg-gray-800 items-center'>
                    <RiTeamFill className='text-2xl mr-2 text-white' />
                    <div>
                        <h1 className='text-lg font-semibold text-white'>Teams</h1>
                    </div>
                    <Dropdown.Submenu className='custom-submenu' position='right'>
                        <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                            <Link to='business' className='flex items-center'>
                                <div>
                                    <h1 className='text-lg text-white'>For Security Teams</h1>
                                </div>
                            </Link>
                        </Dropdown.Item>
                        <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                            <Link to='Baselining' className='flex items-center'>
                                <div>
                                    <h1 className='text-lg text-white'>Baselining</h1>
                                </div>
                            </Link>
                        </Dropdown.Item>
                        <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                            <Link to='government' className='flex items-center'>
                                <div>
                                    <h1 className='text-lg text-white'>For Government</h1>
                                </div>
                            </Link>
                        </Dropdown.Item>
                        <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                            <Link to='business-resources#case-studies' className='flex items-center'>
                                <div>
                                    <h1 className='text-lg text-white'>Team Resources</h1>
                                </div>
                            </Link>
                        </Dropdown.Item>
                    </Dropdown.Submenu>
                </Dropdown.Item>

            </Dropdown>
            <li className="text-[18px] cursor-pointer flex items-center">Pricing </li>
        </div >

    );
}

export default CustomDropDown;
