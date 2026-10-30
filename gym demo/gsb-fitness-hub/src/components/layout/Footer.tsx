import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#111113] border-t border-zinc-800/50 pt-20 pb-8 text-zinc-400 font-sans mt-auto">
      <div className="max-w-[1600px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Brand & Contact */}
        <div className="flex flex-col gap-6">
          <div>
            <span className="text-xl font-bold tracking-tighter text-[#d4af37] leading-none uppercase block mb-1">GSB Academy</span>
            <span className="text-[10px] font-medium tracking-[0.3em] text-zinc-500 uppercase">Fitness Verse</span>
          </div>
          <div className="flex flex-col gap-3 text-sm font-light">
            <span className="flex items-start gap-3"><MapPin size={16} className="text-[#d4af37] shrink-0 mt-0.5" /> 268 Rajpur Khurd 1st and 2nd floor, Opposite Gopal Dairy New Delhi 110068</span>
            <a href="tel:+919811291573" className="flex items-center gap-3 hover:text-[#d4af37] transition-colors"><Phone size={16} className="text-[#d4af37] shrink-0" /> +91 9811291573</a>
            <a href="mailto:singhkulbir29@gmail.com" className="flex items-center gap-3 hover:text-[#d4af37] transition-colors"><Mail size={16} className="text-[#d4af37] shrink-0" /> singhkulbir29@gmail.com</a>
          </div>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-100 mb-6 border-b border-zinc-800 pb-3">Customer Service</h3>
          <ul className="flex flex-col gap-3 text-sm font-light">
            <li><Link href="/contact" className="hover:text-[#d4af37] transition-colors">Contact Us</Link></li>
            <li><Link href="#" className="hover:text-[#d4af37] transition-colors">Returns</Link></li>
            <li><Link href="#" className="hover:text-[#d4af37] transition-colors">Site Map</Link></li>
          </ul>
        </div>

        {/* My Account */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-100 mb-6 border-b border-zinc-800 pb-3">My Account</h3>
          <ul className="flex flex-col gap-3 text-sm font-light">
            <li><Link href="#" className="hover:text-[#d4af37] transition-colors">My Profile</Link></li>
            <li><Link href="#" className="hover:text-[#d4af37] transition-colors">Order History</Link></li>
            <li><Link href="#" className="hover:text-[#d4af37] transition-colors">Newsletter</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-100 mb-6 border-b border-zinc-800 pb-3">Newsletter</h3>
          <p className="text-sm font-light mb-4 text-balance">Stay up to date with news, promotions, and holistic fitness advice.</p>
          <form className="flex flex-col gap-3">
            <div className="flex">
              <input type="email" placeholder="Your email address" required className="w-full bg-zinc-900 border border-zinc-800 px-4 py-2 text-sm text-zinc-100 outline-none focus:border-[#d4af37] transition-colors rounded-l-sm" />
              <button type="submit" className="bg-[#d4af37] text-zinc-950 px-4 text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors rounded-r-sm">Send</button>
            </div>
            <label className="flex items-start gap-2 text-xs font-light mt-2 cursor-pointer group">
              <input type="checkbox" required className="mt-0.5 accent-[#d4af37]" />
              <span className="group-hover:text-zinc-300 transition-colors">I have read and agree to the Privacy Policy</span>
            </label>
          </form>
        </div>

      </div>
      
      <div className="max-w-[1600px] mx-auto px-6 pt-8 border-t border-zinc-800/50 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-[0.2em] font-medium text-zinc-600">
        <span>© {new Date().getFullYear()} GSB Academy / Fitness Verse. All Rights Reserved.</span>
        <span>Developed by Tapecut Studios (Demo)</span>
      </div>
    </footer>
  );
}