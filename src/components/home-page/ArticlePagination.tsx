"use client";
import { Col, Pagination, Row } from "antd";
import { useState } from "react";
import { BiRightArrowCircle } from "react-icons/bi";
import { getArticles } from "services/article.query";

export const ArticlePagination = () => {
  const [page, setPage] = useState(1);
  const { data } = getArticles(page).useQuery();

  return (
    <div>
      <Row className="px-16 my-20">
        {data &&
          data.data.map((item, index) => (
            <Col
              key={index}
              sm={{ order: 1, span: 24 }}
              md={{ order: 1, span: 24 }}
              lg={{ order: 1, span: 8 }}
              className="flex flex-col p-4"
            >
              <div className="text-3xl text-gray-600 font-bold mb-8">
                {item.title}
              </div>
              <div className="text-sm mb-2">
                {item.content.substring(0, 400)}...
              </div>
              <div className="flex flex-row gap-1 align-middle items-center decoration-2 underline decoration-gray-700 text-gray-700 font-semibold hover:cursor-pointer">
                <p>Read More</p>
                <BiRightArrowCircle className="text-xl bg-gray-800 text-white rounded-full" />
              </div>
            </Col>
          ))}
      </Row>
      <Pagination
        current={data && data.meta.pagination.page}
        pageSize={data && data.meta.pagination.pageSize}
        total={data && data.meta.pagination.total}
        onChange={(p) => setPage(p)}
      />
    </div>
  );
};
