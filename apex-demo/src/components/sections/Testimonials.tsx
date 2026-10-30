"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Verified Patient",
    text: "I got my scaling done from here, she is very polite and was very careful. I didn't feel any pain or discomfort and her charges are very affordable. I would recommend her as your go to dentist.",
  },
  {
    name: "Manish Kumar",
    role: "Verified Patient",
    text: "Dr. Kriti is very caring and polite. From the first day got the relief from toothache. Extraction process was hassle-free. A very good Dental service in the locality with a reasonable charges.",
  },
  {
    name: "Shaurya Jain",
    role: "Verified Patient",
    text: "First thing first Dr. Kriti is very caring and professional. She will answer all your queries and makes you feel like a friend instead like some scary dentist. Jokes apart I had a very good experience with her. And their quotation is also reasonable.",
  },
];

export default function Testimonials() {
  return (
    <section id="stories" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-slate-900">
          Patient Stories
        </h2>
        <p className="text-lg text-slate-600">Real feedback submitted by our patients from the New Delhi locality.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((rev, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative border border-slate-200 rounded-3xl p-8 bg-white shadow-sm hover:shadow-lg transition-all flex flex-col">
            <Quote className="absolute top-6 right-6 text-slate-100 w-16 h-16 -z-10" />
            <div className="flex gap-1 text-yellow-400 mb-6">
              {[...Array(5)].map((_, idx) => (
                <Star key={idx} size={18} fill="currentColor" />
              ))}
            </div>
            <p className="text-slate-700 mb-8 leading-relaxed flex-grow text-lg">
              "{rev.text}"
            </p>
            <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-lg">
                {rev.name.charAt(0)}
              </div>
              <div>
                <div className="font-bold text-slate-900">{rev.name}</div>
                <div className="text-sm text-slate-500 font-medium">{rev.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}