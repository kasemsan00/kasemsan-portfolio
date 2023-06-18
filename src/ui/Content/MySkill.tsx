import React from "react";
import Image from "next/image";

const SkillIcon = ({ path, alt }: { path: string; alt: string }) => {
  return <Image className="w-14 h-14" src={path} alt={alt} />;
};

const MySkill = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="flex flex-col gap-10">
      <div className="text-5xl">Skills</div>
      <div className="w-full grid grid-cols-4">
        <div>
          <div className="flex flex-row gap-2">
            <SkillIcon path={require("../../assets/media/html.svg")} alt={"HTML"} />
            <SkillIcon path={require("../../assets/media/javascript.svg")} alt={"javascript"} />
            <SkillIcon path={require("../../assets/media/php.svg")} alt={"PHP"} />
          </div>
          <div>
            <ul className="text-2xl">
              <li>HTML</li>
              <li>PHP</li>
              <li>Javascript</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="flex flex-row gap-2">
            <SkillIcon path={require("../../assets/media/react.png")} alt={"React"} />
            <SkillIcon path={require("../../assets/media/nextjs.svg")} alt={"NextJS"} />
            <SkillIcon path={require("../../assets/media/angular.svg")} alt={"Angular"} />
          </div>
          <div>
            <ul className="text-2xl">
              <li>React</li>
              <li>NextJS</li>
              <li>Angular</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="flex flex-row gap-2">
            <SkillIcon path={require("../../assets/media/nodejs.svg")} alt={"NodeJS"} />
            <SkillIcon path={require("../../assets/media/go.svg")} alt={"Go"} />
            <SkillIcon path={require("../../assets/media/docker.svg")} alt={"Docker"} />
          </div>
          <div>
            <ul className="text-2xl">
              <li>NodeJS</li>
              <li>Go</li>
              <li>Docker</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="flex flex-row gap-3">
            <SkillIcon path={require("../../assets/media/tailwind.svg")} alt={"Tailwind"} />
            <SkillIcon path={require("../../assets/media/css.svg")} alt={"CSS"} />
            <SkillIcon path={require("../../assets/media/bootstrap.svg")} alt={"Bootstrap"} />
          </div>
          <div>
            <ul className="text-2xl">
              <li>Tailwind</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>Farmer Motion</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="flex flex-row gap-2">
            <SkillIcon path={require("../../assets/media/webrtc.svg")} alt={"WebRTC"} />
            <SkillIcon path={require("../../assets/media/livekit.png")} alt={"LiveKit"} />
            <SkillIcon path={require("../../assets/media/mediasoup.png")} alt={"Mediasoup"} />
          </div>
          <div>
            <ul className="text-2xl">
              <li>WebRTc</li>
              <li>LiveKit</li>
              <li>Mediasoup</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="flex flex-row gap-2">
            <SkillIcon path={require("../../assets/media/postgresql.svg")} alt={"PostgreSQL"} />
            <SkillIcon path={require("../../assets/media/mysql.svg")} alt={"MySQL"} />
            <SkillIcon path={require("../../assets/media/mongodb.svg")} alt={"MongoDB"} />
          </div>
          <div>
            <ul className="text-2xl">
              <li>PostgreSQL</li>
              <li>MySQL</li>
              <li>MongoDB</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
});

MySkill.displayName = "Welcome";
export default MySkill;
