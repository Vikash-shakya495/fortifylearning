import React, { useState, useEffect } from "react";

const CategoriesTagsReviews = ({
  activeTab,
  isCategoryDropdownVisible,
  isTagDropdownVisible,
  filteredCategories,
  filteredTags,
  searchTerm,
  tagSearchTerm,
  setSearchTerm,
  setTagSearchTerm,
  categories,
  tags,
  reviews,
  activeCategory,
  activeTag,
  setActiveCategory,
  setActiveTag,
  setIsCategoryDropdownVisible,
  setIsTagDropdownVisible,
  filteredReviews,
  activeItem,
  renderActiveItemContent,
}) => {
  // Filter reviews based on selected category, tag, and active tab
  const getFilteredReviews = () => {
    let allReviews = Object.values(reviews).flat(); // Combine all reviews into one array

    // Filter by category if activeCategory is selected
    if (activeCategory) {
      allReviews = allReviews.filter((review) =>
        review.tags.includes(activeCategory)
      );
    }

    // Further filter by tag if activeTag is selected
    if (activeTag) {
      allReviews = allReviews.filter((review) =>
        review.tags.includes(activeTag)
      );
    }

    if (activeTab === "hot") {
      return allReviews.sort(
        (a, b) =>
          parseInt(b.views.replace("k", "000")) - parseInt(a.views.replace("k", "000"))
      );
    }
    if (activeTab === "latest") {
      return allReviews.sort(
        (a, b) => new Date(b.activity) - new Date(a.activity)
      );
    }

    return allReviews;
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      const categoryDropdown = document.querySelector(".category-dropdown");
      const tagDropdown = document.querySelector(".tag-dropdown");

      // Check if click is outside both dropdowns
      if (
        (categoryDropdown && !categoryDropdown.contains(e.target)) &&
        (tagDropdown && !tagDropdown.contains(e.target))
      ) {
        setIsCategoryDropdownVisible(false);
        setIsTagDropdownVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [setIsCategoryDropdownVisible, setIsTagDropdownVisible]);




  //Media Query
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Update screen width on resize
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {activeItem ? (
        renderActiveItemContent() // Use the passed function here
      ) : (
        <>
          {/* Selected Filters Display */}
          <div className="mb-4">
            {activeCategory && (
              <span className="bg-fuchsia-600 text-white px-2 py-1 rounded-lg mr-2">
                Category: {activeCategory}{" "}
                <button
                  onClick={() => setActiveCategory(null)}
                  className="ml-2 text-gray-200"
                >
                  ✕
                </button>
              </span>
            )}
            {activeTag && (
              <span className="bg-blue-600 text-white px-2 py-1 rounded-lg">
                Tag: {activeTag}{" "}
                <button
                  onClick={() => setActiveTag(null)}
                  className="ml-2 text-gray-200"
                >
                  ✕
                </button>
              </span>
            )}
          </div>

          {/* Categories Dropdown */}
          {isCategoryDropdownVisible && activeTab === "categories" && (
            <div className="absolute bg-gray-950 rounded-lg border shadow-lg mt-2 py-2 px-4 category-dropdown">
              <input
                type="text"
                className="w-full p-2 mb-2 rounded-lg bg-gray-900 text-white"
                placeholder="Search Categories"
                value={searchTerm}
                onChange={(e) => setActiveCategory(setSearchTerm(e.target.value))}
              />
              <ul className="flex flex-col h-56 overflow-y-auto">
                <p className='p-2 text-xl text-blue-900 cursor-pointer hover:bg-gray-900 rounded-lg' onClick={() => { setActiveCategory(null) }}>remove filter</p>
                {filteredCategories.map((cate, index) => (
                  <li
                    key={index}
                    className="py-1 px-2 hover:bg-gray-800 rounded-lg cursor-pointer"
                    onClick={() => {
                      setActiveCategory((cate.category)); // Only set category
                    }}
                  >
                    <h1 className="flex items-center gap-2">
                      <div className={`${cate.div} h-3 w-3`}></div>
                      {cate.category} x {cate.total}
                    </h1>
                    <div className="text-gray-500">{cate.message}</div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tags Dropdown */}
          {isTagDropdownVisible && activeTab === "tags" && (
            <div className="absolute bg-gray-950 rounded-lg shadow-lg mt-2 py-2 px-4 tag-dropdown">
              <input
                type="text"
                className="w-full p-2 mb-2 rounded-lg bg-gray-800 text-white"
                placeholder="Search Tags"
                value={tagSearchTerm}
                onChange={(e) => setTagSearchTerm(e.target.value)}
              />
              <ul className="flex flex-col h-56 overflow-y-auto">
                <p className='p-2 text-xl text-blue-900 cursor-pointer hover:bg-gray-900 rounded-lg' onClick={() => { setActiveTag(null) }}>remove filter</p>
                {filteredTags.map((tag, index) => (

                  <li
                    key={index}
                    className="py-1 px-2 hover:bg-gray-800 rounded-lg cursor-pointer"
                    onClick={() => {
                      setActiveTag(tag); // Only set tag
                    }}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Reviews Table */}
          {(activeCategory || activeTag || activeTab === "hot" || activeTab === "latest") && (
            <table className="w-full border-collapse mt-4 ">
              <thead>
                <tr className="bg-gray-900">
                  <th className="p-2 text-left">Topic</th>
                  <th className="p-2"></th>
                  <th className="p-2">Replies</th>
                  <th className="p-2">Views</th>
                  <th className="p-2">Activity</th>
                </tr>
              </thead>
              <tbody>
                {getFilteredReviews().map((review, index) => {
                  const replyImages = review.repliesImages || []; // Assuming repliesImages is an array of image URLs
                  const maxRepliesImages5 = replyImages.slice(0, 5); // Limit to 5 images
                  const maxRepliesImages1 = replyImages.slice(0, 1);

                  return (
                    <tr key={index} className="border-b border-gray-700">
                      <td className="p-2">{review.topic}</td>
                      <td className="p-2 ">
                        {/* Display images next to replies */}
                        <div className="flex gap-1">
                          {screenWidth < 768 ? null : screenWidth < 1024 ? (
                            maxRepliesImages1.map((image, idx) => (
                              <img
                                key={idx}
                                src={image}
                                alt={`Reply ${idx + 1}`}
                                className="h-8 w-8 rounded-full "
                              />
                            ))
                          ) : (
                            maxRepliesImages5.map((image, idx) => (
                              <img
                                key={idx}
                                src={image}
                                alt={`Reply ${idx + 1}`}
                                className="h-8 w-8 rounded-full "
                              />
                            ))
                          )}
                        </div>
                      </td>
                      <td className="p-2 text-center">{review.replies}</td>
                      <td className="p-2 text-center">{review.views}</td>
                      <td className="p-2 text-center">{review.activity}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </>
      )}
    </>
  );
};

export default CategoriesTagsReviews;
