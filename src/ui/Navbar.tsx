import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="flex w-full justify-end">
      <ul className="list-none gap-2 flex">
        <li className="inline-block">Start</li>
        <li className="inline-block">Skill</li>
        <li className="inline-block">Project</li>
        <li className="inline-block">Work</li>
        <li className="inline-block">Contact</li>
      </ul>
    </div>
  );
}
