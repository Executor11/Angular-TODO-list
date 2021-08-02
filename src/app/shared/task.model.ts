export interface Task {
  id: number;
  title: string;
  description?: string;
  date?: Date;
  isCompleted?: boolean;
  isPinned?: boolean;
}

export interface DateRange {
  day: number;
  month: number;
  year: number;
}
