"use client";

import { useState } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingCart, MessageCircle, Filter, Check, ChevronDown, LayoutGrid, List } from "lucide-react";

// Product Database based on your GSB Academy inventory
const products = [
  { id: 1, title: "Anabolic Nutrition And Supplement Expert", type: "Course", price: 11999, originalPrice: 20000, img: "https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 2, title: "Basic Anabolic Education & Safety Measures", type: "Course", price: 19999, originalPrice: 50000, img: "https://images.pexels.com/photos/3289711/pexels-photo-3289711.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 3, title: "Basics Of Prep Coach And Bodybuilding Course", type: "Course", price: 34999, originalPrice: 75000, img: "https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 4, title: "Skin Fold Caliper", type: "Equipment", price: 2500, originalPrice: 7999, img: "https://images.pexels.com/photos/6998526/pexels-photo-6998526.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 5, title: "Sports Nutrition & Supplementation", type: "Course", price: 19999, originalPrice: 25000, img: "https://images.pexels.com/photos/7991959/pexels-photo-7991959.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 6, title: "Master Personal Trainer (MPT)", type: "Course", price: 34999, originalPrice: 39999, img: "https://images.pexels.com/photos/1431283/pexels-photo-1431283.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 7, title: "Isolate Protein", type: "Supplement", price: 8000, originalPrice: null, img: "https://images.pexels.com/photos/7991873/pexels-photo-7991873.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 8, title: "BCAA Matrix", type: "Supplement", price: 2000, originalPrice: null, img: "https://images.pexels.com/photos/949129/pexels-photo-949129.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 9, title: "Anabolic Androgenic Steroid Manual", type: "Book", price: 2999, originalPrice: null, img: "https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=600" },
];

export default function Storefront() {
  const [activeCategory, setActiveCategory] = useState("All Categories");
  const [inStockOnly, setInStockOnly] = useState(true);

  const categories = ["All Categories", "Courses", "Supplement", "Equipment", "Book"];

  const filteredProducts = products.filter(p => {
    if (activeCategory !== "All Categories" && p.type !== activeCategory && `${p.type}s` !== activeCategory) return false;
    return true;
  });

  return (
    <main className="min-h-screen bg-[#09090b] font-sans text-zinc-50 flex flex-col selection:bg-[#d4af37]/30 selection:text-[#d4af37]">
      <Navbar />
      
      {/* Page Header */}
      <section className="pt-32 pb-12 px-6 max-w-[1600px] mx-auto w-full border-b border-zinc-800/50">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-4 text-center">Our <span className="text-[#d4af37]">Products & Courses</span></h1>
        <p className="text-center text-zinc-400 max-w-2xl mx-auto text-sm font-light">
          Upgrade your knowledge with our MHRD-registered academy courses, or fuel your body with elite, lab-tested supplements.
        </p>
      </section>

      <section className="py-12 px-6 max-w-[1600px] mx-auto w-full flex-1 grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Sidebar Filters */}
        <aside className="lg:col-span-3 flex flex-col gap-8">
          <div className="bg-zinc-900/40 border border-zinc-800 p-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-100 mb-4 border-b border-zinc-800 pb-3">Categories</h3>
            <ul className="flex flex-col gap-2">
              {categories.map(cat => (
                <li key={cat}>
                  <button 
                    onClick={() => setActiveCategory(cat)}
                    className={`text-sm font-medium uppercase tracking-wide transition-colors ${activeCategory === cat ? "text-[#d4af37]" : "text-zinc-500 hover:text-zinc-300"}`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-zinc-900/40 border border-zinc-800 p-6">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-100">Filter</h3>
              <button className="bg-blue-600 text-white text-[10px] uppercase font-bold px-2 py-1 rounded-sm">Clear</button>
            </div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-3">Availability</h4>
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className={`w-4 h-4 border flex items-center justify-center transition-colors ${inStockOnly ? "bg-[#d4af37] border-[#d4af37]" : "border-zinc-600 group-hover:border-[#d4af37]"}`}>
                {inStockOnly && <Check size={12} className="text-zinc-950" strokeWidth={3} />}
              </div>
              <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">In Stock</span>
            </label>
          </div>
        </aside>

        {/* Product Grid Area */}
        <div className="lg:col-span-9 flex flex-col">
          
          {/* Top Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 bg-zinc-900/40 border border-zinc-800 p-4">
            <div className="flex items-center gap-4">
              <button className="text-[#d4af37]"><LayoutGrid size={20} /></button>
              <button className="text-zinc-600 hover:text-zinc-400"><List size={20} /></button>
              <div className="w-[1px] h-6 bg-zinc-800" />
              <button className="text-sm font-medium text-blue-400 flex items-center gap-2 hover:text-blue-300">
                <Search size={16} /> Product Compare
              </button>
            </div>
            
            <div className="flex items-center gap-4 text-xs font-medium uppercase tracking-widest text-zinc-500">
              <div className="flex items-center gap-2">
                <span>Sort By:</span>
                <button className="flex items-center gap-2 bg-zinc-950 border border-zinc-800 px-3 py-1.5 text-zinc-300 hover:border-[#d4af37]">
                  Default <ChevronDown size={14} />
                </button>
              </div>
              <div className="flex items-center gap-2">
                <span>Show:</span>
                <button className="flex items-center gap-2 bg-zinc-950 border border-zinc-800 px-3 py-1.5 text-zinc-300 hover:border-[#d4af37]">
                  12 <ChevronDown size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product, idx) => (
                <motion.div 
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="bg-zinc-900/30 border border-zinc-800 flex flex-col group overflow-hidden"
                >
                  {/* Product Image Area */}
                  <div className="relative h-48 bg-zinc-950 overflow-hidden">
                    <img src={product.img} alt={product.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                    <div className="absolute top-3 left-3 bg-[#d4af37] text-zinc-950 text-[10px] font-bold uppercase tracking-widest px-2 py-1">
                      {product.type}
                    </div>
                    {/* Red accent for discounts */}
                    {product.originalPrice && (
                      <div className="absolute top-3 right-3 bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1">
                        Sale
                      </div>
                    )}
                  </div>
                  
                  {/* Product Info */}
                  <div className="p-6 flex flex-col flex-1 text-center border-b border-zinc-800/50">
                    <h3 className="text-sm font-medium text-zinc-200 mb-3 leading-tight line-clamp-2">{product.title}</h3>
                    <div className="mt-auto flex items-center justify-center gap-3">
                      <span className="text-[#d4af37] font-bold">₹{product.price.toLocaleString("en-IN")}</span>
                      {product.originalPrice && (
                        <span className="text-zinc-600 text-xs line-through">₹{product.originalPrice.toLocaleString("en-IN")}</span>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center text-xs font-bold uppercase tracking-widest text-zinc-500 divide-x divide-zinc-800">
                    <button className="flex-1 py-3 flex items-center justify-center gap-2 hover:bg-[#d4af37] hover:text-zinc-950 transition-colors">
                      <ShoppingCart size={14} /> Buy Now
                    </button>
                    <button className="flex-1 py-3 flex items-center justify-center gap-2 hover:bg-zinc-800 hover:text-white transition-colors">
                      <MessageCircle size={14} /> Ask Qs
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="mt-auto pt-8 border-t border-zinc-800 flex items-center justify-between text-xs font-medium text-zinc-500 uppercase tracking-widest">
            <span>Showing 1 to {filteredProducts.length} of 17 (2 Pages)</span>
            <div className="flex gap-1">
              <button className="w-8 h-8 flex items-center justify-center bg-[#d4af37] text-zinc-950 font-bold">1</button>
              <button className="w-8 h-8 flex items-center justify-center bg-zinc-900 border border-zinc-800 hover:border-[#d4af37] hover:text-[#d4af37]">2</button>
              <button className="w-8 h-8 flex items-center justify-center bg-zinc-900 border border-zinc-800 hover:border-[#d4af37] hover:text-[#d4af37]">&gt;</button>
              <button className="w-8 h-8 flex items-center justify-center bg-zinc-900 border border-zinc-800 hover:border-[#d4af37] hover:text-[#d4af37]">&gt;&gt;</button>
            </div>
          </div>

        </div>
      </section>
      
      <Footer />
    </main>
  );
}