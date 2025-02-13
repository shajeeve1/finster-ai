import { render, screen } from '@testing-library/react';
import { TasksBoard } from '.';
import { Task } from '@/types/tasks';

const { getByText, getByRole } = screen;

jest.mock('@/hooks/queries/tasks', () => ({
  useDeleteTask: () => ({
    deleteTask: jest.fn(),
  }),
  useUpdateTask: () => ({
    updateTask: jest.fn(),
  }),
}));

const tasks: Task[] = [
  {
    id: '2',
    title: 'Review Frontend Code Changes',
    description:
      'Conduct a comprehensive review of recent frontend code modifications, focusing on React components, state management, and performance optimizations.',
    status: 'In Progress',
    createdAt: '2024-02-11T09:00:00.000Z',
    updatedAt: '2025-02-13T01:52:06.309Z',
  },
  {
    id: '3',
    title: 'Update API Documentation',
    description:
      'Revise and update the existing API documentation to reflect the latest endpoint changes, including new parameters and response structures.',
    status: 'Incomplete',
    createdAt: '2024-02-09T14:20:00.000Z',
    updatedAt: '2025-02-13T01:32:09.303Z',
  },
];

describe('TasksBoard', () => {
  test('given a set of tasks, renders the tasksboard correctly', () => {
    render(<TasksBoard tasks={tasks} />);

    // Test for task column headers
    expect(
      getByRole('heading', { name: 'Incomplete', level: 2 })
    ).toBeInTheDocument();
    expect(
      getByRole('heading', { name: 'In Progress', level: 2 })
    ).toBeInTheDocument();
    expect(
      getByRole('heading', { name: 'Complete', level: 2 })
    ).toBeInTheDocument();

    // Test the task items
    expect(getByText('Review Frontend Code Changes')).toBeInTheDocument();
    expect(
      getByText(
        'Conduct a comprehensive review of recent frontend code modifications, focusing on React components, state management, and performance optimizations.'
      )
    ).toBeInTheDocument();

    expect(getByText('Update API Documentation')).toBeInTheDocument();
    expect(
      getByText(
        'Revise and update the existing API documentation to reflect the latest endpoint changes, including new parameters and response structures.'
      )
    ).toBeInTheDocument();

    expect(
      getByRole('button', { name: `Delete Review Frontend Code Changes` })
    ).toBeVisible();
    expect(
      getByRole('button', { name: `Delete Update API Documentation` })
    ).toBeVisible();
  });
});
