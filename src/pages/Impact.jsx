import React from 'react';
import { useDispatch } from 'react-redux';
import { togglePopup } from '../store/signupPopupSlice';
import SignupPopup from '../loginSystem/SignupPopup';
import fortifyLearningMobile from '../assets/fortifyLearningMobile.png';
import Marquee from 'react-fast-marquee';
import { NavLink } from 'react-router-dom';
import SignupComponent from '../components/home/SignupComponent';


function Impact() {
    const dispatch = useDispatch();

    const commitments = [
        {
            logo: 'https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/646a99709f18880ec235d279_image%2015%20(Traced).svg',
            title: 'Cybersecurity Awareness Month',
            description:
                'Cybersecurity Awareness Month, every October, is a collaboration between government and private industry to raise awareness about digital security and empower everyone to protect their personal data from digital forms of crime.',
            image: 'https://www.enterprisebanking.com/assets/images/news/2022_Cyber_Security_Month_News_Article__752.jpg', // Replace with the actual image URL
        },
        {
            logo: 'https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/646a9d85492ea69c3474ff2c_Group%20(2).svg',
            title: 'Giving Tuesday',
            description:
                'Giving Tuesday was created in 2012 as a simple idea: a day that encourages people to do good. Over the last decade, this idea has grown into a global movement that inspires millions of people to give, collaborate, and celebrate generosity.',
            image: 'https://thebekindpeopleproject.org/wp-content/uploads/2023/12/1920-on-valentine-s-day-a-young-couple-sits-at-a-restaurant-table-and-the-man-gives-a-gift-box-to-the-young-woman-the-close-up-shot-has-a-selective-focus-ai-generative.jpg', // Replace with the actual image URL
        },
        {
            logo: 'https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/646a9df8a7e64d8102e5d8fb_surface1.svg',
            title: 'Pledge 1%',
            description:
                "Pledge 1% is an easy way to leverage a portion of your future success to support nonprofits in your community. It's a small commitment today that can make a huge impact tomorrow.",
            image: 'https://cdn-ilbljpj.nitrocdn.com/BlzxfEUUKNYIePthjeIxjXKHYjTQtyMb/assets/images/optimized/rev-79935b9/images.blog.airmason.com/wp-content/uploads/2023/10/Crafting-an-Employee-Pledge-Examples-of-Commitment-Best-Practices.png', // Replace with the actual image URL
        },
    ];

    return (
        <div className='mt-28'>
            <div className="mt-24 h-[600px] w-full relative">
                <img
                    className="absolute w-full h-full object-cover opacity-50"
                    src="https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6482339878677478af673eec_Group_216.png"
                    alt="Background"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    <img className="w-[200px]" src={fortifyLearningMobile} alt="" />
                    <h1 className="text-3xl md:text-4xl text-white font-bold md:w-2/4">
                        Impact Hub
                    </h1>
                    <p className="mt-4 text-gray-300  max-w-2xl">
                        Learn about Cybrary's impact initiatives where we focus on reducing industry-wide gatekeeping, improving security teams, and making a difference throughout the cybersecurity industry and beyond.
                    </p>
                    <button
                        onClick={() => dispatch(togglePopup())}
                        className="mt-8 bg-gradient-to-r from-red-500 to-fuchsia-500 py-3 px-8 text-white font-semibold rounded-2xl hover:shadow-lg transition-all">
                        Start Learning for free
                    </button>
                    <SignupPopup />
                </div>
            </div>
            <div className="text-center flex flex-col items-center mt-10 lg:mt-32 px-4">
                <h3 className="text-lg md:text-5xl ">
                    Impact Partnerships
                </h3>
                <p className='text-gray-400 w-2/4 text-lg mt-4'>We partner with organizations that are spearheading change in the industry. Are you a nonprofit that serves marginalized persons in security? Interested in exploring a partnership? Contact us at impact@cybrary.it to learn more.</p>
                <div className="relative mt-8 md:mt-12 h-[100px] md:h-[150px] w-full max-w-6xl">
                    <Marquee className="h-full w-auto mx-auto overflow-hidden" direction="left" speed={100} delay={5}>
                        <div className="mx-8 md:mx-[60px]">
                            <img className="h-[30px] md:h-[50px]" src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/646fd7b2d7bf506dddd48569_Impact-Partner-11.webp" alt="Logo 1" />
                        </div>
                        <div className="mx-8 md:mx-[60px]">
                            <img className="h-[30px] md:h-[50px]" src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/646fd7b1cf1bf1c87e21b1bd_Impact-Partner-2.webp" alt="Logo 2" />
                        </div>
                        <div className="mx-8 md:mx-[60px]">
                            <img className="h-[30px] md:h-[50px]" src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/646fd7b1e2a39c14ad297b95_Impact-Partner-3.webp" alt="Logo 3" />
                        </div>
                        <div className="mx-8 md:mx-[60px]">
                            <img className="h-[30px] md:h-[50px]" src="https://biosciences.ecoexploratorio.org/wp-content/uploads/2023/08/AMGEN-logo-white-021fu.png" alt="Logo 4" />
                        </div>
                        <div className="mx-8 md:mx-[60px]">
                            <img className="h-[30px] md:h-[50px]" src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/646fd7b1503b24075bb33ec6_Impact-Partner-4.webp" alt="Logo 5" />
                        </div>
                        <div className="mx-8 md:mx-[60px]">
                            <img className="h-[30px] md:h-[50px]" src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/646fd7b1d7bf506dddd483c5_Impact-Partner-5.webp" alt="Logo 6" />
                        </div>
                        <div className="mx-8 md:mx-[60px]">
                            <img className="h-[30px] md:h-[50px]" src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/646fd7b1cf1bf1c87e21b1d8_Impact-Partner-6.webp" alt="Logo 7" />
                        </div>
                        <div className="mx-8 md:mx-[60px]">
                            <img className="h-[30px] md:h-[50px]" src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/646fd7b1d6cca4fa2e8e5439_Impact-Partner-7.webp" alt="Logo 8" />
                        </div>
                        <div className="mx-8 md:mx-[60px]">
                            <img className="h-[30px] md:h-[50px]" src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/646fd7b1503b24075bb33eed_Impact-Partner-8.webp" alt="Logo 9" />
                        </div>
                        <div className="mx-8 md:mx-[60px]">
                            <img className="h-[30px] md:h-[50px]" src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/646fd7b2a2dd4f1bcf228d79_Impact-Partner-9.webp" alt="Logo 10" />
                        </div>
                        <div className="mx-8 md:mx-[60px]">
                            <img className="h-[30px] md:h-[50px]" src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/646fd7b21a6fea283ec721ba_Impact-Partner-10.webp" alt="Logo 11" />
                        </div>
                    </Marquee>
                    <div className="absolute top-0 left-0 w-1/4 md:w-1/2 h-full bg-gradient-to-r from-black/50 to-transparent"></div>
                    <div className="absolute top-0 right-0 w-1/4 md:w-1/2 h-full bg-gradient-to-l from-black/50 to-transparent"></div>
                </div>
            </div>
            <div className="mt-24 h-[500px] md:h-[600px] w-full relative">
                {/* Background Image */}
                <img
                    className="absolute w-full h-full object-cover opacity-30"
                    src="https://www.goeinswilliams.com/new/wp-content/uploads/2012/10/Meeting-discussion.jpg"
                    alt="Background"
                />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-12">
                    {/* Heading */}
                    <h1 className="text-2xl md:text-4xl lg:text-5xl text-white font-bold leading-snug md:w-3/4 lg:w-2/4">
                        Listen to Impactful Industry Conversations
                    </h1>

                    {/* Paragraph */}
                    <p className="mt-4 text-gray-300 text-sm md:text-base lg:text-lg max-w-lg md:max-w-2xl">
                        Hear directly from cybersecurity experts to learn how to get the job you want, what you need to be successful, how to deal with the latest threats and vulnerabilities, and the latest news in cybersecurity. Get started today with Cybrary podcasts and webinars.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-8">
                        <NavLink to="/podcast">
                            <button className="bg-gradient-to-r from-red-500 to-fuchsia-500 py-3 px-6 md:px-8 text-white font-semibold rounded-2xl hover:shadow-lg transition-all">
                                Listen to Podcasts
                            </button>
                        </NavLink>
                        <NavLink to="/webinar">
                            <button className="py-3 px-6 md:px-8 border border-gray-500 hover:border-white text-white font-semibold rounded-xl transition-all">
                                Watch Webinars
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row mt-16 md:mt-32 items-center w-11/12 md:w-3/4 mx-auto gap-8 md:gap-16 lg:gap-44">
                {/* Text Section */}
                <div className="w-full md:w-2/4 text-center md:text-left">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                        Join Our Discord Community of Mentors and Learners
                    </h1>
                    <p className="text-gray-400 text-base md:text-lg mb-6">
                        Cybrary subscribers have the opportunity to network and learn from each other on our community Discord. No matter where you are in your career, get the advice and assistance you need from our community of mentors, including live events and technical workshops.
                    </p>
                    <NavLink to="/podcast">
                        <button className="mt-4 md:mt-8 bg-gradient-to-r from-red-500 to-fuchsia-500 py-3 px-6 md:px-8 text-white font-semibold rounded-2xl hover:shadow-lg transition-all">
                            Listen to Podcasts
                        </button>
                    </NavLink>
                </div>

                {/* Image Section */}
                <div className="w-full md:w-2/4">
                    <img
                        className="w-full max-w-sm md:max-w-full mx-auto"
                        src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/646fce23a50aaa10052ebae8_Discord-image-p-800.webp"
                        alt="Discord Community"
                    />
                </div>
            </div>

            <div className="bg-black text-white min-h-screen mx-auto mt-24 md:mt-52 md:w-2/3 px-4">
                <h1 className="text-4xl font-bold text-center mb-8">Commitments</h1>
                <p className="text-center text-gray-400 mb-12 w-full sm:w-3/4 mx-auto">
                    We believe actions speak louder than words. Thus, we sign pledges and roll up our sleeves with Pledge 1%, GivingTuesday, National Cybersecurity Alliance, and more.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {commitments.map((commitment, index) => (
                        <div
                            key={index}
                            className="relative group rounded-lg overflow-hidden shadow-lg min-h-[400px]"
                        >
                            {/* Image Section */}
                            <img
                                src={commitment.image}
                                alt={commitment.title}
                                className="w-full min-h-56 h-40 sm:h-56 md:h-64 lg:h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                            />

                            {/* Gradient Background */}
                            <div className="absolute inset-0 top-20 sm:top-28 bg-gradient-to-t from-gray-900 via-gray-900 via-transparent to-transparent opacity-90 transition-opacity duration-300"></div>

                            {/* Content Section */}
                            <div className="absolute bottom-0 p-4">
                                <img src={commitment.logo} alt={`${commitment.title} Logo`} className="h-10 w-auto mb-2" />
                                <h2 className="text-lg font-semibold">{commitment.title}</h2>
                                <p className="text-sm mt-2">{commitment.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-12 h-[600px] w-full relative">
                <img
                    className="absolute w-full h-full object-cover opacity-20"
                    src="https://1hairstop.in/cdn/shop/files/business-team-meeting-boardroom.webp?v=1717149564&width=3840"
                    alt="Background"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-3xl md:text-4xl text-white font-bold md:w-2/4">
                        Cybrary Cares
                    </h1>
                    <p className="mt-4 text-gray-300  max-w-2xl">
                        Cybrary is committed to giving back to our community through volunteer initiatives that support those in marginalized areas as well as non-profit organizations. We believe our values extend beyond our company alone.
                    </p>
                    <NavLink to='/careers'>
                        <button
                        className="mt-8 bg-gradient-to-r from-red-500 to-fuchsia-500 py-3 px-8 text-white font-semibold rounded-2xl hover:shadow-lg transition-all">
                            Join our Team
                        </button>
                    </NavLink>
                </div>
            </div>
            <div className="w-full mt-24 flex justify-center">
                <SignupComponent/>
            </div>
        </div>
    )
}

export default Impact;