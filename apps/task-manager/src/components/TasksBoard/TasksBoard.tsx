import { Task } from '../../types/tasks';
import {
  DndContext,
  MouseSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import { Box } from '@mui/material';
import { TasksColumn } from './components/TasksColumn/';
import { useUpdateTask } from '../../hooks/queries/tasks/useUpdateTask';
import { TasksContainer } from './styles';

interface TaskBoardProps {
  tasks: Task[];
}

export const TasksBoard = ({ tasks }: TaskBoardProps) => {
  const { updateTask } = useUpdateTask();

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    const taskId = active.id.toString();
    const newStatus = over.id.toString();

    if (newStatus !== active.id) {
      updateTask({ taskId, status: newStatus });
    }
  };

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 200,
        tolerance: 5,
      },
    }),
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  return (
    <Box>
      <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
        <TasksContainer>
          <TasksColumn
            name="Incomplete"
            items={tasks.filter((task) => task.status === 'Incomplete')}
            handleUpdateStatus={updateTask}
          />
          <TasksColumn
            name="In Progress"
            items={tasks.filter((task) => task.status === 'In Progress')}
            handleUpdateStatus={updateTask}
          />
          <TasksColumn
            name="Completed"
            items={tasks.filter((task) => task.status === 'Completed')}
            handleUpdateStatus={updateTask}
          />
        </TasksContainer>
      </DndContext>
    </Box>
  );
};
