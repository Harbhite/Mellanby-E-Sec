
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Download, ArrowLeft, Search, Calendar } from 'lucide-react';

const MeetingMinutes: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const minutes = [
    { id: 1, title: 'Budget Approval - Q1 2024', date: 'March 15, 2024', session: '2023/24', attendees: 'Council + Warden' },
    { id: 2, title: 'Inaugural Meeting', date: 'January 10, 2024', session: '2023/24', attendees: 'Full Council' },
    { id: 3, title: 'Maintenance Emergency Sitting', date: 'December 02, 2023', session: '2023/24', attendees: 'Council + Clerk' },
    { id: 4, title: 'Handover & Strategy Session', date: 'September 20, 2023', session: '2022/23', attendees: 'Incoming Council' },
    { id: 5, title: 'Hall Week Planning Committee', date: 'August 15, 2023', session: '2022/23', attendees: 'Ad-hoc Committee' },
  ];

  const filtered = minutes.filter(m => 
    m.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    m.session.includes(searchTerm)
  );

  return (
    <div className="p-8 md:p-16 lg:p-24 animate-in fade-in duration-700">
      <Link to="/exec-council" className="inline-flex items-center gap-2 mono text-[10px] font-bold text-[#c5a059] hover:text-[#1a2a40] transition-colors mb-8 group">
        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> BACK TO COUNCIL
      </Link>
      
      <header className="mb-12 border-b-2 border-[#1a2a40] pb-8 flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <h1 className="text-4xl md:text-6xl font-black text-[#1a2a40] uppercase tracking-tighter">MINUTES</h1>
          <p className="mono text-[#c5a059] mt-1 uppercase tracking-widest text-xs">Official Records of Council Sittings</p>
        </div>
        <div className="relative w-full md:w-64">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-black/30" />
          <input 
            type="text" 
            placeholder="FILTER BY TITLE/SESSION..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#e0e0dc] border-2 border-[#1a2a40] pl-10 pr-4 py-2 mono text-[10px] uppercase focus:bg-white outline-none"
          />
        </div>
      </header>

      <div className="space-y-[1px] bg-black/5 border border-black/5 shadow-sm">
        {filtered.map((item) => (
          <div key={item.id} className="bg-white p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#f4f4f2] transition-colors group">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-[#1a2a40]/5 flex items-center justify-center text-[#1a2a40] group-hover:bg-[#c5a059] group-hover:text-white transition-all">
                <FileText size={20} />
              </div>
              <div>
                <h3 className="font-bold text-sm uppercase text-[#1a2a40]">{item.title}</h3>
                <div className="flex items-center gap-4 mt-1 mono text-[9px] opacity-40 uppercase">
                  <span className="flex items-center gap-1"><Calendar size={10} /> {item.date}</span>
                  <span>Session: {item.session}</span>
                </div>
              </div>
            </div>
            <button className="flex items-center gap-2 bg-[#1a2a40] text-white px-4 py-2 mono text-[10px] font-bold uppercase tracking-widest hover:bg-[#c5a059] hover:text-[#1a2a40] transition-all">
              <Download size={14} /> PDF
            </button>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="bg-white p-12 text-center mono text-[10px] uppercase opacity-30">
            No matching records found in the archives.
          </div>
        )}
      </div>
    </div>
  );
};

export default MeetingMinutes;
