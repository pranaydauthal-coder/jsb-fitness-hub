"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Store & Courses", href: "/store" },
  { name: "IBS Clinic", href: "/ibs-clinic" },
  { name: "Profile", href: "/profile" },
  { name: "Admin (Only Admin Could See)", href: "/admin" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 w-full z-50 bg-[#050505]/70 backdrop-blur-2xl border-b border-white/5"
    >
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-5 md:py-0 md:h-24 flex flex-col md:flex-row items-center justify-between gap-5 md:gap-0">
        
        {/* Elite Typography Logo */}
        <Link href="/" className="flex flex-col items-center md:items-start group w-full md:w-auto">
          <span className="text-xl md:text-2xl font-black tracking-tighter text-[#d4af37] leading-none group-hover:text-white transition-colors duration-500">
            GSB ACADEMY
          </span>
          <span className="text-[7px] md:text-[9px] uppercase tracking-[0.4em] text-zinc-500 mt-1.5">
            Fitness Verse
          </span>
        </Link>

        {/* Always-Expanded Tactical Navigation */}
        <nav className="flex items-center justify-start md:justify-center gap-6 md:gap-10 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 px-2 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name} 
                href={link.href}
                className="relative flex flex-col items-center justify-center py-2 group whitespace-nowrap"
              >
                <span 
                  className={`text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-500 ${
                    isActive ? "text-white" : "text-zinc-500 group-hover:text-[#d4af37]"
                  }`}
                >
                  {link.name}
                </span>
                
                {isActive && (
                  <motion.div 
                    layoutId="activeNavIndicator"
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className="absolute -bottom-1 md:-bottom-2 w-1.5 h-1.5 bg-[#d4af37] rounded-full shadow-[0_0_10px_#d4af37]"
                  />
                )}
              </Link>
            );
          })}
        </nav>
        
      </div>
    </motion.header>
  );
}