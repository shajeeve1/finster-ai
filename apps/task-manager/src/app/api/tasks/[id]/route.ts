import { readTasks, writeTasks } from '@/db/tasks';
import { Task } from '@/types/tasks';
import { NextResponse } from 'next/server';

export async function PUT(
  request: Request,
  context: { params: { id: string } }
): Promise<NextResponse> {
  try {
    const { id } = context.params;

    const { status } = await request.json();
    const tasks: Task[] = await readTasks();
    const task = tasks.find((t) => t.id === id);

    if (!task) {
      return NextResponse.json(
        { success: false, error: 'Task not found' },
        { status: 404 }
      );
    }

    task.status = status;
    task.updatedAt = new Date().toISOString();
    await writeTasks(tasks);

    return NextResponse.json(
      {
        success: true,
        data: task,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in PUT request to /api/tasks/[id]:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to update task',
      },
      { status: 500 }
    );
  }
}

export async function DELETE(
  _request: Request,
  context: { params: { id: string } }
): Promise<NextResponse> {
  try {
    const { id } = context.params;
    const tasks: Task[] = await readTasks();
    const taskIndex = tasks.findIndex((task) => task.id === id);

    if (taskIndex === -1) {
      return NextResponse.json(
        {
          success: false,
          error: 'Task not found',
        },
        { status: 404 }
      );
    }

    tasks.splice(taskIndex, 1);
    await writeTasks(tasks);

    return NextResponse.json(
      {
        success: true,
        message: 'Task deleted',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in DELETE request to /api/tasks/[id]:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'Failed to delete task',
      },
      { status: 500 }
    );
  }
}
