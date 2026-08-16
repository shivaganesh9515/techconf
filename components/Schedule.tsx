"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

const day1 = [
  {
    time: "09:00 AM",
    title: "Keynote: The Future of React",
    speaker: "Main Stage • Anna Dean",
    hoverColor: "group-hover:text-[#f7b5cd]",
  },
  {
    time: "11:30 AM",
    title: "AI in Production Environments",
    speaker: "Tech Hall A • Jim Brickton",
    hoverColor: "group-hover:text-[#fcd561]",
  },
  {
    time: "02:00 PM",
    title: "Scalable Data Architectures",
    speaker: "Workshop Room • Chris Mezy",
    hoverColor: "group-hover:text-[#dbe8ea]",
  },
];

const day2 = [
  {
    time: "10:00 AM",
    title: "Serverless Architecture Deep Dive",
    speaker: "Main Stage • Leslie Schnider",
    hoverColor: "group-hover:text-[#e6ddd6]",
  },
  {
    time: "01:00 PM",
    title: "Building Accessible UI",
    speaker: "Workshop Hall B • Sarah Jones",
    hoverColor: "group-hover:text-[#f7b5cd]",
  },
  {
    time: "04:30 PM",
    title: "Closing Ceremony & Networking",
    speaker: "Rooftop Lounge",
    hoverColor: "group-hover:text-[#fcd561]",
  },
];

export default function Schedule() {
  const [activeDay, setActiveDay] = useState<1 | 2>(1);
  const items = activeDay === 1 ? day1 : day2;

  return (
    <section id="schedule" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-[1000px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Event Schedule</h2>
            <p className="text-gray-400">Two days of intensive learning and networking.</p>
          </div>
          <div className="flex gap-4 mt-6 md:mt-0">
            <button
              onClick={() => setActiveDay(1)}
              className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${
                activeDay === 1
                  ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                  : "border border-white/20 text-white hover:bg-white/10"
              }`}
            >
              Day 1
            </button>
            <button
              onClick={() => setActiveDay(2)}
              className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${
                activeDay === 2
                  ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                  : "border border-white/20 text-white hover:bg-white/10"
              }`}
            >
              Day 2
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="group relative bg-[#111] hover:bg-[#161616] p-8 rounded-2xl transition-all border border-white/5 flex flex-col md:flex-row gap-6 md:items-center cursor-pointer"
            >
              <div className="md:w-32 text-gray-400 font-mono text-sm">{item.time}</div>
              <div className="flex-1">
                <h3 className={`text-xl font-bold mb-1 ${item.hoverColor} transition-colors`}>
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm">{item.speaker}</p>
              </div>
              <div className="md:w-32 flex justify-end">
                <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition">
                  <ArrowRight size={14} className="-rotate-45 group-hover:rotate-0 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}