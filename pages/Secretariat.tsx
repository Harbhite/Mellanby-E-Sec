
import React from 'react';
import { Link } from 'react-router-dom';
import { PORTAL_ACTIONS } from '../constants';

const Secretariat: React.FC = () => {
  const getPath = (id: string) => {
    switch (id) {
      case '2': return '/exec-council';
      case '3': return '/document-archive';
      case '4': return '/maintenance';
      default: return '/';
    }
  };

  return (
    <div className="p-6 sm:p-12 lg:p-24 flex flex-col gap-12 xl:flex-row">
      <div className="flex-1 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <header className="mb-10 lg:mb-16">
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-[#1a2a40] leading-[0.85] uppercase tracking-tighter break-words">
            MELLANBY<br />
            <span className="text-[#c5a059]">SECRETARIAT</span>
          </h1>
          <div className="flex items-center gap-4 mt-6">
            <div className="h-[2px] w-12 bg-[#c5a059]" />
            <p className="mono text-xs tracking-widest text-[#c5a059] uppercase">
              E-GOVERNANCE & HALL ADMINISTRATION
            </p>
          </div>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 gap-[1px] bg-black/10 border border-black/10">
          {PORTAL_ACTIONS.map((action) => (
            <Link 
              key={action.id}
              to={getPath(action.id)}
              className="bg-[#f4f4f2] hover:bg-white p-8 lg:p-10 min-h-[200px] sm:min-h-[250px] relative overflow-hidden group transition-all duration-500 cursor-pointer block"
            >
              <span className="mono absolute top-6 right-6 text-5xl lg:text-6xl font-light text-black/5 group-hover:text-[#c5a059]/10 group-hover:scale-150 transition-all duration-700">
                {action.number}
              </span>
              <div className="relative z-10 h-full flex flex-col justify-end">
                <h3 className="text-xl lg:text-2xl font-black text-[#1a2a40] mb-2">{action.title}</h3>
                <p className="mono text-[10px] lg:text-xs text-[#1a2a40]/60 leading-relaxed uppercase">
                  {action.description}
                </p>
              </div>
            </Link>
          ))}
        </section>

        <footer className="mt-12 lg:mt-16 mono text-[9px] lg:text-[10px] text-black/30 uppercase tracking-widest leading-loose max-w-xl">
          © 2024 Kenneth Mellanby Hall. University of Ibadan. Building a tradition of excellence. Designed for administrative efficiency and transparency.
        </footer>
      </div>

      <aside className="w-full xl:w-80 2xl:w-96 flex flex-col gap-6 sm:grid sm:grid-cols-2 xl:flex xl:flex-col animate-in fade-in slide-in-from-right-4 duration-1000">
        <div className="bg-[#1a2a40] text-white p-8 lg:p-10 relative overflow-hidden flex flex-col gap-6 lg:gap-8 h-full">
            <div className="absolute inset-0 louver-pattern opacity-10 rotate-90 pointer-events-none" />
            
            <div className="border-l-2 border-[#c5a059] pl-6 py-1 lg:py-2 relative z-10">
                <span className="block uppercase text-[9px] lg:text-[10px] tracking-widest opacity-50 mb-1">Hall Population</span>
                <span className="mono text-3xl lg:text-4xl font-bold">412</span>
            </div>

            <div className="border-l-2 border-[#c5a059] pl-6 py-1 lg:py-2 relative z-10">
                <span className="block uppercase text-[9px] lg:text-[10px] tracking-widest opacity-50 mb-1">Processing Rate</span>
                <span className="mono text-3xl lg:text-4xl font-bold">92.1%</span>
            </div>

            <div className="border-l-2 border-[#c5a059] pl-6 py-1 lg:py-2 relative z-10">
                <span className="block uppercase text-[9px] lg:text-[10px] tracking-widest opacity-50 mb-1">Active Petitions</span>
                <span className="mono text-3xl lg:text-4xl font-bold">03</span>
            </div>

            <div className="mt-auto bg-white/5 p-4 lg:p-6 rounded-sm border border-white/10 relative z-10">
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                    <span className="mono text-[9px] font-bold uppercase">SYSTEMS NOMINAL</span>
                </div>
                <p className="mono text-[8px] opacity-40 uppercase">
                    U.I Network: Connected<br />
                    Last Sync: {new Date().toLocaleTimeString()}
                </p>
            </div>

            <div className="absolute bottom-0 right-0 w-12 h-12 lg:w-16 lg:h-16 bg-[#c5a059]" style={{ clipPath: 'polygon(100% 0, 0% 100%, 100% 100%)' }} />
        </div>
        
        <div className="hidden sm:flex xl:hidden bg-[#c5a059] text-[#1a2a40] p-8 flex-col justify-center h-full">
            <h4 className="font-black text-xl uppercase tracking-tighter mb-2">Admin Notice</h4>
            <p className="mono text-[10px] leading-relaxed opacity-80 uppercase">The Secretariat is open for physical verification between 10 AM and 4 PM daily.</p>
        </div>
      </aside>
    </div>
  );
};

export default Secretariat;
