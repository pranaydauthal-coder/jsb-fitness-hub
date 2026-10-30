"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Smile, Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

// Premium Apple-style easing
const smoothEase = [0.16, 1, 0.3, 1] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // Allows us to close menu on route change if needed

  // Handle Navbar Background on Scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock Body Scroll when Mobile Menu is Open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${scrolled || mobileMenuOpen ? "bg-white/80 backdrop-blur-xl border-b border-slate-200/60 py-4 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2 group" onClick={closeMenu}>
            <Smile size={28} className="text-blue-600 group-hover:scale-110 transition-transform" strokeWidth={2} />
            <span className="text-xl font-bold tracking-tight text-slate-900">Dr. Kriti's</span>
          </Link>
          
          {/* DESKTOP LINKS (Hidden on Mobile) */}
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-500">
            <Link href="/treatments" className={`hover:text-blue-600 transition-colors ${pathname === '/treatments' ? 'text-blue-600' : ''}`}>Treatments</Link>
            <Link href="/practice" className={`hover:text-blue-600 transition-colors ${pathname === '/practice' ? 'text-blue-600' : ''}`}>Our Practice</Link>
            <Link href="/stories" className={`hover:text-blue-600 transition-colors ${pathname === '/stories' ? 'text-blue-600' : ''}`}>Patient Stories</Link>
          </div>

          <div className="flex items-center gap-4">
            {/* DESKTOP PHONE (Hidden on Small Screens) */}
            <a href="tel:+918448078466" className="hidden lg:block text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors mr-2">
              (+91) 84480 78466
            </a>
            
            {/* DESKTOP BOOK BUTTON (Hidden on Mobile) */}
            <Link href="/contact" className="hidden md:flex px-6 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-full hover:bg-blue-600 transition-all shadow-md hover:shadow-lg">
              Book Appointment
            </Link>

            {/* MOBILE HAMBURGER BUTTON (Hidden on Desktop) */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 -mr-2 text-slate-900 hover:bg-slate-100 rounded-full transition-colors active:scale-95"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE FULL-SCREEN MENU OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, filter: "blur(5px)" }}
            transition={{ duration: 0.4, ease: smoothEase }}
            className="fixed inset-0 z-50 bg-white/95 backdrop-blur-2xl pt-28 px-6 flex flex-col h-[100dvh]"
          >
            <div className="flex flex-col gap-6 text-3xl font-medium tracking-tight text-slate-900 mt-4">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1, ease: smoothEase }}>
                <Link href="/treatments" onClick={closeMenu} className="block hover:text-blue-600 transition-colors border-b border-slate-200/60 pb-6">Treatments</Link>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15, ease: smoothEase }}>
                <Link href="/practice" onClick={closeMenu} className="block hover:text-blue-600 transition-colors border-b border-slate-200/60 pb-6">Our Practice</Link>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, ease: smoothEase }}>
                <Link href="/stories" onClick={closeMenu} className="block hover:text-blue-600 transition-colors border-b border-slate-200/60 pb-6">Patient Stories</Link>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.25, ease: smoothEase }}>
                <Link href="/contact" onClick={closeMenu} className="block hover:text-blue-600 transition-colors border-b border-slate-200/60 pb-6">Contact Us</Link>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, ease: smoothEase }}
              className="mt-auto mb-10 flex flex-col gap-4"
            >
              <a href="tel:+918448078466" className="w-full py-4 bg-slate-50 text-slate-900 border border-slate-200 font-bold rounded-2xl text-center flex items-center justify-center gap-3 hover:bg-slate-100 transition-colors">
                <Phone size={18} className="text-blue-600" />
                Call (+91) 84480 78466
              </a>
              <Link href="/contact" onClick={closeMenu} className="w-full py-4 bg-blue-600 text-white font-bold rounded-2xl text-center shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:bg-blue-700 transition-colors">
                Book a Consult
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}