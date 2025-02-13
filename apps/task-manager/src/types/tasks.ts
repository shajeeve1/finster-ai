export type TaskStatus = 'Incomplete' | 'In Progress' | 'Completed';

export interface TaskCreate {
  title: string;
  description: string;
}

export interface TaskUpdate {
  status: TaskStatus;
}

export interface Task {
  id: string;
  title: string;
  status: TaskStatus;
  createdAt: string;
  updatedAt?: string;
  description?: string;
}

export interface ApiResponse<T> {
  success: true;
  data: T;
}
