"use client";

import { useState, useEffect } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, BookOpen, X, CreditCard, Smartphone, Banknote, Loader2, Package, MapPin, CheckCircle2, ArrowRight } from "lucide-react";

const customEase = [0.22, 1, 0.36, 1] as const;

const products = [
  { name: "Weight Gainer", price: "₹399.00", category: "Supplement", img: "/10.jpg" },
  { name: "Muscle Builder PM", price: "₹399.00", category: "Supplement", img: "/11.jpg" },
  { name: "Muscle Builder", price: "₹399.00", category: "Supplement", img: "/12.jpg" },
  { name: "Digestion Booster", price: "₹399.00", category: "Supplement", img: "/13.jpg" },
  { name: "Sex Booster", price: "₹399.00", category: "Supplement", img: "/14.jpg" },
  { name: "vitamin and Mineral", price: "₹399.00", category: "Supplement", img: "/15.jpg" },
  { name: "Fish Oil", price: "₹400.00", category: "Supplement", img: "/16.jpg" },
  { name: "Isolate Protein", price: "₹8,000.00", category: "Protein", img: "/17.jpg" },
  { name: "BCAA", price: "₹2,000.00", category: "Recovery", img: "/18.jpg" },
  { name: "Skin Fold Caliper", price: "₹2,500.00", originalPrice: "₹7,999.00", category: "Equipment", img: "/19.jpg" }
];

const courses = [
  { name: "Master Personal Trainer", format: "Certification", price: "₹34,999.00", originalPrice: "₹39,999.00", img: "/20.jpg" },
  { name: "Sports Nutrition & Supplementation", format: "Certification", price: "₹19,999.00", originalPrice: "₹25,000.00", img: "/21.jpg" },
  { name: "Precautions and Measurement before Anabolic Practice", format: "Course", price: "₹12,000.00", originalPrice: "₹15,000.00", img: "/22.jpg" },
  { name: "Anabolic Androgenic Steroid Manual", format: "Manual", price: "₹2,999.00", originalPrice: null, img: "/23.jpg" }
];

type CheckoutState = "idle" | "payment" | "processing" | "tracking";

