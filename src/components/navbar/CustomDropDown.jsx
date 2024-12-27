import React, { useState } from 'react';
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
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';

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
                    <NavLink to='career-path' className='flex items-center '>
                        <RiShoppingBag4Line className='text-2xl mr-2 text-white group-hover:text-black' />
                        <div className='flex flex-col flex-wrap w-full'>
                            <h1 className='text-lg font-semibold text-white group-hover:text-black '>Career Paths</h1>
                            <p className='text-sm text-gray-400 flex flex-wrap w-full'>Launch or advance your career with curated <br />collections of courses, labs, and more.</p>
                        </div>
                    </NavLink>
                </Dropdown.Item>

                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                    <NavLink to='skill-paths' className='flex items-center'>
                        <GiSkills className='text-2xl mr-2 text-white' />
                        <div>
                            <h1 className='text-lg font-semibold text-white'>Skill Paths</h1>
                            <p className='text-sm text-gray-400 '>Launch or advance your career with curated <br />collections of courses, labs, and more.</p>
                        </div>
                    </NavLink>
                </Dropdown.Item>

                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg hover:bg-gray-800 items-center'>
                    <NavLink to='certification-prep' className='flex items-center'>
                        <PiCertificateBold className='text-2xl mr-2 text-white' />
                        <div>
                            <h1 className='text-lg font-semibold text-white'>Certification Prep</h1>
                            <p className='text-sm text-gray-400 '>Prepare for and maintain leading <br />cybersecurity certifications.</p>
                        </div>
                    </NavLink>
                    <Dropdown.Submenu className='custom-submenu' position='right'>
                        <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                            <h1 className='text-lg text-white'>Beginner</h1>
                            <Dropdown.Submenu className='custom-submenu-submenu' position='right'>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center '>
                                    <NavLink to='certification-prep-courses/security-plus' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white '>Comptia Security+ Certification Prep</h1>
                                        </div>
                                    </NavLink>
                                </Dropdown.Item>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <NavLink to='course/comptia-project-plus-pk0-004' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white '>CompTIA Project+ Certification <br /> Training (PKO-004)</h1>
                                        </div>
                                    </NavLink>
                                </Dropdown.Item>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <NavLink to='certification-prep-courses/microsoft-azure-fundamentals' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white '>AZ 900 Azure Fundamentals</h1>
                                        </div>
                                    </NavLink>
                                </Dropdown.Item>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <NavLink to='course/comptia-a-plus' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white '>CompTIA A+ Certification Course <br /> & Training</h1>
                                        </div>
                                    </NavLink>
                                </Dropdown.Item>
                            </Dropdown.Submenu>
                        </Dropdown.Item>
                        <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                            <h1 className='text-lg text-white'>Intermediate</h1>
                            <Dropdown.Submenu className='custom-submenu-submenu' position='right'>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <NavLink to='certification-prep-courses/certified-information-systems-auditor' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white'>CISA Certification Prep</h1>
                                        </div>
                                    </NavLink>
                                </Dropdown.Item>

                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <NavLink to='certification-prep-courses/cybersec-first-responder' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white '>CertNexus Cybersec First Responder <br /> Certification Prep</h1>
                                        </div>
                                    </NavLink>
                                </Dropdown.Item>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <NavLink to='certification-prep-courses/certified-cloud-security-professional' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white '>Certified Cloud Security Professional <br /> (CCSP) Certification Prep</h1>
                                        </div>
                                    </NavLink>
                                </Dropdown.Item>

                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <NavLink to='certification-prep-courses/aws-certified-security-specialty' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white '>AWS Certified Security Specialty <br /> Certification Prep</h1>
                                        </div>
                                    </NavLink>
                                </Dropdown.Item>
                            </Dropdown.Submenu>
                        </Dropdown.Item>
                        <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                            <h1 className='text-lg text-white'>Advance</h1>
                            <Dropdown.Submenu className='custom-submenu-submenu' position='right'>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <NavLink to='certification-prep-courses/certified-in-risk-and-information-systems-control-crisc' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white '>CRISC Certification Prep</h1>
                                        </div>
                                    </NavLink>
                                </Dropdown.Item>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <NavLink to='certification-prep-courses/designing-microsoft-azure-infrastructure-solutions' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white '>AZ-305 Designing Microsoft Azure <br /> Infrastructure Solutions <br /> Certification Prep</h1>
                                        </div>
                                    </NavLink>
                                </Dropdown.Item>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <NavLink to='certification-prep-courses/casp-plus' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white '>CompTIA CASP+ Certification Prep</h1>
                                        </div>
                                    </NavLink>
                                </Dropdown.Item>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <NavLink to='course/certified-information-systems-security-professional' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white '>CISSP Certification Prep</h1>
                                        </div>
                                    </NavLink>
                                </Dropdown.Item>
                            </Dropdown.Submenu>
                        </Dropdown.Item>
                    </Dropdown.Submenu>
                </Dropdown.Item>

                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg hover:bg-gray-800 items-center'>
                    <NavLink to='/mitre-attack' className='flex items-center'>
                        <PiTargetLight className='text-2xl mr-2 text-white' />
                        <div>
                            <h1 className='text-lg font-semibold text-white'>Mission Readiness</h1>
                            <p className='text-sm text-gray-400 '>Learn how to detect and mitigate the <br />latest threats and vulnerabilities.</p>
                        </div>
                    </NavLink>
                    <Dropdown.Submenu className='custom-submenu' position='right'>
                        <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                            <NavLink to='course/application-of-the-mitre-attack-framework' className='flex items-center'>
                                <h1 className='text-lg text-white '>Application of the MITRE <br /> ATT&CK Framework</h1>
                            </NavLink>
                        </Dropdown.Item>
                    </Dropdown.Submenu>
                </Dropdown.Item>

                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg hover:bg-gray-800 items-center'>
                    <NavLink to='catalog' className='flex items-center'>
                        <PiBrowsersLight className='text-2xl mr-2 text-white' />
                        <div>
                            <h1 className='text-lg font-semibold text-white'>Browse the Catalog</h1>
                        </div>
                    </NavLink>
                </Dropdown.Item>

                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg hover:bg-gray-800 items-center'>
                    <NavLink to='instructor' className='flex items-center'>
                        <RiQuestionAnswerLine className='text-2xl mr-2 text-white' />
                        <div>
                            <h1 className='text-lg font-semibold text-white'>Instructors</h1>
                        </div>
                    </NavLink>
                </Dropdown.Item>
            </Dropdown>

            <Dropdown title='for individuals ↴' className='dropdown-container'
                menuClassName="dropdown-menu p-2 "
                itemClassName="dropdown-item text-white "
                submenuClassName="dropdown-submenu "
                openOnHover={isHovered}
                position='right'>

                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg hover:bg-gray-800 items-center'>
                    <NavLink to='career-path' className='flex items-center'>
                        <RiShoppingBag4Line className='text-2xl mr-2 text-white' />
                        <div>
                            <h1 className='heading text-lg font-semibold text-white'>Career Paths</h1>
                            <p className='text-sm text-gray-400 '>Launch or advance your career with curated <br />collections of courses, labs, and more</p>
                        </div>
                    </NavLink>
                    <Dropdown.Submenu className='custom-submenu' position='right'>
                        <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                            <h1 className='text-lg text-white'>Foundations</h1>
                            <Dropdown.Submenu className='custom-submenu-submenu' position='right'>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center '>
                                    <NavLink to='career-path/foundations' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white '>IT and Cybersecurity Foundations</h1>
                                        </div>
                                    </NavLink>
                                </Dropdown.Item>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <NavLink to='career-path/foundations' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white '>IT and Cybersecurity Foundations <br /> career path</h1>
                                        </div>
                                    </NavLink>
                                </Dropdown.Item>
                            </Dropdown.Submenu>
                        </Dropdown.Item>
                        <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                            <h1 className='text-lg text-white'>Defensive Security</h1>
                            <Dropdown.Submenu className='custom-submenu-submenu' position='right'>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <NavLink to='career-path/incident-handler' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white'>Become an Incident Handler</h1>
                                        </div>
                                    </NavLink>
                                </Dropdown.Item>

                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <NavLink to='career-path/soc-analyst' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white '>Become an SOC Analyst - Level 1</h1>
                                        </div>
                                    </NavLink>
                                </Dropdown.Item>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <NavLink to='career-path/incident-handler' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white '>Incident Handler Collections</h1>
                                        </div>
                                    </NavLink>
                                </Dropdown.Item>

                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <NavLink to='career-path/soc-analyst' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white '>SOC Analyst Career Path</h1>
                                        </div>
                                    </NavLink>
                                </Dropdown.Item>
                            </Dropdown.Submenu>
                        </Dropdown.Item>
                        <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                            <h1 className='text-lg text-white'>Offensive Security</h1>
                            <Dropdown.Submenu className='custom-submenu-submenu' position='right'>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <NavLink to='career-path/penetration-tester' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white '>Become a Penetration Tester</h1>
                                        </div>
                                    </NavLink>
                                </Dropdown.Item>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <NavLink to='career-path/penetration-tester' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white '>Penetration Tester Career Path</h1>
                                        </div>
                                    </NavLink>
                                </Dropdown.Item>
                            </Dropdown.Submenu>
                        </Dropdown.Item>
                        <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                            <h1 className='text-lg text-white'>Engineering and Operations</h1>
                            <Dropdown.Submenu className='custom-submenu-submenu' position='right'>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <NavLink to='career-path/network-engineer' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white '>Become a Network Engineer</h1>
                                        </div>
                                    </NavLink>
                                </Dropdown.Item>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <NavLink to='career-path/security-engineer' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white '>Become a Cybersecurity Engineer</h1>
                                        </div>
                                    </NavLink>
                                </Dropdown.Item>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <NavLink to='career-path/microsoft-azure-cloud-engineer' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white '>Become an Azure Cloud Engineer</h1>
                                        </div>
                                    </NavLink>
                                </Dropdown.Item>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <NavLink to='career-path/system-administrator' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white '>Become a System Administrator</h1>
                                        </div>
                                    </NavLink>
                                </Dropdown.Item>
                            </Dropdown.Submenu>
                        </Dropdown.Item>
                        <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                            <h1 className='text-lg text-white'>Leadership and Management</h1>
                            <Dropdown.Submenu className='custom-submenu-submenu' position='right'>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <NavLink to='career-path/leadership-and-management' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white '>Become a CISO</h1>
                                        </div>
                                    </NavLink>
                                </Dropdown.Item>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <NavLink to='career-path/50-ciso-security-controls' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white '>50 CISO Security Controls</h1>
                                        </div>
                                    </NavLink>
                                </Dropdown.Item>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <NavLink to='career-path/12-competencies-of-the-effective-ciso' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white '>12 Competencies of the Effective <br /> CISO</h1>
                                        </div>
                                    </NavLink>
                                </Dropdown.Item>
                            </Dropdown.Submenu>
                        </Dropdown.Item>
                    </Dropdown.Submenu>
                </Dropdown.Item>

                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg hover:bg-gray-800 items-center'>
                    <NavLink to='forum' className='flex items-center'>
                        <MdOutlineForum className='text-2xl mr-2 text-white' />
                        <div>
                            <h1 className='text-lg font-semibold text-white'>Forums</h1>
                            <p
                                className='text-sm text-gray-400'>Discuss all things cybersecurity for free among <br /> the vast Cybrary community.</p>
                        </div>
                    </NavLink>
                </Dropdown.Item>
                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg hover:bg-gray-800 items-center'>
                    <NavLink to='free-content' className='flex items-center'>
                        <BsShieldCheck className='text-2xl mr-2 text-white' />
                        <div>
                            <h1 className='text-lg font-semibold text-white'>Free Access</h1>
                            <p className='text-sm text-gray-400 '>Get a taste of the catalog with certification <br />prep, introductory courses, and more.</p>
                        </div>
                    </NavLink>
                </Dropdown.Item>

                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                    <NavLink to='insider-pro' className='flex items-center'>
                        <GiProgression className='text-2xl mr-2 text-white' />
                        <div>
                            <h1 className='text-lg font-semibold text-white'>Insider Pro</h1>
                            <p className='text-sm text-gray-400 '>Everything you need to learn, practice, and  <br />prove your cybersecurity skills.</p>
                        </div>
                    </NavLink>
                </Dropdown.Item>
                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                    <NavLink to='for-teams' className='flex items-center'>
                        <RiTeamFill className='text-2xl mr-2 text-white' />
                        <div>
                            <h1 className='text-lg font-semibold text-white'>For Teams</h1>
                            <p className='text-sm text-gray-400 '>Build your team’s cybersecurity skills and  <br />achieve new certifications, all <br />in one place.</p>
                        </div>
                    </NavLink>
                </Dropdown.Item>
                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                    <NavLink to='upgrade' className='flex items-center'>
                        <DiGitCompare className='text-2xl mr-2 text-white' />
                        <div>
                            <h1 className='text-lg font-semibold text-white'>Compare Plans</h1>
                            <p className='text-sm text-gray-400'>Compare features across all plans.</p>
                        </div>
                    </NavLink>
                </Dropdown.Item>
                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                    <NavLink to='' className='flex items-center'>
                        <IoMdPerson className='text-2xl mr-2 text-white' />
                        <div>
                            <h1 className='text-lg font-semibold text-white'>Individuals</h1>
                        </div>
                    </NavLink>
                    <Dropdown.Submenu className='custom-submenu' position='right'>
                        <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                            <NavLink to='insider-pro' className='flex items-center'>
                                <h1 className='text-lg text-white '>Cybrary Insider Pro</h1>
                            </NavLink>
                        </Dropdown.Item>
                        <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                            <NavLink to='free-content' className='flex items-center'>
                                <h1 className='text-lg text-white '>Free Access</h1>
                            </NavLink>
                        </Dropdown.Item>
                        <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                            <NavLink to='career-path' className='flex items-center'>
                                <h1 className='text-lg text-white '>Career Paths</h1>
                            </NavLink>
                        </Dropdown.Item>
                        <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                            <NavLink to='success-stories' className='flex items-center'>
                                <h1 className='text-lg text-white '>Success Stories</h1>
                            </NavLink>
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
                    <NavLink to='business' className='flex items-center'>
                        <GiTeamIdea className='text-2xl mr-2 text-white' />
                        <div>
                            <h1 className='text-lg font-semibold text-white'>Teams Features</h1>
                            <p className='text-sm text-gray-400'>Build your team’s cybersecurity skills and <br /> achieve new certifications, all in <br />one place.</p>
                        </div>
                    </NavLink>
                </Dropdown.Item>

                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg hover:bg-gray-800 items-center'>
                    <NavLink to='government' className='flex items-center'>
                        <GiFamilyHouse className='text-2xl mr-2 text-white' />
                        <div>
                            <h1 className='text-lg font-semibold text-white'>For Government</h1>
                            <p className='text-sm text-gray-400'>Support your organization with a custom <br /> plan that works for your organization.</p>
                        </div>
                    </NavLink>
                </Dropdown.Item>

                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg hover:bg-gray-800 items-center'>
                    <NavLink to='mitre-attack' className='flex items-center'>
                        <TbTargetArrow className='text-2xl mr-2 text-white' />
                        <div>
                            <h1 className='text-lg font-semibold text-white'>Mission Readiness</h1>
                            <p className='text-sm text-gray-400'>Learn how to detect and mitigate the <br /> latest threats and vulnerabilities.</p>
                        </div>
                    </NavLink>
                    <Dropdown.Submenu className='custom-submenu' position='right'>
                        <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                            <NavLink to='threat-actor-campaign' className='flex items-center'>
                                <div>
                                    <h1 className='text-lg text-white'>Threat Actor Campaigns</h1>
                                </div>
                            </NavLink>
                            <Dropdown.Submenu className='custom-submenu' position='right'>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <NavLink to='threat-actor-campaign/magic-hound' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white'>Magic Hound</h1>
                                        </div>
                                    </NavLink>
                                </Dropdown.Item>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <NavLink to='threat-actor-campaign/raspberry-robin' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white'>Raspberry Robin</h1>
                                        </div>
                                    </NavLink>
                                </Dropdown.Item>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <NavLink to='threat-actor-campaign/double-trouble-with-double-dragon' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white'>Double trouble with Double <br />dragon</h1>
                                        </div>
                                    </NavLink>
                                </Dropdown.Item>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <NavLink to='threat-actor-campaign/weak-link-in-the-supply-chain' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white'>Weak link in the Supply chain</h1>
                                        </div>
                                    </NavLink>
                                </Dropdown.Item>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <NavLink to='threat-actor-campaign/spinning-a-web-shell-for-initial-access' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white'>Spinning a web shell for initial <br />access</h1>
                                        </div>
                                    </NavLink>
                                </Dropdown.Item>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <NavLink to='threat-actor-campaign/exfiltration-and-extortion' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white'>Exfiltration and Extortion</h1>
                                        </div>
                                    </NavLink>
                                </Dropdown.Item>
                            </Dropdown.Submenu>
                        </Dropdown.Item>
                        <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                            <h1 className='text-lg text-white'>CVE Series</h1>
                            <Dropdown.Submenu className='custom-submenu' position='right'>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <NavLink to='course/cve-series-f5-big-ip-cve-2022-1388' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white'>CVE Series: F5 Big IP <br />(CVE 2022 1388)</h1>
                                        </div>
                                    </NavLink>
                                </Dropdown.Item>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <NavLink to='course/cve-series-couchdb-rce-cve-2022-24706' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white'>CVE Series: CouchDB RCE <br />(CVE-2022-24706)</h1>
                                        </div>
                                    </NavLink>
                                </Dropdown.Item>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <NavLink to='course/cve-series-atlassian-bitbucket-command-injection-cve-2022-36804' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white'>CVE Series: Atlassian <br />Bitbucket Command Injection <br />(CVE-2022-36804)</h1>
                                        </div>
                                    </NavLink>
                                </Dropdown.Item>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <NavLink to='course/cve-series-grafana-directory-traversal-cve-2021-43798' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white'>CVE Series: Grafana Directory <br />Traversal (CVE-2021-43798)</h1>
                                        </div>
                                    </NavLink>
                                </Dropdown.Item>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <NavLink to='course/cve-series-blind-nosql-injection-cve-2021-22911' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white'>CVE Series: Blind NoSQL <br />Injection (CVE-2021-22911)</h1>
                                        </div>
                                    </NavLink>
                                </Dropdown.Item>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <NavLink to='course/cve-series-apache-httpd-cve-2021-42013' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white'>CVE Series: Apache HTTPD <br />(CVE-2021-42013)</h1>
                                        </div>
                                    </NavLink>
                                </Dropdown.Item>
                            </Dropdown.Submenu>
                        </Dropdown.Item>
                        <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                            <h1 className='text-lg text-white'>Cybrary Challenges</h1>
                            <Dropdown.Submenu className='custom-submenu' position='right'>
                                < Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <NavLink to='course/cybrary-challenge-space-mission1' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white'>Challenge: Space Mission</h1>
                                        </div>
                                    </NavLink>
                                </Dropdown.Item>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <NavLink to='course/cybrary-challenge-a-message-within-a-message' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white'>Challenge: A Message Within A <br /> Message</h1>
                                        </div>
                                    </NavLink>
                                </Dropdown.Item>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <NavLink to='course/cybrary-challenge-donot-believe-what-you-hear' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white'>Challenge: Don't Believe What <br />You Hear</h1>
                                        </div>
                                    </NavLink>
                                </Dropdown.Item>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <NavLink to='course/cybrary-challenge-chatting-with-chatgpt' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white'>Challenge: Chatting with ChatGPT</h1>
                                        </div>
                                    </NavLink>
                                </Dropdown.Item>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <NavLink to='course/cybrary-challenge-saving-a-fellow-monster' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white'>Challenge: Saving a Fellow <br />Monster</h1>
                                        </div>
                                    </NavLink>
                                </Dropdown.Item>
                                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                                    <NavLink to='course/cybrary-challenge-gobble-gobble-conceal-and-deceive' className='flex items-center'>
                                        <div>
                                            <h1 className='text-lg text-white'>Challenge: Gobble Gobble <br />Conceal and Deceive</h1>
                                        </div>
                                    </NavLink>
                                </Dropdown.Item>
                            </Dropdown.Submenu>
                        </Dropdown.Item>
                        <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                            <NavLink to='mitre-attack' className='flex items-center'>
                                <div>
                                    <h1 className='text-lg text-white'>MITRE ATTACK</h1>
                                </div>
                            </NavLink>
                        </Dropdown.Item>
                    </Dropdown.Submenu>
                </Dropdown.Item>

                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg hover:bg-gray-800 items-center'>
                    <NavLink to='business' className='flex items-center'>
                        <BiSolidBusiness className='text-2xl mr-2 text-white' />
                        <div>
                            <h1 className='text-lg font-semibold text-white'>Business Resources</h1>
                            <p className='text-sm text-gray-400'>Learn how Cybrary can help <br /> your team thrive.</p>
                        </div>
                    </NavLink>
                    <Dropdown.Submenu className='custom-submenu' position='right'>
                        <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                            <NavLink to='business-resources#case-studies' className='flex items-center'>
                                <div>
                                    <h1 className='text-lg text-white'>Case Studies</h1>
                                </div>
                            </NavLink>
                        </Dropdown.Item>
                        <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                            <NavLink to='business-resources#research-pages' className='flex items-center'>
                                <div>
                                    <h1 className='text-lg text-white'>Research Pages</h1>
                                </div>
                            </NavLink>
                        </Dropdown.Item>
                        <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                            <NavLink to='business-resources#articles' className='flex items-center'>
                                <div>
                                    <h1 className='text-lg text-white'>Articles</h1>
                                </div>
                            </NavLink>
                        </Dropdown.Item>
                        <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                            <NavLink to='business-resources#white-pages' className='flex items-center'>
                                <div>
                                    <h1 className='text-lg text-white'>White Pages</h1>
                                </div>
                            </NavLink>
                        </Dropdown.Item>
                    </Dropdown.Submenu>
                </Dropdown.Item>

                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg hover:bg-gray-800 items-center'>
                    <NavLink to='industry' className='flex items-center'>
                        <SiFramework className='text-2xl mr-2 text-white' />
                        <div>
                            <h1 className='text-lg font-semibold text-white'>Framework Alignment</h1>
                            <p className='text-sm text-gray-400'>Learn how Cybrary aligns to <br />established industry frameworks.</p>
                        </div>
                    </NavLink>
                </Dropdown.Item>

                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg hover:bg-gray-800 items-center'>
                    <NavLink to='pricing' className='flex items-center'>
                        <MdCompareArrows className='text-2xl mr-2 text-white' />
                        <div>
                            <h1 className='text-lg font-semibold text-white'>Teams Pricing</h1>
                            <p className='text-sm text-gray-400'>Compare features across all <br /> plans.</p>
                        </div>
                    </NavLink>
                </Dropdown.Item>

                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg hover:bg-gray-800 items-center'>
                    <RiTeamFill className='text-2xl mr-2 text-white' />
                    <div>
                        <h1 className='text-lg font-semibold text-white'>Teams</h1>
                    </div>
                    <Dropdown.Submenu className='custom-submenu' position='right'>
                        <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                            <NavLink to='business' className='flex items-center'>
                                <div>
                                    <h1 className='text-lg text-white'>For Security Teams</h1>
                                </div>
                            </NavLink>
                        </Dropdown.Item>
                        <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                            <NavLink to='baseline' className='flex items-center'>
                                <div>
                                    <h1 className='text-lg text-white'>Baselining</h1>
                                </div>
                            </NavLink>
                        </Dropdown.Item>
                        <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                            <NavLink to='government' className='flex items-center'>
                                <div>
                                    <h1 className='text-lg text-white'>For Government</h1>
                                </div>
                            </NavLink>
                        </Dropdown.Item>
                        <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                            <NavLink to='business-resources#case-studies' className='flex items-center'>
                                <div>
                                    <h1 className='text-lg text-white'>Team Resources</h1>
                                </div>
                            </NavLink>
                        </Dropdown.Item>
                    </Dropdown.Submenu>
                </Dropdown.Item>
            </Dropdown>
            <Dropdown title='Resources ↴' className="dropdown-container"
                menuClassName="dropdown-menu p-2"
                itemClassName="dropdown-item"
                submenuClassName="dropdown-submenu"
                openOnHover={isHovered}
                position='right'>

                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg hover:bg-gray-800 items-center'>
                    <NavLink to='' className='flex items-center'>
                        <BiSolidBusiness className='text-2xl mr-2 text-white' />
                        <div>
                            <h1 className='text-lg font-semibold text-white'>Career Resources</h1>
                            <p className='text-sm text-gray-400'>Discover all the information you need to <br />launch a cybersecurity career.</p>
                        </div>
                    </NavLink>
                    <Dropdown.Submenu className='custom-submenu' position='right'>
                        <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                            <NavLink to='business-resources/how-to-retool-it-skills-for-cybersecurity-roles' className='flex items-center'>
                                <div>
                                    <h1 className='text-lg text-white'>How to Retool IT Skills for <br />Cybersecurity Roles</h1>
                                </div>
                            </NavLink>
                        </Dropdown.Item>
                        <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                            <NavLink to='resources/cybersecurity-career-guide' className='flex items-center'>
                                <div>
                                    <h1 className='text-lg text-white'>The Complete Cybersecurity <br /> Career Playbook</h1>
                                </div>
                            </NavLink>
                        </Dropdown.Item>
                    </Dropdown.Submenu>
                </Dropdown.Item>

                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg hover:bg-gray-800 items-center'>
                    <NavLink to='podcast' className='flex items-center'>
                        <SiFramework className='text-2xl mr-2 text-white' />
                        <div>
                            <h1 className='text-lg font-semibold text-white'>Podcasts</h1>
                            <p className='text-sm text-gray-400'>Listen to industry experts talk about <br /> the latest news and trends in security.</p>
                        </div>
                    </NavLink>
                    <Dropdown.Submenu className='custom-submenu' position='right'>
                        <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                            <NavLink to='podcast-series/go-for-it' className='flex items-center'>
                                <div>
                                    <h1 className='text-lg text-white'>Go For It</h1>
                                </div>
                            </NavLink>
                        </Dropdown.Item>
                        <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                            <NavLink to='podcast-series/401-access-denied' className='flex items-center'>
                                <div>
                                    <h1 className='text-lg text-white'>401 Access Denied</h1>
                                </div>
                            </NavLink>
                        </Dropdown.Item>
                        <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                            <NavLink to='podcast' className='flex items-center'>
                                <div>
                                    <h1 className='text-lg text-white'>Cybrary Podcasts</h1>
                                </div>
                            </NavLink>
                        </Dropdown.Item>
                        <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                            <NavLink to='podcast-series/intruder-alert' className='flex items-center'>
                                <div>
                                    <h1 className='text-lg text-white'>Intruder Alert: Conversations <br />with Cybrary's Hackers</h1>
                                </div>
                            </NavLink>
                        </Dropdown.Item>
                    </Dropdown.Submenu>
                </Dropdown.Item>

                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg hover:bg-gray-800 items-center'>
                    < NavLink to='' className='flex items-center'>
                        <RiTeamFill className='text-2xl mr-2 text-white' />
                        <div>
                            <h1 className='text-lg font-semibold text-white'>Study Guides</h1>
                            <p className='text-sm text-gray-400'>Supplement Certification Prep courses <br /> to prepare for exams.</p>
                        </div>
                    </NavLink>
                    <Dropdown.Submenu className='custom-submenu' position='right'>
                        <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                            <NavLink to='study-guide/comptia-a-plus' className='flex items-center'>
                                <div>
                                    <h1 className='text-lg text-white'>CompTIA A+</h1>
                                </div>
                            </NavLink>
                        </Dropdown.Item>
                        <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                            <NavLink to='study-guide/chfi' className='flex items-center'>
                                <div>
                                    <h1 className='text-lg text-white'>Computer Hacking Forensic <br />investigator</h1>
                                </div>
                            </NavLink>
                        </Dropdown.Item>
                        <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                            <NavLink to='study-guide/comptia-security-plus' className='flex items-center'>
                                <div>
                                    <h1 className='text-lg text-white'>CompTIA Sec+</h1>
                                </div>
                            </NavLink>
                        </Dropdown.Item>
                        <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                            <NavLink to='study-guide/ccna' className='flex items-center'>
                                <div>
                                    <h1 className='text-lg text-white'>Cisco CCNA</h1>
                                </div>
                            </NavLink>
                        </Dropdown.Item>
                        <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                            <NavLink to='study-guide/comptia-network-plus' className='flex items-center'>
                                <div>
                                    <h1 className='text-lg text-white'>CompTIA Network+</h1>
                                </div>
                            </NavLink>
                        </Dropdown.Item>
                        <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                            <NavLink to='study-guide/pmp' className='flex items-center'>
                                <div>
                                    <h1 className='text-lg text-white'>Project Management Professional</h1>
                                </div>
                            </NavLink>
                        </Dropdown.Item>
                        <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                            <NavLink to='study-guide/casp' className='flex items-center'>
                                <div>
                                    <h1 className='text-lg text-white'>CompTIA CASP</h1>
                                </div>
                            </NavLink>
                        </Dropdown.Item>
                        <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                            <NavLink to='study-guide/ceh' className='flex items-center'>
                                <div>
                                    <h1 className='text-lg text-white'>Certified Ethical Hacker</h1>
                                </div>
                            </NavLink>
                        </Dropdown.Item>
                        <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                            <NavLink to='study-guide/cissp' className='flex items-center'>
                                <div>
                                    <h1 className='text-lg text-white'>ISC2 CISSP</h1>
                                </div>
                            </NavLink>
                        </Dropdown.Item>
                    </Dropdown.Submenu>
                </Dropdown.Item>

                <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg hover:bg-gray-800 items-center'>
                    <NavLink to='webinar' className='flex items-center'>
                        <MdCompareArrows className='text-2xl mr-2 text-white' />
                        <div>
                            <h1 className='text-lg font-semibold text-white'>Webinar</h1>
                            <p className='text-sm text-gray-400'>Get industry advice straight from <br /> the experts' mouths.</p>
                        </div>
                    </NavLink>
                    <Dropdown.Submenu className='custom-submenu' position='right'>
                        <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                            <Link to='webinar#ctig' className='flex items-center' smooth={true} duration={500}>
                                <div>
                                    <h1 className='text-lg text-white'>Cybrary Threat Intelligence <br /> Group (CTIG)</h1>
                                </div>
                            </Link>
                        </Dropdown.Item>
                        <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                            <Link to='webinar#team-management' className='flex items-center' smooth={true} duration={500}>
                                <div>
                                    <h1 className='text-lg text-white'>Team Management</h1>
                                </div>
                            </Link>
                        </Dropdown.Item>
                        <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                            <Link to='webinar#career-skills-development' className='flex items-center' smooth={true} duration={500}>
                                <div>
                                    <h1 className='text-lg text-white'>Career and Skills Development</h1>
                                </div>
                            </Link>
                        </Dropdown.Item>
                        <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                            <Link to='webinar#certifications' className='flex items-center' smooth={true} duration={500}>
                                <div>
                                    <h1 className='text-lg text-white'>Certifications</h1>
                                </div>
                            </Link>
                        </Dropdown.Item>
                        <Dropdown.Item className='dropdown-hover flex gap-2 p-2 rounded-lg items-center'>
                            <Link to='webinar#news-events' className='flex items-center' smooth={true} duration={500}>
                                <div>
                                    <h1 className='text-lg text-white'>New and Events</h1>
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
