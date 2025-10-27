import { Eye, Clock, Users, DollarSign, Music, Heart, Sun } from 'lucide-react';
import { Video, StatCard, ChartData, Playlist, ActivityItem, User, StudioVideo, ChatContact, ChatMessage } from '@/types/dashboard';

export const mockUser: User = {
  name: 'David David',
  studio: 'My Studio',
  avatar: '/api/placeholder/40/40',
  notifications: 9
};

export const mockVideos: Video[] = [
  {
    id: '1',
    title: 'Amazing Drum Performance',
    author: '@josephdzn',
    duration: '3:00',
    thumbnail: '/api/placeholder/200/120',
    watchedAt: '15m ago'
  },
  {
    id: '2',
    title: 'Gospel Music Session',
    author: '@gracedd',
    duration: '02:45',
    thumbnail: '/api/placeholder/200/120',
    watchedAt: '5h ago'
  },
  {
    id: '3',
    title: 'Praise and Worship',
    author: '@josephdzn',
    duration: '08:34',
    thumbnail: '/api/placeholder/200/120',
    watchedAt: '2h ago'
  },
  {
    id: '4',
    title: 'Sunday Service',
    author: '@gracedd',
    duration: '03:43',
    thumbnail: '/api/placeholder/200/120',
    watchedAt: '1d ago'
  }
];

export const mockLikedVideos: Video[] = [
  {
    id: '1',
    title: 'Amazing Grace Cover',
    author: '@onemore',
    duration: '4:32',
    thumbnail: '/api/placeholder/200/120',
    watchedAt: '2 days ago'
  },
  {
    id: '2',
    title: 'Amazing Grace Cover',
    author: '@onemore',
    duration: '3:21',
    thumbnail: '/api/placeholder/200/120',
    watchedAt: '1 week ago'
  },
  {
    id: '3',
    title: 'Amazing Grace Cover',
    author: '@onemore',
    duration: '5:43',
    thumbnail: '/api/placeholder/200/120',
    watchedAt: '3 days ago'
  },
  {
    id: '4',
    title: 'Amazing Grace Cover',
    author: '@onemore',
    duration: '2:15',
    thumbnail: '/api/placeholder/200/120',
    watchedAt: '5 days ago'
  },
  {
    id: '5',
    title: 'Amazing Grace Cover',
    author: '@onemore',
    duration: '6:18',
    thumbnail: '/api/placeholder/200/120',
    watchedAt: '1 week ago'
  },
  {
    id: '6',
    title: 'Amazing Grace Cover',
    author: '@onemore',
    duration: '3:47',
    thumbnail: '/api/placeholder/200/120',
    watchedAt: '2 weeks ago'
  },
  {
    id: '7',
    title: 'Amazing Grace Cover',
    author: '@onemore',
    duration: '4:29',
    thumbnail: '/api/placeholder/200/120',
    watchedAt: '3 weeks ago'
  },
  {
    id: '8',
    title: 'Amazing Grace Cover',
    author: '@onemore',
    duration: '5:12',
    thumbnail: '/api/placeholder/200/120',
    watchedAt: '1 month ago'
  }
];

export const mockStats: StatCard[] = [
  {
    title: 'Views',
    value: '150',
    change: '+12,5%',
    changeType: 'positive',
    icon: Eye
  },
  {
    title: 'Watch time',
    value: '150',
    change: '-12,5%',
    changeType: 'negative',
    icon: Clock
  },
  {
    title: 'Subscribers',
    value: '15',
    change: '+13',
    changeType: 'positive',
    icon: Users
  },
  {
    title: 'Earnings',
    value: '$150',
    change: '+12.34%',
    changeType: 'positive',
    icon: DollarSign
  }
];

export const mockChartData: ChartData[] = [
  { date: '8 Aug', views: 120, subscribers: 10 },
  { date: '12 Aug', views: 140, subscribers: 12 },
  { date: '15 Aug', views: 160, subscribers: 13 },
  { date: '19 Aug', views: 189, subscribers: 15 },
  { date: '22 Aug', views: 170, subscribers: 14 },
  { date: '25 Aug', views: 180, subscribers: 15 },
  { date: '29 Aug', views: 200, subscribers: 16 }
];

export const mockPlaylists: Playlist[] = [
  {
    id: '1',
    title: 'Drums of Praise',
    description: 'Powerful drum performances',
    videoCount: 23,
    visibility: 'Public',
    icon: Music
  },
  {
    id: '2',
    title: 'Salvation',
    description: 'Songs of salvation and hope',
    videoCount: 15,
    visibility: 'Private',
    icon: Heart
  },
  {
    id: '3',
    title: 'Reflection',
    description: 'Quiet moments of reflection',
    videoCount: 8,
    visibility: 'Public',
    icon: Sun
  }
];

export const mockActivities: ActivityItem[] = [
  {
    id: '1',
    type: 'subscriber',
    user: '@twylder',
    value: '123 SUBSCRIBERS',
    timeAgo: '13m ago'
  },
  {
    id: '2',
    type: 'subscriber',
    user: '@onemore',
    value: '123 SUBSCRIBERS',
    timeAgo: '1h ago'
  },
  {
    id: '3',
    type: 'subscriber',
    user: '@jdan',
    value: '123 SUBSCRIBERS',
    timeAgo: '5h ago'
  }
];

