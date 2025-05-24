import { initializeApp } from 'firebase/app';
import { 
    getFirestore, 
    collection, 
    query, 
    where, 
    orderBy, 
    onSnapshot,
    getDocs 
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBju9AY54x7afP6u10x_qoUF28StX_VJKg",
    authDomain: "authentication-27099.firebaseapp.com",
    projectId: "authentication-27099",
    storageBucket: "authentication-27099.appspot.com",
    messagingSenderId: "311183050218",
  };
  

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const getPendingTasks = async (userId) => {
    const tasksRef = collection(db, `users/${userId}/tasks`);
    const q = query(
        tasksRef,
        where('completed', '==', false),
        orderBy('dueDate')
    );

    try {
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
    } catch (error) {
        console.error('Error al obtener tareas:', error);
        throw error;
    }
};

const setupTasksListener = (userId, callback) => {
    const tasksRef = collection(db, `users/${userId}/tasks`);
    const q = query(
        tasksRef,
        where('completed', '==', false),
        orderBy('dueDate')
    );

    const unsubscribe = onSnapshot(q, 
        (snapshot) => {
            const tasks = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            callback(tasks);
        },
        (error) => {
            console.error('Error en el listener:', error);
        }
    );

    return unsubscribe; 
};

// Ejemplo de uso:
const userId = 'felipeForero21';

// Obtener tareas pendientes una vez
getPendingTasks(userId)
    .then(tasks => console.log('Tareas pendientes:', tasks))
    .catch(error => console.error('Error:', error));

// Configurar listener en tiempo real
const unsubscribe = setupTasksListener(userId, (tasks) => {
    console.log('Tareas actualizadas:', tasks);
});

unsubscribe();

/*
Para que estas consultas funcionen, se necesita crear un índice compuesto en Firestore:

Colección: users/{userId}/tasks
Campos a indexar:
1. completed (Ascendente)
2. dueDate (Ascendente)

Este índice es requerido porque estamos usando una consulta compuesta
(where + orderBy) en Firestore.
*/
