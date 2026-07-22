"use client";

import RevealMotion from "./RevealMotion";

export default function HeroSection() {
  return (
    <section className="pt-20 pb-10 md:pt-24 md:pb-16 px-6 max-w-[1400px] mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 mb-12 items-start">
        {/* Hero Heading */}
        <RevealMotion>
          <h1 className="text-4xl md:text-6xl lg:text-[4rem] font-bold leading-[0.9] tracking-tighter uppercase">
            The Magic Minds{" "}
            <br />
            <span className="font-light text-gray-300">You&apos;ve Been</span>{" "}
            <br />
            <span className="font-light text-gray-300">Waiting For</span>
          </h1>
        </RevealMotion>

        {/* Hero Description & CTA */}
        <RevealMotion delay={0.15} className="lg:pt-2 max-w-lg lg:justify-self-end">
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Why waste time watching generic tutorials? Connect with the industry
            leaders, attend live workshops, and find your next breakthrough. We
            bring the experts to you. No more waiting.
          </p>
          <a
            href="#schedule"
            className="inline-block bg-white text-black font-bold text-sm px-8 py-4 rounded-full hover:scale-105 transition-transform uppercase tracking-wide"
          >
            View Schedule
          </a>
        </RevealMotion>
      </div>
    </section>
  );
}
