
import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Users, Scale, MessageSquare, ChevronRight } from 'lucide-react';

const ExecCouncil: React.FC = () => {
  const councilItems = [
    { icon: FileText, title: 'Meeting Minutes', count: '24', path: '/exec-council/minutes' },
    { icon: Users, title: 'Hall Assembly', count: 'Active', path: '/exec-council/assembly' },
    { icon: Scale, title: 'Legislation', count: '04 Drafts', path: '/exec-council/legislation' },
    { icon: MessageSquare, title: 'Petitions', count: '03 Pending', path: '/exec-council/petitions' }
  ];

  return (
    <div className="p-8 md:p-16 lg:p-24 animate-in fade-in duration-700">
      <header className="mb-12">
        <h1 className="text-5xl md:text-7xl font-black text-[#1a2a40] uppercase tracking-tighter">EXEC COUNCIL</h1>
        <p className="mono text-[#c5a059] mt-2 uppercase tracking-widest text-sm">Governance, Legislation & Leadership</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-black/10 border border-black/10">
        {councilItems.map((item, idx) => (
            <Link 
              key={idx} 
              to={item.path}
              className="group bg-white p-8 flex flex-col justify-between min-h-[200px] hover:bg-[#f4f4f2] transition-all relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ChevronRight size={20} className="text-[#c5a059]" />
                </div>
                <item.icon size={32} className="text-[#c5a059] transition-transform group-hover:scale-110" />
                <div>
                    <h3 className="font-bold text-lg uppercase text-[#1a2a40]">{item.title}</h3>
                    <span className="mono text-[10px] uppercase opacity-40">{item.count}</span>
                </div>
            </Link>
        ))}
      </div>

      <div className="mt-12 bg-[#1a2a40] text-white p-12 relative overflow-hidden shadow-xl">
        <div className="absolute inset-0 louver-pattern opacity-10" />
        <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                    <div className="h-[2px] w-8 bg-[#c5a059]" />
                    <span className="mono text-[10px] uppercase text-[#c5a059] font-bold tracking-widest">Active Resolution</span>
                </div>
                <h2 className="text-4xl font-black uppercase mb-4 tracking-tighter">Council Memo 08-B</h2>
                <p className="text-sm opacity-70 mono uppercase leading-loose max-w-xl">
                    Subject: Digital Transformation of Hall Administrative Processes. The Council is pleased to announce the full integration of the e-Secretariat into the hall's daily operations.
                </p>
            </div>
            <button className="bg-[#c5a059] text-[#1a2a40] px-8 py-4 font-black uppercase tracking-widest text-sm hover:scale-105 transition-transform shrink-0 border-2 border-[#c5a059] hover:bg-transparent hover:text-[#c5a059]">
                Read Memo
            </button>
        </div>
      </div>
    </div>
  );
};

export default ExecCouncil;
