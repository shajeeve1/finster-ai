import { useMutation, useQueryClient } from '@tanstack/react-query';
import { queryKeys } from './constants';
import { TaskFormData } from '@/components/AddTaskModal/AddTaskModal';
import { Task } from '@/types/tasks';

export const useCreateTask = () => {
  const queryClient = useQueryClient();

  const {
    mutate: addTask,
    isPending: isCreating,
    error: createTaskError,
  } = useMutation<Task, Error, TaskFormData>({
    mutationFn: async (taskData) => {
      const response = await fetch('/api/tasks', {
        method: 'POST',
        body: JSON.stringify(taskData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to create task');
      }

      return result.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKeys.getAllTasks] });
    },
  });

  return {
    addTask,
    isCreating,
    createTaskError,
  };
};
