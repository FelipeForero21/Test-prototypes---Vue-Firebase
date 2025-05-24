<script setup>
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { Bar } from 'vue-chartjs'
import { computed, watch } from 'vue'

ChartJS.register(BarElement, CategoryScale, LinearScale)

const props = defineProps({
  tasks: Array
})

const completedCount = computed(() => props.tasks.filter(t => t.completed).length)
const pendingCount = computed(() => props.tasks.filter(t => !t.completed).length)

const chartData = computed(() => ({
  labels: ['Completadas', 'Pendientes'],
  datasets: [
    {
      label: 'Tareas',
      data: [completedCount.value, pendingCount.value],
      backgroundColor: ['#4caf50', '#f44336']
    }
  ]
}))

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
}
</script>

<template>
  <div style="height: 300px">
    <Bar :data="chartData" :options="chartOptions" />
  </div>
</template>
