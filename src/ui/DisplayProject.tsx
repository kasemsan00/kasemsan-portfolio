import { useEffect, useRef } from "react";
import { useDisplayStore } from "@/store/slice/DisplayProject";
import { motion } from "framer-motion";

export default function DisplayProject() {
  const { display, setDisplay } = useDisplayStore();
  const modalRef = useRef<HTMLDivElement>(null);
  const handleCloseModal = () => {
    modalRef.current?.classList.add("hidden");
    setDisplay(false);
  };

  useEffect(() => {
    if (display) {
      modalRef.current?.classList.remove("hidden");
    }
  }, [display]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      animate={{ opacity: 1 }}
      className="fixed hidden h-full min-h-screen w-full max-w-7xl bg-gray-500"
      ref={modalRef}
    >
      <div className="absolute right-0 flex gap-2 p-4">
        <div
          className="flex w-36 cursor-pointer justify-center rounded-xl bg-blue-950 p-3 text-white"
          onClick={handleCloseModal}
        >
          Close
        </div>
        <div className="flex w-36 cursor-pointer justify-center rounded-xl bg-blue-950 p-3 text-white">
          NextProject
        </div>
      </div>
      <div className="flex flex-row">
        <div className="h-96 w-full bg-white">View Project Video</div>
        <div className="w-full">Project Detail</div>
      </div>
    </motion.div>
  );
}
