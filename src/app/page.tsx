"use client";

import Navbar from "@/ui/Navbar";
import Welcome from "@/ui/Welcome";
import Project from "@/ui/Project";
import Footer from "@/ui/Footer";
import { useRef } from "react";

export default function Home() {
  const welcomeRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  return (
    <main className="flex min-h-screen flex-col items-center p-2">
      <Navbar footerRef={footerRef} projectRef={projectRef} />
      <Welcome ref={welcomeRef} />
      <Project ref={projectRef} />
      <Footer ref={footerRef} />
    </main>
  );
}
