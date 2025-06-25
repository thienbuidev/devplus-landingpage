'use client';
import { useEffect, useState } from 'react';
import { TypingText } from '../atom/TypingText';
import { IntroButton } from './IntroButton';
import { api } from 'libs/api';
import type { Banner } from '@/types/banner';

export default function Introduction() {
  const [banner, setBanner] = useState<Banner | null>(null);

  useEffect(() => {
    const fetchBanner = async () => {
      const response = await api('banners');
      const partnershipBanner = response?.data?.find(
        (b: Banner) => b.name === 'home'
      );
      setBanner(partnershipBanner || null);
    };
    fetchBanner();
  }, []);

  return (
    <div
      className="w-full h-screen bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: banner ? `url('${banner.imageUrl}')` : undefined,
      }}
    >
      <div className="flex items-center justify-start *:text-[#fb8a38] align-middle w-full h-full">
        <div className="p-10 md:p-30 mt-10">
          <TypingText
            text="Chào mừng đến công ty chúng tôi"
            className=" text-4xl md:text-5xl font-bold"
            speed={30}
          />
          <TypingText
            text="Chúng tôi tận tâm cung cấp các dịch vụ tốt nhất cho khách hàng."
            className=" text-22xl md:text-3xl font-bold mt-4"
            speed={20}
            delay={1500}
          />
          <IntroButton />
        </div>
      </div>
    </div>
  );
}
