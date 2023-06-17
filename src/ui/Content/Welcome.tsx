import React from "react";

const Welcome = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="flex flex-row">
      <div className="flex flex-col gap-6 w-3/4">
        <div
          className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white
        pr-5 text-5xl text-black font-bold"
        >
          Hello
        </div>
        <div
          className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white
        pr-5 text-5xl text-black font-bold"
        >
          My name is Kasemsan Chompuwised
        </div>
        <div
          className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white
        pr-5 text-5xl text-black font-bold"
        >
          I&apos;m Fullstack WebDeveloper
        </div>
      </div>
      <div className="w-fit">Some thing </div>
    </div>
  );
});

Welcome.displayName = "Welcome";
export default Welcome;