export default function Store() {
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [checkoutState, setCheckoutState] = useState<CheckoutState>("idle");
  const [paymentMethod, setPaymentMethod] = useState<string>("upi");
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("Initializing Order...");

  useEffect(() => {
    if (checkoutState === "tracking") {
      const milestones = [
        { pct: 10, text: "Authenticating Payment..." },
        { pct: 20, text: "Allocating Inventory..." },
        { pct: 40, text: "Quality Check Passed..." },
        { pct: 60, text: "Dispatched to Courier..." },
        { pct: 90, text: "Out for Delivery..." },
        { pct: 99, text: "Arriving at Destination..." }
      ];
      
      let step = 0;
      setProgress(0);
      
      const interval = setInterval(() => {
        if (step < milestones.length) {
          setProgress(milestones[step].pct);
          setStatusText(milestones[step].text);
          step++;
        } else {
          clearInterval(interval);
        }
      }, 1500);

      return () => clearInterval(interval);
    }
  }, [checkoutState]);

  const handleBuy = (item: any) => {
    setSelectedItem(item);
    setCheckoutState("payment");
  };

  const handleConfirmOrder = () => {
    setCheckoutState("processing");
    setTimeout(() => {
      setCheckoutState("tracking");
    }, 2000);
  };

  const closeCheckout = () => {
    setCheckoutState("idle");
    setTimeout(() => setSelectedItem(null), 500); 
  };

  return (
    <main className="min-h-screen bg-[#050505] font-sans text-zinc-50 flex flex-col relative selection:bg-[#d4af37]/30 selection:text-[#d4af37]">
      <Navbar />
      
      <div className="pt-40 pb-32 px-6 lg:px-12 max-w-[1600px] mx-auto w-full">
        <div className="overflow-hidden mb-8">
          <motion.h1 initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1.2, ease: customEase }} className="text-6xl md:text-8xl lg:text-[10rem] font-medium tracking-tighter leading-[0.9]">
            The <span className="text-[#d4af37]">Store.</span>
          </motion.h1>
        </div>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 1 }} className="text-zinc-500 text-lg font-light max-w-2xl mb-32">
          Premium supplements, elite certification courses, and specialized manuals to launch your fitness career.
        </motion.p>
        
        {/* Products Section */}
        <div className="flex items-center gap-6 mb-12 border-b border-white/5 pb-6">
          <ShoppingBag className="text-zinc-700" size={28} />
          <h2 className="text-3xl font-medium tracking-tighter">Products & Supplements.</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-12 mb-32">
          {products.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.8, ease: customEase }} className="group flex flex-col cursor-pointer" onClick={() => handleBuy(item)}>
              <div className="w-full aspect-[4/5] bg-zinc-950 overflow-hidden mb-6">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover md:grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out" />
              </div>
              <div className="flex flex-col flex-1">
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#d4af37] mb-3 block">{item.category}</span>
                <h3 className="text-lg font-medium leading-snug text-white mb-6 group-hover:text-[#d4af37] transition-colors">{item.name}</h3>
                <div className="mt-auto flex justify-between items-end border-t border-white/5 pt-4">
                  <div className="flex flex-col">
                    {item.originalPrice && <span className="line-through text-zinc-600 text-xs">{item.originalPrice}</span>}
                    <span className="text-xl font-light text-zinc-300">{item.price}</span>
                  </div>
                  <button className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 group-hover:text-white transition-colors flex items-center gap-2">
                    Acquire <ArrowRight size={12} className="-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Courses Section */}
        <div className="flex items-center gap-6 mb-12 border-b border-white/5 pb-6">
          <BookOpen className="text-zinc-700" size={28} />
          <h2 className="text-3xl font-medium tracking-tighter">Academy Certifications.</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.8, ease: customEase }} className="flex flex-col xl:flex-row bg-[#050505] border border-white/5 group cursor-pointer hover:border-white/20 transition-colors" onClick={() => handleBuy(course)}>
              <div className="w-full xl:w-1/2 aspect-video xl:aspect-auto bg-zinc-950 overflow-hidden">
                <img src={course.img} alt={course.name} className="w-full h-full object-cover md:grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out" />
              </div>
              <div className="p-10 w-full xl:w-1/2 flex flex-col justify-center">
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#d4af37] mb-4 block">{course.format}</span>
                <h3 className="text-3xl font-medium mb-6 leading-tight">{course.name}</h3>
                <div className="flex items-center gap-4 mb-10">
                  {course.originalPrice && <span className="line-through text-zinc-600 text-lg">{course.originalPrice}</span>}
                  <span className="text-2xl font-light text-zinc-300">{course.price}</span>
                </div>
                <button className="border border-white/10 px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] group-hover:bg-white group-hover:text-black transition-all duration-500 mt-auto w-fit">
                  Enroll Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />

      {/* --- CINEMATIC CHECKOUT OVERLAYS --- */}
      <AnimatePresence>
        {checkoutState !== "idle" && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-[#050505]/90 backdrop-blur-xl"
          >
            {/* Step 1: Payment HUD */}
            {checkoutState === "payment" && selectedItem && (
              <motion.div 
                initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: -20 }} transition={{ duration: 0.6, ease: customEase }} 
                /* Added max-h-[85vh] and overflow-y-auto to fix the mobile scrolling issue */
                className="w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-[#0a0a0a] border border-white/10 relative flex flex-col md:flex-row [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              >
                <button onClick={closeCheckout} className="absolute top-4 right-4 z-20 text-zinc-500 hover:text-white transition-colors bg-[#0a0a0a]/80 backdrop-blur-md p-1 rounded-full"><X size={20} /></button>
                
                <div className="w-full md:w-2/5 bg-zinc-950 p-8 flex flex-col border-b md:border-b-0 md:border-r border-white/5">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d4af37] mb-2">Order Summary</span>
                  <h3 className="text-xl font-medium mb-8 leading-tight">{selectedItem.name}</h3>
                  <img src={selectedItem.img} alt="" className="w-full aspect-square object-cover mb-8 opacity-70 grayscale" />
                  <div className="mt-auto flex justify-between items-end">
                    <span className="text-zinc-500 text-xs">Total</span>
                    <span className="text-2xl font-light text-white">{selectedItem.price}</span>
                  </div>
                </div>

                <div className="w-full md:w-3/5 p-8 flex flex-col">
                  <h3 className="text-lg font-medium mb-6">Select Payment Method</h3>
                  <div className="flex flex-col gap-3 mb-8">
                    <button onClick={() => setPaymentMethod("upi")} className={`flex items-center gap-4 p-4 border transition-all duration-300 ${paymentMethod === "upi" ? "border-[#d4af37] bg-[#d4af37]/5" : "border-white/5 hover:border-white/20"}`}>
                      <Smartphone size={18} className={paymentMethod === "upi" ? "text-[#d4af37]" : "text-zinc-500"} />
                      <span className="text-sm font-light">UPI Transfer</span>
                    </button>
                    <button onClick={() => setPaymentMethod("card")} className={`flex items-center gap-4 p-4 border transition-all duration-300 ${paymentMethod === "card" ? "border-[#d4af37] bg-[#d4af37]/5" : "border-white/5 hover:border-white/20"}`}>
                      <CreditCard size={18} className={paymentMethod === "card" ? "text-[#d4af37]" : "text-zinc-500"} />
                      <span className="text-sm font-light">Credit / Debit Card</span>
                    </button>
                    <button onClick={() => setPaymentMethod("cod")} className={`flex items-center gap-4 p-4 border transition-all duration-300 ${paymentMethod === "cod" ? "border-[#d4af37] bg-[#d4af37]/5" : "border-white/5 hover:border-white/20"}`}>
                      <Banknote size={18} className={paymentMethod === "cod" ? "text-[#d4af37]" : "text-zinc-500"} />
                      <span className="text-sm font-light">Cash on Delivery</span>
                    </button>
                  </div>

                  {paymentMethod === "upi" && (
                    <div className="mb-8">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-2 block">Enter UPI ID</label>
                      <input type="text" placeholder="e.g. user@okbank" className="w-full bg-[#050505] border border-white/10 p-3 text-sm text-white focus:outline-none focus:border-[#d4af37] transition-colors" />
                    </div>
                  )}

                  <button onClick={handleConfirmOrder} className="w-full bg-white text-black py-4 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#d4af37] transition-colors mt-auto shrink-0">
                    Confirm & Pay
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Processing Gate */}
            {checkoutState === "processing" && (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center text-center">
                <Loader2 size={48} className="text-[#d4af37] animate-spin mb-6" />
                <h3 className="text-2xl font-medium tracking-tighter mb-2">Establishing Secure Connection</h3>
                <p className="text-zinc-500 font-mono text-xs tracking-widest">ENCRYPTING TRANSACTION DATA...</p>
              </motion.div>
            )}

            {/* Step 3: Tactical Tracker */}
            {checkoutState === "tracking" && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-4xl relative">
                <button onClick={closeCheckout} className="absolute -top-12 right-0 text-zinc-500 hover:text-white flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest transition-colors"><X size={14}/> Close HUD</button>
                
                <div className="border border-white/10 bg-[#0a0a0a] p-10 lg:p-16 relative overflow-hidden">
                  <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:1rem_1rem] z-0" />
                  
                  <div className="relative z-10 flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d4af37] mb-2 block">Live Logistics</span>
                      <h2 className="text-4xl md:text-5xl font-medium tracking-tighter">Order Status.</h2>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-1 block">Tracking ID</span>
                      <span className="text-lg font-mono text-white">GSB-8842-AX9</span>
                    </div>
                  </div>

                  <div className="relative z-10 mb-8">
                    {/* The animated progress line */}
                    <div className="w-full h-px bg-white/10 relative">
                      <motion.div 
                        initial={{ width: "0%" }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="absolute top-0 left-0 h-full bg-[#d4af37] shadow-[0_0_10px_#d4af37]"
                      />
                      <div className="absolute -top-1.5 right-0 w-3 h-3 bg-[#050505] border border-white/20 rounded-full" />
                    </div>
                  </div>

                  <div className="relative z-10 flex items-end justify-between">
                    <div className="flex flex-col gap-2">
                      <span className="text-sm font-mono text-[#d4af37] uppercase tracking-widest animate-pulse">{statusText}</span>
                      <span className="text-xs text-zinc-600 font-light">ETA: 2-3 Business Days</span>
                    </div>
                    <div className="flex flex-col items-end">
                      <motion.span 
                        key={progress} 
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-7xl font-light tracking-tighter text-white leading-none"
                      >
                        {progress}<span className="text-2xl text-zinc-500">%</span>
                      </motion.span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}