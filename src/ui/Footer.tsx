import React from "react";

const Footer = React.forwardRef<HTMLDivElement>((props, ref) => {
  return <div ref={ref}>Here is footer</div>;
});
Footer.displayName = "Footer";
export default Footer;
