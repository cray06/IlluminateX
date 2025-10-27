import { LucideIcon } from 'lucide-react';

export interface Video {
  id: string;
  title: string;
  author: string;
  duration: string;
  thumbnail: string;
  watchedAt: string;
}

export interface StatCard {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative';
  icon: LucideIcon;
}

export interface ChartData {
  date: string;
  views: number;
  subscribers: number;
}

export interface Playlist {
  id: string;
  title: string;
  description: string;
  videoCount: number;
  visibility: 'Public' | 'Private';
  icon: LucideIcon;
}

export interface ActivityItem {
  id: string;
  type: 'subscriber' | 'comment' | 'earning';
  user: string;
  value?: string;
  change?: string;
  changeType?: 'positive' | 'negative';
  timeAgo: string;
  content?: string;
}

export interface User {
  name: string;
  studio: string;
  avatar: string;
  notifications: number;
}

export interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

export interface StudioVideo {
  id: string;
  title: string;
  description: string;
  duration: string;
  visibility: 'Public' | 'Private';
  date: string;
  views: number;
  likes: number;
  saves: number;
  watchLater: number;
  subscribers: number;
  comments: number;
  shares: number;
  illux: number;
  lastViewed: string;
  thumbnail: string;
}

export interface ChatMessage {
  id: string;
  senderId: string;
  content: string;
  timestamp: string;
  isOwn: boolean;
}

export interface ChatContact {
  id: string;
  username: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  isOnline: boolean;
  unreadCount?: number;
}