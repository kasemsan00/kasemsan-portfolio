import React from "react";

interface Props {
  welcomeRef: React.RefObject<HTMLDivElement>;
  skillRef: React.RefObject<HTMLDivElement>;
  projectRef: React.RefObject<HTMLDivElement>;
  footerRef: React.RefObject<HTMLDivElement>;
}
interface LiProps {
  title: string;
  onClickScroll: () => void;
}
const Li = ({ title, onClickScroll }: LiProps) => {
  return (
    <li onClick={onClickScroll} className="text-2xl cursor-pointer inline-block font-bold hover:underline">
      {title}
    </li>
  );
};

export default function Navbar({ welcomeRef, skillRef, projectRef, footerRef }: Props) {
  const onClickWelcome = () => {
    welcomeRef.current?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  };
  const onClickSkill = () => {
    skillRef.current?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  };
  const onClickProject = () => {
    projectRef.current?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  };
  const onClickFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  };
  return (
    <div className="flex w-full justify-end">
      <ul className="flex list-none gap-6">
        <Li title={"Start"} onClickScroll={onClickWelcome} />
        <Li title={"Skill"} onClickScroll={onClickSkill} />
        <Li title={"My Project"} onClickScroll={onClickProject} />
        <Li title={"Work"} onClickScroll={() => {}} />
        <Li title={"Contact"} onClickScroll={onClickFooter} />
      </ul>
    </div>
  );
}
