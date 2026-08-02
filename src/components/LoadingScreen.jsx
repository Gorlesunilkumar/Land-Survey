import { motion } from "framer-motion";
import { Compass } from "lucide-react";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-[#0F4C81] flex flex-col justify-center items-center z-[9999]">

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "linear",
        }}
      >
        <Compass size={70} className="text-[#FF9800]" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-white text-4xl font-bold mt-6"
      >
        Srinu Survey Solutions
      </motion.h1>

      <p className="text-white mt-3 text-lg">
        Loading...
      </p>

    </div>
  );
}