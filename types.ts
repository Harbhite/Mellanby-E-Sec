
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

export interface MaintenanceRequest {
  id: string;
  block: string;
  roomNumber?: string;
  urgency: 'LOW' | 'NORMAL' | 'HIGH' | 'URGENT (24HR)';
  nature: string;
  description: string;
  status: 'Pending' | 'In Progress' | 'Resolved' | 'Completed';
  dateReported?: string;
  reporterId?: string;
  reporterName?: string;
  created_at?: string;
}
