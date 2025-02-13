'use client';
import React, { useState } from 'react';
import { Typography, Button, Box, styled } from '@mui/material';
import { useGetAllTasks } from '../../../hooks/queries/tasks/useGetAllTasks';
import { TasksBoard } from '../../../components/TasksBoard/TasksBoard';
import { StatsBoard } from '../../../components/StatsBoard/StatsBoard';
import { AddTaskModal, TaskFormData } from '../../../components/AddTaskModal/AddTaskModal';
import { useCreateTask } from '../../../hooks/queries/tasks/useCreateTask';

const DashboardContainer = styled('div')(({ theme }) => ({
  padding: theme.spacing(4),
}));

export default function DashboardPage() {
  const { getAllTasksData, getAllTasksError, getAllTasksLoading } =
    useGetAllTasks();

  const { addTask, isCreating } = useCreateTask();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAddTask = (taskData: TaskFormData) => {
    addTask(taskData);
    handleClose();
  };

  if (getAllTasksLoading) {
    return <div>Loading...</div>;
  }

  if (getAllTasksError) {
    return <div>Error loading tasks</div>;
  }

  const tasks = getAllTasksData?.data ?? [];

  return (
    <DashboardContainer role="main">
      <Typography variant="h2" align="center" gutterBottom mb={6}>
        Task Manager
      </Typography>

      <Box display="flex" flexDirection="column" gap={6}>
        <Box display="flex" justifyContent="flex-start">
          <Button
            onClick={handleOpen}
            variant="contained"
            color="primary"
            size="large"
          >
            Add New Task
          </Button>
        </Box>
        <Box>
          <StatsBoard tasks={tasks} />
        </Box>

        <Box>
          <TasksBoard tasks={tasks} />
        </Box>
      </Box>

      <AddTaskModal
        open={open}
        onClose={handleClose}
        onAddTask={handleAddTask}
        isCreating={isCreating}
      />
    </DashboardContainer>
  );
}
