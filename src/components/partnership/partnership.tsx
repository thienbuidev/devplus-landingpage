'use client';

import { useEffect, useState } from 'react';
import { Divider, Spin, Empty } from 'antd';
import { FaUniversity } from 'react-icons/fa';
import { api } from 'libs/api';

export interface University {
  id: number;
  name: string;
  logo: string;
  location: string;
  documentId: string;
  slug: string | null;
}

export const Partnership = () => {
  const [universities, setUniversities] = useState<University[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        const response = await api('universities');
        const data = response?.data;

        if (Array.isArray(data)) {
          setUniversities(data);
        } else {
          console.warn('Unexpected data format from API:', response);
        }
      } catch (error) {
        console.error('Failed to fetch universities:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUniversities();
  }, []);

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

      {loading ? (
        <Spin size="large" />
      ) : universities.length === 0 ? (
        <Empty description="No partner universities found." />
      ) : (
        <div className="flex flex-wrap w-full mx-auto justify-around px-10 gap-2 md:gap-20">
          {universities.map((uni) => (
            <div
              key={uni.id}
              className="flex flex-col justify-center items-center flex-1 min-w-[180px] max-w-[220px] m-2"
            >
              <div className="text-4xl">
                <FaUniversity />
              </div>
              <div className="text-3xl font-[600] text-center">{uni.name}</div>
              <div className="text-base font-[400] text-center">
                {uni.location}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
