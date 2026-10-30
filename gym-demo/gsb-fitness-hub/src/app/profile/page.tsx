"use client";

import { useState } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { User, Wallet, CheckCircle2, AlertCircle, X, CreditCard, Smartphone, Loader2, Calendar, FileText } from "lucide-react";

const customEase = [0.22, 1, 0.36, 1] as const;

type PaymentState = "idle" | "payment" | "processing" | "success";

export default function Profile() {
  const [feeStatus, setFeeStatus] = useState<"pending" | "paid">("pending");
  const [paymentState, setPaymentState] = useState<PaymentState>("idle");
  const [paymentMethod, setPaymentMethod] = useState<string>("upi");

  const handlePayNow = () => setPaymentState("payment");
  const closePayment = () => setPaymentState("idle");

  const processPayment = () => {
    setPaymentState("processing");
    setTimeout(() => {
      setPaymentState("success");
      setFeeStatus("paid");
      setTimeout(() => {
        setPaymentState("idle");
      }, 3000);
    }, 2500);
  };

  return (
    <main className="min-h-screen bg-[#050505] font-sans text-zinc-50 flex flex-col relative selection:bg-[#d4af37]/30 selection:text-[#d4af37]">
      <Navbar />
      
      <div className="pt-40 pb-32 px-6 lg:px-12 max-w-[1600px] mx-auto w-full flex-1">
        <div className="overflow-hidden mb-16">
          <motion.h1 initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1.2, ease: customEase }} className="text-5xl md:text-7xl lg:text-[8rem] font-medium tracking-tighter leading-[0.9]">
            Member <span className="text-[#d4af37]">Portal.</span>
          </motion.h1>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Profile & Enrolled Courses */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: customEase }} className="lg:col-span-7 flex flex-col gap-8">
            
            {/* ID Card with Randomized Demo Name */}
            <div className="bg-[#0a0a0a] border border-white/5 p-8 flex flex-col md:flex-row items-center md:items-start gap-8 relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2rem_2rem] z-0" />
              <div className="w-24 h-24 bg-zinc-950 border border-white/10 rounded-full flex items-center justify-center relative z-10 shrink-0">
                <User size={32} className="text-[#d4af37]" />
              </div>
              <div className="relative z-10 text-center md:text-left flex-1">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d4af37] mb-2 block">Active Member</span>
                <h2 className="text-3xl font-medium mb-1">Rohan Verma</h2>
                <p className="text-zinc-500 font-mono text-xs mb-6">UID: GSB-2026-4821</p>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                  <span className="text-xs font-light text-zinc-400 border border-white/10 px-3 py-1.5 bg-[#050505]">Delhi Batch</span>
                  <span className="text-xs font-light text-zinc-400 border border-white/10 px-3 py-1.5 bg-[#050505]">Joined Oct 2026</span>
                </div>
              </div>
            </div>

            {/* Enrolled Courses */}
            <div className="bg-transparent border border-white/5 p-8">
              <h3 className="text-xl font-medium mb-6 border-b border-white/5 pb-4 flex items-center gap-3">
                <FileText size={18} className="text-[#d4af37]" /> Active Enrollments
              </h3>
              <div className="flex flex-col gap-4">
                <div className="bg-[#0a0a0a] border border-white/5 p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:border-white/20 transition-colors cursor-default">
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#d4af37] mb-2 block">Certification</span>
                    <h4 className="text-lg font-medium text-white mb-1">Precautions and Measurement before Anabolic Practice</h4>
                    <p className="text-zinc-500 text-xs font-light">Progress: Module 2 of 8</p>
                  </div>
                  <div className="text-right">
                    <span className="text-white font-mono text-sm block">₹12,000.00</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Fee Management HUD */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: customEase }} className="lg:col-span-5 relative group">
            <div className="absolute inset-0 bg-gradient-to-b from-[#d4af37]/5 to-transparent blur-xl pointer-events-none opacity-50" />
            
            <div className="bg-[#0a0a0a] border border-white/10 p-8 relative z-10 flex flex-col h-full min-h-[400px]">
              <div className="flex justify-between items-start border-b border-white/5 pb-6 mb-8">
                <div>
                  <h3 className="text-2xl font-medium flex items-center gap-3"><Wallet size={20} className="text-[#d4af37]" /> Fee Ledger</h3>
                  <p className="text-zinc-500 text-xs font-light mt-2">Current billing cycle</p>
                </div>
                {feeStatus === "pending" ? (
                  <span className="flex items-center gap-1.5 bg-red-500/10 text-red-500 border border-red-500/20 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest">
                    <AlertCircle size={12} /> Pending
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5 bg-green-500/10 text-green-500 border border-green-500/20 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest">
                    <CheckCircle2 size={12} /> Cleared
                  </span>
                )}
              </div>

              <div className="flex flex-col flex-1">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-2">Total Due</span>
                <span className="text-5xl font-light tracking-tighter text-white mb-8">
                  {feeStatus === "pending" ? "₹12,000" : "₹0"}<span className="text-xl text-zinc-600">.00</span>
                </span>

                <div className="flex items-center justify-between text-sm mb-4">
                  <span className="text-zinc-500 flex items-center gap-2"><Calendar size={14}/> Due Date</span>
                  <span className="text-white font-mono">15 Nov 2026</span>
                </div>
                
                {feeStatus === "pending" ? (
                  <div className="mt-auto pt-8">
                    <p className="text-xs text-zinc-500 font-light mb-4">Pay securely now or clear the balance before the due date to maintain active membership access.</p>
                    <button onClick={handlePayNow} className="w-full bg-white text-black py-4 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#d4af37] transition-colors">
                      Pay Fees Now
                    </button>
                  </div>
                ) : (
                  <div className="mt-auto pt-8 border-t border-white/5">
                    <p className="text-xs text-green-500/70 font-mono mb-2 flex items-center gap-2"><CheckCircle2 size={14}/> Payment Received</p>
                    <p className="text-[10px] text-zinc-600 uppercase tracking-widest">TXN: GSB-FEE-8842X</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />

      {/* --- CINEMATIC FEE PAYMENT OVERLAYS --- */}
      <AnimatePresence>
        {paymentState !== "idle" && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-[#050505]/90 backdrop-blur-xl"
          >
            {paymentState === "payment" && (
              <motion.div 
                initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: -20 }} transition={{ duration: 0.6, ease: customEase }} 
                className="w-full max-w-xl max-h-[85vh] overflow-y-auto bg-[#0a0a0a] border border-white/10 relative flex flex-col [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              >
                <button onClick={closePayment} className="absolute top-4 right-4 z-20 text-zinc-500 hover:text-white transition-colors bg-[#0a0a0a]/80 backdrop-blur-md p-1 rounded-full"><X size={20} /></button>
                
                <div className="p-8 border-b border-white/5 bg-zinc-950">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d4af37] mb-2 block">Clear Dues</span>
                  <h3 className="text-xl font-medium mb-2">Membership & Course Fees</h3>
                  <span className="text-3xl font-light text-white">₹12,000.00</span>
                </div>

                <div className="p-8 flex flex-col">
                  <h3 className="text-sm font-medium mb-4 text-zinc-400">Select Payment Method</h3>
                  <div className="flex flex-col gap-3 mb-8">
                    <button onClick={() => setPaymentMethod("upi")} className={`flex items-center gap-4 p-4 border transition-all duration-300 ${paymentMethod === "upi" ? "border-[#d4af37] bg-[#d4af37]/5" : "border-white/5 hover:border-white/20"}`}>
                      <Smartphone size={18} className={paymentMethod === "upi" ? "text-[#d4af37]" : "text-zinc-500"} />
                      <span className="text-sm font-light">UPI Transfer</span>
                    </button>
                    <button onClick={() => setPaymentMethod("card")} className={`flex items-center gap-4 p-4 border transition-all duration-300 ${paymentMethod === "card" ? "border-[#d4af37] bg-[#d4af37]/5" : "border-white/5 hover:border-white/20"}`}>
                      <CreditCard size={18} className={paymentMethod === "card" ? "text-[#d4af37]" : "text-zinc-500"} />
                      <span className="text-sm font-light">Credit / Debit Card</span>
                    </button>
                  </div>

                  {paymentMethod === "upi" && (
                    <div className="mb-8">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-2 block">Enter UPI ID</label>
                      <input type="text" placeholder="e.g. user@okbank" className="w-full bg-[#050505] border border-white/10 p-3 text-sm text-white focus:outline-none focus:border-[#d4af37] transition-colors" />
                    </div>
                  )}

                  <button onClick={processPayment} className="w-full bg-white text-black py-4 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#d4af37] transition-colors mt-auto shrink-0">
                    Authorize Payment
                  </button>
                </div>
              </motion.div>
            )}

            {paymentState === "processing" && (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center text-center">
                <Loader2 size={48} className="text-[#d4af37] animate-spin mb-6" />
                <h3 className="text-2xl font-medium tracking-tighter mb-2">Processing Transaction</h3>
                <p className="text-zinc-500 font-mono text-xs tracking-widest">COMMUNICATING WITH BANK...</p>
              </motion.div>
            )}

            {paymentState === "success" && (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center text-center bg-[#0a0a0a] border border-white/10 p-12 max-w-md w-full">
                <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-6">
                  <CheckCircle2 size={40} className="text-green-500" />
                </div>
                <h3 className="text-3xl font-medium tracking-tighter mb-2">Payment Successful</h3>
                <p className="text-zinc-400 font-light mb-8">Your account ledger has been updated.</p>
                <div className="w-full border-t border-white/5 pt-6 text-left">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 block mb-1">Transaction ID</span>
                  <span className="text-sm font-mono text-white">GSB-FEE-8842X</span>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}