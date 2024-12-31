import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function IntruderAlert() {
  const podcasts = [
    {
      imageSrc:
        "https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64708170617304193d567086_Intruder%20Alert_Podcast_Cover_Art.jpg",
      title: "Intruder Alert",
      description:
        "Ready to take your cybersecurity knowledge to the next level? Look no further than Intruder Alert, the podcast that delves into the minds of hackers.",
    },
    {
      imageSrc:
        "https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64708170617304193d567087_Cybrary%20Podcast%20Cover%20Art.jpg",
      title: "Cybrary Podcasts",
      description:
        "Listen in to the Cybrary Podcast where industry leaders and experts share their insights and experiences on the latest cybersecurity trends.",
    },
    {
      imageSrc:
        "https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64708170617304193d567088_401%20Access%20Denied%20Podcast%20Cover%20Art.jpg",
      title: "401 Access Denied",
      description:
        "The 2021 award-winning 401 Access Denied Podcast brings you the latest in cybersecurity news, trends, and insights from industry experts.",
    },
    {
      imageSrc:
        "https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/64708170617304193d567089_Go%20For%20It%20Podcast%20Cover%20Art.jpg",
      title: "Go For It",
      description:
        "We're excited to introduce Sarah Moffat, the President and Founder of Fireside Research, as the new host of the Go For It podcast.",
    },
  ];

  // States for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2; // Adjust to display two podcasts per page

  // Calculate the total number of pages
  const totalPages = Math.ceil(podcasts.length / itemsPerPage);

  // Get items for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = podcasts.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const goToPage = (pageNumber) => setCurrentPage(pageNumber);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className="bg-gradient-to-b w-full from-black to-gray-900 text-white min-h-screen flex flex-col items-center relative overflow-hidden">
      <main className="flex flex-col items-center px-4 sm:px-6 z-10 mt-24 w-full mx-auto pb-20">
        {/* Intro Section */}
        <section className="w-screen h-auto bg-black mt-20 shadow-xl mb-10 py-16">
  <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between px-8 lg:px-16">
    {/* Left Text Section */}
    <div className="relative lg:w-2/3 text-left items-center text-right-center justify-center text-white">
      <span className="inline-block px-4 py-1 bg-pink-500 text-xs font-semibold uppercase rounded-full mb-8">
        Cybrary Podcasts
      </span>
      <h1 className="text-3xl sm:text-5xl lg:text-7xl font-light leading-snug tracking-tight">
        Intruder Alert:<br />
        Conversations with <br />
        Cybrary's Hackers
      </h1>
      <p className=" mt-8 text-gray-400 leading-relaxed">
        Ready to take your cybersecurity knowledge to the next level?<br />
        Look no further than Intruder Alert: Conversations with Cybrary's<br />
        Hackers. Hosted by the legendary Marcus Hutchins, this bi-weekly<br />
        podcast is the ultimate destination for hacking enthusiasts and<br />
        practitioners alike.
      </p>
      <p className="mt-8 text-gray-400 leading-relaxed">
        Each episode features a deep dive into the latest trends and<br />
        techniques used by hackers and cybersecurity experts, along<br />
        with real-world stories and case studies that bring these<br />
        concepts to life. From ethical hacking and penetration testing to<br />
        cyber espionage and data breaches, Intruder Alert covers it all.
      </p>
      <p className="mt-8 text-gray-400 leading-relaxed">
        So tune in, subscribe, and get ready to join the conversation on<br />
        Intruder Alert: Conversations with Cybrary's Hackers!
      </p>
      {/* Subscribe Section */}
      <h2 className="mt-10">Subscribe or listen now on your favorite podcast app:</h2>
      <div className="flex gap-4 mt-4">
        <img
          src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/6438091cafbdc23cc771c559_listen-on-spotify-seeklogo.com-2%201.svg"
          alt="Spotify"
          className="w-24"
        />
        <img
          src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/6438091c19818292942e6c57_US_UK_Apple_Podcasts_Listen_Badge_RGB%201.svg"
          alt="Apple Podcasts"
          className="w-24"
        />
        <img
          src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/6438091c482ffc6714693b32_EN_Google_Podcasts_Badge%201.svg"
          alt="Google Podcasts"
          className="w-24"
        />
      </div>
    </div>

    {/* Right Image Section */}
    <div className="relative w-full lg:w-1/3 flex justify-center lg:justify-end mt-10 lg:mt-0">
      <img
        src="https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6458220cb4a8be824744e895_cybrary-intruder-alert.webp"
        alt="Intruder Alert"
        className="w-full lg:w-auto max-w-md rounded-lg shadow-lg"
      />
    </div>
  </div>
</section>

        <section className="mt-10 text-left px-4 w-5/6 ">
          <h2 className="relative left-10 text-white font-light text-2xl mb-10">All Episodes</h2>
          <div className="flex flex-col gap-6">
            {[
              {
                imageSrc: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6458220cb4a8be824744e895_cybrary-intruder-alert.webp",
                title: "Intruder Alert Ep. 6 | Deconstructing Malware Attacks and Forging a Successful Career in Cybersecurity with Caitlin Sarian",
                description: "In this episode of Intruder Alert, Marcus Hutchins is joined by cybersecurity expert Caitlin Sarian, known for her role as the Global Lead of Cybersecurity Advocacy and Culture at TikTok and her expertise in data protection and privacy compliance. Marcus and Caitlin provide technical insight into the latest US malware ",
                date: "June 23, 2023",
                link: '/podcast/401-access-denied-ep-83-the-ai-revolution-with-diana-kelley'
              },
              {
                imageSrc: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6458220cb4a8be824744e895_cybrary-intruder-alert.webp",
                title: "Intruder Alert Ep. 5 | Community Uprising: Unravelling the Reddit Blackout",
                description: "In the latest episode of Intruder Alert, Marcus Hutchins and Cybrary blue teamer, Marc Balingit, delve into the recent news of social media uproar. They unravel the intricacies of Reddit’s contentious API changes, which have cornered third-party apps like Apollo, sparking a sweeping blackout protest across thousands ",
                date: "June 12, 2023",
                link: '/podcast/intruder-alert-ep-6-deconstructing-malwar-attacks'
              },
              {
                imageSrc: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6458220cb4a8be824744e895_cybrary-intruder-alert.webp",
                title: "Intruder Alert Ep. 4 | Unmasking the New Global Malware Threat on Android Devices",
                description: "In this episode of Intruder Alert, Marcus Hutchins is joined again by Cybrary red team expert Matt Mullins to discuss the new Guerrilla malware that has infected nearly 9 million Android devices worldwide, orchestrated by the notorious Lemon Group. Additionally, Matt and Marcus dive into Android 13's new ",
                date: "June 10, 2023",
                link: '/podcast/401-access-denied-ep-82-hacking-the-government-with-bryan-seely'
              },
              {
                imageSrc: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6458220cb4a8be824744e895_cybrary-intruder-alert.webp",
                title: "Intruder Alert Ep. 3 | Hacktivism and Bug Bounties with Ben Sadeghipour (aka Nahamsec)",
                description: "In this episode of the Intruder Alert Podcast, Marcus Hutchins is joined by renowned security researcher and hacker Ben Sadeghipour, aka Nahamsec. In this episode, Marcus and Nahamsec discuss the notorious APT41 threat group and the growing threat of hacktivism on the cybersecurity landscape. Don't ",
                date: "June 8, 2023",
                link: '/podcast/intruder-alert-ep-5-community-uprising-unraveling-reddit-blackout'
              },
              {
                imageSrc: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6458220cb4a8be824744e895_cybrary-intruder-alert.webp",
                title: "Intruder Alert Ep. 2 | Secret Cyber Attacks & the Future of Mandated Reporting",
                description: "In this episode of Intruder Alert, Marcus Hutchins is joined by Will Carlson, the Senior Director of Content at Cybrary, where they delve into the world of red and blue teaming. Gain valuable insights into the concerning trend of companies hiding data breaches, particularly when mandated reporting is on the horizon. Whether you are a seasoned cybersecurity expert or just starting out, this episode is an unmissable opportunity to elevate your knowledge and stay up-to-date with the latest trends and issues in the industry. Tune in now and stay ahead of the game!",
                date: "May 30, 2023",
                link: '/podcast/401-access-denied-ep-81-open-source-intelligence-with-the-grugq'
              },
            ].map((episode, index) => (
              <div key={index}>
                <div className="flex flex-row items-center gap-4 overflow-hidden rounded-lg p-4">
                  <div className="p-2 rounded-md">
                    <img
                      src={episode.imageSrc}
                      alt={episode.title}
                      className="h-80 w-96 object-cover"
                    />
                  </div>
                  <div className="h-auto w-px bg-gray-500"></div>
                  <div className="flex-grow">
                    <p className="text-gray-400 text-sm mb-2">{episode.date}</p>
                    <h3 className="text-white font-semibold text-lg mb-2">{episode.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{episode.description}</p>
                    <NavLink to={episode.link} className="px-4 py-2 border text-white rounded hover:bg-pink-600">
                      <button>
                        Listen or Watch
                      </button>
                    </NavLink>
                  </div>
                </div>
                {index < 4 && <hr className="border-t border-gray-600 mt-5" />}
              </div>
            ))}
          </div>
        </section>

        <div className="mt-8 flex justify-center items-center">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className={`${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
              } text-white border border-gray-500 rounded-full h-10 w-10 flex justify-center items-center hover:border-white`}
            aria-label="Previous Page"
          >
            &lt;
          </button>

          <ul className="flex gap-2 mx-4">
            {Array.from({ length: totalPages }, (_, i) => (
              <li key={i}>
                <button
                  onClick={() => goToPage(i + 1)}
                  className={`${currentPage === i + 1
                    ? "bg-white text-black"
                    : "bg-transparent border-gray-500 hover:border-white"
                    } text-white border h-10 w-10 flex justify-center items-center rounded-full`}
                >
                  {i + 1} </button>
              </li>
            ))}
          </ul>

          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className={`${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
              } text-white border border-gray-500 rounded-full h-10 w-10 flex justify-center items-center hover:border-white`}
            aria-label="Next Page"
          >
            &gt;
          </button>
        </div>
      </main>

    </div>
  );
}

export default IntruderAlert;