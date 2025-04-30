"use client";

import { Dropdown, MenuProps } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { LuMenu } from "react-icons/lu";

const items: MenuProps["items"] = [
  {
    key: "warriors",
    label: (
      <Link className="px-6 py-4" href="/warrios">
        VIETNAM AI WARRIORS
      </Link>
    ),
  },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="fixed flex w-full top-0 z-999999 bg-transparent">
      <div className="container mx-auto flex items-center justify-between p-2">
        <Link href="/">
          <Image
            className="lg:h-[80px] lg:w-[80px] h-[60px] w-[60px]"
            src="/logo.png"
            alt=""
            width={80}
            height={80}
          />
        </Link>
        <nav className="lg:flex space-x-2 gap-4 text-sm text-black font-semibold hidden">
          <Link className="px-6 py-4 font-semibold text-lg" href="/team">
            TEAM
          </Link>
          <Link className="px-6 py-4 font-semibold text-lg" href="/partnership">
            PARTNERSHIP
          </Link>
          <Link className="px-6 py-4 font-semibold text-lg" href="/contact">
            CONTACT
          </Link>

          <Dropdown menu={{ items }}>
            <div className="px-6 py-4 font-semibold text-lg">COMMUNITY</div>
          </Dropdown>
          <Link className="px-6 py-4 font-semibold text-lg" href="/about">
            ABOUT
          </Link>
        </nav>

        <div
          className="block lg:hidden p-4"
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
        >
          <LuMenu className="flex w-8 h-8" />
        </div>

        {isMobileMenuOpen && (
          <div className="absolute top-15 right-2 w-50 bg-white border-t border-gray-200 lg:hidden shadow-md z-50 rounded-2xl">
            <div className="flex flex-col p-4 space-y-2 text-black text-base font-semibold">
              <Link href="/team">TEAM</Link>
              <Link href="/partnership">PARTNERSHIP</Link>
              <Link href="/contact">CONTACT</Link>
              <div>COMMUNITY</div>
              <Link href="/about">ABOUT</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
