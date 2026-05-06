import React from "react";
import { HiEnvelope, HiPhone, HiMapPin } from "react-icons/hi2";

const Contact = () => {
  return (
    <section className="py-16 max-w-7xl mx-auto px-6" id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="gsap-reveal">
          <span className="text-primary font-label mb-2 block uppercase">
            Collaboration
          </span>
          <h2 className="font-h2 text-4xl text-on-surface mb-6">
            Get in touch today
          </h2>
          <p className="text-lg text-on-surface-variant mb-12">
            I&apos;m currently available for freelance work and full-time positions.
            Let&apos;s discuss how we can build something amazing together.
          </p>
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary-container/10 rounded-lg">
                <HiEnvelope className="text-primary text-xl" />
              </div>
              <div>
                <h4 className="font-bold">Email Me</h4>
                <p className="text-on-surface-variant">rknayemkhan@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary-container/10 rounded-lg">
                <HiPhone className="text-primary text-xl" />
              </div>
              <div>
                <h4 className="font-bold">Call Me</h4>
                <p className="text-on-surface-variant"> +8801631-802482 </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary-container/10 rounded-lg">
                <HiMapPin className="text-primary text-xl" />
              </div>
              <div>
                <h4 className="font-bold">Location</h4>
                <p className="text-on-surface-variant">353-East Kazipara, Kafrul, Dhaka-1216.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="glass-card p-10 rounded-xl">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-label mb-2 uppercase text-on-surface-variant">
                  Full Name
                </label>
                <input
                  className="w-full bg-surface-container border border-outline-variant rounded-xl p-3 focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all"
                  placeholder="John Doe"
                  type="text"
                />
              </div>
              <div>
                <label className="block text-xs font-label mb-2 uppercase text-on-surface-variant">
                  Email Address
                </label>
                <input
                  className="w-full bg-surface-container border border-outline-variant rounded-xl p-3 focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all"
                  placeholder="john@example.com"
                  type="email"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-label mb-2 uppercase text-on-surface-variant">
                  Phone Number
                </label>
                <input
                  className="w-full bg-surface-container border border-outline-variant rounded-xl p-3 focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all"
                  placeholder="+123 456 789"
                  type="tel"
                />
              </div>
              <div>
                <label className="block text-xs font-label mb-2 uppercase text-on-surface-variant">
                  Company (Optional)
                </label>
                <input
                  className="w-full bg-surface-container border border-outline-variant rounded-xl p-3 focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all"
                  placeholder="Acme Inc."
                  type="text"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-label mb-2 uppercase text-on-surface-variant">
                Your Message
              </label>
              <textarea
                className="w-full bg-surface-container border border-outline-variant rounded-xl p-3 focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all"
                placeholder="Tell me about your project..."
                rows={4}
              ></textarea>
            </div>
            <button
              className="w-full bg-primary-container text-on-primary-container py-4 rounded-xl font-bold glow-accent transition-all"
              type="submit"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
