<script setup lang="ts">
import type { Task } from '../types/Task';

const props = defineProps<{
  tasks: Task[];
}>();

const emit = defineEmits<{
  (e: 'updateTask', taskId: number, completed: boolean): void;
}>();

const handleStatusChange = (taskId: number, completed: boolean) => {
  emit('updateTask', taskId, completed);
};
</script>

<template>
  <table border="1" cellpadding="8" cellspacing="0" style="width: 100%">
    <thead>
      <tr>
        <th>Título</th>
        <th>¿Completada?</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="task in tasks" :key="task.id">
        <td>{{ task.title }}</td>
        <td>
          <input 
            type="checkbox" 
            :checked="task.completed" 
            @change="handleStatusChange(task.id, !task.completed)"
          />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  text-align: left;
  padding: 8px;
}

th {
  background-color: #f5f5f5;
}

tr:nth-child(even) {
  background-color: #f9f9f9;
}

input[type="checkbox"] {
  width: 18px;
  height: 18px;
  cursor: pointer;
}
</style>
