"use client";

import Navbar from "@/ui/Navbar";
import Welcome from "@/ui/Content/Welcome";
import Project from "@/ui/Content/Project";
import Footer from "@/ui/Footer";
import { useRef } from "react";
import MainContentLayout from "@/ui/Layout/MainContentLayout";
import MySkill from "@/ui/Content/MySkill";
import DisplayProject from "@/ui/DisplayProject";
import { useDisplayStore } from "@/store/slice/DisplayProject";

export default function Home() {
  const pageRef = useRef(null);
  const { display } = useDisplayStore();
  const welcomeRef = useRef<HTMLDivElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  return (
    <main
      ref={pageRef}
      className="flex h-full flex-col items-center overflow-hidden bg-gradient-radial from-blue-800 to-blue-950"
    >
      <DisplayProject />
      <MainContentLayout>
        {!display ? (
          <Navbar skillRef={skillRef} footerRef={footerRef} projectRef={projectRef} />
        ) : null}
        <Welcome ref={welcomeRef} />
        <MySkill ref={skillRef} />
        <Project ref={projectRef} />
      </MainContentLayout>
      <Footer ref={footerRef} />
    </main>
  );
}
