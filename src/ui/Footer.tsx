import React from "react";
import Image from "next/image";

const Footer = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="mt-10 flex h-32 w-full  flex-row justify-center gap-10 bg-white">
      <div className="flex flex-col items-center justify-center">
        <Image
          className="w-[40px]"
          width={40}
          height={40}
          src={require("../assets/media/skill-icon/nextjs.svg")}
          alt={"NextJS"}
        />
        <span>NextJS</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Image
          width={40}
          height={40}
          className="h-[40px] w-[40px]"
          src={require("../assets/media/skill-icon/tailwind.svg")}
          alt={"Tailwind"}
        />
        <span>Tailwind</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <svg
          className="h-[40px] w-[40px]"
          xmlns="http:www.w3.org/2000/svg"
          viewBox="0 0 14 21"
          role="presentation"
        >
          <path d="M0 0h14v7H7zm0 7h7l7 7H7v7l-7-7z" fill="currentColor"></path>
        </svg>
        <span>Farmer Motion</span>
      </div>
    </div>
  );
});
Footer.displayName = "Footer";
export default Footer;
