import React from "react";

const Testimonials = () => {
  return (
    <section className="bg-surface-container-low py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 gsap-reveal">
          <span className="text-primary font-label mb-2 block uppercase">
            Client Success
          </span>
          <h2 className="font-h2 text-4xl text-on-surface">Testimonials</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-12 rounded-xl relative">
            <span className="material-symbols-outlined text-6xl text-primary/10 absolute top-8 left-8">
              format_quote
            </span>
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className="material-symbols-outlined text-primary-container"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
              ))}
            </div>
            <p className="font-h3 text-xl italic text-on-surface mb-8 leading-relaxed">
              &quot;Sajid handled both frontend and backend development for our
              project with exceptional skill. His ability to translate complex
              requirements into a functional, beautiful product was impressive.
              We&apos;ve seen a 40% increase in user engagement since the launch.&quot;
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-container/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">
                  person
                </span>
              </div>
              <div>
                <h4 className="font-bold text-on-surface">Wambui Muli</h4>
                <p className="text-sm text-on-surface-variant">
                  CTO, TechGrowth Africa
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
