'use server';
import { api } from 'libs/api';
import { StrapiResponse } from 'types/strapiResponse';
import { Service } from 'types/service';
import ServiceComponent from './ServiceComponent';
export default async function ServicePage() {
  const data: StrapiResponse<Service> = await api('services');
  return (
    <div className="w-full bg-[#ecf1f4]">
      <ServiceComponent data={data.data as Service[]} />
    </div>
  );
}
