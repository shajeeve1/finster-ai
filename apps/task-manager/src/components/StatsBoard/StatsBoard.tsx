import AssignmentIcon from '@mui/icons-material/Assignment';
import PendingIcon from '@mui/icons-material/Pending';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import type { Task } from '@/types/tasks';
import { IconWrapper, StatBox, StatsContainer } from './styles';
import { Typography } from '@mui/material';

interface TaskStatsProps {
  tasks: Task[];
}

export const StatsBoard = ({ tasks }: TaskStatsProps) => {
  const stats = [
    {
      title: 'Incomplete',
      value: tasks.filter((task) => task.status === 'Incomplete').length,
      icon: <AssignmentIcon fontSize="large" />,
      color: '#2196f3',
      bgColor: '#14222F',
    },
    {
      title: 'In Progress',
      value: tasks.filter((task) => task.status === 'In Progress').length,
      icon: <PendingIcon fontSize="large" />,
      color: '#ff9800',
      bgColor: '#312314',
    },
    {
      title: 'Completed',
      value: tasks.filter((task) => task.status === 'Completed').length,
      icon: <CheckCircleIcon fontSize="large" />,
      color: '#4caf50',
      bgColor: '#19261A',
    },
  ];

  return (
    <StatsContainer role="region" aria-label="Task Statistics">
      {stats.map(({ title, value, icon, color, bgColor }) => (
        <StatBox color={color} bgcolor={bgColor} key={title} tabIndex={0}>
          <IconWrapper>{icon}</IconWrapper>
          <Typography variant="h4" sx={{ color }} mb={2}>
            {value}
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 500 }}>
            {title}
          </Typography>
        </StatBox>
      ))}
    </StatsContainer>
  );
};
