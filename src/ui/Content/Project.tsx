import React, { useRef, useState } from "react";
import Image from "next/image";
import { useDisplayStore } from "@/store/slice/DisplayProject";
import { motion } from "framer-motion";
import ProjectList from "../../../ProjectList.json";

const variants = {
  whileHover: { opacity: 1, scale: 1.1 },
};

const ImageProject = ({ projectName, picture }: { projectName: string; picture: string }) => {
  const { setDisplay } = useDisplayStore();
  const projectDetailRef = useRef<HTMLDivElement>(null);
  const [isDisplayText, setIsDisplayText] = useState(false);
  const onProjectHover = () => {
    setIsDisplayText(true);
  };
  const onProjectMouseLeave = () => {
    setIsDisplayText(false);
  };
  const onProjectClick = () => {
    setDisplay(true);
  };

  return (
    <div
      className="flex h-[200px] w-[200px] cursor-pointer overflow-hidden rounded-2xl"
      onClick={onProjectClick}
      onMouseOver={onProjectHover}
      onMouseLeave={onProjectMouseLeave}
    >
      <motion.div
        ref={projectDetailRef}
        className="z-10 flex h-[70px] w-full flex-1 items-center justify-center self-end bg-gradient-to-b from-transparent to-black"
        animate={isDisplayText ? "whileHover" : ""}
        initial={{ opacity: 0 }}
        variants={variants}
        transition={{ duration: 0.2 }}
      >
        <div className="flex w-full flex-1 justify-center text-white">{projectName}</div>
      </motion.div>
      <Image
        className="absolute h-[200px] w-[200px] rounded-2xl"
        src={require("@/assets/media/project-image/" + picture)}
        alt={"Pic01"}
      />
    </div>
  );
};

const Project = React.forwardRef<HTMLDivElement>((props, ref) => {
  const { display } = useDisplayStore();
  return (
    <>
      <div className="flex flex-col gap-10" ref={ref}>
        <div className="text-4xl text-white">My Project</div>
        <div className={`${display ? "-z-10" : ""} flex w-full flex-wrap justify-center gap-5`}>
          {ProjectList.map((item, index) => {
            return (
              <ImageProject key={index} projectName={item.project_name} picture={item.image} />
            );
          })}
        </div>
      </div>
    </>
  );
});

Project.displayName = "Project";
export default Project;
