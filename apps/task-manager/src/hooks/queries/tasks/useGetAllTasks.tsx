import { ApiResponse, Task } from '../../../types/tasks';

import { useQuery } from '@tanstack/react-query';
import { queryKeys } from './constants';
import Error from 'next/error';

export const useGetAllTasks = () => {
  const { data, isLoading, error } = useQuery<ApiResponse<Task[]>, Error>({
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
