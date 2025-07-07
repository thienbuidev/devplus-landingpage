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
      <div className="text-xl font-medium mb-10 flex flex-col md:flex-row w-full items-center justify-center gap-6">
        <p className="text-xl text-[#fb8a38]">Find an expert:</p>

        <select
          className="border border-gray-300 rounded-xl px-3 py-1.5 text-sm text-[#545d62] outline-none"
          value={practice ?? ''}
          onChange={(e) => setPractice(e.target.value || null)}
        >
          <option value="">All Practices</option>
          <option value="Academic Excellence">Academic Excellence</option>
          <option value="Health Sciences">Health Sciences</option>
          <option value="Marketing & Enrollment">Marketing & Enrollment</option>
          <option value="Product & Technology">Product & Technology</option>
          <option value="Online">Online</option>
        </select>

        <input
          type="text"
          className="border border-gray-300 rounded-xl px-3 py-1.5 text-sm text-[#545d62] outline-none"
          placeholder="Search by name"
          value={name ?? ''}
          onChange={(e) => setName(e.target.value || null)}
        />
      </div>

      <div className="max-w-7xl mx-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {data &&
          Array.isArray(data.data) &&
          data.data.map((expert: Expert, index: number) => (
            <a
              key={index}
              href={`/team/${expert.documentId}`}
              className="bg-white rounded-[30px] shadow-md cursor-pointer hover:shadow-xl hover:bg-gray-50 transition duration-300 overflow-hidden"
            >
              <div className="w-full h-[350px] overflow-hidden rounded-t-[30px]">
                <Image
                  alt={expert.imageUrl || 'Expert'}
                  src={
                    expert.imageUrl ||
                    'https://devplus.edu.vn/_next/static/media/buingocvinh.e45adc5b.png'
                  }
                  preview={false}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="px-6 py-5">
                <h2 className="text-lg font-semibold mb-2 text-[#fb8a38]">
                  {expert.name}
                </h2>
                <div className="flex justify-between items-center gap-4 text-sm">
                  <p className="text-gray-700 truncate">{expert.description}</p>
                  <span className="text-gray-500 italic whitespace-nowrap">
                    {expert.practice}
                  </span>
                </div>
              </div>
            </a>
          ))}
      </div>
    </div>
  );
};
