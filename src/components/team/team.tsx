"use server";

import { api } from "libs/api";
import RenderRichText from "../common/RichTextRenderer";

export const TeamHeader = async () => {
  const headerData = await api("expert-header");
  return (
    <div className="w-full bg-gradient-to-br from-[#37434b] to-[#53646f] flex items-center justify-center text-[#d9e5ed] pt-36 pb-6 px-6">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl md:text-5xl lg-text-6xl font-bold mb-6">
          {headerData.data.title}
        </h1>
        <RenderRichText content={headerData.data.content} />
      </div>
    </div>
  );
};
