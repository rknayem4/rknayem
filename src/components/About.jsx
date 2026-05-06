import React from "react";
import Image from "next/image";
import { HiArrowDownTray } from "react-icons/hi2";

const About = () => {
  return (
    <section className="bg-surface-container-low py-16" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="glass-card p-4 rounded-xl rotate-3 hover:rotate-0 transition-transform">
              <Image
                src="/workspace.png"
                alt="Work setup"
                width={600}
                height={400}
                className="rounded-lg w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <span className="text-primary font-label mb-2 block uppercase">
              About Me
            </span>
            <h2 className="font-h2 text-4xl text-on-surface mb-6">
              Engineering Experiences with Modern Tech
            </h2>
            <p className="font-body-md text-on-surface-variant mb-6">
              I am a passionate MERN Stack Developer with a strong foundation in
              building scalable web applications. My journey started with a
              fascination for how data flows through the internet, which led me
              to master the entire stack from database architecture to frontend
              animations.
            </p>
            <p className="font-body-md text-on-surface-variant mb-8">
              I specialize in creating pixel-perfect interfaces that don&apos;t
              compromise on performance. Whether it&apos;s a real-time dashboard or a
              complex e-commerce engine, I prioritize code quality and
              maintainability.
            </p>
            <button className="bg-secondary-container text-on-secondary-container px-8 py-3 rounded-xl font-bold flex items-center gap-2 glow-accent transition-all">
              <HiArrowDownTray />
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
