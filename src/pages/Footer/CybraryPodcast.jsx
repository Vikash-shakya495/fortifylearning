import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function CybraryPodcast() {
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
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/646fa67c12b0f0b66d93f740_Teams_Centered_4.webp')",
        }}
      ></div>

      <main className="flex flex-col items-center px-4 sm:px-6 z-10 mt-24 w-full mx-auto pb-20">
        {/* Intro Section */}
        <section className="relative w-full h-full">
          <div
            className="absolute inset-0 bg-cover bg-center h-full w-full"
            style={{
              backgroundImage:
                "url('https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/646fa67c814367f7b0fd5b29_Teams_Left_4.webp')",
              height: "80vh",
            }}
          ></div>

          <div className="w-full bg-black mt-20 shadow-xl mb-10"></div>
          <section className="relative left-0 sm:left-32 z-10 text-left px-4">
            <span className="inline-block px-4 py-1 bg-pink-500 text-xs font-semibold uppercase rounded-full mb-10">
              Cybrary Podcasts
            </span>
            <h1 className="text-3xl md:w-2/4 sm:text-5xl md:text-7xl text-white font-light leading-snug tracking-tight">
              Tune in to industry leaders and cybersecurity professionals
              sharing their stories
            </h1>
            <p className="mt-14 text-gray-400 leading-relaxed w-full sm:w-1/2">
              We discuss a range of topics from DevSecOps and Ransomware attacks<br />
              to diversity and how to retain talent. Entrepreneurs at all stages<br />
              of their startup companies join us to share their stories and<br />
              experiences, including how to get funding, hiring the best talent,<br />
              driving sales, and choosing where to base your business.
            </p>
          </section>
        </section>

        <div className="w-full h-px bg-black mt-20 shadow-xl mb-10"></div>

        <section className="w-5/6 mt-10 text-left px-4 flex flex-col md:flex-row items-start gap-8">
          <div className="text-left">
            <p className="text-base md:text-lg text-gray-500 font-light mt-1">
              Subscribe to the Cybrary Podcast
            </p>
            <p className="text-base md:text-lg text-gray-500 font-light mt-1">
              Using your favorite app
            </p>
            <div className="mt-40"></div>
            <div className="mt-10 text-white font-light text-base leading-relaxed flex flex-col gap-3 mb-15">
              <h2 className="text-3xl font-light text-white">
                Looking for a new{" "}
                <span className="font-semibold bg-gradient-to-r from-orange-400 via-pink-500 to-purple-400 bg-clip-text text-transparent">
                  Podcast?
                </span>
              </h2>
              <p className="text-base text-gray-400">
                Join thousands of other listeners to hear from the current leaders,<br />
                experts, vendors, and instructors in the IT and Cybersecurity fields<br />
                regarding DevSecOps, InfoSec, Ransomware attacks, the diversity and the<br />
                retention of talent, and more. Gain the confidence, consistency, and<br />
                courage to succeed at work and in life.
              </p>
              <br />
              <span className="text-white font-bold">
                Download our free media kit today to learn more.
              </span>
            </div>
          </div>

          <div className="flex-1 flex flex-col items-center">
            <div className="flex flex-row justify-center gap-0 mb-10">
              <img
                src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/6438091cafbdc23cc771c559_listen-on-spotify-seeklogo.com-2%201.svg"
                alt="Spotify"
                className="px-8 py-2 mr-1"
              />
              <img
                src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/6438091c19818292942e6c57_US_UK_Apple_Podcasts_Listen_Badge_RGB%201.svg"
                alt="Apple Podcasts"
                className="px-8 py-2 mr-1"
              />
              <img
                src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/6438091c482ffc6714693b32_EN_Google_Podcasts_Badge%201.svg"
                alt="Google Podcasts"
                className="px-8 py-2 mr-1"
              />
            </div>
            <div className="mt-40"></div>

            <div className="flex-1 flex justify-center items-start">
              <img
                src="https://cdn.prod.website-files.com/63eef15e3ff8fd318e9a6888/646fb6e4814367f7b00d9e7a_Frame%2096059.webp"
                alt="Cybrary Image"
                className="w-full h auto max-w-sm md:max-w-md"
              />
            </div>
          </div>
        </section>

        <section className="mt-12 w-full flex flex-col items-center">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            style={{ maxWidth: '1200px', width: '100%' }}
          >
            <h2
              className="text-white font-light text-2xl mb-4 text-left tracking-wide flex items-center gap-2"
              style={{ gridColumn: '1 / -1', fontWeight: '600' }}
            >
              <div className="h-4 w-4 rounded-full bg-gradient-to-r from-pink-600 to-red-800"></div> Podcast Channels
            </h2>

            {[
              {
                imageSrc: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6458220cb4a8be824744e895_cybrary-intruder-alert.webp",
                title: "Intruder Alert",
                description: "Ready to take your cybersecurity knowledge to the next level? Look no further.",
                link: '/podcast-series/intruder-alert'
              },
              {
                imageSrc: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6458220ec1313f758121ec81_podcast_default.jpeg",
                title: "Cybrary Podcasts",
                description: "Listen in to the Cybrary Podcast where industry leaders and experts share insights.",
                link: '/podcast-series/cybrary-podcasts'
              },
              {
                imageSrc: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6458220fba90a51886821f60_delinea-401_Access_Denied_Podcast_Logo_dark-logos.jpeg",
                title: "401 Access Denied",
                description: "The award-winning 401 Access Denied Podcast brings you cybersecurity expertise.",
                link: '/podcast-series/401-access-denied'
              },
              {
                imageSrc: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64582210a4850a3154ffa5bf_podcast_go.jpeg",
                title: "Go For It",
                description: "We’re excited to introduce Sarah, the President and Founder of Go For It.",
                link: '/podcast-series/go-for-it'
              }
            ].map((podcast, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg shadow-md overflow-hidden flex flex-col"
                style={{ maxWidth: '280px', margin: '0 auto' }}
              >
                <NavLink to={podcast.link}>
                  <img
                    src={podcast.imageSrc}
                    alt={podcast.title}
                    className="w-full h-45 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-white font-bold text-lg mb-2">{podcast.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {podcast.description}
                    </p>
                  </div>
                </NavLink>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 text-left px-4 w-5/6 ">
          <h2 className="text-white font-light text-2xl mb-10">All Episodes</h2>
          <div className="flex flex-col gap-6">
            {[
              {
                imageSrc: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6458220fba90a51886821f60_delinea-401_Access_Denied_Podcast_Logo_dark-logos.jpeg",
                title: "401 Access Denied Podcast Ep. 83 | The AI Revolution With Diana Kelley",
                description: "Everybody’s talking about it - the AI revolution is here. But given the rapid evolution in this field, it’s hard to keep up with the sweeping effects this technology is causing. Luckily, Joe Carson is joined by longtime AI expert Diana Kelley to shed light on all of these changes. She addresses the many misconceptions and....",
                date: "June 16, 2023",
                link: '/podcast/401-access-denied-ep-83-the-ai-revolution-with-diana-kelley'
              },
              {
                imageSrc: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6458220cb4a8be824744e895_cybrary-intruder-alert.webp",
                title: "Intruder Alert Ep. 6 | Deconstructing Malware Attacks",
                description: "In this episode of Intruder Alert, Marcus Hutchins is joined by cybersecurity expert Caitlin Sarian, known for her role as the Global Lead of Cybersecurity Advocacy and Culture at TikTok and her expertise in data protection and privacy compliance. Marcus and Caitlin provide technical insight into the latest US malware landscape.",
                date: "June 12, 2023",
                link: '/podcast/intruder-alert-ep-6-deconstructing-malwar-attacks'
              },
              {
                imageSrc: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6458220fba90a51886821f60_delinea-401_Access_Denied_Podcast_Logo_dark-logos.jpeg",
                title: "401 Access Denied Podcast Ep. 82 | Hacking The Government With Bryan Seely",
                description: "In this eye-opening episode, dive into the captivating world of cybercrime and social engineering with our host, Joe Carson, and special guest Bryan Seely! Bryan, a keynote speaker and cybersecurity expert best known for his Secret Service exposé, discusses his journey from a young computer enthusiast to a prominent figure in cybersecurity.",
                date: "June 10, 2023",
                link: '/podcast/401-access-denied-ep-82-hacking-the-government-with-bryan-seely'
              },
              {
                imageSrc: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6458220cb4a8be824744e895_cybrary-intruder-alert.webp",
                title: "Intruder Alert Ep. 5 | Community Uprising: Unravelling The Reddit Blackout",
                description: "In the latest episode of Intruder Alert, Marcus Hutchins and Cybrary blue teamer, Marc Balingit, delve into the recent news of social media uproar. They unravel the intricacies of Reddit’s contentious API changes, which have cornered third-party apps like Apollo, sparking a sweeping blackout protest across thousands of users.",
                date: "June 8, 2023",
                link: '/podcast/intruder-alert-ep-5-community-uprising-unraveling-reddit-blackout'
              },
              {
                imageSrc: "https://cdn.prod.website-files.com/63eef1be981a383fb127661f/6458220fba90a51886821f60_delinea-401_Access_Denied_Podcast_Logo_dark-logos.jpeg",
                title: "401 Access Denied Podcast Ep. 81 | Open Source Intelligence With The Grugq",
                description: "Given the complex and evolving nature of security, how do different countries approach cyber strategy on a global scale? In this episode of 401 Access Denied, Joe Carson is joined by the one and only Thaddeus E. Grugq (“The Grugq”), who brings along decades of security research and operational security experience.",
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

export default CybraryPodcast;