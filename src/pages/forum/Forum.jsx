import React, { useState, useEffect } from "react";
import CategoriesTagsReviews from "./CategoriesTagsReviews";
import { CiMenuKebab } from "react-icons/ci";
import {
  FaBars, FaSearch, FaUser, FaStar, FaLink, FaCrown, FaUserCircle,
  FaEnvelope,
} from "react-icons/fa";
import { MdOutlineTopic } from "react-icons/md";
import { AiOutlineMenuUnfold, AiOutlineUsergroupAdd, } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { BiSolidBookmarkAlt, BiSolidRightArrow } from "react-icons/bi";
import { SiBiome } from "react-icons/si";
import { GiLaurels, GiMedal } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Forum = () => {
  const [activeTab, setActiveTab] = useState("latest"); // Default to latest tab
  const [isCategoryDropdownVisible, setIsCategoryDropdownVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState(null);
  const [isTagDropdownVisible, setIsTagDropdownVisible] = useState(false);
  const [tagSearchTerm, setTagSearchTerm] = useState('');
  const [activeTag, setActiveTag] = useState(null);
  const [activeItem, setActiveItem] = useState(null)
  const [isOpen, setIsOpen] = useState(false);

  const [selectedGroup, setSelectedGroup] = useState("Closed Groups");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSelect = (group) => {
    setSelectedGroup(group);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Update screen width on resize
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarVisible(false); // Hide sidebar on small screens
      } else {
        setIsSidebarVisible(true); // Show sidebar on larger screens
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call it initially to set the correct state
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  const toggleSidebar = () => {
    setIsSidebarVisible((prev) => !prev);
  };
    

  const categories = [
    { category: "Career Paths", total: 4, div: 'bg-fuchsia-400', message: "this is very helpful to your job." },
    { category: "Cert Prep", total: 2, div: 'bg-blue-400', message: "this is very helpful to your career." },
    { category: "Stay Ahead", total: 2, div: 'bg-cyan-400', message: "stay updated with industry trends." },
    { category: "Career Advice", total: 3, div: 'bg-red-400', message: "get expert tips and advice." },
    { category: "Industry News", total: 1, div: 'bg-green-400', message: "latest news in the industry." },
    { category: "Tech Skills", total: 5, div: 'bg-yellow-400', message: "improve your technical skills." },
    { category: "Soft Skills", total: 3, div: 'bg-purple-400', message: "enhance your communication and leadership skills." },
    { category: "Job Opportunities", total: 6, div: 'bg-indigo-400', message: "find your next job." }
  ];

  const tags = [
    "Learning", "Mentor", "a-plus", "security-plus", "aws-ccp", "career-growth",
    "networking", "job-search", "python", "cloud", "leadership", "data-science"
  ];

  const reviews = {
    "Career Paths": [
      { topic: "Welcome to Cybrary!", replies: 1, views: "2.5k", activity: "Dec 2023", tags: ["Learning", "Career Paths"], repliesImages: ["https://via.placeholder.com/30",] },
      {
        topic: "Career Path Task 1", replies: 5, views: "1.1k", activity: "Nov 2023", tags: ["Learning", "Career Paths", "security-plus"], repliesImages: [
          "https://via.placeholder.com/30", "https://via.placeholder.com/30", "https://via.placeholder.com/30",
          "https://via.placeholder.com/30", "https://via.placeholder.com/30"
        ],
      },
      { topic: "Career Path Insights", replies: 2, views: "500", activity: "Oct 2023", tags: ["Mentor", "Career Paths"], repliesImages: ["https://via.placeholder.com/30", "https://via.placeholder.com/30"], },
      {
        topic: "Career Development Tips", replies: 7, views: "3k", activity: "Sep 2023", tags: ["Learning", "Career Advice"], repliesImages: [
          "https://via.placeholder.com/30", "https://via.placeholder.com/30", "https://via.placeholder.com/30",
          "https://via.placeholder.com/30", "https://via.placeholder.com/30"
        ],
      },
      {
        topic: "Growth Path for Developers", replies: 3, views: "2.8k", activity: "Dec 2023", tags: ["Career Paths", "job-search"], repliesImages: [
          "https://via.placeholder.com/30", "https://via.placeholder.com/30", "https://via.placeholder.com/30",
        ],
      }
    ],
    "Cert Prep": [
      {
        topic: "Access Control Basics Task 1", replies: 13, views: "399", activity: "6h", tags: ["Cert Prep", "security-plus"], repliesImages: [
          "https://via.placeholder.com/30", "https://via.placeholder.com/30", "https://via.placeholder.com/30",
          "https://via.placeholder.com/30", "https://via.placeholder.com/30"
        ],
      },
      {
        topic: "Cert Prep Discussion", replies: 8, views: "800", activity: "3h", tags: ["Cert Prep", "aws-ccp"], repliesImages: [
          "https://via.placeholder.com/30", "https://via.placeholder.com/30", "https://via.placeholder.com/30",
          "https://via.placeholder.com/30", "https://via.placeholder.com/30"
        ],
      },
      {
        topic: "Cloud Security Certification", replies: 10, views: "1.5k", activity: "Jan 2024", tags: ["Cert Prep", "cloud"], repliesImages: [
          "https://via.placeholder.com/30", "https://via.placeholder.com/30", "https://via.placeholder.com/30",
          "https://via.placeholder.com/30", "https://via.placeholder.com/30"
        ],
      }
    ],
    "Stay Ahead": [
      {
        topic: "Industry Trends 2024", replies: 4, views: "200", activity: "Jan 2024", tags: ["Stay Ahead", "Learning", "Tech"], repliesImages: [
          "https://via.placeholder.com/30", "https://via.placeholder.com/30", "https://via.placeholder.com/30",
          "https://via.placeholder.com/30"
        ],
      },
      {
        topic: "Tech Innovations", replies: 10, views: "1k", activity: "Dec 2023", tags: ["Stay Ahead", "Mentor"], repliesImages: [
          "https://via.placeholder.com/30", "https://via.placeholder.com/30", "https://via.placeholder.com/30",
          "https://via.placeholder.com/30", "https://via.placeholder.com/30"
        ],
      },
      {
        topic: "Automation in 2024", replies: 12, views: "1.2k", activity: "Jan 2024", tags: ["Stay Ahead", "cloud"], repliesImages: [
          "https://via.placeholder.com/30", "https://via.placeholder.com/30", "https://via.placeholder.com/30",
          "https://via.placeholder.com/30", "https://via.placeholder.com/30"
        ],
      }
    ],
    "Career Advice": [
      {
        topic: "How to Advance in Your Career", replies: 12, views: "1.5k", activity: "Feb 2024", tags: ["Career Advice", "Mentor"], repliesImages: [
          "https://via.placeholder.com/30", "https://via.placeholder.com/30", "https://via.placeholder.com/30",
          "https://via.placeholder.com/30", "https://via.placeholder.com/30"
        ],
      },
      {
        topic: "Networking Tips", replies: 5, views: "700", activity: "Jan 2024", tags: ["Career Advice", "Learning"], repliesImages: [
          "https://via.placeholder.com/30", "https://via.placeholder.com/30", "https://via.placeholder.com/30",
          "https://via.placeholder.com/30", "https://via.placeholder.com/30"
        ],
      },
      {
        topic: "Job Search Strategies", replies: 8, views: "400", activity: "Dec 2023", tags: ["Career Advice", "a-plus"], repliesImages: [
          "https://via.placeholder.com/30", "https://via.placeholder.com/30", "https://via.placeholder.com/30",
          "https://via.placeholder.com/30", "https://via.placeholder.com/30"
        ],
      },
      {
        topic: "Mastering Soft Skills", replies: 6, views: "1.3k", activity: "Nov 2023", tags: ["Career Advice", "soft-skills"], repliesImages: [
          "https://via.placeholder.com/30", "https://via.placeholder.com/30", "https://via.placeholder.com/30",
          "https://via.placeholder.com/30", "https://via.placeholder.com/30"
        ],
      }
    ],
    "Industry News": [
      {
        topic: "New Security Vulnerability", replies: 2, views: "5k", activity: "Jan 2024", tags: ["Industry News", "security-plus"], repliesImages: [
          "https://via.placeholder.com/30", "https://via.placeholder.com/30"
        ],
      },
      {
        topic: "Cloud Vulnerabilities in 2024", replies: 3, views: "1.5k", activity: "Feb 2024", tags: ["Industry News", "cloud"], repliesImages: [
          "https://via.placeholder.com/30", "https://via.placeholder.com/30", "https://via.placeholder.com/30",
        ],
      }
    ],
    "Tech Skills": [
      {
        topic: "Mastering Python for Data Science", replies: 15, views: "3k", activity: "Dec 2023", tags: ["Tech Skills", "python", "data-science"], repliesImages: [
          "https://via.placeholder.com/30", "https://via.placeholder.com/30", "https://via.placeholder.com/30",
          "https://via.placeholder.com/30", "https://via.placeholder.com/30"
        ],
      },
      {
        topic: "Building Full-Stack Apps", replies: 7, views: "900", activity: "Jan 2024", tags: ["Tech Skills", "cloud", "python"], repliesImages: [
          "https://via.placeholder.com/30", "https://via.placeholder.com/30", "https://via.placeholder.com/30",
          "https://via.placeholder.com/30", "https://via.placeholder.com/30"
        ],
      },
      {
        topic: "Cybersecurity Fundamentals", replies: 12, views: "2.3k", activity: "Nov 2023", tags: ["Tech Skills", "security-plus"], repliesImages: [
          "https://via.placeholder.com/30", "https://via.placeholder.com/30", "https://via.placeholder.com/30",
          "https://via.placeholder.com/30", "https://via.placeholder.com/30"
        ],
      }
    ],
    "General": [
      {
        topic: "Effective Leadership in Tech", replies: 4, views: "800", activity: "Jan 2024", tags: ["Soft Skills", "leadership"], repliesImages: [
          "https://via.placeholder.com/30", "https://via.placeholder.com/30", "https://via.placeholder.com/30",
          "https://via.placeholder.com/30",
        ],
      },
      {
        topic: "Improving Communication Skills", replies: 9, views: "1.2k", activity: "Dec 2023", tags: ["Soft Skills", "communication"], repliesImages: [
          "https://via.placeholder.com/30", "https://via.placeholder.com/30", "https://via.placeholder.com/30",
          "https://via.placeholder.com/30", "https://via.placeholder.com/30"
        ],
      },
      {
        topic: "Conflict Resolution in Teams", replies: 5, views: "500", activity: "Oct 2023", tags: ["Soft Skills", "leadership"], repliesImages: [
          "https://via.placeholder.com/30", "https://via.placeholder.com/30", "https://via.placeholder.com/30",
          "https://via.placeholder.com/30", "https://via.placeholder.com/30"
        ],
      }
    ],
    "Announcment": [
      {
        topic: "Remote Developer Roles in 2024", replies: 6, views: "3k", activity: "Jan 2024", tags: ["Job Opportunities", "career-growth"], repliesImages: [
          "https://via.placeholder.com/30", "https://via.placeholder.com/30", "https://via.placeholder.com/30",
          "https://via.placeholder.com/30", "https://via.placeholder.com/30"
        ],
      },
      {
        topic: "Top Job Search Tips", replies: 14, views: "2k", activity: "Dec 2023", tags: ["Job Opportunities", "job-search"], repliesImages: [
          "https://via.placeholder.com/30", "https://via.placeholder.com/30", "https://via.placeholder.com/30",
          "https://via.placeholder.com/30", "https://via.placeholder.com/30"
        ],
      },
      {
        topic: "Preparing for Tech Interviews", replies: 10, views: "1.5k", activity: "Feb 2024", tags: ["Job Opportunities", "interviews"], repliesImages: [
          "https://via.placeholder.com/30", "https://via.placeholder.com/30", "https://via.placeholder.com/30",
          "https://via.placeholder.com/30", "https://via.placeholder.com/30"
        ],
      }
    ]
  };


  // Filter categories and tags based on search term
  const filteredCategories = categories.filter(cate =>
    cate.category.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredTags = tags.filter(tag =>
    tag.toLowerCase().includes((tagSearchTerm.toLowerCase()) ? tagSearchTerm.toLowerCase() : searchTerm)
  );

  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchIconClick = () => {
    // 1. Filter categories and tags based on searchTerm
    const filteredCategories = categories.filter(cate =>
      cate.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const filteredTags = tags.filter(tag =>
      tag.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    // 2. Update the state to reflect the filtered data
    if (filteredCategories.length > 0) {
      setActiveCategory(filteredCategories[0].category); // Set the first matching category
      setActiveTag(null); // Clear active tag
    } else if (filteredTags.length > 0) {
      setActiveTag(filteredTags[0]); // Set the first matching tag
      setActiveCategory(null); // Clear active category
    } else {
      setActiveCategory(null); // Clear active category if no match
      setActiveTag(null); // Clear active tag if no match
    }
  
    // 3. Decide the active tab based on filtering results
    if (filteredCategories.length > 0) {
      setActiveTab('categories');
    } else if (filteredTags.length > 0) {
      setActiveTab('tags');
    } else {
      setActiveTab('latest');
    }
  };

  // Handle tab clicks
  const handleTabClick = (tab) => {
    if (tab === "categories") {
      setIsCategoryDropdownVisible((prev) => !prev); // Toggle category dropdown visibility
      setIsTagDropdownVisible(false); // Close tags dropdown when categories are clicked
      setActiveItem(null);
    } else if (tab === "tags") {
      setIsTagDropdownVisible((prev) => !prev); // Toggle tags dropdown visibility
      setIsCategoryDropdownVisible(false); // Close category dropdown when tags are clicked
      setActiveItem(null);
    } else if(tab==searchTerm.toLowerCase()){
      searchTerm
    }
    else {
      setIsCategoryDropdownVisible(false); // Close dropdowns for other tabs
      setIsTagDropdownVisible(false);
      setActiveItem(null);
    }
    setActiveTab(tab); // Set active tab
  };


  const filteredReviews = () => {
    if (!activeCategory && !activeTag) return Object.values(reviews).flat();
    if (activeCategory && !activeTag) return reviews[activeCategory] || [];
    if (!activeCategory && activeTag)
      return Object.values(reviews)
        .flat()
        .filter((review) => review.tags.includes(activeTag));
    return (
      reviews[activeCategory]?.filter((review) =>
        review.tags.includes(activeTag)
      ) || []
    );
  };


  // Function to render content based on activeItem
  const renderActiveItemContent = () => {
    switch (activeItem) {
      case "About":
        return (
          <div className="p-4 bg-gray-800 rounded-lg mb-4">
            <h1 className="text-3xl font-bold mb-6">About Cybrary</h1>
            <p className="mb-10">Cybrary member community.</p>

            {/* Admin Section */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Our Admins</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {['CalmQuail2332', 'WillCAboutThat1', 'btallbot', 'AmandaCybrary', 'bjamz', 'WillCAboutThat'].map(
                  (name, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-2 bg-gray-800 rounded-lg"
                    >
                      <FaUserCircle size={30} className="text-gray-400" />
                      <span>{name}</span>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Moderator Section */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Our Moderators</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {['JosephWhite', 'markinibert', 'LeakeyFaucet', 'Pat_P', 'LoriP', 'CitizenFortress', 'Analyse', 'EfficientMastodon6267', 'CyberAngel'].map(
                  (name, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-2 bg-gray-800 rounded-lg"
                    >
                      <FaUserCircle size={30} className="text-gray-400" />
                      <span>{name}</span>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Site Statistics Section */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 flex items-center space-x-2">
                <AiOutlineUsergroupAdd size={25} />
                <span>Site Statistics</span>
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h3 className="text-xl mb-2">24 Hours</h3>
                  <ul className="ml-4 list-disc">
                    <li>Topics: 1</li>
                    <li>Posts: 880</li>
                    <li>Sign-ups: 674</li>
                    <li>Active Users: 120</li>
                    <li>Likes: 5</li>
                  </ul>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h3 className="text-xl mb-2">7 Days</h3>
                  <ul className="ml-4 list-disc">
                    <li>Topics: 10</li>
                    <li>Posts: 5.1k</li>
                    <li>Sign-ups: 5.1k</li>
                    <li>Active Users: 120</li>
                    <li>Likes: 26</li>
                  </ul>
                </div>
                {/* Additional Statistics Here */}
              </div>
            </div>

            {/* Contact Us Section */}
            <div className="mt-10">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="flex items-center space-x-2">
                <FaEnvelope size={20} />
                <span>
                  In the event of a critical issue or urgent matter affecting this site, please contact{' '}
                  <a
                    href="https://help.cybrary.it"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline"
                  >
                    https://help.cybrary.it
                  </a>
                </span>
              </p>
            </div>
          </div>
        );
      case "FAQ":
        return (
          <div className="p-4 bg-gray-800 rounded-lg mb-4">
            <h2 className="text-xl font-bold">Frequently Asked Questions</h2>
            <div className="mt-4">
              <h2 class="text-2xl font-bold text-blue-600 mb-4">This is a Civilized Place for Public Discussion</h2>
              <p class=" mb-4">
                Please treat this discussion forum with the same respect you would a public park. We, too, are a shared community resource — a place to share skills, knowledge, and interests through ongoing conversation.
              </p>
              <p class=" mb-4">
                These are not hard and fast rules. They are guidelines to aid the human judgment of our community and keep this a kind, friendly place for civilized public discourse.
              </p>

              <h2 class="text-2xl font-bold text-blue-600 mb-4">Improve the Discussion</h2>
              <p class=" mb-4">
                Help us make this a great place for discussion by always adding something positive to the discussion, however small. If you are not sure your post adds to the conversation, think over what you want to say and try again later.
              </p>
              <p class=" mb-4">
                One way to improve the discussion is by discovering ones that are already happening. Spend time browsing the topics here before replying or starting your own, and you’ll have a better chance of meeting others who share your interests.
              </p>
              <p class=" mb-4">
                The topics discussed here matter to us, and we want you to act as if they matter to you, too. Be respectful of the topics and the people discussing them, even if you disagree with some of what is being said.
              </p>



              <h2 class="text-2xl font-bold text-blue-600 mb-4">Your Participation Counts</h2>
              <p class=" mb-4">
                The conversations we have here set the tone for every new arrival. Help us influence the future of this community by choosing to engage in discussions that make this forum an interesting place to be — and avoiding those that do not.
              </p>
              <p class=" mb-4">
                Discourse provides tools that enable the community to collectively identify the best (and worst) contributions: bookmarks, likes, flags, replies, edits, watching, muting, and so forth. Use these tools to improve your own experience, and everyone else’s, too.
              </p>
              <p class=" mb-4">Let’s leave our community better than we found it.</p>

              <h2 class="text-2xl font-bold text-blue-600 mb-4">If You See a Problem, Flag It</h2>
              <p class=" mb-4">
                Moderators have special authority; they are responsible for this forum. But so are you. With your help, moderators can be community facilitators, not just janitors or police.
              </p>
              <p class=" mb-4">
                When you see bad behavior, don’t reply. Replying encourages bad behavior by acknowledging it, consumes your energy, and wastes everyone’s time. Just flag it. If enough flags accrue, action will be taken, either automatically or by moderator intervention.
              </p>
              <p class=" mb-4">
                In order to maintain our community, moderators reserve the right to remove any content and any user account for any reason at any time. Moderators do not preview new posts; the moderators and site operators take no responsibility for any content posted by the community.
              </p>

              <h2 class="text-2xl font-bold text-blue-600 mb-4">Always Be Civil</h2>
              <p class=" mb-4">Nothing sabotages a healthy conversation like rudeness:</p>


              <h2 class="text-2xl font-bold text-blue-600 mb-4">Post Only Your Own Stuff</h2>
              <p class=" mb-4">
                You may not post anything digital that belongs to someone else without permission. You may not post descriptions of, links to, or methods for stealing someone’s intellectual property (software, video, audio, images), or for breaking any other law.
              </p>

              <h2 class="text-2xl font-bold text-blue-600 mb-4">Powered by You</h2>
              <p class=" mb-4">
                This site is operated by your friendly local staff and you, the community. If you have any further questions about how things should work here, open a new topic in the site feedback category and let’s discuss! If there’s a critical or urgent issue that can’t be handled by a meta topic or flag, contact us via the staff page.
              </p>

              <h2 class="text-2xl font-bold text-blue-600 mb-4">Terms of Service</h2>
              <p class=" mb-4">
                Yes, legalese is boring, but we must protect ourselves – and by extension, you and your data – against unfriendly folks. We have a Terms of Service describing your (and our) behavior and rights related to content, privacy, and laws. To use this service, you must agree to abide by our TOS.
              </p>
            </div>
          </div>
        );
      case "Group":
        return (
          <div className="p-4 bg-gray-800 rounded-lg mb-4">
            <h2 className="text-xl font-bold text-white mb-4">Group</h2>
            <div className="flex items-center gap-4 mb-2">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="All Groups"
                  className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white focus:outline-none"

                />
              </div>
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="px-4 py-2 bg-gray-900 text-white rounded-lg flex items-center justify-between gap-2 focus:outline-none border border-blue-500"
                >
                  {selectedGroup}
                  <span className={`transform ${dropdownOpen ? "rotate-180" : ""}`}>
                    ▼
                  </span>
                </button>
                {dropdownOpen && (
                  <ul className="absolute top-full left-0 mt-2 w-full bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden z-10">
                    <li
                      onClick={() => handleSelect("Filter by group type")}
                      className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                    >
                      Filter by group type
                    </li>
                    <li
                      onClick={() => handleSelect("Public Groups")}
                      className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                    >
                      Public Groups
                    </li>
                    <li
                      onClick={() => handleSelect("Closed Groups")}
                      className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                    >
                      Closed Groups
                    </li>
                  </ul>
                )}
              </div>
            </div>
            <p className="text-white">There are no visible groups.</p>
          </div>
        );
      case "Badges":
        return (
          <div className="p-4 bg-gray-800 rounded-lg mb-4">
            <h2 className="text-xl font-bold text-white mb-4">Badges</h2>

            <div className="grid grid-cols-1 gap-4 text-white">
              {/* Getting Started Section */}
              <div className="p-3 rounded">
                <h3 className="text-lg font-bold">Getting Started</h3>
                <div className="mt-2 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 ">
                  <div className="bg-gray-900 p-8 rounded flex items-center gap-2">
                    <SiBiome className="text-orange-300" size={32} />
                    <span>Autobiographer</span>
                  </div>
                  <div className="bg-gray-900 p-8 rounded flex items-center gap-2">
                    <FaStar className="text-orange-300" size={32} />
                    <span>Nice Topic</span>
                  </div>
                  <div className="bg-gray-900 p-8 rounded flex items-center gap-2">
                    <FaLink className="text-orange-300" size={32} />
                    <span>Popular Link</span>
                  </div>
                  <div className="bg-gray-900 p-8 rounded flex items-center gap-2">
                    <GiLaurels className="text-orange-300" size={32} />
                    <span>Good Reply</span>
                  </div>
                  <div className="bg-gray-900 p-8 rounded flex items-center gap-2">
                    <FaStar className="text-orange-300" size={32} />
                    <span>Good Topic</span>
                  </div>
                </div>
              </div>

              {/* Posting Section */}
              <div className="p-3 rounded">
                <h3 className="text-lg font-bold">Posting</h3>
                <div className="mt-2 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10">
                  <div className="bg-gray-900 p-8 rounded flex items-center gap-2">
                    <FaStar className="text-orange-300" size={32} />
                    <span>Nice Reply</span>
                  </div>
                  <div className="bg-gray-900 p-8 rounded flex items-center gap-2">
                    <FaStar className="text-orange-300" size={20} />
                    <span>Nice Topic</span>
                  </div>
                  <div className="bg-gray-900 p-8 rounded flex items-center gap-2">
                    <FaLink className="text-orange-300" size={32} />
                    <span>Popular Link</span>
                  </div>
                  <div className="bg-gray-900 p-8 rounded flex items-center gap-2">
                    <GiMedal className="text-orange-300" size={32} />
                    <span>Good Reply</span>
                  </div>
                  <div className="bg-gray-900 p-8 rounded flex items-center gap-2">
                    <FaStar className="text-orange-300" size={32} />
                    <span>Good Topic</span>
                  </div>
                </div>
              </div>

              {/* Trust Level Section */}
              <div className="p-3 rounded">
                <h3 className="text-lg font-bold">Trust Level</h3>
                <div className="mt-2 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10">
                  <div className="bg-gray-900 p-8 rounded flex items-center gap-2">
                    <FaCrown className="text-orange-300" size={32} />
                    <span>Basic</span>
                  </div>
                  <div className="bg-gray-900 p-8 rounded flex items-center gap-2">
                    <FaCrown className="text-orange-300" size={32} />
                    <span>Member</span>
                  </div>
                  <div className="bg-gray-900 p-8 rounded flex items-center gap-2">
                    <FaCrown className="text-orange-300" size={32} />
                    <span>Regular</span>
                  </div>
                  <div className="bg-gray-900 p-8 rounded flex items-center gap-2">
                    <GiMedal className="text-orange-300" size={32} />
                    <span>Leader</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null; // No active item selected
    }
  };

  return (
    <div className="bg-gray-800">
      <header className={`py-4 px-4 lg:px-20 flex justify-between bg-black w-full items-center transition-all duration-300 ${isSidebarVisible ? "md:px-20" : "md:md:px-40"}`}>
        <div className="flex items-center space-x-4">
          <FaBars size={44} onClick={toggleSidebar} className="hover:bg-slate-800 p-2 hover:cursor-pointer" />
          <h1 className="text-2xl font-bold hidden sm:block">FortifyLearning</h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <FaSearch className="absolute right-3 top-3 text-gray-400 hover:cursor-pointer"
            onClick={handleSearchIconClick} />
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-800 w-32 sm:w-60 text-gray-300 pl-4 pr-4 py-2 rounded-lg"
              value={searchTerm}
              onChange={handleSearchInput}
              onKeyDown={handleSearchIconClick}
              
            />
          </div>
          <NavLink to='/login'>
            <button className="flex items-center space-x-2 bg-blue-600 px-4 py-2 rounded-lg">
              <FaUser className="hidden sm:block" />
              <span>Log In</span>
            </button>
          </NavLink>
        </div>
      </header>
      <div className="flex w-full bg-gray-900 text-gray-200 pb-6 ">
        {/* Sidebar */}
        <aside className={`w-5/6 sm:w-2/5 md:w-1/3 bg-gray-900 pl-4 lg:pl-20 pr-2 lg:pr-4 pt-4 transition-all duration-300 ${isSidebarVisible ? "-translate-x-full md:translate-x-0 z-0 " : "translate-x-0 md:translate-x-full md:z-2 z-10 "}`}>
          <ul className="relative">
            <li className="dropdown-hover flex gap-2 py-2 px-4 items-center rounded hover:bg-gray-800 md:hover:w-56"
              onClick={() => { setActiveItem(null); }}
            >
              <MdOutlineTopic /> Topics
            </li>
            <li
              className=" dropdown-hover flex gap-2 py-2 px-4 items-center rounded hover:bg-gray-800 md:hover:w-56 cursor-pointer"
              onClick={toggleDropdown}
            >
              <CiMenuKebab /> More
            </li>
            {isOpen && (
              <ul className="absolute top-full left-0 bg-gray-800 text-white py-2 rounded shadow-lg w-40">
                <li className="px-4 py-2 hover:bg-gray-700 md:hover:w-56 cursor-pointer" onClick={() => setActiveItem("About")}>About</li>
                <li className="px-4 py-2 hover:bg-gray-700 md:hover:w-56 cursor-pointer" onClick={() => setActiveItem("FAQ")}>FAQ</li>
                <li className="px-4 py-2 hover:bg-gray-700 md:hover:w-56 cursor-pointer" onClick={() => setActiveItem("Group")}>Group</li>
                <li className="px-4 py-2 hover:bg-gray-700 md:hover:w-56 cursor-pointer" onClick={() => setActiveItem("Badges")}>Badges</li>
              </ul>
            )}
          </ul>
          <h2 className="flex items-center gap-2 text-lg font-semibold mt-2">
            <IoIosArrowDown /> Categories
          </h2>
          <ul>
            {categories.slice(0, 5).map((cate, index) => (
              <li
                key={index}
                className="dropdown-hover flex gap-2 py-2 px-4 items-center rounded hover:bg-gray-800 md:hover:w-56"
                onClick={() => {
                  setActiveCategory(cate.category);
                  setActiveItem(null); // Set the active category
                }}
              >
                <div className={`${cate.div} h-3 w-3`}></div>
                <div>{cate.category}</div>
              </li>
            ))}
            <li className="text-gray-400 dropdown-hover flex gap-2 py-2 px-4 mb-2 items-center rounded hover:bg-gray-800 md:hover:w-56"
              onClick={() => {
                setActiveCategory(null); // Show all categories
                setActiveItem(null);
              }}
            >
              <AiOutlineMenuUnfold /> All Categories
            </li>
          </ul>
          <h2 className="flex items-center gap-2 text-lg font-semibold mt-2">
            <IoIosArrowDown /> Tags
          </h2>
          <ul>
            {tags.slice(0, 5).map((tag, index) => (
              <li key={index} className="dropdown-hover flex gap-2 py-2 px-4 items-center rounded hover:bg-gray-800 md:hover:w-56"
                onClick={() => {
                  setActiveTag(tag);
                  setActiveItem(null); // Set the active tag
                }}
              >
                <BiSolidBookmarkAlt /> {tag}
              </li>
            ))}
            <li className="text-gray-400 dropdown-hover flex gap-2 py-2 px-4 mb-2 items-center rounded hover:bg-gray-800 md:hover:w-56"
              onClick={() => {
                setActiveTag(null);
                setActiveItem(null); // Show all tags
              }}
            >
              <AiOutlineMenuUnfold /> All tags
            </li>
          </ul>
        </aside>
        <main className={`md:w-full relative w-screen -left-40 sm:-left-60 sm:px-2  md:-left-20 sm:translate-x-20 md:right-0 md:translate-x-0  md:flex-1 md:border-l px-8 lg:px-24 transition-all duration-300 ${isSidebarVisible ? "z-0" : "border-none md:z-10 z-2 md:-translate-x-44 md:-left-56 md:w-screen  bg-gray-900 "}`}>
          {/* Topics */}
          <section className="sm:w-screen md:w-full ">
            <ul className="flex py-4 gap-4">
              {/* Categories */}
              <li
                className={`rounded-lg p-2 flex items-center gap-2 border cursor-pointer ${activeTab === "categories" ? "border-blue-500" : ""}`}
                onClick={() => handleTabClick("categories")}
              >
                Categories <BiSolidRightArrow />
              </li>

              {/* Tags Tab */}
              <li
                className={`rounded-lg p-2 flex items-center gap-2 border cursor-pointer ${activeTab === "tags" ? "border-blue-500" : ""}`}
                onClick={() => handleTabClick("tags")}
              >
                Tags <BiSolidRightArrow />
              </li>

              {/* Latest Tab */}
              <li
                className={`border-b-2 flex items-center cursor-pointer hover:bg-blue-700 rounded-lg p-2 ${activeTab === "latest" ? "border-blue-500 text-blue-500 hover:bg-transparent" : "border-none"}`}
                onClick={() => handleTabClick("latest")}
              >
                Latest
              </li>

              {/* Hot Tab */}
              <li
                className={`border-b-2 flex items-center cursor-pointer hover:bg-blue-700 rounded-lg p-2 ${activeTab === "hot" ? "border-blue-500 text-blue-500 hover:bg-transparent" : "border-none"} cursor-pointer`}
                onClick={() => handleTabClick("hot")}
              >
                Hot
              </li>
            </ul>

            {activeItem === null ? (
              <CategoriesTagsReviews
                activeTab={activeTab}
                isCategoryDropdownVisible={isCategoryDropdownVisible}
                isTagDropdownVisible={isTagDropdownVisible}
                filteredCategories={filteredCategories}
                filteredTags={filteredTags}
                searchTerm={searchTerm}
                tagSearchTerm={tagSearchTerm}
                setSearchTerm={setSearchTerm}
                setTagSearchTerm={setTagSearchTerm}
                categories={categories}
                tags={tags}
                reviews={reviews}
                activeCategory={activeCategory}
                activeTag={activeTag}
                setActiveCategory={setActiveCategory}
                setActiveTag={setActiveTag}
                filteredReviews={filteredReviews()}
                activeItem={activeItem}
                renderActiveItemContent={renderActiveItemContent}
              />
            ) : (
              renderActiveItemContent() // Show active item content if activeItem is not null
            )}
          </section>
        </main>
      </div>
    </div>
  );
};

export default Forum;
