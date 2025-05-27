"use client";
import { Col, Pagination, Row } from "antd";
import { motion } from "framer-motion";
import { useState } from "react";
import { BiSolidRightArrowSquare } from "react-icons/bi";
import { getArticles } from "services/article.query";
import { Article } from "types";

export const ArticlePagination = () => {
  const [page, setPage] = useState(1);
  const { data } = getArticles(page).useQuery();

  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 py-16">
      <motion.div
        initial={{ y: 300, x: 0, opacity: 0 }}
        whileInView={{ y: 0, x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Row gutter={[24, 24]}>
          {data &&
            (data.data as Article[]).map((item, index) => (
              <Col key={index} xs={24} sm={12} lg={8}>
                <div className="flex flex-col justify-between h-full bg-white rounded-xl shadow-md p-6 transition-transform hover:-translate-y-1 hover:shadow-lg">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex gap-2 items-center justify-center mt-6 text-gray-700 underline font-medium cursor-pointer hover:text-blue-600 transition-colors">
                    <span>Read More</span>
                    <BiSolidRightArrowSquare className="text-xl bg-gray-800 text-white rounded-sm" />
                  </div>
                </div>
              </Col>
            ))}
        </Row>
      </motion.div>
      <div className="flex justify-center mt-10">
        <Pagination
          current={data?.meta.pagination.page}
          pageSize={data?.meta.pagination.pageSize}
          total={data?.meta.pagination.total}
          onChange={(p) => setPage(p)}
        />
      </div>
    </div>
  );
};
