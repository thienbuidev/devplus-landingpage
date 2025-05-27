"use server";

import { api } from "libs/api";
import { About } from "types/about";
import { StrapiResponse } from "types/strapiResponse";

export default async function AboutPage() {
  const data: StrapiResponse<About> = await api("about");
  const about = data.data as About;
  return (
    <div className="w-full mx-auto py-20">
      <div className="container w-full p-6 text-[#425563] mx-auto">
        <div className="w-full flex flex-col items-center justify-center text-center">
          <h1 className="md:text-4xl text-3xl lg:text-5xl font-bold">
            {about.title}
          </h1>
          <div className="w-24 h-0.5 bg-gray-300 my-8"></div>
          <p className="mb-4">{about.subTitle}</p>
          <p>{about.description}</p>
        </div>
      </div>
    </div>
  );
}
