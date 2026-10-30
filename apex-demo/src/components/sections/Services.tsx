"use client";

import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, HeartPulse, Activity, Droplet, ArrowRight } from "lucide-react";
import Link from "next/link";

const generalTreatments = [
  { title: "Cleaning & Polishing", desc: "Remove stubborn plaque and tartar buildup to prevent gum disease and restore your teeth's natural smooth feel.", icon: Sparkles },
  { title: "Painless Extraction", desc: "Expert removal of severely decayed teeth or impacted wisdom teeth with advanced local anesthesia.", icon: HeartPulse },
  { title: "Root Canal Therapy", desc: "Save your natural tooth. We carefully remove infected pulp and seal the tooth to eliminate pain completely.", icon: ShieldCheck },
];

const cosmeticTreatments = [
  { title: "Cosmetic Veneers", desc: "Custom-made, wafer-thin shells of tooth-colored porcelain designed to cover the front surface of teeth.", icon: Sparkles },
  { title: "Teeth Whitening", desc: "Professional clinical whitening that safely lifts years of deep stains in just a single appointment.", icon: Droplet },
  { title: "Dental Implants", desc: "The gold standard for tooth replacement. Permanent titanium anchors that look, feel, and function like real teeth.", icon: Activity },
];

export default function Services() {
  return (
    <section id="treatments" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-20 md:text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-slate-900">Comprehensive Dental Care</h2>
        <p className="text-slate-600 text-lg leading-relaxed">
          We maintain a panel of associated specialists to ensure that whether you need a routine checkup or complex oral surgery, you receive the highest standard of care without needing a referral.
        </p>
      </div>

      <div className="mb-16">
        <div className="flex items-center gap-4 mb-8">
          <h3 className="text-2xl font-bold text-slate-900">General & Surgical</h3>
          <div className="h-px bg-slate-200 flex-grow" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {generalTreatments.map((svc, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: i * 0.1, duration: 0.5 }} className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg hover:border-blue-200 transition-all group">
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <svc.icon size={24} strokeWidth={2} />
              </div>
              <h4 className="text-xl font-bold mb-3 text-slate-900">{svc.title}</h4>
              <p className="text-slate-600 leading-relaxed">{svc.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center gap-4 mb-8">
          <h3 className="text-2xl font-bold text-slate-900">Cosmetic & Restoration</h3>
          <div className="h-px bg-slate-200 flex-grow" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cosmeticTreatments.map((svc, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: i * 0.1, duration: 0.5 }} className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg hover:border-blue-200 transition-all group">
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <svc.icon size={24} strokeWidth={2} />
              </div>
              <h4 className="text-xl font-bold mb-3 text-slate-900">{svc.title}</h4>
              <p className="text-slate-600 leading-relaxed">{svc.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <Link href="/treatments" className="inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-700 transition-colors">
          View full list of treatments <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}