import { Col, Row } from "antd";
import Image from "next/image";
import img from "@/assets/image.png";
import { LandingButton } from "./LandingButton";
const listItem = [
  {
    title: "Powered by ASU",
    desc: "When you partner with Cintana and ASU, your students get direct access to the resources and expertise of Arizona State University.",
    image: "/src/assets/image.png",
  },
  {
    title: "Powered by ASU",
    desc: "When you partner with Cintana and ASU, your students get direct access to the resources and expertise of Arizona State University.",
    image: "/src/assets/image.png",
  },
  {
    title: "Powered by ASU",
    desc: "When you partner with Cintana and ASU, your students get direct access to the resources and expertise of Arizona State University.",
    image: "/src/assets/image.png",
  },
  {
    title: "Powered by ASU",
    desc: "When you partner with Cintana and ASU, your students get direct access to the resources and expertise of Arizona State University.",
    image: "/src/assets/image.png",
  },
];
export default function Content() {
  return (
    <div className="w-full bg-[#EFEFEF]">
      {listItem.map((item, index) => (
        <Row key={index}>
          <Col
            xs={{ order: 1, span: 24 }}
            sm={{ order: 1, span: 24 }}
            md={{ order: 2, span: 24 }}
            lg={{ order: index % 2 == 0 ? 2 : 1, span: 12 }}
            className="p-10 justify-start"
          >
            <div className="flex flex-col ml-0 lg:ml-10 gap-8">
              <div className="text-5xl font-semibold text-gray-600">
                {item.title}
              </div>
              <div className="text-base">{item.desc}</div>
              <div className="flex justify-start items-start align-middle">
                <LandingButton text="Learn more" className="" />
              </div>
            </div>
          </Col>
          <Col
            xs={{ order: 2, span: 24 }}
            sm={{ order: 2, span: 24 }}
            md={{ order: 2, span: 24 }}
            lg={{ order: index % 2 == 0 ? 1 : 2, span: 12 }}
            className="flex items-center"
          >
            <div className="w-full aspect-[5/3] relative">
              <Image
                alt={item.desc}
                src={img}
                fill
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </div>
          </Col>
        </Row>
      ))}
    </div>
  );
}
