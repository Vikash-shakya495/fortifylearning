import React from 'react';
import { NavLink } from 'react-router-dom';

const salesforceCourses = [
    {
        img: 'https://isodoc.co.uk/wp-content/uploads/2023/06/training-procedure.jpg',
        title: 'Salesforce Fundamentals',
        overview: 'Get started with the basics of Salesforce, including navigation, data management, and reporting.',
        duration: '4 hours',
        format: 'On-demand video',
        link: '/career-path/foundations'
    },
    {
        img: 'https://cdn.shopaccino.com/igmguru/products/salesforce-training-igmguru_1400382585_l.jpg?v=500',
        title: 'Advanced Salesforce Administration',
        overview: 'Dive deeper into advanced admin topics, including custom objects, complex workflows, and advanced data management.',
        duration: '6 hours',
        format: 'Interactive lab sessions',
        link: '/career-path/soc-analyst'
    },
    {
        img: 'https://dianapps.com/blog/wp-content/uploads/2022/12/Reasons-Why-Every-Company-Needs-a-Dedicated-Salesforce-Developer.png',
        title: 'Salesforce Developer Essentials',
        overview: 'Learn the core development skills needed to build and customize Salesforce applications using Apex and Visualforce.',
        duration: '8 hours',
        format: 'Hands-on projects and coding exercises',
        link: '/career-path/penetration-tester'
    },
    {
        img: 'https://www.apexhours.com/wp-content/uploads/2021/06/Factors-Influencing-Salesforce-Org-Strategy.png',
        title: 'Salesforce Integration Strategies',
        overview: 'Understand various integration methods and tools for connecting Salesforce with other systems, including APIs and middleware.',
        duration: '5 hours',
        format: 'Case studies and practical exercises',
        link :'/career-path/penetration-tester'
    },
    {
        img: 'https://360degreecloud.com/wp-content/uploads/2024/03/Salesforce-Data-Migration-Why-Its-Time-to-Make-the-Move-1024x535.jpg',
        title: 'Data Migration with Salesforce',
        overview: 'Master data import, export, and transformation techniques to ensure smooth data migration into Salesforce.',
        duration: '4 hours',
        format: 'Live demonstrations and guided practice',
        link: '/career-path/penetration-tester'
    },
    {
        img: 'https://ceptes.com/wp-content/uploads/2020/02/Top-10-lightning-features-1-1.jpg',
        title: 'Salesforce Lightning Experience',
        overview: 'Transition smoothly from Classic to Lightning Experience with a comprehensive guide on new features and functionalities.',
        duration: '3 hours',
        format: 'On-demand video tutorials',
        link: '/career-path/penetration-tester'
    },
    {
        img: 'https://www.mastersoftwaresolutions.com/wp-content/uploads/2024/02/mss-founded-by-ravi-garg-website-insights-key-components-and-features-of-salesforce-service-cloud.webp',
        title: 'Salesforce Service Cloud Mastery',
        overview: 'Enhance your skills in managing customer service operations using Salesforce Service Cloud, focusing on case management and service automation.',
        duration: '6 hours',
        format: 'Interactive scenarios and quizzes',
        link: '/career-path/penetration-tester'
    },
    {
        img: 'https://www.ksolves.com/wp-content/uploads/Blog-3.jpg',
        title: 'Salesforce Marketing Cloud Insights',
        overview: 'Explore advanced marketing automation and analytics capabilities within Salesforce Marketing Cloud.',
        duration: '5 hours',
        format: 'Case studies and practical exercises',
        link: '/career-path/penetration-tester'
    },
    {
        img: 'https://www.techforceservices.com/wp-content/uploads/2021/03/top-5-salesforce-security-best-practices.webp',
        title: 'Salesforce Security Best Practices',
        overview: 'Learn best practices for securing your Salesforce instance, including user access management and data protection.',
        duration: '4 hours',
        format: 'On-demand video and security assessments',
        link: '/career-path/security-engineer'
    },
    {
        img: 'https://dwlrs858nh2or.cloudfront.net/wp-content/uploads/2024/02/14195041/Salesforce-CPQ-Basics.webp',
        title: 'Salesforce CPQ Fundamentals',
        overview: 'Understand the essentials of Salesforce CPQ (Configure, Price, Quote) to streamline your sales process and quoting accuracy.',
        duration: '5 hours',
        format: 'Interactive labs and real-world scenarios',
        link: '/career-path/penetration-tester'
    },
    {
        img: 'https://sunshineskill.com/wp-content/uploads/2024/07/analytics-cloud.jpg',
        title: 'Salesforce Analytics Cloud Training',
        overview: 'Get hands-on experience with Salesforce Analytics Cloud.',
        duration: '5 hours',
        format: 'Practical exercises and case studies',
        link: '/career-path/security-engineer'
    },
    {
        img: 'https://imgs.search.brave.com/YgG5F1jm-ijJNnmtjCXgHUuMm6xajRUvOFfyxf8Sjgk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YXBleGhvdXJzLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MC8wMy9TYWxlc2Zv/cmNlLUV4cGVyaWVu/Y2UtQ2xvdWQuanBn',
        title: 'Salesforce Community Cloud Essentials',
        overview: 'Learn to build and manage Salesforce Communities to enhance collaboration and engagement with external users.',
        duration: '5 hours',
        format: 'On-demand video and project-based learning',
        link: '/career-path/leadership-and-management'
    },
];

function SalesforceCourses() {
    return (
        <div className="mt-20 text-white py-12 px-4 md:px-32 xl:px-72 flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl text-center mb-8">
                Upskill at <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-pink-600 to-fuchsia-600'>Any Stage</span> of Your Career
            </h2>
            <p className='text-center w-2/3 mb-12 text-gray-400'>Explore FortifyLearning’s Career Paths designed to take you from novice to expert—and
                anywhere in between.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {salesforceCourses.map((course) => (
                    <div
                        key={course.title}
                        className={`group relative rounded-lg border-gray-100 border shadow-lg bg-gray-900 overflow-hidden transition-all duration-300 hover:pb-16`}
                    >
                        <NavLink to={course.link}>
                        <img className="h-48 w-full object-cover rounded-lg" src={course.img} alt={course.title} />
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
    );
}

export default SalesforceCourses;