import Image from "next/image";
import { LuChevronRight, LuChevronLeft } from "react-icons/lu";

const university = [
  {
    name: "University of California, Berkeley",
    logo: "/logo.png",
    location: "Berkeley, CA",
  },
  {
    name: "University of California, Berkeley",
    location: "Berkeley, CA",
    logo: "/logo.png",
  },
  {
    name: "University of California, Berkeley",
    logo: "/logo.png",
    location: "Berkeley, CA",
  },
  {
    name: "University of California, Berkeley",
    logo: "/logo.png",
    location: "Berkeley, CA",
  },
  {
    name: "University of California, Berkeley",
    logo: "/logo.png",
    location: "Berkeley, CA",
  },
  {
    name: "University of California, Berkeley",
    logo: "/logo.png",
    location: "Berkeley, CA",
  },
];

export default function University() {
  return (
    <div className="flex w-full bg-gray-500 py-4 px-28 justify-between items-center flex-wrap">
      <LuChevronLeft size={30} className="text-white cursor-pointer" />
      <div className="flex flex-row gap-24 items-center justify-center flex-wrap">
        {university.map((uni, index) => (
          <div key={index}>
            <Image src={uni.logo} alt={uni.logo || ""} height={80} width={80} />
          </div>
        ))}
      </div>
      <LuChevronRight size={30} className="text-white cursor-pointer" />
    </div>
  );
}
