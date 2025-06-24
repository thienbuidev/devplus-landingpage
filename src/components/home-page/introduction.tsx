import { TypingText } from '../atom/TypingText';
import { IntroButton } from './IntroButton';

export default async function Introduction() {
  return (
    <div className="w-full h-screen bg-cover bg-center overflow-hidden bg-[url('/bg-1.jpg')]">
      <div className="flex items-center justify-start *:text-[#ffffff] align-middle w-full h-full">
        <div className="p-10 md:p-30 mt-10">
          <TypingText
            text="Chào mừng đến công ty chúng tôi"
            className=" text-4xl md:text-5xl font-bold"
            speed={30}
          />

          <TypingText
            text="Chúng tôi tận tâm cung cấp các dịch vụ tốt nhất cho khách hàng."
            className=" text-22xl md:text-3xl font-bold mt-4"
            speed={20}
            delay={1500}
          />
          <IntroButton />
        </div>
      </div>
    </div>
  );
}
