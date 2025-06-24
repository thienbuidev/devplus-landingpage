'use client';
import { Image } from 'antd';
import { Expert } from '@/types/expert';
import { useState } from 'react';
import { getExperts } from 'services/expert.query';
export const ExpertList = () => {
  const [practice, setPractice] = useState<string | null>(null);
  const [name, setName] = useState<string | null>(null);
  const { data } = getExperts(practice, name).useQuery();
  return (
    <div>
      <div className="text-2xl font-bold my-8 flex flex-col md:flex-row w-full items-center align-middle">
        <p className="text-3xl text-[#545d62]">Find an expert:</p>
        <span className="ml-0 md:ml-10 mt-6 md:mt-0">
          <select
            className="border rounded px-3 py-2 text-[#545d62]"
            value={practice ?? ''}
            onChange={(e) => setPractice(e.target.value || null)}
          >
            <option value="">All Practices</option>
            <option value="Academic Excellence">Academic Excellence</option>
            <option value="Health Sciences">Health Sciences</option>
            <option value="Marketing & Enrollment">
              Marketing & Enrollment
            </option>
            <option value="Product & Technology">Product & Technology</option>
            <option value="Online">Online</option>
          </select>
        </span>
        <span className="ml-0 md:ml-10 mt-6 md:mt-0">
          <input
            type="text"
            className="border rounded px-3 py-2 text-[#545d62]"
            placeholder="Search by name"
            value={name ?? ''}
            onChange={(e) => setName(e.target.value || null)}
          />
        </span>
      </div>
      <div className="w-full grid xs:grid-cols-1 sm:md:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-8">
        {data &&
          Array.isArray(data.data) &&
          data.data.map((expert: Expert, index: number) => (
            <a
              key={index}
              href={`/team/${expert.documentId}`}
              className="bg-white p-6 rounded-lg shadow-md cursor-pointer block hover:shadow-lg transition-shadow duration-200 hover:bg-gray-50 hover:scale-105"
            >
              <Image
                alt={expert.imageUrl || 'Binh Ngoc Vinh'}
                src={
                  expert.imageUrl ||
                  'https://devplus.edu.vn/_next/static/media/buingocvinh.e45adc5b.png'
                }
                preview={false}
                className={`object-contain self-center w-full h-full hover:scale-105 transition-transform duration-300 shadow-lg shadow-black rounded-lg hover:rounded-lg`}
              />
              <br />
              <br />
              <h2 className="text-xl font-semibold mb-2 text-[#49575e]">
                {expert.name}
              </h2>
              <p className="text-gray-700 mb-4">{expert.description}</p>
              <div className="flex items-center gap-2">
                <span className="text-gray-500">{expert.practice}</span>
              </div>
            </a>
          ))}
      </div>
    </div>
  );
};
