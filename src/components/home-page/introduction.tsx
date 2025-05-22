import { LuVideo } from "react-icons/lu";
import { LandingButton } from "./LandingButton";

export default async function Introduction() {
  return (
    <div
      className="w-full h-screen bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/bg-3.jpeg')" }}
    >
      <div className="flex items-center justify-start *:text-white align-middle w-full h-full">
        <div className="p-10 md:p-30 mt-10">
          <h1 className=" text-4xl md:text-7xl font-bold">
            Welcome to Our Company
          </h1>

          <p className="text-3xl mt-8">
            We are dedicated to providing the best services for our clients.
          </p>
          <p className="mt-4">
            We are dedicated to providing the best services for our clients.
          </p>
          <div className="mt-14 flex flex-row gap-4 items-center">
            <LandingButton text="Discover more" />
            <div className="flex gap-3 items-center cursor-pointer">
              Watch The Video <LuVideo size={30} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
