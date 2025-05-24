# Gestión de Tareas

## Descripción
Esta aplicación es un sistema de gestión de tareas desarrollado con Vue.js que permite a los usuarios visualizar, filtrar y actualizar el estado de sus tareas. La aplicación incluye una tabla de tareas y una visualización gráfica del progreso.

## Ver en Vivo
🔗 [Ver la aplicación en vivo]()

## Características Principales
- Visualización de tareas en formato tabla
- Filtrado de tareas (Todas, Completadas, Pendientes)
- Gráfico de resumen del progreso de las tareas
- Simulación de errores para pruebas
- Recuperación de datos

## Instalación

1. Clonar el repositorio:
```bash
git clone 
https://github.com/FelipeForero21/Test-prototypes---Vue-Firebase.git

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

## Estructura del Proyecto
```
Block1_VueFrontend/
├── src/
│   ├── components/
│   │   ├── TaskTable.vue    # Componente para mostrar la tabla de tareas
│   │   └── TaskChart.vue    # Componente para mostrar el gráfico
│   │
│   ├── services/
│   │   └── todoService.ts   # Servicios para manejo de tareas
│   │
│   ├── styles/
│   │   └── App.css         # Estilos globales
│   │
│   ├── App.vue             # Componente principal
│   └── main.ts             # Punto de entrada de la aplicación
├── public/
│   └── vite.svg            # Ícono de la aplicación
└── index.html              # Archivo HTML principal
```

## Tecnologías Utilizadas
- Vue.js 3
- TypeScript
- Vite
- CSS3

## Características Técnicas
- Uso de Composition API de Vue 3
- Sistema de manejo de errores
- Estado reactivo con `ref` y `computed`
- Componentes modulares y reutilizables
- Estilos CSS modulares

## Uso
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
