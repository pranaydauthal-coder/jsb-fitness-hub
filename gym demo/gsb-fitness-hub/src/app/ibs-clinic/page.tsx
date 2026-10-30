"use client";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { motion } from "framer-motion";
import { Activity, Leaf, ShieldCheck, HeartPulse, BrainCircuit, Droplets, Dumbbell, Stethoscope, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const smoothEase = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.8, ease: smoothEase }
};

export default function IBSClinic() {
  return (
    <main className="min-h-screen bg-[#09090b] font-sans text-zinc-50 flex flex-col selection:bg-[#d4af37]/30 selection:text-[#d4af37] overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-6 max-w-[1600px] mx-auto w-full min-h-[70vh] flex flex-col justify-end border-b border-zinc-800/50">
        <motion.div 
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: smoothEase }}
          className="absolute inset-0 bg-zinc-950 pointer-events-none"
        >
          <img 
            src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="Holistic Nutrition" 
            className="w-full h-full object-cover opacity-20 grayscale mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/80 to-transparent" />
        </motion.div>

        <div className="absolute bottom-0 right-1/4 w-[50vw] h-[50vw] max-w-[800px] bg-[#d4af37]/5 blur-[150px] rounded-full pointer-events-none" />

        <div className="relative z-10 w-full max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: smoothEase }} className="flex flex-wrap items-center gap-4 mb-8">
            <span className="text-[#d4af37] font-mono tracking-widest uppercase text-xs border border-[#d4af37]/30 px-3 py-1.5 backdrop-blur-md">Holistic Clinic</span>
            <div className="flex items-center gap-1.5 text-zinc-300 text-xs font-semibold uppercase tracking-widest bg-zinc-900/50 px-3 py-1.5 border border-zinc-800 backdrop-blur-md">
              <Leaf size={14} className="text-[#d4af37]" /> Medicine-Free
            </div>
            <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-semibold uppercase tracking-widest bg-zinc-900/50 px-3 py-1.5 border border-zinc-800 backdrop-blur-md shadow-[0_0_15px_rgba(52,211,153,0.1)]">
              <ShieldCheck size={14} /> 8,000+ Patients Cured
            </div>
          </motion.div>
          
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: smoothEase }} className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter mb-8 text-white leading-[1.05]">
            IBS & Holistic <br />
            <span className="text-zinc-500">Recovery.</span>
          </motion.h1>
          
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4, ease: smoothEase }} className="text-zinc-300 text-lg md:text-xl font-light leading-relaxed max-w-3xl mb-10 text-balance">
            Kulbir and his team specialize in resolving Irritable Bowel Syndrome (IBS), gas, and gut-related problems. Remarkably, we have successfully cured over 8,000 IBS patients with holistic, medicine-free diet plans made purely from home-prepared nutrition.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 flex-1">
        
        {/* Left Column: Medical Info */}
        <div className="lg:col-span-7 flex flex-col gap-20">
          
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">What is Irritable Bowel Syndrome (IBS)?</h2>
            <p className="text-zinc-400 text-lg leading-relaxed font-light mb-8">
              IBS is a common, chronic gastrointestinal disorder affecting the large intestine (colon). It is a functional disorder, meaning it relates to problems with how the gut works rather than structural abnormalities.
            </p>
            
            <div className="bg-zinc-900/40 border border-zinc-800 p-8">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#d4af37] mb-6 flex items-center gap-2"><Activity size={16} /> Key Symptoms</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <li className="flex items-start gap-3 bg-zinc-950/50 p-4 border border-zinc-800/50">
                  <HeartPulse size={18} className="text-zinc-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-sm text-zinc-200 mb-1">Abdominal Pain</strong>
                    <span className="text-xs text-zinc-500">Often relieved by bowel movements.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-zinc-950/50 p-4 border border-zinc-800/50">
                  <Activity size={18} className="text-zinc-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-sm text-zinc-200 mb-1">Bloating</strong>
                    <span className="text-xs text-zinc-500">A feeling of fullness or swelling.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-zinc-950/50 p-4 border border-zinc-800/50">
                  <Stethoscope size={18} className="text-zinc-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-sm text-zinc-200 mb-1">Bowel Changes</strong>
                    <span className="text-xs text-zinc-500">Diarrhea, constipation, or both.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-zinc-950/50 p-4 border border-zinc-800/50">
                  <Droplets size={18} className="text-zinc-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-sm text-zinc-200 mb-1">Mucus in Stool</strong>
                    <span className="text-xs text-zinc-500">Noticeable in bowel movements.</span>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div {...fadeUp}>
            <h2 className="text-2xl font-bold tracking-tight mb-8">Root Causes & Diagnostics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-4 border-b border-zinc-800 pb-3">Underlying Causes</h3>
                <ul className="space-y-4 text-sm font-light text-zinc-300">
                  <li className="flex items-start gap-3"><BrainCircuit size={16} className="text-[#d4af37] shrink-0 mt-0.5"/> <strong>Gut-Brain Axis:</strong> Abnormal communication between brain and gut.</li>
                  <li className="flex items-start gap-3"><Activity size={16} className="text-[#d4af37] shrink-0 mt-0.5"/> <strong>Increased Sensitivity:</strong> Enhanced sensitivity to intestinal pain.</li>
                  <li className="flex items-start gap-3"><Activity size={16} className="text-[#d4af37] shrink-0 mt-0.5"/> <strong>Altered Motility:</strong> Changes in contraction speeds.</li>
                  <li className="flex items-start gap-3"><Activity size={16} className="text-[#d4af37] shrink-0 mt-0.5"/> <strong>Microbiome Imbalances:</strong> Changes in gut flora.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-4 border-b border-zinc-800 pb-3">Types of IBS</h3>
                <ul className="space-y-4 text-sm font-light text-zinc-300">
                  <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-zinc-600 shrink-0 mt-0.5"/> <strong>IBS-C:</strong> Predominantly constipation.</li>
                  <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-zinc-600 shrink-0 mt-0.5"/> <strong>IBS-D:</strong> Predominantly diarrhea.</li>
                  <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-zinc-600 shrink-0 mt-0.5"/> <strong>IBS-M:</strong> Mixed bowel habits.</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="bg-zinc-900 border border-zinc-800 p-8 md:p-12 relative overflow-hidden">
            <h2 className="text-2xl font-bold tracking-tight mb-6 relative z-10">Body Transformation Philosophy</h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light mb-8 relative z-10 text-balance">
              At GSB Academy/GSB Fit, we recognize the interconnectedness of mind, body, and spirit. Experience the results you've always desired with our natural and holistic approach to body transformation—combining the right selection of exercise, nutrition, supplementation, hydration, and proper sleep.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10">
              <div className="bg-zinc-950 p-5 border border-zinc-800/50 hover:border-[#d4af37]/50 transition-colors">
                <Leaf size={24} className="text-[#d4af37] mb-4" />
                <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-200 mb-2">Nourishment</h4>
                <p className="text-xs text-zinc-500 font-light">Whole grains, fresh fruits, lean proteins, and healthy fats. No artificial ingredients.</p>
              </div>
              <div className="bg-zinc-950 p-5 border border-zinc-800/50 hover:border-[#d4af37]/50 transition-colors">
                <Dumbbell size={24} className="text-[#d4af37] mb-4" />
                <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-200 mb-2">Exercise</h4>
                <p className="text-xs text-zinc-500 font-light">Integration of cardiovascular, strength training, and flexibility routines.</p>
              </div>
              <div className="bg-zinc-950 p-5 border border-zinc-800/50 hover:border-[#d4af37]/50 transition-colors">
                <BrainCircuit size={24} className="text-[#d4af37] mb-4" />
                <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-200 mb-2">Rest & Recovery</h4>
                <p className="text-xs text-zinc-500 font-light">Honoring the importance of sleep to restore and rejuvenate the physical body.</p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Right Column: Sticky Consultation Panel */}
        <div className="lg:col-span-5 relative">
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.6, ease: smoothEase }} className="bg-zinc-900/60 backdrop-blur-xl border border-zinc-700/50 p-8 md:p-10 sticky top-28 shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37]/10 blur-3xl pointer-events-none" />
            
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#d4af37] mb-2 flex items-center gap-3">
              <span className="w-2 h-2 bg-[#d4af37] rounded-full animate-pulse" /> Book a Session
            </h3>
            <h2 className="text-3xl font-bold tracking-tighter mb-8">Consultation & Planning</h2>
            
            <p className="text-sm text-zinc-400 font-light leading-relaxed mb-10">
              We promise and we will deliver whatever is discussed. Enquire now with a free mind. Our Team of Professionals will take care of everything, from custom Low FODMAP diets to stress management.
            </p>

            <div className="bg-zinc-950 border border-zinc-800 p-6 mb-8 flex items-center justify-between">
              <div>
                <span className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-1">Standard Fee</span>
                <span className="text-zinc-200 font-medium">Holistic Assessment</span>
              </div>
              <span className="text-3xl font-bold text-[#d4af37] tracking-tight">₹4,200</span>
            </div>

            <Link href="/contact" className="relative overflow-hidden w-full flex items-center justify-center gap-3 py-5 bg-zinc-100 text-zinc-950 text-xs font-bold transition-all uppercase tracking-widest group">
              <div className="absolute inset-0 bg-[#d4af37] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10">Book Consultation</span>
              <ArrowRight size={14} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </Link>

            <div className="mt-6 flex flex-col gap-2 border-t border-zinc-800/50 pt-6 text-xs text-zinc-500 font-medium">
              <span className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500" /> Personalized Low FODMAP Planning</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500" /> Lifestyle & Stress Management</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500" /> Medicine-Free Execution</span>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
}