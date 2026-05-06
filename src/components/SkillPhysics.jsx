"use client";

import React, { useEffect, useRef } from "react";
import Matter from "matter-js";

const SkillPhysics = () => {
  const sceneRef = useRef(null);
  const engineRef = useRef(Matter.Engine.create());

  const skills = [
    { name: "Tailwind CSS", color: "#06B6D4" },
    { name: "JavaScript", color: "#F7DF1E" },
    { name: "React.js", color: "#61DAFB" },
    { name: "Node.js", color: "#339933" },
    { name: "MongoDB", color: "#47A248" },
    { name: "HTML5", color: "#E34F26" },
    { name: "Next.js", color: "#ffffff" },
    { name: "Express.js", color: "#828282" },
    { name: "GSAP", color: "#88CE02" },
    { name: "Framer Motion", color: "#0055FF" },
    { name: "Matter.js", color: "#EF4444" },
    { name: "Git", color: "#F05032" }
  ];

  useEffect(() => {
    if (!sceneRef.current) return;

    const initPhysics = () => {
      const container = sceneRef.current;
      const width = container.clientWidth;
      const height = container.clientHeight || 600;

      const engine = Matter.Engine.create();
      const { world } = engine;
      
      const render = Matter.Render.create({
        element: container,
        engine: engine,
        options: {
          width: width,
          height: height,
          wireframes: false,
          background: "transparent",
        },
      });

      // Boundaries
      const ground = Matter.Bodies.rectangle(width / 2, height + 30, width, 60, { isStatic: true });
      const leftWall = Matter.Bodies.rectangle(-30, height / 2, 60, height, { isStatic: true });
      const rightWall = Matter.Bodies.rectangle(width + 30, height / 2, 60, height, { isStatic: true });
      const ceiling = Matter.Bodies.rectangle(width / 2, -30, width, 60, { isStatic: true });

      // Skill bodies
      const skillBodies = skills.map((skill, i) => {
        const x = Math.random() * width;
        const y = Math.random() * -1000;
        const pillWidth = skill.name.length * 12 + 40;
        
        return Matter.Bodies.rectangle(x, y, pillWidth, 48, {
          chamfer: { radius: 24 },
          restitution: 0.5,
          friction: 0.1,
          render: {
            fillStyle: "#1a2a42",
            strokeStyle: "#2792ff",
            lineWidth: 2,
          }
        });
      });

      const mouse = Matter.Mouse.create(render.canvas);
      const mouseConstraint = Matter.MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: { stiffness: 0.1, render: { visible: false } },
      });

      // Allow scrolling on the canvas
      mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
      mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);

      Matter.World.add(world, [ground, leftWall, rightWall, ceiling, ...skillBodies, mouseConstraint]);

      Matter.Events.on(render, "afterRender", () => {
        const context = render.context;
        context.font = "600 16px Space Grotesk";
        context.textAlign = "center";
        context.textBaseline = "middle";

        skillBodies.forEach((body, i) => {
          const { x, y } = body.position;
          const angle = body.angle;
          context.save();
          context.translate(x, y);
          context.rotate(angle);
          context.shadowBlur = 15;
          context.shadowColor = "rgba(39, 146, 255, 0.3)";
          context.strokeStyle = skills[i].color + "44"; // Subtler border
          context.lineWidth = 2;
          context.stroke();
          context.fillStyle = skills[i].color;
          context.fillText(skills[i].name, 0, 0);
          context.restore();
        });
      });

      const runner = Matter.Runner.create();
      Matter.Runner.run(runner, engine);
      Matter.Render.run(render);

      return { engine, render, runner, world };
    };

    // Small timeout to ensure container is ready
    const timeoutId = setTimeout(() => {
      const physics = initPhysics();
      
      // Cleanup
      return () => {
        if (physics) {
          Matter.Render.stop(physics.render);
          Matter.Engine.clear(physics.engine);
          Matter.Runner.stop(physics.runner);
          Matter.World.clear(physics.world);
          physics.render.canvas.remove();
        }
      };
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="w-full h-[600px] glass-card rounded-2xl overflow-hidden relative">
      <div ref={sceneRef} className="w-full h-full" />
      <div className="absolute top-4 left-6 pointer-events-none">
        <span className="text-primary/50 text-[10px] font-label uppercase tracking-widest">
          Interactive Gravity Field
        </span>
      </div>
    </div>
  );
};

export default SkillPhysics;
