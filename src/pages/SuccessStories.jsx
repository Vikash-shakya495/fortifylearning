import React from "react";
import "../App.css";
import TestimonialsCarousel from "../components/home/TestimonialsCarousel";
import SignupComponent from "../components/home/SignupComponent";

const Card = ({ name, text, title, description, image }) => {
    return (
        <div className="bg-[#13171c] text-white rounded-3xl shadow-lg p-6 h-full flex flex-col">
            <div className="flex items-center mb-4">
                <img
                    src={image}
                    alt={name}
                    className="w-14 h-14 border-pink-600 border-[2px] rounded-full mr-4"
                />
                <div>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <p className="text-base text-gray-400">{text}</p>
                </div>
            </div>
            <div className="flex-grow mb-0">
                <h2 className="text-xl my-8 line-clamp-2 overflow-hidden">{title}</h2>
                <p className="text-lg mb-4 line-clamp-3 overflow-hidden font-medium text-gray-400">
                    {description}
                </p>
                <button className="bg-gradient-to-r from-pink-500 to-orange-500 text-white py-3 px-4 w-full rounded-xl font-semibold text-base hover:shadow-[0px_0px_10px_purple,0px_0px_10px_#FF4D6D] duration-500">
                    Learn more &gt;
                </button>
            </div>
        </div>
    );
};

