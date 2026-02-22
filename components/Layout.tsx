import React from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#f4f4f2] flex flex-col font-sans text-[#1a2a40]">
      <Navbar />
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12 animate-in fade-in duration-500">
        {children}
      </main>
      <footer className="bg-[#e0e0dc] border-t-4 border-[#1a2a40] py-12 mt-auto">
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
               <h3 className="font-black uppercase tracking-widest text-lg mb-4 text-[#1a2a40]">Kenneth Mellanby Hall</h3>
               <p className="font-mono text-xs uppercase tracking-wider text-[#1a2a40]/60 leading-relaxed">
                  Premier Hall of Residence<br/>University of Ibadan
               </p>
            </div>
            <div className="md:border-l md:border-[#1a2a40]/10 md:pl-8">
               <h4 className="font-bold uppercase tracking-widest text-xs mb-4 text-[#c5a059]">Quick Links</h4>
               <ul className="space-y-2 font-mono text-[10px] uppercase tracking-wider text-[#1a2a40]/70">
                  <li><a href="/#/events" className="hover:text-[#1a2a40]">Events Calendar</a></li>
                  <li><a href="/#/news" className="hover:text-[#1a2a40]">Hall News</a></li>
                  <li><a href="/#/exec-council" className="hover:text-[#1a2a40]">Executive Council</a></li>
               </ul>
            </div>
            <div className="md:border-l md:border-[#1a2a40]/10 md:pl-8 flex flex-col justify-between">
               <p className="font-mono text-[10px] uppercase tracking-widest text-[#1a2a40]/40">
                  © {new Date().getFullYear()} Mellanby Hall
               </p>
               <div className="mt-4 md:mt-0">
                  <a href="/#/login" className="font-mono text-[9px] uppercase font-bold tracking-[0.2em] text-[#1a2a40]/30 hover:text-[#c5a059] transition-colors border border-[#1a2a40]/20 px-3 py-1 rounded-full">
                     Admin Login
                  </a>
               </div>
            </div>
         </div>
      </footer>
    </div>
  );
};

export default Layout;
