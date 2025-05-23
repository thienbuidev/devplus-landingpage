import { Col, Row } from "antd";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="p-4 bg-gray-800 text-white text-center text-sm">
      <Row className="flex align-middle justify-center items-center">
        <Col
          xs={{ order: 3, span: 24 }}
          sm={{ order: 3, span: 24 }}
          md={{ order: 1, span: 8 }}
          className="mb-8"
        >
          <div className="flex justify-center items-center flex-col gap-2">
            <Image src="/logo.png" alt="" height={100} width={100} />
            <div>116-118 Mai Thuc Lan, Bac My Phu, Ngu Hanh Son, Da Nang</div>
            <div>Hotline: +84 123 456 789</div>
            <div>Email: hello@devplus.edu.vn</div>
          </div>

          <p className="col-span-3">© 2025 Devplus. All rights reserved.</p>
        </Col>
        <Col
          xs={{ order: 1, span: 24 }}
          sm={{ order: 1, span: 24 }}
          md={{ order: 2, span: 8 }}
          className=" items-center align-middle justify-center mb-8"
        >
          <div className="flex flex-col gap-4 text-center">
            <div>Home</div>
            <div>Team</div>
            <div>About</div>
            <div>News</div>
            <div>Features</div>
            <div>Contact</div>
            <div>Privacy Policy</div>
            <div>Term of Use</div>
          </div>
        </Col>
        <Col
          xs={{ order: 2, span: 24 }}
          sm={{ order: 2, span: 24 }}
          md={{ order: 3, span: 8 }}
          className="flex mb-8"
        >
          <div className="flex flex-col gap-4 text-center">
            <div>ASU Partnership</div>
            <div>Powered by ASU</div>
            <div>New Universities</div>
            <div>Regional Universities</div>
            <div>Globally Ranked Universities</div>
            <div>The Cintana Alliance</div>
          </div>
        </Col>
      </Row>
    </footer>
  );
}
