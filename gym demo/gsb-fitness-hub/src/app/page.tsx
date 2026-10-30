"use client";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Award, Users, MapPin, BookOpen, CheckCircle2, ShieldCheck, TrendingUp } from "lucide-react";
import Link from "next/link";

const smoothEase = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.8, ease: smoothEase }
};

const team = [
  { name: "Kulbir Singh", role: "CEO & Founder" },
  { name: "Abhi Rana", role: "Business Consultant" },
  { name: "Vikram Dagar", role: "Business Head" },
  { name: "Gaganjot Kaur", role: "Sales Coordinator" },
  { name: "Rashi Sardana", role: "Senior Dietitian" }
];

const branches = [
  { city: "New Delhi", title: "Headquarters", phone: "+91 9811291573", address: "268 Rajpur Khurd, Opp Gopal Dairy", img: "https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { city: "Jaipur", title: "Pink City Branch", phone: "+91 88750 00747", address: "417, Mansarovar, Jaipur, Rajasthan", img: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { city: "Jammu", title: "Dal Lake Branch", phone: "+91 9906004805", address: "Sector 3, Jammu & Kashmir", img: "https://images.pexels.com/photos/3289711/pexels-photo-3289711.jpeg?auto=compress&cs=tinysrgb&w=800" }
];

const blogs = [
  { date: "16 Jul", title: "How does IBS cause Sexual Disorders?", category: "Clinical IBS" },
  { date: "16 Jul", title: "IBS and Anxiety - ARE they interrelated?", category: "Mental Health" },
  { date: "03 Aug", title: "Focus on Fat Loss Not Weight Loss", category: "Transformation" },
  { date: "10 Sep", title: "B12: The Essential Nutrient", category: "Nutrition" }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090b] font-sans text-zinc-50 flex flex-col selection:bg-[#d4af37]/30 selection:text-[#d4af37] overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-6 max-w-[1600px] mx-auto w-full min-h-[85vh] flex flex-col justify-end border-b border-zinc-800/50">
        <motion.div 
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: smoothEase }}
          className="absolute inset-0 bg-zinc-950 pointer-events-none"
        >
          <img 
            src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="Fitness Verse Training" 
            className="w-full h-full object-cover opacity-30 grayscale mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/80 to-transparent" />
        </motion.div>

        <div className="absolute top-1/3 right-1/4 w-[40vw] h-[40vw] max-w-[600px] bg-[#d4af37]/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 w-full max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: smoothEase }} className="flex flex-wrap items-center gap-4 mb-8">
            <span className="text-[#d4af37] font-mono tracking-widest uppercase text-xs border border-[#d4af37]/30 px-3 py-1.5 backdrop-blur-md">Fitness Verse</span>
            <div className="flex items-center gap-1.5 text-zinc-300 text-xs font-semibold uppercase tracking-widest bg-zinc-900/50 px-3 py-1.5 border border-zinc-800 backdrop-blur-md">
              <ShieldCheck size={14} className="text-[#d4af37]" /> MHRD Registered
            </div>
          </motion.div>
          
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: smoothEase }} className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter mb-8 text-white leading-[1.05]">
            Temple of <br />
            <span className="text-[#d4af37]">Training.</span>
          </motion.h1>
          
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4, ease: smoothEase }} className="text-zinc-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-12 text-balance">
            A space built with purpose, passion, and purity. We combine Personal Training, General Fitness, and elite clinical recovery to create a complete ecosystem for your physical and lifestyle transformation.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5, ease: smoothEase }} className="flex flex-wrap items-center gap-4">
             <Link href="/store" className="bg-[#d4af37] text-zinc-950 px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors">
               Explore Academy
             </Link>
             <Link href="/ibs-clinic" className="bg-zinc-900 border border-zinc-800 text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:border-[#d4af37] hover:text-[#d4af37] transition-colors">
               IBS Holistic Clinic
             </Link>
          </motion.div>
        </div>
      </section>

      {/* KPI / Trust Bar */}
      <section className="border-b border-zinc-800/50 bg-zinc-950">
        <div className="max-w-[1600px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-zinc-800/50">
          <div className="py-10 px-4 text-center">
            <h4 className="text-4xl font-bold text-[#d4af37] mb-2 tracking-tighter">15+</h4>
            <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold">Years of Service</span>
          </div>
          <div className="py-10 px-4 text-center">
            <h4 className="text-4xl font-bold text-[#d4af37] mb-2 tracking-tighter">10k+</h4>
            <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold">Students Certified</span>
          </div>
          <div className="py-10 px-4 text-center">
            <h4 className="text-4xl font-bold text-[#d4af37] mb-2 tracking-tighter">8k+</h4>
            <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold">IBS Patients Cured</span>
          </div>
          <div className="py-10 px-4 text-center">
            <h4 className="text-4xl font-bold text-[#d4af37] mb-2 tracking-tighter">900+</h4>
            <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold">Happy Gym Clients</span>
          </div>
        </div>
      </section>

      {/* Kulbir Singh Bio */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        <div className="lg:col-span-5">
          <motion.div {...fadeUp} className="w-full h-full min-h-[500px] relative bg-zinc-900 border border-zinc-800 p-2">
            <img 
              src="https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Kulbir Singh" 
              className="w-full h-full object-cover grayscale opacity-90"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-zinc-950/90 backdrop-blur-md border border-zinc-800 p-6">
              <h3 className="text-2xl font-bold tracking-tight text-white mb-1">Kulbir Singh</h3>
              <p className="text-[#d4af37] text-xs font-bold uppercase tracking-widest">CEO & Founder, GSB Academy</p>
            </div>
          </motion.div>
        </div>
        
        <div className="lg:col-span-7 flex flex-col justify-center">
          <motion.div {...fadeUp}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-[1px] bg-[#d4af37]" />
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#d4af37]">Meet the Expert</h2>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">MBA, ACE Certified Professional, and Holistic Visionary.</h2>
            <p className="text-zinc-400 text-lg leading-relaxed font-light mb-8 text-balance">
              An active child with a strong academic background, Kulbir holds an MBA in International Business. After working with prominent companies like Jet Airways and Fitness First India, he dedicated his life to dispelling fitness myths through scientific education.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed font-light mb-10 text-balance">
              Since 2008, Kulbir has undergone rigorous training, evolving into a master educator. In 2016, he founded Fit Mantra Academy (now GSB Academy), certifying over 10,000 students. In 2023, he expanded this vision to include a dedicated Diet Clinic specializing in holistic IBS recovery.
            </p>
            
            <div className="bg-zinc-900/40 border border-zinc-800 p-8">
              <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-100 mb-6 flex items-center gap-2"><Award size={16} className="text-[#d4af37]" /> Elite Credentials</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-sm font-light text-zinc-300">
                <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-zinc-600 shrink-0 mt-0.5"/> ACE Certified Personal Trainer</li>
                <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-zinc-600 shrink-0 mt-0.5"/> ACE Certified Nutritionist</li>
                <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-zinc-600 shrink-0 mt-0.5"/> TRX Suspension Certified</li>
                <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-zinc-600 shrink-0 mt-0.5"/> EBFA Barefoot Training Certified</li>
                <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-zinc-600 shrink-0 mt-0.5"/> BOSU Balance Trainer Certified</li>
                <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-zinc-600 shrink-0 mt-0.5"/> Lessmilles Certified RPM Instructor</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6 bg-zinc-950 border-y border-zinc-800/50">
        <div className="max-w-[1600px] mx-auto w-full">
          <motion.div {...fadeUp} className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">The Leadership Team</h2>
              <p className="text-zinc-400 font-light max-w-xl">Backed by a dedicated team of business experts and dietitians committed to delivering world-class education and recovery.</p>
            </div>
            <Link href="/contact" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#d4af37] hover:text-white transition-colors">
              Contact the Team <ArrowRight size={16} />
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {team.map((member, idx) => (
              <motion.div 
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-zinc-900 border border-zinc-800 p-6 flex flex-col items-center text-center hover:border-[#d4af37]/50 transition-colors"
              >
                <div className="w-16 h-16 bg-zinc-950 border border-zinc-800 rounded-full flex items-center justify-center mb-4 text-zinc-600">
                  <Users size={24} />
                </div>
                <h4 className="text-sm font-bold text-zinc-100 mb-1">{member.name}</h4>
                <p className="text-[10px] uppercase tracking-widest text-[#d4af37]">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto w-full">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Our Branches</h2>
          <p className="text-zinc-400 font-light max-w-2xl mx-auto">Operating across India, bringing elite fitness education and holistic healing to your city.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {branches.map((branch, idx) => (
            <motion.div 
              key={branch.city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="w-full h-64 bg-zinc-900 border border-zinc-800 mb-6 overflow-hidden relative">
                <img src={branch.img} alt={branch.city} className="w-full h-full object-cover opacity-60 grayscale group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute top-4 left-4 bg-zinc-950 border border-zinc-800 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#d4af37]">
                  {branch.city}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{branch.title}</h3>
              <p className="text-zinc-400 text-sm font-light mb-4 flex items-start gap-2 h-10"><MapPin size={16} className="text-zinc-600 shrink-0 mt-0.5"/> {branch.address}</p>
              <p className="text-zinc-300 text-sm font-medium">{branch.phone}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Latest Blog & News */}
      <section className="py-24 px-6 bg-[#09090b] border-t border-zinc-800/50">
        <div className="max-w-[1600px] mx-auto w-full">
          <motion.div {...fadeUp} className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Latest Knowledge</h2>
              <p className="text-zinc-400 font-light max-w-xl">Scientific breakdowns, IBS research, and fitness truths from Kulbir Singh.</p>
            </div>
            <Link href="#" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#d4af37] hover:text-white transition-colors">
              View All Articles <ArrowRight size={16} />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogs.map((blog, idx) => (
              <motion.div 
                key={blog.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-zinc-900/40 border border-zinc-800 p-8 hover:bg-zinc-900 transition-colors group flex flex-col"
              >
                <div className="flex items-center justify-between mb-6 border-b border-zinc-800 pb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#d4af37]">{blog.category}</span>
                  <span className="text-xs font-medium text-zinc-500">{blog.date}</span>
                </div>
                <h3 className="text-lg font-medium leading-snug mb-8 group-hover:text-[#d4af37] transition-colors">{blog.title}</h3>
                <div className="mt-auto">
                  <span className="text-xs font-medium uppercase tracking-widest text-zinc-500 flex items-center gap-2 group-hover:text-white transition-colors">
                    <BookOpen size={14} /> Read Article
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}