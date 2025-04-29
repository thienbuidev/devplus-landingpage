import { getUniversity } from "services";
import LogoCarousel from "./LogoCarousel";

export default async function University() {
  const university = await getUniversity();
  return <LogoCarousel universities={university} />;
}
