import { useState } from 'react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// swiper css
import 'swiper/swiper-bundle.css';
import 'tailwindcss/tailwind.css';

const App = () => {
  // dummy movie data
  const slideData = [
    {
      id: 1,
      title: 'one',
      description:
        'lorem Ipsum in pret in commodo in ullamcorper velit vel augue lorem Ipsum in pret in commodo in ullamcorper velit vel augue lorem Ipsum in pret in commodo in ullamcorper velit vel augue lorem Ipsum in pret in commodo in ullamcorper velit vel augue lorem Ipsum in pret in commodo in ullamcorper velit vel augue lorem Ipsum in pret in commodo in ullamcorper velit vel augue lorem Ipsum in pret in commodo in ullamcorper velit vel augue ',
      image: '../src/assets/images/1.jpg',
      year: 2014,
      duration: '2h 23m',
      category: 'Movie',
      rating: '7.4',
    },
    {
      id: 2,
      title: 'two',
      description:
        'lorem Ipsum in pret in commodo in ullamcorper velit vel augue lorem Ipsum in pret in commodo in ullamcorper velit vel augue lorem Ipsum in pret in commodo in ullamcorper velit vel augue lorem Ipsum in pret in commodo in ullamcorper velit vel augue lorem Ipsum in pret in commodo in ullamcorper velit vel augue lorem Ipsum in pret in commodo in ullamcorper velit vel augue lorem Ipsum in pret in commodo in ullamcorper velit vel augue ',
      image: '../src/assets/images/2.jpg',
      year: 2014,
      duration: '2h 43m',
      category: 'Drama',
      rating: '7.7',
    },
    {
      id: 3,
      title: 'three',
      description:
        'lorem Ipsum in pret in commodo in ullamcorper velit vel augue lorem Ipsum in pret in commodo in ullamcorper velit vel augue lorem Ipsum in pret in commodo in ullamcorper velit vel augue lorem Ipsum in pret in commodo in ullamcorper velit vel augue lorem Ipsum in pret in commodo in ullamcorper velit vel augue lorem Ipsum in pret in commodo in ullamcorper velit vel augue lorem Ipsum in pret in commodo in ullamcorper velit vel augue ',
      image: '../src/assets/images/3.jpg',
      year: 2014,
      duration: '2h 33m',
      category: 'Web Series',
      rating: '5.4',
    },
    {
      id: 4,
      title: 'four',
      description:
        'lorem Ipsum in pret in commodo in ullamcorper velit vel augue lorem Ipsum in pret in commodo in ullamcorper velit vel augue lorem Ipsum in pret in commodo in ullamcorper velit vel augue lorem Ipsum in pret in commodo in ullamcorper velit vel augue lorem Ipsum in pret in commodo in ullamcorper velit vel augue lorem Ipsum in pret in commodo in ullamcorper velit vel augue lorem Ipsum in pret in commodo in ullamcorper velit vel augue ',
      image: '../src/assets/images/4.jpeg',
      year: 2014,
      duration: '2h 45m',
      category: 'Movie',
      rating: '6.9',
    },
    {
      id: 5,
      title: 'five',
      description:
        'lorem Ipsum in pret in commodo in ullamcorper velit vel augue lorem Ipsum in pret in commodo in ullamcorper velit vel augue lorem Ipsum in pret in commodo in ullamcorper velit vel augue lorem Ipsum in pret in commodo in ullamcorper velit vel augue lorem Ipsum in pret in commodo in ullamcorper velit vel augue lorem Ipsum in pret in commodo in ullamcorper velit vel augue lorem Ipsum in pret in commodo in ullamcorper velit vel augue ',
      image: '../src/assets/images/5.jpg',
      year: 2014,
      duration: '2h 12M',
      category: 'Drama',
      rating: '7.4',
    },
    {
      id: 6,
      title: 'five',
      description:
        'lorem Ipsum in pret in commodo in ullamcorper velit vel augue lorem Ipsum in pret in commodo in ullamcorper velit vel augue lorem Ipsum in pret in commodo in ullamcorper velit vel augue lorem Ipsum in pret in commodo in ullamcorper velit vel augue lorem Ipsum in pret in commodo in ullamcorper velit vel augue lorem Ipsum in pret in commodo in ullamcorper velit vel augue lorem Ipsum in pret in commodo in ullamcorper velit vel augue ',
      image: '../src/assets/images/6.jpeg',
      year: 2014,
      duration: '2h 12M',
      category: 'Drama',
      rating: '7.4',
    },
    {
      id: 7,
      title: 'five',
      description:
        'lorem Ipsum in pret in commodo in ullamcorper velit vel augue lorem Ipsum in pret in commodo in ullamcorper velit vel augue lorem Ipsum in pret in commodo in ullamcorper velit vel augue lorem Ipsum in pret in commodo in ullamcorper velit vel augue lorem Ipsum in pret in commodo in ullamcorper velit vel augue lorem Ipsum in pret in commodo in ullamcorper velit vel augue lorem Ipsum in pret in commodo in ullamcorper velit vel augue ',
      image: '../src/assets/images/7.jpeg',
      year: 2014,
      duration: '2h 12M',
      category: 'Drama',
      rating: '7.4',
    },
    {
      id: 8,
      title: 'five',
      description:
        'lorem Ipsum in pret in commodo in ullamcorper velit vel augue lorem Ipsum in pret in commodo in ullamcorper velit vel augue lorem Ipsum in pret in commodo in ullamcorper velit vel augue lorem Ipsum in pret in commodo in ullamcorper velit vel augue lorem Ipsum in pret in commodo in ullamcorper velit vel augue lorem Ipsum in pret in commodo in ullamcorper velit vel augue lorem Ipsum in pret in commodo in ullamcorper velit vel augue ',
      image: '../src/assets/images/8.jpeg',
      year: 2014,
      duration: '2h 12M',
      category: 'Drama',
      rating: '7.4',
    },
    {
      id: 9,
      title: 'five',
      description:
        'lorem Ipsum in pret in commodo in ullamcorper velit vel augue lorem Ipsum in pret in commodo in ullamcorper velit vel augue lorem Ipsum in pret in commodo in ullamcorper velit vel augue lorem Ipsum in pret in commodo in ullamcorper velit vel augue lorem Ipsum in pret in commodo in ullamcorper velit vel augue lorem Ipsum in pret in commodo in ullamcorper velit vel augue lorem Ipsum in pret in commodo in ullamcorper velit vel augue ',
      image: '../src/assets/images/9.jpg',
      year: 2014,
      duration: '2h 12M',
      category: 'Drama',
      rating: '7.4',
    },
  ];

  // state for getting the current slider's information
  const [activeSlide, setActiveSlide] = useState(0);

  // storing the current slider's index in the state
  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.realIndex);
  };

  // destructuring the current slider data
  const { title, description, year, category, duration, rating } =
    slideData[activeSlide];

  // handling the read more and read less text
  const [expanded, setExpanded] = useState(false);
  const maxLength = 200;
  const truncatedText = description.slice(0, maxLength);
  const toggleText = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="md:flex gap-10 min-h-screen items-center p-3 bg-gradient-to-r from-zinc-800 to-zinc-900">
      <Swiper
        className="md:w-1/2 m-5"
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={500}
        ease={'ease-in-out'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 120,
          modifier: 5,
          slideShadows: true,
        }}
        modules={[Autoplay, EffectCoverflow]}
        onSlideChange={(swiper) => handleSlideChange(swiper)}
      >
        {slideData.map((slide) => (
          <SwiperSlide key={slide.id} className="coverflow-slider">
            <img
              className="w-full rounded-3xl  "
              src={slide.image}
              alt={slide.title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
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
    </div>
  );
};

export default App;
