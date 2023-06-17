import React from "react";

const MySkill = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="flex flex-col">
      <div className="text-5xl">Skills</div>
      <div className="flex flex-col gap-6 w-3/4">
        <div className="text-5xl">HTML, CSS</div>
        <div className="text-5xl">React, NextJS</div>
      </div>
    </div>
  );
});

MySkill.displayName = "Welcome";
export default MySkill;
