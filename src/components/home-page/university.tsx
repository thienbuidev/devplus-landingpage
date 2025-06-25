import { api } from 'libs/api';
import LogoCarousel from './LogoCarousel';

export default async function University() {
  const uniData = await api('universities');
  console.log('object', uniData);
  return (
    <div className="w-full py-[50px] px-[30px] text-[#fb8a38] bg-[#fef4eb]">
      <LogoCarousel universities={uniData.data} />
    </div>
  );
}
