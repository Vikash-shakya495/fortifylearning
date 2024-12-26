import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Webinar() {
    const salesforceCourses = [
        {
            img: 'https://isodoc.co.uk/wp-content/uploads/2023/06/training-procedure.jpg',
            title: 'Salesforce Fundamentals',
            overview: 'Get started with the basics of Salesforce, including navigation, data management, and reporting.',
            duration: '4 hours',
            format: 'On-demand video',
            link: '/course/cyber-network-security'
        },
        {
            img: 'https://cdn.shopaccino.com/igmguru/products/salesforce-training-igmguru_1400382585_l.jpg?v=500',
            title: 'Advanced Salesforce Administration',
            overview: 'Dive deeper into advanced admin topics, including custom objects, complex workflows, and advanced data management.',
            duration: '6 hours',
            format: 'Interactive lab sessions',
            link: '/practice-lab/secure-network-access'
        },
        {
            img: 'https://dianapps.com/blog/wp-content/uploads/2022/12/Reasons-Why-Every-Company-Needs-a-Dedicated-Salesforce-Developer.png',
            title: 'Salesforce Developer Essentials',
            overview: 'Learn the core development skills needed to build and customize Salesforce applications using Apex and Visualforce.',
            duration: '8 hours',
            format: 'Hands-on projects and coding exercises',
            link: '/practice-lab/configure-a-virtual-network-service-endpoint'
        },
        {
            img: 'https://www.apexhours.com/wp-content/uploads/2021/06/Factors-Influencing-Salesforce-Org-Strategy.png',
            title: 'Salesforce Integration Strategies',
            overview: 'Understand various integration methods and tools for connecting Salesforce with other systems, including APIs and middleware.',
            duration: '5 hours',
            format: 'Case studies and practical exercises',
            link: '/practice-lab/configure-linux-firewall-acl-rules'
        },
    ]
    
    const salesforceCourses2 = [
        {
            img: 'https://isodoc.co.uk/wp-content/uploads/2023/06/training-procedure.jpg',
            title: 'Salesforce Fundamentals',
            overview: 'Get started with the basics of Salesforce, including navigation, data management, and reporting.',
            duration: '4 hours',
            format: 'On-demand video',
            link: '/course/cyber-network-security'
        },
        {
            img: 'https://cdn.shopaccino.com/igmguru/products/salesforce-training-igmguru_1400382585_l.jpg?v=500',
            title: 'Advanced Salesforce Administration',
            overview: 'Dive deeper into advanced admin topics, including custom objects, complex workflows, and advanced data management.',
            duration: '6 hours',
            format: 'Interactive lab sessions',
            link: '/practice-lab/secure-network-access'
        },
        {
            img: 'https://dianapps.com/blog/wp-content/uploads/2022/12/Reasons-Why-Every-Company-Needs-a-Dedicated-Salesforce-Developer.png',
            title: 'Salesforce Developer Essentials',
            overview: 'Learn the core development skills needed to build and customize Salesforce applications using Apex and Visualforce.',
            duration: '8 hours',
            format: 'Hands-on projects and coding exercises',
            link: '/practice-lab/configure-a-virtual-network-service-endpoint'
        },
        {
            img: 'https://www.apexhours.com/wp-content/uploads/2021/06/Factors-Influencing-Salesforce-Org-Strategy.png',
            title: 'Salesforce Integration Strategies',
            overview: 'Understand various integration methods and tools for connecting Salesforce with other systems, including APIs and middleware.',
            duration: '5 hours',
            format: 'Case studies and practical exercises',
            link: '/practice-lab/configure-linux-firewall-acl-rules'
        },
        {
            img: 'https://isodoc.co.uk/wp-content/uploads/2023/06/training-procedure.jpg',
            title: 'Salesforce Fundamentals',
            overview: 'Get started with the basics of Salesforce, including navigation, data management, and reporting.',
            duration: '4 hours',
            format: 'On-demand video',
            link: '/course/cyber-network-security'
        },
        {
            img: 'https://cdn.shopaccino.com/igmguru/products/salesforce-training-igmguru_1400382585_l.jpg?v=500',
            title: 'Advanced Salesforce Administration',
            overview: 'Dive deeper into advanced admin topics, including custom objects, complex workflows, and advanced data management.',
            duration: '6 hours',
            format: 'Interactive lab sessions',
            link: '/practice-lab/secure-network-access'
        },
        {
            img: 'https://dianapps.com/blog/wp-content/uploads/2022/12/Reasons-Why-Every-Company-Needs-a-Dedicated-Salesforce-Developer.png',
            title: 'Salesforce Developer Essentials',
            overview: 'Learn the core development skills needed to build and customize Salesforce applications using Apex and Visualforce.',
            duration: '8 hours',
            format: 'Hands-on projects and coding exercises',
            link: '/practice-lab/configure-a-virtual-network-service-endpoint'
        },
        {
            img: 'https://www.apexhours.com/wp-content/uploads/2021/06/Factors-Influencing-Salesforce-Org-Strategy.png',
            title: 'Salesforce Integration Strategies',
            overview: 'Understand various integration methods and tools for connecting Salesforce with other systems, including APIs and middleware.',
            duration: '5 hours',
            format: 'Case studies and practical exercises',
            link: '/practice-lab/configure-linux-firewall-acl-rules'
        },
        {
            img: 'https://dianapps.com/blog/wp-content/uploads/2022/12/Reasons-Why-Every-Company-Needs-a-Dedicated-Salesforce-Developer.png',
            title: 'Salesforce Developer Essentials',
            overview: 'Learn the core development skills needed to build and customize Salesforce applications using Apex and Visualforce.',
            duration: '8 hours',
            format: 'Hands-on projects and coding exercises',
            link: '/practice-lab/configure-a-virtual-network-service-endpoint'
        },
        {
            img: 'https://www.apexhours.com/wp-content/uploads/2021/06/Factors-Influencing-Salesforce-Org-Strategy.png',
            title: 'Salesforce Integration Strategies',
            overview: 'Understand various integration methods and tools for connecting Salesforce with other systems, including APIs and middleware.',
            duration: '5 hours',
            format: 'Case studies and practical exercises',
            link: '/practice-lab/configure-linux-firewall-acl-rules'
        },
    ]

    const salesforceCourses3 = [
        {
            img: 'https://isodoc.co.uk/wp-content/uploads/2023/06/training-procedure.jpg',
            title: 'Salesforce Fundamentals',
            overview: 'Get started with the basics of Salesforce, including navigation, data management, and reporting.',
            duration: '4 hours',
            format: 'On-demand video',
            link: '/course/cyber-network-security'
        },
        {
            img: 'https://cdn.shopaccino.com/igmguru/products/salesforce-training-igmguru_1400382585_l.jpg?v=500',
            title: 'Advanced Salesforce Administration',
            overview: 'Dive deeper into advanced admin topics, including custom objects, complex workflows, and advanced data management.',
            duration: '6 hours',
            format: 'Interactive lab sessions',
            link: '/practice-lab/secure-network-access'
        },
    ]
    const [visibleCount, setVisibleCount] = useState(4); // Initial number of visible cards

    const handleViewMore = () => {
        setVisibleCount((prevCount) => prevCount + 4); // Increase the count by 8
    };
    return (
        <div className='mt-28'>
            <div className="mt-24 h-[600px] w-full relative">
                <img
                    className="absolute w-full h-full object-cover opacity-50"
                    src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/6473722d9c08906b603a6ba3_webinars-header-bg-min-p-2000.png"
                    alt="Background"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-3xl md:text-6xl text-white md:w-2/5">
                        Cybrary Events & Webinars
                    </h1>
                    <p className="mt-4 text-gray-300  max-w-2xl">
                        Hear from industry experts and stay up-to-date on the latest research, training, and product developments at Cybrary, through our webinars and live online events. Get practical insights into growing and optimizing your skills and team members. Check out the calendar for upcoming FREE sessions.
                    </p>
                </div>
            </div>
            <div className="mt-24 w-full text-white py-12 px-4 md:px-32 flex flex-col  ">
                {/* Heading Section */}
                <div className='flex items-center mb-12 gap-6'>
                    <h2 className="h-6 w-6 bg-gradient-to-r from-red-500 to-fuchsia-500 rounded-[50%]">
                    </h2>
                    <p className=" text-3xl text-gray-400">
                        CTIG Research
                    </p>
                </div>

                {/* Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:w-5/6 lg:w-full mx-auto gap-6 px-5 md:px-10">
                    {salesforceCourses.map((course) => (
                        <div
                            key={course.id}
                            className={`group relative rounded-lg border-gray-100 border shadow-lg bg-gray-900 overflow-hidden transition-all duration-300 hover:pb-16`}
                        >
                            <NavLink to={course.link}>
                                <img className="rounded-lg h-48 w-full object-cover" src={course.img} alt={course.title} />
                                <div className="p-4 transition-all duration-300">
                                    <div className="mb-4">
                                        <span className="text-xs font-bold bg-pink-600 py-2 px-3 rounded-full uppercase">
                                            Course
                                        </span>
                                        <div className="flex gap-2 mt-6">
                                            <span className="py-1 bg-black rounded-xl px-3">{course.duration}</span>
                                            <span className="py-1 bg-black rounded-xl px-3">{course.format}</span>
                                        </div>
                                    </div>
                                    <p className="mt-6 text-2xl font-semibold">{course.title}</p>
                                    <p className="text-md mt-2 text-gray-300 line-clamp-3">{course.overview}</p>
                                </div>
                                {/* Learn More Button */}
                                <div className="absolute bottom-4 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <button className="px-4 py-2 bg-gradient-to-r from-orange-600 via-pink-600 to-fuchsia-600 text-white rounded-lg hover:bg-pink-700">
                                        Learn More and Enroll
                                    </button>
                                </div>
                            </NavLink>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-24 w-full text-white py-12 px-4 md:px-32 flex flex-col">
                {/* Heading Section */}
                <div className='flex items-center mb-12 gap-6'>
                    <h2 className="h-6 w-6 bg-gradient-to-r from-red-500 to-fuchsia-500 rounded-[50%]"></h2>
                    <p className="text-3xl text-gray-400">Team Management</p>
                </div>

                {/* Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:w-5/6 lg:w-full mx-auto gap-6 px-5 md:px-10">
                    {salesforceCourses2.slice(0, visibleCount).map((course) => (
                        <div
                            key={course.id}
                            className={`group relative rounded-lg border-gray-100 border shadow-lg bg-gray-900 overflow-hidden transition-all duration-300 hover:pb-16`}
                        >
                            <NavLink to={course.link}>
                                <img className="rounded-lg h-48 w-full object-cover" src={course.img} alt={course.title} />
                                <div className="p-4 transition-all duration-300">
                                    <div className="mb-4">
                                        <span className="text-xs font-bold bg-pink-600 py-2 px-3 rounded-full uppercase">Course</span>
                                        <div className="flex gap-2 mt-6">
                                            <span className="py-1 bg-black rounded-xl px-3">{course.duration}</span>
                                            <span className="py-1 bg-black rounded-xl px-3">{course.format}</span>
                                        </div>
                                    </div>
                                    <p className="mt-6 text-2xl font-semibold">{course.title}</p>
                                    <p className="text-md mt-2 text-gray-300 line-clamp-3">{course.overview}</p>
                                </div>
                                {/* Learn More Button */}
                                <div className="absolute bottom-4 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <button className="px-4 py-2 bg-gradient-to-r from-orange-600 via-pink-600 to-fuchsia-600 text-white rounded-lg hover:bg-pink-700">
                                        Learn More and Enroll
                                    </button>
                                </div>
                            </NavLink>
                        </div>
                    ))}
                </div>

                {/* View More Button */}
                {visibleCount < salesforceCourses2.length && (
                    <div className="flex justify-center mt-6">
                        <button
                            onClick={handleViewMore}
                            className="px-6 py-3 bg-gradient-to-r from-red-500 to-fuchsia-500 text-white rounded-lg hover:bg-fuchsia-600 transition-colors"
                        >
                            View More
                        </button>
                    </div>
                )}
            </div>
            <div className="mt-24 w-full bg-gradient-to-b from-gray-95  0 to-black text-white py-12 px-4 md:px-32 flex flex-col  ">
                {/* Heading Section */}
                <div className='flex items-center mb-12 gap-6'>
                    <h2 className="h-6 w-6 bg-gradient-to-r from-red-500 to-fuchsia-500 rounded-[50%]">
                    </h2>
                    <p className=" text-3xl text-gray-400">
                    Certifications
                    </p>
                </div>

                {/* Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:w-5/6 lg:w-full mx-auto gap-6 px-5 md:px-10">
                    {salesforceCourses3.map((course) => (
                        <div
                            key={course.id}
                            className={`group relative rounded-lg border-gray-100 border shadow-lg bg-gray-900 overflow-hidden transition-all duration-300 hover:pb-16`}
                        >
                            <NavLink to={course.link}>
                                <img className="rounded-lg h-48 w-full object-cover" src={course.img} alt={course.title} />
                                <div className="p-4 transition-all duration-300">
                                    <div className="mb-4">
                                        <span className="text-xs font-bold bg-pink-600 py-2 px-3 rounded-full uppercase">
                                            Course
                                        </span>
                                        <div className="flex gap-2 mt-6">
                                            <span className="py-1 bg-black rounded-xl px-3">{course.duration}</span>
                                            <span className="py-1 bg-black rounded-xl px-3">{course.format}</span>
                                        </div>
                                    </div>
                                    <p className="mt-6 text-2xl font-semibold">{course.title}</p>
                                    <p className="text-md mt-2 text-gray-300 line-clamp-3">{course.overview}</p>
                                </div>
                                {/* Learn More Button */}
                                <div className="absolute bottom-4 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <button className="px-4 py-2 bg-gradient-to-r from-orange-600 via-pink-600 to-fuchsia-600 text-white rounded-lg hover:bg-pink-700">
                                        Learn More and Enroll
                                    </button>
                                </div>
                            </NavLink>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Webinar
