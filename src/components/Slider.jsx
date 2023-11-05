/* eslint-disable react/prop-types */
import React from 'react';

import { Autoplay, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// swiper css
// import 'swiper/swiper-bundle.css';
// import 'tailwindcss/tailwind.css';

const Slider = ({ handleSlideChange, movies }) => {
  const settings = {
    className: 'md:w-1/2 m-5 ',
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
    onSlideChange: (swiper) => handleSlideChange(swiper),
  };
  return (
    <Swiper {...settings}>
      {movies.map((slide) => (
        <SwiperSlide key={slide.id} className="coverflow-slider">
          <img className="w-full " src={slide.image} alt={slide.title} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
