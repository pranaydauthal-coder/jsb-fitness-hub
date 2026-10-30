"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingCart, Menu, X, ShieldCheck } from "lucide-react";

const smoothEase = [0.16, 1, 0.3, 1] as const;

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  const NavLinks = () => (
    <>
      <Link href="/" onClick={closeMenu} className="text-xs font-bold uppercase tracking-widest text-zinc-300 hover:text-[#d4af37] transition-colors">Home</Link>
      <Link href="/store" onClick={closeMenu} className="text-xs font-bold uppercase tracking-widest text-zinc-300 hover:text-[#d4af37] transition-colors">Store & Courses</Link>
      <Link href="/ibs-clinic" onClick={closeMenu} className="text-xs font-bold uppercase tracking-widest text-zinc-300 hover:text-[#d4af37] transition-colors">IBS Clinic</Link>
      <Link href="/contact" onClick={closeMenu} className="text-xs font-bold uppercase tracking-widest text-zinc-300 hover:text-[#d4af37] transition-colors">Contact Us</Link>
    </>
  );

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-[#09090b]/90 backdrop-blur-md border-b border-zinc-800/50 py-4" : "bg-transparent py-6"}`}>
        <div className="max-w-[1600px] mx-auto px-6 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" onClick={closeMenu} className="flex flex-col">
            <span className="text-2xl font-bold tracking-tighter text-[#d4af37] leading-none uppercase">GSB Academy</span>
            <span className="text-[10px] font-medium tracking-[0.3em] text-zinc-500 uppercase mt-1">Fitness Verse</span>
          </Link>
          
          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            <NavLinks />
          </div>

          {/* Icons & Admin */}
          <div className="hidden lg:flex items-center gap-6">
            <button className="text-zinc-300 hover:text-[#d4af37] transition-colors"><Search size={18} /></button>
            <Link href="/store" className="text-zinc-300 hover:text-[#d4af37] transition-colors"><ShoppingCart size={18} /></Link>
            <div className="w-[1px] h-4 bg-zinc-800" />
            <Link href="/admin" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-950 bg-[#d4af37] px-4 py-2 hover:bg-white transition-colors">
              <ShieldCheck size={14} /> Admin
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 text-zinc-300 hover:text-[#d4af37] transition-colors z-50">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: smoothEase }}
            className="fixed inset-0 z-40 bg-[#09090b]/95 backdrop-blur-2xl pt-32 px-6 flex flex-col h-[100dvh]"
          >
            <div className="flex flex-col gap-8 mb-auto">
              <NavLinks />
            </div>
            
            <div className="flex flex-col gap-4 mb-12">
              <Link href="/admin" onClick={closeMenu} className="w-full py-4 bg-[#d4af37] text-zinc-950 font-bold text-center uppercase tracking-widest text-xs flex items-center justify-center gap-2">
                <ShieldCheck size={16} /> Operations Dashboard
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}