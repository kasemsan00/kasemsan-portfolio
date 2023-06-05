import Navbar from "@/ui/Navbar";
import Welcome from "@/ui/Welcome";
import Project from "@/ui/Project";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-2">
      {/*<video autoPlay muted playsInline={true} src={"./media/example-video.mp4"}></video>*/}
      <Navbar />
      <Welcome />
      <Project />
    </main>
  );
}
