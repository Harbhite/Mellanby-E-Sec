
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MessageSquare, Send, Clock, CheckCircle2, AlertCircle } from 'lucide-react';

const Petitions: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const activePetitions = [
    { id: 'P01', title: 'Extension of Library Hours during Exam Season', status: 'Under Review', votes: 156, date: 'Mar 25' },
    { id: 'P02', title: 'Upgrade of Gym Facilities in Block D', status: 'Pending Review', votes: 42, date: 'Mar 28' },
    { id: 'P03', title: 'Request for Additional Wi-Fi Hotspots', status: 'Resolved', votes: 204, date: 'Mar 10' }
  ];

  return (
    <div className="p-8 md:p-16 lg:p-24 animate-in fade-in duration-700">
      <Link to="/exec-council" className="inline-flex items-center gap-2 mono text-[10px] font-bold text-[#c5a059] hover:text-[#1a2a40] transition-colors mb-8 group">
        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> BACK TO COUNCIL
      </Link>

      <header className="mb-12">
        <h1 className="text-4xl md:text-6xl font-black text-[#1a2a40] uppercase tracking-tighter">PETITIONS</h1>
        <p className="mono text-[#c5a059] mt-1 uppercase tracking-widest text-xs">The Voice of the Resident</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7">
          <div className="bg-white border-4 border-[#1a2a40] p-8 lg:p-12 shadow-[12px_12px_0_0_#c5a059] relative overflow-hidden">
             <div className="absolute inset-0 louver-pattern opacity-5 pointer-events-none" />
             
             {submitted ? (
               <div className="py-20 text-center animate-in zoom-in-95 duration-500">
                  <CheckCircle2 size={64} className="text-[#c5a059] mx-auto mb-6" />
                  <h2 className="text-2xl font-black uppercase text-[#1a2a40] mb-2">PETITION FILED</h2>
                  <p className="mono text-[10px] opacity-60 uppercase tracking-widest">Your grievance has been registered with the Clerk of Council.</p>
               </div>
             ) : (
               <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="space-y-2">
                    <label className="mono text-[10px] font-bold uppercase text-[#1a2a40]">Subject of Petition</label>
                    <input 
                      required
                      type="text" 
                      placeholder="E.G. IMPROVEMENT OF WATER SUPPLY"
                      className="w-full bg-[#f4f4f2] border-2 border-[#1a2a40] p-4 text-sm outline-none focus:bg-white transition-all font-bold"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="mono text-[10px] font-bold uppercase text-[#1a2a40]">Block</label>
                      <select className="w-full bg-[#f4f4f2] border-2 border-[#1a2a40] p-4 text-sm outline-none font-bold uppercase">
                        <option>BLOCK A</option>
                        <option>BLOCK B</option>
                        <option>BLOCK C</option>
                        <option>BLOCK D</option>
                        <option>GENERAL</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="mono text-[10px] font-bold uppercase text-[#1a2a40]">Identity</label>
                      <input 
                        required
                        type="text" 
                        placeholder="MATRIC NO"
                        className="w-full bg-[#f4f4f2] border-2 border-[#1a2a40] p-4 text-sm outline-none font-bold"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="mono text-[10px] font-bold uppercase text-[#1a2a40]">Detailed Grievance</label>
                    <textarea 
                      required
                      placeholder="DESCRIBE THE ISSUE AND PROPOSED SOLUTION..."
                      className="w-full bg-[#f4f4f2] border-2 border-[#1a2a40] p-4 text-sm min-h-[150px] outline-none focus:bg-white transition-all"
                    />
                  </div>
                  <button className="w-full bg-[#1a2a40] text-white py-4 font-black uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-[#c5a059] hover:text-[#1a2a40] transition-all shadow-xl active:scale-95">
                    SUBMIT TO COUNCIL <Send size={18} />
                  </button>
               </form>
             )}
          </div>
        </div>

        <div className="lg:col-span-5 space-y-8">
          <section>
            <h3 className="font-black text-sm uppercase text-[#1a2a40] mb-6 flex items-center gap-2 border-b border-[#1a2a40]/10 pb-2">
              <Clock size={18} className="text-[#c5a059]" /> Live Tracker
            </h3>
            <div className="space-y-4">
               {activePetitions.map((p) => (
                 <div key={p.id} className="bg-[#e0e0dc] p-5 border-l-4 border-[#1a2a40] hover:bg-white transition-all group">
                    <div className="flex justify-between items-start mb-2">
                      <span className="mono text-[9px] font-bold text-[#c5a059] uppercase">{p.id} • {p.date}</span>
                      <div className="flex items-center gap-1.5">
                        {p.status === 'Resolved' ? <CheckCircle2 size={12} className="text-emerald-500" /> : <AlertCircle size={12} className="text-amber-500" />}
                        <span className={`mono text-[8px] font-black uppercase ${p.status === 'Resolved' ? 'text-emerald-600' : 'text-amber-600'}`}>
                          {p.status}
                        </span>
                      </div>
                    </div>
                    <h4 className="font-bold text-xs uppercase text-[#1a2a40] leading-tight mb-3">{p.title}</h4>
                    <div className="flex justify-between items-center">
                       <span className="mono text-[8px] opacity-40 uppercase">{p.votes} RESIDENTS SUPPORTING</span>
                       {p.status !== 'Resolved' && (
                         <button className="text-[8px] font-black uppercase bg-[#1a2a40] text-white px-2 py-1 hover:bg-[#c5a059] transition-colors">
                           SIGN PETITION
                         </button>
                       )}
                    </div>
                 </div>
               ))}
            </div>
          </section>

          <div className="bg-[#1a2a40] text-white p-6 mono text-[8px] uppercase tracking-[0.2em] leading-loose opacity-40 border border-white/10">
            Petitions require a minimum of 50 digital signatures from verified residents to be formally discussed in a Hall Assembly sitting.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Petitions;
