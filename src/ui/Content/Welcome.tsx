import React, { useEffect, useLayoutEffect, useRef } from "react";

const line1 = "Hello";
const line2 = "My name is Kasemsan Chompuwised";
const line3 = "I'm Fullstack WebDeveloper";

const Welcome = React.forwardRef<HTMLDivElement>((props, ref) => {
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const line3Ref = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const typeWriter = (text: string, ref: React.RefObject<any>) => {
      let i = 0;
      const interval = setInterval(() => {
        ref.current.innerHTML += text.charAt(i++);
        if (i === text.length) {
          clearInterval(interval);
        }
      }, 100);
    };
    typeWriter(line1, line1Ref);
    typeWriter(line2, line2Ref);
    typeWriter(line3, line3Ref);
  }, []);

  return (
    <div ref={ref} className="flex flex-row">
      <div className="flex flex-col gap-6 w-[1200px]">
        <div
          ref={line1Ref}
          className="overflow-hidden whitespace-nowrap
        pr-5 h-[50px] text-5xl text-white"
        ></div>
        <div
          ref={line2Ref}
          className="overflow-hidden whitespace-nowrap
        pr-5 h-[50px] text-5xl text-white"
        ></div>
        <div
          ref={line3Ref}
          className="overflow-hidden whitespace-nowrap
        pr-5 h-[50px] text-5xl text-white"
        ></div>
      </div>
      <div className="w-fit">Some thing </div>
    </div>
  );
});

Welcome.displayName = "Welcome";
export default Welcome;
