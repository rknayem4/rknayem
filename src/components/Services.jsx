import React from "react";
import { motion } from "framer-motion";
import { 
  HiCommandLine,
  HiPaintBrush,
  HiCpuChip,
  HiCircleStack,
  HiLockClosed,
  HiShoppingBag,
  HiChartBar,
  HiBanknotes,
  HiArchiveBox,
  HiUserGroup
} from "react-icons/hi2";

const services = [
  {
    title: "Full-Stack Web Development",
    desc: "End-to-end scalable web applications using the MERN stack with robust architecture.",
    icon: HiCommandLine,
  },
  {
    title: "Frontend Development",
    desc: "Pixel-perfect, highly responsive UI/UX designs built with React and Tailwind CSS.",
    icon: HiPaintBrush,
  },
  {
    title: "Backend & API Development",
    desc: "High-performance RESTful APIs and secure server-side logic using Node.js and Express.",
    icon: HiCpuChip,
  },
  {
    title: "Database Design & Management",
    desc: "Optimized NoSQL and SQL database modeling for maximum speed and data integrity.",
    icon: HiCircleStack,
  },
  {
    title: "Authentication & Authorization",
    desc: "Secure multi-factor authentication and role-based access control (RBAC) systems.",
    icon: HiLockClosed,
  },
  {
    title: "E-Commerce Development",
    desc: "Custom online stores with secure payment integration and smooth checkout flows.",
    icon: HiShoppingBag,
  },
  {
    title: "ERP Development",
    desc: "Comprehensive Enterprise Resource Planning systems to streamline your business operations.",
    icon: HiChartBar,
  },
  {
    title: "Accounts Management Systems",
    desc: "Digital bookkeeping and automated financial reporting for transparent accounting.",
    icon: HiBanknotes,
  },
  {
    title: "Inventory Management Systems",
    desc: "Real-time stock tracking, automated reordering, and warehouse optimization tools.",
    icon: HiArchiveBox,
  },
  {
    title: "Employee Management Systems",
    desc: "HR portals for payroll, performance tracking, and attendance management.",
    icon: HiUserGroup,
  },
];

const Services = () => {
  return (
    <section className="bg-surface-container py-24" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 gsap-reveal">
          <span className="text-primary font-label mb-2 block uppercase">
            Expertise
          </span>
          <h2 className="font-h2 text-4xl text-on-surface">
            Services I Provide
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                ease: [0.215, 0.61, 0.355, 1]
              }}
              className="glass-card p-8 rounded-2xl hover:glow-accent transition-all border-l-4 border-l-primary-container group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <service.icon className="text-8xl" />
              </div>
              <div className="w-14 h-14 rounded-xl bg-primary-container/20 flex items-center justify-center mb-6 text-primary-container">
                <service.icon className="text-3xl" />
              </div>
              <h3 className="font-h3 text-2xl mb-4 text-on-surface leading-tight">{service.title}</h3>
              <p className="text-body-lg text-on-surface-variant leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
