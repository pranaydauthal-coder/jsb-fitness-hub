"use client";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, CheckCircle2 } from "lucide-react";
import Link from "next/link";

// Elite ease curves for a heavy, expensive feel
const customEase = [0.22, 1, 0.36, 1] as const;

const revealText = {
  hidden: { y: "100%" },
  visible: { 
    y: 0, 
    transition: { duration: 1.2, ease: customEase } 
  }
};

const revealImage = {
  hidden: { scale: 1.1, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1, 
    transition: { duration: 1.5, ease: customEase } 
  }
};

const team = [
  { name: "Kulbir Singh", role: "CEO & Founder", img: "/24.jpg" },
  { name: "Abhi Rana", role: "Business Consultant", img: "/25.jpg" },
  { name: "Vikram Dagar", role: "Business Head", img: "/26.jpg" },
  { name: "Gaganjot Kaur", role: "Sales Coordinator", img: "/27.jpg" },
  { name: "Rashi Sardana", role: "Senior Dietitian", img: "/28.jpg" }
];

const branches = [
  { city: "Jaipur", title: "Pink City Branch", phone: "+91 88750 00747", address: "417, Mansarovar, Jaipur, Rajasthan", img: "/4.jpg" },
  { city: "Jammu", title: "Dal Lake Branch", phone: "+91 9906004805", address: "Sector 3, Jammu & Kashmir", img: "/5.jpg" }
];

