
import React, { useState } from 'react';
import { MOCK_EVENTS } from '../constants';
import { exportToIcs, getGoogleCalendarUrl } from '../utils/calendarExport';
import { Calendar as CalendarIcon, Download, MapPin, Clock, Plus, X, ExternalLink, Edit2 } from 'lucide-react';
import { HallEvent } from '../types';

const Events: React.FC = () => {
  const [events, setEvents] = useState<HallEvent[]>(MOCK_EVENTS);
  const [filter, setFilter] = useState<string>('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEventId, setEditingEventId] = useState<string | null>(null);

  const initialEventState: Partial<HallEvent> = {
    category: 'Social',
    startTime: '09:00',
    endTime: '11:00',
    date: new Date().toISOString().split('T')[0],
    title: '',
    description: '',
    location: ''
  };

  const [currentEvent, setCurrentEvent] = useState<Partial<HallEvent>>(initialEventState);

  const filteredEvents = filter === 'All'
    ? events
    : events.filter(e => e.category === filter);

  const handleOpenAddModal = () => {
    setCurrentEvent(initialEventState);
    setEditingEventId(null);
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (event: HallEvent) => {
    setCurrentEvent({ ...event });
    setEditingEventId(event.id);
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingEventId) {
      setEvents(events.map(ev => ev.id === editingEventId ? { ...currentEvent as HallEvent } : ev));
    } else {
      const event: HallEvent = {
        ...currentEvent as HallEvent,
        id: `e${Date.now()}`
      };
      setEvents([event, ...events]);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="p-6 sm:p-12 lg:p-24 animate-in fade-in duration-700">
      <header className="mb-12 border-b-2 border-[#1a2a40] pb-8 flex flex-col xl:flex-row xl:items-end justify-between gap-8">
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-[#1a2a40] uppercase tracking-tighter">HALL EVENTS</h1>
          <p className="mono text-[#c5a059] mt-2 uppercase tracking-widest text-xs sm:text-sm">Schedule of Activities & Tradition</p>
        </div>
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 items-start sm:items-center">
          <button
            onClick={handleOpenAddModal}
            className="w-full sm:w-auto px-6 py-3 bg-[#c5a059] text-[#1a2a40] mono text-[11px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#1a2a40] hover:text-[#c5a059] transition-all border-2 border-[#c5a059] shadow-md active:scale-95"
          >
            <Plus size={16} /> Create Event
          </button>
          
          <div className="flex flex-wrap gap-1 border-t sm:border-t-0 sm:border-l-2 border-black/10 pt-4 sm:pt-0 sm:pl-4 w-full sm:w-auto">
            {['All', 'Social', 'Academic', 'Sports', 'Administrative'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 mono text-[9px] sm:text-[10px] uppercase border border-[#1a2a40] transition-all flex-grow sm:flex-grow-0
                  ${filter === cat ? 'bg-[#1a2a40] text-white' : 'bg-transparent text-[#1a2a40] hover:bg-black/5'}
                `}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            onClick={() => handleOpenEditModal(event)}
            className="group bg-[#e0e0dc] border-b-4 border-[#1a2a40] hover:border-[#c5a059] p-6 lg:p-8 flex flex-col transition-all duration-500 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="bg-[#1a2a40] text-white px-3 py-1 mono text-[9px] uppercase tracking-widest">
                {event.category}
              </div>
              <div className="text-right">
                <div className="text-2xl font-black leading-none">{new Date(event.date).getDate()}</div>
                <div className="mono text-[10px] uppercase opacity-50">{new Date(event.date).toLocaleDateString(undefined, { month: 'short', year: 'numeric' })}</div>
              </div>
            </div>

            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-[#1a2a40] group-hover:text-[#c5a059] transition-colors">{event.title}</h3>
              <Edit2 size={14} className="text-[#1a2a40] opacity-0 group-hover:opacity-40 transition-opacity" />
            </div>

            <p className="text-sm text-[#1a2a40]/70 mb-8 flex-grow leading-relaxed line-clamp-3">{event.description}</p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-[#1a2a40]/60">
                <Clock size={14} className="text-[#c5a059]" />
                <span className="mono text-[10px] uppercase tracking-wider">{event.startTime} - {event.endTime}</span>
              </div>
              <div className="flex items-center gap-3 text-[#1a2a40]/60">
                <MapPin size={14} className="text-[#c5a059]" />
                <span className="mono text-[10px] uppercase tracking-wider">{event.location}</span>
              </div>
            </div>

            <div className="mt-auto flex flex-col sm:flex-row gap-3" onClick={e => e.stopPropagation()}>
              <button
                onClick={() => exportToIcs(event)}
                title="Download ICS File"
                className="flex-1 border-2 border-[#1a2a40] hover:bg-[#1a2a40] hover:text-white py-3 px-4 flex items-center justify-center gap-2 transition-all duration-300"
              >
                <Download size={14} />
                <span className="mono text-[10px] font-bold uppercase tracking-widest">ICS</span>
              </button>
              <a
                href={getGoogleCalendarUrl(event)}
                target="_blank"
                rel="noopener noreferrer"
                title="Open in Google Calendar"
                className="flex-1 bg-[#1a2a40] text-white hover:bg-[#c5a059] hover:text-[#1a2a40] py-3 px-4 flex items-center justify-center gap-2 transition-all duration-300"
              >
                <ExternalLink size={14} />
                <span className="mono text-[10px] font-bold uppercase tracking-widest">Google</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <div className="h-64 flex flex-col items-center justify-center border-2 border-dashed border-black/10">
          <CalendarIcon size={48} className="text-black/5 mb-4" />
          <p className="mono text-xs text-black/30 uppercase">No events found in this category</p>
        </div>
      )}

      {/* MODAL (FOR ADDING OR EDITING) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-[#1a2a40]/90 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
          <div className="relative bg-[#f4f4f2] w-full max-w-xl border-4 border-[#1a2a40] shadow-[8px_8px_0_0_#c5a059] lg:shadow-[12px_12px_0_0_#c5a059] animate-in zoom-in-95 duration-200 overflow-y-auto max-h-[90vh]">
             <div className="bg-[#1a2a40] p-6 flex justify-between items-center sticky top-0 z-10">
                <h2 className="text-white font-black uppercase tracking-widest text-lg lg:text-xl">
                  {editingEventId ? 'REWRITE HISTORY' : 'NEW TRADITION'}
                </h2>
                <button onClick={() => setIsModalOpen(false)} className="text-white hover:text-[#c5a059]">
                    <X size={24} />
                </button>
             </div>

             <form onSubmit={handleSubmit} className="p-6 lg:p-8 space-y-6">
                <div className="space-y-2">
                    <label className="mono text-[10px] uppercase font-bold text-[#1a2a40]">Event Title</label>
                    <input
                        required
                        type="text"
                        value={currentEvent.title || ''}
                        onChange={e => setCurrentEvent({...currentEvent, title: e.target.value})}
                        className="w-full bg-white border-2 border-[#1a2a40] p-3 text-sm focus:ring-2 ring-[#c5a059] outline-none"
                        placeholder="E.G. HALL DINNER 2024"
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="mono text-[10px] uppercase font-bold text-[#1a2a40]">Date</label>
                        <input
                            required
                            type="date"
                            value={currentEvent.date || ''}
                            onChange={e => setCurrentEvent({...currentEvent, date: e.target.value})}
                            className="w-full bg-white border-2 border-[#1a2a40] p-3 text-sm outline-none"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="mono text-[10px] uppercase font-bold text-[#1a2a40]">Category</label>
                        <select
                            value={currentEvent.category}
                            onChange={e => setCurrentEvent({...currentEvent, category: e.target.value as any})}
                            className="w-full bg-white border-2 border-[#1a2a40] p-3 text-sm outline-none font-bold"
                        >
                            <option value="Social">SOCIAL</option>
                            <option value="Academic">ACADEMIC</option>
                            <option value="Administrative">ADMIN</option>
                            <option value="Sports">SPORTS</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="mono text-[10px] uppercase font-bold text-[#1a2a40]">Start Time</label>
                        <input
                            required
                            type="time"
                            value={currentEvent.startTime || ''}
                            onChange={e => setCurrentEvent({...currentEvent, startTime: e.target.value})}
                            className="w-full bg-white border-2 border-[#1a2a40] p-3 text-sm outline-none"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="mono text-[10px] uppercase font-bold text-[#1a2a40]">End Time</label>
                        <input
                            required
                            type="time"
                            value={currentEvent.endTime || ''}
                            onChange={e => setCurrentEvent({...currentEvent, endTime: e.target.value})}
                            className="w-full bg-white border-2 border-[#1a2a40] p-3 text-sm outline-none"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="mono text-[10px] uppercase font-bold text-[#1a2a40]">Location</label>
                    <input
                        required
                        type="text"
                        value={currentEvent.location || ''}
                        onChange={e => setCurrentEvent({...currentEvent, location: e.target.value})}
                        className="w-full bg-white border-2 border-[#1a2a40] p-3 text-sm outline-none"
                        placeholder="E.G. THE QUADRANGLE"
                    />
                </div>

                <div className="space-y-2">
                    <label className="mono text-[10px] uppercase font-bold text-[#1a2a40]">Brief Description</label>
                    <textarea
                        required
                        value={currentEvent.description || ''}
                        onChange={e => setCurrentEvent({...currentEvent, description: e.target.value})}
                        className="w-full bg-white border-2 border-[#1a2a40] p-3 text-sm min-h-[100px] outline-none"
                        placeholder="DETAILS OF THE EVENT..."
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-[#1a2a40] text-white font-black py-4 uppercase tracking-[0.3em] hover:bg-[#c5a059] hover:text-[#1a2a40] transition-all active:scale-95"
                >
                    {editingEventId ? 'UPDATE RECORD' : 'RECORD IN ARCHIVES'}
                </button>
             </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
