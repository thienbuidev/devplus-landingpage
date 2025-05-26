"use client";
import { Col, Pagination, Row } from "antd";
import { useState } from "react";
import { BiRightArrowCircle } from "react-icons/bi";
import { getArticle } from "services";
import { Article } from "types";
import { StrapiResponse } from "types/strapiResponse";

interface ArticleDataProb {
  articleData: StrapiResponse<Article>;
}
export const ArticlePagination = ({ articleData }: ArticleDataProb) => {
  const [data, setData] = useState<StrapiResponse<Article>>(articleData);
  const OnPageChange = async (p: number) => {
    const articleData = await getArticle(p, 3);
    setData(articleData);
  };
  return (
    <div>
      <Row className="px-6 md:px-0 lg:px-16 my-20">
        {data.data.map((item, index) => (
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
        current={data.meta.pagination.page}
        pageSize={data.meta.pagination.pageSize}
        total={data.meta.pagination.total}
        onChange={(p) => OnPageChange(p)}
        className="!mb-8"
      />
    </div>
  );
};
