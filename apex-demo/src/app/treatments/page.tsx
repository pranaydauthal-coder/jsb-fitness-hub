"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Activity, ShieldCheck, Smile, Droplet, Star } from "lucide-react";

// Premium Apple-style easing curve
const smoothEase = [0.16, 1, 0.3, 1] as const;

// Detailed data required for the expansion effect
const generalServices = [
  {
    title: "Cleaning & Polishing",
    icon: Sparkles,
    desc: "Ultrasonic scaling safely removes calcified plaque, followed by a high-gloss polish to restore your teeth's natural defense and brilliance. Essential for long-term gum health."
  },
  {
    title: "Painless Extraction",
    icon: Activity,
    desc: "Complex extractions, including impacted wisdom teeth, performed using advanced local anesthesia and minimally invasive techniques to ensure rapid recovery and zero discomfort."
  },
  {
    title: "Root Canal Therapy",
    icon: ShieldCheck,
    desc: "Save your natural tooth. We carefully remove infected pulp, sterilize the root network, and seal the tooth to eliminate pain permanently and prevent further infection."
  },
  {
    title: "Paediatric Dentistry",
    icon: Smile,
    desc: "A welcoming, fear-free environment tailored for children. We focus on preventative care, gentle treatments, and educating young minds on lifelong oral hygiene habits."
  },
  {
    title: "Crowns & Bridges",
    icon: ShieldCheck,
    desc: "High-quality, durable prosthetics crafted from premium materials. Designed to seamlessly match your natural bite and restore full chewing function and aesthetic balance."
  },
];

const cosmeticServices = [
  {
    title: "Teeth Whitening",
    icon: Droplet,
    desc: "Professional clinical whitening that safely lifts years of deep stains in a single visit. We use formulated gels that minimize sensitivity while maximizing brightness."
  },
  {
    title: "Smile Design & Veneers",
    icon: Star,
    desc: "Custom-made, ultra-thin porcelain shells meticulously bonded to your teeth to flawlessly correct chips, gaps, and discoloration for a Hollywood-grade smile."
  },
  {
    title: "Porcelain Crowns",
    icon: ShieldCheck,
    desc: "Metal-free, tooth-colored caps that restore both structural strength and visual appeal. They blend invisibly with your surrounding teeth for a natural finish."
  },
  {
    title: "Braces & Aligners",
    icon: Activity,
    desc: "Modern orthodontic solutions, including clear aligners, to straighten crooked teeth and correct bite issues discreetly without the traditional heavy metal look."
  },
  {
    title: "Dental Implants",
    icon: Sparkles,
    desc: "The gold standard for tooth replacement. Permanent titanium anchors integrate with your jawbone, supporting custom crowns that look, feel, and function exactly like real teeth."
  },
];

// Interactive Card Component
function TreatmentCard({ svc, index }: { svc: any, index: number }) {
  const cardRef = useRef(null);
  // Triggers expansion when the card enters the middle 30% of the screen (perfect for mobile scroll tracking)
  const isInView = useInView(cardRef, { margin: "-35% 0px -35% 0px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: smoothEase, delay: index * 0.1 }}
      className={`relative h-[420px] w-full rounded-[2.5rem] p-8 md:p-10 overflow-hidden bg-white border border-slate-200/60 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-default
        ${isInView ? 'shadow-[0_8px_30px_rgb(0,0,0,0.06)] border-blue-200 scale-[1.02]' : 'shadow-sm scale-100'}
        hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-blue-200 hover:scale-[1.02] group`}
    >
      {/* Background Ambient Glow on Hover/Active */}
      <div className={`absolute inset-0 bg-gradient-to-br from-blue-50/60 to-transparent transition-opacity duration-700
        ${isInView ? 'opacity-100' : 'opacity-0'} group-hover:opacity-100`} />

      {/* Content Wrapper (Slides up to make room for text) */}
      <div className={`relative h-full flex flex-col justify-end z-10 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
        ${isInView ? '-translate-y-2' : 'translate-y-8'} group-hover:-translate-y-2`}>

        {/* Icon Animation */}
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-auto transition-all duration-700 border
          ${isInView ? 'bg-blue-600 text-white border-blue-500 scale-110 shadow-lg' : 'bg-slate-50 text-blue-600 border-slate-100 scale-100'}
          group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 group-hover:scale-110 group-hover:shadow-lg`}>
          <svc.icon size={28} strokeWidth={1.5} />
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 tracking-tight">{svc.title}</h3>

        {/* Hidden Expanding Text via CSS Grid interpolation */}
        <div className={`grid transition-[grid-template-rows] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${isInView ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'} group-hover:grid-rows-[1fr]`}>
          <div className="overflow-hidden">
            <p className={`pt-4 text-slate-500 font-medium leading-relaxed transition-opacity duration-700 delay-100
              ${isInView ? 'opacity-100' : 'opacity-0'} group-hover:opacity-100`}>
              {svc.desc}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function TreatmentsPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] font-sans text-slate-900 overflow-x-hidden selection:bg-blue-200">
      <Navbar />
      
      {/* 1. EDITORIAL HEADER */}
      <section className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] max-w-[800px] h-[500px] bg-gradient-to-b from-blue-100/50 to-transparent blur-[100px] rounded-full pointer-events-none -z-10" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: smoothEase }}
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-blue-600 mb-6 block">Our Expertise</span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-8 text-slate-900 leading-[1.05]">
            Comprehensive <br />
            <span className="text-slate-400 italic font-light">Dental Care.</span>
          </h1>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light text-balance">
            Every procedure is executed with strict adherence to advanced sterilization protocols, utilizing only the finest materials available in modern dentistry.
          </p>
        </motion.div>
      </section>

      {/* 2. GENERAL DENTISTRY */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-6 mb-12">
          <span className="text-blue-500 font-mono text-sm tracking-widest hidden md:block">01 /</span>
          <h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight">General & Surgical</h2>
          <div className="h-[1px] bg-slate-200 flex-grow ml-4" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {generalServices.map((svc, i) => (
            <TreatmentCard key={i} svc={svc} index={i} />
          ))}
        </div>
      </section>

      {/* 3. COSMETIC DENTISTRY */}
      <section className="py-16 px-6 max-w-7xl mx-auto mb-20">
        <div className="flex items-center gap-6 mb-12">
          <span className="text-blue-500 font-mono text-sm tracking-widest hidden md:block">02 /</span>
          <h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight">Cosmetic & Restoration</h2>
          <div className="h-[1px] bg-slate-200 flex-grow ml-4" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cosmeticServices.map((svc, i) => (
            <TreatmentCard key={i} svc={svc} index={i} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}