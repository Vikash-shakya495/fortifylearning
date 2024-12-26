import React from 'react';
import { MdOutlineForum } from "react-icons/md";
import { RiArrowRightSLine } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { togglePopup } from '../../store/signupPopupSlice';
import SignupPopup from '../../loginSystem/SignupPopup';
function PricingPlans() {
    const dispatch = useDispatch();
    return (
        <div className='w-5/6 mx-auto'>
            <h1 className='text-6xl text-center'><span className='text-pink-800'>FortifyLearning</span> pricing plans</h1>
            <p className='text-gray-400 font-semibold mt-6 mx-auto text-center w-3/5'>Follow structured Career Paths, focus on specific skills, prepare to take certification exams, and stay ahead of ever-evolving threats, all in one place. Trusted by four million global cyber practitioners and 1000+ organizations. Join the community today.</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-8 text-white">

                <div class=" flex flex-col rounded-lg">
                    <h1 className='flex items-center justify-center h-10 rounded-tr-lg rounded-tl-lg bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 '>FOR INDIVIDUALS</h1>
                    <div class="bg-gray-900 rounded-br-lg rounded-bl-lg p-8 h-6/6 ">
                        <h2 class="text-3xl font-semibold text-white">Cybrary Free Access</h2>
                        <p class="text-sm mb-10 mt-2">Built for individuals looking to explore Cybrary and learn more about cybersecurity.</p>
                        <button class="px-6 py-3 w-full text-lg bg-transparent border border-orange-400 rounded-lg"
                            onClick={() => dispatch(togglePopup())}>
                            Start for Free
                        </button>
                        <p className="text-4xl mt-6">Free</p>
                        <p className='mt-10 mb-14'>Get limited access to the Cybrary catalog, including:</p>
                        <ul class="mt-4 space-y-4 text-sm">
                            <li class="flex items-center">
                                <img className='h-5 w-5 ' src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/65ae06f460dc2c161f770080_Group%20116.svg" alt="" />
                                <span class="ml-2">Limited access to Career Paths and Skill Paths</span>
                            </li>
                            <li class="flex items-center">
                                <img className='h-5 w-5 ' src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/65ae06f460dc2c161f770080_Group%20116.svg" alt="" />
                                <span class="ml-2">Limited access to Cert Prep Paths</span>
                            </li>
                            <li class="flex items-center">
                                <img className='h-5 w-5 ' src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/65ae06f460dc2c161f770080_Group%20116.svg" alt="" />
                                <span class="ml-2">Community Forums</span>
                            </li>
                        </ul>
                    </div>
                </div>


                <div class="flex flex-col">
                    <h1 className='flex items-center justify-center h-10 rounded-tr-lg rounded-tl-lg bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 '>FOR INDIVIDUALS</h1>
                    <div class="bg-gradient-to-b from-gray-900  via-pink-900 to-gray-900 rounded-br-lg rounded-bl-lg p-8 h-6/6 ">
                        <h2 class="text-3xl font-semibold text-white">Cybrary Insider Pro</h2>
                        <p class="text-sm mb-10 mt-4">Built for individuals looking for their next career opportunity in cybersecurity.</p>
                        <button class="px-6 py-3 w-full text-lg bg-transparent border border-pink-600 rounded-lg">
                            <NavLink to='/upgrade/checkout'>
                                Buy now
                            </NavLink>
                        </button>
                        <p class="text-4xl mt-6">$49/mo</p>
                        <p class="text-s text-gray-400">billed annually
                            $59/mo billed monthly</p>
                        <p className='mt-4 mb-10'>Get full access to the complete Cybrary catalog, including:</p>
                        <ul class="mt-4 space-y-4 text-sm">
                            <li class="flex items-center">
                                <img className='h-5 w-5 ' src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/65ae06f460dc2c161f770080_Group%20116.svg" alt="" />
                                <span class="ml-2">Everything included in the Free plan, plus:</span>
                            </li>
                            <li class="flex items-center">
                                <img className='h-5 w-5 ' src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/65ae06f460dc2c161f770080_Group%20116.svg" alt="" />
                                <span class="ml-2">Full access to all Career and Skill Paths, including courses, labs, challenges, and assessments</span>
                            </li>
                            <li class="flex items-center">
                                <img className='h-5 w-5 ' src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/65ae06f460dc2c161f770080_Group%20116.svg" alt="" />
                                <span class="ml-2">Full access to all Cert Prep Paths, including video courses, labs, and practice exams</span>
                            </li>
                            <li class="flex items-center">
                                <img className='h-5 w-5 ' src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/65ae06f460dc2c161f770080_Group%20116.svg" alt="" />
                                <span class="ml-2">Stay Ahead content including Threat Actor Campaigns, CVE Series, Challenges, and OWASP Top 10</span>
                            </li>
                            <li class="flex items-center">
                                <img className='h-5 w-5 ' src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/65ae06f460dc2c161f770080_Group%20116.svg" alt="" />
                                <span class="ml-2">Private Discord Community with Mentor support
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>


                <div class="flex flex-col">
                    <h1 className='flex items-center justify-center h-10 rounded-tr-lg rounded-tl-lg bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 '>MOST POPULAR FOR TEAMS</h1>
                    <div class="bg-gray-900 rounded-br-lg rounded-bl-lg p-8 h-6/6 ">
                        <h2 class="text-3xl font-semibold text-white">Cybrary For Teams</h2>

                        <p class="text-sm mb-10 mt-4">Built for organizations looking to reduce their cyber risk through hands-on training for their cybersecurity teams.</p>
                        <button class="px-6 py-3 w-full text-lg bg-transparent border border-pink-600 rounded-lg">
                            <NavLink to='/upgrade/teams-checkout'>
                                Buy now
                            </NavLink>
                        </button>
                        <p class="text-4xl font-bold mt-6">$79/mo</p>
                        <p class="text-xs text-gray-400">Billed annually</p>
                        <p className='mt-4 mb-10'>Get full access to the complete Cybrary catalog, as well as Teams-exclusive features, including:</p>
                        <ul class="mt-4 space-y-4 text-sm">
                            <li class="flex items-center">
                                <img className='h-5 w-5 ' src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/65ae06f460dc2c161f770080_Group%20116.svg" alt="" />
                                <span class="ml-2">Identify and remediate skill gaps with Cybrary's Baselining tool</span>
                            </li>
                            <li class="flex items-center">
                                <img className='h-5 w-5 ' src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/65ae06f460dc2c161f770080_Group%20116.svg" alt="" />
                                <span class="ml-2">Monitor and track team performance with the Teams Dashboard</span>
                            </li>
                            <li class="flex items-center">
                                <img className='h-5 w-5 ' src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/65ae06f460dc2c161f770080_Group%20116.svg" alt="" />
                                <span class="ml-2">Cyber Risk Impact widget shows the value of the learning your Team does with Cybrary and how it lowers your business risk for a cybersecurity breach</span>
                            </li>
                            <li class="flex items-center">
                                <img className='h-5 w-5 ' src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/65ae06f460dc2c161f770080_Group%20116.svg" alt="" />
                                <span class="ml-2">Create Groups within the Team for oversight and management</span>
                            </li>
                            <li class="flex items-center">
                                <img className='h-5 w-5 ' src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/65ae06f460dc2c161f770080_Group%20116.svg" alt="" />
                                <span class="ml-2">Create up to 5 custom Paths for your Team to align with company roles and objectives</span>
                            </li>
                            <li class="flex items-center">
                                <img className='h-5 w-5 ' src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/65ae06f460dc2c161f770080_Group%20116.svg" alt="" />
                                <span class="ml-2">Assign Goals and track progress for individuals or groups</span>
                            </li>
                            <li class="flex items-center">
                                <img className='h-5 w-5 ' src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/65ae06f460dc2c161f770080_Group%20116.svg" alt="" />
                                <span class="ml-2">User and content analytics provide all the details you need about what your Team is getting from learning with Cybrary</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class=" flex flex-col">
                    <h1 className='flex items-center justify-center h-10 rounded-tr-lg rounded-tl-lg bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 '>Customized for your Team</h1>
                    <div class="bg-gray-900 rounded-br-lg rounded-bl-lg p-6 h-6/6 ">
                        <h2 class="text-3xl font-semibold text-white">Cybrary For Enterprise</h2>
                        <p class="text-sm mb-10 mt-4">Tailored solutions for teams whose needs would benefit from our Success Team’s expertise. Your Team, Your Way.</p>
                        <NavLink to='/demo-request'>
                            <button class="flex items-center px-4 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-lg">
                                Schedule a Demo <RiArrowRightSLine />
                            </button>
                        </NavLink>
                        <p class="mt-10"><MdOutlineForum className='text-5xl' /> Contact Sales for Pricing</p>
                        <p className='mt-4 mb-10'>Get full access to the complete Cybrary catalog, all Teams features, and Enterprise-only options including:</p>
                        <ul class="mt-4 space-y-2 text-sm">
                            <li class="flex items-center">
                                <img className='h-5 w-5 ' src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/65ae06f460dc2c161f770080_Group%20116.svg" alt="" />
                                <span class="ml-2">Everything in Cybrary for Teams plan, plus:</span>
                            </li>
                            <li class="flex items-center">
                                <img className='h-5 w-5 ' src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/65ae06f460dc2c161f770080_Group%20116.svg" alt="" />
                                <span class="ml-2">Dedicated Customer Success Manager who gets your team onboarded and provides personalized support</span>
                            </li>
                            <li class="flex items-center">
                                <img className='h-5 w-5 ' src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/65ae06f460dc2c161f770080_Group%20116.svg" alt="" />
                                <span class="ml-2">Option to set up SSO for easy sign-in</span>
                            </li>
                            <li class="flex items-center">
                                <img className='h-5 w-5 ' src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/65ae06f460dc2c161f770080_Group%20116.svg" alt="" />
                                <span class="ml-2">Option to integrate with your existing LMS
                                </span>
                            </li>
                            <li class="flex items-center">
                                <img className='h-5 w-5 ' src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/65ae06f460dc2c161f770080_Group%20116.svg" alt="" />
                                <span class="ml-2">Data API</span>
                            </li>
                            <li class="flex items-center">
                                <img className='h-5 w-5 ' src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/65ae06f460dc2c161f770080_Group%20116.svg" alt="" />
                                <span class="ml-2">Unlimited custom paths</span>
                            </li>
                            <li class="flex items-center">
                                <img className='h-5 w-5 ' src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/65ae06f460dc2c161f770080_Group%20116.svg" alt="" />
                                <span class="ml-2">Quarterly Business Review with senior leadership to ensure your Team's success</span>
                            </li>
                            <li class="flex items-center">
                                <img className='h-5 w-5 ' src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/65ae06f460dc2c161f770080_Group%20116.svg" alt="" />
                                <span class="ml-2">First look at upcoming product features</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PricingPlans
