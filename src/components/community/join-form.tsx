"use client";
import { Modal } from "antd";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function JoinFormModal({ isOpen, onClose }: Props) {
  return (
    <Modal open={isOpen} onClose={onClose}>
      123
    </Modal>
  );
}
