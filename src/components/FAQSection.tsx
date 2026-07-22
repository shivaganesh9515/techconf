"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RevealMotion from "./RevealMotion";

const faqs = [
  {
    question: "Are meals included in the ticket?",
    answer:
      "Yes! We provide breakfast, lunch, and unlimited coffee throughout the conference. There's also a networking dinner on the first evening.",
  },
  {
    question: "Can I watch the sessions online?",
    answer:
      "Absolutely. We offer a digital-only pass that gives you access to the livestreams of all main stage talks and select workshops.",
  },
  {
    question: "Is there a student discount?",
    answer:
      "Yes, we offer 50% off for currently enrolled students. Please contact support@techconf.io with your valid student ID to receive a code.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-[#050505] border-t border-white/5">
      <div className="max-w-[800px] mx-auto px-6">
        <RevealMotion>
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            Frequently Asked Questions
          </h2>
        </RevealMotion>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <RevealMotion key={i} delay={i * 0.1}>
              <div
                className="bg-[#111] rounded-2xl overflow-hidden border border-white/5 cursor-pointer"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <div className="flex justify-between items-center p-6">
                  <span className="font-bold text-lg">{faq.question}</span>
                  <motion.span
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <i className="fa-solid fa-chevron-down text-gray-500"></i>
                  </motion.span>
                </div>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </RevealMotion>
          ))}
        </div>
      </div>
    </section>
  );
}
