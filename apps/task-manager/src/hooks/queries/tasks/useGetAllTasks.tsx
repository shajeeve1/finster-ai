import type { Task, ApiResponse } from '@/types/tasks';

import { useQuery } from '@tanstack/react-query';
import { queryKeys } from './constants';

export const useGetAllTasks = () => {
  const { data, isLoading, error } = useQuery<ApiResponse<Task[]>>({
    queryKey: [queryKeys.getAllTasks],
    queryFn: async () => {
      const response = await fetch('/api/tasks');
      return response.json();
    },
  });

  return {
    getAllTasksData: data,
    getAllTasksLoading: isLoading,
    getAllTasksError: error,
  };
};
