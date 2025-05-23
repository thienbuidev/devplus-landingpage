import { Col, Row } from "antd";
import Image from "next/image";
const listItem = [
  {
    title: "Powered by ASU",
    desc: "When you partner with Cintana and ASU, your students get direct access to the resources and expertise of Arizona State University.",
    image: "/bg-1.jpg",
  },
  {
    title: "Powered by ASU",
    desc: "When you partner with Cintana and ASU, your students get direct access to the resources and expertise of Arizona State University.",
    image: "/bg-2.jpg",
  },
  {
    title: "Powered by ASU",
    desc: "When you partner with Cintana and ASU, your students get direct access to the resources and expertise of Arizona State University.",
    image: "/bg-3.jpeg",
  },
  {
    title: "Powered by ASU",
    desc: "When you partner with Cintana and ASU, your students get direct access to the resources and expertise of Arizona State University.",
    image: "/bg-2.jpg",
  },
];
export default function PartnershipContent() {
  return (
    <div className="w-full bg-white mt-20">
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
                src={item.image}
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
