
import React from 'react';
import { User, ShieldCheck, DoorOpen, CreditCard, ChevronRight } from 'lucide-react';

const ResidentPortal: React.FC = () => {
  return (
    <div className="p-6 sm:p-12 lg:p-24 animate-in fade-in duration-700">
      <header className="mb-10 lg:mb-12">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-[#1a2a40] uppercase tracking-tighter">RESIDENT PORTAL</h1>
        <p className="mono text-[#c5a059] mt-2 uppercase tracking-widest text-xs sm:text-sm">Personal Digital Identity & Room Status</p>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="xl:col-span-2 space-y-8">
            <div className="bg-white border-2 sm:border-4 border-[#1a2a40] p-6 sm:p-10 flex flex-col sm:flex-row gap-8 lg:gap-10 shadow-lg">
                <div className="w-full sm:w-48 h-48 bg-[#e0e0dc] border-2 border-[#1a2a40] relative overflow-hidden shrink-0 flex items-center justify-center">
                    <User size={100} className="absolute bottom-0 text-black/10" />
                    <div className="absolute top-3 right-3 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white shadow-sm" title="Active Status" />
                </div>
                <div className="flex-1">
                    <h2 className="text-2xl lg:text-3xl font-black text-[#1a2a40] uppercase leading-tight">Mellanby Resident #2901</h2>
                    <p className="mono text-[10px] sm:text-xs text-[#1a2a40]/60 mt-2 uppercase tracking-tight">Kenneth Mellanby Hall. Block C. Room 14B</p>
                    
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                        <div className="bg-[#f4f4f2] p-4 border border-black/5 flex justify-between items-center sm:block">
                            <span className="block mono text-[9px] uppercase opacity-50">Clearance Status</span>
                            <span className="font-bold text-emerald-600 flex items-center gap-2 text-sm sm:text-base">VERIFIED <ShieldCheck size={14}/></span>
                        </div>
                        <div className="bg-[#f4f4f2] p-4 border border-black/5 flex justify-between items-center sm:block">
                            <span className="block mono text-[9px] uppercase opacity-50">Dues Paid</span>
                            <span className="font-bold text-[#1a2a40] text-sm sm:text-base">₦15,000.00</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                <div className="bg-[#1a2a40] text-white p-6 sm:p-8 group cursor-pointer hover:bg-[#c5a059] transition-all flex flex-col shadow-md hover:-translate-y-1">
                    <DoorOpen className="mb-4 text-[#c5a059] group-hover:text-[#1a2a40]" />
                    <h3 className="text-lg lg:text-xl font-bold uppercase mb-2">Room Allocation</h3>
                    <p className="text-[10px] lg:text-xs opacity-60 mono uppercase leading-relaxed mb-4">Update room details or request swaps during the window.</p>
                    <ChevronRight className="mt-auto ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="bg-[#e0e0dc] text-[#1a2a40] p-6 sm:p-8 group cursor-pointer border-2 border-[#1a2a40] hover:bg-white transition-all flex flex-col shadow-md hover:-translate-y-1">
                    <CreditCard className="mb-4 text-[#c5a059]" />
                    <h3 className="text-lg lg:text-xl font-bold uppercase mb-2">Financials</h3>
                    <p className="text-[10px] lg:text-xs opacity-60 mono uppercase leading-relaxed mb-4">Generate invoices for hall fees and laundry subscriptions.</p>
                    <ChevronRight className="mt-auto ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
            </div>
        </div>

        <div className="space-y-6 lg:space-y-8">
            <div className="bg-[#c5a059] p-6 lg:p-8 text-[#1a2a40] shadow-xl">
                <h3 className="font-black text-lg lg:text-xl uppercase mb-6 tracking-tighter border-b border-[#1a2a40]/10 pb-2">ANNOUNCEMENTS</h3>
                <div className="space-y-6">
                    <div className="border-b border-[#1a2a40]/20 pb-4">
                        <span className="mono text-[9px] font-bold opacity-60">MAR 28, 2024</span>
                        <p className="text-xs sm:text-sm font-bold mt-1 uppercase leading-snug">Clearance exercise starts Monday at JCR.</p>
                    </div>
                    <div className="border-b border-[#1a2a40]/20 pb-4">
                        <span className="mono text-[9px] font-bold opacity-60">MAR 25, 2024</span>
                        <p className="text-xs sm:text-sm font-bold mt-1 uppercase leading-snug">Block D water pump maintenance scheduled.</p>
                    </div>
                    <div className="pb-2">
                        <span className="mono text-[9px] font-bold opacity-60">MAR 20, 2024</span>
                        <p className="text-xs sm:text-sm font-bold mt-1 uppercase leading-snug">ID Card collection window extended.</p>
                    </div>
                </div>
            </div>
            
            <div className="bg-[#f4f4f2] border-2 border-[#1a2a40] p-6 mono text-[9px] uppercase tracking-widest leading-loose opacity-60">
              Identity verified via UI Central Portal Integration. Last profile sync: 2 hours ago.
            </div>
        </div>
      </div>
    </div>
  );
};

export default ResidentPortal;
