"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Plus, Trash2, Edit3, CheckCircle2, AlertCircle, Clock, Users, IndianRupee, LogOut, GraduationCap, Leaf, Dumbbell } from "lucide-react";
import Link from "next/link";

// Initial Demo Data for the unified platform
const initialMembers = [
  { id: "GSB-101", name: "Gaurav Kumar", category: "GSB Academy", plan: "MPT Course", fee: 34999, status: "Paid", dueDate: "2027-10-15" },
  { id: "IBS-102", name: "Namsta Sharma", category: "IBS Clinic", plan: "Holistic Assessment", fee: 4200, status: "Overdue", dueDate: "2026-10-01" },
  { id: "FIT-103", name: "Nitin", category: "Fitness Verse", plan: "Quarterly Pro", fee: 4000, status: "Due Soon", dueDate: "2026-11-05" },
  { id: "GSB-104", name: "Pallavi Gulia", category: "GSB Academy", plan: "Anabolic Nutrition", fee: 11999, status: "Paid", dueDate: "2026-11-20" },
  { id: "IBS-105", name: "Amit K", category: "IBS Clinic", plan: "Monthly Diet Plan", fee: 2500, status: "Overdue", dueDate: "2026-09-15" },
  { id: "FIT-106", name: "Aanchal Adhikari", category: "Fitness Verse", plan: "Annual Elite", fee: 12000, status: "Paid", dueDate: "2026-12-10" },
];

