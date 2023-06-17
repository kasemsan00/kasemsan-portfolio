import React from "react";

const Welcome = React.forwardRef<HTMLDivElement>((props, ref) => {
  return <div ref={ref}>Hello, My name is Kasemsan Chompuwised, I fullstack WebDeveloper</div>;
});

Welcome.displayName = "Welcome";
export default Welcome;
