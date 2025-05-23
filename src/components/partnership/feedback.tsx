import Carousel from "../common/Carousel";
const items = [
  <div key={0} className="flex flex-col p-6">
    <div className="mb-6 italic text-gray-700 text-xl font-[400]">
      Chronicle of Higher Education 2021
    </div>
    <div className="text-sm font-[550]">
      Chronicle of Higher Education 2021 Chronicle of Higher Education 2021
    </div>
  </div>,
  <div key={1} className="flex flex-col p-6">
    <div className="mb-6 italic text-gray-700 text-xl font-[400]">
      Chronicle of Higher Education 2021
    </div>
    <div className="text-sm font-[550]">
      Chronicle of Higher Education 2021 Chronicle of Higher Education 2021
    </div>
  </div>,
  <div key={2} className="flex flex-col p-6">
    <div className="mb-6 italic text-gray-700 text-xl font-[400]">
      Chronicle of Higher Education 2021
    </div>
    <div className="text-sm font-[550]">
      Chronicle of Higher Education 2021 Chronicle of Higher Education 2021
    </div>
  </div>,
  <div key={3} className="flex flex-col p-6">
    <div className="mb-6 italic text-gray-700 text-xl font-[400]">
      Chronicle of Higher Education 2021
    </div>
    <div className="text-sm font-[550]">
      Chronicle of Higher Education 2021 Chronicle of Higher Education 2021
    </div>
  </div>,
  <div key={4} className="flex flex-col p-6">
    <div className="mb-6 italic text-gray-700 text-xl font-[400]">
      Chronicle of Higher Education 2021
    </div>
    <div className="text-sm font-[550]">
      Chronicle of Higher Education 2021 Chronicle of Higher Education 2021
    </div>
  </div>,
];
export const Feedback = () => {
  return (
    <div>
      <div className="flex flex-col px-10 justify-center items-center text-center w-full">
        <div className="text-4xl font-semibold pt-10">
          About Arizona State University
        </div>
        <div className="h-[1px] w-[150px] self-center bg-gray-400 m-10" />
        <div>
          ASU is a comprehensive public research university, measured not by
          whom it excludes, but by whom it includes and how they succeed;
          advancing research and discovery of public value; and assuming
          fundamental responsibility for the economic, social, cultural and
          overall health of the communities it serves.
        </div>
        <div className="text-2xl font-[600] p-10">Unrivaled Recognition</div>
        <Carousel items={items} sm={1} md={2} lg={3} />
      </div>
    </div>
  );
};
