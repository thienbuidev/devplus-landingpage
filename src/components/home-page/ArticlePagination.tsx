'use client';

import { Col, Pagination, Row } from 'antd';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { getArticles } from 'services/article.query';
import { Article } from 'types';

export const ArticlePagination = () => {
  const [page, setPage] = useState(1);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>(
    {}
  );
  const { data } = getArticles(page).useQuery();

  const handlePageChange = (newPage: number) => {
    setDirection(newPage > page ? 'right' : 'left');
    setPage(newPage);
    setExpandedItems({});
  };

  const toggleExpand = (index: number) => {
    setExpandedItems((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 py-16">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={page}
          initial={{ opacity: 0, x: direction === 'right' ? 150 : -150 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction === 'right' ? -150 : 150 }}
          transition={{ duration: 0.4 }}
        >
          <Row gutter={[24, 24]}>
            {data &&
              (data.data as Article[]).map((item, index) => {
                const isExpanded = expandedItems[index];
                return (
                  <Col key={index} xs={24} sm={12} lg={8}>
                    <div
                      className="flex flex-col justify-between h-full bg-white rounded-3xl shadow-md p-6 
                        transition-transform hover:-translate-y-1 hover:shadow-lg cursor-pointer"
                      onClick={() => toggleExpand(index)}
                    >
                      <blockquote
                        className={`text-gray-700 text-base italic mb-4 transition-all duration-300 ${
                          isExpanded ? 'line-clamp-none' : 'line-clamp-5'
                        }`}
                      >
                        “{item.description}”
                      </blockquote>
                      <div className="text-right text-sm text-[#fb8a38] font-semibold mt-auto">
                        — {item.author.name || 'Người dùng ẩn danh'}
                      </div>
                    </div>
                  </Col>
                );
              })}
          </Row>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-center mt-10">
        <Pagination
          current={data?.meta.pagination.page}
          pageSize={data?.meta.pagination.pageSize}
          total={data?.meta.pagination.total}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};
