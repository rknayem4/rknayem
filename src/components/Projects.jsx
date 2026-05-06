import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HiArrowRight, HiArrowTopRightOnSquare, HiCommandLine } from "react-icons/hi2";

const projects = [
  {
    title: "MERN Todo App",
    desc: "A full-featured task management application with user authentication, real-time updates, and categorized task lists.",
    image: "/project-todo.png",
    tags: ["REACT", "NODE.JS", "MONGODB"],
  },
  {
    title: "E-Commerce Demo",
    desc: "Advanced e-commerce storefront with complex state management, payment gateway integration, and admin dashboard.",
    image: "/project-ecommerce.png",
    tags: ["REDUX", "STRIPE", "EXPRESS"],
  },
];

const Projects = () => {
  return (
    <section className="py-16 max-w-7xl mx-auto px-6" id="projects">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 gsap-reveal">
        <div>
          <span className="text-primary font-label mb-2 block uppercase">
            Showcase
          </span>
          <h2 className="font-h2 text-4xl text-on-surface">Recent Projects</h2>
        </div>
        <button className="text-primary-container font-bold flex items-center gap-2 hover:gap-4 transition-all">
          View All Projects <HiArrowRight />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 100, rotateX: 10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 1, 
              delay: index * 0.2,
              ease: [0.16, 1, 0.3, 1] 
            }}
            className="glass-card rounded-2xl overflow-hidden group perspective-1000"
          >
            <div className="overflow-hidden h-72 relative">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="p-8">
              <h3 className="font-h3 text-3xl text-on-surface mb-4">
                {project.title}
              </h3>
              <p className="text-body-lg text-on-surface-variant mb-6 line-clamp-2">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-primary/10 text-primary text-xs font-bold px-4 py-1.5 rounded-full border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <button className="bg-primary-container text-on-primary-container px-8 py-3 rounded-xl text-sm font-bold flex items-center gap-2 hover:shadow-lg hover:shadow-primary/20 transition-all">
                  <HiArrowTopRightOnSquare className="text-lg" />
                  Live Demo
                </button>
                <button className="border border-outline-variant text-on-surface-variant px-8 py-3 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-on-surface/5 transition-all">
                  <HiCommandLine className="text-lg" />
                  Source
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
