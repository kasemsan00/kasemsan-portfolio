import React from "react";

const Project = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref}>
      <div>
        <h3>TTRS LiveChat</h3>
        <video autoPlay muted playsInline={true} src={"./media/example-video.mp4"}></video>
        <div>Picture</div>
      </div>
      <div>
        <h3>Conference</h3>
        <div>Picture</div>
      </div>
      <div>
        <h3>Dashboard</h3>
        <div>Picture</div>
      </div>
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
  );
});

Project.displayName = "Project";
export default Project;
