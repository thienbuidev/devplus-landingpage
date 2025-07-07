"use client";

import { University } from "types";
import { Image, Carousel } from "antd";
import { BiLeftArrowCircle, BiRightArrowCircle } from "react-icons/bi";
import { useEffect, useRef, useState } from "react";
import { api } from "libs/api";

export default function LogoCarousel() {
  const [universities, setUniversities] = useState<University[]>([]);
  const carouselRef = useRef<{ prev: () => void; next: () => void }>(null);

  useEffect(() => {
    const fetchUniversities = async () => {
      const uniData = await api("universities");
      const universities = uniData?.data;
      setUniversities(universities);
    };
    fetchUniversities();
  }, []);

  const paddedUniversities = [...universities, ...universities.slice(0, 3)];

  return (
    <div className="w-full flex flex-row gap-3 align-middle justify-center items-center">
      <BiLeftArrowCircle
        size={40}
        onClick={() => carouselRef.current?.prev()}
        className="cursor-pointer hover:opacity-70"
      />

      <div className="w-full max-w-6xl">
        <Carousel
          autoplay
          autoplaySpeed={3000}
          dots={false}
          infinite
          speed={500}
          slidesToShow={4}
          slidesToScroll={1}
        >
          {paddedUniversities.map((uni, index) => (
            <div key={index} className="px-2">
              <div className="flex justify-center items-center">
                <Image
                  preview={false}
                  src={uni.logo}
                  alt={uni.name}
                  className="min-h-[150px] max-h-[150px] min-w-[250px] max-w-[250px] object-cover rounded-[10px]"
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <BiRightArrowCircle
        size={40}
        onClick={() => carouselRef.current?.next()}
        className="cursor-pointer hover:opacity-70"
      />
    </div>
  );
}
