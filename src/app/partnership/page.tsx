import { Feedback } from "@/components/partnership/feedback";
import { Partnership } from "@/components/partnership/partnership";
import { PartnershipContent } from "@/components/partnership/partnership_content";

export default function PartnershipPage() {
  return (
    <div className="bg-gray-600 w-full">
      <div className="bg-[url('/bg-1.jpg')] bg-cover bg-center w-full h-96"></div>
      <Partnership />
      <Feedback />
      <PartnershipContent />
    </div>
  );
}