const blogs = [
  { date: "16 Jul", title: "How does IBS cause Sexual Disorders?", category: "Clinical IBS", img: "/6.jpg" },
  { date: "16 Jul", title: "IBS and Anxiety - ARE they interrelated?", category: "Mental Health", img: "/7.jpg" },
  { date: "03 Aug", title: "Focus on Fat Loss Not Weight Loss", category: "Transformation", img: "/8.jpg" },
  { date: "10 Sep", title: "B12: The Essential Nutrient", category: "Nutrition", img: "/9.jpg" }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] font-sans text-zinc-50 flex flex-col selection:bg-[#d4af37]/30 selection:text-[#d4af37] overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section - Minimalist Editorial */}
      <section className="relative w-full h-[90vh] flex flex-col justify-end pb-12 px-6 lg:px-12">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="Fitness Verse Training" 
            className="w-full h-full object-cover opacity-30 grayscale mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto w-full flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-4xl">
            <div className="overflow-hidden mb-4">
              <motion.span 
                initial="hidden" animate="visible" variants={revealText}
                className="text-[#d4af37] font-mono tracking-[0.2em] uppercase text-xs block"
              >
                MHRD Registered Ecosystem
              </motion.span>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-medium tracking-tighter leading-[0.9] text-white">
              <div className="overflow-hidden"><motion.div initial="hidden" animate="visible" variants={revealText}>Temple</motion.div></div>
              <div className="overflow-hidden"><motion.div initial="hidden" animate="visible" variants={revealText} transition={{ delay: 0.1, duration: 1.2, ease: customEase }}>of <span className="text-zinc-600">Training.</span></motion.div></div>
            </h1>
          </div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 1 }} className="flex flex-col gap-4 max-w-sm">
             <p className="text-zinc-400 text-sm font-light leading-relaxed">A space built with purpose, passion, and purity. Elite physical training and clinical IBS recovery.</p>
             <Link href="/store" className="group flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-[#d4af37] mt-4">
               Explore Academy <span className="block w-8 h-[1px] bg-[#d4af37] group-hover:w-16 transition-all duration-500"></span>
             </Link>
          </motion.div>
        </div>
      </section>

      {/* Clean KPI Divider */}
      <section className="border-y border-white/5 bg-[#050505]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 flex flex-wrap justify-between items-center py-12 gap-8">
          {[
            { label: "Years of Service", val: "15+" },
            { label: "Students Certified", val: "10k+" },
            { label: "IBS Patients Cured", val: "8k+" },
            { label: "Happy Gym Clients", val: "900+" }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col gap-2">
              <span className="text-4xl font-light tracking-tighter text-white">{stat.val}</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Kulbir Bio - Editorial Split Layout */}
      <section className="py-32 px-6 lg:px-12 max-w-[1600px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={revealImage}
          className="w-full aspect-[4/5] bg-zinc-950 overflow-hidden relative"
        >
          <img src="/2.jpg" alt="Kulbir Singh" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-[#050505] to-transparent w-full">
            <span className="text-[#d4af37] text-[10px] font-bold uppercase tracking-[0.2em]">CEO & Founder</span>
            <h3 className="text-3xl font-medium tracking-tight text-white mt-2">Kulbir Singh</h3>
          </div>
        </motion.div>
        
        <div className="flex flex-col justify-center">
          <div className="overflow-hidden mb-8">
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealText} className="text-4xl md:text-6xl font-medium tracking-tighter leading-tight">
              MBA, ACE Certified Professional, and Holistic Visionary.
            </motion.h2>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 1 }} className="space-y-6 text-zinc-400 text-lg font-light leading-relaxed text-balance">
            <p>An active child with a strong academic background, Kulbir holds an MBA in International Business. After working with prominent companies like Jet Airways and Fitness First India, he dedicated his life to dispelling fitness myths through scientific education.</p>
            <p>Since 2008, Kulbir has undergone rigorous training, evolving into a master educator. In 2016, he founded Fit Mantra Academy (now GSB Academy), certifying over 10,000 students, later expanding to include a dedicated Diet Clinic specializing in holistic IBS recovery.</p>
          </motion.div>
          
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="mt-12 pt-12 border-t border-white/5">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white mb-6 block">Elite Credentials</span>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-sm font-light text-zinc-500">
              <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-zinc-700 mt-0.5"/> ACE Certified Personal Trainer</li>
              <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-zinc-700 mt-0.5"/> TRX Suspension Certified</li>
              <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-zinc-700 mt-0.5"/> Lessmilles Certified RPM</li>
              <li className="flex items-start gap-3"><CheckCircle2 size={16} className="text-zinc-700 mt-0.5"/> BOSU Balance Trainer</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Team - Minimalist Edge-to-Edge */}
      <section className="py-32 px-6 lg:px-12 bg-[#050505] border-y border-white/5">
        <div className="max-w-[1600px] mx-auto w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <div className="overflow-hidden max-w-2xl">
              <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealText} className="text-4xl md:text-6xl font-medium tracking-tighter mb-4">
                The Leadership.
              </motion.h2>
              <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-zinc-500 font-light">
                Backed by a dedicated team of business experts and dietitians committed to delivering world-class education and recovery.
              </motion.p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-12">
            {team.map((member, idx) => (
              <motion.div key={member.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: idx * 0.1, ease: customEase }} className="group">
                <div className="w-full aspect-[4/5] bg-zinc-950 overflow-hidden mb-6">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover object-top md:grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out" />
                </div>
                <h4 className="text-lg font-medium text-white mb-1">{member.name}</h4>
                <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Branches & Aesthetic HQ Map */}
      <section className="py-32 px-6 lg:px-12 max-w-[1600px] mx-auto w-full">
        <div className="flex flex-col lg:flex-row justify-between items-stretch gap-16 mb-24">
          <div className="overflow-hidden max-w-xl flex flex-col justify-start">
             <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealText} className="text-4xl md:text-6xl font-medium tracking-tighter mb-4">Our Presence.</motion.h2>
             <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-zinc-500 font-light mb-8">Operating across India, bringing elite fitness education directly to your city.</motion.p>
             
             <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="w-full flex flex-col pb-8 border-b border-white/10 group mt-auto">
               <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d4af37] mb-4">Headquarters</span>
               <h3 className="text-3xl font-medium mb-4">GSB Main Hub</h3>
               <p className="text-zinc-400 text-sm font-light mb-2">268, Post Office IGNOU, Rajpur Khurd Village</p>
               <p className="text-zinc-400 text-sm font-light mb-6">Chhatarpur, New Delhi 110068</p>
               <p className="text-white text-sm font-mono">+91 9811291573</p>
             </motion.div>
          </div>
          
          {/* Aesthetic, Highly Visible Dark Mode Map */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1, ease: customEase }} className="w-full lg:w-1/2 h-96 lg:h-auto min-h-[400px] relative bg-[#050505] overflow-hidden border border-white/5">
            
            {/* Minimalist Coordinate Readout */}
            <div className="absolute top-6 left-6 z-20 pointer-events-none hidden sm:block">
              <span className="text-[9px] font-mono text-zinc-400 tracking-[0.2em] px-3 py-1.5 bg-[#050505]/80 border border-white/10 backdrop-blur-md">
                LAT 28.498 / LNG 77.183
              </span>
            </div>
            
            {/* Locked CSS-Inverted Google Map with cropped out Top-Left UI */}
            <div className="absolute w-[calc(100%+40px)] h-[calc(100%+160px)] -top-[100px] -left-[20px] pointer-events-none">
              <iframe 
                src="https://maps.google.com/maps?q=F5VQ%2B7W,+New+Delhi,+Delhi&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ 
                  border: 0, 
                  filter: "invert(100%) hue-rotate(180deg) brightness(85%) contrast(100%)" 
                }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full opacity-90"
              ></iframe>
            </div>

            {/* Clean, Non-Obstructive Floating Action Button */}
            <div className="absolute bottom-6 right-6 z-30">
               <a 
                 href="https://www.google.com/maps/search/?api=1&query=268,+Post+Office+IGNOU,+Rajpur+Khurd+Village,+New+Delhi+110068" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="group/btn flex items-center gap-3 px-6 py-3 border border-white/10 bg-[#050505]/90 hover:border-[#d4af37] transition-all duration-300 backdrop-blur-md shadow-2xl"
               >
                 <MapPin size={14} className="text-[#d4af37]" /> 
                 <span className="text-[10px] text-white group-hover/btn:text-[#d4af37] uppercase tracking-[0.2em] font-bold transition-colors duration-300">
                   Open in Maps
                 </span>
               </a>
            </div>

          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {branches.map((branch, idx) => (
            <motion.div key={branch.city} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: idx * 0.1, ease: customEase }} className="group">
              <div className="w-full aspect-[16/9] bg-zinc-950 mb-8 overflow-hidden">
                {/* MOBILE FIRST: Full color/opacity by default, faded state only on desktop (md:grayscale md:opacity-70) */}
                <img src={branch.img} alt={branch.city} className="w-full h-full object-cover opacity-100 md:grayscale md:opacity-70 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 ease-out" />
              </div>
              <h3 className="text-2xl font-medium mb-3">{branch.title}</h3>
              <p className="text-zinc-500 text-sm font-light mb-3 flex items-center gap-2"><MapPin size={14}/> {branch.address}</p>
              <p className="text-white text-sm font-mono">{branch.phone}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Blog - High Contrast */}
      <section className="py-32 px-6 lg:px-12 border-t border-white/5">
        <div className="max-w-[1600px] mx-auto w-full">
          <div className="flex justify-between items-end mb-16 border-b border-white/10 pb-8">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tighter">Knowledge.</h2>
            <Link href="#" className="hidden md:flex text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 hover:text-white transition-colors">View All Articles</Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {blogs.map((blog, idx) => (
              <motion.div key={blog.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: idx * 0.1, ease: customEase }} className="group cursor-pointer">
                <div className="w-full aspect-[4/3] bg-zinc-950 overflow-hidden mb-6">
                   {/* MOBILE FIRST: Full color/opacity by default, faded state only on desktop (md:grayscale md:opacity-60) */}
                   <img src={blog.img} alt={blog.title} className="w-full h-full object-cover opacity-100 md:grayscale md:opacity-60 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 ease-out" />
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d4af37]">{blog.category}</span>
                  <span className="text-xs font-mono text-zinc-600">{blog.date}</span>
                </div>
                <h3 className="text-xl font-medium leading-snug group-hover:text-[#d4af37] transition-colors">{blog.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}