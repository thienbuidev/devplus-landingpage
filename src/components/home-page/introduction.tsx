import { LuVideo } from "react-icons/lu";
import { LandingButton } from "./LandingButton";
import { TypingText } from "../atom/TypingText";

export default async function Introduction() {
  return (
    <div
      className="w-full h-screen bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/bg-3.jpeg')" }}
    >
      <div className="flex items-center justify-start *:text-[#ffffff] align-middle w-full h-full">
        <div className="p-10 md:p-30 mt-10">
          <TypingText
            text="Chào mừng đến công ty chúng tôi"
            className=" text-5xl md:text-6xl font-bold h-15"
            speed={40}
          />
          <div className="w-3/4">
            <TypingText
              text="Chúng tôi tận tâm cung cấp các dịch vụ tốt nhất cho khách hàng."
              className=" text-22xl md:text-3xl font-bold mt-4 h-20"
              speed={40}
              delay={2000}
            />
          </div>

          <div className="mt-14 flex flex-row gap-4 items-center">
            <LandingButton text="Khám phá thêm" />
            <div className="flex gap-3 items-center cursor-pointer">
              Xem Video <LuVideo size={30} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
