import axios from 'axios';
import type { Task } from '../types/Task';

export async function fetchTodos(): Promise<Task[]> {
  try {
    const response = await axios.get<Task[]>('https://jsonplaceholder.typicode.com/todos');
    return response.data.slice(0, 10);
  } catch (error) {
    throw new Error('No se pudieron cargar las tareas.');
  }
}

export async function updateTodoStatus(taskId: number, completed: boolean): Promise<Task> {
  try {
    const response = await axios.patch<Task>(`https://jsonplaceholder.typicode.com/todos/${taskId}`, {
      completed
    });
    return response.data;
  } catch (error) {
    throw new Error('No se pudo actualizar la tarea.');
  }
}

export function simulateError(): never {
  throw new Error('No se pudieron cargar los datos.');
}
