"use client";

const logos = [
  { name: "Stripe", icon: "fa-brands fa-stripe" },
  { name: "GitHub", icon: "fa-brands fa-github" },
  { name: "AWS", icon: "fa-brands fa-aws" },
  { name: "Google", icon: "fa-brands fa-google" },
  { name: "Airbnb", icon: "fa-brands fa-airbnb" },
];

export default function TrustedBy() {
  return (
    <section className="py-12 border-y border-white/5 bg-[#080808]">
      <div className="max-w-[1400px] mx-auto px-6 text-center">
        <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-8">
          Trusted by engineering teams at
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center gap-2 text-xl font-bold font-sans text-white">
              <i className={`${logo.icon} text-3xl`}></i>
              {logo.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}