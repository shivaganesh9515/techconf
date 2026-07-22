"use client";

import { motion } from "framer-motion";
import RevealMotion from "./RevealMotion";

const stats = [
  { value: "25+", label: "Speakers" },
  { value: "3", label: "Tracks" },
  { value: "100%", label: "Live Code" },
];

export default function FooterSection() {
  return (
    <footer id="costs" className="bg-white text-black py-20 px-6">
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-12 items-center">
        <RevealMotion>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 uppercase">
            Don&apos;t Miss
            <br />
            Out.
          </h2>
          <p className="text-lg text-gray-600 max-w-md mb-8">
            Early bird tickets are selling out fast. Secure your spot at the
            world&apos;s most innovative tech conference today.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="bg-black text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wide hover:bg-gray-800 transition"
            >
              Get Tickets - $299
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="border border-black px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wide hover:bg-gray-100 transition"
            >
              Download Brief
            </motion.a>
          </div>
        </RevealMotion>

        <RevealMotion delay={0.15}>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-gray-100 p-8 rounded-3xl"
              >
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm font-medium opacity-60 uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#register"
              className="bg-black text-white p-8 rounded-3xl flex items-center justify-center hover:bg-neutral-800 transition cursor-pointer group"
            >
              <i className="fa-solid fa-arrow-right text-3xl -rotate-45 group-hover:rotate-0 transition-transform duration-300"></i>
            </motion.a>
          </div>
        </RevealMotion>
      </div>

      <RevealMotion delay={0.2}>
        <div className="max-w-[1400px] mx-auto mt-20 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium text-gray-500">
          <div>© 2025 TechConf IO. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-black transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-black transition-colors">
              Terms
            </a>
          </div>
        </div>
      </RevealMotion>
    </footer>
  );
}
