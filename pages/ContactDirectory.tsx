
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, User, Building, Shield, Wrench, BookOpen, Heart, Search } from 'lucide-react';

interface Contact {
  id: string;
  name: string;
  role: string;
  department: string;
  email: string;
  phone: string;
  office: string;
  hours: string;
  category: 'Executive' | 'Administrative' | 'Support' | 'Academic';
}

const CONTACTS: Contact[] = [
  {
    id: 'c1',
    name: 'Prof. Adebayo Ogunlade',
    role: 'Hall Warden',
    department: 'Hall Administration',
    email: 'warden.mellanby@ui.edu.ng',
    phone: '+234 803 XXX XXXX',
    office: 'Warden\'s Lodge, Block A',
    hours: 'Mon-Fri: 9AM - 4PM',
    category: 'Administrative'
  },
  {
    id: 'c2',
    name: 'Mr. Chukwuemeka Obi',
    role: 'Hall Secretary',
    department: 'E-Secretariat',
    email: 'secretary.mellanby@ui.edu.ng',
    phone: '+234 805 XXX XXXX',
    office: 'Secretariat Office, JCR',
    hours: 'Mon-Sat: 8AM - 6PM',
    category: 'Executive'
  },
  {
    id: 'c3',
    name: 'Miss Fatima Bello',
    role: 'Hall President',
    department: 'Executive Council',
    email: 'president.mellanby@ui.edu.ng',
    phone: '+234 806 XXX XXXX',
    office: 'Council Chamber, JCR',
    hours: 'By Appointment',
    category: 'Executive'
  },
  {
    id: 'c4',
    name: 'Mr. Oluwaseun Adeyemi',
    role: 'Chief Porter',
    department: 'Security & Logistics',
    email: 'porter.mellanby@ui.edu.ng',
    phone: '+234 807 XXX XXXX',
    office: 'Porter\'s Lodge, Main Gate',
    hours: '24/7 Available',
    category: 'Support'
  },
  {
    id: 'c5',
    name: 'Mrs. Grace Nwosu',
    role: 'Hall Matron',
    department: 'Welfare Services',
    email: 'matron.mellanby@ui.edu.ng',
    phone: '+234 808 XXX XXXX',
    office: 'Matron\'s Office, Block B',
    hours: 'Mon-Fri: 8AM - 5PM',
    category: 'Support'
  },
  {
    id: 'c6',
    name: 'Engr. Tunde Bakare',
    role: 'Maintenance Officer',
    department: 'Facilities Management',
    email: 'maintenance.mellanby@ui.edu.ng',
    phone: '+234 809 XXX XXXX',
    office: 'Maintenance Unit, Block D',
    hours: 'Mon-Sat: 7AM - 7PM',
    category: 'Support'
  },
  {
    id: 'c7',
    name: 'Dr. Amina Yusuf',
    role: 'Academic Advisor',
    department: 'Academic Affairs',
    email: 'academic.mellanby@ui.edu.ng',
    phone: '+234 810 XXX XXXX',
    office: 'Tutorial Room, JCR',
    hours: 'Tue & Thu: 2PM - 5PM',
    category: 'Academic'
  },
  {
    id: 'c8',
    name: 'Mr. David Eze',
    role: 'Social Secretary',
    department: 'Social & Events',
    email: 'social.mellanby@ui.edu.ng',
    phone: '+234 811 XXX XXXX',
    office: 'Events Office, JCR',
    hours: 'Mon-Fri: 10AM - 6PM',
    category: 'Executive'
  }
];

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'Executive': return Shield;
    case 'Administrative': return Building;
    case 'Support': return Wrench;
    case 'Academic': return BookOpen;
    default: return User;
  }
};

