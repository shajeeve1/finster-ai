import { useMutation, useQueryClient } from '@tanstack/react-query';
import { queryKeys } from './constants';

interface UpdateTaskPayload {
  taskId: string;
  status: string;
}

export const useUpdateTask = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending, error } = useMutation({
    mutationFn: async ({ taskId, status }: UpdateTaskPayload) => {
      const response = await fetch(`/api/tasks/${taskId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      });

      if (!response.ok) {
        throw new Error('Failed to update task status');
      }

      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKeys.getAllTasks] });
    },
  });

  return {
    updateTask: mutate,
    updateTaskPending: isPending,
    updateTaskError: error,
  };
};
