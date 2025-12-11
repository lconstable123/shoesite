"use client";

import { motion } from "framer-motion";
import { LoadingIcon } from "./Icons";

export function Loadingpage() {
  return (
    <div className="w-full  h-200 flex items-center justify-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-20 h-20  animate-spin flex justify-center items-center"
      >
        <LoadingIcon size={120} />
      </motion.div>
    </div>
  );
}
