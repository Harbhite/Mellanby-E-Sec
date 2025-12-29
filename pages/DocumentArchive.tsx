
import React from 'react';
import { Archive, Search, Lock, Download } from 'lucide-react';

const DocumentArchive: React.FC = () => {
  return (
    <div className="p-8 md:p-16 lg:p-24 animate-in fade-in duration-700">
      <header className="mb-12 border-b-4 border-[#c5a059] pb-8">
        <h1 className="text-5xl md:text-7xl font-black text-[#1a2a40] uppercase tracking-tighter">ARCHIVES</h1>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mt-4">
            <p className="mono text-[#c5a059] uppercase tracking-widest text-sm">Official Records Since 1952</p>
            <div className="relative">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-black/40" />
                <input 
                    type="text" 
                    placeholder="SEARCH ARCHIVES..." 
                    className="bg-[#e0e0dc] border-2 border-[#1a2a40] pl-10 pr-4 py-2 mono text-xs uppercase focus:bg-white outline-none w-full md:w-64"
                />
            </div>
        </div>
      </header>

      <div className="space-y-4">
        {[
            { name: 'Mellanby Hall Constitution (2021 Rev)', size: '2.4MB', date: 'JAN 2021', type: 'PDF' },
            { name: 'Historical Register of Wardens', size: '1.1MB', date: 'DEC 2023', type: 'DOCX' },
            { name: 'Election Guidelines 2023/24 Session', size: '840KB', date: 'AUG 2023', type: 'PDF' },
            { name: 'Hall Redevelopment Masterplan', size: '14.2MB', date: 'MAR 2024', type: 'DWG', restricted: true }
        ].map((doc, idx) => (
            <div key={idx} className="group bg-white border border-black/5 p-6 flex items-center justify-between hover:border-[#1a2a40] transition-all">
                <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-[#f4f4f2] flex items-center justify-center border border-black/10 group-hover:bg-[#c5a059] transition-colors">
                        <Archive size={20} />
                    </div>
                    <div>
                        <h3 className="font-bold text-sm uppercase text-[#1a2a40]">{doc.name}</h3>
                        <p className="mono text-[10px] uppercase opacity-40 mt-1">{doc.date} • {doc.size} • {doc.type}</p>
                    </div>
                </div>
                {doc.restricted ? (
                    <div className="flex items-center gap-2 text-rose-600 mono text-[9px] font-bold uppercase tracking-widest bg-rose-50 px-3 py-1">
                        <Lock size={12} /> RESTRICTED
                    </div>
                ) : (
                    <button className="text-[#1a2a40] hover:text-[#c5a059] p-2">
                        <Download size={20} />
                    </button>
                )}
            </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentArchive;
