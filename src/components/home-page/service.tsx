"use server";
import { api } from "libs/api";
import { StrapiResponse } from "types/strapiResponse";
import { Service } from "types/service";
import ServiceComponent from "./ServiceComponent";
export default async function ServicePage() {
  const data: StrapiResponse<Service> = await api("services");
  return (
    <div className="w-full bg-[#EFEFEF]">
      <ServiceComponent data={data.data as Service[]} />
    </div>
  );
}
