
import { HallEvent, NewsArticle, PortalAction, MaintenanceRequest } from './types';

export const COLORS = {
  mellanbyGold: '#c5a059',
  academicBlue: '#1a2a40',
  concreteLight: '#f4f4f2',
  concreteBase: '#e0e0dc'
};

export const PORTAL_ACTIONS: PortalAction[] = [
  {
    id: '2',
    number: '01',
    title: 'EXEC COUNCIL',
    description: 'Minutes of meetings, legislative drafts, and policy updates.'
  },
  {
    id: '3',
    number: '02',
    title: 'DOCUMENT ARCHIVE',
    description: 'Access the historical constitution and administrative archives.'
  },
  {
    id: '4',
    number: '03',
    title: 'MAINTENANCE',
    description: 'Submit structural reports and utility complaints directly.'
  }
];

export const MOCK_EVENTS: HallEvent[] = [
  {
    id: 'e1',
    title: 'Annual Hall Dinner',
    description: 'The grand celebration of Mellanby excellence and tradition.',
    date: '2024-05-15',
    startTime: '18:00',
    endTime: '22:00',
    location: 'Hall Quadrangle',
    category: 'Social'
  },
  {
    id: 'e2',
    title: 'Mellanby Academic Symposium',
    description: 'A gathering of intellectual minds to discuss modern governance.',
    date: '2024-04-22',
    startTime: '10:00',
    endTime: '14:00',
    location: 'Junior Common Room (JCR)',
    category: 'Academic'
  },
  {
    id: 'e3',
    title: 'Inter-Block Sports Finals',
    description: 'Block A vs Block D in the ultimate football showdown.',
    date: '2024-04-28',
    startTime: '16:00',
    endTime: '18:00',
    location: 'Sports Field',
    category: 'Sports'
  }
];

export const MOCK_NEWS: NewsArticle[] = [
  {
    id: 'n1',
    title: 'New Solar Inverters Installed in Block C',
    summary: 'The Hall Management has completed the installation of new power backups.',
    content: 'As part of the e-Secretariat roadmap, power stability is prioritized for digital infrastructure...',
    date: '2024-03-25',
    author: 'Hall Secretary',
    category: 'Announcement',
    imageUrl: 'https://picsum.photos/seed/mellanby1/800/400'
  },
  {
    id: 'n2',
    title: 'Renovation of the Junior Common Room',
    summary: 'Structural repairs and new louver installations underway for the JCR.',
    content: 'The architectural integrity of our common spaces is being restored to their 1952 glory...',
    date: '2024-03-20',
    author: 'Warden',
    category: 'Hall News',
    imageUrl: 'https://picsum.photos/seed/mellanby2/800/400'
  }
];

export const MOCK_MAINTENANCE_REQUESTS: MaintenanceRequest[] = [
  {
    id: 'm1',
    block: 'BLOCK A',
    urgency: 'NORMAL',
    nature: 'Leaking Tap',
    description: 'The tap in the bathroom sink is leaking constantly.',
    status: 'Pending',
    created_at: '2024-03-28T10:00:00Z'
  },
  {
    id: 'm2',
    block: 'BLOCK C',
    urgency: 'URGENT (24HR)',
    nature: 'Power Outage',
    description: 'No power in room C12 since morning.',
    status: 'In Progress',
    created_at: '2024-03-27T08:30:00Z'
  },
  {
    id: 'm3',
    block: 'BLOCK B',
    urgency: 'NORMAL',
    nature: 'Broken Window Latch',
    description: 'Window in room B05 cannot be closed properly.',
    status: 'Completed',
    created_at: '2024-03-25T14:15:00Z'
  }
];
