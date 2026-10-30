"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <section id="memberships" className="py-24 px-6 max-w-7xl mx-auto border-t border-neutral-900">
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4 text-white">No Insurance? No Problem.</h2>
        <p className="text-neutral-400 text-lg font-light">Join our in-house membership plan for transparent, predictable dental care without the corporate red tape.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            name: "Essential Care",
            price: "$29",
            period: "/mo",
            desc: "Perfect for maintaining a healthy smile.",
            features: ["2 Professional Cleanings", "1-2 Doctor Exams", "Routine X-Rays", "15% off other treatments"],
            highlight: false,
          },
          {
            name: "Complete Wellness",
            price: "$49",
            period: "/mo",
            desc: "Enhanced care for those needing periodontal support.",
            features: ["3-4 Periodontal Cleanings", "2 Doctor Exams", "Advanced 3D Imaging", "20% off other treatments"],
            highlight: true,
          },
          {
            name: "Child/Teen",
            price: "$24",
            period: "/mo",
            desc: "Set them up for a lifetime of oral health.",
            features: ["2 Gentle Cleanings", "Fluoride Treatments", "Orthodontic Evaluation", "Free emergency exams"],
            highlight: false,
          },
        ].map((tier, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`relative p-8 rounded-3xl border flex flex-col ${
              tier.highlight 
                ? "bg-neutral-900 border-blue-500/30" 
                : "bg-neutral-900/30 border-neutral-800"
            }`}
          >
            {tier.highlight && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white text-xs font-semibold px-4 py-1.5 rounded-full">
                Most Popular
              </div>
            )}
            <h3 className="text-xl font-medium mb-2 text-white">{tier.name}</h3>
            <p className="text-sm text-neutral-400 mb-6 min-h-[40px] font-light">{tier.desc}</p>
            <div className="mb-8">
              <span className="text-4xl font-semibold text-white">{tier.price}</span>
              <span className="text-neutral-500">{tier.period}</span>
            </div>
            
            <ul className="space-y-4 flex-grow mb-8">
              {tier.features.map((feat, idx) => (
                <li key={idx} className="flex items-center gap-3 text-neutral-300 font-light">
                  <Check size={18} className="text-blue-400 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <button className={`w-full py-3.5 rounded-full text-sm font-medium transition-colors ${
              tier.highlight 
                ? "bg-blue-500 text-white hover:bg-blue-600" 
                : "bg-white text-black hover:bg-neutral-200"
            }`}>
              View Plan Details
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}