import fs from 'fs/promises';
import path from 'path';
import { Task } from '../types/tasks';

const TASKS_FILE = path.join(process.cwd(), 'src', 'db', 'tasks.json');

export async function readTasks(): Promise<Task[]> {
  try {
    await fs.mkdir(path.dirname(TASKS_FILE), { recursive: true });

    try {
      const content = await fs.readFile(TASKS_FILE, 'utf8');
      return JSON.parse(content);
    } catch (error) {
      await writeTasks([]);
      return [];
    }
  } catch (error) {
    console.error('Error reading tasks:', error);
    throw new Error('Failed to read tasks');
  }
}

export async function writeTasks(tasks: Task[]): Promise<void> {
  try {
    await fs.writeFile(TASKS_FILE, JSON.stringify(tasks, null, 2));
  } catch (error) {
    console.error('Error writing tasks:', error);
    throw new Error('Failed to write tasks');
  }
}
