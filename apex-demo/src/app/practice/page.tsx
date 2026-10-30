"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function PracticePage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />
      
      <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900 leading-tight">
              All dental services <br /><span className="text-blue-600">under one roof.</span>
            </h1>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed mb-8">
              <p>
                At Dr. Kriti's Dental Studio, we believe in providing a holistic, comprehensive approach to your oral health. You shouldn't have to travel between multiple clinics or manage different referrals for your dental needs.
              </p>
              <p>
                We have assembled a dedicated panel of specialists associated directly with our clinic. Whether you need routine preventative care, complex surgical extraction, or a complete cosmetic smile makeover, our experts handle it internally.
              </p>
              <p>
                Above all, your safety is our absolute priority. Every single service is performed with the utmost care to strict sterilization protocols, utilizing only the highest grade materials available in modern dentistry.
              </p>
            </div>
            
            <ul className="space-y-4">
              {["Strict Sterilization Protocols", "Premium Dental Materials", "Associated Specialist Panel", "Comfort-First Experience"].map((item, i) => (
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
              { metric: "Expert", label: "Specialist Panel" },
              { metric: "Premium", label: "Materials Used" },
              { metric: "All-in-One", label: "Clinical Facility" },
            ].map((pt, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }} className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm flex flex-col justify-center items-center text-center">
                <span className="text-3xl font-bold text-slate-900 mb-2">{pt.metric}</span>
                <span className="text-sm text-slate-500 font-medium">{pt.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}