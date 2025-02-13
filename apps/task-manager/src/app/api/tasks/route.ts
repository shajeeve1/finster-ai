import { readTasks, writeTasks } from '@/db/tasks';
import type { Task } from '@/types/tasks';
import { NextResponse } from 'next/server';

export async function GET(): Promise<NextResponse> {
  try {
    const tasks: Task[] = await readTasks();
    return NextResponse.json(
      {
        success: true,
        data: tasks,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('ERROR in GET request to /api/tasks', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch all tasks',
      },
      { status: 500 }
    );
  }
}

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const body = await request.json();
    const { title, description } = body;

    const newTask: Task = {
      id: Date.now().toString(),
      title: title,
      description: description,
      status: 'Incomplete',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const tasks: Task[] = await readTasks();
    await writeTasks([...tasks, newTask]);

    return NextResponse.json(
      {
        success: true,
        data: newTask,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error in POST request /api/tasks:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to create a new task',
      },
      { status: 500 }
    );
  }
}
