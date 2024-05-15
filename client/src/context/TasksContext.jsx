import React, { useState, createContext, useContext, useEffect } from "react";
import {
  createTaskRequest,
  getTasksRequest,
  deleteTaskRequest,
  getTaskRequest,
  updateTaskRequest
} from "../api/tasks";

export const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("useTasks must be used within a TaskProvider");
  }
  return context;
};

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    try {
      const res = await getTasksRequest();
      setTasks(res.data);
    } catch (error) {
      console.error("Error al obtener las tareas:", error);
    }
  };

  const createTask = async (task) => {
    try {
      const res = await createTaskRequest(task);
      console.log("Tarea creada:", res.data);
      getTasks(); // Actualizar la lista de tareas después de crear una nueva tarea
    } catch (error) {
      console.error("Error al crear la tarea:", error);
    }
  };

  const deleteTask = async (id) => {
    try {
      const res = await deleteTaskRequest(id);
      if (res.status === 204) {
        // Filtrar y actualizar el estado de tareas si es necesario
      }
    } catch (error) {
      console.error("Error al eliminar la tarea:", error);
    }
  };

  const getTask = async (id) => {
    try {
      const res = await getTaskRequest(id);
      return res.data;
    } catch (error) {
      console.error("Error al obtener la tarea por ID:", error);
    }
  };

  const updateTask = async (id, task) => {
    try {
      await updateTaskRequest(id, task);
      getTasks(); // Actualizar la lista de tareas después de actualizar una tarea
    } catch (error) {
      console.error("Error al actualizar la tarea:", error);
    }
  };

  // Cargar las tareas inicialmente al montar el componente
  useEffect(() => {
    getTasks();
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
        getTask,
        updateTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
