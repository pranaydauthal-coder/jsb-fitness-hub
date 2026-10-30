"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="practice" className="py-24 px-6 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-slate-900">
            Meet <span className="text-blue-600">Dr. Kriti Banerjee.</span>
          </h2>
          <div className="space-y-6 text-slate-600 text-lg leading-relaxed mb-8">
            <p>
              Dr. Kriti founded this studio on a simple principle: dentistry should not be scary. By combining profound clinical expertise with a deeply empathetic approach, she ensures every patient feels like a friend rather than a clinical subject.
            </p>
            <p>
              She and her panel of specialists handle everything from routine pediatric dentistry to complex smile designs and oral surgery. Our commitment to you is transparent pricing, zero hidden fees, and an environment where you are always in control of your treatment.
            </p>
          </div>
          
          <ul className="space-y-4">
            {["Strict Sterilization Protocols", "Premium Dental Materials", "Associated Specialist Panel", "Anxiety-Free Environment"].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                <CheckCircle2 size={20} className="text-blue-600 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <div className="grid grid-cols-2 gap-6">
          {[
            { metric: "100%", label: "Sterilized Environment" },
            { metric: "5-Star", label: "Patient Satisfaction" },
            { metric: "All", label: "Ages Treated" },
            { metric: "Zero", label: "Hidden Costs" },
          ].map((pt, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm flex flex-col justify-center items-center text-center hover:shadow-md transition-shadow">
              <span className="text-3xl font-bold text-slate-900 mb-2">{pt.metric}</span>
              <span className="text-sm text-slate-500 font-medium">{pt.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}