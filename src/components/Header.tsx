import { Dropdown, MenuProps } from "antd";
import Image from "next/image";
import Link from "next/link";

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
  return (
    <header className="fixed flex w-full top-0 z-999999 bg-gradient-to-bl from-gray-500/50 via-gray-900/60 to-black/30 shadow-md shadow-black/20">
      <div className="container mx-auto flex items-center justify-between p-2">
        <Link href="/">
          <Image src="/logo.png" alt="" width={80} height={80} />
        </Link>
        <nav className="flex space-x-4 gap-8 text-sm text-white font-semibold">
          <Link className="px-6 py-4" href="/team">
            TEAM
          </Link>
          <Link className="px-6 py-4" href="/partnership">
            PARTNERSHIP
          </Link>
          <Link className="px-6 py-4" href="/contact">
            CONTACT
          </Link>

          <Dropdown menu={{ items }} placement="bottomLeft">
            <Link className="px-6 py-4" href="/about">
              COMMUNITY
            </Link>
          </Dropdown>
          <Link className="px-6 py-4" href="/about">
            ABOUT
          </Link>
        </nav>
      </div>
    </header>
  );
}
