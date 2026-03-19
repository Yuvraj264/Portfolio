import React from "react";
import { BoxReveal } from "../reveal-animations";
import { cn } from "@/lib/utils";
import { config } from "@/data/config";

const AboutSection = () => {
  return (
    <section id="about" className="w-full py-24 px-4 flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto w-full">
        <div className="flex justify-center mb-12">
          <BoxReveal width="100%">
            <h2
              className={cn(
                "bg-clip-text text-4xl text-center text-transparent md:text-7xl font-bold",
                "bg-gradient-to-b from-black/80 to-black/50",
                "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50 "
              )}
            >
              ABOUT ME
            </h2>
          </BoxReveal>
        </div>

        <div className="space-y-6 text-lg text-neutral-800 dark:text-neutral-200 leading-relaxed max-w-3xl mx-auto bg-white/50 dark:bg-black/40 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-neutral-200 dark:border-white/10 shadow-xl relative overflow-hidden">
          {/* Subtle gradient overlay to enhance readability further */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 dark:to-black/60 pointer-events-none" />
          
          <BoxReveal width="100%" delay={0.2}>
            <p className="relative z-10">
              Hi, I'm <span className="font-bold text-black dark:text-white">{config.author}</span>. I'm a passionate Full Stack Developer and AI Enthusiast dedicated to building innovative, highly performant, and user-centric applications. With a strong foundation in modern web technologies and systems programming, I enjoy tackling complex challenges and creating elegant solutions.
            </p>
          </BoxReveal>
          <BoxReveal width="100%" delay={0.4}>
            <p className="relative z-10">
              My expertise spans across scalable backend architectures, interactive frontend experiences, and integrating AI-driven insights into production environments. When I'm not coding, I'm constantly exploring new technologies, refining my design aesthetics, and looking for ways to push the boundaries of what's possible on the web.
            </p>
          </BoxReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
