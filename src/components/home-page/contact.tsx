'use client';

import { LandingButton } from './LandingButton';
import { useRouter } from 'next/navigation';

export default function Contact() {
  const router = useRouter();

  return (
    <div className="container">
      <div className="flex flex-col justify-start w-full gap-8 px-4 md:px-8 lg:px-16">
        <div className="text-4xl md:text-5xl font-bold text-gray-600">
          Liên hệ với chúng tôi ngay hôm nay!
        </div>
        <div>
          <LandingButton
            text="Liên hệ ngay"
            onClick={() => router.push('/contact')}
          />
        </div>
      </div>
    </div>
  );
}
