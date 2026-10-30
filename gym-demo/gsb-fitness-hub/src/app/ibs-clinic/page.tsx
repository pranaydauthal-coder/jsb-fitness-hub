"use client";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { motion } from "framer-motion";

export default function IBSClinic() {
  return (
    <main className="min-h-screen bg-[#09090b] font-sans text-zinc-50 flex flex-col">
      <Navbar />
      
      <section className="relative pt-40 pb-32 px-6 border-b border-zinc-800/50">
        <div className="absolute inset-0 z-0">
           <img src="/15.jpg" alt="IBS Clinic" className="w-full h-full object-cover opacity-20" />
           <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] to-transparent" />
        </div>
        <div className="max-w-[1600px] mx-auto w-full relative z-10">
          <span className="text-[#d4af37] font-mono tracking-widest uppercase text-xs border border-[#d4af37]/30 px-3 py-1.5 backdrop-blur-md mb-6 inline-block">Holistic Healing</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">IBS Recovery <br /> <span className="text-[#d4af37]">Clinic.</span></h1>
          <p className="text-zinc-300 text-lg max-w-2xl leading-relaxed mb-8">A science-based, holistic approach to curing Irritable Bowel Syndrome through clinical nutrition, mental recalibration, and specialized lifestyle protocols.</p>
          <button className="bg-[#d4af37] text-zinc-950 px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors">Book Consultation</button>
        </div>
      </section>

      <section className="py-24 px-6 max-w-[1600px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="flex flex-col justify-center">
          <div className="w-10 h-[1px] bg-[#d4af37] mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Proven Patient Transformations</h2>
          <p className="text-zinc-400 leading-relaxed font-light mb-8">We don't just treat symptoms; we rebuild your gut microbiome from the ground up. Join over 8,000 patients who have successfully reclaimed their digestive health and their lives.</p>
          <ul className="space-y-4 text-sm font-light text-zinc-300 mb-8">
            <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#d4af37]" /> Personalized elimination diets</li>
            <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#d4af37]" /> Stress and anxiety interrelation therapy</li>
            <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#d4af37]" /> Long-term maintenance protocols</li>
          </ul>
        </div>
        <div className="bg-zinc-900 border border-zinc-800 p-2">
          <img src="/16.jpg" alt="Patient Recovery" className="w-full h-full object-cover opacity-80" />
        </div>
      </section>
      
      <Footer />
    </main>
  );
}