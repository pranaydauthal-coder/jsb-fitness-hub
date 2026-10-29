"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Activity, ArrowRight, Shield, Zap, Cpu, Terminal, Check, Star, Fingerprint, Search } from "lucide-react";

export default function DemoPage() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <main className="min-h-screen bg-neutral-950 font-sans selection:bg-cyan-500/30 text-gray-100 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Activity size={24} className="text-cyan-400" />
            <span className="text-xl font-bold tracking-widest uppercase">Apex</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <a href="#procedures" className="hover:text-white transition-colors">Procedures</a>
            <a href="#architecture" className="hover:text-white transition-colors">Architecture</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#logs" className="hover:text-white transition-colors">Logs</a>
          </div>

          <button className="px-5 py-2.5 bg-cyan-500 text-black text-sm font-bold rounded-lg hover:bg-cyan-400 transition-colors shadow-[0_0_15px_rgba(6,182,212,0.3)]">
            Initialize Connect
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-cyan-900/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
          <div className="flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-neutral-900 border border-neutral-800 text-gray-400 mb-8"
            >
              <Terminal size={14} className="text-cyan-400" />
              <span className="text-xs font-mono tracking-wide">STATUS: SYSTEMS ONLINE</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-6"
            >
              Dental <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Hardware.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
            >
              Precision-engineered oral architecture. Leveraging AI diagnostics, sub-micron milling, and pain-free extraction protocols to refactor your smile.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <button className="group inline-flex items-center gap-2 px-8 py-4 bg-gray-100 text-black font-bold rounded-lg hover:bg-white transition-colors">
                Deploy Consultation
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </button>
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-neutral-800 font-bold rounded-lg hover:bg-neutral-900 transition-colors">
                View Architecture
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[450px] w-full hidden lg:flex flex-col justify-end border border-neutral-800 bg-neutral-900/50 rounded-2xl p-6 overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500/0 via-cyan-500/50 to-cyan-500/0" />
            <div className="font-mono text-sm text-cyan-500/70 flex flex-col gap-3">
              <p>{`> Initializing 3D CBCT scan... [OK]`}</p>
              <p>{`> Loading bio-metrics......... [OK]`}</p>
              <p>{`> Mapping veneer architecture.`}</p>
              <motion.div
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="mt-6 grid grid-cols-4 gap-2 opacity-50"
              >
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="h-8 bg-neutral-800 rounded-sm border border-neutral-700" />
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="procedures" className="py-24 px-6 max-w-7xl mx-auto border-t border-neutral-800">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Core Procedures</h2>
          <p className="text-gray-400 max-w-2xl text-sm leading-relaxed">
            Standardized modules designed for optimal oral health. Every procedure is logged, tracked, and executed with robotic precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Laser Whitening", desc: "Instant brightness scaling using sub-zero targeted photon emissions. Zero enamel degradation.", icon: Zap },
            { title: "Veneer Architecture", desc: "Micro-precision porcelain structuring layered for a flawless UI layout.", icon: Shield },
            { title: "AI Diagnostics", desc: "Machine learning algorithms scan your radiographs to detect micro-fractures.", icon: Cpu },
            { title: "Bio-Implants", desc: "Titanium root anchoring seamlessly integrated with your jawbone API for permanent stability.", icon: Fingerprint },
            { title: "Deep Profiling", desc: "Comprehensive periodontal scraping and root planing to remove legacy plaque buildup.", icon: Search },
            { title: "Emergency Patch", desc: "Immediate runtime fixes for sudden trauma, pain, or hardware failure.", icon: Activity },
          ].map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="p-8 rounded-xl bg-neutral-900/30 border border-neutral-800 hover:border-cyan-500/30 hover:bg-neutral-900/80 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-neutral-800 flex items-center justify-center text-cyan-400 mb-6 group-hover:bg-cyan-500/10 transition-colors">
                <svc.icon size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2">{svc.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{svc.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Architecture / About Section */}
      <section id="architecture" className="py-24 px-6 max-w-7xl mx-auto border-t border-neutral-800">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Infrastructure & <span className="text-cyan-400">Architecture</span>
            </h2>
            <div className="space-y-6 text-gray-400 text-sm leading-relaxed">
              <p>
                We abandoned the legacy "dental clinic" model. Apex operates as a high-performance bio-engineering lab. Your oral health is treated as a complex, interconnected system requiring continuous integration and deployment of preventative measures.
              </p>
              <p>
                Our backend utilizes CBCT (Cone Beam Computed Tomography) rendering your jaw structure in 3D space, allowing us to simulate procedures before execution. No guesswork, no runtime errors.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { metric: "12ms", label: "Scan Response Time" },
              { metric: "< 5μm", label: "Implant Margin Error" },
              { metric: "100%", label: "Uptime (Pain-Free)" },
              { metric: "3D", label: "Volumetric Rendering" },
            ].map((pt, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-neutral-900 border border-neutral-800 p-6 rounded-lg flex flex-col justify-center"
              >
                <span className="text-3xl font-mono font-bold mb-1">{pt.metric}</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest">{pt.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section id="pricing" className="py-24 px-6 max-w-7xl mx-auto border-t border-neutral-800">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Service Tiers</h2>
          <p className="text-gray-400 text-sm">Transparent resource allocation. No hidden compile fees.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Base Build",
              price: "$199",
              period: "/mo",
              desc: "Continuous integration for standard oral health.",
              features: ["Bi-annual Deep Scans", "Automated Plaque Removal", "24/7 Priority Support", "Standard Whitening Protocol"],
              highlight: false,
            },
            {
              name: "Veneer Pro",
              price: "$899",
              period: "/tooth",
              desc: "Complete front-end aesthetic overhaul.",
              features: ["Custom Porcelain Architecture", "3D Bite Simulation", "Color-Matched Shading", "Lifetime Margin Warranty"],
              highlight: true,
            },
            {
              name: "Implant Enterprise",
              price: "$2,499",
              period: "/unit",
              desc: "Full stack hardware replacement.",
              features: ["Titanium Root Anchoring", "CBCT Guided Surgery", "Same-Day Temporary Load", "Bio-Compatible Crown"],
              highlight: false,
            },
          ].map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-8 rounded-xl border flex flex-col ${
                tier.highlight 
                  ? "bg-neutral-900 border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.1)]" 
                  : "bg-neutral-900/30 border-neutral-800"
              }`}
            >
              {tier.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-lg font-semibold mb-2">{tier.name}</h3>
              <p className="text-sm text-gray-400 mb-6 min-h-[40px]">{tier.desc}</p>
              <div className="mb-8">
                <span className="text-4xl font-bold">{tier.price}</span>
                <span className="text-gray-500 text-sm">{tier.period}</span>
              </div>
              
              <ul className="space-y-4 flex-grow mb-8 text-sm">
                {tier.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-300">
                    <Check size={16} className="text-cyan-400 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-lg text-sm font-bold transition-colors ${
                tier.highlight 
                  ? "bg-cyan-500 text-black hover:bg-cyan-400" 
                  : "bg-neutral-800 hover:bg-neutral-700"
              }`}>
                Initialize Plan
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Logs (Testimonials) */}
      <section id="logs" className="py-24 px-6 max-w-7xl mx-auto border-t border-neutral-800">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            System Output: <span className="text-gray-400">Client Logs</span>
          </h2>
          <p className="text-sm text-gray-500 font-mono">Total successful executions: 14,092</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              id: "LOG-992",
              name: "Alex M.",
              role: "Software Engineer",
              text: "The extraction felt like a background process. No pain, zero downtime. The 3D scanning tech they use is incredible. Compiled perfectly.",
            },
            {
              id: "LOG-104",
              name: "Sarah K.",
              role: "Product Designer",
              text: "Veneers installed with absolute pixel-perfection. The attention to detail here rivals top-tier UI design. Aesthetic score: 100.",
            },
            {
              id: "LOG-883",
              name: "James L.",
              role: "Data Analyst",
              text: "Fast, efficient, and completely data-driven diagnostics. They showed me my exact bite architecture on a monitor before executing.",
            },
          ].map((rev, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border border-neutral-800 rounded-lg p-6 bg-neutral-900/50 flex flex-col hover:border-neutral-700 transition-colors"
            >
              <div className="flex justify-between items-center mb-4">
                <div className="flex gap-1 text-gray-400">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} size={14} fill="currentColor" />
                  ))}
                </div>
                <span className="text-xs font-mono text-neutral-600">{rev.id}</span>
              </div>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed flex-grow">
                "{rev.text}"
              </p>
              <div>
                <div className="font-bold">{rev.name}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">
                  {rev.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Full Footer */}
      <footer className="w-full border-t border-neutral-800 bg-neutral-950 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Activity size={24} className="text-cyan-400" />
              <span className="text-xl font-bold tracking-widest uppercase">Apex</span>
            </div>
            <p className="text-gray-400 max-w-sm text-sm leading-relaxed">
              High-performance dental architecture. Built for those who demand precision, efficiency, and zero downtime. Headquartered in the cloud, operating locally.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-semibold tracking-wider text-sm uppercase text-white">Protocols</h4>
            <nav className="flex flex-col gap-3">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Laser Alignment</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Implant Architecture</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Routine Diagnostics</a>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-semibold tracking-wider text-sm uppercase text-white">System</h4>
            <nav className="flex flex-col gap-3">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Client Portal</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">API Docs</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Status (100%)</a>
            </nav>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Apex Dental Architecture. All modules secured.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
          </div>
        </div>
      </footer>
    </main>
  );
}