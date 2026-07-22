"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RevealMotion from "./RevealMotion";

const day1Items = [
  {
    time: "09:00 AM",
    title: "Keynote: The Future of React",
    speaker: "Main Stage • Anna Dean",
    hoverColor: "group-hover:text-card-pink",
  },
  {
    time: "11:30 AM",
    title: "AI in Production Environments",
    speaker: "Tech Hall A • Jim Brickton",
    hoverColor: "group-hover:text-card-yellow",
  },
  {
    time: "02:00 PM",
    title: "Scalable Data Architectures",
    speaker: "Workshop Room • Chris Mezy",
    hoverColor: "group-hover:text-card-blue",
  },
];

const day2Items = [
  {
    time: "10:00 AM",
    title: "Serverless Architecture Deep Dive",
    speaker: "Main Stage • Leslie Schnider",
    hoverColor: "group-hover:text-card-beige",
  },
  {
    time: "01:00 PM",
    title: "Building Accessible UI",
    speaker: "Workshop Hall B • Sarah Jones",
    hoverColor: "group-hover:text-card-pink",
  },
  {
    time: "04:30 PM",
    title: "Closing Ceremony & Networking",
    speaker: "Rooftop Lounge",
    hoverColor: "group-hover:text-card-yellow",
  },
];

function ScheduleItem({
  item,
  index,
}: {
  item: (typeof day1Items)[0];
  index: number;
}) {
  return (
    <RevealMotion delay={index * 0.08}>
      <div className="group relative bg-[#111] hover:bg-[#161616] p-8 rounded-2xl transition-all border border-white/5 flex flex-col md:flex-row gap-6 md:items-center">
        <div className="md:w-32 text-gray-400 font-mono text-sm">
          {item.time}
        </div>
        <div className="flex-1">
          <h3
            className={`text-xl font-bold mb-1 transition-colors ${item.hoverColor}`}
          >
            {item.title}
          </h3>
          <p className="text-gray-500 text-sm">{item.speaker}</p>
        </div>
        <div className="md:w-32 flex justify-end">
          <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition">
            <i className="fa-solid fa-arrow-right -rotate-45 group-hover:rotate-0 transition-transform"></i>
          </span>
        </div>
      </div>
    </RevealMotion>
  );
}

export default function ScheduleSection() {
  const [activeDay, setActiveDay] = useState<1 | 2>(1);

  return (
    <section
      id="schedule"
      className="py-24 bg-[#0a0a0a]"
    >
      <div className="max-w-[1000px] mx-auto px-6">
        <RevealMotion className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Event Schedule
            </h2>
            <p className="text-gray-400">
              Two days of intensive learning and networking.
            </p>
          </div>
          <div className="flex gap-4 mt-6 md:mt-0">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveDay(1)}
              className={
                activeDay === 1
                  ? "bg-white text-black px-6 py-2 rounded-full font-bold text-sm transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                  : "border border-white/20 text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-white/10 transition"
              }
            >
              Day 1
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveDay(2)}
              className={
                activeDay === 2
                  ? "bg-white text-black px-6 py-2 rounded-full font-bold text-sm transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                  : "border border-white/20 text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-white/10 transition"
              }
            >
              Day 2
            </motion.button>
          </div>
        </RevealMotion>

        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDay}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {(activeDay === 1 ? day1Items : day2Items).map((item, i) => (
                <ScheduleItem key={item.title} item={item} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
