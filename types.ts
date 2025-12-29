
export interface HallEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  startTime: string;
  endTime: string;
  location: string;
  category: 'Social' | 'Academic' | 'Administrative' | 'Sports';
}

export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  content: string;
  date: string;
  author: string;
  category: 'Announcement' | 'Press Release' | 'Hall News';
  imageUrl: string;
}

export interface PortalAction {
  id: string;
  number: string;
  title: string;
  description: string;
}
