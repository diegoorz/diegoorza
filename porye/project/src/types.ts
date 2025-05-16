export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'user' | 'creator' | 'admin';
  stats?: CreatorStats;
  isPremium: boolean;
  followedPredictions: string[];
  notificationPreferences: NotificationPreferences;
}

export interface CreatorStats {
  totalPredictions: number;
  successRate: number;
  netProfit: number;
  currentStreak: number;
  totalUnits: number;
}

export interface NotificationPreferences {
  newPredictions: boolean;
  predictionResults: boolean;
  comments: boolean;
  pushEnabled: boolean;
}

export interface Prediction {
  id: string;
  sport: string;
  league: string;
  match: string;
  teams: {
    home: string;
    away: string;
  };
  date: string;
  time: string;
  prediction: string;
  odds: number;
  bookmaker: string;
  confidence: 'baja' | 'media' | 'alta';
  analysis?: string;
  status: 'pendiente' | 'acertada' | 'fallada';
  isPremium: boolean;
  image: string;
  createdAt: string;
  category: string;
  likes: number;
  comments: number;
  followers: number;
}

export interface Membership {
  id: string;
  name: string;
  price: number;
  period: string;
  features: string[];
  isPopular?: boolean;
}

export interface Comment {
  id: string;
  userId: string;
  predictionId: string;
  content: string;
  createdAt: string;
  userName: string;
  userAvatar?: string;
}