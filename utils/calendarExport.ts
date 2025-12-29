
import { HallEvent } from '../types';

export const exportToIcs = (event: HallEvent) => {
  const formatDate = (date: string, time: string) => {
    return date.replace(/-/g, '') + 'T' + time.replace(/:/g, '') + '00';
  };

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Mellanby E-Secretariat//EN',
    'BEGIN:VEVENT',
    `UID:${event.id}@mellanby.ui.edu.ng`,
    `DTSTAMP:${formatDate(event.date, event.startTime)}`,
    `DTSTART:${formatDate(event.date, event.startTime)}`,
    `DTEND:${formatDate(event.date, event.endTime)}`,
    `SUMMARY:${event.title}`,
    `DESCRIPTION:${event.description}`,
    `LOCATION:${event.location}`,
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `${event.title.replace(/\s+/g, '_')}.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const getGoogleCalendarUrl = (event: HallEvent) => {
  const formatDate = (date: string, time: string) => {
    return date.replace(/-/g, '') + 'T' + time.replace(/:/g, '') + '00';
  };

  const start = formatDate(event.date, event.startTime);
  const end = formatDate(event.date, event.endTime);
  const baseUrl = 'https://calendar.google.com/calendar/render?action=TEMPLATE';
  const params = new URLSearchParams({
    text: event.title,
    dates: `${start}/${end}`,
    details: event.description,
    location: event.location,
  });

  return `${baseUrl}&${params.toString()}`;
};
