<script setup>
import { ref, computed, onMounted } from 'vue'
import TaskTable from './components/TaskTable.vue'
import TaskChart from './components/TaskChart.vue'
import { fetchTodos, simulateError, updateTodoStatus } from './services/todoService'
import './styles/App.css'

const tasks = ref([])
const error = ref('')
const filter = ref('all')
const isLoading = ref(false)

const filteredTasks = computed(() => {
  if (filter.value === 'completed') return tasks.value.filter(t => t.completed)
  if (filter.value === 'pending') return tasks.value.filter(t => !t.completed)
  return tasks.value
})

const loadTasks = async () => {
  isLoading.value = true
  error.value = ''
  try {
    tasks.value = await fetchTodos()
  } catch (err) {
    error.value = err.message
    tasks.value = []
  } finally {
    isLoading.value = false
  }
}

const handleSimulateError = () => {
  try {
    simulateError()
  } catch (err) {
    error.value = err.message
    tasks.value = []
  }
}

const handleUpdateTask = async (taskId, completed) => {
  try {
    const updatedTask = await updateTodoStatus(taskId, completed)
    const index = tasks.value.findIndex(t => t.id === taskId)
    if (index !== -1) {
      tasks.value[index] = updatedTask
    }
  } catch (err) {
    error.value = 'Error al actualizar la tarea'
  }
}

onMounted(loadTasks)
</script>

<template>
  <div>
    <h2>Lista de Tareas</h2>
    <div class="controls">
      <select v-model="filter">
        <option value="all">Todas</option>
        <option value="completed">Completadas</option>
        <option value="pending">Pendientes</option>
      </select>
      
      <div class="button-group">
        <button @click="handleSimulateError" class="error-btn">Simular Error</button>
        <button @click="loadTasks" class="recover-btn">Recuperar Datos</button>
      </div>
    </div>

    <div class="content-container">
      <div class="table-section">
        <div v-if="error" class="error-message">{{ error }}</div>
        <div v-else-if="isLoading" class="loading-message">Cargando datos...</div>
        <TaskTable v-else :tasks="filteredTasks" @updateTask="handleUpdateTask" />
      </div>
      
      <div class="chart-section">
        <h3>Resumen en gráfico</h3>
        <div v-if="error" class="error-message">{{ error }}</div>
        <div v-else-if="isLoading" class="loading-message">Cargando gráfico...</div>
        <TaskChart v-else :tasks="filteredTasks" />
      </div>
    </div>
  </div>
</template>
