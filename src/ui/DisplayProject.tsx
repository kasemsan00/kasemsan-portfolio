import { useRef } from "react";

export default function DisplayProject() {
  const modalRef = useRef<HTMLDivElement>(null);
  const handleCloseModal = () => {
    modalRef.current?.classList.add("hidden");
  };
  return (
    <div className="hidden bg-gray-500 w-full h-screen min-h-screen" ref={modalRef}>
      <div className="p-3 bg-blue-950 w-fit rounded-xl cursor-pointer" onClick={handleCloseModal}>
        Close
      </div>
      <div>NextProject</div>
      HELLO
    </div>
  );
}
