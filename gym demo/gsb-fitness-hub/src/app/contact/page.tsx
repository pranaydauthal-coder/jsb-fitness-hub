"use client";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";

const smoothEase = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.8, ease: smoothEase }
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#09090b] font-sans text-zinc-50 flex flex-col selection:bg-[#d4af37]/30 selection:text-[#d4af37]">
      <Navbar />
      
      {/* Header */}
      <section className="pt-40 pb-16 px-6 max-w-[1600px] mx-auto w-full border-b border-zinc-800/50">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: smoothEase }}
          className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-6 text-center"
        >
          Get in <span className="text-[#d4af37]">Touch</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: smoothEase }}
          className="text-center text-zinc-400 max-w-2xl mx-auto text-sm font-light text-balance"
        >
          Whether you are interested in fitness courses, premium supplements, or seeking to fix IBS and gut-related issues, Kulbir Singh and the team are ready to help.
        </motion.p>
      </section>

      <section className="py-24 px-6 max-w-[1600px] mx-auto w-full flex-1 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Contact Info */}
        <div className="flex flex-col gap-12">
          <motion.div {...fadeUp}>
            <h2 className="text-2xl font-bold tracking-tight mb-8">Headquarters</h2>
            <ul className="flex flex-col gap-6 text-zinc-300 font-light">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-[#d4af37]" />
                </div>
                <div>
                  <strong className="block text-sm font-bold uppercase tracking-widest text-zinc-100 mb-1">Fitness Verse (Delhi)</strong>
                  <span className="text-sm">268 Rajpur Khurd 1st and 2nd floor,<br/>Opposite Gopal Dairy, New Delhi 110068</span>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-[#d4af37]" />
                </div>
                <a href="tel:+919811291573" className="text-sm hover:text-[#d4af37] transition-colors">+91 9811291573</a>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-[#d4af37]" />
                </div>
                <a href="mailto:singhkulbir29@gmail.com" className="text-sm hover:text-[#d4af37] transition-colors">singhkulbir29@gmail.com</a>
              </li>
            </ul>
          </motion.div>

          <motion.div {...fadeUp} className="bg-zinc-900/40 border border-zinc-800 p-8">
            <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-6 border-b border-zinc-800 pb-3">Other Branches</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h4 className="text-sm font-bold text-zinc-100 mb-2">Pink City Branch</h4>
                <p className="text-xs text-zinc-400 font-light mb-2">417, Mansarovar,<br/>Jaipur, Rajasthan</p>
                <a href="tel:+918875000747" className="text-xs text-[#d4af37] hover:underline">+91 88750 00747</a>
              </div>
              <div>
                <h4 className="text-sm font-bold text-zinc-100 mb-2">Dal Lake Branch</h4>
                <p className="text-xs text-zinc-400 font-light mb-2">Sector 3,<br/>Jammu & Kashmir</p>
                <a href="tel:+919906004805" className="text-xs text-[#d4af37] hover:underline">+91 9906004805</a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div {...fadeUp} className="bg-zinc-900 border border-zinc-800 p-8 md:p-12 h-fit relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37]/10 blur-3xl pointer-events-none" />
          <h2 className="text-2xl font-bold tracking-tight mb-8 relative z-10">Send an Inquiry</h2>
          
          <form className="flex flex-col gap-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Full Name</label>
                <input required type="text" className="bg-zinc-950 border border-zinc-800 px-4 py-3 text-sm text-zinc-100 outline-none focus:border-[#d4af37] transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Phone Number</label>
                <input required type="tel" className="bg-zinc-950 border border-zinc-800 px-4 py-3 text-sm text-zinc-100 outline-none focus:border-[#d4af37] transition-colors" />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Email Address</label>
              <input required type="email" className="bg-zinc-950 border border-zinc-800 px-4 py-3 text-sm text-zinc-100 outline-none focus:border-[#d4af37] transition-colors" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Subject</label>
              <select className="bg-zinc-950 border border-zinc-800 px-4 py-3 text-sm text-zinc-100 outline-none focus:border-[#d4af37] transition-colors appearance-none">
                <option>IBS Clinic Consultation</option>
                <option>Academy Courses Admission</option>
                <option>Supplement Inquiry</option>
                <option>General Support</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Message</label>
              <textarea required rows={4} className="bg-zinc-950 border border-zinc-800 px-4 py-3 text-sm text-zinc-100 outline-none focus:border-[#d4af37] transition-colors resize-none"></textarea>
            </div>

            <button type="submit" className="mt-4 flex items-center justify-center gap-3 bg-[#d4af37] text-zinc-950 px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors w-full">
              <Send size={16} /> Submit Inquiry
            </button>
          </form>
        </motion.div>

      </section>
      
      <Footer />
    </main>
  );
}