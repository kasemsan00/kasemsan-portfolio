import React from "react";

const Welcome = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="flex flex-row">
      <div className="flex flex-col gap-6 w-3/4">
        <div className="text-5xl">Hello </div>
        <div className="text-5xl">My name is Kasemsan Chompuwised</div>
        <div className="text-5xl">I&apos;m Fullstack WebDeveloper</div>
      </div>
      <div className="w-fit">Some thing </div>
    </div>
  );
});

Welcome.displayName = "Welcome";
export default Welcome;
