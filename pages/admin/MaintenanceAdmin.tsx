
import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { Search, Clock, CheckCircle, AlertTriangle } from 'lucide-react';

interface MaintenanceRequest {
  id: string;
  block: string;
  urgency: string;
  nature: string;
  description: string;
  status: 'Pending' | 'In Progress' | 'Completed';
  created_at: string;
}

const MaintenanceAdmin: React.FC = () => {
  const [requests, setRequests] = useState<MaintenanceRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('maintenance_requests')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching maintenance requests:', error);
    } else {
      setRequests(data as MaintenanceRequest[]);
    }
    setLoading(false);
  };

  const updateStatus = async (id: string, newStatus: MaintenanceRequest['status']) => {
    const { error } = await supabase
      .from('maintenance_requests')
      .update({ status: newStatus })
      .eq('id', id);

    if (error) {
      console.error('Error updating status:', error);
      alert('Failed to update status');
    } else {
      setRequests(requests.map(req => req.id === id ? { ...req, status: newStatus } : req));
    }
  };

  const filteredRequests = requests.filter(req => {
    const matchesFilter = filter === 'All' ? true : req.status === filter;
    const matchesSearch =
      req.nature.toLowerCase().includes(searchTerm.toLowerCase()) ||
      req.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      req.block.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pending': return 'bg-rose-100 text-rose-700';
      case 'In Progress': return 'bg-yellow-100 text-yellow-700';
      case 'Completed': return 'bg-emerald-100 text-emerald-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b-2 border-[#1a2a40] pb-6">
        <div>
          <h1 className="text-3xl font-black text-[#1a2a40] uppercase tracking-tighter">Maintenance Log</h1>
          <p className="mono text-[#c5a059] mt-2 uppercase tracking-widest text-xs">Track & Resolve Issues</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="SEARCH REQUESTS..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white border-2 border-[#e0e0dc] focus:border-[#1a2a40] outline-none mono text-xs uppercase"
          />
        </div>

        {/* Filter */}
        <div className="flex gap-2">
           {['All', 'Pending', 'In Progress', 'Completed'].map(status => (
             <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-4 py-2 mono text-[10px] font-bold uppercase tracking-wider border transition-colors
                  ${filter === status
                    ? 'bg-[#1a2a40] text-white border-[#1a2a40]'
                    : 'bg-white text-[#1a2a40] border-[#e0e0dc] hover:border-[#1a2a40]'}
                `}
             >
               {status}
             </button>
           ))}
        </div>
      </div>

      <div className="bg-white border border-[#e0e0dc] shadow-sm overflow-hidden">
        {loading ? (
          <div className="p-8 text-center mono text-xs uppercase text-gray-500">Loading requests...</div>
        ) : filteredRequests.length === 0 ? (
          <div className="p-8 text-center mono text-xs uppercase text-gray-500">No requests found.</div>
        ) : (
          <div className="divide-y divide-[#e0e0dc]">
            {filteredRequests.map(req => (
              <div key={req.id} className="p-6 flex flex-col lg:flex-row gap-6 hover:bg-[#f9f9f9] transition-colors">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className={`px-2 py-1 text-[9px] font-bold uppercase tracking-wider rounded-sm ${getStatusColor(req.status)}`}>
                      {req.status}
                    </span>
                    <span className="mono text-[10px] font-bold text-[#1a2a40]/60 uppercase flex items-center gap-1">
                      <Clock size={10} /> {new Date(req.created_at).toLocaleDateString()}
                    </span>
                    <span className="mono text-[10px] font-bold text-[#1a2a40] uppercase bg-[#e0e0dc] px-2 py-0.5 rounded-sm">
                       {req.block}
                    </span>
                    {req.urgency === 'URGENT (24HR)' || req.urgency === 'EMERGENCY' ? (
                       <span className="flex items-center gap-1 mono text-[9px] font-bold uppercase text-rose-600">
                         <AlertTriangle size={10} /> {req.urgency}
                       </span>
                    ) : (
                       <span className="mono text-[9px] font-bold uppercase text-gray-400">{req.urgency}</span>
                    )}
                  </div>
                  <h3 className="font-bold text-[#1a2a40] text-lg mb-1">{req.nature}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{req.description}</p>
                </div>

                <div className="flex items-center gap-2 self-start lg:self-center min-w-[200px] justify-end">
                   {req.status !== 'Pending' && (
                     <button
                       onClick={() => updateStatus(req.id, 'Pending')}
                       className="px-3 py-1.5 border border-[#e0e0dc] hover:border-[#1a2a40] text-[#1a2a40] mono text-[9px] font-bold uppercase"
                     >
                       Mark Pending
                     </button>
                   )}
                   {req.status !== 'In Progress' && (
                     <button
                       onClick={() => updateStatus(req.id, 'In Progress')}
                       className="px-3 py-1.5 border border-[#e0e0dc] hover:border-yellow-500 hover:text-yellow-700 hover:bg-yellow-50 text-[#1a2a40] mono text-[9px] font-bold uppercase"
                     >
                       Start Work
                     </button>
                   )}
                   {req.status !== 'Completed' && (
                     <button
                       onClick={() => updateStatus(req.id, 'Completed')}
                       className="px-3 py-1.5 bg-[#1a2a40] text-white hover:bg-emerald-600 mono text-[9px] font-bold uppercase flex items-center gap-1"
                     >
                       <CheckCircle size={10} /> Complete
                     </button>
                   )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MaintenanceAdmin;
