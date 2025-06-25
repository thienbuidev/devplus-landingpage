'use client';

import { University } from 'types';
import { Image } from 'antd';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BiLeftArrowCircle, BiRightArrowCircle } from 'react-icons/bi';
import { useRef } from 'react';

interface LogoCarouselProps {
  universities: University[];
}
export default function LogoCarousel({ universities }: LogoCarouselProps) {
  const sliderRef = useRef<Slider | null>(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="w-full flex flex-row gap-8 align-middle justify-center items-center">
      <BiLeftArrowCircle
        size={40}
        onClick={() => sliderRef.current?.slickPrev()}
      />
      <Slider
        ref={sliderRef}
        {...settings}
        className="w-1/2 mx-auto custom-carousel flex-1"
      >
        {universities.map((uni, i) => (
          <Image
            key={i}
            preview={false}
            src={uni.logo}
            alt={uni.name}
            className="w-full min-h-[200px] object-cover px-3 md:px-4 lg:px-6"
          />
        ))}
      </Slider>
      <BiRightArrowCircle
        size={40}
        onClick={() => sliderRef.current?.slickNext()}
      />
    </div>
  );
}
