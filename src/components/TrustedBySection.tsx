"use client";

import RevealMotion from "./RevealMotion";

const brands = [
  { icon: "fa-brands fa-stripe", name: "Stripe" },
  { icon: "fa-brands fa-github", name: "GitHub" },
  { icon: "fa-brands fa-aws", name: "AWS" },
  { icon: "fa-brands fa-google", name: "Google" },
  { icon: "fa-brands fa-airbnb", name: "Airbnb" },
];

export default function TrustedBySection() {
  return (
    <section className="py-12 border-y border-white/5 bg-[#080808]">
      <div className="max-w-[1400px] mx-auto px-6 text-center">
        <RevealMotion>
          <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-8">
            Trusted by engineering teams at
          </p>
        </RevealMotion>
        <RevealMotion delay={0.15}>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="flex items-center gap-2 text-xl font-bold font-sans text-white"
              >
                <i className={`${brand.icon} text-3xl`}></i> {brand.name}
              </div>
            ))}
          </div>
        </RevealMotion>
      </div>
    </section>
  );
}
