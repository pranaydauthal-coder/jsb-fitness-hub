"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-24 pb-12 overflow-hidden bg-slate-50">
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[600px] bg-blue-100/50 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10 flex-grow">
        <div className="flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 mb-8 text-sm shadow-sm"
          >
            <CheckCircle2 size={16} className="text-blue-600" />
            <span className="font-medium">All Dental Services Under One Roof</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-slate-900 leading-[1.1]"
          >
            Gentle care for a <br />
            <span className="text-blue-600">healthier smile.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 text-lg md:text-xl max-w-lg mb-10 leading-relaxed"
          >
            Welcome to Dr. Kriti's Dental Studio. We blend advanced clinical expertise with a warm, patient-first approach to ensure every visit is comfortable, transparent, and completely pain-free.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="/contact" className="group inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all shadow-md hover:shadow-lg">
              Book Appointment
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
            <Link href="/treatments" className="inline-flex items-center gap-2 px-8 py-4 bg-white border border-slate-200 text-slate-700 font-semibold rounded-full hover:bg-slate-50 transition-colors shadow-sm">
              Explore Services
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[550px] w-full hidden lg:block rounded-3xl overflow-hidden bg-white shadow-2xl border border-slate-100 p-2"
        >
          <div className="absolute inset-2 rounded-[1.25rem] bg-[url('https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />
          <div className="absolute inset-2 rounded-[1.25rem] bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
          
          <div className="absolute bottom-10 left-10 right-10 p-6 bg-white/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl">
            <h3 className="text-lg font-bold text-slate-900 mb-2">Uncompromising Safety</h3>
            <p className="text-sm text-slate-600">Strict adherence to advanced sterilization protocols using the best materials available in modern dentistry.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}