import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Calendar, Newspaper, Image, Phone, Users, Archive, Hammer } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/', icon: Home },
    { label: 'Events', path: '/events', icon: Calendar },
    { label: 'News', path: '/news', icon: Newspaper },
    { label: 'Gallery', path: '/gallery', icon: Image },
    { label: 'Directory', path: '/directory', icon: Phone },
  ];

  const secondaryItems = [
    { label: 'Council', path: '/exec-council', icon: Users },
    { label: 'Archive', path: '/document-archive', icon: Archive },
    { label: 'Maintenance', path: '/maintenance', icon: Hammer },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-[#1a2a40] text-white shadow-md sticky top-0 z-50 border-b-4 border-[#c5a059]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo / Brand */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-4 group">
             <div className="w-10 h-10 bg-[#c5a059] flex items-center justify-center rounded-sm shadow-sm group-hover:scale-105 transition-transform">
                <span className="text-[#1a2a40] font-black text-xl">M</span>
             </div>
             <div className="flex flex-col">
               <span className="font-black uppercase tracking-[0.15em] text-sm text-[#c5a059] leading-tight">Mellanby</span>
               <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/70 leading-tight">e-Secretariat</span>
             </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-md text-[11px] font-bold uppercase tracking-widest transition-all duration-200 flex items-center gap-2
                  ${isActive(item.path) ? 'bg-[#c5a059] text-[#1a2a40] shadow-sm' : 'hover:bg-white/10 text-white/90 hover:text-white'}
                `}
              >
                <item.icon size={14} className={isActive(item.path) ? 'text-[#1a2a40]' : 'text-[#c5a059]'} />
                {item.label}
              </Link>
            ))}
             <div className="h-8 w-px bg-white/10 mx-4" />
             <div className="flex gap-2">
             {secondaryItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`p-2.5 rounded-md transition-all duration-200 text-white/70 hover:text-[#1a2a40] hover:bg-[#c5a059]`}
                title={item.label}
              >
                <item.icon size={18} />
              </Link>
            ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#c5a059] focus:outline-none p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-[#1a2a40] border-t border-white/10 animate-in slide-in-from-top-2 duration-200">
          <div className="px-2 pt-4 pb-6 space-y-2 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-md text-xs font-bold uppercase tracking-widest flex items-center gap-4
                   ${isActive(item.path) ? 'bg-[#c5a059] text-[#1a2a40]' : 'text-white hover:bg-white/10'}
                `}
              >
                <item.icon size={18} />
                {item.label}
              </Link>
            ))}
            <div className="border-t border-white/10 my-4 pt-4 px-2">
               <span className="px-2 text-[10px] font-mono uppercase tracking-widest text-white/40 mb-3 block">Portal Links</span>
               <div className="grid grid-cols-3 gap-2">
               {secondaryItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="flex flex-col items-center justify-center p-3 rounded-md text-white/80 hover:bg-white/10 hover:text-[#c5a059] gap-2 bg-[#131f30]"
                  >
                    <item.icon size={20} />
                    <span className="text-[9px] uppercase tracking-wider font-bold">{item.label}</span>
                  </Link>
               ))}
               </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
