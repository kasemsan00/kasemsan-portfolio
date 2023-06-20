import React, { useRef } from "react";
import Image from "next/image";
import DisplayProject from "@/ui/DisplayProject";

const ImageProject = ({ projectName, picture }: { projectName: string; picture: string }) => {
  const projectDetailRef = useRef<HTMLDivElement>(null);
  const onProjectHover = () => {
    projectDetailRef.current?.classList.remove("hidden");
  };
  const onProjectMouseLeave = () => {
    projectDetailRef.current?.classList.add("hidden");
  };
  return (
    <div
      className="flex w-[200px] h-[200px] cursor-pointer overflow-hidden rounded-2xl"
      onMouseOver={onProjectHover}
      onMouseLeave={onProjectMouseLeave}
    >
      <div
        ref={projectDetailRef}
        className="hidden bg-gradient-to-b from-transparent to-black z-10 h-[50px] self-end w-full"
      >
        <div className="text-white w-full flex flex-1 justify-center">{projectName}</div>
      </div>
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
        <div className="flex w-full gap-5">
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
