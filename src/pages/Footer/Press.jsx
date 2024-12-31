import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import SignupComponent from "../../components/home/SignupComponent";

function Press() {
  const [openYear, setOpenYear] = useState(null); // Tracks the open year section

  // Data structure for years and articles
  const yearsData = [
    {
      year: 2023,
      articles: [
        {
          img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64821ad37ef7471ea3148a52_WeLiveSecurity_logo.svg',
          date: "February 15",
          title: "500 hours of free content to train in cybersecurity",
          source: "WeLiveSecurity",
        },
        {
          img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64638ef1e20ad607eef2ed0d_TechstrongTV.svg',
          date: "February 9",
          title: "Chat GPT PromptDorking enabling AI-generated phishing attacks",
          source: "TechStrongTV",
        },
        {
          img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6463903fb649147581b584f0_Businesswire.svg',
          date: "February 7",
          title: "Cybrary Makes 500+ Hours of Premium Training Content Free",
          source: "Business Wire",
        },
        {
          img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/648200eb968f9f0497011f80_BrillianceSecurityMag_logo.svg',
          date: "February 7",
          title: "Cybrary Intros Free Access Cybersecurity Skills Training",
          source: "Brilliance Security Magazine",
        },
        {
          img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/646382a31cd6ea7e2f566c13_Dark-Reading.svg',
          date: "February 9",
          title:
            "Twitter Implements API Paywall; But Will That Solve Its Enormous Bot Crisis?",
          source: "Dark Reading",
        },
        {  
            img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64638dfc5ae338bb30855e52_Security-Infowatch.svg',
            date: "February 15",
            title: "Riot Games Ransomware Attack: League of Legends ",
            source: "Source Code Stolen (SecureWorld)",
          },
          {  
            img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64638e898a7670fadf449390_Secureworld.svg',
            date: "February 9",
            title: "Chat GPT PromptDorking enabling AI-generated phishing attacks",
            source: "TechStrongTV",
          },
          {  
            img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64638e895b753aa17425fc0f_Morning-Brew.svg',
            date: "February 7",
            title: "Cybrary Makes 500+ Hours of Premium Training Content Free",
            source: "Business Wire",
          },
          {  
            img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6463826dc7c075e485a53d3f_Clearance-Jobs.svg',
            date: "February 7",
            title: "Cybrary Intros Free Access Cybersecurity Skills Training",
            source: "Brilliance Security Magazine",
          },
          {  
            img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/646048ef50ab6637c4df2f47_Forbes.svg',
            date: "February 9",
            title:
              "Twitter Implements API Paywall; But Will That Solve Its Enormous Bot Crisis?",
            source: "Dark Reading",
          },
          {
            img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/646382b2e624be60261e831b_Cybersecurity-Dive.svg',
            date: "February 9",
            title:
              "Twitter Implements API Paywall; But Will That Solve Its Enormous Bot Crisis?",
            source: "Dark Reading",
          },
      ],
    },
    {
        year: 2022,
        articles: [
          {
            img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64821ad37ef7471ea3148a52_WeLiveSecurity_logo.svg',
            date: "February 15",
            title: "500 hours of free content to train in cybersecurity",
            source: "WeLiveSecurity",
          },
          {
            img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64638ef1e20ad607eef2ed0d_TechstrongTV.svg',
            date: "February 9",
            title: "Chat GPT PromptDorking enabling AI-generated phishing attacks",
            source: "TechStrongTV",
          },
          {
            img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6463903fb649147581b584f0_Businesswire.svg',
            date: "February 7",
            title: "Cybrary Makes 500+ Hours of Premium Training Content Free",
            source: "Business Wire",
          },
          {
            img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/648200eb968f9f0497011f80_BrillianceSecurityMag_logo.svg',
            date: "February 7",
            title: "Cybrary Intros Free Access Cybersecurity Skills Training",
            source: "Brilliance Security Magazine",
          },
          {
            img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/646382a31cd6ea7e2f566c13_Dark-Reading.svg',
            date: "February 9",
            title:
              "Twitter Implements API Paywall; But Will That Solve Its Enormous Bot Crisis?",
            source: "Dark Reading",
          },
          {  
              img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64638dfc5ae338bb30855e52_Security-Infowatch.svg',
              date: "February 15",
              title: "Riot Games Ransomware Attack: League of Legends ",
              source: "Source Code Stolen (SecureWorld)",
            },
            {  
              img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64638e898a7670fadf449390_Secureworld.svg',
              date: "February 9",
              title: "Chat GPT PromptDorking enabling AI-generated phishing attacks",
              source: "TechStrongTV",
            },
            {  
              img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64638e895b753aa17425fc0f_Morning-Brew.svg',
              date: "February 7",
              title: "Cybrary Makes 500+ Hours of Premium Training Content Free",
              source: "Business Wire",
            },
            {  
              img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6463826dc7c075e485a53d3f_Clearance-Jobs.svg',
              date: "February 7",
              title: "Cybrary Intros Free Access Cybersecurity Skills Training",
              source: "Brilliance Security Magazine",
            },
            {  
              img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/646048ef50ab6637c4df2f47_Forbes.svg',
              date: "February 9",
              title:
                "Twitter Implements API Paywall; But Will That Solve Its Enormous Bot Crisis?",
              source: "Dark Reading",
            },
            {
              img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/646382b2e624be60261e831b_Cybersecurity-Dive.svg',
              date: "February 9",
              title:
                "Twitter Implements API Paywall; But Will That Solve Its Enormous Bot Crisis?",
              source: "Dark Reading",
            },
        ],
      },
      {
        year: 2021,
        articles: [
          {
            img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64821ad37ef7471ea3148a52_WeLiveSecurity_logo.svg',
            date: "February 15",
            title: "500 hours of free content to train in cybersecurity",
            source: "WeLiveSecurity",
          },
          {
            img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64638ef1e20ad607eef2ed0d_TechstrongTV.svg',
            date: "February 9",
            title: "Chat GPT PromptDorking enabling AI-generated phishing attacks",
            source: "TechStrongTV",
          },
          {
            img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6463903fb649147581b584f0_Businesswire.svg',
            date: "February 7",
            title: "Cybrary Makes 500+ Hours of Premium Training Content Free",
            source: "Business Wire",
          },
          {
            img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/648200eb968f9f0497011f80_BrillianceSecurityMag_logo.svg',
            date: "February 7",
            title: "Cybrary Intros Free Access Cybersecurity Skills Training",
            source: "Brilliance Security Magazine",
          },
          {
            img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/646382a31cd6ea7e2f566c13_Dark-Reading.svg',
            date: "February 9",
            title:
              "Twitter Implements API Paywall; But Will That Solve Its Enormous Bot Crisis?",
            source: "Dark Reading",
          },
          {  
              img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64638dfc5ae338bb30855e52_Security-Infowatch.svg',
              date: "February 15",
              title: "Riot Games Ransomware Attack: League of Legends ",
              source: "Source Code Stolen (SecureWorld)",
            },
            {  
              img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64638e898a7670fadf449390_Secureworld.svg',
              date: "February 9",
              title: "Chat GPT PromptDorking enabling AI-generated phishing attacks",
              source: "TechStrongTV",
            },
            {  
              img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64638e895b753aa17425fc0f_Morning-Brew.svg',
              date: "February 7",
              title: "Cybrary Makes 500+ Hours of Premium Training Content Free",
              source: "Business Wire",
            },
            {  
              img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6463826dc7c075e485a53d3f_Clearance-Jobs.svg',
              date: "February 7",
              title: "Cybrary Intros Free Access Cybersecurity Skills Training",
              source: "Brilliance Security Magazine",
            },
            {  
              img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/646048ef50ab6637c4df2f47_Forbes.svg',
              date: "February 9",
              title:
                "Twitter Implements API Paywall; But Will That Solve Its Enormous Bot Crisis?",
              source: "Dark Reading",
            },
            {
              img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/646382b2e624be60261e831b_Cybersecurity-Dive.svg',
              date: "February 9",
              title:
                "Twitter Implements API Paywall; But Will That Solve Its Enormous Bot Crisis?",
              source: "Dark Reading",
            },
        ],
      },
      {
        year: 2020,
        articles: [
          {
            img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64821ad37ef7471ea3148a52_WeLiveSecurity_logo.svg',
            date: "February 15",
            title: "500 hours of free content to train in cybersecurity",
            source: "WeLiveSecurity",
          },
          {
            img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64638ef1e20ad607eef2ed0d_TechstrongTV.svg',
            date: "February 9",
            title: "Chat GPT PromptDorking enabling AI-generated phishing attacks",
            source: "TechStrongTV",
          },
          {
            img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6463903fb649147581b584f0_Businesswire.svg',
            date: "February 7",
            title: "Cybrary Makes 500+ Hours of Premium Training Content Free",
            source: "Business Wire",
          },
          {
            img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/648200eb968f9f0497011f80_BrillianceSecurityMag_logo.svg',
            date: "February 7",
            title: "Cybrary Intros Free Access Cybersecurity Skills Training",
            source: "Brilliance Security Magazine",
          },
          {
            img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/646382a31cd6ea7e2f566c13_Dark-Reading.svg',
            date: "February 9",
            title:
              "Twitter Implements API Paywall; But Will That Solve Its Enormous Bot Crisis?",
            source: "Dark Reading",
          },
          {  
              img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64638dfc5ae338bb30855e52_Security-Infowatch.svg',
              date: "February 15",
              title: "Riot Games Ransomware Attack: League of Legends ",
              source: "Source Code Stolen (SecureWorld)",
            },
            {  
              img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64638e898a7670fadf449390_Secureworld.svg',
              date: "February 9",
              title: "Chat GPT PromptDorking enabling AI-generated phishing attacks",
              source: "TechStrongTV",
            },
            {  
              img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64638e895b753aa17425fc0f_Morning-Brew.svg',
              date: "February 7",
              title: "Cybrary Makes 500+ Hours of Premium Training Content Free",
              source: "Business Wire",
            },
            {  
              img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6463826dc7c075e485a53d3f_Clearance-Jobs.svg',
              date: "February 7",
              title: "Cybrary Intros Free Access Cybersecurity Skills Training",
              source: "Brilliance Security Magazine",
            },
            {  
              img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/646048ef50ab6637c4df2f47_Forbes.svg',
              date: "February 9",
              title:
                "Twitter Implements API Paywall; But Will That Solve Its Enormous Bot Crisis?",
              source: "Dark Reading",
            },
            {
              img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/646382b2e624be60261e831b_Cybersecurity-Dive.svg',
              date: "February 9",
              title:
                "Twitter Implements API Paywall; But Will That Solve Its Enormous Bot Crisis?",
              source: "Dark Reading",
            },
        ],
      },
      {
        year: 2018,
        articles: [
          {
            img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64821ad37ef7471ea3148a52_WeLiveSecurity_logo.svg',
            date: "February 15",
            title: "500 hours of free content to train in cybersecurity",
            source: "WeLiveSecurity",
          },
          {
            img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64638ef1e20ad607eef2ed0d_TechstrongTV.svg',
            date: "February 9",
            title: "Chat GPT PromptDorking enabling AI-generated phishing attacks",
            source: "TechStrongTV",
          },
          {
            img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6463903fb649147581b584f0_Businesswire.svg',
            date: "February 7",
            title: "Cybrary Makes 500+ Hours of Premium Training Content Free",
            source: "Business Wire",
          },
          {
            img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/648200eb968f9f0497011f80_BrillianceSecurityMag_logo.svg',
            date: "February 7",
            title: "Cybrary Intros Free Access Cybersecurity Skills Training",
            source: "Brilliance Security Magazine",
          },
          {
            img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/646382a31cd6ea7e2f566c13_Dark-Reading.svg',
            date: "February 9",
            title:
              "Twitter Implements API Paywall; But Will That Solve Its Enormous Bot Crisis?",
            source: "Dark Reading",
          },
          {  
              img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64638dfc5ae338bb30855e52_Security-Infowatch.svg',
              date: "February 15",
              title: "Riot Games Ransomware Attack: League of Legends ",
              source: "Source Code Stolen (SecureWorld)",
            },
            {  
              img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64638e898a7670fadf449390_Secureworld.svg',
              date: "February 9",
              title: "Chat GPT PromptDorking enabling AI-generated phishing attacks",
              source: "TechStrongTV",
            },
            {  
              img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64638e895b753aa17425fc0f_Morning-Brew.svg',
              date: "February 7",
              title: "Cybrary Makes 500+ Hours of Premium Training Content Free",
              source: "Business Wire",
            },
            {  
              img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6463826dc7c075e485a53d3f_Clearance-Jobs.svg',
              date: "February 7",
              title: "Cybrary Intros Free Access Cybersecurity Skills Training",
              source: "Brilliance Security Magazine",
            },
            {  
              img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/646048ef50ab6637c4df2f47_Forbes.svg',
              date: "February 9",
              title:
                "Twitter Implements API Paywall; But Will That Solve Its Enormous Bot Crisis?",
              source: "Dark Reading",
            },
            {
              img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/646382b2e624be60261e831b_Cybersecurity-Dive.svg',
              date: "February 9",
              title:
                "Twitter Implements API Paywall; But Will That Solve Its Enormous Bot Crisis?",
              source: "Dark Reading",
            },
        ],
      },
      {
        year: 2016,
        articles: [
          {
            img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64821ad37ef7471ea3148a52_WeLiveSecurity_logo.svg',
            date: "February 15",
            title: "500 hours of free content to train in cybersecurity",
            source: "WeLiveSecurity",
          },
          {
            img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64638ef1e20ad607eef2ed0d_TechstrongTV.svg',
            date: "February 9",
            title: "Chat GPT PromptDorking enabling AI-generated phishing attacks",
            source: "TechStrongTV",
          },
          {
            img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6463903fb649147581b584f0_Businesswire.svg',
            date: "February 7",
            title: "Cybrary Makes 500+ Hours of Premium Training Content Free",
            source: "Business Wire",
          },
          {
            img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/648200eb968f9f0497011f80_BrillianceSecurityMag_logo.svg',
            date: "February 7",
            title: "Cybrary Intros Free Access Cybersecurity Skills Training",
            source: "Brilliance Security Magazine",
          },
          {
            img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/646382a31cd6ea7e2f566c13_Dark-Reading.svg',
            date: "February 9",
            title:
              "Twitter Implements API Paywall; But Will That Solve Its Enormous Bot Crisis?",
            source: "Dark Reading",
          },
          {  
              img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64638dfc5ae338bb30855e52_Security-Infowatch.svg',
              date: "February 15",
              title: "Riot Games Ransomware Attack: League of Legends ",
              source: "Source Code Stolen (SecureWorld)",
            },
            {  
              img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64638e898a7670fadf449390_Secureworld.svg',
              date: "February 9",
              title: "Chat GPT PromptDorking enabling AI-generated phishing attacks",
              source: "TechStrongTV",
            },
            {  
              img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64638e895b753aa17425fc0f_Morning-Brew.svg',
              date: "February 7",
              title: "Cybrary Makes 500+ Hours of Premium Training Content Free",
              source: "Business Wire",
            },
            {  
              img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6463826dc7c075e485a53d3f_Clearance-Jobs.svg',
              date: "February 7",
              title: "Cybrary Intros Free Access Cybersecurity Skills Training",
              source: "Brilliance Security Magazine",
            },
            {  
              img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/646048ef50ab6637c4df2f47_Forbes.svg',
              date: "February 9",
              title:
                "Twitter Implements API Paywall; But Will That Solve Its Enormous Bot Crisis?",
              source: "Dark Reading",
            },
            {
              img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/646382b2e624be60261e831b_Cybersecurity-Dive.svg',
              date: "February 9",
              title:
                "Twitter Implements API Paywall; But Will That Solve Its Enormous Bot Crisis?",
              source: "Dark Reading",
            },
          ]
      },
    {
      year: 2015,
      articles: [
        {
          img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64821ad37ef7471ea3148a52_WeLiveSecurity_logo.svg',
          date: "February 15",
          title: "500 hours of free content to train in cybersecurity",
          source: "WeLiveSecurity",
        },
        {
          img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64638ef1e20ad607eef2ed0d_TechstrongTV.svg',
          date: "February 9",
          title: "Chat GPT PromptDorking enabling AI-generated phishing attacks",
          source: "TechStrongTV",
        },
        {
          img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6463903fb649147581b584f0_Businesswire.svg',
          date: "February 7",
          title: "Cybrary Makes 500+ Hours of Premium Training Content Free",
          source: "Business Wire",
        },
        {
          img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/648200eb968f9f0497011f80_BrillianceSecurityMag_logo.svg',
          date: "February 7",
          title: "Cybrary Intros Free Access Cybersecurity Skills Training",
          source: "Brilliance Security Magazine",
        },
        {
          img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/646382a31cd6ea7e2f566c13_Dark-Reading.svg',
          date: "February 9",
          title:
            "Twitter Implements API Paywall; But Will That Solve Its Enormous Bot Crisis?",
          source: "Dark Reading",
        },
        {  
            img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64638dfc5ae338bb30855e52_Security-Infowatch.svg',
            date: "February 15",
            title: "Riot Games Ransomware Attack: League of Legends ",
            source: "Source Code Stolen (SecureWorld)",
          },
          {  
            img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64638e898a7670fadf449390_Secureworld.svg',
            date: "February 9",
            title: "Chat GPT PromptDorking enabling AI-generated phishing attacks",
            source: "TechStrongTV",
          },
          {  
            img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64638e895b753aa17425fc0f_Morning-Brew.svg',
            date: "February 7",
            title: "Cybrary Makes 500+ Hours of Premium Training Content Free",
            source: "Business Wire",
          },
          {  
            img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6463826dc7c075e485a53d3f_Clearance-Jobs.svg',
            date: "February 7",
            title: "Cybrary Intros Free Access Cybersecurity Skills Training",
            source: "Brilliance Security Magazine",
          },
          {  
            img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/646048ef50ab6637c4df2f47_Forbes.svg',
            date: "February 9",
            title:
              "Twitter Implements API Paywall; But Will That Solve Its Enormous Bot Crisis?",
            source: "Dark Reading",
          },
          {
            img:'https://cdn.prod.website-files.com/63eef1be981a383fb127661f/646382b2e624be60261e831b_Cybersecurity-Dive.svg',
            date: "February 9",
            title:
              "Twitter Implements API Paywall; But Will That Solve Its Enormous Bot Crisis?",
            source: "Dark Reading",
          },
        // Add similar objects for 2022
      ],
    },
    // Add more years here
  ];

  const toggleYear = (year) => {
    setOpenYear(openYear === year ? null : year);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header Section */}
      <div className="mt-40 text-center py-8">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">Press Archive</h1>
        <p className="text-lg md:text-xl text-gray-400">
          Stay updated with the Cybrary team's news this week to stay informed about our latest
          focus areas and priorities.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row flex-1">
        {/* Left Section: Press / Media Inquiries */}
        <div className="lg:w-1/3 p-8 flex items-center relative left-60 mb-96">
        <div className="rounded-3xl p-6 shadow-lg border border-gray-700">
    <h2 className="text-lg font-semibold mb-2">PRESS / MEDIA INQUIRIES</h2>
    <div className="flex items-center mb-2">
      <span className="mr-2">👤</span>
      <div>
        <p className="font-medium">Amanda Davi</p>
        <p className="text-gray-400 text-sm">Director of Communications</p>
      </div>
    </div>
    <div className="flex items-center">
      <span className="mr-2">📧</span>
      <p className="text-gray-400 text-sm">press@cybrary.it</p>
    </div>
  </div>
</div>

        {/* Right Section: Collapsible Year List */}
        <div className="relative left-40 lg:w-1/3 p-8">
  <div className="mt-40 space-y-4">
    {yearsData.map(({ year, articles }) => (
      <React.Fragment key={year}>
        <div
          className={`flex items-center justify-between p-4 rounded-lg cursor-pointer  transition-colors duration-300`}
          onClick={() => toggleYear(year)}
        >
          <span className="text-lg hover:text-blue-500 transition duration-300 ease-in-out">
            {year}
          </span>
          {openYear === year ? (
            <FiChevronUp className="text-gray-400" />
          ) : (
            <FiChevronDown className="text-gray-400" />
          )}
        </div>

        {/* Smoothly expand and show the details */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            openYear === year ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {openYear === year && (
            <div className="p-4 rounded-lg mt-2">
              {articles.map(({ img, date, title, source }, index) => (
                <div key={index} className="mb-4 flex items-start">
                  {img && (
                    <img
                      src={img}
                      alt={source}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                  )}
                  <div>
                    <p className="text-sm text-gray-400">{date.toUpperCase()}</p>
                    <p className="text-lg font-medium">{title}</p>
                    <p className="text-sm text-gray-400">({source})</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {year !== yearsData[yearsData.length - 1].year && (
          <hr className="border-gray-700" />
        )}
      </React.Fragment>
    ))}
  </div>
</div>
</div>

      {/* Footer Signup Component */}
      <div className="w-full mt-12 flex justify-center">
        <SignupComponent />
      </div>
    </div>
  );
}

export default Press;