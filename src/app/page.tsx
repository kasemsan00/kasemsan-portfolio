"use client";

import Navbar from "@/ui/Navbar";
import Welcome from "@/ui/Content/Welcome";
import Project from "@/ui/Content/Project";
import Footer from "@/ui/Footer";
import { useRef } from "react";
import MainContentLayout from "@/ui/Layout/MainContentLayout";
import MySkill from "@/ui/Content/MySkill";

export default function Home() {
  const welcomeRef = useRef<HTMLDivElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  return (
    <main className="flex min-h-screen flex-col items-center p-10 bg-black">
      <Navbar welcomeRef={welcomeRef} skillRef={skillRef} footerRef={footerRef} projectRef={projectRef} />
      <MainContentLayout>
        <Welcome ref={welcomeRef} />
        <MySkill ref={skillRef} />
        <Project ref={projectRef} />
      </MainContentLayout>
      <Footer ref={footerRef} />
    </main>
  );
}
