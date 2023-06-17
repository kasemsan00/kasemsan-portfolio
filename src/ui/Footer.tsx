import React from "react";
interface Props {
  ref: React.Ref<HTMLDivElement>;
}

export default function Footer({ ref }: Props) {
  return <div ref={ref}>Footer</div>;
}
