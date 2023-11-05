import { useState } from 'react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { moviesData } from './assets/moviesData';

// swiper css
import 'swiper/swiper-bundle.css';
import 'tailwindcss/tailwind.css';

const App = () => {
  // state for getting the current slider's information
  const [activeSlide, setActiveSlide] = useState(0);

  // storing the current slider's index in the state
  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.realIndex);
  };

  // destructuring the current slider data
  const { title, status, description, year, category, duration, rating } =
    moviesData[activeSlide];

  // handling the read more and read less text
  const [expanded, setExpanded] = useState(false);
  const maxLength = 200;
  const truncatedText = description.slice(0, maxLength);
  const toggleText = () => {
    setExpanded(!expanded);
  };

  // swiper settings
  const settings = {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 2,
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    speed: 500,
    ease: 'ease-in-out',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 120,
      modifier: 5,
      slideShadows: true,
    },
    modules: [Autoplay, EffectCoverflow],
  };

  return (
    <div className="md:flex gap-10 min-h-screen items-center p-3 bg-gradient-to-r from-zinc-800 to-zinc-900">
      {/* slider section*/}
      <div className="md:w-1/2 m-5 mt-10">
        <Swiper
          {...settings}
          onSlideChange={(swiper) => handleSlideChange(swiper)}
        >
          {moviesData.map((slide) => (
            <SwiperSlide key={slide.id} className="coverflow-slider">
              <img
                className="w-full rounded-3xl  "
                src={slide.image}
                alt={slide.title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/*  slider details section*/}
      <div className="md:w-1/2 text-gray-300 p-5 m-5 ">
        <h4 className="uppercase text-gray-400 text-2xl font-semibold">
          {status}
        </h4>
        <h1 className="uppercase text-5xl mt-6 font-semibold">{title}</h1>
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
        <div>
          <span className="text-xl">
            {expanded ? description : truncatedText + '...'}
          </span>
          {description.length > maxLength && (
            <button
              className="hover:underline text-xl font-semibold text-yellow-500"
              onClick={toggleText}
            >
              {expanded ? ' Read less' : ' Read more'}
            </button>
          )}
        </div>
        <button className="bg-[#f39c12] rounded-lg flex items-center p-2 px-5  my-10">
          <img src="../src/assets/images/play.png" alt="" />
          <span className="px-3 pe-4 text-white text-xl">Watch Now</span>
        </button>
      </div>
    </div>
  );
};

export default App;
