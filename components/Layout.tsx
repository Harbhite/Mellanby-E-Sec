
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Calendar, Newspaper, Users, Archive, Hammer, Menu, X, Image, Phone } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'PORTAL', path: '/', icon: Home },
    { label: 'EVENTS', path: '/events', icon: Calendar },
    { label: 'NEWS', path: '/news', icon: Newspaper },
    { label: 'GALLERY', path: '/gallery', icon: Image },
    { label: 'CONTACTS', path: '/directory', icon: Phone },
  ];

  const portalItems = [
    { label: 'COUNCIL', path: '/exec-council', icon: Users },
    { label: 'ARCHIVE', path: '/document-archive', icon: Archive },
    { label: 'REPAIRS', path: '/maintenance', icon: Hammer },
  ];

  const isActive = (path: string) => location.pathname === path;

  const SidebarContent = ({ isMobile = false }) => (
    <div className={`flex flex-col items-start h-full w-full ${isMobile ? 'py-8 pl-6' : 'py-8 pl-4 lg:pl-6'}`}>
      {/* Top Vertical "ESTABLISHED 1952" */}
      <div className="mono [writing-mode:vertical-rl] rotate-180 uppercase tracking-[0.4em] text-[8px] lg:text-[10px] font-bold opacity-30 mb-8 select-none whitespace-nowrap">
        ESTABLISHED 1952
      </div>
      
      {/* Main Nav Items Block */}
      <div className="flex-1 flex flex-col items-start gap-8 w-full">
        <div className="h-[1px] w-8 bg-[#1a2a40] opacity-40" />
        
        {/* Navigation Section */}
        <div className="flex flex-col gap-6">
          {navItems.map((item) => (
            <Link 
              key={item.path}
              to={item.path}
              aria-current={isActive(item.path) ? 'page' : undefined}
              onClick={() => isMobile && setIsMenuOpen(false)}
              className="group flex flex-col items-start"
            >
              <div className={`w-10 h-10 lg:w-12 lg:h-12 transition-all duration-300 rounded-none border border-[#1a2a40] flex items-center justify-center relative
                ${isActive(item.path) ? 'bg-[#c5a059] shadow-[3px_3px_0_0_#1a2a40]' : 'bg-white group-hover:bg-[#f4f4f2] group-hover:shadow-[3px_3px_0_0_#1a2a40]'}
              `}>
                <item.icon className={`w-4 h-4 lg:w-5 lg:h-5 ${isActive(item.path) ? 'text-[#1a2a40]' : 'text-[#1a2a40]/60'}`} />
              </div>
              <span className="mt-1.5 mono text-[7px] lg:text-[8px] font-black uppercase tracking-tighter opacity-40 group-hover:opacity-100 transition-opacity">
                {item.label}
              </span>
            </Link>
          ))}
        </div>

        <div className="h-[1px] w-8 bg-[#1a2a40] opacity-20" />

        {/* Portal Quick Links Section */}
        <div className="flex flex-col gap-4">
           {portalItems.map((item) => (
             <Link 
              key={item.path} 
              to={item.path} 
              aria-current={isActive(item.path) ? 'page' : undefined}
              onClick={() => isMobile && setIsMenuOpen(false)}
              className="group flex flex-col items-start"
             >
               <div className={`w-10 h-10 lg:w-12 lg:h-12 border transition-all duration-300 flex items-center justify-center
                 ${isActive(item.path) 
                   ? 'bg-[#1a2a40] border-[#1a2a40] text-[#c5a059]' 
                   : 'bg-white border-[#1a2a40]/20 group-hover:border-[#1a2a40] group-hover:shadow-[2px_2px_0_0_#1a2a40] text-[#1a2a40]/40 group-hover:text-[#1a2a40]'}
               `}>
                 <item.icon size={isMobile ? 18 : 16} />
               </div>
               {isMobile && (
                 <span className="mt-1 mono text-[6px] font-bold uppercase tracking-tighter opacity-30 group-hover:opacity-100">
                   {item.label}
                 </span>
               )}
             </Link>
           ))}
        </div>
      </div>

      {/* Bottom Vertical "UNIVERSITY OF IBADAN" and "KENNETH MELLANBY" */}
      <div className="mt-8 flex flex-col items-start gap-6">
        <div className="mono [writing-mode:vertical-rl] uppercase tracking-[0.5em] text-[9px] lg:text-[10px] font-black text-[#1a2a40] opacity-70 select-none">
          UNIVERSITY OF IBADAN
        </div>
        <div className="mono text-[8px] font-black text-[#c5a059] uppercase tracking-[0.1em] whitespace-nowrap">
          KENNETH MELLANBY
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen relative overflow-hidden flex-col md:flex-row">
      {/* Background Louvers */}
      <div className="fixed inset-0 louver-pattern -z-10 pointer-events-none opacity-30" />
      
      {/* DESKTOP/TABLET SIDEBAR */}
      <nav className="hidden md:flex w-20 lg:w-24 bg-[#e0e0dc] border-r border-[#1a2a40]/20 flex-col items-start sticky top-0 h-screen z-40 shrink-0 shadow-[2px_0_10px_rgba(0,0,0,0.02)]">
        <SidebarContent />
      </nav>

      {/* MOBILE HEADER */}
      <header className="md:hidden bg-[#e0e0dc] border-b border-[#1a2a40]/10 px-6 py-4 flex justify-between items-center sticky top-0 z-50 shadow-sm backdrop-blur-md bg-opacity-95">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#1a2a40] flex items-center justify-center">
            <span className="text-[#c5a059] font-black text-sm">M</span>
          </div>
          <div className="flex flex-col">
            <span className="mono text-[10px] font-black text-[#1a2a40] uppercase tracking-tighter leading-none">Mellanby Hall</span>
            <span className="mono text-[8px] text-[#c5a059] uppercase tracking-widest font-bold">E-Secretariat</span>
          </div>
        </div>
        <button 
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
          className="p-2 border border-[#1a2a40] bg-white text-[#1a2a40] active:bg-[#c5a059] transition-colors shadow-sm"
        >
          <Menu size={20} />
        </button>
      </header>

      {/* MOBILE SIDEBAR DRAWER */}
      <div className={`fixed inset-0 z-[100] md:hidden transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-[#1a2a40]/80 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
        <div className={`absolute top-0 left-0 bottom-0 w-28 bg-[#e0e0dc] border-r-2 border-[#1a2a40] shadow-2xl transition-transform duration-500 ease-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <SidebarContent isMobile />
          <button 
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
            className="absolute top-6 -right-12 bg-[#1a2a40] text-white p-2 border border-white/20 shadow-lg active:scale-90 transition-transform"
          >
            <X size={20} />
          </button>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 relative z-10 flex flex-col min-w-0 bg-[#f4f4f2]/50 backdrop-blur-sm">
        {children}
      </main>

      {/* Persistent Visual Breadcrumb for Context */}
      <div className="md:hidden fixed bottom-6 left-6 z-40">
        <div className="bg-[#1a2a40] text-[#c5a059] px-3 py-1.5 border border-white/10 shadow-lg mono text-[8px] font-bold uppercase tracking-widest">
           UI / {location.pathname === '/' ? 'SECRETARIAT' : location.pathname.split('/')[1].replace('-', ' ')}
        </div>
      </div>
    </div>
  );
};

export default Layout;
