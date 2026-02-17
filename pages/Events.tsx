
import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { exportToIcs, getGoogleCalendarUrl } from '../utils/calendarExport';
import { Calendar as CalendarIcon, Download, MapPin, Clock, ExternalLink } from 'lucide-react';
import { HallEvent } from '../types';
import { MOCK_EVENTS } from '../constants';

const Events: React.FC = () => {
  const [events, setEvents] = useState<HallEvent[]>([]);
  const [filter, setFilter] = useState<string>('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .order('date', { ascending: false });

    if (error) {
      console.error('Error fetching events:', error);
      setEvents(MOCK_EVENTS);
    } else if (data && data.length > 0) {
      const mappedEvents: HallEvent[] = data.map((item: any) => ({
        id: item.id,
        title: item.title,
        description: item.description,
        date: item.date,
        startTime: item.start_time,
        endTime: item.end_time,
        location: item.location,
        category: item.category
      }));
      setEvents(mappedEvents);
    } else {
      setEvents(MOCK_EVENTS);
    }
    setLoading(false);
  };

  const filteredEvents = filter === 'All'
    ? events
    : events.filter(e => e.category === filter);

  return (
    <div className="p-6 sm:p-12 lg:p-24 animate-in fade-in duration-700">
      <header className="mb-12 border-b-2 border-[#1a2a40] pb-8 flex flex-col xl:flex-row xl:items-end justify-between gap-8">
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-[#1a2a40] uppercase tracking-tighter">HALL EVENTS</h1>
          <p className="mono text-[#c5a059] mt-2 uppercase tracking-widest text-xs sm:text-sm">Schedule of Activities & Tradition</p>
        </div>
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 items-start sm:items-center">
          
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

      {loading ? (
        <div className="h-64 flex flex-col items-center justify-center">
           <p className="mono text-xs text-[#1a2a40] uppercase animate-pulse">Loading Archives...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="group bg-[#e0e0dc] border-b-4 border-[#1a2a40] hover:border-[#c5a059] p-6 lg:p-8 flex flex-col transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
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

              <div className="mt-auto flex flex-col sm:flex-row gap-3">
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
      )}

      {!loading && filteredEvents.length === 0 && (
        <div className="h-64 flex flex-col items-center justify-center border-2 border-dashed border-black/10">
          <CalendarIcon size={48} className="text-black/5 mb-4" />
          <p className="mono text-xs text-black/30 uppercase">No events found in this category</p>
        </div>
      )}
    </div>
  );
};

export default Events;
