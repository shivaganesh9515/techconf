"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#050505]/90 backdrop-blur-md border-b border-white/5">
      <nav className="max-w-[1400px] mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
        {/* Left Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <a href="#speakers" className="hover:text-white transition-colors">Speakers</a>
          <a href="#schedule" className="hover:text-white transition-colors">Schedule</a>
          <a href="#costs" className="hover:text-white transition-colors">Costs</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-xl"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Logo */}
        <div className="text-lg md:text-2xl font-bold tracking-tight absolute left-1/2 -translate-x-1/2 whitespace-nowrap">
          techconf.io
        </div>

        {/* CTA */}
        <div>
          <a
            href="#register"
            className="text-[10px] md:text-sm font-bold border border-white/30 rounded-full px-4 py-2 md:px-6 md:py-3 hover:bg-white hover:text-black transition-all uppercase tracking-wide whitespace-nowrap"
          >
            Get Tickets
          </a>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-[#050505] z-40 flex flex-col items-center justify-center gap-8">
          <a href="#speakers" className="text-2xl font-bold hover:text-gray-400 transition-colors" onClick={() => setMobileOpen(false)}>Speakers</a>
          <a href="#schedule" className="text-2xl font-bold hover:text-gray-400 transition-colors" onClick={() => setMobileOpen(false)}>Schedule</a>
          <a href="#costs" className="text-2xl font-bold hover:text-gray-400 transition-colors" onClick={() => setMobileOpen(false)}>Costs</a>
          <a href="#register" className="bg-white text-black px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wide" onClick={() => setMobileOpen(false)}>Get Tickets</a>
        </div>
      )}
    </header>
  );
}