'use client';

import { useEffect, useState } from 'react';
import { Dropdown, MenuProps } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const items: MenuProps['items'] = [
  {
    key: 'warriors',
    label: (
      <Link className="px-6 py-4" href="/warriors">
        VIETNAM AI WARRIORS
      </Link>
    ),
  },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md shadow-[#fb8a38]/20' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between p-2">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={80} height={80} />
        </Link>
        <nav className="flex space-x-4 gap-8 text-sm font-semibold">
          <Link
            href="/team"
            className={`px-6 py-4 ${pathname === '/team' ? 'text-[#fb8a38]' : 'text-black'}`}
          >
            TEAM
          </Link>
          <Link
            href="/partnership"
            className={`px-6 py-4 ${pathname === '/partnership' ? 'text-[#fb8a38]' : 'text-black'}`}
          >
            PARTNERSHIP
          </Link>
          <Link
            href="/contact"
            className={`px-6 py-4 ${pathname === '/contact' ? 'text-[#fb8a38]' : 'text-black'}`}
          >
            CONTACT
          </Link>
          <Dropdown menu={{ items }} placement="bottomLeft">
            <Link
              href="/about"
              className={`px-6 py-4 ${pathname === '/about' ? 'text-[#fb8a38]' : 'text-black'}`}
            >
              COMMUNITY
            </Link>
          </Dropdown>
        </nav>
      </div>
    </header>
  );
}
