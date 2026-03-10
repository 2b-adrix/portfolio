"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import CustomCursor from "@/components/CustomCursor";
import Particles from "@/components/Particles";
import CodeSnippet from "@/components/CodeSnippet";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <Particles />
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <CustomCursor />
        <ThemeSwitcher />
        <Hero />
        <Grid />
        <CodeSnippet />
        <RecentProjects />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;