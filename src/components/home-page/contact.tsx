import { LandingButton } from "./LandingButton";

export default function Contact() {
  return (
    <div className="container">
      <div className="flex flex-col justify-start w-full gap-4 px-4 md:px-8 lg:px-16">
        <div className="text-4xl md:text-5xl font-bold text-gray-600">
          Hợp tác với chúng tôi ngay hôm nay!
        </div>
        <div>
          <LandingButton text="Liên hệ ngay" />
        </div>
      </div>
    </div>
  );
}
