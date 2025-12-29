
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Scale, BookOpen, ExternalLink, FileCheck } from 'lucide-react';

const Legislation: React.FC = () => {
  const bills = [
    { title: 'Hall Maintenance & Utility Bill 2024', status: 'Second Reading', date: '2024-03-10', lead: 'Hon. Speaker' },
    { title: 'The E-Secretariat Establishment Act', status: 'Passed', date: '2024-01-05', lead: 'The Hall Secretary' },
    { title: 'Freshmen Orientation Welfare Bill', status: 'Under Review', date: '2023-11-15', lead: 'Social Secretary' },
  ];

  return (
    <div className="p-8 md:p-16 lg:p-24 animate-in fade-in duration-700">
      <Link to="/exec-council" className="inline-flex items-center gap-2 mono text-[10px] font-bold text-[#c5a059] hover:text-[#1a2a40] transition-colors mb-8 group">
        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> BACK TO COUNCIL
      </Link>

      <header className="mb-12">
        <h1 className="text-4xl md:text-6xl font-black text-[#1a2a40] uppercase tracking-tighter">LEGISLATION</h1>
        <p className="mono text-[#c5a059] mt-1 uppercase tracking-widest text-xs">Laws and Regulations of Kenneth Mellanby Hall</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-8">
          <section>
            <h2 className="text-xl font-black uppercase text-[#1a2a40] mb-6 flex items-center gap-3">
              <Scale size={20} className="text-[#c5a059]" /> Active Bills
            </h2>
            <div className="space-y-4">
              {bills.map((bill, i) => (
                <div key={i} className="bg-white border border-black/10 p-6 hover:border-[#1a2a40] transition-all flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 group">
                  <div>
                    <h3 className="font-bold text-sm uppercase text-[#1a2a40] group-hover:text-[#c5a059] transition-colors">{bill.title}</h3>
                    <div className="flex gap-4 mt-1 mono text-[9px] uppercase opacity-40">
                      <span>{bill.date}</span>
                      <span>Sponsor: {bill.lead}</span>
                    </div>
                  </div>
                  <div className={`px-3 py-1 mono text-[8px] font-black uppercase tracking-widest border-2 
                    ${bill.status === 'Passed' ? 'bg-emerald-50 border-emerald-500 text-emerald-700' : 'bg-amber-50 border-amber-500 text-amber-700'}`}>
                    {bill.status}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-[#e0e0dc] p-8 sm:p-12 relative overflow-hidden">
             <div className="absolute inset-0 louver-pattern opacity-10 pointer-events-none" />
             <div className="flex flex-col sm:flex-row gap-8 items-center relative z-10">
                <BookOpen size={48} className="text-[#c5a059]" />
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-2xl font-black uppercase text-[#1a2a40] leading-none mb-2">THE CONSTITUTION</h3>
                  <p className="mono text-[10px] opacity-60 uppercase tracking-widest leading-loose">
                    The supreme document governing Kenneth Mellanby Hall. Latest revision approved January 2021.
                  </p>
                </div>
                <button className="bg-[#1a2a40] text-white px-6 py-3 font-bold mono text-[10px] uppercase tracking-widest flex items-center gap-2 hover:bg-[#c5a059] hover:text-[#1a2a40] transition-all shadow-md">
                   VIEW <ExternalLink size={12} />
                </button>
             </div>
          </section>
        </div>

        <aside className="lg:col-span-4">
          <div className="bg-[#1a2a40] text-white p-8 sticky top-24">
            <h3 className="font-black text-sm uppercase mb-6 flex items-center gap-2">
              <FileCheck size={18} className="text-[#c5a059]" /> Legislative Process
            </h3>
            <div className="space-y-8 relative">
              <div className="absolute left-[7px] top-2 bottom-2 w-[1px] bg-white/10" />
              {[
                { s: '01', t: 'Introduction', d: 'Bill is formally presented to the House.' },
                { s: '02', t: 'First Reading', d: 'The title is read and documented.' },
                { s: '03', t: 'Second Reading', d: 'The core debate and scrutiny begins.' },
                { s: '04', t: 'Committee Stage', d: 'Detailed review and amendments.' },
                { s: '05', t: 'Third Reading', d: 'Final vote by the Hall Assembly.' },
                { s: '06', t: 'Assent', d: 'Signed into law by the Hall Warden.' }
              ].map((step, i) => (
                <div key={i} className="flex gap-4 relative z-10">
                  <div className="w-4 h-4 rounded-full bg-[#1a2a40] border border-[#c5a059] flex items-center justify-center shrink-0 mt-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[11px] uppercase text-[#c5a059]">{step.t}</h4>
                    <p className="mono text-[8px] opacity-40 uppercase mt-0.5 leading-relaxed">{step.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Legislation;
