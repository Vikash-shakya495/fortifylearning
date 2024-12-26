import React, { useState } from 'react';
import SignupComponent from '../components/home/SignupComponent';
import { NavLink } from 'react-router-dom';

function Alliances() {

    const [isHovered, setIsHovered] = useState(false);
    const cards = [
        {
            title: 'The CyberWire',
            description: 'We’re a cybersecurity-focused news service and a trusted, independent voice in the marketplace. We deliver concise, accessible, and relevant content, separating the signal from the noise in a burgeoning industry, overloaded with information and competing messages.',
            image: 'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/645b883932f73d81f6416afe_Frame%2096293.webp',
            link: 'https://www.thecyberwire.com/'
        },
        {
            title: 'AwareGO',
            description: 'AwareGO produces high quality content to maximise the impact of security awareness campaigns. We improve employee security with minimal effect on productivity. Ultimately enhancing overall security of businesses and governments',
            image: 'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/645b88201044745dc66fbb95_Mask%20group.webp',
            link: 'https://awarego.com/'
        },
        {
            title: 'Code42',
            description: 'Code42 Insider Threat Software delivers a faster, simpler, more comprehensive path to data loss detection, investigation and response.',
            image: 'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/645b87e87c14ca7a092f8481_Frame%2096292.webp',
            link: 'https://www.code42.com/'
        },
        {
            title: 'Cisco',
            description: 'Cisco Systems, Inc. is an American multinational technology conglomerate headquartered in San Jose, California, in the center of Silicon Valley. Cisco develops, manufactures and sells networking hardware, software, telecommunications equipment and other high-technology services and products.',
            image: 'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/645b87e87c14ca7a092f8481_Frame%2096292.webp',
            link: 'https://www.cisco.com/'
        },
        {
            title: 'Check Point',
            description: 'Check Point Software Technologies Ltd. is a leading provider of cyber security solutions to corporate enterprises and governments globally. Check Point is a multinational provider of software and combined hardware and software products for IT security, including network security, endpoint security, cloud security, mobile security, data security and security. Its solutions protect customers from 5th-generation cyber-attacks with an industry leading catch rate of malware, ransomware and other targeted attacks. Check Point offers a multilevel security architecture with our new Gen V advanced threat prevention that protects all networks, cloud and mobile operations of a business against all known attacks combined with the industry’s most comprehensive and intuitive single point of control management system. Check Point protects over 100,000 organizations of all sizes.',
            image: 'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/645b876eb2f0b5552c660f9c_image%2036.webp',
            link: 'https://www.checkpoint.com/'
        },
        {
            title: 'Thycotic',
            description: 'Innovating the industry with their Privileged Access Management Solution. Thycotic’s award-winning Privileged Account Management solutions minimize privileged credential risk, limit user privileges and control applications on endpoints and servers. Thycotic is one of the world’s fastest growing IT security companies because we provide customers with the freedom to choose cloud or on premise software solutions that are the easiest to implement and use in the industry. Thycotic solutions are the highest rated PAM tools by your Gartner peers, and trusted by over 10,000 users worldwide including 25% of Forbes Top 50 Companies, and 20% of the Fortune 500.',
            image: 'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/645b873b2e6d6fcc27fb2761_image%2035.webp',
            link: 'https://www.thycotic.com/'
        },
        {
            title: 'RiskIQ',
            description: 'The world leader in attack surface management. RiskIQ is the leader in digital threat management, providing the most comprehensive discovery, intelligence and mitigation of threats associated with an organization’s digital presence. With more than 70 percent of attacks originating outside the firewall, RiskIQ allows enterprises to gain unified insight and control over web, social and mobile exposures. Trusted by thousands of security analysts, RiskIQ’s platform combines advanced internet data reconnaissance and analytics to expedite investigations, understand digital attack surfaces, assess risk and take action to protect business, brand, and customers. Based in San Francisco, the company is backed by Summit Partners, Battery Ventures, Georgian Partners, and MassMutual Ventures.',
            image: 'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/645b8725d6e6c49d17b1d832_image%2034.webp',
            link: 'https://www.riskiq.com/'
        },
        {
            title: 'Palo Alto Networks',
            description: 'Leader in enterprise cybersecurity. Palo Alto Networks offers an enterprise cybersecurity platform which provides network security, cloud security, endpoint protection, and various cloud-delivered security services.',
            image: 'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/645b8711d6e6c40a18b1d799_image%2033.webp',
            link: 'https://www.paloaltonetworks.com/'
        },
        {
            title: 'NowSecure',
            description: 'NowSecure is the mobile app security and privacy software company trusted by hundreds of the world’s most demanding organizations and most advanced security teams.',
            image: 'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/645b869557552978cc7e8f18_Group%20184.webp',
            link: 'https://www.nowsecure.com/'
        },
        {
            title: 'Knogin',
            description: 'Creator of CyberEASY delivering enterprise-level cybersecurity. Knogin’s mission is to democratize enterprise-level cybersecurity and make it accessible (and affordable) to everyone. Our product, CyberEASY, helps both individuals and organizations of all sizes get the protection they need through the use of threat profiling, security analytics, artificial intelligence, and more.',
            image: 'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/645b8531af49252b332b823c_image%2029.webp',
            link: 'https://www.knogin.com/'
        },
        {
            title: 'BriCata',
            description: 'Defend your network with the only network security solutions that combine signature inspection, anomaly detection, AI-based malware conviction, and threat hunting to detect, hunt and prevent threats.',
            image: 'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/645b85167c14ca0f732f434b_image%2030.webp',
            link: 'https://www.bricata.com/'
        },
        {
            title: 'Atlantic Data Forensics',
            description: 'Industry leader in digital evidence collection and forensics. Data forensics company specializing in computer forensics, e-discovery, cybersecurity, and expert testimony.',
            image: 'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/645b84e12e6d6fce13fb0902_ADF_Logo_Full_Color.webp',
            link: 'https://www.atlanticdataforensics.com/'
        },

        // Add more cards up to 12
    ];
    return (
        <div className="mt-0">
            <div className="mt-24 h-[600px] w-full relative">
                <img
                    className="absolute w-full h-full object-cover opacity-50"
                    src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/646fa67c12b0f0b66d93f740_Teams_Centered_4.webp"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-3xl md:text-4xl text-white font-bold md:w-2/4">
                        Alliances
                    </h1>
                    <p className="mt-4 text-white  max-w-2xl">
                        Learn more about our alliances whose content can assess skill levels and enhance the learning experience of our Cybrary Insider Pro and enterprise Business customers through modalities like virtual labs, CTFs, practice exams, and more.
                    </p>
                </div>
            </div>
            <div className='w-4/5 mt-24 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-12 sm:p-8'>
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="relative text-white flex flex-col items-center overflow-hidden transition-all duration-300 group min-h-[600px] "
                    >
                        <NavLink to={card.link}>
                            <div className="p-8 bg-gray-900 rounded-lg min-h-[300px] flex items-center justify-center relative overflow-hidden">
                                {/* Background Image */}
                                <img
                                    src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64369e04d29c9d9b21942d66_home-icon-background.webp"
                                    alt="Hover Image"
                                    className="absolute inset-0 w-[150%] -top-24 h-[150%] object-cover opacity-0 group-hover:opacity-80 transition-opacity duration-300 z-0"
                                />
                                {/* Foreground Image */}
                                <div className='bg-gray-800 p-4 rounded-xl'>
                                    <img src={card.image} alt={card.title} className="relative z-10 h-[100px] w-[300px] object-contain" />
                                </div>
                            </div>
                            <h3 className="text-3xl font-semibold mt-8">{card.title}</h3>
                            <p className="text-xl mt-2 line-clamp-3 text-gray-400">{card.description}</p>
                        </NavLink>
                    </div>
                ))}
            </div>
            <div className="w-full mt-24 flex justify-center">
                <SignupComponent />
            </div>
        </div>
    )
}

export default Alliances;