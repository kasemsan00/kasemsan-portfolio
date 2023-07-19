import React, { useLayoutEffect, useRef } from "react";

const line1 = "Hello";
const line2 = "My name is Kasemsan Chompuwised";
const line3 = "I'm Fullstack WebDeveloper";

const Welcome = React.forwardRef<HTMLDivElement>((props, ref) => {
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const line3Ref = useRef<HTMLDivElement>(null);
  const textClass =
    "overflow-hidden whitespace-nowrap pr-5 text-white " +
    "text-xl" +
    "sm:text-2xl sm:h-[30px]" +
    "md:text-3xl md:h-[40px ]" +
    "xl:text-6xl xl:h-[50px]";

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
    <div
      ref={ref}
      className="flex flex-row
      sm:w-[640px]
      md:w-[760px]
      lg:w-[1024px]
      xl:w-[1280]
      "
    >
      <div className="flex flex-col gap-6 text-4xl">
        <div ref={line1Ref} className={textClass}></div>
        <div ref={line2Ref} className={textClass}></div>
        <div ref={line3Ref} className={textClass}></div>
      </div>
    </div>
  );
});

Welcome.displayName = "Welcome";
export default Welcome;
