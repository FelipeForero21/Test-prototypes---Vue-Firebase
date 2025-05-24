# Prototipos de Prueba - Vue Firebase

Este repositorio contiene diferentes bloques de desarrollo que forman parte de un sistema completo de gestión de tareas.

## Estructura del Repositorio

### Block1_VueFrontend
Este es el bloque principal y ejecutable del proyecto. Contiene la aplicación frontend desarrollada con Vue.js que permite la gestión de tareas.

#### Características Principales
- Visualización de tareas en formato tabla
- Filtrado de tareas (Todas, Completadas, Pendientes)
- Gráfico de resumen del progreso de las tareas
- Simulación de errores para pruebas
- Recuperación de datos

#### Tecnologías Utilizadas
- Vue.js 3
- TypeScript
- Vite
- CSS3

#### Instalación y Ejecución
1. Navegar al directorio del proyecto:
```bash
cd Block1_VueFrontend
```

2. Instalar dependencias:
```bash
npm install
```

3. Iniciar el servidor de desarrollo:
```bash
npm run dev
```

### Block2_SoporteTecnico
Este bloque contiene la documentación y recursos relacionados con el soporte técnico del sistema.

### Block3_Documentation
Contiene la documentación detallada del proyecto, incluyendo especificaciones técnicas y HU.

### Block4_MariaDb_Firestorage
Simulación de la capa de almacenamiento utilizando MariaDB y Firebase Storage.

## Características Técnicas Generales
- Uso de Composition API de Vue 3
- Sistema de manejo de errores
- Estado reactivo con `ref` y `computed`
- Componentes modulares y reutilizables
- Estilos CSS modulares

## Uso del Sistema
1. La aplicación se inicia automáticamente mostrando todas las tareas
2. Utiliza el selector en la parte superior para filtrar las tareas:
   - "Todas": Muestra todas las tareas
   - "Completadas": Muestra solo las tareas completadas
   - "Pendientes": Muestra solo las tareas pendientes
3. El gráfico se actualiza automáticamente según el filtro seleccionado
4. Puedes simular errores usando el botón "Simular Error"
5. En caso de error, usa el botón "Recuperar Datos" para restaurar la información

## Autor
Luis Felipe Forero Paez