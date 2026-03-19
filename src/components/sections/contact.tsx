"use client";

import React from "react";
import ContactForm from "../ContactForm";
import { BoxReveal } from "../reveal-animations";
import { cn } from "@/lib/utils";

const ContactSection = () => {
  return (
    <section id="contact" className="w-full py-24 px-4 min-h-screen flex flex-col items-center justify-center">
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
              CONTACT ME
            </h2>
          </BoxReveal>
        </div>
        
        <BoxReveal width="100%" delay={0.2}>
            <p className="text-center text-neutral-600 dark:text-neutral-400 mb-12 max-w-2xl mx-auto text-lg">
                Have a project in mind or just want to say hi? Feel free to reach out to me!
            </p>
        </BoxReveal>

        <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white dark:bg-zinc-950 p-8 rounded-lg border border-neutral-200 dark:border-zinc-800 shadow-xl">
                <ContactForm />
            </div>
        </div>
        
        <div className="mt-16 flex flex-col items-center gap-4">
            <p className="text-neutral-500 dark:text-neutral-500 text-sm">
                Or reach out directly at
            </p>
            <a 
                href="mailto:yuvrajacademics@gmail.com" 
                className="text-xl md:text-2xl font-mono hover:text-violet-500 transition-colors underline decoration-dotted"
            >
                yuvrajacademics@gmail.com
            </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
