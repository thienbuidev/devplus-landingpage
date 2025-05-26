import { Col, Row } from "antd";
import Image from "next/image";
import { LandingButton } from "./LandingButton";
import { api } from "libs/api";
import { StrapiResponse } from "types/strapiResponse";
import { FieldOfWork } from "types/fieldOfWork";
export default async function FieldOfWorkPage() {
  const data: StrapiResponse<FieldOfWork> = await api("field-of-work");
    return (
    <div className="w-full bg-[#EFEFEF]">     
      {data.data.map((item, index) => (
        <Row key={index}>
          <Col
            xs={{ order: 1, span: 24 }}
            sm={{ order: 1, span: 24 }}
            md={{ order: 2, span: 24 }}
            lg={{ order: index % 2 == 0 ? 2 : 1, span: 12 }}
            className="p-10 justify-start"
          >
            <div className="flex flex-col ml-0 lg:ml-10 gap-8">
              <div className="text-3xl md:text-4xl lg-text-5xl font-semibold text-gray-600">
                {item.title}
              </div>
              <div className="text-base">{item.subTitle}</div>
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
            className="flex items-center px-4 md:px-8"
          >
            <div className="w-full aspect-[5/3] relative">
              <Image
                alt={item.url || ""}
                src={item.url || ""}
                fill
                className="object-fit w-full h-full hover:scale-105 transition-transform duration-300 shadow-lg rounded-lg"
                loading="lazy"
              />
            </div>
          </Col>
          <div className="w-full h-1 bg-gray-200 py-4"></div>
        </Row>
      ))}
    </div>
  );
}
