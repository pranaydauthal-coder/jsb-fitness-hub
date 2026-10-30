"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, AtSign, Loader2, CheckCircle2, ChevronDown, MessageSquare } from "lucide-react";

const smoothEase = [0.16, 1, 0.3, 1] as const;

export default function ContactPage() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [loadingText, setLoadingText] = useState("");
  const [showToast, setShowToast] = useState(false);
  
  // Capture user input to personalize the text message
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    service: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setShowToast(false);
    
    // 1. Pretend Sleep: Simulate API network request and Mail Service architecture
    setLoadingText("Encrypting patient data...");
    await new Promise(resolve => setTimeout(resolve, 800));
    
    setLoadingText("Dispatching via Brevo Mail Service...");
    await new Promise(resolve => setTimeout(resolve, 1200));

    setLoadingText("Sending SMS confirmation...");
    await new Promise(resolve => setTimeout(resolve, 800));

    // 2. Transition to Success Screen
    setFormState('success');

    // 3. Trigger the realistic business text message notification
    setTimeout(() => {
      setShowToast(true);
    }, 600);

    // Auto-dismiss the text message after 6 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 6000);
  };

  return (
    <main className="min-h-screen bg-[#FAFAFA] font-sans text-slate-900 overflow-x-hidden selection:bg-blue-200">
      <Navbar />
      
      <div className="relative pt-40 pb-24 px-6 max-w-7xl mx-auto">
        {/* Abstract Background Glow */}
        <div className="absolute top-0 right-1/4 w-[60vw] max-w-[800px] h-[500px] bg-gradient-to-bl from-blue-100/50 to-transparent blur-[100px] rounded-full pointer-events-none -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* LEFT COLUMN: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, ease: smoothEase }}
            className="lg:col-span-5 flex flex-col"
          >
            <span className="text-sm font-semibold tracking-widest uppercase text-blue-600 mb-6 block">Reach Out</span>
            <h1 className="text-5xl md:text-6xl font-medium tracking-tight mb-8 text-slate-900 leading-[1.1]">
              Let's schedule <br />
              <span className="text-slate-400 italic font-light">your visit.</span>
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed mb-12 font-light text-balance">
              Whether you need a routine checkup or a complex consultation, our team is ready to provide personalized, gentle care.
            </p>

            <div className="space-y-10 border-t border-slate-200/60 pt-10">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-blue-600 shrink-0 group-hover:border-blue-200 group-hover:bg-blue-50 transition-colors">
                  <Phone size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold tracking-widest uppercase text-slate-400 mb-1">Phone</h3>
                  <a href="tel:+918448078466" className="text-xl text-slate-900 font-medium hover:text-blue-600 transition-colors">(+91) 84480 78466</a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-blue-600 shrink-0 group-hover:border-blue-200 group-hover:bg-blue-50 transition-colors">
                  <Mail size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold tracking-widest uppercase text-slate-400 mb-1">Email</h3>
                  <a href="mailto:Kds.dentalhealth@gmail.com" className="text-xl text-slate-900 font-medium hover:text-blue-600 transition-colors">Kds.dentalhealth@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-blue-600 shrink-0 group-hover:border-blue-200 group-hover:bg-blue-50 transition-colors">
                  <MapPin size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold tracking-widest uppercase text-slate-400 mb-1">Clinic Address</h3>
                  <p className="text-xl text-slate-900 font-medium leading-relaxed">
                    A-65, Suman Colony,<br />
                    Chattarpur Extension Road,<br />
                    New Delhi
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-blue-600 shrink-0 group-hover:border-blue-200 group-hover:bg-blue-50 transition-colors">
                  <AtSign size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold tracking-widest uppercase text-slate-400 mb-1">Instagram</h3>
                  <a href="https://instagram.com/dr.kritii.banerjee" target="_blank" rel="noopener noreferrer" className="text-xl text-slate-900 font-medium hover:text-blue-600 transition-colors">@dr.kritii.banerjee</a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Interactive Booking Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: smoothEase, delay: 0.2 }}
            className="lg:col-span-7 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200/60 relative overflow-hidden min-h-[600px] flex flex-col"
          >
            <AnimatePresence mode="wait">
              {formState !== 'success' ? (
                <motion.form 
                  key="booking-form"
                  initial={{ opacity: 0, filter: "blur(10px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, filter: "blur(10px)", y: -20 }}
                  transition={{ duration: 0.5, ease: smoothEase }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-6 h-full"
                >
                  <h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-2">Book a Consult</h2>
                  <p className="text-slate-500 font-light mb-4 text-balance">Fill out the details below and our team will confirm your appointment shortly.</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-slate-700 ml-1">Full Name *</label>
                      <input required type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" 
                        className="px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none font-medium placeholder:text-slate-400 placeholder:font-light" 
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-slate-700 ml-1">Phone Number *</label>
                      <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" 
                        className="px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none font-medium placeholder:text-slate-400 placeholder:font-light" 
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Email Address (Optional)</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" 
                      className="px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none font-medium placeholder:text-slate-400 placeholder:font-light" 
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-slate-700 ml-1">Preferred Date *</label>
                      <input required type="date" name="date" value={formData.date} onChange={handleChange}
                        className="px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none font-medium text-slate-700" 
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-slate-700 ml-1">Service Required *</label>
                      <div className="relative">
                        <select required name="service" value={formData.service} onChange={handleChange} className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none font-medium text-slate-700 appearance-none cursor-pointer">
                          <option value="" disabled>Select a treatment...</option>
                          <option value="General Checkup">General Checkup & Cleaning</option>
                          <option value="Root Canal">Root Canal Treatment</option>
                          <option value="Extraction">Tooth Extraction</option>
                          <option value="Veneers">Smile Design & Veneers</option>
                          <option value="Whitening">Teeth Whitening</option>
                          <option value="Implants">Dental Implants</option>
                          <option value="Other">Other / Not Sure</option>
                        </select>
                        <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={20} />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Additional Notes</label>
                    <textarea rows={3} placeholder="Describe any pain, symptoms, or specific requests..." 
                      className="px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none font-medium placeholder:text-slate-400 placeholder:font-light resize-none" 
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={formState === 'submitting'}
                    className="mt-auto w-full py-5 bg-slate-900 text-white font-bold rounded-2xl hover:bg-blue-600 transition-all shadow-md hover:shadow-lg disabled:opacity-80 disabled:cursor-not-allowed flex items-center justify-center gap-3 overflow-hidden relative"
                  >
                    <AnimatePresence mode="wait">
                      {formState === 'submitting' ? (
                        <motion.div 
                          key="loading" 
                          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                          className="flex items-center gap-3"
                        >
                          <Loader2 size={20} className="animate-spin" />
                          <span className="font-medium tracking-wide">{loadingText}</span>
                        </motion.div>
                      ) : (
                        <motion.span 
                          key="idle" 
                          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                          className="font-medium tracking-wide"
                        >
                          Submit Booking Request
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success-state"
                  initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.6, ease: smoothEase }}
                  className="flex flex-col items-center justify-center text-center h-full my-auto py-12"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
                    className="w-24 h-24 bg-green-50 border border-green-100 rounded-full flex items-center justify-center text-green-500 mb-8"
                  >
                    <CheckCircle2 size={40} strokeWidth={2} />
                  </motion.div>
                  
                  <h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">Request Received!</h2>
                  <p className="text-slate-500 text-lg font-light max-w-md mx-auto leading-relaxed mb-10">
                    Thank you for reaching out, {formData.name.split(' ')[0] || 'there'}. Our clinic coordinator will contact you shortly to confirm your {formData.service || 'appointment'}.
                  </p>
                  
                  <button 
                    onClick={() => {
                      setFormState('idle');
                      setFormData({ name: "", email: "", phone: "", date: "", service: "" });
                    }}
                    className="px-8 py-4 bg-slate-50 text-slate-900 border border-slate-200 font-semibold rounded-full hover:bg-slate-100 transition-all"
                  >
                    Book Another Consult
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* 4. SLIDE-IN BUSINESS TEXT MESSAGE NOTIFICATION */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-6 right-6 z-50 w-80 md:w-96 bg-white/95 backdrop-blur-xl border border-slate-200/60 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] rounded-2xl p-5"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0 shadow-md">
                <MessageSquare size={18} />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-bold text-slate-900">Dr. Kriti's Studio</span>
                  <span className="text-xs text-slate-400 font-medium">Just now</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  Hi {formData.name.split(' ')[0] || 'there'}, your request for {formData.date || 'a consult'} is confirmed! We've sent a detailed email to {formData.email || 'your inbox'}.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}