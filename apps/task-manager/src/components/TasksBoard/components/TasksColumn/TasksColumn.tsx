import { useDroppable } from '@dnd-kit/core';
import type { Task } from '@/types/tasks';
import { TaskItem } from '../TaskItem/';
import { ColumnTitle, DroppableArea, StyledColumn } from './styles';

interface TasksColumnProps {
  name: string;
  items: Task[];
  handleUpdateStatus: (payload: { taskId: string; status: string }) => void;
}

export const TasksColumn = ({ name, items }: TasksColumnProps) => {
  const { setNodeRef } = useDroppable({ id: name });

  return (
    <StyledColumn>
      <ColumnTitle variant="h2">{name}</ColumnTitle>
      <DroppableArea ref={setNodeRef}>
        {items.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </DroppableArea>
    </StyledColumn>
  );
};
