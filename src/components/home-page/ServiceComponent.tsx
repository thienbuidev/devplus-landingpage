'use client';
import { Col, Image, Row } from 'antd';
import { Service } from 'types';
import { LandingButton } from './LandingButton';
import { memo } from 'react';
import { motion } from 'framer-motion';
const ServiceComponent = ({ data }: { data: Service[] }) => {
  const CardItem = memo(({ item, index }: { item: Service; index: number }) => {
    return (
      <motion.div
        initial={{ x: index % 2 === 0 ? -200 : 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Row
          className={`${index % 2 == 0 ? 'slide-left' : 'slide-right'} flex items-center align-middle lg:px-16`}
        >
          <Col
            xs={{ order: 1, span: 24 }}
            sm={{ order: 1, span: 24 }}
            md={{ order: 2, span: 24 }}
            lg={{ order: index % 2 == 0 ? 2 : 1, span: 12 }}
            className="p-10"
          >
            <div
              className={`flex flex-col gap-8 ${index % 2 == 0 ? 'lg:text-left' : 'lg:text-right'}`}
            >
              <div className="text-3xl md:text-4xl lg-text-5xl font-semibold text-gray-600">
                {item.name}
              </div>
              <div className="text-base">{item.description}</div>
              <div>
                <LandingButton text="Xem thêm" className="" />
              </div>
            </div>
          </Col>
          <Col
            xs={{ order: 2, span: 24 }}
            sm={{ order: 2, span: 24 }}
            md={{ order: 2, span: 24 }}
            lg={{ order: index % 2 == 0 ? 1 : 2, span: 12 }}
            className="flex items-center p-4 md:px-8 lg:px-0"
          >
            <div className="w-full flex align-middle justify-center items-center">
              <Image
                alt={item.imageUrl || ''}
                src={item.imageUrl || ''}
                preview={false}
                className={`object-cover self-center min-w-[610px] max-h-[410px] hover:scale-105 transition-transform duration-300 shadow-lg shadow-black rounded-lg hover:rounded-lg`}
              />
            </div>
          </Col>
        </Row>
      </motion.div>
    );
  });
  CardItem.displayName = 'ServiceCardItem';
  return (
    <>
      {data.map((item, index) => (
        <div key={index}>
          <CardItem item={item} index={index} />
        </div>
      ))}
    </>
  );
};
export default ServiceComponent;
