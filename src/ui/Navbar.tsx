import React from "react";

interface Props {
  projectRef: React.RefObject<HTMLDivElement>;
  footerRef: React.RefObject<HTMLDivElement>;
}
interface LiProps {
  title: string;
  onClickScroll: () => void;
}
const Li = ({ title, onClickScroll }: LiProps) => {
  return (
    <li onClick={onClickScroll} className="inline-block cursor-pointer font-bold hover:underline">
      {title}
    </li>
  );
};

export default function Navbar({ footerRef, projectRef }: Props) {
  const onClickProject = () => {
    projectRef.current?.scrollIntoView();
  };
  const onClickFooter = () => {
    footerRef.current?.scrollIntoView();
  };
  return (
    <div className="flex w-full justify-end">
      <ul className="list-none gap-2 flex">
        <Li title={"Start"} onClickScroll={() => {}} />
        <Li title={"Skill"} onClickScroll={() => {}} />
        <Li title={"Project"} onClickScroll={onClickProject} />
        <Li title={"Work"} onClickScroll={() => {}} />
        <Li title={"Contact"} onClickScroll={onClickFooter} />
      </ul>
    </div>
  );
}
