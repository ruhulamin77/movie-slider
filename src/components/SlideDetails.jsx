/* eslint-disable react/prop-types */
import { useState } from 'react';

const SlideDetails = ({ activeSlideData }) => {
  const { title, status, description, year, category, duration, rating } =
    activeSlideData;

  // handling the read more and read less text
  const [expanded, setExpanded] = useState(false);
  const maxLength = 200;
  const truncatedText = description.slice(0, maxLength);
  const toggleText = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <h4 className="uppercase text-gray-400 text-xl font-semibold">
        {status}
      </h4>
      <h1 className="uppercase text-4xl mt-5 font-semibold">{title}</h1>
      <div className="border-y-2 border-gray-700 text-2xl flex justify-between items-center my-8 py-3">
        <span className="">
          {year} - {category} - {duration}
        </span>
        <span className="flex items-center gap-5">
          <img src="/assets/images/imdb.png" className="w-16" alt="imdb" />
          <span>{rating}</span>
        </span>
      </div>
      <div>
        <span className="text-lg">
          {expanded ? description : truncatedText + '...'}
        </span>
        {description.length > maxLength && (
          <button
            className="hover:underline text-lg font-semibold text-yellow-500"
            onClick={toggleText}
          >
            {expanded ? ' Read less' : ' Read more'}
          </button>
        )}
      </div>
      <button className="bg-[#f39c12] rounded-lg flex items-center p-2 px-5  my-10">
        <img src="/assets/images/play.png" alt="" />
        <span className="ps-3 text-white text-xl">Watch Now</span>
      </button>
    </>
  );
};

export default SlideDetails;
