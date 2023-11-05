/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const SliderDescription = ({ activeSlideData }) => {
  // destructuring the current slider data
  const { title, description, year, category, duration, rating } =
    activeSlideData;

  // handling the read more and read less text
  const [expanded, setExpanded] = useState(false);
  const maxLength = 200;
  const truncatedText = description.slice(0, maxLength);
  const toggleText = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="md:w-1/2 text-white p-5 m-5 ">
      <h1 className="uppercase text-3xl bold">comming soon</h1>
      <h1 className="uppercase text-5xl bold mt-6 font-semibold">{title}</h1>
      <div className="border-y-2 border-gray-700 text-2xl flex justify-between items-center my-10 py-5">
        <span className="">
          {year} - {category} - {duration}
        </span>
        <span className="flex items-center gap-5">
          <img
            src="../src/assets/images/imdb.png"
            className="w-16"
            alt="imdb"
          />
          <span>{rating}</span>
        </span>
      </div>
      {/* <p className="text-gray-300 text-lg font-sans">{description}</p> */}
      <div>
        <span className="text-xl">
          {expanded ? description : truncatedText + '...'}
        </span>
        {description.length > maxLength && (
          <button
            className="hover:underline text-xl font-semibold text-yellow-500"
            onClick={toggleText}
          >
            {expanded ? 'Read less' : 'Read more'}
          </button>
        )}
      </div>
      <button className="bg-yellow-500 rounded-xl flex items-center p-3 px-5  my-10">
        <img src="../src/assets/images/play.png" alt="" />
        <span className="px-3 pe-4 text-xl">Watch Now</span>
      </button>
    </div>
  );
};

export default SliderDescription;
