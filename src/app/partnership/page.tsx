import Contact from "@/components/home-page/contact";
import Content from "@/components/partnership/partnershipContent";
import { Feedback } from "@/components/partnership/feedback";
import { Partnership } from "@/components/partnership/partnership";

export default function PartnershipPage() {
  return (
    <div className="bg-gray-100 w-full h-full flex flex-col">
      <div className="bg-[url('/bg-1.jpg')] bg-cover bg-center w-full h-96"></div>
      <Partnership />
      <Feedback />
      <Content />
      <div className="p-20">
        <Contact />
      </div>
    </div>
  );
}
