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
    console.log(display);
    if (display) {
      modalRef.current?.classList.remove("hidden");
    }
  }, [display]);
  return (
    <div className="hidden fixed bg-gray-500 w-full h-screen min-h-screen" ref={modalRef}>
      <div className="p-3 bg-blue-950 w-fit rounded-xl cursor-pointer" onClick={handleCloseModal}>
        Close
      </div>
      <div>NextProject</div>
      HELLO
    </div>
  );
}
