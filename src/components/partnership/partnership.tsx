import { Divider } from "antd";
import { FaUniversity } from "react-icons/fa";

const items = [
  {
    icon: <FaUniversity />,
    title: "title",
    desc: "Cintana was founded in partnership with Arizona State University",
  },
  {
    icon: <FaUniversity />,
    title: "title",
    desc: "Cintana was founded in partnership with Arizona State University",
  },
  {
    icon: <FaUniversity />,
    title: "title",
    desc: "Cintana was founded in partnership with Arizona State University",
  },
  {
    icon: <FaUniversity />,
    title: "title",
    desc: "Cintana was founded in partnership with Arizona State University",
  },
  {
    icon: <FaUniversity />,
    title: "title",
    desc: "Cintana was founded in partnership with Arizona State University",
  },
];
export const Partnership = () => {
  return (
    <div className="bg-white flex flex-col justify-center items-center text-gray-600 gap-8 p-10">
      <div className="text-4xl font-[600]">Our Partnership With ASU</div>
      <Divider className="!w-40 self-center" />
      <div>
        <div className="mb-6">
          Cintana was founded in partnership with Arizona State University,
          globally recognized as one of the most innovative universities in the
          world.
        </div>
        <div className="mb-6">
          When you partner with Cintana and ASU, your students get direct access
          to the resources and expertise of Arizona State University, including:
        </div>
      </div>
      <div className="flex flex-wrap w-full mx-auto justify-around px-10 gap-2 md:gap-20">
        {items.map((item, index) => (
          <div
        key={index}
        className="flex flex-col justify-center items-center flex-1 min-w-[180px] max-w-[220px] m-2"
          >
        <div className="text-4xl">{item.icon}</div>
        <div className="text-3xl font-[600]"> {item.title}</div>
        <div className="text-base font-[400] text-center"> {item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
