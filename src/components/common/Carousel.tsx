"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiLeftArrowCircle, BiRightArrowCircle } from "react-icons/bi";
import { ReactNode, useRef } from "react";

export default function Carousel({
  items,
  sm,
  md,
  xs,
  lg,
}: {
  items: ReactNode[];
  sm?: number;
  md?: number;
  xs?: number;
  lg?: number;
}) {
  const sliderRef = useRef<Slider | null>(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: lg || 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: md || 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: sm || 1 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: xs || 1 },
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
        className={`mx-auto custom-carousel !w-3/4`}
      >
        {items.map((item, i) => (
          <div key={i}>{item}</div>
        ))}
      </Slider>
      <BiRightArrowCircle
        size={40}
        onClick={() => sliderRef.current?.slickNext()}
      />
    </div>
  );
}
