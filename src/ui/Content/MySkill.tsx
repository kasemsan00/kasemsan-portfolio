import React from "react";

const MySkill = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="flex flex-col">
      <div className="text-5xl">Skills</div>
      <div className="flex flex-col gap-6">
        <table>
          <tbody>
            <tr>
              <td>
                <div>Picture</div>
                <div>HTML, Javascript</div>
              </td>
              <td>
                <div>Picture</div>
                <div>Angular, React</div>
              </td>
              <td>
                <div>Picture</div>
                <div>NodeJS, Go, Docker</div>
              </td>
            </tr>
            <tr>
              <td>CSS, Tailwind, Bootstrap</td>
              <td>PHP</td>
              <td>WebRTC, LiveKit, Mediasoup</td>
            </tr>
            <tr>
              <td>MySQL, MariaDB, PostgreSQL, MongoDB</td>
              <td>Linux Command</td>
            </tr>
          </tbody>
        </table>
        <div className="text-5xl">HTML, CSS</div>
        <div className="text-5xl">React, NextJS</div>
      </div>
    </div>
  );
});

MySkill.displayName = "Welcome";
export default MySkill;