function SuccessStories() {
    const cards = [
        {
            name: "Abdul Nasir",
            text: "IT Consultant and Web Designer",
            title: "Building Up the Confidence to Pass CompTIA Security+ Exam",
            description:
                '"If you are trying to join the fold, don’t give up. If you have the passion, you need to keep going! I would advise anyone going into cybersecurity to hold onto the hope and the belief that this is where you need to be to protect infrastructure all over the world".',
            image:
                "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64587a22fbfbb2c1b837b89a_cybrary-default-black.jpeg",
        },
        {
            name: "Cory",
            text: "Cybersecurity Analyst",
            title: "Making the Jump from IT Helpdesk to Cybersecurity",
            description:
                '"The career paths are well-structured. The virtual labs were incredible. They gave me the opportunity to build real, applicable skills".',
            image:
                "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64587a280a04ded77c457821_cory-square.jpeg",
        },
        {
            name: "Mike",
            text: "Security Engineer and Pentester",
            title: "Taking His Career in a New Direction",
            description:
                '"I was able to earn my CISSP certification within 60 days of signing up for CybraryInsider Pro and got hired as a Security Analyst conducting security assessments and penetration testing".',
            image:
                "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64587a2625359543e3e2535c_mike-square.jpeg",
        },
        {
            name: "Evelyn",
            text: "IT Administrator, Automation Industry",
            title:
                "Land an IT role as a Digital Field Support Administrator with the help from the Cybrary community",
            description:
                '"The knowledge and skills I gained with Cybrary helped me to land my first IT role as a Digital Field Support Administrator. Knowing that I have the Cybrary community behind me has been helpful as I continue to learn and advance my career goals".',
            image:
                "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64587a22fbfbb2c1b837b89a_cybrary-default-black.jpeg",
        },
        {
            name: "Henry",
            text: "Service Delivery Analyst",
            title: "Pursuing a Blue-Team Career with Industry-Leading Certifications",
            description:
                '"I love how Cybrary’s career paths include a series of traditional lecture videos, but apply the practical application of the topics covered as well".',
            image:
                "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64587a22fbfbb2c1b837b89a_cybrary-default-black.jpeg",
        },
        {
            name: "Cassandra",
            text: "Information Security Analyst",
            title: "Changing Careers to Pursue a Passion",
            description:
                '"The community was a total game changer. Cybrary was instrumental for me breaking into cybersecurity."',
            image:
                "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64587a22ece43eab97a90a38_cassandra-square.jpeg",
        },
        {
            name: "Casey",
            text: "Cyber Systems Engineer, BDO",
            title: "From Factory Worker to Cybersecurity Professional",
            description:
                '"I was able to earn my Security+ and CySA+ in two months, all credit to Cybrary."',
            image:
                "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64587a20d370f52adfbb3842_Casey.jpeg",
        },
        {
            name: "Angel",
            text: "Founder, IntellChromatics, IntellChromatics Inc.",
            title: "Making the Leap to Start Her Own Successful Business",
            description:
                '"Cybrary offered me the training, courses, and cert prep options that best fit my career goals."',
            image:
                "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64587a1f3d9ab4b96ccc9cb4_Angel.png",
        },
        {
            name: "Gabrielle",
            text: "SOC Analyst,",
            title: "From No Experience to Hired in Three Months",
            description:
                '"There is nothing out there capable of getting someone as job-ready as Cybrary."',
            image:
                "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64587a1d87f844c49cbf567b_gabby-square.jpeg",
        },
    ];

    return (
        <div className="bg-[#0c0c0c] mt-16">
            <header className=" flex flex-col lg:flex-row w-full justify-center items-center">
                <div className="flex w-full justify-center items-center mt-8 relative">
                    <img
                        src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/646fa67b41f452140eddfeae_Teams_Centered_3.webp"
                        alt="Laptop with cybersecurity courses"
                        className="w-full h-[60vh] object-cover"
                    />
                    <div className="absolute flex flex-col justify-center items-center bg-transparent text-white w-auto">
                        <span className="bg-gradient-to-r from-orange-600 via-pink-600 to-fuchsia-600 py-1 text-base font-medium rounded-3xl mb-4 px-4 w-auto">
                            SUCCESS STORIES
                        </span>
                        <h1 className="text-4xl md:text-6xl">We are Changing</h1>
                        <h1 className="text-4xl md:text-6xl">Peoples Lives</h1>
                        <p className="text-center mt-4 text-base font-medium px-4">
                            See how users initially joined Cybrary to learn more about
                            cybersecurity but ultimately <br />
                            ended up earning certifications in two months and launched new
                            careers.
                        </p>
                        <button className="bg-gradient-to-r from-orange-600 via-pink-600 to-fuchsia-600 px-6 py-4 rounded-2xl font-semibold text-lg hover:shadow-[0px_0px_10px_purple,0px_0px_10px_#FF4D6D] duration-500 mt-4">
                            Start Learning for Free
                        </button>
                    </div>
                </div>
            </header>
            <div>
                <div className="text-white h-auto flex items-center justify-center">
                    <div className="flex flex-col lg:flex-row w-[90%] lg:w-[65%] h-auto bg-[#1b2027] rounded-3xl overflow-hidden shadow-lg">
                        <div className="w-full lg:w-1/2 p-10 flex flex-col justify-center">
                            <span className="bg-white rounded-xl w-24 text-center font-semibold mb-4 text-black">
                                Featured
                            </span>
                            <h1 className="text-3xl md:text-5xl font-normal mb-6">
                                Acquiring Key Cybersecurity Skills for National Defense
                            </h1>
                            <div className="border border-gray-600 border-[1px] p-4 rounded-3xl">
                                <p className="text-lg text-gray-300 font-medium mb-6">
                                    "Cybrary's Global Benchmarking feature allows you to compare
                                    your team's performance against a worldwide community of
                                    cybersecurity practitioners, providing critical insights into
                                    your global standing and identifying areas for improvement."
                                </p>
                                <div className="flex flex-col items-center gap-4 sm:gap-0 justify-between sm:flex-row">
                                    <span className="flex justify-center font-semibold items-center">
                                        <span className="bg-pink-700 rounded-full p-3 mr-3">
                                            <svg
                                                className="h-8 w-8 text-neutral-500"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                strokeWidth="2"
                                                stroke="currentColor"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <polyline points="21 12 17 12 14 20 10 4 7 12 3 12" />
                                            </svg>
                                        </span>
                                        DON GATES
                                    </span>
                                    <span>
                                        <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold text-lg flex justify-center items-center hover:shadow-[0px_0px_10px_purple,0px_0px_10px_#FF4D6D] duration-500 shadow-md">
                                            Learn More{" "}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="size-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                                                />
                                            </svg>
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2 flex items-center justify-center p-0">
                            <img
                                src="https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64587a2675bc8010dfca354f_Don-Gates.png"
                                alt="Cybersecurity Dashboard"
                                className="rounded-3xl shadow-md w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center py-10 mt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
                    {cards.map((card, index) => (
                        <Card
                            key={index}
                            name={card.name}
                            text={card.text}
                            title={card.title}
                            description={card.description}
                            image={card.image}
                        />
                    ))}
                </div>
            </div>
            <div className="w-full mt-20">
                <TestimonialsCarousel />
            </div>
            <div className="w-full mt-24 flex justify-center">
                <SignupComponent />
            </div>
        </div>
    );
}

export default SuccessStories;