import { useState } from 'react';

// swiper css
import 'swiper/swiper-bundle.css';
import 'tailwindcss/tailwind.css';
import Slider from './Slider';
import SliderDescription from './SliderDescription';
import { movies } from './moviesData';

const Banner = () => {
  // state for getting the current slider's information
  const [activeSlide, setActiveSlide] = useState(0);

  // storing the current slider's index in the state
  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.realIndex);
  };

  // destructuring the current slider data
  const activeSlideData = movies[activeSlide];

  return (
    <div className="md:flex gap-10 min-h-screen items-center p-3 bg-gradient-to-r from-zinc-800 to-zinc-900">
      <Slider handleSlideChange={handleSlideChange} movies={movies} />
      <SliderDescription activeSlideData={activeSlideData} />
    </div>
  );
};

export default Banner;
