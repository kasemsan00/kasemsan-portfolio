import React from "react";
import Image from "next/image";

const Project = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div className="flex flex-col gap-10" ref={ref}>
      <div className="text-4xl text-white">My Project</div>
      <div>
        <div className="flex">
          <div>
            <h3 className="text-white text-2xl">LiveChat</h3>
            <div className="flex">
              <Image
                className="rounded-2xl w-[400px] h-[400px]"
                src={require("@/assets/media/project-image/pic01.jpg")}
                alt={"Pic01"}
              />
              <Image
                className="rounded-2xl w-[400px] h-[400px]"
                src={require("@/assets/media/project-image/pic02.jpg")}
                alt={"Pic02"}
              />
              <Image
                className="rounded-2xl w-[400px] h-[400px]"
                src={require("@/assets/media/project-image/pic03.jpg")}
                alt={"Pic03"}
              />
            </div>
          </div>
          <div className="text-white">2023</div>
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
