import React from "react";
import SignupComponent from '../components/home/SignupComponent';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { togglePopup } from '../store/signupPopupSlice';
import SignupPopup from '../loginSystem/SignupPopup';
import { SiComma } from "react-icons/si";
const FreeAccess = () => {
    const dispatch = useDispatch();
    return (
        <div className="bg-black mt-16 text-white min-h-screen">
            {/* First Section */}
            <div className="flex items-center min-h-screen"
                style={{
                    //   backgroundImage: url('https://imgs.search.brave.com/HTbNAsZwNwhOr161RktqvREamq2Z4NwZ0thPR-C2BaY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9j/cmVhdGl2ZS1kZXNp/Z24tZGVzaWduZXIt/bWFuLXdvcmtpbmdf/NTM4NzYtOTgxNDcu/anBnP3NlbXQ9YWlz/X2h5YnJpZA'),
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}>
                <div className="px-8 md:px-16  md:ml-20 text-left">
                    <h1 className="text-left text-4xl md:text-6xl font-light leading-relaxed mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-fuchsia-500">Free Salesfore</span> <br />
                        Course & <br />
                        Training
                    </h1>

                    <p className=" text-gray-400 max-w-xl mb-6">
                        Sign up for Salesforce’s free plan and explore our catalog of over 1,200+ expert-led courses
                        and labs. From Salesforce training to Certification Preparation to guided Career Paths,
                        Salesforce fully equips professionals to succeed at every stage of their careers.
                    </p>

                    <button className="px-6 py-3 bg-gradient-to-r from-red-500 via-pink-500 to-fuchsia-500 rounded-2xl text-white font-semibold mx-auto md:mx-0 transition-20"
                        onClick={() => dispatch(togglePopup())}>
                        Start Learning For Free
                    </button>
                </div>
            </div>

            {/* Second Section */}
            <div className="flex flex-col lg:flex-row items-center justify-between px-8 md:px-16 lg:gap-10 py-16">
                {/* Left: Image */}
                <div className="w-full lg:w-1/2 flex justify-center text-left text-4xl md:text6xl font-light leading-relaxed mb-3">
                    <img
                        src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/6686bfc1ad003b9221747608_Group%2039854-min.png"
                        alt="Laptop and Cybrary interface"
                        className="w-3/4 lg:w-2/3 max-w-md rounded-lg shadow-lg transform transition-all duration-500 ease-in-out translate-x-16"
                    />
                </div>
                {/* Right: Text Content */}
                <div className="w-full lg:w-1/2 mt-3lg:mt-0 lg:-translate-x-8">
                    <h2 className="text-3xl md:text-5xl font-medium mb-6 transform transition-all duration-500 ease-in-out translate-x-16">
                        What Does FortifLearning's  <br />
                        <span className="block">Account Free </span>
                        Include?
                    </h2>

                    <p className="text-lg text-gray-300 mb-5 leading-relaxed transform transition-all duration-500 ease-in-out translate-x-16">
                        Free users get full access to over 50 courses, including <br />
                        all Certification Prep instructional content, select Virtual <br />
                        Labs, and one foundational Career Path. Join today to <br />
                        level up your skills and advance your career!
                    </p>
                    <button className="px-6 py-3 ml-16 bg-gradient-to-r from-red-500 via-pink-500 to-fuchsia-500 rounded-2xl text-white font-semibold transition-30"
                        onClick={() => dispatch(togglePopup())}>
                        Start Learning for Free
                    </button>
                </div>
            </div>

            {/* Testimonial Section */}
            <div className="bg-[#0F1114] py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-light">
                        <span className="">Trusted by</span> <span className="text-pink-500">Over 3 Million</span> <br />
                        <span className="">Cybersecurity Practitioners & Teams</span>
                    </h2>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-8">
                    {/* Testimonial Card 1 */}
                    <div className="bg-[#1a1a1a] text-gray-300 rounded-2xl p-6 shadow-md flex flex-col justify-between w-96 h-80 border border-gray-500">
                        <p className="mb-4">
                            “I've learned on different platforms, but no one has taught me hacking like this. The lessons are well
                            structured and easy to understand.”
                        </p>
                        <div className="flex items-center gap-2 text-white"><SiComma size={32} className="p-2 bg-pink-600 rounded-full" /> Salesforce Administrator</div>
                    </div>
                    {/* Testimonial Card 2 */}
                    <div className="bg-[#1a1a1a] text-gray-300 rounded-2xl p-6 shadow-md flex flex-col justify-between w-96 h-80 border border-gray-500">
                        <p className="mb-4">
                            "FortifyLearning is the best platform to learn Salesforce from scratch. The hands-on labs are the
                            best resource for me as I learn better by doing, not just by reading.”
                        </p>
                        <div className="flex items-center gap-2 text-white"><SiComma size={32} className="p-2 bg-pink-600 rounded-full" /> Salesforce Developer</div>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-6 mt-8 px-4">
                    {/* Company Logo 1 */}
                    <img
                        src="https://clinicaltrialsbsva.com/wp-content/uploads/2017/07/cropped-logo-1.png"
                        className="h-12 object-contain"
                    />
                    {/* Company Logo 2 */}
                    <img
                        src="https://www.nicepng.com/png/full/395-3959971_verizon-logo-white-beige.png"
                        alt="Fannie Mae Logo"
                        className="h-12 object-contain"
                    />
                    {/* Company Logo 3 */}
                    <img
                        src="https://white.logodownload.org/wp-content/uploads/2020/11/google-white-logo-1.png"
                        alt="Amgen Logo"
                        className="h-12 object-contain"
                    />
                    {/* Company Logo 4 */}
                    <img
                        src="https://biosciences.ecoexploratorio.org/wp-content/uploads/2023/08/AMGEN-logo-white-021fu.png"
                        alt="Bon Secours Logo"
                        className="h-12 object-contain"
                    />
                    {/* Company Logo 5 */}
                    <img
                        src="https://clinicaltrialsbsva.com/wp-content/uploads/2017/07/cropped-logo-1.png"
                        alt="Google Logo"
                        className="h-12 object-contain"
                    />
                    {/* Company Logo 6 */}
                    <img
                        src="https://white.logodownload.org/wp-content/uploads/2020/11/google-white-logo-1.png"
                        alt="Johnson & Johnson Logo"
                        className="h-12 object-contain"
                    />
                </div>
            </div>

            {/* New Section - Work With Us */}
            <div className="mt-15 h-[500px] w-full relative">
                {/* Background Image */}
                <img
                    className="absolute w-full h-full object-cover opacity-50"
                    src="https://media.licdn.com/dms/image/D4E12AQEnNKiiNUKz9Q/article-cover_image-shrink_720_1280/0/1693476739453?e=2147483647&v=beta&t=vA7q5Jo23C2UXQE4FQ3lTlpB7ugmZa5QZzAfSQ5rQ-A"
                    alt="Background"
                />
                {/* Content */}
                {/* New Section - Empower Your Team, Protect Your Organization */}
                <div className="mt-15 h-[500px] w-full relative">
                    {/* Background Image */}
                    <img
                        className="absolute w-full h-full object-cover opacity-50"
                        src="https://primextra.blog/wp-content/uploads/2024/04/emotion-1.jpeg"
                        alt="Background"
                    />
                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black bg-opacity-10 text-white">
                        {/* Placeholder for Logo/Image */}
                        <img className="w-[200px]" />
                        {/* New Heading */}
                        <h1 className="text-3xl md:text-5xl text-white md:w-2/4">
                            Empower Your Team, <br />
                            Protect Your <br />
                            Organization
                        </h1>
                        {/* Updated Description */}
                        <p className="mt-4 text-gray-300 max-w-2xl">
                            Empower your team to master Salesforce with tailored training. Request a demo today for<br />
                            access to hands-on practice labs, assessments, custom content, and more, all designed to<br />
                            boost your team's Salesforce skills and drive organizational success.
                        </p>
                        {/* Call to Action Button */}
                        <button className="mt-8 bg-gradient-to-r from-red-500 to-fuchsia-500 py-3 px-8 text-white font-semibold rounded-2xl hover:shadow-lg transition-all">
                            <NavLink to='/business'>FortifyLearning for Teams</NavLink>
                        </button>
                    </div>
                </div>
            </div>
            {/* Popular Courses Section */}
            {/* Popular Courses Section */}
            {/* Popular Courses Section */}
            <div className="bg-[#0F1114] py-16 px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-light text-white">Popular Salesfore Courses</h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        Create a free FortifyLearning account and gain access to several introductory lessons from our<br />
                        comprehensive catalog of Salesforce courses. Explore various topics including Salesforce<br />
                        administration, development, and advanced features to get a head start in your Salesforce<br />
                        journey.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {/* Course Cards */}
                    {[
                        {
                            imgSrc:
                                "https://az827626.vo.msecnd.net/cdn/ittraining/images/cs3_2023-03-29-08-30-38-830.png",
                            title: "Introduction to Salesforce",
                            description: "● Overview of Salesforce: Basics of the Salesforce platform, its interface, and core functionalities.Navigating ●Salesforce: How to effectively use and customize the Salesforce environment for new users",
                            duration: "0H:35M",
                            ceus: "1 CEUS",
                            link: '/course/introduction-salesforce'
                        },
                        {
                            imgSrc:
                                "https://cdn.mindmajix.com/courses/salesforce-admin-training.png",
                            title: "Advanced Salesforce Administration",
                            description: "● Complex Administration Tasks : In-depth training on advanced administration and configuration techniques .● Data Management: Strategies for managing and optimizing large data volumes within Salesforce.",
                            duration: "18H:28M",
                            ceus: "10 CEUS",
                            link: '/course/advanced-salesforce-administration'
                        },
                        {
                            imgSrc: "https://www.theknowledgeacademy.com/_files/images/What_is_a_Salesforce_Developer.png",
                            title: " Salesforce Development",
                            description:
                                "● Apex Programming: Basics of writing custom code with Apex for extending Salesforce functionality.● Visualforce and Lightning Components: Developing custom user interfaces andcomponents using Visualforce and Lightning.",
                            duration: "1H:56M",
                            ceus: "2 CEUS",
                            link: '/course/salesforce-development'
                        },
                        {
                            imgSrc: "https://www.cloudfulcrum.com/wp-content/uploads/2024/09/Enhancing-Salesforce-Security-and-Compliance-with-OpsBridges-Change-Intelligence-copy-1280x691.webp",
                            title: "Salesforce Security and Compliance",
                            description:
                                "● Security Fundamentals: Introduction to securing your Salesforce environment anddata.● Advanced Security Settings: Detailed training on implementing and managingadvanced security features and compliance requirements.",
                            duration: "8H:29M",
                            ceus: "10 CEUS",
                            link: '/course/salesforce-security-compliance'
                        },
                    ].map((course, index) => (
                        <div
                            key={index}
                            className="bg-[#1a1a1a] text-gray-300 rounded-2xl shadow-md border border-gray-500 overflow-hidden flex flex-col group transition-all duration-300"
                        >
                            <NavLink to={course.link}>
                                <img src={course.imgSrc} alt={course.title} className="w-full h-40 object-cover" />
                                <div className="p-6 flex flex-col flex-grow transition-all duration-300 group-hover:pb-10">
                                    <div className="flex gap-2 mb-4">
                                        <span className="bg-pink-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                                            COURSE
                                        </span>
                                        <span className="bg-black text-white text-xs font-medium px-3 py-1 rounded-full">
                                            {course.duration}
                                        </span>
                                        <span className="bg-black text-white text-xs font-medium px-3 py-1 rounded-full">
                                            {course.ceus}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-semibold mb-4">{course.title}</h3>
                                    <p className="text-sm mb-4 flex-grow">{course.description}</p>
                                    {/* Button with opacity and transition */}
                                    <button className="px-6 py-3 bg-gradient-to-r from-red-500 via-pink-500 to-fuchsia-500 rounded-2xl text-white font-semibold mx-auto md:mx-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                                        Learn More & Enroll
                                    </button>
                                </div>
                            </NavLink>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full mt-24 flex justify-center">
                <SignupComponent />
            </div>
        </div>
    );
};

export default FreeAccess;