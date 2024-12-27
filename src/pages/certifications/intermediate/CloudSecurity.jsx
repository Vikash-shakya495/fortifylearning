import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RxBorderDashed } from "react-icons/rx";
import SignupComponent from '../../../components/home/SignupComponent';
function CloudSecurity() {
    const salesforceCourses = [
        {
            img: 'https://isodoc.co.uk/wp-content/uploads/2023/06/training-procedure.jpg',
            title: 'Salesforce Fundamentals',
            overview: 'Get started with the basics of Salesforce, including navigation, data management, and reporting.',
            duration: '4 hours',
            format: 'On-demand video',
            link: '/course/compromise-software-supply-chain'
        },
        {
            img: 'https://cdn.shopaccino.com/igmguru/products/salesforce-training-igmguru_1400382585_l.jpg?v=500',
            title: 'Advanced Salesforce Administration',
            overview: 'Dive deeper into advanced admin topics, including custom objects, complex workflows, and advanced data management.',
            duration: '6 hours',
            format: 'Interactive lab sessions',
            link: '/course/unsecured-credentials-and-domain-accounts'
        },
        {
            img: 'https://cdn.shopaccino.com/igmguru/products/salesforce-training-igmguru_1400382585_l.jpg?v=500',
            title: 'Advanced Salesforce Administration',
            overview: 'Dive deeper into advanced admin topics, including custom objects, complex workflows, and advanced data management.',
            duration: '6 hours',
            format: 'Interactive lab sessions',
            link: '/course/unsecured-credentials-and-domain-accounts'
        },
    ]
    return (
        <div className='mt-40'>
            <div className='mx-auto w-2/3'>
                <h1 className='text-3xl'>Purpose Statement</h1>
                <p className='text-lg mt-4'><span className='font-semibold'>Cybrary Certification Prep Paths</span> are comprehensive training programs designed to prepare you for the most in-demand certifications in cybersecurity. Each path follows a Learn, Practice, Prove model and includes different activity types aligned to each domain of the exam. As you progress through the path, you will have the opportunity to assess your readiness using certification-specific Practice Exams and monitor your progress using the Readiness Tracker.</p>
            </div>
            <div className="mt-20 text-white py-12 px-4 md:px-32 xl:px-72 flex flex-col items-center">
                <h2 className="text-3xl md:text-5xl text-center mb-8">
                    Campaign Outline
                </h2>
                <p className='text-center w-2/3 mb-12 text-gray-400'>Threat Actor Campaigns are comprised of multiple MITRE ATT&CK aligned courses. Click on a course below to learn more.</p>
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
                    {salesforceCourses.map((course, index) => (
                        <div key={index} className="p-6 flex flex-col flex-grow">
                            <div className="flex flex-col md:flex-row items-center bg-gray-900 p-8 w-full gap-12 rounded-3xl    ">
                                <div className="bg-gray-950 md:w-1/3 rounded-lg transition duration-500 hover:rounded-2xl shadow-lg hover:shadow-xl border border-gray-600">
                                    <img src={course.img} alt="" className="h-[300px] w-full object-cover transition duration-700 rounded-sm hover:rounded-tl-2xl hover:rounded-tr-2xl" />
                                    <div className="p-6">
                                        {/* Buttons Above the Heading */}
                                        <div className="flex items-center gap-1 mb-4">
                                            <span className="px-4 py-2 flex items-center bg-pink-500 text-white text-sm font-semibold rounded-full">
                                                COURSE
                                            </span>
                                            <span className="px-4 py-2 flex items-center bg-black text-white text-sm font-semibold rounded-full">
                                                {course.duration}
                                            </span>
                                            <span className="px-4 py-2 flex items-center bg-black text-white text-sm font-semibold rounded-full">
                                                {course.format}
                                            </span>
                                        </div>

                                        {/* Add Headings and Descriptions for All Cards */}
                                        <div className="mb-4">
                                            <h3 className="text-2xl font-semibold text-white">
                                                {course.title}
                                            </h3>
                                            <p className="text-gray-400">
                                                {course.overview}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="md:w-2/3">
                                    <h1 className="text-3xl">Overview</h1>
                                    <p className="mt-4 text-gray-300">
                                        {course.overview}
                                    </p>
                                    <NavLink to={course.link}>
                                        <button className="mt-8 w-full py-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl text-white font-semibold hover:shadow-[0px_0px_10px_purple,0px_0px_10px_#FF4D6D] duration-500">
                                            Start Learning
                                        </button>
                                    </NavLink>
                                </div>
                            </div>
                            <div className="flex items-center flex-col justify-between gap-1 p-8">
                                <RxBorderDashed className="text-3xl transform rotate-90" />
                                <RxBorderDashed className="text-3xl transform rotate-90" />
                            </div>
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

export default CloudSecurity;
