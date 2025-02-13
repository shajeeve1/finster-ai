'use server';
import { revalidatePath } from 'next/cache';
import { Task, TaskCreate, TaskUpdate } from '../../types/tasks';
import { readTasks, writeTasks } from '../../db/tasks';

export async function createTask(data: TaskCreate) {
  try {
    const tasks: Task[] = await readTasks();

    const newTask: Task = {
      id: Date.now().toString(),
      title: data.title.trim(),
      description: data.description.trim(),
      status: 'Incomplete',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    tasks.push(newTask);
    await writeTasks(tasks);

    revalidatePath('/tasks');
    return { data: newTask, success: true };
  } catch (error) {
    console.error('Error creating task:', error);
    return { error: 'Failed to create task', success: false };
  }
}

export async function updateTask(id: string, data: TaskUpdate) {
  try {
    const tasks: Task[] = await readTasks();
    const taskIndex = tasks.findIndex((task) => task.id === id);

    if (taskIndex === -1) {
      return { error: 'Task not found', success: false };
    }

    const updatedTask = {
      ...tasks[taskIndex],
      ...data,
      updatedAt: new Date().toISOString(),
    };

    tasks[taskIndex] = updatedTask;
    await writeTasks(tasks);

    revalidatePath('/tasks');
    return { data: updatedTask, success: true };
  } catch (error) {
    console.error('Error updating task:', error);
    return { error: 'Failed to update task', success: false };
  }
}

export async function getAllTasks() {
  try {
    const tasks = await readTasks();
    return { data: tasks, success: true };
  } catch (error) {
    console.error('Error fetching tasks:', error);
    return { error: 'Failed to fetch tasks', success: false };
  }
}
