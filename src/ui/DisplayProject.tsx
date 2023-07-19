import { useEffect, useRef } from "react";
import { useDisplayStore } from "@/store/slice/DisplayProject";

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
    <div className="fixed hidden h-screen min-h-screen w-full max-w-7xl bg-gray-500" ref={modalRef}>
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
    </div>
  );
}
