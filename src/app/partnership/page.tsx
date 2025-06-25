'use client';
import { useEffect, useState } from 'react';
import Contact from '@/components/home-page/contact';
import Content from '@/components/partnership/partnershipContent';
import { Feedback } from '@/components/partnership/feedback';
import { Partnership } from '@/components/partnership/partnership';
import { api } from 'libs/api';
import type { Banner } from '@/types/banner';

export default function PartnershipPage() {
  const [banner, setBanner] = useState<Banner | null>(null);

  useEffect(() => {
    const fetchBanner = async () => {
      const response = await api('banners');
      const partnershipBanner = response?.data?.find(
        (b: Banner) => b.name === 'partnership'
      );
      setBanner(partnershipBanner || null);
    };
    fetchBanner();
  }, []);

  return (
    <div className="bg-gray-100 w-full h-full flex flex-col">
      <div
        className="w-full h-96 bg-cover bg-center"
        style={{
          backgroundImage: banner ? `url('${banner.imageUrl}')` : undefined,
        }}
      ></div>
      <Partnership />
      <Feedback />
      <Content />
      <div className="p-20">
        <Contact />
      </div>
    </div>
  );
}
