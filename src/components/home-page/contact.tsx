import { LandingButton } from "./LandingButton";

export default function Contact() {
  return (
    <div className="flex flex-col justify-start w-full ml-8 md:ml-32 gap-4">
      <div className="text-4xl md:text-5xl font-bold text-gray-600">
        Partner with us today
      </div>
      <div>
        <LandingButton text="Contact Us" />
      </div>
    </div>
  );
}
