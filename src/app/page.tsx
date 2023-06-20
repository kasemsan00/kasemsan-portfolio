"use client";

import Navbar from "@/ui/Navbar";
import Welcome from "@/ui/Content/Welcome";
import Project from "@/ui/Content/Project";
import Footer from "@/ui/Footer";
import { useRef } from "react";
import MainContentLayout from "@/ui/Layout/MainContentLayout";
import MySkill from "@/ui/Content/MySkill";
import DisplayProject from "@/ui/DisplayProject";

export default function Home() {
  const welcomeRef = useRef<HTMLDivElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  return (
    <main className=" flex min-h-screen flex-col items-center bg-gradient-radial from-blue-800 to-blue-950">
      <DisplayProject />
      <MainContentLayout>
        <Navbar skillRef={skillRef} footerRef={footerRef} projectRef={projectRef} />
        <Welcome ref={welcomeRef} />
        <MySkill ref={skillRef} />
        <Project ref={projectRef} />
      </MainContentLayout>
      <Footer ref={footerRef} />
    </main>
  );
}