const ContactDirectory: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredContacts = CONTACTS.filter(contact => {
    const matchesFilter = filter === 'All' || contact.category === filter;
    const matchesSearch = contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          contact.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          contact.department.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="p-6 sm:p-12 lg:p-24 animate-in fade-in duration-700">
      <header className="mb-12 border-b-2 border-[#1a2a40] pb-8">
        <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-8">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-[#1a2a40] uppercase tracking-tighter">DIRECTORY</h1>
            <p className="mono text-[#c5a059] mt-2 uppercase tracking-widest text-xs sm:text-sm">Hall Officials & Contact Information</p>
          </div>
          <div className="relative w-full xl:w-72">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-black/30" />
            <input 
              type="text" 
              placeholder="SEARCH BY NAME OR ROLE..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#e0e0dc] border-2 border-[#1a2a40] pl-10 pr-4 py-3 mono text-[10px] uppercase focus:bg-white outline-none"
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-1 mt-6">
          {['All', 'Executive', 'Administrative', 'Support', 'Academic'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1.5 mono text-[9px] sm:text-[10px] uppercase border border-[#1a2a40] transition-all
                ${filter === cat ? 'bg-[#1a2a40] text-white' : 'bg-transparent text-[#1a2a40] hover:bg-black/5'}
              `}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {filteredContacts.map((contact) => {
          const CategoryIcon = getCategoryIcon(contact.category);
          return (
            <div 
              key={contact.id}
              className="group bg-white border-2 border-[#1a2a40]/10 hover:border-[#1a2a40] p-6 lg:p-8 transition-all hover:shadow-lg relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#f4f4f2] -translate-y-12 translate-x-12 rotate-45 group-hover:bg-[#c5a059]/10 transition-colors" />
              
              <div className="flex gap-6">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-[#1a2a40] flex items-center justify-center shrink-0 group-hover:bg-[#c5a059] transition-colors">
                  <CategoryIcon size={28} className="text-[#c5a059] group-hover:text-[#1a2a40]" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-black text-lg lg:text-xl uppercase text-[#1a2a40] leading-tight truncate">{contact.name}</h3>
                    <span className="px-2 py-0.5 bg-[#f4f4f2] mono text-[8px] uppercase tracking-widest text-[#1a2a40]/60 shrink-0">
                      {contact.category}
                    </span>
                  </div>
                  <p className="mono text-[10px] text-[#c5a059] uppercase tracking-widest font-bold">{contact.role}</p>
                  <p className="mono text-[9px] text-[#1a2a40]/50 uppercase mt-1">{contact.department}</p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-black/5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a 
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-3 text-[#1a2a40]/70 hover:text-[#c5a059] transition-colors group/link"
                >
                  <div className="w-8 h-8 bg-[#f4f4f2] flex items-center justify-center group-hover/link:bg-[#c5a059] transition-colors">
                    <Mail size={14} className="group-hover/link:text-white" />
                  </div>
                  <span className="mono text-[9px] uppercase truncate">{contact.email}</span>
                </a>
                
                <a 
                  href={`tel:${contact.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 text-[#1a2a40]/70 hover:text-[#c5a059] transition-colors group/link"
                >
                  <div className="w-8 h-8 bg-[#f4f4f2] flex items-center justify-center group-hover/link:bg-[#c5a059] transition-colors">
                    <Phone size={14} className="group-hover/link:text-white" />
                  </div>
                  <span className="mono text-[9px] uppercase">{contact.phone}</span>
                </a>
                
                <div className="flex items-center gap-3 text-[#1a2a40]/70">
                  <div className="w-8 h-8 bg-[#f4f4f2] flex items-center justify-center">
                    <MapPin size={14} />
                  </div>
                  <span className="mono text-[9px] uppercase">{contact.office}</span>
                </div>
                
                <div className="flex items-center gap-3 text-[#1a2a40]/70">
                  <div className="w-8 h-8 bg-[#f4f4f2] flex items-center justify-center">
                    <Clock size={14} />
                  </div>
                  <span className="mono text-[9px] uppercase">{contact.hours}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredContacts.length === 0 && (
        <div className="h-64 flex flex-col items-center justify-center border-2 border-dashed border-black/10">
          <User size={48} className="text-black/5 mb-4" />
          <p className="mono text-xs text-black/30 uppercase">No contacts found matching your criteria</p>
        </div>
      )}

      {/* Emergency Contact Banner */}
      <div className="mt-12 bg-[#1a2a40] text-white p-8 lg:p-12 relative overflow-hidden">
        <div className="absolute inset-0 louver-pattern opacity-10" />
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-rose-500 flex items-center justify-center animate-pulse">
              <Heart size={28} className="text-white" />
            </div>
            <div>
              <h3 className="text-xl lg:text-2xl font-black uppercase tracking-tight">Emergency Contacts</h3>
              <p className="mono text-[10px] text-white/60 uppercase tracking-widest mt-1">Available 24/7 for urgent matters</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-8">
            <div className="text-center sm:text-left">
              <span className="block mono text-[9px] text-[#c5a059] uppercase">Porter's Lodge</span>
              <span className="block font-bold text-lg">+234 807 XXX XXXX</span>
            </div>
            <div className="text-center sm:text-left">
              <span className="block mono text-[9px] text-[#c5a059] uppercase">UI Health Center</span>
              <span className="block font-bold text-lg">+234 802 XXX XXXX</span>
            </div>
            <div className="text-center sm:text-left">
              <span className="block mono text-[9px] text-[#c5a059] uppercase">Campus Security</span>
              <span className="block font-bold text-lg">+234 803 XXX XXXX</span>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-12 mono text-[9px] text-black/30 uppercase tracking-widest text-center">
        Contact information updated quarterly • Last update: January 2024
      </footer>
    </div>
  );
};

export default ContactDirectory;
