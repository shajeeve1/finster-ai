import React from 'react';
import { Typography, IconButton, Card, Box } from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';
import { useDraggable } from '@dnd-kit/core';
import type { Task } from '@/types/tasks';
import { useDeleteTask } from '@/hooks/queries/tasks';

interface TaskItemProps {
  task: Task;
}

export const TaskItem = ({ task }: TaskItemProps) => {
  const { deleteTask } = useDeleteTask();
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
  });

  return (
    <Card
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      sx={{
        p: 2,
        mb: 2,
        minHeight: 100,
        cursor: 'grab',
        touchAction: 'auto',
        transform:
          transform && `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }}
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box>
          <Typography variant="body1" fontWeight="bold" mb={1}>
            {task.title}
          </Typography>
          <Typography variant="body2">{task.description}</Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <IconButton
            onClick={() => deleteTask(task.id)}
            size="small"
            color="error"
            aria-label={`Delete ${task.title}`}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
};
