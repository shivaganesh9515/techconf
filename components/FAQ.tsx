"use client";

import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Are meals included in the ticket?",
    answer: "Yes! We provide breakfast, lunch, and unlimited coffee throughout the conference. There's also a networking dinner on the first evening.",
  },
  {
    question: "Can I watch the sessions online?",
    answer: "Absolutely. We offer a digital-only pass that gives you access to the livestreams of all main stage talks and select workshops.",
  },
  {
    question: "Is there a student discount?",
    answer: "Yes, we offer 50% off for currently enrolled students. Please contact support@techconf.io with your valid student ID to receive a code.",
  },
];

export default function FAQ() {
  return (
    <section className="py-24 bg-[#050505] border-t border-white/5">
      <div className="max-w-[800px] mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group bg-[#111] rounded-2xl overflow-hidden border border-white/5"
            >
              <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                <span className="font-bold text-lg">{faq.question}</span>
                <ChevronDown
                  size={18}
                  className="text-gray-500 transition-transform group-open:rotate-180"
                />
              </summary>
              <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}