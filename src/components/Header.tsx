import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed flex w-full top-0 z-50 bg-transparent">
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
          <Link className="px-6 py-4" href="/about">
            ABOUT
          </Link>
        </nav>
      </div>
    </header>
  );
}
