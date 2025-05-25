import { api } from "libs/api";
import LogoCarousel from "./LogoCarousel";

export default async function University() {
  const uniData = await api("universities");
  return (
    <div className="w-full p-6 bg-gradient-to-br from-[#4b4f52] via-[#1e2b33] to-[#4e5960]">
      <LogoCarousel universities={uniData.data} />
    </div>
  );
}
