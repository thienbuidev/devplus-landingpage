import Image from "next/image";

export default function Footer() {
  return (
    <footer className="p-4 bg-gray-800 text-white text-center text-sm">
      <div className="grid grid-cols-3 gap-4">
        <div className="flex justify-center items-center flex-col gap-2">
          <Image src="/logo.png" alt="" height={100} width={100} />
          <div>116-118 Mai Thuc Lan, Bac My Phu, Ngu Hanh Son, Da Nang</div>
          <div>Hotline: +84 123 456 789</div>
          <div>Email: hello@devplus.edu.vn</div>
        </div>
        <div>2</div>
        <div>3</div>
        <p className="col-span-3">© 2025 Devplus. All rights reserved.</p>
      </div>
    </footer>
  );
}
