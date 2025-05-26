import { getUniversity } from "services";
import LogoCarousel from "./LogoCarousel";

export default async function University() {
  const universityData = await getUniversity();
  return (
    <div className="w-full p-2 bg-gradient-to-br from-[#4b4f52] via-[#1e2b33] to-[#4e5960]">
      <LogoCarousel universities={universityData.data} />
    </div>
  );
}
