"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Expertise } from "@/components/sections/Expertise";
import { Process } from "@/components/sections/Process";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { TrebleLabs, Standard } from "@/components/sections/TrebleLabs";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] overflow-hidden selection:bg-indigo-500/30 selection:text-indigo-200">
      <Navbar />

      <main>
        <Hero />
        <Expertise />
        <Process />
        <FeaturedWork />
        <TrebleLabs />
        <Standard />
      </main>

      <Footer />
    </div>
  );
}
