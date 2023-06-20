import React, { useRef, useState } from "react";
import Image from "next/image";
import { useDisplayStore } from "@/store/slice/DisplayProject";
import { motion } from "framer-motion";
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
      className="flex w-[200px] h-[200px] cursor-pointer overflow-hidden rounded-2xl"
      onClick={onProjectClick}
      onMouseOver={onProjectHover}
      onMouseLeave={onProjectMouseLeave}
    >
      <motion.div
        ref={projectDetailRef}
        className="flex flex-1 justify-center items-center bg-gradient-to-b from-transparent to-black z-10 h-[70px] self-end w-full"
        animate={isDisplayText ? "whileHover" : ""}
        initial={{ opacity: 0 }}
        variants={variants}
        transition={{ duration: 0.2 }}
      >
        <div className="text-white w-full flex flex-1 justify-center">{projectName}</div>
      </motion.div>
      <Image
        className="w-[200px] h-[200px] rounded-2xl absolute"
        src={require("@/assets/media/project-image/" + picture)}
        alt={"Pic01"}
      />
    </div>
  );
};

const Project = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <>
      <div className="flex flex-col gap-10" ref={ref}>
        <div className="text-4xl text-white">My Project</div>
        <div className="flex flex-wrap w-full gap-5">
          <ImageProject projectName={"Dashboard"} picture={"pic07.jpg"} />
          <ImageProject projectName={"Conference"} picture={"pic02.jpg"} />
          <ImageProject projectName={"Video Relay Service"} picture={"pic03.jpg"} />
          <ImageProject projectName={"WebRTC SMS"} picture={"pic04.jpg"} />
          <ImageProject projectName={"LiveChat"} picture={"pic01.jpg"} />
          <ImageProject projectName={"Survey"} picture={"pic05.jpg"} />
          <ImageProject projectName={"SQR"} picture={"pic06.jpg"} />
        </div>
      </div>
    </>
  );
});

Project.displayName = "Project";
export default Project;
