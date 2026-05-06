import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import {
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiHtml5,
} from "react-icons/si";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Hero = () => {
  const containerRef = useRef(null);
  const profileRef = useRef(null);
  const iconsRef = useRef([]);

  const heroIcons = [
    { component: SiTailwindcss, color: "#06B6D4" },
    { component: SiJavascript, color: "#F7DF1E" },
    { component: SiReact, color: "#61DAFB" },
    { component: SiNodedotjs, color: "#339933" },
    { component: SiMongodb, color: "#47A248" },
    { component: SiHtml5, color: "#E34F26" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance Animation
      gsap.from(".hero-anim", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "expo.out",
      });

      // Satellite Orbit Animation (Outside Photo)
      iconsRef.current.forEach((icon, index) => {
        const angle = (index / iconsRef.current.length) * Math.PI * 2;
        const radiusX = 200; // Wider orbit
        const radiusY = 220; // Slightly taller orbit for 3D feel
        
        gsap.set(icon, {
          x: Math.cos(angle) * radiusX,
          y: Math.sin(angle) * radiusY,
        });

        // Continuous Orbit
        gsap.to(icon, {
          rotation: 360,
          duration: 25 + index * 5,
          repeat: -1,
          ease: "none",
        });

        // Floating Micro-movement
        gsap.to(icon, {
          y: "+=15",
          x: "+=15",
          duration: 2 + index,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      // Mouse Parallax for the whole group
      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 40;
        const yPos = (clientY / window.innerHeight - 0.5) * 40;

        gsap.to(".hero-visual-group", {
          x: xPos,
          y: yPos,
          duration: 1.5,
          ease: "power2.out",
        });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center max-w-7xl mx-auto px-6 py-16 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="z-10">
          <span className="text-primary font-label mb-4 block hero-anim">
            AVAILABLE FOR PROJECTS
          </span>
          <h1 className="font-h1 text-6xl md:text-8xl text-on-surface mb-6 hero-anim">
            Hi, I&apos;m <span className="text-primary-container">R.K.Nayem</span>
          </h1>
          <p className="text-3xl md:text-4xl font-h2 text-on-surface-variant mb-6 hero-anim">
            MERN Stack Developer
          </p>
          <p className="font-body-lg text-lg text-on-surface-variant mb-8 max-w-lg hero-anim">
            I build robust, scalable, and high-performance full-stack applications
            with a focus on modern user experiences and clean engineering
            practices.
          </p>
          <div className="flex flex-wrap gap-4 hero-anim">
            <button className="bg-primary-container text-on-primary-container px-8 py-3 rounded-xl font-bold text-lg glow-accent transition-all">
              View Projects
            </button>
            <button className="border border-primary-container text-primary-container px-8 py-3 rounded-xl font-bold text-lg hover:bg-primary-container/10 transition-all">
              Let&apos;s Collaborate
            </button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 mt-8 hero-anim">
            {[
              { icon: FaGithub, link: "https://github.com/rknayem4", color: "hover:text-white" },
              { icon: FaLinkedin, link: "https://www.linkedin.com/in/rknayem", color: "hover:text-[#0077B5]" },
              { icon: FaXTwitter, link: "https://x.com/rk_nayem4", color: "hover:text-[#1DA1F2]" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-on-surface-variant/60 ${social.color} transition-all hover:scale-110`}
              >
                <social.icon className="text-2xl" />
              </a>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center items-center hero-visual-group">
          {/* Orbiting Icons (Outside) */}
          {heroIcons.map((item, i) => (
            <div
              key={i}
              ref={(el) => (iconsRef.current[i] = el)}
              className="absolute p-4 glass-card rounded-2xl z-20 shadow-2xl border border-white/10"
            >
              <item.component 
                style={{ color: item.color }} 
                className="text-3xl md:text-4xl" 
              />
            </div>
          ))}

          {/* Profile Photo */}
          <div 
            ref={profileRef}
            className="relative p-2 rounded-full border-4 border-primary-container/30 bg-surface-container-low shadow-[0_0_60px_rgba(39,146,255,0.3)] z-10"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-surface-container-highest">
              <Image
                src="/profile.png"
                alt="Sajid Yaqub Profile"
                width={400}
                height={400}
                loading="eager"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Pulsing Aura */}
            <div className="absolute inset-0 -z-10 bg-primary/20 blur-3xl rounded-full scale-125 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
