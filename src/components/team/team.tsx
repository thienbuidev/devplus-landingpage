'use server';

import { api } from 'libs/api';

export const TeamHeader = async () => {
  const headerData = await api('expert-header');

  return (
    <div className="w-full bg-gradient-to-br from-[#37434b] to-[#53646f] text-[#d9e5ed] px-6">
      <div className="max-w-7xl mx-auto min-h-[300px] flex items-center justify-center text-center px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          {headerData.data.title}
        </h1>
      </div>
    </div>
  );
};
