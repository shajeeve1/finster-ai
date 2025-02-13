import { useMutation, useQueryClient } from '@tanstack/react-query';
import { queryKeys } from './constants';

export const useDeleteTask = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending, error } = useMutation({
    mutationFn: async (id: string) => {
      const response = await fetch(`/api/tasks/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete task');
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKeys.getAllTasks] });
    },
  });

  return {
    deleteTask: mutate,
    deleteTaskPending: isPending,
    deleteTaskError: error,
  };
};
