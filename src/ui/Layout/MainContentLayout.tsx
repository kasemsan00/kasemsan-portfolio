import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function MainContentLayout({ children }: Props) {
  return <div className="flex flex-col gap-20">{children}</div>;
}
