"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Award, Heart, Cpu, Sparkles, MoveRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

// Premium Apple-style easing
const smoothEase = [0.16, 1, 0.3, 1] as const;

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <main className="min-h-screen bg-[#FAFAFA] font-sans text-slate-900 selection:bg-blue-200 overflow-hidden" ref={containerRef}>
      <Navbar />
      
      {/* 1. EDITORIAL HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 max-w-screen-2xl mx-auto flex flex-col items-center">
        {/* Abstract organic glow instead of a rigid circle */}
        <div className="absolute top-0 right-1/4 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-gradient-to-br from-blue-100/40 to-transparent blur-[100px] rounded-full mix-blend-multiply pointer-events-none" />
        
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
          <div className="lg:col-span-7 flex flex-col items-start pr-4 md:pr-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: smoothEase }}
              className="mb-8 flex items-center gap-3"
            >
              <div className="w-12 h-[1px] bg-blue-600" />
              <span className="text-sm font-semibold tracking-widest uppercase text-blue-600">Periodontology & Aesthetic Design</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: smoothEase, delay: 0.1 }}
              className="text-6xl md:text-7xl lg:text-8xl font-medium tracking-tighter mb-8 text-slate-900 leading-[1.05]"
            >
              Dr. Kriti's <br />
              <span className="text-slate-400 italic font-light">Dental Studio.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: smoothEase, delay: 0.2 }}
              className="text-slate-500 text-lg md:text-xl max-w-xl mb-12 leading-relaxed font-light text-balance"
            >
              Dr. Kriti Banerjee is an experienced dentist with a Master's in Periodontology. She is committed to providing personalized care to her clients, and keeping her practice up-to-date with the latest research and technology in the field.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: smoothEase, delay: 0.3 }}
            >
              <Link href="/contact" className="group relative inline-flex items-center gap-4 px-10 py-5 bg-slate-900 text-white overflow-hidden rounded-full transition-all hover:scale-105 duration-300">
                <span className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                <span className="relative z-10 font-medium tracking-wide">Book a Consult</span>
                <ArrowRight className="relative z-10 group-hover:translate-x-2 transition-transform duration-500" size={18} />
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, clipPath: "inset(10% 10% 10% 10% round 30px)" }}
            animate={{ opacity: 1, clipPath: "inset(0% 0% 0% 0% round 30px)" }}
            transition={{ duration: 1.5, ease: smoothEase, delay: 0.1 }}
            className="lg:col-span-5 relative h-[60vh] min-h-[500px] w-full"
            style={{ y, opacity }}
          >
            {/* Elegant Image Reveal - No thick borders or drop shadows */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-slate-900/10 mix-blend-overlay" />
          </motion.div>
        </div>
      </section>

      {/* 2. WHY CHOOSE US (ASYMMETRICAL STICKY SCROLL - Looks very high-end) */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: smoothEase }}
                className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 mb-6"
              >
                Why Choose <br />Dr. Kriti Banerjee
              </motion.h2>
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full h-[1px] bg-slate-200"
              />
            </div>
          </div>

          <div className="lg:w-2/3 flex flex-col">
            {[
              { title: "Expertise", icon: Award, desc: "Reputed Periodontist and skilled at General Dental procedures such as Aesthetic Dental restorations and Painless tooth removal." },
              { title: "Philosophy", icon: Heart, desc: "We aim at making the dental office a safe space for you to get treated at affordable rates without compromising on quality." },
              { title: "Technology", icon: Cpu, desc: "Equipped with Digital x-rays, Rotary endodontics, the best dental material brands and a great lab." },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: smoothEase, delay: i * 0.1 }}
                className="group border-b border-slate-200 py-12 lg:py-16 first:pt-0 flex flex-col md:flex-row gap-6 md:gap-12"
              >
                <div className="md:w-1/3 flex flex-col gap-4">
                  <item.icon size={32} strokeWidth={1} className="text-blue-600" />
                  <h3 className="text-2xl font-medium text-slate-900">{item.title}</h3>
                </div>
                <div className="md:w-2/3">
                  <p className="text-slate-500 text-lg leading-relaxed font-light">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SERVICES (OPEN BROCHURE STYLE) */}
      <section className="py-32 bg-slate-900 text-white rounded-t-[3rem] lg:rounded-t-[5rem]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: smoothEase }}
              className="max-w-3xl"
            >
              <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-8">All dental services<br /><span className="text-slate-500 font-light">under one roof.</span></h2>
              <p className="text-slate-400 text-xl font-light leading-relaxed text-balance">
                We have a panel of specialists associated with our clinic. All services are performed with utmost care to sterilization protocols and using the best materials available.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* General */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: smoothEase }}
            >
              <div className="flex items-center gap-4 mb-10 pb-6 border-b border-slate-800">
                <span className="text-blue-500 font-mono text-sm tracking-widest">01 /</span>
                <h3 className="text-3xl font-medium">General & Surgical</h3>
              </div>
              <ul className="flex flex-col gap-6">
                {[
                  "Dental cleaning and polishing", 
                  "Tooth extraction / Wisdom tooth", 
                  "Root Canal Treatment", 
                  "Child Dentistry / Paediatric", 
                  "Dental Crowns / Bridges / Dentures"
                ].map((item, i) => (
                  <li key={i} className="group flex items-center justify-between cursor-pointer">
                    <span className="text-xl text-slate-300 font-light group-hover:text-white transition-colors duration-300">{item}</span>
                    <MoveRight className="text-slate-700 group-hover:text-blue-500 -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500" />
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Cosmetic */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: smoothEase, delay: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-10 pb-6 border-b border-slate-800">
                <span className="text-blue-500 font-mono text-sm tracking-widest">02 /</span>
                <h3 className="text-3xl font-medium">Cosmetic Dentistry</h3>
              </div>
              <ul className="flex flex-col gap-6">
                {[
                  "Teeth Whitening", 
                  "Smile Design and Veneers", 
                  "Porcelain crowns", 
                  "Braces and Aligners", 
                  "Dental Implants"
                ].map((item, i) => (
                  <li key={i} className="group flex items-center justify-between cursor-pointer">
                    <span className="text-xl text-slate-300 font-light group-hover:text-white transition-colors duration-300">{item}</span>
                    <MoveRight className="text-slate-700 group-hover:text-blue-500 -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500" />
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. TESTIMONIALS (MASONRY/FREE-FLOWING LOOK) */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: smoothEase }}
            className="w-16 h-16 bg-blue-50 flex items-center justify-center rounded-full mb-8"
          >
            <Sparkles className="text-blue-600" size={24} strokeWidth={1.5} />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: smoothEase, delay: 0.1 }}
            className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 mb-6"
          >
            Patient Stories
          </motion.h2>
          <p className="text-lg text-slate-500 font-light tracking-wide uppercase text-sm">Direct feedback from our clients</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {[
            { name: "Priya Sharma", text: "I got my scaling done from here, she is very polite and was very careful. I didn't feel any pain or discomfort and her charges are very affordable. I would recommend her as your go to dentist." },
            { name: "Manish Kumar", text: "Dr. Kriti is very caring and polite. From the first day got the relief from toothache. Extraction process was hassle-free. A very good Dental service in the locality with reasonable charges." },
            { name: "Shaurya Jain", text: "First thing first Dr. Kriti is very caring and professional. She will answer all your queries and makes you feel like a friend instead like some scary dentist. Jokes apart I had a very good experience with her." }
          ].map((rev, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, ease: smoothEase, delay: i * 0.15 }}
              className="relative flex flex-col group"
            >
              {/* Very subtle styling, letting typography breathe */}
              <div className="text-6xl text-slate-200 font-serif leading-none absolute -top-8 -left-4 z-0 group-hover:text-blue-100 transition-colors duration-500">"</div>
              <p className="text-slate-600 text-lg leading-relaxed font-light mb-8 relative z-10">
                {rev.text}
              </p>
              <div className="mt-auto pt-6 border-t border-slate-200">
                <div className="font-medium text-slate-900 tracking-wide uppercase text-sm">{rev.name}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}