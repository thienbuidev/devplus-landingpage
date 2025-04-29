import { LuVideo } from "react-icons/lu";

export default async function Introduction() {
  return (
    <div
      className="w-full h-[700px] bg-cover bg-center"
      style={{ backgroundImage: "url('/bg-3.jpeg')" }}
    >
      <div className="absolute inset-0 flex items-center justify-start mb-30 text-white px-28">
        <div>
          <h1 className="text-7xl font-bold">Welcome to Our Company</h1>

          <p className="text-3xl mt-8">
            We are dedicated to providing the best services for our clients.
          </p>
          <p className="mt-4">
            We are dedicated to providing the best services for our clients.
          </p>
          <div className="mt-14 flex flex-row gap-4 items-center">
            <div className="flex rounded-lg bg-orange-300/80 cursor-pointer py-2 px-4 text-lg font-semibold text-white hover:bg-orange-400 transition duration-300 ease-in-out">
              Discorver More
            </div>
            <div className="flex gap-3 items-center cursor-pointer">
              Watch The Video <LuVideo size={30} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
