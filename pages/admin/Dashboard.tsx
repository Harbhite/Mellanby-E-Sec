
import React from 'react';
import { Calendar, Newspaper, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b-2 border-[#1a2a40] pb-6">
        <div>
          <h1 className="text-3xl md:text-5xl font-black text-[#1a2a40] uppercase tracking-tighter">Admin Dashboard</h1>
          <p className="mono text-[#c5a059] mt-2 uppercase tracking-widest text-xs">Manage Hall Activities & Records</p>
        </div>
        <div className="mono text-[10px] bg-[#e0e0dc] px-3 py-1 rounded text-[#1a2a40]/60 font-bold uppercase tracking-widest">
            {new Date().toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Events Card */}
        <Link to="/admin/events" className="group block bg-white border-2 border-[#1a2a40] hover:border-[#c5a059] p-6 shadow-sm hover:shadow-lg transition-all">
            <div className="flex justify-between items-start mb-4">
                <div className="bg-[#1a2a40] text-white p-3 rounded-lg group-hover:bg-[#c5a059] group-hover:text-[#1a2a40] transition-colors">
                    <Calendar size={24} />
                </div>
                {/* <span className="mono text-[10px] font-bold text-[#1a2a40]/40 uppercase">3 UPCOMING</span> */}
            </div>
            <h3 className="text-xl font-black text-[#1a2a40] uppercase tracking-wide mb-2">Manage Events</h3>
            <p className="text-xs text-[#1a2a40]/60 mono uppercase tracking-wider">Schedule hall activities, dinners, and meetings.</p>
        </Link>

        {/* News Card */}
        <Link to="/admin/news" className="group block bg-white border-2 border-[#1a2a40] hover:border-[#c5a059] p-6 shadow-sm hover:shadow-lg transition-all">
            <div className="flex justify-between items-start mb-4">
                <div className="bg-[#1a2a40] text-white p-3 rounded-lg group-hover:bg-[#c5a059] group-hover:text-[#1a2a40] transition-colors">
                    <Newspaper size={24} />
                </div>
                {/* <span className="mono text-[10px] font-bold text-[#1a2a40]/40 uppercase">2 DRAFTS</span> */}
            </div>
            <h3 className="text-xl font-black text-[#1a2a40] uppercase tracking-wide mb-2">Hall News</h3>
            <p className="text-xs text-[#1a2a40]/60 mono uppercase tracking-wider">Publish announcements, press releases, and updates.</p>
        </Link>

        {/* Maintenance Card */}
        <Link to="/admin/maintenance" className="group block bg-white border-2 border-[#1a2a40] hover:border-[#c5a059] p-6 shadow-sm hover:shadow-lg transition-all">
            <div className="flex justify-between items-start mb-4">
                <div className="bg-[#1a2a40] text-white p-3 rounded-lg group-hover:bg-[#c5a059] group-hover:text-[#1a2a40] transition-colors">
                    <Wrench size={24} />
                </div>
                {/* <span className="mono text-[10px] font-bold text-rose-500 uppercase">5 PENDING</span> */}
            </div>
            <h3 className="text-xl font-black text-[#1a2a40] uppercase tracking-wide mb-2">Maintenance</h3>
            <p className="text-xs text-[#1a2a40]/60 mono uppercase tracking-wider">Review and manage reported infrastructure faults.</p>
        </Link>
      </div>

      <div className="bg-[#e0e0dc] border-l-4 border-[#c5a059] p-6">
        <h4 className="font-bold text-[#1a2a40] uppercase mb-2">Quick Tip</h4>
        <p className="mono text-xs text-[#1a2a40]/70 uppercase leading-relaxed">
            Ensure all uploaded images for news and events are optimized for web usage to maintain fast loading times.
            Use the Document Archive section (coming soon) to upload official PDFs.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
