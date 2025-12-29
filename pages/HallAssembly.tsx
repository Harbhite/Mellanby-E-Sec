
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Calendar, Gavel, Shield } from 'lucide-react';

const HallAssembly: React.FC = () => {
  return (
    <div className="p-8 md:p-16 lg:p-24 animate-in fade-in duration-700">
      <Link to="/exec-council" className="inline-flex items-center gap-2 mono text-[10px] font-bold text-[#c5a059] hover:text-[#1a2a40] transition-colors mb-8 group">
        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> BACK TO COUNCIL
      </Link>

      <header className="mb-12">
        <h1 className="text-4xl md:text-6xl font-black text-[#1a2a40] uppercase tracking-tighter">HALL ASSEMBLY</h1>
        <p className="mono text-[#c5a059] mt-1 uppercase tracking-widest text-xs">The Legislative Heart of Mellanby Hall</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-12 bg-[#1a2a40]" />
              <h2 className="mono font-bold text-[11px] uppercase tracking-widest text-[#1a2a40]">Leadership</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { role: 'Speaker', name: 'Rt. Hon. Adewale O.', icon: Gavel },
                { role: 'Clerk', name: 'Hon. Chinedu E.', icon: Shield },
                { role: 'Chief Whip', name: 'Hon. Fatima B.', icon: Users }
              ].map((leader, i) => (
                <div key={i} className="bg-white border-2 border-[#1a2a40] p-6 shadow-[4px_4px_0_0_#1a2a40] hover:shadow-[6px_6px_0_0_#c5a059] transition-all">
                  <leader.icon size={20} className="text-[#c5a059] mb-4" />
                  <span className="block mono text-[8px] uppercase opacity-40">{leader.role}</span>
                  <span className="block font-black text-sm uppercase text-[#1a2a40] mt-1">{leader.name}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-[#1a2a40] text-white p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Users size={120} />
            </div>
            <h3 className="text-2xl font-black uppercase mb-6 tracking-tight relative z-10">Sitting Agenda</h3>
            <div className="space-y-6 relative z-10">
              {[
                { date: 'Apr 20', title: 'Second Reading of Hall Dues Bill', time: '4:00 PM', location: 'JCR' },
                { date: 'May 05', title: 'Constitutional Review Committee Hearing', time: '10:00 AM', location: 'Conference Room' }
              ].map((sitting, i) => (
                <div key={i} className="flex gap-6 items-center border-l border-white/20 pl-6">
                  <div className="text-center">
                    <span className="block mono text-xs font-bold text-[#c5a059]">{sitting.date.split(' ')[0]}</span>
                    <span className="block text-2xl font-black leading-none">{sitting.date.split(' ')[1]}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase">{sitting.title}</h4>
                    <p className="mono text-[9px] opacity-50 mt-1 uppercase tracking-wider">{sitting.time} • {sitting.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-8">
          <div className="bg-[#e0e0dc] p-8 border-2 border-[#1a2a40]">
            <h3 className="font-black text-sm uppercase mb-4 border-b border-[#1a2a40]/10 pb-2">Join the Gallery</h3>
            <p className="mono text-[9px] leading-loose opacity-60 uppercase mb-6">
              Sittings are open to all hall residents. Please arrive 15 minutes before the gavel sounds. Dress code: Formal/Academic.
            </p>
            <button className="w-full bg-[#1a2a40] text-white py-3 mono text-[10px] font-bold uppercase tracking-widest hover:bg-[#c5a059] hover:text-[#1a2a40] transition-colors">
              Request Speaking Slot
            </button>
          </div>
          <div className="border-4 border-[#c5a059] p-6 bg-white shadow-lg">
            <span className="block mono text-[8px] font-bold text-[#c5a059] uppercase mb-2">Notice of Absence</span>
            <p className="text-xs font-bold text-[#1a2a40] uppercase leading-snug">
              Members unable to attend the sitting must notify the Clerk 24 hours in advance via official channel.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default HallAssembly;