export const mockComments: ActivityItem[] = [
  {
    id: '1',
    type: 'comment',
    user: '@joedzn',
    content: 'Great video, another? Please...',
    timeAgo: 'now'
  },
  {
    id: '2',
    type: 'comment',
    user: '@davdidit',
    content: 'The Lord is your strength brother',
    timeAgo: '4h ago'
  },
  {
    id: '3',
    type: 'comment',
    user: '@ambrosesax',
    content: 'Amazing',
    timeAgo: '13h ago'
  }
];

export const mockEarnings: ActivityItem[] = [
  {
    id: '1',
    type: 'earning',
    user: 'Earning',
    value: '$ 89.00',
    change: '-12,5%',
    changeType: 'negative',
    timeAgo: 'now'
  },
  {
    id: '2',
    type: 'earning',
    user: 'Earning',
    value: '$ 890.00',
    change: '-12,5%',
    changeType: 'negative',
    timeAgo: '4h ago'
  },
  {
    id: '3',
    type: 'earning',
    user: 'Earning',
    value: '$ 890.00',
    change: '-12.5%',
    changeType: 'negative',
    timeAgo: '4h ago'
  }
];

export const mockStudioVideos: StudioVideo[] = [
  {
    id: '1',
    title: 'Learn double strokes like a...',
    description: 'On this video, i will teach you how to use your strokes very well.',
    duration: '3:00',
    visibility: 'Public',
    date: '12 Aug. 2025',
    views: 100,
    likes: 13,
    saves: 25,
    watchLater: 23,
    subscribers: 13,
    comments: 15,
    shares: 32,
    illux: 50.4,
    lastViewed: 'now',
    thumbnail: '/api/placeholder/120/80'
  },
  {
    id: '2',
    title: 'How the Lord saved me and..',
    description: 'A powerful testimony of salvation and transformation.',
    duration: '2:23',
    visibility: 'Private',
    date: '10 Aug. 2025',
    views: 22,
    likes: 5,
    saves: 8,
    watchLater: 12,
    subscribers: 5,
    comments: 3,
    shares: 6,
    illux: 23.89,
    lastViewed: '1h ago',
    thumbnail: '/api/placeholder/120/80'
  },
  {
    id: '3',
    title: 'Praise and Worship Session',
    description: 'Join me in worship and celebration of the Lord.',
    duration: '5:45',
    visibility: 'Public',
    date: '8 Aug. 2025',
    views: 85,
    likes: 20,
    saves: 18,
    watchLater: 14,
    subscribers: 18,
    comments: 12,
    shares: 28,
    illux: 67.23,
    lastViewed: '2h ago',
    thumbnail: '/api/placeholder/120/80'
  }
];

export const mockChatContacts: ChatContact[] = [
  {
    id: '1',
    username: '@jdan',
    avatar: '/api/placeholder/40/40',
    lastMessage: 'Good Morning please is there going to be rehearsal today?',
    timestamp: '2m ago',
    isOnline: true,
    unreadCount: 2
  },
  {
    id: '2',
    username: '@davdiv',
    avatar: '/api/placeholder/40/40',
    lastMessage: 'I just bought a new drum set and i want you to come let\'s do something...',
    timestamp: '15m ago',
    isOnline: true
  },
  {
    id: '3',
    username: '@tosinstrings',
    avatar: '/api/placeholder/40/40',
    lastMessage: 'What effect did you use for that video?',
    timestamp: '1h ago',
    isOnline: false
  },
  {
    id: '4',
    username: '@gracedd',
    avatar: '/api/placeholder/40/40',
    lastMessage: 'Thank you for the wonderful performance!',
    timestamp: '3h ago',
    isOnline: true
  },
  {
    id: '5',
    username: '@josephdzn',
    avatar: '/api/placeholder/40/40',
    lastMessage: 'Can we collaborate on a new project?',
    timestamp: '5h ago',
    isOnline: false
  },
  {
    id: '6',
    username: '@onemore',
    avatar: '/api/placeholder/40/40',
    lastMessage: 'Amazing work on that last video!',
    timestamp: '1d ago',
    isOnline: false
  }
];

export const mockChatMessages: Record<string, ChatMessage[]> = {
  '1': [
    {
      id: '1',
      senderId: '1',
      content: 'Good morning bro how are you doing?',
      timestamp: '11:58 AM',
      isOwn: false
    },
    {
      id: '2',
      senderId: 'me',
      content: 'I just bought a new drum set and i want you to come let\'s do something together, i belive it will be an amazing experience.',
      timestamp: '12:00 PM',
      isOwn: true
    }
  ],
  '2': [
    {
      id: '1',
      senderId: '2',
      content: 'Hey! I saw your latest video',
      timestamp: '10:30 AM',
      isOwn: false
    },
    {
      id: '2',
      senderId: 'me',
      content: 'Thanks! Glad you liked it',
      timestamp: '10:35 AM',
      isOwn: true
    },
    {
      id: '3',
      senderId: '2',
      content: 'I just bought a new drum set and i want you to come let\'s do something...',
      timestamp: '10:45 AM',
      isOwn: false
    }
  ],
  '3': [
    {
      id: '1',
      senderId: '3',
      content: 'What effect did you use for that video?',
      timestamp: '9:15 AM',
      isOwn: false
    }
  ]
};
