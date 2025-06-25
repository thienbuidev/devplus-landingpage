import { Col, Row } from 'antd';
import Image from 'next/image';
import Link from 'next/link';

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
          className="items-center align-middle justify-center mb-8"
        >
          <div className="flex flex-col gap-4 text-center">
            <Link href="/" className="!text-white">
              Home
            </Link>
            <Link href="/team" className="!text-white">
              Team
            </Link>
            <Link href="/about" className="!text-white">
              About
            </Link>
            <Link href="/news" className="!text-white">
              News
            </Link>
            <Link href="/features" className="!text-white">
              Features
            </Link>
            <Link href="/contact" className="!text-white">
              Contact
            </Link>
            <Link href="/privacy-policy" className="!text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-of-use" className="!text-white">
              Term of Use
            </Link>
          </div>
        </Col>

        <Col
          xs={{ order: 2, span: 24 }}
          sm={{ order: 2, span: 24 }}
          md={{ order: 3, span: 8 }}
          className="flex mb-8"
        >
          <div className="flex flex-col gap-4 text-center">
            <Link href="/asu-partnership" className="!text-white">
              ASU Partnership
            </Link>
            <Link href="/powered-by-asu" className="!text-white">
              Powered by ASU
            </Link>
            <Link href="/new-universities" className="!text-white">
              New Universities
            </Link>
            <Link href="/regional-universities" className="!text-white">
              Regional Universities
            </Link>
            <Link href="/global-universities" className="!text-white">
              Globally Ranked Universities
            </Link>
            <Link href="/cintana-alliance" className="!text-white">
              The Cintana Alliance
            </Link>
          </div>
        </Col>
      </Row>
    </footer>
  );
}
