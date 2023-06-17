const Li = ({ title }: { title: string }) => {
  return <li className="inline-block cursor-pointer font-bold hover:underline">{title}</li>;
};

export default function Navbar() {
  return (
    <div className="flex w-full justify-end">
      <ul className="list-none gap-2 flex">
        <Li title={"Start"} />
        <Li title={"Skill"} />
        <Li title={"Project"} />
        <Li title={"Work"} />
        <Li title={"Contact"} />
      </ul>
    </div>
  );
}
