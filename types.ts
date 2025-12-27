
export interface Event {
  time: string;
  title: string;
  desc: string;
  icon: string;
}

export interface DayPlan {
  id: number;
  subtitle: string;
  title: string;
  events: Event[];
  game: string;
  note: string;
}

export interface PackingCategory {
  title: string;
  icon: string;
  items: string[];
  key: string;
}

export interface TripVibeData {
  name: string;
  value: number;
  color: string;
}

export interface PackingState {
  [key: string]: boolean;
}
