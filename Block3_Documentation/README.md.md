# Documentación y Buenas Prácticas

## 1. Historias de Usuario

### Historia 1: Visualización de Tareas
**Como** usuario del sistema de gestión de tareas  
**Quiero** ver una lista de todas mis tareas en formato tabla  
**Para** tener una visión general de mis actividades pendientes y completadas

**Criterios de Aceptación:**
- La tabla debe mostrar todas las tareas disponibles
- Cada tarea debe mostrar su título y estado (completada/pendiente)
- Las tareas completadas deben estar marcadas visualmente
- La tabla debe ser responsiva y fácil de leer

### Historia 2: Filtrado de Tareas
**Como** usuario del sistema  
**Quiero** poder filtrar las tareas por su estado  
**Para** enfocarme en las tareas que necesito atender

**Criterios de Aceptación:**
- Debe existir un selector para filtrar por estado
- Las opciones de filtro deben incluir: Todas, Completadas, Pendientes
- El gráfico de resumen debe actualizarse según el filtro seleccionado
- La tabla debe mostrar solo las tareas que coincidan con el filtro

### Historia 3: Gestión de Errores
**Como** usuario del sistema  
**Quiero** poder recuperar los datos en caso de error  
**Para** no perder información importante

**Criterios de Aceptación:**
- Debe existir un botón para simular errores
- Debe existir un botón para recuperar datos
- Los errores deben mostrarse de forma clara al usuario
- La recuperación debe restaurar todos los datos iniciales correctamente

## 2. Diagrama de Flujo - Función de Filtrado

https://excalidraw.com/#json=dg7lI4evUDwqdK2y68SbE,N3NTMplSByNQ_FBnWUt9RA
![Diagrama de Flujo](https://github.com/user-attachments/assets/7df41f3a-b2f2-42be-a159-7b514ec91e34)

## 3. Architecture Decision Record (ADR)

### ADR 1: Selección de Vue 3 y JSONPlaceholder


Se necesitaba desarrollar un prototipo rápido de un sistema de gestión de tareas.

**Decisión:**
Se eligió Vue 3 con TypeScript y JSONPlaceholder como API de prueba por las siguientes razones:

1. **Vue 3:**
   - Composition API que mejora la reutilización de código
   - Soporte para TypeScript
   - Excelente documentación.

2. **JSONPlaceholder:**
   - API REST gratuita y pública
   - No requiere autenticación
   - Respuestas rápidas y confiables
   - Perfecta para prototipos y pruebas
   - No requiere configuración de backend

**Implementación:**
La decisión se implementó utilizando:
- Vue 3 con Composition API
- TypeScript para tipo seguro
- JSONPlaceholder para datos de prueba, en este caso listas.
