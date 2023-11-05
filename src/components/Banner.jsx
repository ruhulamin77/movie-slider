import { useState } from 'react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { moviesData } from '../assets/data/moviesData';

// swiper css
import 'swiper/swiper-bundle.css';
import 'tailwindcss/tailwind.css';
import SlideDetails from '../components/SlideDetails';

const Banner = () => {
  // state for storing the current slider's information
  const [activeSlide, setActiveSlide] = useState(0);

  // current slider's index handler
  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.realIndex);
  };

  // current slider data
  const activeSlideData = moviesData[activeSlide];

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
      depth: 100,
      modifier: 6,
      slideShadows: true,
    },
    modules: [Autoplay, EffectCoverflow],
  };

  return (
    <div className="md:flex  min-h-screen items-center p-3 bg-gradient-to-r from-slate-900 to-zinc-900">
      {/* slider section*/}
      <div className="md:w-1/2 mt-10 p-5 lg:p-16">
        <Swiper
          {...settings}
          onSlideChange={(swiper) => handleSlideChange(swiper)}
        >
          {moviesData.map((slide) => (
            <SwiperSlide key={slide.id} className="coverflow-slider">
              <img className="w-full " src={slide.image} alt={slide.title} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/*  slider details section*/}
      <div className="md:w-1/2 text-gray-300 p-5 m-5 ">
        <SlideDetails activeSlideData={activeSlideData} />
      </div>
    </div>
  );
};

export default Banner;
