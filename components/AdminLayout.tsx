
import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { LayoutDashboard, Calendar, Newspaper, FileText, Wrench, LogOut, Menu, X } from 'lucide-react';

const AdminLayout: React.FC = () => {
  const { signOut } = useAuth();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const handleSignOut = async () => {
    await signOut();
    navigate('/login');
  };

  const navItems = [
    { path: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/admin/events', label: 'Events', icon: Calendar },
    { path: '/admin/news', label: 'News', icon: Newspaper },
    { path: '/admin/documents', label: 'Documents', icon: FileText },
    { path: '/admin/maintenance', label: 'Maintenance', icon: Wrench },
  ];

  return (
    <div className="flex h-screen bg-[#f4f4f2]">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-30 w-64 bg-[#1a2a40] text-white transition-transform duration-300 transform
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <div className="p-6 border-b border-white/10 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-black uppercase tracking-widest">Admin</h1>
            <p className="mono text-[10px] text-[#c5a059] uppercase tracking-widest mt-1">e-Secretariat</p>
          </div>
          <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden text-white/50 hover:text-white">
            <X size={20} />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsSidebarOpen(false)}
              className={({ isActive }) => `
                flex items-center gap-3 px-4 py-3 rounded transition-colors
                ${isActive
                  ? 'bg-[#c5a059] text-[#1a2a40] font-bold'
                  : 'text-white/70 hover:bg-white/10 hover:text-white'
                }
              `}
            >
              <item.icon size={18} />
              <span className="mono text-xs uppercase tracking-widest">{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t border-white/10">
          <button
            onClick={handleSignOut}
            className="flex items-center gap-3 px-4 py-3 w-full text-rose-400 hover:bg-rose-500/10 hover:text-rose-300 transition-colors rounded"
          >
            <LogOut size={18} />
            <span className="mono text-xs uppercase tracking-widest">Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-[#e0e0dc] p-4 flex items-center lg:hidden">
          <button onClick={() => setIsSidebarOpen(true)} className="text-[#1a2a40]">
            <Menu size={24} />
          </button>
          <span className="ml-4 font-black uppercase tracking-widest text-[#1a2a40]">Menu</span>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-auto p-6 lg:p-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
