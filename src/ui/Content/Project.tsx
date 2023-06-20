import React from "react";
import Image from "next/image";

const ImageProject = () => {
  return (
    <div className="flex w-[200px] h-[200px]">
      <div className="bg-gray-500 z-10 ">
        <div className="text-white w-full flex flex-1 justify-center al">LiveChat</div>
      </div>
      <Image
        className="absolute w-[200px] h-[200px] rounded-2xl hover:scale-110 transition absolute"
        src={require("@/assets/media/project-image/pic01.jpg")}
        alt={"Pic01"}
      />
    </div>
  );
};

const Project = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div className="flex flex-col gap-10" ref={ref}>
      <div className="text-4xl text-white">My Project</div>
      <div className="flex flex-col">
        <div className="flex cursor-pointer">
          <div>
            <ImageProject />
          </div>
        </div>
        <div className="flex">
          <div>
            <h3 className="text-white text-2xl">Conference</h3>
            <div className="flex">
              <Image
                className="rounded-2xl w-[400px] h-[400px]"
                src={require("@/assets/media/project-image/pic05.jpg")}
                alt={"Pic01"}
              />
              <Image
                className="rounded-2xl w-[400px] h-[400px]"
                src={require("@/assets/media/project-image/pic04.jpg")}
                alt={"Pic02"}
              />
              <Image
                className="rounded-2xl w-[400px] h-[400px]"
                src={require("@/assets/media/project-image/pic06.jpg")}
                alt={"Pic02"}
              />
            </div>
          </div>
          <div className="text-white">2023</div>
        </div>
        {/*<div className="flex flex-col">*/}
        {/*  <h3 className="text-white text-2xl">Dashboard</h3>*/}
        {/*  <div className="flex">*/}
        {/*    <Image*/}
        {/*      className="rounded-2xl w-[400px] h-[400px]"*/}
        {/*      src={require("@/assets/media/project-image/pic08.jpg")}*/}
        {/*      alt={"Pic01"}*/}
        {/*    />*/}
        {/*    <Image*/}
        {/*      className="rounded-2xl w-[400px] h-[400px]"*/}
        {/*      src={require("@/assets/media/project-image/pic06.jpg")}*/}
        {/*      alt={"Pic02"}*/}
        {/*    />*/}
        {/*    <Image*/}
        {/*      className="rounded-2xl w-[400px] h-[400px]"*/}
        {/*      src={require("@/assets/media/project-image/pic07.jpg")}*/}
        {/*      alt={"Pic02"}*/}
        {/*    />*/}
        {/*  </div>*/}
        {/*</div>*/}
        <div>
          <h3>TTRS VRS</h3>
          <div>Picture</div>
        </div>
        <div>
          <h3>Survey</h3>
          <div>Pic</div>
        </div>
        <div>
          <h3>WebRTC SMS</h3>
          <div>Picture</div>
        </div>
        <div>
          <h3>SQR</h3>
          <div>Pic</div>
        </div>
      </div>
    </div>
  );
});

Project.displayName = "Project";
export default Project;
