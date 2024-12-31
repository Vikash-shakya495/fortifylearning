import React from 'react';

const GoForIt = () => {
  return (
    <div className="mx-auto">
      {/* Podcast Hero Section */}
      <div className="md:w-5/6 mx-auto flex flex-col md:flex-row justify-center items-center min-h-screen bg-black text-white p-8 rounded-lg gap-8">
        {/* Text Section */}
        <div className="md:w-2/3 space-y-6 text-center md:text-left">
          <span className="text-pink-500 font-bold uppercase">Cybrary Podcasts</span>
          <h1 className="text-4xl font-extrabold">Go For It</h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            We're excited to introduce Sarah, the President and Founder of LeadingLadies.co, as
            she shares her story and inspiration to go for it, every day. From her part-time work
            through high school and college, to the experiences that taught her how to run operations
            for large businesses, Sarah shares how she discovered her Ah-Ha moment and how people can
            find theirs.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/3 flex justify-center">
          <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-lg">
            <img
              src="https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64582210a4850a3154ffa5bf_podcast_go.jpeg"
              alt="Sarah Moffat"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* All Episodes Section */}
      <div className="bg-gradient-to-b from-gray-950 text-white md:px-32 py-12">
        {/* Header */}
        <div className=" mx-auto mb-8">
          <h2 className="text-lg font-semibold text-pink-500 flex items-center">
            <span className="mr-2">•</span> All Episodes
          </h2>
        </div>

        {/* Episodes List */}
        <div className="space-y-8">
          {/* Episode Card */}
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              {/* Image Section */}
              <div className="w-full md:w-1/3">
                <img
                  src="https://cdn.prod.website-files.com/63eef1be981a383fb127661f/64582210a4850a3154ffa5bf_podcast_go.jpeg"
                  alt={`Episode ${index + 1}`}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="w-full md:w-2/3 p-6 space-y-4">
                <p className="text-sm text-gray-400">June 28, 2021</p>
                <h3 className="text-2xl font-bold">
                  Finding Your Hope | Go For It With Sarah Moffat Ep. {index + 8}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  As the first season of Go For It comes to an end, Sarah shares her experience with
                  overcoming mental obstacles such as depression and finding hope amidst an uncertain
                  time. Sarah explains the importance of "thinking everything is rigged in your favor"
                  when your faith is being tested by a difficult...
                </p>
                <button className="bg-transparent border border-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700">
                  Listen or Watch
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GoForIt;
