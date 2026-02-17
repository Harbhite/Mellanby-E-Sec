
import React from 'react';
import { Hammer, AlertTriangle, Info, Clock, CheckCircle } from 'lucide-react';

const Maintenance: React.FC = () => {
  return (
    <div className="p-6 sm:p-12 lg:p-24 animate-in fade-in duration-700">
      <header className="mb-10 lg:mb-12">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-[#1a2a40] uppercase tracking-tighter">MAINTENANCE</h1>
        <p className="mono text-[#c5a059] mt-2 uppercase tracking-widest text-xs sm:text-sm">Facilities & Infrastructure Management</p>
      </header>

      <div className="flex flex-col xl:flex-row gap-8 lg:gap-12">
        <div className="flex-1 bg-white border-2 sm:border-4 border-[#1a2a40] p-6 sm:p-10 shadow-lg">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b-2 border-black/5">
                <Hammer size={24} className="text-[#c5a059]" />
                <h2 className="text-xl sm:text-2xl font-black uppercase">Report a Fault</h2>
            </div>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="mono text-[9px] font-bold uppercase text-[#1a2a40]/60">Block/Location</label>
                        <select className="w-full bg-[#f4f4f2] border-2 border-[#1a2a40] p-3 text-sm font-bold outline-none focus:bg-white transition-colors">
                            <option>BLOCK A</option>
                            <option>BLOCK B</option>
                            <option>BLOCK C</option>
                            <option>BLOCK D</option>
                            <option>JCR / COMMON AREAS</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label className="mono text-[9px] font-bold uppercase text-[#1a2a40]/60">Urgency</label>
                        <select className="w-full bg-[#f4f4f2] border-2 border-[#1a2a40] p-3 text-sm font-bold outline-none focus:bg-white transition-colors">
                            <option>NORMAL</option>
                            <option>URGENT (24HR)</option>
                            <option>EMERGENCY</option>
                        </select>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="mono text-[9px] font-bold uppercase text-[#1a2a40]/60">Nature of Issue</label>
                    <input 
                        type="text" 
                        placeholder="E.G. FAULTY LOUVER, PLUMBING LEAK"
                        className="w-full bg-[#f4f4f2] border-2 border-[#1a2a40] p-3 text-sm outline-none focus:bg-white transition-colors"
                    />
                </div>

                <div className="space-y-2">
                    <label className="mono text-[9px] font-bold uppercase text-[#1a2a40]/60">Detailed Description</label>
                    <textarea 
                        className="w-full bg-[#f4f4f2] border-2 border-[#1a2a40] p-3 text-sm min-h-[120px] outline-none focus:bg-white transition-colors"
                        placeholder="DESCRIBE THE ISSUE IN DETAIL FOR THE MAINTENANCE TEAM..."
                    />
                </div>

                <button className="w-full bg-[#1a2a40] text-white font-black py-4 uppercase tracking-[0.2em] sm:tracking-[0.3em] hover:bg-[#c5a059] hover:text-[#1a2a40] transition-all shadow-md active:scale-[0.98]">
                    SUBMIT REPORT
                </button>
            </form>
        </div>

        <aside className="w-full xl:w-96 space-y-6">
            <div className="bg-[#e0e0dc] border-2 border-[#1a2a40] p-6 shadow-sm">
                <h3 className="flex items-center gap-2 font-black uppercase mb-4 text-sm">
                    <AlertTriangle size={16} className="text-[#c5a059]" />
                    Ongoing Repairs
                </h3>
                <div className="space-y-4">
                    <div className="bg-white/50 p-4 border border-black/5 group hover:bg-white transition-all">
                        <div className="flex justify-between items-start mb-2">
                          <span className="block mono text-[8px] font-bold opacity-50">BLOCK C</span>
                          <span className="mono text-[8px] font-bold text-[#c5a059]">66%</span>
                        </div>
                        <p className="text-[10px] font-bold uppercase leading-tight mb-3">Roof leakage repairs in progress.</p>
                        <div className="w-full bg-black/5 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-emerald-500 h-full w-2/3 transition-all duration-1000" />
                        </div>
                    </div>
                    <div className="bg-white/50 p-4 border border-black/5 group hover:bg-white transition-all opacity-80">
                        <div className="flex justify-between items-start mb-2">
                          <span className="block mono text-[8px] font-bold opacity-50">JCR</span>
                          <span className="mono text-[8px] font-bold text-emerald-500">COMPLETE</span>
                        </div>
                        <p className="text-[10px] font-bold uppercase leading-tight">Louver replacements for main hall.</p>
                        <CheckCircle size={12} className="text-emerald-500 mt-2" />
                    </div>
                </div>
            </div>

            <div className="bg-[#1a2a40] text-white p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Info size={40} />
                </div>
                <h3 className="flex items-center gap-2 font-black uppercase mb-4 text-sm">
                    <Info size={16} className="text-[#c5a059]" />
                    Maintenance Policy
                </h3>
                <p className="mono text-[9px] uppercase leading-loose opacity-70">
                    Reports are processed within 48 hours. Please ensure your room is accessible if the fault is internal. Emergency repairs for electrical or severe plumbing issues should be reported directly to the Porter's Lodge immediately.
                </p>
                <div className="mt-6 flex items-center gap-2 mono text-[8px] opacity-40">
                  <Clock size={10} />
                  EST. RESPONSE TIME: 12-24H
                </div>
            </div>
        </aside>
      </div>
    </div>
  );
};

export default Maintenance;
