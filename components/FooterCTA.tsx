"use client";

import { ArrowRight } from "lucide-react";

export default function FooterCTA() {
  return (
    <footer id="costs" className="bg-white text-black py-20 px-6">
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 uppercase">
            Don&apos;t Miss<br />Out.
          </h2>
          <p className="text-lg text-gray-600 max-w-md mb-8">
            Early bird tickets are selling out fast. Secure your spot at the world&apos;s most innovative tech conference today.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#register"
              className="bg-black text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wide hover:bg-gray-800 transition"
            >
              Get Tickets - $299
            </a>
            <a
              href="#"
              className="border border-black px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wide hover:bg-gray-100 transition"
            >
              Download Brief
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-100 p-8 rounded-3xl">
            <div className="text-4xl font-bold mb-2">25+</div>
            <div className="text-sm font-medium opacity-60 uppercase">Speakers</div>
          </div>
          <div className="bg-gray-100 p-8 rounded-3xl">
            <div className="text-4xl font-bold mb-2">3</div>
            <div className="text-sm font-medium opacity-60 uppercase">Tracks</div>
          </div>
          <div className="bg-gray-100 p-8 rounded-3xl">
            <div className="text-4xl font-bold mb-2">100%</div>
            <div className="text-sm font-medium opacity-60 uppercase">Live Code</div>
          </div>
          <a
            href="#register"
            className="bg-black text-white p-8 rounded-3xl flex items-center justify-center hover:bg-neutral-800 transition cursor-pointer group"
          >
            <ArrowRight size={28} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
          </a>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto mt-20 pt-8 border-t border-gray-200 flex justify-between items-center text-sm font-medium text-gray-500">
        <div>© 2025 TechConf IO. All rights reserved.</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-black">Privacy</a>
          <a href="#" className="hover:text-black">Terms</a>
        </div>
      </div>
    </footer>
  );
}