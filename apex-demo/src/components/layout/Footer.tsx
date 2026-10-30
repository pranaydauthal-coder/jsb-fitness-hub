"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Smile, MapPin, Phone, Mail, AtSign } from "lucide-react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="w-full border-t border-slate-200/60 bg-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <Smile size={24} className="text-blue-600" />
            <span className="text-xl font-bold tracking-tight text-slate-900">Dr. Kriti's Dental Studio</span>
          </div>
          <p className="text-slate-500 max-w-md text-sm leading-relaxed mb-8 font-medium">
            We provide all dental services under one roof. Executed by a panel of specialists with the utmost care to sterilization protocols and premium materials.
          </p>
          <div className="flex gap-4 text-slate-400">
            <a href="https://instagram.com/dr.kritii.banerjee" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-slate-50 rounded-full border border-slate-200/60 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-all">
              <AtSign size={18} />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h4 className="font-bold text-slate-900 tracking-tight">Quick Links</h4>
          <nav className="flex flex-col gap-3">
            <Link href="/treatments" className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium">Treatments</Link>
            <Link href="/practice" className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium">Our Practice</Link>
            <Link href="/stories" className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium">Patient Stories</Link>
            <Link href="/contact" className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium">Contact Us</Link>
          </nav>
        </div>

        <div className="flex flex-col gap-5">
          <h4 className="font-bold text-slate-900 tracking-tight">Contact Details</h4>
          <div className="flex flex-col gap-4 text-sm text-slate-500 font-medium">
            <a href="tel:+918448078466" className="flex items-center gap-3 hover:text-blue-600 transition-colors">
              <span className="p-2 bg-slate-50 rounded-full border border-slate-200/60"><Phone size={14} className="text-blue-600" /></span>
              (+91) 84480 78466
            </a>
            <a href="mailto:Kds.dentalhealth@gmail.com" className="flex items-center gap-3 hover:text-blue-600 transition-colors">
              <span className="p-2 bg-slate-50 rounded-full border border-slate-200/60"><Mail size={14} className="text-blue-600" /></span>
              Kds.dentalhealth@gmail.com
            </a>
            <span className="flex items-start gap-3 leading-relaxed mt-2">
              <span className="p-2 bg-slate-50 rounded-full border border-slate-200/60 shrink-0"><MapPin size={14} className="text-blue-600" /></span>
              <span>A-65, Suman Colony, <br />Chattarpur Extension Road, <br />New Delhi</span>
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-200/60 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-400 text-sm font-medium">
          © {currentYear} Dr. Kriti's Dental Studio. All rights reserved.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors text-sm font-medium">Terms & Support</a>
            <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors text-sm font-medium">Privacy Policy</a>
          </div>
          <div className="hidden md:block w-px h-4 bg-slate-300"></div>
          <p className="text-slate-400 text-sm font-medium">
            Designed by <a href="https://tapecut.info" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-bold">Tapecut Studios</a>
          </p>
        </div>
      </div>
    </footer>
  );
}