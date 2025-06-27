'use client';

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

  return (
    <header className="fixed flex w-full top-0 z-999999 bg-white shadow-md shadow-[#fb8a38]/20">
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