export default function AdminDashboard() {
  const [members, setMembers] = useState(initialMembers);
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  
  // Modal States
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingFeeId, setEditingFeeId] = useState<string | null>(null);
  const [newFeeValue, setNewFeeValue] = useState<number>(0);

  // New Member Form State
  const [newMember, setNewMember] = useState({ name: "", category: "Fitness Verse", plan: "Monthly Base", fee: 1500, dueDate: "" });

  // Derived Stats
  const totalOutstanding = members.filter(m => m.status === "Overdue").reduce((acc, curr) => acc + curr.fee, 0);
  const overdueCount = members.filter(m => m.status === "Overdue").length;

  const filteredMembers = members.filter(m => {
    const matchesSearch = m.name.toLowerCase().includes(search.toLowerCase()) || m.id.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = filterCategory === "All" || m.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddMember = (e: React.FormEvent) => {
    e.preventDefault();
    const prefix = newMember.category === "GSB Academy" ? "GSB" : newMember.category === "IBS Clinic" ? "IBS" : "FIT";
    const id = `${prefix}-${Math.floor(Math.random() * 900) + 100}`;
    setMembers([{ ...newMember, id, status: "Paid" }, ...members]);
    setIsAddModalOpen(false);
    setNewMember({ name: "", category: "Fitness Verse", plan: "Monthly Base", fee: 1500, dueDate: "" });
  };

  const handleDelete = (id: string) => {
    setMembers(members.filter(m => m.id !== id));
  };

  const handleMarkPaid = (id: string) => {
    setMembers(members.map(m => m.id === id ? { ...m, status: "Paid" } : m));
  };

  const handleSaveFee = (id: string) => {
    setMembers(members.map(m => m.id === id ? { ...m, fee: newFeeValue } : m));
    setEditingFeeId(null);
  };

  const getCategoryIcon = (category: string) => {
    if (category === "GSB Academy") return <GraduationCap size={14} className="text-blue-400" />;
    if (category === "IBS Clinic") return <Leaf size={14} className="text-emerald-400" />;
    return <Dumbbell size={14} className="text-zinc-400" />;
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 font-sans selection:bg-[#d4af37]/30 selection:text-[#d4af37]">
      
      {/* Top Navigation */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-[#09090b]/80 backdrop-blur-md border-b border-zinc-800/50 z-40 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-[#d4af37] rounded flex items-center justify-center text-zinc-950 font-bold tracking-tighter">OP</div>
          <span className="font-bold tracking-widest text-xs uppercase text-zinc-300">GSB Operations</span>
        </div>
        <Link href="/" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-colors">
          <LogOut size={14} /> Exit
        </Link>
      </header>

      <main className="pt-24 pb-12 px-6 max-w-[1600px] mx-auto">
        
        {/* KPI Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-sm flex flex-col gap-2">
            <div className="flex items-center gap-2 text-zinc-400 text-xs font-bold uppercase tracking-widest"><Users size={16} /> Total Clients</div>
            <div className="text-4xl font-bold tracking-tight">{members.length}</div>
          </div>
          <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-sm flex flex-col gap-2">
            <div className="flex items-center gap-2 text-red-400 text-xs font-bold uppercase tracking-widest"><AlertCircle size={16} /> Overdue Accounts</div>
            <div className="text-4xl font-bold tracking-tight text-red-500">{overdueCount}</div>
          </div>
          <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-sm flex flex-col gap-2 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37]/10 rounded-full blur-2xl -mr-10 -mt-10" />
            <div className="flex items-center gap-2 text-[#d4af37] text-xs font-bold uppercase tracking-widest"><IndianRupee size={16} /> Outstanding Revenue</div>
            <div className="text-4xl font-bold tracking-tight text-[#d4af37]">₹{totalOutstanding.toLocaleString()}</div>
          </div>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
          <div className="flex w-full md:w-auto items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-sm p-1 overflow-x-auto">
            {["All", "GSB Academy", "Fitness Verse", "IBS Clinic"].map(cat => (
              <button 
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-4 py-2 rounded-sm text-xs uppercase tracking-widest font-bold transition-all whitespace-nowrap ${filterCategory === cat ? 'bg-[#d4af37] text-zinc-950' : 'text-zinc-500 hover:text-zinc-300'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex w-full md:w-auto items-center gap-4">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={16} />
              <input 
                type="text" 
                placeholder="Search ID or Name..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-800 rounded-sm pl-10 pr-4 py-2.5 text-sm outline-none focus:border-[#d4af37] transition-colors"
              />
            </div>
            <button 
              onClick={() => setIsAddModalOpen(true)}
              className="flex items-center gap-2 bg-white text-zinc-950 px-5 py-2.5 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-[#d4af37] transition-colors shrink-0"
            >
              <Plus size={16} /> Add
            </button>
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-zinc-900/30 border border-zinc-800 rounded-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-zinc-950 border-b border-zinc-800 text-zinc-500 text-xs uppercase tracking-widest font-bold">
                <tr>
                  <th className="px-6 py-4">ID</th>
                  <th className="px-6 py-4">Name</th>
                  <th className="px-6 py-4">Division</th>
                  <th className="px-6 py-4">Plan / Course</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/50">
                <AnimatePresence>
                  {filteredMembers.map((m) => (
                    <motion.tr 
                      key={m.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="hover:bg-zinc-900/80 transition-colors group"
                    >
                      <td className="px-6 py-4 font-mono text-zinc-500 text-xs">{m.id}</td>
                      <td className="px-6 py-4 font-medium">{m.name}</td>
                      <td className="px-6 py-4">
                        <span className="flex items-center gap-2 text-zinc-300 text-xs uppercase tracking-widest font-semibold">
                          {getCategoryIcon(m.category)} {m.category}
                        </span>
                      </td>
                      
                      {/* Interactive Fee Cell */}
                      <td className="px-6 py-4">
                        {editingFeeId === m.id ? (
                          <div className="flex items-center gap-2">
                            <input 
                              type="number" 
                              value={newFeeValue} 
                              onChange={(e) => setNewFeeValue(Number(e.target.value))}
                              className="w-24 bg-zinc-950 border border-zinc-700 rounded-sm px-2 py-1 outline-none text-white focus:border-[#d4af37] text-xs"
                              autoFocus
                            />
                            <button onClick={() => handleSaveFee(m.id)} className="text-[#d4af37] text-xs font-bold hover:underline uppercase tracking-widest">Save</button>
                          </div>
                        ) : (
                          <div className="flex items-center gap-3">
                            <span className="font-mono text-zinc-300">₹{m.fee.toLocaleString()} <span className="text-zinc-500 font-sans text-xs ml-1">({m.plan})</span></span>
                            <button 
                              onClick={() => { setEditingFeeId(m.id); setNewFeeValue(m.fee); }} 
                              className="opacity-100 lg:opacity-0 lg:group-hover:opacity-100 text-zinc-500 hover:text-[#d4af37] transition-opacity"
                            >
                              <Edit3 size={14} />
                            </button>
                          </div>
                        )}
                      </td>

                      {/* Status Badge */}
                      <td className="px-6 py-4">
                        <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm text-xs font-bold uppercase tracking-wider border
                          ${m.status === 'Paid' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 
                            m.status === 'Overdue' ? 'bg-red-500/10 text-red-400 border-red-500/20' : 
                            'bg-amber-500/10 text-amber-400 border-amber-500/20'}
                        `}>
                          {m.status === 'Paid' && <CheckCircle2 size={12} />}
                          {m.status === 'Overdue' && <AlertCircle size={12} />}
                          {m.status === 'Due Soon' && <Clock size={12} />}
                          {m.status}
                        </div>
                        <div className="text-[10px] text-zinc-600 mt-1 uppercase tracking-widest font-semibold">Due: {m.dueDate}</div>
                      </td>

                      {/* Actions */}
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-3 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
                          {m.status !== 'Paid' && (
                            <button onClick={() => handleMarkPaid(m.id)} className="text-[10px] uppercase tracking-widest font-bold bg-emerald-500/20 text-emerald-400 px-3 py-1.5 rounded-sm hover:bg-emerald-500/30 transition-colors">
                              Mark Paid
                            </button>
                          )}
                          <button onClick={() => handleDelete(m.id)} className="p-1.5 text-zinc-500 hover:text-red-400 hover:bg-red-400/10 rounded-sm transition-colors">
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
                {filteredMembers.length === 0 && (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center text-zinc-500 text-sm">No records found matching your criteria.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Add Member Modal */}
      <AnimatePresence>
        {isAddModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#09090b] border border-zinc-800 p-8 w-full max-w-md shadow-2xl rounded-sm"
            >
              <h2 className="text-xl font-bold uppercase tracking-widest mb-6 border-b border-zinc-800 pb-4">Register Client</h2>
              <form onSubmit={handleAddMember} className="flex flex-col gap-4">
                
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Full Name</label>
                  <input required type="text" value={newMember.name} onChange={e => setNewMember({...newMember, name: e.target.value})} className="bg-zinc-950 border border-zinc-800 rounded-sm px-4 py-2.5 outline-none focus:border-[#d4af37] text-sm" />
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Division</label>
                  <select value={newMember.category} onChange={e => setNewMember({...newMember, category: e.target.value})} className="bg-zinc-950 border border-zinc-800 rounded-sm px-4 py-2.5 outline-none focus:border-[#d4af37] text-sm appearance-none">
                    <option>GSB Academy</option>
                    <option>Fitness Verse</option>
                    <option>IBS Clinic</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Plan / Course</label>
                    <input required type="text" placeholder="e.g. MPT Course" value={newMember.plan} onChange={e => setNewMember({...newMember, plan: e.target.value})} className="bg-zinc-950 border border-zinc-800 rounded-sm px-4 py-2.5 outline-none focus:border-[#d4af37] text-sm" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Fee (₹)</label>
                    <input required type="number" value={newMember.fee} onChange={e => setNewMember({...newMember, fee: Number(e.target.value)})} className="bg-zinc-950 border border-zinc-800 rounded-sm px-4 py-2.5 outline-none focus:border-[#d4af37] text-sm" />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5 mb-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Next Due Date</label>
                  <input required type="date" value={newMember.dueDate} onChange={e => setNewMember({...newMember, dueDate: e.target.value})} className="bg-zinc-950 border border-zinc-800 rounded-sm px-4 py-2.5 outline-none focus:border-[#d4af37] text-sm [&::-webkit-calendar-picker-indicator]:filter-[invert(1)]" />
                </div>

                <div className="flex items-center gap-3 mt-4">
                  <button type="button" onClick={() => setIsAddModalOpen(false)} className="flex-1 py-3 text-zinc-500 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">Cancel</button>
                  <button type="submit" className="flex-1 py-3 bg-[#d4af37] text-zinc-950 text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-white transition-colors">Deploy</button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}