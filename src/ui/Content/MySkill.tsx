import React from "react";
import Image from "next/image";

const SkillIcon = ({ path, alt }: { path: string; alt: string }) => {
  return <Image className="h-14 w-14 object-contain" src={path} alt={alt} />;
};

const MySkill = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="flex flex-col justify-center  gap-10">
      <div className="text-5xl text-white">Skills</div>
      <div className="grid w-full gap-11 sm:grid-cols-2 md:grid-cols-3">
        <div>
          <div className="mb-2 flex flex-row gap-2">
            <SkillIcon path={require("@/assets/media/skill-icon/html.svg")} alt={"HTML"} />
            <SkillIcon
              path={require("@/assets/media/skill-icon/javascript.svg")}
              alt={"javascript"}
            />
            <SkillIcon path={require("@/assets/media/skill-icon/php.svg")} alt={"PHP"} />
          </div>
          <ul className="text-xl">
            <li className="text-white">HTML</li>
            <li className="text-white">PHP</li>
            <li className="text-white">Javascript</li>
          </ul>
        </div>
        <div>
          <div className="mb-2 flex flex-row gap-2">
            <SkillIcon path={require("@/assets/media/skill-icon/react.png")} alt={"React"} />
            <SkillIcon path={require("@/assets/media/skill-icon/nextjs.svg")} alt={"NextJS"} />
            <SkillIcon path={require("@/assets/media/skill-icon/angular.svg")} alt={"Angular"} />
          </div>
          <ul className="text-xl">
            <li className="text-white">React</li>
            <li className="text-white">NextJS</li>
            <li className="text-white">Angular</li>
          </ul>
        </div>
        <div>
          <div className="mb-2 flex flex-row gap-2">
            <SkillIcon path={require("@/assets/media/skill-icon/nodejs.svg")} alt={"NodeJS"} />
            <SkillIcon path={require("@/assets/media/skill-icon/go.svg")} alt={"Go"} />
            <SkillIcon path={require("@/assets/media/skill-icon/docker.svg")} alt={"Docker"} />
          </div>
          <ul className="text-xl">
            <li className="text-white">NodeJS</li>
            <li className="text-white">Go</li>
            <li className="text-white">Docker</li>
          </ul>
        </div>
        <div>
          <div className="mb-2 flex flex-row gap-3">
            <SkillIcon
              path={require("../../assets/media/skill-icon/tailwind.svg")}
              alt={"Tailwind"}
            />
            <SkillIcon path={require("../../assets/media/skill-icon/css.svg")} alt={"CSS"} />
            <SkillIcon
              path={require("../../assets/media/skill-icon/bootstrap.svg")}
              alt={"Bootstrap"}
            />
          </div>
          <ul className="text-xl">
            <li className="text-white">Tailwind</li>
            <li className="text-white">CSS</li>
            <li className="text-white">Bootstrap</li>
            <li className="text-white">Farmer Motion</li>
          </ul>
        </div>
        <div>
          <div className="mb-2 flex flex-row gap-2">
            <SkillIcon path={require("../../assets/media/skill-icon/webrtc.svg")} alt={"WebRTC"} />
            <SkillIcon
              path={require("../../assets/media/skill-icon/livekit.png")}
              alt={"LiveKit"}
            />
            <SkillIcon
              path={require("../../assets/media/skill-icon/mediasoup.png")}
              alt={"Mediasoup"}
            />
          </div>
          <ul className="text-xl">
            <li className="text-white">WebRTC</li>
            <li className="text-white"> LiveKit</li>
            <li className="text-white">Me diasoup</li>
          </ul>
        </div>
        <div>
          <div className="mb-2 flex flex-row gap-2">
            <SkillIcon
              path={require("../../assets/media/skill-icon/postgresql.svg")}
              alt={"PostgreSQL"}
            />
            <SkillIcon path={require("../../assets/media/skill-icon/mysql.svg")} alt={"MySQL"} />
            <SkillIcon
              path={require("../../assets/media/skill-icon/mongodb.svg")}
              alt={"MongoDB"}
            />
          </div>
          <ul className="text-xl">
            <li className="text-white">PostgreSQL</li>
            <li className="text-white">MySQL</li>
            <li className="text-white">MongoDB</li>
          </ul>
        </div>
      </div>
    </div>
  );
});

MySkill.displayName = "Welcome";
export default MySkill;
