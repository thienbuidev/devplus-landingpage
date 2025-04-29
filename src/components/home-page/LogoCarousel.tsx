"use client";

import Image from "next/image";
import { University } from "types";
import { CSSProperties } from "react";
import { logoPlaceholder } from "../../constants";

interface LogoCarouselProps {
  universities: University[];
}

export default function LogoCarousel({ universities }: LogoCarouselProps) {
  const logos = [...universities, ...universities, ...universities];

  const scrollStyle: CSSProperties = {
    animation: "scroll 30s linear infinite",
  };

  return (
    <div className="overflow-hidden w-full py-8 bg-[#425563]">
      <div className="flex gap-10 whitespace-nowrap" style={scrollStyle}>
        {logos.map((university, index) => (
          <div key={index} className="flex-shrink-0">
            <Image
              src={university.logo || logoPlaceholder}
              alt={university.slug}
              width={100}
              height={100}
              className="object-contain h-16 w-auto"
            />
          </div>
        ))}
      </div>

      {/* Inline <style> block for keyframes */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
