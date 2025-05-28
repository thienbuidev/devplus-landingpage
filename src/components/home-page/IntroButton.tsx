"use client";
import { motion } from "framer-motion";
import { LuVideo } from "react-icons/lu";
import { LandingButton } from "./LandingButton";

export const IntroButton = () => {
  return (
    <motion.div
      className="mt-14 flex flex-row gap-4 items-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 3, duration: 1 }}
    >
      <LandingButton text="Khám phá thêm" />
      <div className="flex gap-3 items-center cursor-pointer">
        Xem Video <LuVideo size={30} />
      </div>
    </motion.div>
  );
};
