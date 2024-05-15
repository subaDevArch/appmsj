import axios from "./axios";

// Obtener todas las tareas
export const getAllTasksRequest = () => axios.get("/tasks");

// Obtener una tarea por su ID
export const getTaskRequest = (id) => axios.get(`/tasks/${id}`);

// Crear una nueva tarea
export const createTaskRequest = (task) => axios.post("/tasks", task);

// Actualizar una tarea existente por su ID
export const updateTaskRequest = (id, updatedTask) =>
  axios.put(`/tasks/${id}`, updatedTask);

// Eliminar una tarea por su ID
export const deleteTaskRequest = (id) => axios.delete(`/tasks/${id}`);
